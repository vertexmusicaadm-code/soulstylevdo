# Soul Style — Vídeo Meta Ads "A camiseta que prega"

Prompt de produção completo. Entregue este arquivo + a pasta `assets/` para quem vai programar o vídeo.
Tudo aqui é especificação: roteiro, voz, legenda, cores, cenas, música, CTA, formato e exportação.

---

## 0. Resumo

| Item | Definição |
|---|---|
| Objetivo | Gerar conversas no WhatsApp (campanha de Mensagens / Click-to-WhatsApp) |
| Botão do anúncio (Meta) | **Enviar mensagem** → WhatsApp |
| Duração | **37 s** (limite rígido: 45 s) |
| Formato | **9:16 — 1080×1920 — 30 fps — MP4 H.264 + AAC** |
| Narração | Voz IA masculina, pt-BR |
| Visual | Mockups reais das camisetas + cenas geradas por IA + tipografia animada |
| Tom | Provocativo pela **pergunta**, não pelo grito. Confronta, depois acolhe. |
| Oferta | Nenhuma. A venda acontece no WhatsApp. |
| Ideia central | *Tem gente que nunca vai abrir uma Bíblia. Mas vai ler a sua camiseta.* |

---

## 1. Roteiro (narração final)

Texto exato a ser narrado. Pausas marcadas com `/` (curta, ~0,3 s) e `//` (longa, ~0,6 s).

```
Tem gente que nunca vai abrir uma Bíblia. //
Mas vai ler a sua camiseta. //
No ônibus, / na faculdade, / na fila do mercado... / alguém sempre lê o que você veste. //
Então... / o que a sua roupa está dizendo hoje? //
A Soul Style nasceu pra isso: / camisetas que levam o evangelho pra rua, /
com um estilo que dá vontade de usar todo dia. //
Sem gritar. / Sem forçar. / A mensagem fala sozinha. //
Às vezes, uma camiseta começa a conversa. //
Toca em "Enviar mensagem" e chama a gente no WhatsApp. / A gente te ajuda a escolher a sua.
```

~89 palavras ≈ 35 s de fala + 2 s de tela final.

---

## 2. Decupagem cena a cena

Coordenadas em px no quadro 1080×1920. Tempos são alvo; **o tempo real vem do áudio gerado** (ver §6).

| # | Tempo | Narração | Visual | Texto na tela | Som |
|---|---|---|---|---|---|
| 1 | 0,0–2,8 | "Tem gente que nunca vai abrir uma Bíblia." | **IA-1**: macro de uma Bíblia fechada numa prateleira, poeira no feixe de luz, push-in lento. Escuro, frio. | Legenda | Grave sub + textura de relógio. **Sem música melódica ainda.** |
| 2 | 2,8–5,2 | "Mas vai ler a sua camiseta." | **Corte seco** na palavra "camiseta" → `mockup-01` (Jesus ama você) em tela cheia, punch-in de 108% → 100% em 6 frames. | Legenda, palavra **CAMISETA** com destaque rosa | Impacto (hit) exatamente no corte |
| 3 | 5,2–10,8 | "No ônibus, na faculdade, na fila do mercado... alguém sempre lê o que você veste." | 3 cortes rápidos (~1,6 s cada), um por lugar citado: **IA-2** ônibus, **IA-3** faculdade, **IA-4** fila do mercado. Cada corte cai na palavra do lugar. | Legenda | Whoosh curto em cada corte |
| 4 | 10,8–14,9 | "Então... o que a sua roupa está dizendo hoje?" | Fundo sólido `ink-950`. Tipografia gigante entra palavra por palavra, centralizada: **O QUE A SUA ROUPA / ESTÁ DIZENDO / HOJE?** — "DIZENDO" em rosa. Sem foto. | Só a tipografia (sem legenda, ela já é a legenda) | **Silêncio total de 0,4 s** antes de "Então". Riser curto até "hoje?". |
| 5 | 14,9–21,3 | "A Soul Style nasceu pra isso: camisetas que levam o evangelho pra rua, com um estilo que dá vontade de usar todo dia." | **Drop da música.** Ícone SS branco entra (fade + 2 px) sobre rosa, 0,6 s → sequência dos 3 mockups (`01` → `02` → `03`), ~1,8 s cada, zoom lento 100%→106%, transição *cut* no beat. | Legenda | Música entra cheia aqui |
| 6 | 21,3–25,4 | "Sem gritar. Sem forçar. A mensagem fala sozinha." | **IA-5**: rapaz de costas caminhando na calçada ao pôr do sol, câmera lenta, pessoas passando olham para as costas dele. | Legenda, uma frase por vez | Música mais leve |
| 7 | 25,4–28,4 | "Às vezes, uma camiseta começa a conversa." | `mockup-02` (Jesus vive, preta) com crop lento descendo pelo detalhe da estampa (pan vertical de cima pra baixo). | Legenda, **CONVERSA** em destaque | — |
| 8 | 28,4–37,0 | "Toca em 'Enviar mensagem' e chama a gente no WhatsApp. A gente te ajuda a escolher a sua." | **Tela final** (ver §7). Fica parada os últimos 2 s depois que a voz termina. | Tela final + legenda | Música resolve e termina em 37,0 s |

