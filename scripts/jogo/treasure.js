class Treasure extends Animacao{
    constructor(imagem, config){ 
        super(imagem, config); 

    }

    move(){
        this.x -= this.speed;
        //treasures are erratic by nature        
        this.y += 2*cos(frameCount*.1);

        if (this.x < -this.spriteOffsetX - this.FRAME_DELAY){
            this.x = width;
        }
    }
}