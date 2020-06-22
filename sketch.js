let imagemCenario,
    imagemPersonagem,
    cenario,
    bgm,
    personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  bgm = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario,3);
  personagem = new Personagem(imagemPersonagem);
  bgm.play();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}
