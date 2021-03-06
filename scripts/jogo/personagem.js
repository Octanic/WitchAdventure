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
        
        this.invincible = false;

        this.treasures = 0;
    }

    pula(){
        if (this.treasures === 2) this.jumpLimit = 4;

        if (this.jumps < this.jumpLimit){
            this.jumpSpeed = -this.jumpHeight;
            this.jumps++;
            jumpSound.play();
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

    setInvincible(){
        this.invincible = true;
        this.isBlinking = true;
        setTimeout(() => {
            this.invincible = false;
            this.stopBlinking();            
        }, 2000);
    }
    estaColidindo(inimigo){
        //For debug purposes
        if (DEBUG_MODE_ON){
            stroke("red");
            noFill();
            rect(this.x+this.hitBoxXOffset,
                this.y+this.hitBoxXOffset,
                this._w*this.hitBoxPrecisionW,
                this._h*this.hitBoxPrecisionH);
            
            rect(inimigo.x+inimigo.hitBoxXOffset,
                inimigo.y+inimigo.hitBoxYOffset,
                inimigo.spriteOffsetX * inimigo.hitBoxPrecisionW,
                inimigo.spriteOffsetY * inimigo.hitBoxPrecisionH)
        }
        
        if(this.invincible && inimigo.type != "item") return false;

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