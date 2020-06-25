//ConfigurationFactory Class
class ConfigurationFactory{
    constructor(type){
        this.configuration = {
            xPosition: width,
            yPosition: height,
            spriteFrameCount: 0,
            spriteFrameLine: 0,
            spriteOffsetX: 0,
            spriteOffsetY: 0,
            spriteZoomOut: 1,
            speed: 0,
            variationY:0,
            ignoreLastSpriteFrames:0,
            isErratic: false,
            hitBoxXOffset:0,
            hitBoxYOffset:0,
            hitBoxPrecisionW:1,
            hitBoxPrecisionH:1
        };

        switch (type){
            case "player":
                this.configuration = {
                    xPosition: 0,
                    yPosition: 0,
                    spriteFrameCount: 16,
                    spriteFrameLine: 4,
                    spriteOffsetX: 220,
                    spriteOffsetY: 270,
                    spriteZoomOut: 1.1,
                    speed: 0,
                    variationY: 30,
                    ignoreLastSpriteFrames:0,
                    isErratic: false,
                    hitBoxXOffset:60,
                    hitBoxYOffset:30,
                    hitBoxPrecisionW:.4,
                    hitBoxPrecisionH:.7               
                };
                break;
            case "slime":
                this.configuration = {
                    xPosition: width + 104,
                    yPosition: height - 134,
                    spriteFrameCount: 28,
                    spriteFrameLine: 4,
                    spriteOffsetX: 104,
                    spriteOffsetY: 104,
                    spriteZoomOut: 1,
                    speed: 17,
                    variationY:30,
                    ignoreLastSpriteFrames:0,
                    isErratic: false,
                    hitBoxXOffset:20,
                    hitBoxYOffset:0,
                    hitBoxPrecisionW:1,
                    hitBoxPrecisionH:1  
                };
                break;
            case "troll":
                this.configuration = {
                    xPosition: width+300,
                    yPosition: height-400,
                    spriteFrameCount: 28,
                    spriteFrameLine: 5,
                    spriteOffsetX: 400,
                    spriteOffsetY: 400,
                    spriteZoomOut: 1,
                    speed: 15,
                    variationY:0,
                    ignoreLastSpriteFrames: 2,
                    isErratic: false,
                    hitBoxXOffset:180,
                    hitBoxYOffset:60, 
                    hitBoxPrecisionW:.4,
                    hitBoxPrecisionH:.7  
                }
                break;
            case "flyingSlime": {
                this.configuration = {
                    xPosition: width+104,
                    yPosition: height-450,
                    spriteFrameCount: 13,
                    spriteFrameLine: 3,
                    spriteOffsetX: 200,
                    spriteOffsetY: 150,
                    spriteZoomOut: 1,
                    speed: 13,
                    variationY:0,
                    ignoreLastSpriteFrames: 0,
                    isErratic: true,
                    hitBoxXOffset:50,
                    hitBoxYOffset:30, 
                    hitBoxPrecisionW:.5,
                    hitBoxPrecisionH:.7  
                };
                break;
            }

        }

    }
}