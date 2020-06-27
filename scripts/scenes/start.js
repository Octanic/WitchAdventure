class Start{
    constructor(){
       
    }

    setup(){
        bgm.stop();
        let scoreBoard = new Pontuacao();
        this.highScore = scoreBoard.getHighScore(); 
        this.infiniteMode = localStorage.getItem("infiniteMode")==="true";
        bgm.setVolume(0.1);
        bgm.loop();
    }

    draw(){
        textFont(startFont);
        let titleColor = [];
        let startColor = [];
        image(startImage,0,0,width,height);
        titleColor = [ 
            128 + sin(frameCount*0.1) * 25,
            20,
            128 + sin(frameCount*0.1) * 25
        ];

        startColor = [
            200 + cos(frameCount*0.1) * 25,
            200 + cos(frameCount*0.1) * 25,
            200 + sin(frameCount*0.1) * 25
        ]

        drawText("Hipsta", 
                    width/12+10,
                    titleColor,
                    width/3.5,
                    height/2-(width/12)+20+ 5*sin(frameCount*.1),
                    5);
        
        drawText("Adventures", 
                    width/12,
                    titleColor,
                    width/2.5,
                    height/2 +5*cos(frameCount*.1),
                    5);

        const hs = `melhor jogo: ${this.highScore} pontos`.toUpperCase();
        textSize(45);
        drawText(hs,
            45,
            startColor.reverse(), 
            width / 2 - textWidth(hs)/2,
            height-180 + sin(frameCount*.15),
            2);

        let play = "Enter para JOGAR";
        textSize(52);
        drawText(play,
                    52,
                    startColor,
                    width / 2 - textWidth(play)/2,
                    height-100 + sin(frameCount*.25),
                    5 );
        if (this.infiniteMode){
            const hs = `Pressione ' I ' para modo infinito`.toUpperCase();
            textSize(30);
            drawText(hs,
                30,
                startColor, 
                width / 2 - textWidth(hs)/2,
                height-45 + sin(frameCount*.15),
                2);
        }

        drawText("github.com/Octanic/WitchAdventure".toUpperCase(),
            25,
            titleColor.reverse(),
            30,
            30 + sin(frameCount*.25),
            2 );
    }

    keyPressed(key){
        if (key === "Enter"){
            infiniteMode=false;
            currentScene = "intro";
        }
        if (key === "Delete"){
            localStorage.setItem("infiniteMode",false);
            localStorage.setItem("score", 0);
            window.location.reload();
        }
        if (key === "i" && this.infiniteMode){
            infiniteMode=true;
            currentScene = "game";
            cenas[currentScene].setup();

        }

    }
}