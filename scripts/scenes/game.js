class Game{
    constructor(){
        this.inimigoAtual=0;
        this.scoreBoard = null;
    }

    setup(){
        this.vida = new Vida(3,3);
        const cPlayer = new ConfigurationFactory("player");
        //generate monster factory
        const cSlime = new ConfigurationFactory("slime");
        const cTroll = new ConfigurationFactory("troll");
        const cFSlime = new ConfigurationFactory("flyingSlime");
        
        this.scoreBoard = new Pontuacao();

        for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
            cenarios.push(new Cenario(imagensCenarios[i], 2*i));
        }

        endgame = false;
        personagem = new Personagem(imagemPersonagem,cPlayer);

        inimigos.push(
            new Inimigo(imagemSlime, cSlime),
            new Inimigo(imagemTroll, cTroll),
            new Inimigo(imagemSlimeVoador, cFSlime));
        this.inimigoAtual = this.getRandomEnemy();

        bgm.setVolume(0.1);
        bgm.loop();
    }

    draw(){       
        textFont(startFont);

        //Draw all layers, except the last
        for(let i=0; i < LAYER_SCENARIO_COUNT - 1; i++){
            let cenario = cenarios[i];
        
            cenario.exibe();
            cenario.move();
        }

        personagem.exibe();
        personagem.aplicaGravidade();

        const enemy = inimigos[this.inimigoAtual];
        const isEnemyVisible = enemy.x < -enemy.spriteOffsetX;
        
        enemy.exibe();

        this.scoreBoard.exibe();
        if (isEnemyVisible){
            this.scoreBoard.score();
            this.inimigoAtual = this.getRandomEnemy();
            enemy.speed = parseInt(random(10,38));
        }

        this.vida.draw();
        //Check collision
        if (personagem.estaColidindo(enemy)){
            this.vida.lifeDown();
            personagem.setInvincible();

            if (this.vida.lifeQty === 0){
                endGameNow();
                noLoop();
            }
        }
        
        if(!endgame){
            
            //LAST THING TO RUN
            //Draw the last scenario layer
            cenarios[LAYER_SCENARIO_COUNT-1].exibe(60);
            cenarios[LAYER_SCENARIO_COUNT-1].move();
        }
    }

    keyPressed(key){
        if(!endgame && key === 'ArrowUp'){
            personagem.pula();
            jumpSound.play();
          }
          else if (endgame && key === "Enter"){
            game.setup();
            loop();
          }
    }

    getRandomEnemy(){
        inimigos[this.inimigoAtual].x = width;
        return parseInt(random(0,inimigos.length));
    }
}