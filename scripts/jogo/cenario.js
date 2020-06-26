
class Cenario{
    constructor(image, speed){
      this.image = image;
      this.speed = speed;
      this.x1 = 0;
      
      this.x2 = this.speed<0?-width:width;
    }
  
    exibe(yPos=0){
      //Have you ever seen some weird gaps between x1 and x2?
      //  that's because speed must be associated with the width. 
      //  or else, it will be drawing and sometimes the width 
      //  won't be a multiple of speed, causing this gaps. 
      // If we make the width multiple of speed, we can have a gapless background.
      // Since I'm using this parallax effect, different speeds are a problem.
      let w = Math.ceil(width/Math.abs(this.speed)) * Math.abs(this.speed);
      image(this.image, this.x1, yPos, w, height);
      image(this.image, this.x2, yPos, w, height);
  
    }
  
    move(){  
      //this.logCoord();
      this.x1 -= this.speed;
      this.x2 -= this.speed;
      if (this.speed<0){
        if (this.x1 >= width){
          this.x1 = -width;
        }
        if (this.x2 >= width){
          this.x2 = -width;
        }
      }
      else{

        if (this.x1 <= -width){
          this.x1 = width;
        }
        if (this.x2 <= -width){
          this.x2 = width;
        }
      }
      
    }

    logCoord(){
      if (this.speed === 12)
      console.log(`x1: ${this.x1}; x2: ${this.x2}`)
    }

  }