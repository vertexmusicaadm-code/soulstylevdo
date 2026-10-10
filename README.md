# Soul Style — vídeo Meta Ads "A camiseta que prega"

Implementação do roteiro em [`PROMPT_VIDEO_SOULSTYLE.md`](PROMPT_VIDEO_SOULSTYLE.md): o vídeo é uma página HTML
(`video.html`) com a linha do tempo inteira, renderizada quadro a quadro a 30 fps.

## Renderizar

```
npm install
npm run render            # vídeo completo
npm run render -- --from 10 --to 15   # só um trecho, para teste rápido
```

Saída em `out/`: `soulstyle_meta_9x16_v1.mp4`, `soulstyle_meta_4x5_v1.mp4` (recorte y 285–1635) e `soulstyle_meta_v1.srt`.
O render imprime a duração e o loudness medido (alvo −14 LUFS, pico −1 dBTP).

Prévia no navegador: abrir `video.html` (toca em loop) ou `video.html?t=12.5` (congela num instante).

## Mídia que entra em `media/`

| Arquivo | O quê | Sem ele |
|---|---|---|
| `voice.wav`/`.mp3` | narração (§6) | vídeo sai sem voz |
| `music.wav`/`.mp3` | trilha (§9) | sem trilha |
| `ia-1` … `ia-5` (`.mp4`, `.mov`…) | cenas de IA (§8) | placeholder escuro com o nome da cena |

Com voz e trilha presentes, a mixagem segue o §9: voz com corte < 80 Hz e −16 LUFS, trilha com ducking sob a voz, master −14 LUFS.

## Depois de gerar a voz

Os tempos em `timeline.js` vêm da decupagem (§2). Com a narração pronta, extrair os timestamps por palavra
(ex.: Whisper com `word_timestamps`) e ajustar em `timeline.js`:
- `cuts` — cortes nas palavras "camiseta", "ônibus", "faculdade", "mercado";
- `captions` — início/fim de cada bloco de legenda (as palavras dentro do bloco se distribuem sozinhas);
- `voiceOffset` / `musicOffset` — alinhar a narração e o drop da trilha (`cuts.drop`, 14,9 s).
