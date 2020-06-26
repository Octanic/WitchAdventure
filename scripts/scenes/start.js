class Start{
    constructor(){
       
    }

    setup(){
        
        let scoreBoard = new Pontuacao();
        this.highScore = scoreBoard.getHighScore(); 
        
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

    }

    keyPressed(key){
        if (key === "Enter"){
            currentScene = "intro";
        }

    }

    // drawText(value, size, cor, posX, posY,dropShadow=0){
    //     textSize(size);
    //     if (dropShadow){
    //         fill("black");
    //         text(value, posX+dropShadow, posY+dropShadow);
    //     }
    //     fill(cor);
    //     text(value, posX, posY);

    // }
}