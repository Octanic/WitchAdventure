

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
  gameover = loadImage("imagens/assets/game-over.png");
  personagemDead = loadImage("imagens/personagem/dead.png");

  inimigos=[];
  cenarios = [];

}

function setup() {
  const scr = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  game.setup();
  start = new Start();
  start.setup();

  cenas = {
    game,
    start
  };
  frameRate(22);
}

function draw() {
  cenas[currentScene].draw();
  
}

function endGameNow(){
  background(0);
  image(gameover, width/2-412/2, height/2-78/2);
  image(personagemDead,width/2-180, height/2-50,240,240);
  fill("fff");
  textSize(32);
  textAlign(LEFT);
  text("Pressione <ENTER> para tentar novamente",width/2-260,height-50)
  endgame = true;
  bgm.stop();
}

function keyPressed(){
  console.log(key);
  cenas[currentScene].keyPressed(key);
  // game.keyPressed(key);
}

function getRandomEnemy(){
  return parseInt(random(0,inimigos.length));
}


//TODO:
/*
  begin game screen
  power up
*/