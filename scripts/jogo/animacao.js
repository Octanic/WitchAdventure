class Animacao{
    constructor(imagem, x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed ){

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
        const sprGen = new SpriteGenerator(spriteOffsetX,spriteOffsetY,spriteFrameCount,spriteFrameLine);
        this.matriz = sprGen.SpriteArray;

        //current frame being drawn
        this.frame = 0;
        //the spritesheet
        this.imagem = imagem;

        //horizontal position on screen
        this.x = x;
        //vertical position on screen
        this.y = y;

        //moving position speed
        this.speed=speed;
        
        this.frame=0;
    }

    exibe(){
        image(this.imagem, 
                this.x, //x
                this.y, //y
                this.spriteOffsetX/this.spriteZoomOut, //width
                this.spriteOffsetY/this.spriteZoomOut, //height
                this.matriz[this.frame][0], //sprite x
                this.matriz[this.frame][1], //sprite y
                this.spriteOffsetX, //sprite width
                this.spriteOffsetY); //sprite height
                
        this.anima();
        this.move();
    }

    move(){

    }

    //Function used to animate the frames
    anima() {
        this.frame++;

        if (this.frame >= this.matriz.length-1){
            this.frame = 0;
        }
    }

}