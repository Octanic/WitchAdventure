let imagensCenarios,
    imagemPersonagem,
    imagemSlime,
    imagemTroll,
    imagemSlimeVoador;

let inimigos;

let cenarios,
    bgm,
    gameover,
    endgame,
    jumpSound,
    scoreBoard;

let personagem,
    slime,
    troll,
    personagemDead,
    slimeVoador;

const LAYER_SCENARIO_COUNT = 5;

function preload() {
  imagensCenarios = [];

  imagemCenario = loadImage('imagens/cenario/floresta.png');
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
  
  const cPlayer = new ConfigurationFactory("player");
  //generate monster factory
  const cSlime = new ConfigurationFactory("slime");
  const cTroll = new ConfigurationFactory("troll");
  const cFSlime = new ConfigurationFactory("flyingSlime");
  
  scoreBoard = new Pontuacao();

  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    cenarios.push(new Cenario(imagensCenarios[i], i * 2));
  }

  endgame = false;
  personagem = new Personagem(imagemPersonagem,cPlayer);

  inimigos.push(
    new Inimigo(imagemSlime, cSlime),
    new Inimigo(imagemTroll, cTroll),
    new Inimigo(imagemSlimeVoador, cFSlime));

  bgm.setVolume(0.1);
  bgm.loop();

  frameRate(22);
}

function draw() {
  //Draw all layers, except the last
  
  for(let i=0; i < LAYER_SCENARIO_COUNT - 1; i++){
    let cenario = cenarios[i];
    cenario.exibe();
    cenario.move();
  }

  personagem.exibe();
  personagem.aplicaGravidade();
  
  for(let i =0; i<inimigos.length; i++){
    let enemy = inimigos[i];
    enemy.exibe();
    //Check collision
    if (personagem.estaColidindo(enemy)){
      console.log("bateu");
      endGameNow();
      noLoop();
      break;
    }
  }  
  
  if(!endgame){
    scoreBoard.exibe();
    scoreBoard.score();
    //LAST THING TO RUN
    //Draw the last scenario layer
    cenarios[LAYER_SCENARIO_COUNT-1].exibe(60);
    cenarios[LAYER_SCENARIO_COUNT-1].move();
  }
  
}

function endGameNow(){
  background(0);
  image(gameover, width/2-412/2, height/2-78/2);
  image(personagemDead,width/2-180, height/2-50,240,240);
  fill("fff");
  textSize(32);
  textAlign(LEFT);
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

//TODO:
/*
  fix collision
  one monster at a time
  begin game screen
  power up
*/