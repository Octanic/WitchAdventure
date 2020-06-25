class Animacao{
    constructor(imagem, config){ //x, y, spriteOffsetX, spriteOffsetY, spriteFrameCount, spriteFrameLine, spriteZoomOut, speed, ignoreSpriteFrames=0 ){
        
        //sprite block horizontal position
        this.spriteOffsetX = config.configuration.spriteOffsetX; 
        
        //sprite block vertical position
        this.spriteOffsetY = config.configuration.spriteOffsetY;

        //magic number to "zoom out" the sprite
        this.spriteZoomOut = config.configuration.spriteZoomOut; 

        //total of frames from my spritesheet
        this.spriteFrameCount = config.configuration.spriteFrameCount;
        
        //total of frames of an entire line of my spritesheet
        this.spriteFrameLine = config.configuration.spriteFrameLine; 

        //linear array containing the horizontal and vertical positions to update the blocks
        const sprGen = new SpriteGenerator(
                                        config.configuration.spriteOffsetX,
                                        config.configuration.spriteOffsetY,
                                        config.configuration.spriteFrameCount,
                                        config.configuration.spriteFrameLine,
                                        config.configuration.ignoreLastSpriteFrames);
                                        
        this.matriz = sprGen.SpriteArray;

        //current frame being drawn
        this.frame = 0;
        //the spritesheet
        this.imagem = imagem;

        //horizontal position on screen
        this.x = config.configuration.xPosition;
        //vertical position on screen
        this.y = config.configuration.yPosition;

        //moving position speed
        this.speed = config.configuration.speed;
        
        //checks if the subject is erratic, i.e. it moves up and down at will;
        this.isErratic = config.configuration.isErratic;

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