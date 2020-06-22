class Personagem{
    constructor(imagem, spriteOffsetX=220, spriteOffsetY=270, spriteFrameCount=16, spriteFrameLine=4,spriteZoomOut=2){
        //sprite block horizontal position
        this.spriteOffsetX = spriteOffsetX; 
        
        //sprite block vertical position
        this.spriteOffsetY = spriteOffsetY;

        //magic number to "zoom out" the sprite
        this.spriteZoomOut = spriteZoomOut; 

        //total of frames from my spritesheet
        this.spriteFrameCount = spriteFrameCount;
        
        //total of frames of an entire line of my spritesheet
        this.spriteFrameLine = spriteFrameLine; 

        //linear array containing the horizontal and vertical positions to update the blocks
        this.matriz = this.generateSpriteArray(spriteOffsetX,spriteOffsetY,spriteFrameCount,spriteFrameLine);
        //current frame being drawn
        this.frame = 0;
        //the spritesheet
        this.imagem = imagem;
    }

    exibe(){
        image(this.imagem, 
                0, //x
                height-this.spriteOffsetY/this.spriteZoomOut, //y
                this.spriteOffsetX/this.spriteZoomOut, //width
                this.spriteOffsetY/this.spriteZoomOut, //height
                this.matriz[this.frame][0], //sprite x
                this.matriz[this.frame][1], //sprite y
                this.spriteOffsetX, //sprite width
                this.spriteOffsetY); //sprite height
        this.anima();
    }

    //Function used to animate the frames
    anima() {
        this.frame++;

        if (this.frame >= this.spriteFrameCount-1){
            this.frame = 0;
        }
    }

    //function used to generate the sprite array.
    //  we need the block horizontal and vertical positions, and the size of the spritesheet.
    generateSpriteArray(spriteOffsetX,spriteOffsetY,spriteFrameCount,spriteFrameLine){
        let a = [];
        for(let y=0; y<(spriteFrameCount/spriteFrameLine);y++){
            for(let x=0; x<spriteFrameLine; x++){            
                a.push([spriteOffsetX * (x==spriteFrameLine?0:x), 
                        spriteOffsetY * (y==spriteFrameCount/spriteFrameLine?0:y) ]);

            }
        }
        return a;
    }
}