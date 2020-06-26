class Inimigo extends Animacao{
    constructor(imagem, config){ //x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed, ignoreSpriteFrames ){
        super(imagem, config) //x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed, ignoreSpriteFrames);
        this.FRAME_DELAY =200;
        this.isDead = false;
    }

    move(){
        this.x -= this.speed;
        
        if (this.isDead) return;
        if (this.isErratic){
            const baseline = height - this.spriteOffsetY-300;

            this.y += 5*cos(frameCount*.1);
            
            
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