---

## 3. Formato e zonas seguras (para não cortar nada)

O mesmo vídeo vai aparecer em Reels, Stories e Feed. A Meta cobre partes do quadro com interface e recorta o Feed para 4:5. Regra:

```
Quadro: 1080 × 1920

  y 0    ┌──────────────────────────┐
         │  topo: UI do Reels/Stories│  ← nada importante (0–285)
  y 285  ├──────────────────────────┤
         │                          │
         │   ZONA SEGURA UNIVERSAL  │  ← TODO texto, legenda, logo e botão
         │   x 65 → 1015            │     vivem aqui dentro
         │   y 285 → 1250           │
         │                          │
  y 1250 ├──────────────────────────┤
         │  base: legenda do post,  │  ← só imagem de fundo (1250–1920)
         │  botão CTA da Meta, ícones│
  y 1920 └──────────────────────────┘
```

- **Zona segura universal: x 65–1015, y 285–1250.** Atende ao mesmo tempo: Reels (14% topo / 35% base / 6% laterais), Stories (14% topo e base) e o recorte 4:5 do Feed (y 285–1635).
- Fundo (foto/vídeo) sempre cobre o quadro inteiro, sem barras pretas.
- Mockups são 2:3; para preencher 9:16, escalar por altura (cover) e centralizar — o modelo fica no meio, a estampa cai dentro da zona segura. Conferir em cada mockup que a estampa inteira fica entre y 285 e 1250; se não couber, subir a imagem (object-position) até caber.

---

## 4. Identidade visual (design system Soul Style)

### Cores
| Token | Hex | Uso no vídeo |
|---|---|---|
| `rose-500` (a marca) | `#C16784` | Destaque de palavra na legenda, botão da tela final, fundo do card do ícone |
| fundo dos mockups | `#C05E7B` | Cor de preenchimento se algum mockup precisar de margem |
| `rose-200` | `#EAC2D0` | Seta/detalhe fino na tela final |
| `ink-950` | `#16181D` | Fundo da cena 4 (pergunta) |
| `ink-900` | `#2C2E35` | Fundo da tela final |
| `white` | `#FFFFFF` | Texto principal |

Regras: uma só cor saturada (o rosa). Sem gradiente colorido, sem brilho/glow, sem emoji.

### Tipografia (Google Fonts)
- **Poppins ExtraBold 800** — legendas e tipografia da cena 4. Tracking −0,01em.
- **Poppins SemiBold 600** — botão da tela final, CAIXA ALTA, tracking 0,06em.
- **Poppins SemiBold 600** — rótulo pequeno ("SOUL STYLE"), CAIXA ALTA, tracking 0,18em.

### Logo
- Arquivos em `assets/`: `lockup-horizontal-white.svg`, `lockup-vertical-white.svg`, `icon-white.svg`.
- Só usar branco sobre `ink-900` ou sobre `rose-500`. Nunca distorcer, nunca aplicar gradiente.
- Área de respiro em volta do logo = altura do "O" do logotipo.

