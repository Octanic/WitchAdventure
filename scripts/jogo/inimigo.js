class Inimigo extends Animacao{
    constructor(imagem, config){ //x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed, ignoreSpriteFrames ){
        super(imagem, config) //x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed, ignoreSpriteFrames);
        this.FRAME_DELAY =200;
    }

    move(){
        this.x -= this.speed;
        
        if (this.isErratic){
            const baseline = height - this.spriteOffsetY-300;

            this.y += random(-5,5);
            this.speed += random(-1,1);
            if (this.speed<-5) {
                console.log(`enemy too shy (${this.speed}). Go ahead, boy!`)
                this.speed*=-1;
            }
            if (this.speed > 30){
                console.log(`That's fast (${this.speed}). Easy, boy`);
                this.speed = 10;
            }
            if(this.y > baseline) 
            {
                console.log(`baseline hit: ${this.y}. Changing to ${baseline}`);
                this.y = baseline;
                
            }
        }

        if (this.x < -this.spriteOffsetX - this.FRAME_DELAY){
            this.x = width;
        }
    }
}