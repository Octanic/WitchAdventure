class Vida{
    constructor(maxLives, lifeQty){
        this.maxLives = maxLives;
        this.lifeQty = lifeQty;

        this.w = 40;
        this.h = 40;

        this._lifeScreenMargin = 15;
    }

    draw(){
        for (let i=0; i<this.lifeQty; i++){
            image(imagemCoracao, 
                this._lifeScreenMargin + this.w * i*1.5 + this._lifeScreenMargin*2,
                this._lifeScreenMargin + sin(frameCount * (i+5))  , 
                this.w, 
                this.h);

        }
    }

    lifeUp(){
        if (this.lifeQty < this.maxLives ){
            this.lifeQty++;
        }
    }

    lifeDown(){
        this.lifeQty--;
    }

}