### Movimento
- Entradas: fade + deslocamento de 2–20 px, easing `cubic-bezier(.2,0,.2,1)`.
- **Sem bounce, sem mola, sem overshoot.** Os cortes no ritmo da música dão a energia; o movimento do texto é contido.

---

## 5. Legendas (estilo da referência, nas cores da marca)

Referência: legenda palavra a palavra do vídeo enviado — adaptada à Soul Style.

- **Fonte:** Poppins 800, CAIXA ALTA, 68 px, cor `#FFFFFF`.
- **Contorno/sombra:** sombra `0 4px 0 rgba(22,24,29,.85)` + stroke 6 px `#16181D` (legível em qualquer fundo, sem caixa translúcida).
- **Posição:** centro horizontal, linha de base em **y = 1120** (dentro da zona segura). Máx. 2 linhas, largura máx. 900 px.
- **Ritmo:** blocos de 2 a 4 palavras. Bloco aparece inteiro; a palavra falada no momento ganha escala 1,0→1,06 (80 ms).
- **Palavra-chave:** fundo `rose-500` (`#C16784`), padding 6 px × 14 px, raio 4 px, texto branco. Uma por bloco, no máximo.
- **Palavras-chave:** BÍBLIA · CAMISETA · LÊ · EVANGELHO · TODO DIA · SOZINHA · CONVERSA · WHATSAPP
- **Cena 4:** sem legenda (a tipografia gigante já é o texto).
- Tudo queimado no vídeo (a maioria assiste sem som). Gerar também um `.srt` com o mesmo texto para subir na Meta.

---

## 6. Voz (narração IA masculina)

**Direção para o gerador de voz:**
> Homem brasileiro, 25–35 anos, voz média-grave, gravada perto do microfone (íntima, sem eco). Tom de conversa com um amigo, firme e calmo — **não é locutor de rádio, não é pregador**. Sotaque neutro do Sudeste. Ritmo ~150 palavras/min, mais lento no gancho.

**Interpretação por trecho:**
| Trecho | Como falar |
|---|---|
| "Tem gente que nunca vai abrir uma Bíblia." | Baixo, quase confidencial. Peso em "nunca". |
| "Mas vai ler a sua camiseta." | Mais firme, leve sorriso na voz. Peso em "camiseta". |
| Lugares (ônibus, faculdade, mercado) | Ritmo de lista, rápido e leve. |
| "Então... o que a sua roupa está dizendo hoje?" | Pausa real antes. Pergunta direta, olhando no olho. É o ponto mais provocativo. |
| "A Soul Style nasceu pra isso..." | Abre, ganha energia junto com a música. |
| "Sem gritar. Sem forçar." | Curto, seco, com espaço entre as frases. |
| CTA | Caloroso, convidativo, sem pressa e sem tom de "corre". |

**Pós-produção da voz:** remover respirações longas, EQ leve (corte < 80 Hz), compressão suave, volume final da voz em −16 LUFS antes da mixagem.

**Sincronia:** gerar a voz primeiro. Extrair timestamps por palavra (ex.: Whisper com `word_timestamps`) e usar esses tempos para: legenda palavra a palavra, cortes das cenas 2 e 3 (exatamente nas palavras "camiseta", "ônibus", "faculdade", "mercado") e o hit de áudio.

---

## 7. Tela final / CTA (28,4 s → 37,0 s)

