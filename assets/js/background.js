function Background(image, width, height, x_speed){
    this.childern = [];
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.x_speed = x_speed;
    this.img = new Image();
    this.img.src = image;

    for(i=0; i<100; i++){
        this.childern.push({
            img:this.img,
            width: this.width,
            height :this.height,
            x :this.x,
            y: 0,
            x_speed:this.x_speed,
            y_speed : 5
        })
        this.x += this.width;
    }
    console.log(this.childern)
    this.draw = function(ctx){
      for(i=0; i<this.childern.length;i++){  
        ctx.drawImage(this.childern[i].img, this.childern[i].x, this.childern[i].y, this.childern[i].width, this.childern[i].height);
        this.childern[i].x -= this.childern[i].x_speed;
      }
        
    }
}