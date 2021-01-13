var player_frames = [
    [
    "assets/images/player/pink/1.png",
    "assets/images/player/pink/2.png",
    "assets/images/player/pink/3.png",
    "assets/images/player/pink/4.png",
    "assets/images/player/pink/5.png",
    "assets/images/player/pink/6.png"]
];

var current_player_frame = player_frames[0];

function Player(width, height, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.move_speed = [1, 2, 3, 4];
    this.move_type = ["up", "down", "up", "down",  "up", "down",  "up", "down"];
    this.random_move_type = "up";
    this.random_move_speed = 2;
    
    this.img = new Image();
    this.img.src = current_player_frame[0];

    this.frame_count = 0;
    this.prepare_animation = function(){
        var player_animation_interval = setInterval(() => {
            
            this.img.src = current_player_frame[this.frame_count];
            this.frame_count++;
            if(this.frame_count == current_player_frame.length -1){
                this.frame_count = 0;
            }
        }, 100);
    }

    this.get_random_move_speed = function(){
        var rand = Math.floor(Math.random() * this.move_speed.length);
        return this.move_speed[rand];
    }

    this.get_random_move_type = function(){
            var rand = Math.floor(Math.random() * this.move_type.length);
            return this.move_type[rand];
    }




    this.move = function(){
        var player_move_interval = setInterval(()=>{
         this.random_move_type = this.get_random_move_type();
         this.random_move_speed = this.get_random_move_speed();
            console.log(this.random_move_type)
            console.log(this.random_move_speed)
        }, 500)
       
    }

    this.move();
    this.draw = function(ctx){
        ctx.drawImage(this.img, 70, this.y, this.width, this.height);
    }
}