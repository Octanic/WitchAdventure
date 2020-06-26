class Intro{
    constructor(){
       this.stage = 0;

       this.stageTexts = [
           "Hipsta estava voltando para casa voando \napós um dia de trabalho de bruxa...",
           "Até que um bando de corvos a atacou durante\numa revoada...",
           "Hipsta então caiu na floresta escondida,\ndeixando seus pertences caírem pelo caminho...",
           "A floresta é cheia de criaturas, e elas\nnão gostam de visitantes!",
           "Ajude Hipsta a resgatar seus pertences para\nque ela possa voltar para casa."
       ]
    }

    
    setup(){

        let wConf = new ConfigurationFactory("flyingPlayer");
        wConf.configuration.spriteZoomOut=2;
        this.witchFly = new Personagem(introAssets["stage1"], wConf);

        this.crows = [new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow")),
                    new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow")),
                    new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow")),
                    new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow")),
                    new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow")),
                    new Inimigo(introAssets['stage2'], new ConfigurationFactory("crow"))];

        let wdConf = new ConfigurationFactory("damagedPlayer");
        wdConf.configuration.spriteZoomOut=2;
        this.witchDmg = new Personagem(introAssets["stage3"], wdConf);

        this.cenario1 = new Cenario(introAssets["stage1bg1"],-10)
        this.cenario2 = new Cenario(introAssets["stage1bg2"],-1)

        this.enemies = [
            new Inimigo(imagemSlime, new ConfigurationFactory("slime")),
            new Inimigo(imagemSlimeVoador, new ConfigurationFactory("flyingSlime")),
            new Inimigo(imagemTroll, new ConfigurationFactory("troll")),
        ]

        this.cenarios3 = [];
        for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
            this.cenarios3.push(new Cenario(imagensCenarios[i]));
        }
    }

    draw(){
        textFont("Lucida Console");
        switch(this.stage){
            case 0:
                this.cenario2.exibe();
                this.cenario2.move();

                this.witchFly.x = width/2-this.witchFly.spriteOffsetX/this.witchFly.spriteZoomOut/2;
                this.witchFly.y = height/4 + sin(frameCount*.2)*35;
                this.witchFly.exibe();

                this.cenario1.exibe(120);
                this.cenario1.move();


                break;
            case 1:
                this.cenario2.exibe();
                this.cenario2.move();
                
                this.witchDmg.x = width/2-this.witchDmg.spriteOffsetX/this.witchDmg.spriteZoomOut/2;
                this.witchDmg.y = height/4 + sin(frameCount*.2)*35;
                this.witchDmg.exibe();

                for(let i = 0; i<this.crows.length;i++){
                    this.crows[i].x = width/2.5-this.witchDmg.spriteOffsetX/this.witchDmg.spriteZoomOut/2+ random(10,200)
                    this.crows[i].y = height/4 + cos(frameCount* random(.05,.1)) * random(10,200);
                    this.crows[i].exibe();
                    this.crows[i].move();

                }

                this.cenario1.exibe(120);
                this.cenario1.move();
                break;
            case 2: 
                for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
                    let cenario = cenarios[i];        
                    cenario.exibe();
                }
                image(personagemDead,width/2-180, height/2-50,480,480);
                break;
            case 3:
                background("black");
                for (let i=0;i<this.enemies.length;i++){
                    let m = this.enemies[i];
                    m.x = width/4 - 100 + m.spriteOffsetX + 50;
                    m.y = height/1.5-m.spriteOffsetY;
                    m.speed = 0;
                    m.isErratic = true;
                    m.exibe();
                    m.move();
                }
                break;
            case 4:
                background("black");
                image(introAssets["stage5_1"], width *.2, height/2-64+cos(frameCount*.6)+12);
                image(introAssets["stage5_2"], width *.4, height/2-64+cos(frameCount*.6)+6);
                image(introAssets["stage5_3"], width *.6, height/2-64+cos(frameCount*.6));
                break;
        }
        fill("#FFFFFF60")
        rect(15, height-150, width-30,130,20)

        drawText(this.stageTexts[this.stage], 
                Math.max(width*0.02,30), 
                "white",
                30,
                height-100 + cos(frameCount*.3),
                2 )


    }

    keyPressed(key){
        if (key === "x"){
            currentScene = "game";
        }
        if (key === "Enter"){
            this.stage++;
            if(this.stage === 5){
                currentScene = "game";
            }
        }

    }

    
}