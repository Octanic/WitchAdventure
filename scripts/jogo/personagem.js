class Personagem extends Animacao {
    constructor(imagem, config) { 
        config.configuration.yPosition = height - config.configuration.spriteOffsetY / config.configuration.spriteZoomOut - config.configuration.variationY;

        super(imagem, config);
        
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
        //For debug purposes
        // stroke("red");
        // noFill();
        // rect(this.x+this.hitBoxXOffset,
        //     this.y+this.hitBoxXOffset,
        //     this._w*this.hitBoxPrecisionW,
        //     this._h*this.hitBoxPrecisionH);
        
        // rect(inimigo.x+inimigo.hitBoxXOffset,
        //     inimigo.y+inimigo.hitBoxYOffset,
        //     inimigo.spriteOffsetX * inimigo.hitBoxPrecisionW,
        //     inimigo.spriteOffsetY * inimigo.hitBoxPrecisionH)

        const colisao = collideRectRect(
            this.x+this.hitBoxXOffset,
            this.y+this.hitBoxXOffset,
            this._w*this.hitBoxPrecisionW,
            this._h*this.hitBoxPrecisionH,
            inimigo.x+inimigo.hitBoxXOffset,
            inimigo.y+inimigo.hitBoxYOffset,
            inimigo.spriteOffsetX * inimigo.hitBoxPrecisionW,
            inimigo.spriteOffsetY * inimigo.hitBoxPrecisionH);

        return colisao;
    }
}