let imagensCenarios,
    imagemPersonagem,
    imagemSlime,
    imagemTroll,
    imagemSlimeVoador,
    imagemCrow,
    imagemDano,
    imagemCoracao;

let startImage,
    startFont;

let inimigos;

let game,
    cenarios,
    bgm,
    gameover,
    endgame,
    jumpSound,
    hitSound;

let personagem,
    slime,
    troll,
    personagemDead,
    slimeVoador;

let currentScore;
let currentScene='start',
    cenas;

//let you play the game only for the high score
let infiniteMode = false;

const LAYER_SCENARIO_COUNT = 5;
const DEBUG_MODE_ON = false;

function drawText(value, size, cor, posX, posY,dropShadow=0){
    textSize(size);
    if (dropShadow){
        fill("black");
        text(value, posX+dropShadow, posY+dropShadow);
    }
    fill(cor);
    text(value, posX, posY);

}