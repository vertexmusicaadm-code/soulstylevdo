// Tempos do vídeo (segundos). Hoje vêm da decupagem (§2); depois de gerar a voz,
// ajustar cortes e legendas para os timestamps reais das palavras (§6).
const TL = {
  duration: 37.0,
  voiceOffset: 0.2,   // onde a narração começa no vídeo
  musicOffset: 0.0,   // de que ponto da trilha começar (alinhar o drop com cuts.drop)

  cuts: {
    camiseta: 4.4,    // corte seco IA-1 → mockup-01 na palavra "camiseta"
    onibus: 5.2,
    faculdade: 6.6,
    mercado: 8.2,
    pergunta: 10.8,
    drop: 14.9,       // ícone sobre rosa
    mk1: 15.5, mk2: 17.4, mk3: 19.35,
    caminhada: 21.3,
    conversa: 25.4,
    final: 28.4,
  },

  // [início, fim, texto, palavra-chave]. Palavras dentro do bloco são distribuídas pelo tamanho.
  captions: [
    [0.2, 1.2, 'TEM GENTE QUE'],
    [1.2, 2.0, 'NUNCA VAI ABRIR'],
    [2.0, 2.9, 'UMA BÍBLIA', 'BÍBLIA'],
    [3.2, 3.9, 'MAS VAI LER'],
    [3.9, 5.1, 'A SUA CAMISETA', 'CAMISETA'],
    [5.2, 6.4, 'NO ÔNIBUS,'],
    [6.4, 7.6, 'NA FACULDADE,'],
    [7.6, 8.9, 'NA FILA DO MERCADO...'],
    [9.0, 9.9, 'ALGUÉM SEMPRE LÊ', 'LÊ'],
    [9.9, 10.7, 'O QUE VOCÊ VESTE'],
    // cena 4 sem legenda: a tipografia gigante é o texto
    [14.9, 15.9, 'A SOUL STYLE'],
    [15.9, 16.9, 'NASCEU PRA ISSO:'],
    [16.9, 18.0, 'CAMISETAS QUE LEVAM'],
    [18.0, 19.0, 'O EVANGELHO PRA RUA,', 'EVANGELHO'],
    [19.0, 20.0, 'COM UM ESTILO QUE'],
    [20.0, 20.6, 'DÁ VONTADE DE USAR'],
    [20.6, 21.3, 'TODO DIA', 'TODO DIA'],
    [21.5, 22.4, 'SEM GRITAR.'],
    [22.6, 23.5, 'SEM FORÇAR.'],
    [23.7, 25.2, 'A MENSAGEM FALA SOZINHA', 'SOZINHA'],
    [25.5, 26.6, 'ÀS VEZES, UMA CAMISETA'],
    [26.6, 28.3, 'COMEÇA A CONVERSA', 'CONVERSA'],
    // Na tela final a legenda some (colidiria com frase/botão); o SRT continua com o texto todo.
    [28.5, 29.8, 'TOCA EM "ENVIAR MENSAGEM"'],
    [29.8, 30.8, 'E CHAMA A GENTE'],
    [30.8, 31.8, 'NO WHATSAPP', 'WHATSAPP'],
    [31.9, 33.0, 'A GENTE TE AJUDA'],
    [33.0, 35.0, 'A ESCOLHER A SUA.'],
  ],

  // Cena 4: palavras gigantes entrando uma a uma
  question: { start: 11.5, end: 14.3, lines: ['O QUE A SUA ROUPA', 'ESTÁ DIZENDO', 'HOJE?'], key: 'DIZENDO' },
};
