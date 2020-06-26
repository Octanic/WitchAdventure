class Game{
    constructor(){
        this.inimigosEscolhidos=[];
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
        inimigos = [];
        inimigos.push(
            new Inimigo(imagemSlime, cSlime),
            new Inimigo(imagemTroll, cTroll),
            new Inimigo(imagemSlimeVoador, cFSlime),
            new Inimigo(imagemSlime, this.scalifyConf(cSlime)),
            new Inimigo(imagemTroll, this.scalifyConf(cTroll)),
            new Inimigo(imagemSlimeVoador, this.scalifyConf(cFSlime)));

        this.inimigosEscolhidos = this.getRandomEnemy();
        this.inimigosPassados = 0;

        bgm.setVolume(0.1);
        bgm.loop();
    }
    
    scalifyConf(config){
        config.configuration.spriteZoomOut=random(.7,1.5);
        return config;
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

        for(let i=0; i<this.inimigosEscolhidos.length;i++){
            const enemy = inimigos[this.inimigosEscolhidos[i]];
            if (!enemy.isDead && enemy.x < -enemy.spriteOffsetX){
                this.inimigosPassados++;
                this.scoreBoard.score();
                enemy.isDead=true;
            }

            enemy.exibe();

        }
        if (this.inimigosPassados >= this.inimigosEscolhidos.length){
            this.inimigosPassados = 0;
            this.inimigosEscolhidos = this.getRandomEnemy();            
        }
        

        
        this.scoreBoard.exibe();
        this.vida.draw();
        //Check collision
        for(let i=0; i<this.inimigosEscolhidos.length;i++){
            const enemy = inimigos[this.inimigosEscolhidos[i]];

            if (personagem.estaColidindo(enemy)){
                this.vida.lifeDown();
                personagem.setInvincible();
                hitSound.play();                
            }
        }
        
        if (this.vida.lifeQty === 0){
            this.endGameNow();
            noLoop();
        }

        if(!endgame){
            
            //LAST THING TO RUN
            //Draw the last scenario layer
            cenarios[LAYER_SCENARIO_COUNT-1].exibe(60);
            cenarios[LAYER_SCENARIO_COUNT-1].move();
        }
    }

    keyPressed(key){
        if(!endgame && (key === 'ArrowUp' || key === " ")){
            personagem.pula();
            jumpSound.play();
          }
          else if (endgame && key === "Enter"){
            game.setup();
            loop();
          }
    }

    getRandomEnemy(){
        for(let i = 0 ; i<this.inimigosEscolhidos.length; i++){
            //reset positions and speed for previous enemies.
            inimigos[this.inimigosEscolhidos[i]].x = width+random(10,200);
            inimigos[this.inimigosEscolhidos[i]].speed = parseInt(random(10,38));
            inimigos[this.inimigosEscolhidos[i]].isDead = false;
        }

        let spawnQty = Math.round(random(1, inimigos.length/2));
        let spawns = []
        for(let i=0; i<spawnQty; i++){

            spawns.push(this.getUniqueMob(spawns));
            
        }
        return spawns;
    }

    getUniqueMob(whatIHave){
        let enm = parseInt(random(0,inimigos.length));
        
        if (whatIHave.includes(enm)) return this.getUniqueMob(whatIHave);

        return enm;
    }

    endGameNow(){
        background(0);
        stroke("red");

        image(gameover, width/2-412/2, height/2-78/2);
        image(personagemDead,width/2-180, height/2-50,240,240);
        fill("fff");
        textSize(32);
        textAlign(LEFT);
        let g1="Pressione <ENTER> para tentar novamente";
        text(g1, width/2-textWidth(g1)/2, height-50);
        let g2 = `SEUS PONTOS: ${this.scoreBoard.pontos}`;
        text(g2, width/2-textWidth(g2)/2,height-150);
        endgame = true;
        bgm.stop();
        this.scoreBoard.saveScore();
        personagem.stopBlinking();
      }
}