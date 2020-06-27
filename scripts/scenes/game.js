class Game{
    constructor(){
        this.inimigosEscolhidos=[];
        this.scoreBoard = null;
        this.spawnTreasure=false;
        this.TREASURE_CHANCE = 10;
        this.treasures = [];
        this.cooldown=0;
        
        this.winGame = false;
        
        this.infoShield = "CAJADO DEFENSOR PRONTO!";
        
    }

    setup(){
        if(DEBUG_MODE_ON){
            this.vida = new Vida(400,400);
        }
        else {
            this.vida = new Vida(3,3);
        }
        const cPlayer = new ConfigurationFactory("player");
        //generate monster factory
        const cSlime = new ConfigurationFactory("slime");
        const cTroll = new ConfigurationFactory("troll");
        const cFSlime = new ConfigurationFactory("flyingSlime");
        
        this.scoreBoard = new Pontuacao();

        for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
            cenarios.push(new Cenario(imagensCenarios[i], 2*i));
        }
        this.winGame = false;
        
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
        
        this.treasures = [];
        this.spawnTreasure = false;
        this.treasures.push(
            {
                treasure: new Treasure(introAssets["stage5_1"], new ConfigurationFactory("treasure")),
                description:"O Cajado Defensor pode te proteger de tempos\nem tempos.\nAtive-o com CTRL.".toUpperCase()
            },
            {
                treasure: new Treasure(introAssets["stage5_2"], new ConfigurationFactory("treasure")),
                description:"A Vassoura permite um pulo muito melhor.\nPule o dobro de vezes.".toUpperCase()
            },
            {
                treasure: new Treasure(introAssets["stage5_3"], new ConfigurationFactory("treasure")),
                description:"O Grimorio tem todo o estudo de Hipsta.".toUpperCase()
            }
        );
        this.cooldown = 0;

        this.inimigosEscolhidos = this.getRandomEnemy();
        this.inimigosPassados = 0;

        if(infiniteMode){
            personagem.treasures = 2;
        }
    }
    
    scalifyConf(config){
        if (config.configuration.type === "troll"){
            config.configuration.spriteZoomOut=random(.7,1.1);
        
        }
        else{
            config.configuration.spriteZoomOut=random(.7,1.5);

        }
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
        
        
        if (!infiniteMode){
            this.handleTreasure();

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

            //show shield bonus message
            if (this.cooldown<=0 && personagem.treasures>=1){
                
                drawText(this.infoShield, 
                        30, 
                        [ 
                            0,
                            200 + Math.abs(sin(frameCount*0.1)) * 25,
                            128 + sin(frameCount*0.1) * 25
                        ], 
                        30,
                        height-25 + sin(frameCount*.2),
                        2);
            }
        }

        if (personagem.treasures === 3){
            this.winGame = true;
            this.scoreBoard.saveScore();
        }
    }

    handleTreasure(){
        let treasureChance = parseInt(random(1,100));

        if (!this.spawnTreasure && 
            this.scoreBoard.pontos>0 &&
            this.scoreBoard.pontos % 10*(personagem.treasures+1) == 0 && //makes 10 points = first prize; 20, second; 30 third...
            treasureChance <= this.TREASURE_CHANCE){

            this.spawnTreasure = true;

        }
        
        if (this.spawnTreasure && personagem.treasures < this.treasures.length){
            let currentTreasure = this.treasures[personagem.treasures].treasure;
            currentTreasure.exibe();
            if (currentTreasure.x+currentTreasure.spriteOffsetX < 0) {
                //You missed. Wait another wave 
                this.spawnTreasure = false;
                currentTreasure.x = width+currentTreasure.spriteOffsetX;
            }
            if (personagem.estaColidindo(currentTreasure)){
                //treasure hit!
                this.spawnTreasure = false;
                this.halt = true;
                personagem.treasures++;
                noLoop();
                this.showPrizeMessage(personagem.treasures-1);
            }
        }
    }
    keyPressed(key){
        if(!endgame && (key === 'ArrowUp' || key === " ")){
            personagem.pula();
            
          }
          else if (endgame && key === "Enter"){
            game.setup();
            loop();
          }
          else if(this.halt && key==="Enter"){
            loop();
            if (this.winGame){
                currentScore = this.scoreBoard;
                currentScene = "win";
            }
          }
          else if(personagem.treasures>=1 && key==="Control" && this.cooldown<=0){
              personagem.setInvincible();
              this.cooldown=15;
              setInterval(() => {
                  this.cooldown--;
              }, 1000);
          }
    }

    getRandomEnemy(){
        for(let i = 0 ; i<this.inimigosEscolhidos.length; i++){
            //reset positions and speed for previous enemies.
            inimigos[this.inimigosEscolhidos[i]].x = width+random(1,400);
            inimigos[this.inimigosEscolhidos[i]].speed = parseInt(random(10,45));
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
        //textAlign(LEFT);
        let g1="Pressione <ENTER> para tentar novamente";
        text(g1, width/2-textWidth(g1)/2, height-50);
        let g2 = `SEUS PONTOS: ${this.scoreBoard.pontos}`;
        text(g2, width/2-textWidth(g2)/2,height-150);
        endgame = true;
        bgm.stop();
        this.scoreBoard.saveScore();
        personagem.stopBlinking();
    }

    showPrizeMessage(index){
        stroke("purple");
        textSize(25);
        fill("#FFFFFF60")
        rect(width/2 - 300, height/2-100, 600, 200, 20)
        drawText(this.treasures[index].description, 
                25,
                'white', 
                width/2-300+30,
                height/2-textAscent(),
                3);

        textSize(12);
        let x ="<ENTER>...";
        drawText(x, 12,"white",width/2+270 - textWidth(x)/2,height/2-textAscent()+100,1);
    }
}