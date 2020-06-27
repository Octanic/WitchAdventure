class Win{
    constructor(){
        
        this.stage = 0;

        this.stageTexts = [
            "Graças às suas habilidades e perseverança,\nHipsta conseguiu recuperar seus itens mágicos.",
            "Hipsta agora pode voltar pra casa feliz.",
            "Da próxima vez ela tomará mais cuidado em seus voos.",
        ];      

    }

    setup(){
        this.cenarios3 = [];
        for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
            this.cenarios3.push(new Cenario(imagensCenarios[i]));
        }
        let wConf = new ConfigurationFactory("flyingPlayer");
        wConf.configuration.spriteZoomOut=2;
        this.witchFly = new Personagem(introAssets["stage1"], wConf);

        this.cenario1 = new Cenario(introAssets["stage1bg1"],-10)
        this.cenario2 = new Cenario(introAssets["stage1bg2"],-1)

    }

    draw(){
        this.congratsText = [
            `Obrigado por jogar`,
            `Sua pontuação final foi de ${currentScore.pontos} pontos.`,
            `Modo infinito LIBERADO!`,
            `Tente sua melhor pontuação no modo infinito`
        ];

        textFont("Lucida Console");

        switch(this.stage){
            case 0:
                for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
                    let cenario = cenarios[i];        
                    cenario.exibe();
                }
                image(introAssets["stage5_1"], width *.2, height/2-64+cos(frameCount*.6)+12);
                image(introAssets["stage5_2"], width *.4, height/2-64+cos(frameCount*.6)+6);
                image(introAssets["stage5_3"], width *.6, height/2-64+cos(frameCount*.6));
                break;
            case 1:
            case 2:
                this.cenario2.exibe();
                this.cenario2.move();

                this.witchFly.x = width/2-this.witchFly.spriteOffsetX/this.witchFly.spriteZoomOut/2;
                this.witchFly.y = height/4 + sin(frameCount*.2)*35;
                this.witchFly.exibe();

                this.cenario1.exibe(120);
                this.cenario1.move();
                break;
            case 3:
                background("black");
                textSize(52);
                drawText("PARABÉNS!", 52, 'white', width/2-textWidth("PARABENS!")/2, textAscent()+30);

                textSize(36);
                drawText(this.congratsText[0], 36, 'white', width/2-textWidth(this.congratsText[0])/2, textAscent()+120);
                drawText(this.congratsText[1], 36, 'white', width/2-textWidth(this.congratsText[1])/2, textAscent()+240);
                this.witchFly.x = width/2-this.witchFly.spriteOffsetX/this.witchFly.spriteZoomOut/2;
                this.witchFly.y = height/4 + sin(frameCount*.2)*35+60;
                this.witchFly.exibe();

                textSize(45)
                drawText(this.congratsText[2], 45, 'white', width/2-textWidth(this.congratsText[2])/2, height/1.5);

                textSize(30)
                drawText(this.congratsText[3], 30, 'white', width/2-textWidth(this.congratsText[3])/2, height-120);

                break;
        }

        if (this.stage < 3){
            fill("#FFFFFF60")
            rect(15, height-150, width-30,130,20)

            drawText(this.stageTexts[this.stage], 
                    Math.max(width*0.02,30), 
                    "white",
                    30,
                    height-100 + cos(frameCount*.3),
                    2 )
            drawText(
                "Enter>",
                25, 
                "white",
                width - textWidth("enter>")-30,
                height -30,
                2);
        }
        
    }

    keyPressed(key){
        if (key==="Enter"){
            this.stage++;
            if (this.stage === 4){
                localStorage.setItem("infiniteMode",true);
                currentScene = "start";
                cenas[currentScene].setup();
            }
        }
    }

}