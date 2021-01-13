var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var player_width = 120; // 30
var player_height = 40; // 10

var background = new Background("assets/images/backgrounds/vortex.png", canvas.width, canvas.height, 5);

var player = new Player(player_width, player_height, 100, 100);
player.prepare_animation();


function draw(){


    background.draw(ctx)
    player.draw(ctx);
    
    if(player.random_move_type == "up"){
        player.y -= player.get_random_move_speed();
    }else{
        player.y += player.get_random_move_speed();
    }


    if(player.y <= 0){
        player.y = 0;
    }

    if(player.y + player_height >= canvas.height){
        player.y = canvas.height - player_height;
    }


    requestAnimationFrame(draw)
  
}

draw();