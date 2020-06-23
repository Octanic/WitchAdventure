let imagensCenarios,
    imagemPersonagem,
    imagemInimigo,
    cenarios,
    bgm,
    jumpSound,
    personagem,
    inimigo,
    gameover,
    personagemDead,
    endgame;

const LAYER_SCENARIO_COUNT = 5;

const slimeConfig = {
  spriteFrameCount: 28,
  spriteFrameLine: 4,
  spriteOffsetX: 104,
  spriteOffsetY: 104,
  spriteZoomOut: 1,
  speed: 10
}

function preload() {
  imagensCenarios = [];

  imagemCenario = loadImage('imagens/cenario/floresta.png');
  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    imagensCenarios.push(loadImage(`imagens/cenario/layer${i+1}.png`));
  }

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  bgm = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
  gameover = loadImage("imagens/assets/game-over.png");
  personagemDead = loadImage("imagens/personagem/dead.png");
}

function setup() {
  const scr = createCanvas(windowWidth, windowHeight);
  cenarios = [];
  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    cenarios.push(new Cenario(imagensCenarios[i], i*2));
  }
  endgame = false;
  personagem = new Personagem(imagemPersonagem);
  inimigo = new Inimigo(imagemInimigo,
                        width - 104,
                        height - 104,
                        slimeConfig.spriteOffsetX,
                        slimeConfig.spriteOffsetY,
                        slimeConfig.spriteFrameCount,
                        slimeConfig.spriteFrameLine,
                        slimeConfig.spriteZoomOut,
                        slimeConfig.speed);

  bgm.setVolume(0.1);
  bgm.loop();
  frameRate(22);
}

function draw() {
  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    let cenario = cenarios[i];
    cenario.exibe();

    cenario.move();

  }
  inimigo.exibe();
  
  personagem.exibe();
  personagem.aplicaGravidade();

  if (personagem.estaColidindo(inimigo)){
    console.log("bateu");
    endGameNow();
    noLoop();
    
  }
}

function endGameNow(){
  background(0);
  image(gameover, width/2-412/2, height/2-78/2);
  image(personagemDead,width/2-180, height/2-50,240,240);
  fill("fff");
  textSize(32);
  text("Pressione <ENTER> para recomeçar",width/2-260,height-50)
  endgame = true;
  bgm.stop();
}

function keyPressed(){
  console.log(key);

  if(!endgame && key === 'ArrowUp'){
    personagem.pula();
    jumpSound.play();
  }
  else if (endgame && key === "Enter"){
    window.location.reload();
  }
}