class SpriteGenerator{
    //Class used to generate the sprite array.
    //  we need the block horizontal and vertical positions, and the size of the spritesheet.
    constructor(spriteOffsetX,spriteOffsetY,spriteFrameCount,spriteFrameLine,ignoreLastFrames=0){

        let a = [];

        for(let y=0; y < Math.round(spriteFrameCount/spriteFrameLine); y++){
            for(let x=0; x < spriteFrameLine; x++){            
                a.push([spriteOffsetX * x, 
                        spriteOffsetY * y]);

            }
        }
        
        //Sometimes, spritesheets have some additional content or gaps in the last frames, which we should ignore.
        //By saying how many times we have to ignore the last frame, we just fill the ignoreLastFrames with the amount of frames we want to skip.
        if (ignoreLastFrames > 0){
            for(let i=1;i<=ignoreLastFrames;i++){
                a.pop();
            }
        }

        //Send the data we have calculated
        this.SpriteArray = a;
        
    }
}