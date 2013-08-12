"use strict";

///* ../lib/Canvas.js
///* ../lib/Sprite.js
///* World.js





var res = {i:{}, a:{}};

res.i.wall = new Sprite("img/wall2.png", 4, 4);
res.i.grass = new Sprite("img/grass.png", 1, 1);
res.i.player = new Sprite("img/robot2.png", 4, 2);
res.i.star = new Sprite("img/star2.png", 1, 1);




// =============================== INIT ===================================

document.title = "Planner Bot";

var world = new World(15, 10);

var size  = 16*3;

var px = 0;
var py = 0;


//=============================== DECLARATIONS=============================


var canvas = new Canvas("mainCanvas");
canvas.setSize(size*15,size*10);


canvas.on("mousedown", function(e){
	var xx = Math.floor(canvas.mouseX / size);
	var yy = Math.floor(canvas.mouseY / size);
	world.getCell(xx, yy).wall = !world.getCell(xx, yy).wall;
});


var angl = 0, angr = 0;
var magl = 0, magr = 0;
canvas.on("update",function(delta){
	res.i.player.update();
});


canvas.on("draw", function (ctx) {
	canvas.clear();
	world.draw(ctx);
	res.i.star.drawCurrentFrameAt(ctx,48,48,0);
	res.i.player.drawCurrentFrameAt(ctx, Math.round(px/3)*3, Math.round(py/3)*3, 0);
});


canvas.on("blur",function(){
	canvas.ctx.fillStyle = "black";
	canvas.ctx.fillRect(0,0, canvas.width, 20);
	canvas.ctx.fillStyle = "yellow";
	canvas.ctx.font = "13 px sans-serif"
	canvas.ctx.fillText("Click here to give the game focus!",0,14);
})