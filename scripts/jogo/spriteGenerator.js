class SpriteGenerator{
    //Class used to generate the sprite array.
    //  we need the block horizontal and vertical positions, and the size of the spritesheet.
    constructor(spriteOffsetX,spriteOffsetY,spriteFrameCount,spriteFrameLine){

        let a = [];

        for(let y=0; y < Math.round(spriteFrameCount/spriteFrameLine); y++){
            for(let x=0; x < spriteFrameLine; x++){            
                a.push([spriteOffsetX * x, 
                        spriteOffsetY * y]);

            }
        }

        this.SpriteArray = a;
        
    }
}