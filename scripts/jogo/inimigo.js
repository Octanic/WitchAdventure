class Inimigo extends Animacao{
    constructor(imagem, x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed ){
        super(imagem, x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed);
    }

    move(){
        this.x -= this.speed;
        if (this.x < -this.spriteOffsetX){
            this.x = width;
        }
    }
}