class Personagem extends Animacao {
    constructor(imagem, config){ // x=0, y=0, spriteOffsetX=220, spriteOffsetY=270, spriteFrameCount=16, spriteFrameLine=4,spriteZoomOut=1.1){
        config.configuration.yPosition = height - config.configuration.spriteOffsetY / config.configuration.spriteZoomOut - config.configuration.variationY;

        super(imagem, config);//x,y, spriteOffsetX=220, spriteOffsetY=270, spriteFrameCount=16, spriteFrameLine=4,spriteZoomOut=1.1);
        
        this.baseY = config.configuration.yPosition;

        this.jumpSpeed = 0;
        this.gravity = 6;

        this.jumpLimit=2;
        this.jumps = 0;
        this.jumpHeight = 60;

        this._w = this.spriteOffsetX/this.spriteZoomOut;
        this._h = this.spriteOffsetY/this.spriteZoomOut;
    }

    pula(){
        if (this.jumps < this.jumpLimit){
            this.jumpSpeed = -this.jumpHeight;
            this.jumps++;
        }
    }

    aplicaGravidade(){
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;

        if (this.y > this.baseY){
            this.y = this.baseY;
            this.jumps = 0;
        }
    }

    estaColidindo(inimigo){
        const precisionW = .4;
        const precisionH = .7;
        //For debug purposes
        // rect(this.x+30,
        //     this.y+30,
        //     this._w*precisionW,
        //     this._h*precisionH);
        
        // rect(inimigo.x,
        //     inimigo.y,
        //     inimigo.spriteOffsetX*precisionW,
        //     inimigo.spriteOffsetY*precisionH)

        const colisao = collideRectRect(
            this.x+30,
            this.y+30,
            this._w*precisionW,
            this._h*precisionH,
            inimigo.x,
            inimigo.y,
            inimigo.spriteOffsetX*precisionW,
            inimigo.spriteOffsetY*precisionH);

        return colisao;
    }
}