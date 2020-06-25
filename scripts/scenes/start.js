class Start{
    constructor(){
       
    }

    setup(){
        
        textFont(startFont);
        
        
    }

    draw(){
        let titleColor = [];
        let startColor = [];
        image(startImage,0,0,width,height);
        titleColor = [ 
            128 + sin(frameCount*0.1) * 25,
            20,
            128 + sin(frameCount*0.1) * 25
        ];

        startColor = [
            200 + sin(frameCount*0.1) * 25,
            200 + cos(frameCount*0.1) * 25,
            200 + sin(frameCount*0.1) * 25
        ]

        this.drawText("Hipsta", 
                    width/12+10,
                    titleColor,
                    width/3.5,
                    height/2-(width/12)+20+ 5*sin(frameCount*.1),
                    5);
        
        this.drawText("Adventures", 
                    width/12,
                    titleColor,
                    width/2.5,
                    height/2 +5*cos(frameCount*.1),
                    5);

        let play = "Enter to PLAY";
        textSize(52);
        this.drawText(play,
                       52,
                       startColor,
                       width / 2 - textWidth(play)/2,
                       height-100 + sin(frameCount*.09),
                       5 );

    }

    keyPressed(key){
        if (key === "Enter"){
            currentScene = "game";
        }

    }

    drawText(value, size, cor, posX, posY,dropShadow=0){
        textSize(size);
        if (dropShadow){
            fill("black");
            text(value, posX+dropShadow, posY+dropShadow);
        }
        fill(cor);
        text(value, posX, posY);

    }


    drw(){
        beginShape();
        translate(-this.bounds.x * width / this.bounds.w, -this.bounds.y * height / this.bounds.h);
        for (let i = 0; i < this.points.length; i++) {
            let p = this.points[i];
            vertex(
            p.x * width / this.bounds.w +
                sin(20 * p.y / this.bounds.h + millis() / 1000) * width / 30,
            p.y * height / this.bounds.h
            );
        }
        endShape(CLOSE);
    }

}