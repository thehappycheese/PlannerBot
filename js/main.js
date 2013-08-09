"use strict";



var imgGrass = new nImage("img/grass.png",1,1);
var imgPlayer = new nImage("img/robot.png", 4, 2);
imgPlayer.play = true;




// =============================== INIT ===================================

var world = new World(8, 8);

var size  = 16*3;



//=============================== DECLARATIONS=============================


var canvas = new Canvas("mainCanvas");
canvas.setSize(size*8,size*8);


canvas.on("mousedown", function(e){
	//
});



canvas.on("update",function(delta){
	imgPlayer.update();
});


canvas.on("draw",function(ctx){
	canvas.clear();
	world.draw(ctx);
	imgPlayer.drawCurrentFrameAt(ctx,32,32,0);
});


canvas.on("blur",function(){
	canvas.ctx.fillStyle = "black";
	canvas.ctx.fillRect(0,0, canvas.width, 20);
	canvas.ctx.fillStyle = "yellow";
	canvas.ctx.font = "13 px sans-serif"
	canvas.ctx.fillText("Click here to give the game focus!",0,14);
})