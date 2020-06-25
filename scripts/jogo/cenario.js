
class Cenario{
    constructor(image, speed){
      this.image = image;
      this.speed = speed;
      this.x1 = 0;
      this.x2 = width;
    }
  
    exibe(yPos=0){
      image(this.image, this.x1, yPos, width, height);
      image(this.image, this.x2, yPos, width, height);
  
    }
  
    move(){
      this.x1 -= this.speed;
      this.x2 -= this.speed;
  
      if (this.x1 <= -width){
        this.x1 = width;
      }
      if (this.x2 <= -width){
        this.x2 = width;
      }
  
    }
  }