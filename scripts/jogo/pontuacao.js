class Pontuacao{
    constructor(){
        this.pontos = 0;
    }

    exibe(){
        //textAlign(RIGHT);
        fill('fff')
        textSize(50);
        text(parseInt(this.pontos), width-textWidth(parseInt(this.pontos))-30, 50)
    }

    score(){
        this.pontos+=5;
    }

    isHighScore(){
        return this.pontos > this.getHighScore();
    }

    getHighScore(){
        return localStorage.getItem("score");
    }
    
    saveScore(){
        if (this.isHighScore()){
            localStorage.setItem("score", this.pontos);
        }
    }

}