Fundo `ink-900` (#2C2E35). Tudo dentro da zona segura:

| Elemento | Posição | Especificação |
|---|---|---|
| Ícone SS branco | centro, y ≈ 380 | 110 px de altura, fade-in |
| Os 3 mockups em leque | centro, y 500–900 | 3 cards 4:5 com raio 8 px, o do meio na frente e 6% maior, os laterais girados ±6°; entram em sequência (120 ms entre eles) |
| Frase | centro, y ≈ 980 | "A estampa começa a conversa." — Poppins 700, 54 px, branco, caixa normal |
| Botão | centro, y ≈ 1090 | Retângulo `rose-500`, raio 4 px, 760×110 px, texto **CHAMAR NO WHATSAPP** (Poppins 600, 40 px, branco, tracking 0,06em) + ícone de seta (Lucide `arrow-down`, traço 2 px) |
| Seta para baixo | centro, y ≈ 1190 | Seta fina `rose-200` com movimento suave de 8 px pra baixo (loop 900 ms) — aponta para o botão real "Enviar mensagem" da Meta, que aparece logo abaixo |
| Rótulo | centro, y ≈ 1235 | "SOUL STYLE" — Poppins 600, 22 px, tracking 0,18em, `rose-200` |

Os últimos 2 s ficam parados (só a seta se move) para dar tempo de tocar no botão.

---

## 8. Cenas geradas por IA (prompts)

Gerar em **9:16, 1080×1920, 5 s cada**, sem texto, sem logotipo, sem marca visível. Usar só o trecho necessário. As camisetas nas cenas de IA são **lisas** (IA erra texto em estampa) e aparecem de costas ou fora de foco — a estampa real só aparece nos mockups.

**IA-1 — Bíblia fechada (cena 1)**
> Extreme close-up macro shot of a closed old leather Bible lying on a dark wooden shelf, a thin layer of dust on the cover, a single beam of cool light crossing the frame with dust particles floating, very slow push-in, low-key moody lighting, shallow depth of field, cinematic 35mm, muted cool tones, vertical 9:16, no text, no people.

**IA-2 — Ônibus (cena 3)**
> Back view of a young Brazilian man standing inside a crowded city bus at golden hour, wearing a plain white oversized t-shirt with no print, a passenger behind him glances at his back, warm sunlight through the windows, handheld camera, natural light, shallow depth of field, vertical 9:16, no text, no logos.

**IA-3 — Faculdade (cena 3)**
> Wide hallway of a Brazilian university, students walking, a young woman in a plain black oversized t-shirt with no print walks away from camera, a classmate turns his head to look at her back, soft daylight, slight slow motion, shallow depth of field, vertical 9:16, no text, no logos.

**IA-4 — Fila do mercado (cena 3)**
> Supermarket checkout line in Brazil, medium shot from behind, a person in a plain t-shirt with no print waits in line while the person behind them looks at their back with curiosity, fluorescent and warm mixed lighting, natural documentary style, vertical 9:16, no text, no logos.

**IA-5 — Caminhada (cena 6)**
> Young Brazilian man in a plain white oversized t-shirt with no print walking away from camera down a busy São Paulo sidewalk at sunset, slow motion, passersby glance at his back, warm golden sunlight and soft lens flare, cinematic, shallow depth of field, vertical 9:16, no text, no logos.

**Tratamento de cor das cenas de IA:** cenas 1–4 frias e escuras (contraste alto, saturação −20%); cena 6 quente (golden hour). A virada fria → quente acompanha o roteiro (problema → solução). Nada de filtro de grão, duotone ou overlay rosa por cima de foto.

---

## 9. Música e som

**Trilha (instrumental, sem vocal):**
> Instrumental, 95 BPM, 37 seconds. 0–11s: minimal dark cinematic intro, sub bass pulse and a subtle ticking texture, tense. 11–14.9s: near silence with a short riser. 14.9s: drop into a modern lo-fi gospel trap beat with warm Rhodes chords, soft choir pad and crisp hi-hats. 25s: slightly lighter. Ends with a clean resolved chord at 37s. No vocals.

**Efeitos:** hit grave no corte da cena 2 · whoosh curto nos cortes da cena 3 · riser na cena 4 · "pop" suave na entrada do botão.

**Mixagem:** música −18 dB sob a voz (ducking automático), sobe para −10 dB onde não há fala. Master: **−14 LUFS integrado, pico máximo −1 dBTP**.

---

## 10. Exportação para Meta Ads

| Parâmetro | Valor |
|---|---|
| Resolução | 1080 × 1920 (9:16) |
| Frame rate | 30 fps constante |
| Vídeo | H.264 (High), yuv420p, 10–15 Mbps, `+faststart` |
| Áudio | AAC-LC, 48 kHz, estéreo, 192 kbps |
| Duração | ≤ 37 s (nunca acima de 45 s) |
| Arquivo | `soulstyle_meta_9x16_v1.mp4` + `soulstyle_meta_v1.srt` |

Comando de referência:
```
ffmpeg -i master.mov -c:v libx264 -profile:v high -pix_fmt yuv420p -r 30 -b:v 12M -maxrate 15M -bufsize 24M \
  -c:a aac -b:a 192k -ar 48000 -movflags +faststart soulstyle_meta_9x16_v1.mp4
```

**Opcional (recomendado):** exportar também `soulstyle_meta_4x5_v1.mp4` (1080×1350, recorte central y 285–1635) para o Feed — com a zona segura acima, nada se perde.

**Checagem final antes de entregar:**
1. Abrir o vídeo com uma máscara das zonas da Meta por cima e confirmar que nenhum texto/logo/botão sai da zona segura.
2. Assistir sem som: a história precisa ser entendida só pela legenda.
3. Conferir que o gancho (cena 1–2) acontece antes de 3 s.
4. Medir o loudness (−14 LUFS) e a duração (≤ 45 s).

---

## 11. Variações de gancho para teste A/B

Renderizar 3 versões trocando **só os primeiros ~5 s** (cenas 1–2). O resto é idêntico.

| Versão | Narração do gancho | Visual |
|---|---|---|
| **A (principal)** | "Tem gente que nunca vai abrir uma Bíblia. Mas vai ler a sua camiseta." | Como na decupagem |
| **B** | (1 s de silêncio) "Você acabou de ler 'Jesus ama você'. / Sem ninguém falar nada." | Abre direto no `mockup-01` em tela cheia, sem legenda no 1º segundo — a pessoa lê a estampa antes de ouvir |
| **C** | "Sua camiseta já falou com mais gente hoje do que você." | `mockup-03` com zoom lento + IA-2 |

Arquivos: `..._v1A.mp4`, `..._v1B.mp4`, `..._v1C.mp4`. Rodar as 3 no mesmo conjunto de anúncios e manter a de menor custo por conversa.

---

## 12. Texto do anúncio (campos da Meta)

- **Texto principal:**
  Tem gente que nunca vai abrir uma Bíblia. Mas vai ler a sua camiseta.
  Camisetas Soul Style: o evangelho estampado com um estilo que dá vontade de usar todo dia. Chama no WhatsApp que a gente te ajuda a escolher a sua.
- **Título:** A estampa começa a conversa
- **Botão:** Enviar mensagem
- **Mensagem pré-preenchida no WhatsApp:** Oi! Vi o vídeo da Soul Style e quero conhecer as camisetas.

---

## 13. Política de anúncios da Meta — cuidados já aplicados

A Meta reprova anúncios que **afirmam ou insinuam a religião de quem está assistindo** (ex.: "Você que é cristão...", "Expresse sua fé"). Por isso:
- O roteiro fala da **camiseta e da mensagem**, nunca da fé do espectador.
- O slogan "Expresse sua fé sem palavras" ficou **fora** do vídeo e do texto do anúncio (pode continuar no perfil e no site).
- Não adicionar frases como "sua fé", "você que é cristão", "você que ama Jesus" em nenhuma variação.

---

## 14. Arquivos em `assets/`

| Arquivo | O que é |
|---|---|
| `mockup-01-jesus-ama-voce-branca.png` | Camiseta branca "Jesus ama você" (600×900 — **pedir versão em alta**) |
| `mockup-02-jesus-vive-preta.png` | Camiseta preta "Jesus vive / Leão de Judá" (1024×1536) |
| `mockup-03-cristo-vive-em-mim-preta.png` | Camiseta preta "Cristo vive em mim" (1024×1536) |
| `lockup-horizontal-white.svg` | Logo horizontal branco |
| `lockup-vertical-white.svg` | Logo vertical branco |
| `icon-white.svg` | Ícone SS branco |

Os mockups vão ser ampliados para 1920 px de altura. Se houver versões maiores (mín. 1280×1920), usar essas.
