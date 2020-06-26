

function preload() {
  imagensCenarios = [];

  startImage = loadImage('imagens/assets/telaInicial.png');
  startFont = loadFont('imagens/assets/fonteTelaInicial.otf');

  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    imagensCenarios.push(loadImage(`imagens/cenario/layer${i+1}.png`));
  }

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemSlime = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemSlimeVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  bgm = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
  hitSound = loadSound('sons/hit.mp3');
  gameover = loadImage("imagens/assets/game-over.png");
  personagemDead = loadImage("imagens/personagem/dead.png");

  inimigos=[];
  cenarios = [];

  //intro assets
  introAssets = {
    stage1: loadImage("imagens/personagem/voando.png"),
    stage1bg1: loadImage("imagens/cenario/introbg1.png"),
    stage1bg2: loadImage("imagens/cenario/introbg2.png"),
    stage2: loadImage("imagens/assets/crow.png"),
    stage3: loadImage("imagens/personagem/dano.png"),
    stage5_1: loadImage("imagens/assets/item1.png"),
    stage5_2: loadImage("imagens/assets/item2.png"),
    stage5_3: loadImage("imagens/assets/item3.png")

  }

  imagemCoracao = loadImage("imagens/assets/coracao.png");
}

function setup() {
  const scr = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  game.setup();
  start = new Start();
  start.setup();
  intro = new Intro();
  intro.setup();

  cenas = {
    game,
    start,
    intro
  };
  frameRate(22);
}

function draw() {
  cenas[currentScene].draw();
  
}

function keyPressed(){
  console.log(key);
  cenas[currentScene].keyPressed(key);
}

