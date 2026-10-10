// Renderiza o vídeo: video.html → frames (Playwright) → MP4 + áudio mixado + SRT + recorte 4:5.
// Uso: npm run render   (opções: --from 0 --to 37 para renderizar só um trecho de teste)
import { chromium } from 'playwright';
import { spawn, spawnSync, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(root, 'out'), cache = path.join(out, 'cache'), media = path.join(root, 'media');
mkdirSync(cache, { recursive: true });
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? +process.argv[i + 1] : d; };
const FPS = 30;
const ff = (...a) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...a], { stdio: 'inherit' });
const find = (name) => readdirSync(media).map((f) => path.join(media, f)).find((f) => path.parse(f).name === name);

// 1. Cenas de IA → webm (o Chromium do Playwright não decodifica H.264)
const ia = [];
for (let n = 1; n <= 5; n++) {
  const src = find(`ia-${n}`);
  if (!src) continue;
  ff('-i', src, '-an', '-vf', 'scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30',
     '-c:v', 'libvpx-vp9', '-crf', '24', '-b:v', '0', '-deadline', 'realtime', '-cpu-used', '8', path.join(cache, `ia${n}.webm`));
  ia.push(`ia${n}`);
}
console.log('cenas de IA:', ia.length ? ia.join(', ') : 'nenhuma (placeholders)');

// 2. Frames
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(path.join(root, 'video.html')).href + `?render=1&ia=${ia.join(',')}`);
await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((i) => i.decode())); });
const TL = await page.evaluate(() => window.TL);
const from = arg('--from', 0), to = Math.min(arg('--to', TL.duration), TL.duration);
const frames = Math.round((to - from) * FPS);

const videoOnly = path.join(cache, 'video.mp4');
const enc = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', `${FPS}`, '-i', '-',
  '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-r', `${FPS}`, '-b:v', '12M', '-maxrate', '15M', '-bufsize', '24M', videoOnly],
  { stdio: ['pipe', 'inherit', 'inherit'] });
const encDone = new Promise((r, j) => enc.on('close', (c) => (c ? j(new Error('ffmpeg ' + c)) : r())));
const stage = page.locator('#stage');
for (let f = 0; f < frames; f++) {
  await page.evaluate((t) => window.seek(t), from + f / FPS);
  const buf = await stage.screenshot({ type: 'jpeg', quality: 95 });
  if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once('drain', r));
  if (f % 150 === 0) console.log(`frame ${f}/${frames}`);
}
enc.stdin.end();
await encDone;
await browser.close();

// 3. Áudio: voz (−16 LUFS, corte <80 Hz) + trilha com ducking, master −14 LUFS / −1 dBTP
const voice = find('voice'), music = find('music'), dur = to - from;
const inputs = [], chains = [];
const fmt = 'aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo';
if (voice) {
  chains.push(`[${inputs.length}:a]${fmt},highpass=f=80,acompressor=threshold=-18dB:ratio=3:attack=5:release=120,` +
    `loudnorm=I=-16:TP=-1.5,adelay=${Math.max(0, TL.voiceOffset - from) * 1000}:all=1[v]`);
  inputs.push(['-i', voice]);
}
if (music) {
  chains.push(`[${inputs.length}:a]${fmt},volume=-10dB,afade=t=out:st=${Math.max(0, dur - 1.5)}:d=1.5[m]`);
  inputs.push(['-ss', `${TL.musicOffset + from}`, '-i', music]);
}
let mix;
if (voice && music) mix = '[v]asplit[v1][sc];[m][sc]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[md];[v1][md]amix=inputs=2:normalize=0';
else if (voice) mix = '[v]anull';
else if (music) mix = '[m]anull';
const mixWav = path.join(cache, 'mix.wav');
if (mix) ff(...inputs.flat(), '-filter_complex', `${chains.join(';')};${mix},apad,atrim=0:${dur},loudnorm=I=-14:TP=-1:LRA=11,aresample=48000[out]`,
  '-map', '[out]', '-ar', '48000', mixWav);
else ff('-f', 'lavfi', '-i', `anullsrc=r=48000:cl=stereo`, '-t', `${dur}`, mixWav);
console.log('áudio:', [voice && 'voz', music && 'trilha'].filter(Boolean).join(' + ') || 'mudo (faltam media/voice.* e media/music.*)');

// 4. Final 9:16, recorte 4:5 (y 285–1635) e SRT
const final = path.join(out, 'soulstyle_meta_9x16_v1.mp4');
ff('-i', videoOnly, '-i', mixWav, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2', '-shortest', '-movflags', '+faststart', final);
ff('-i', final, '-vf', 'crop=1080:1350:0:285', '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-b:v', '10M', '-maxrate', '15M', '-bufsize', '20M',
   '-c:a', 'copy', '-movflags', '+faststart', path.join(out, 'soulstyle_meta_4x5_v1.mp4'));

const ts = (s) => new Date(s * 1000).toISOString().slice(11, 23).replace('.', ',');
writeFileSync(path.join(out, 'soulstyle_meta_v1.srt'), TL.captions.map(([a, b, text], i) => `${i + 1}\n${ts(a)} --> ${ts(b)}\n${text}\n`).join('\n'));

// 5. Checagem: duração e loudness
const probe = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', final]).toString().trim();
const loud = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', final, '-af', 'ebur128=peak=true', '-f', 'null', '-']).stderr.toString();
console.log(`pronto: ${final} (${(+probe).toFixed(2)} s)\n${loud.slice(loud.lastIndexOf('Summary:'))}`);
