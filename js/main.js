"use strict";

///* ../lib/Canvas.js
///* ../lib/Sprite.js
///* ../lib/Math.js
///* geom.js
///* World.js
///* Robot.js



// ============ RESOURCE LOADER ====================

var res = {i:{}, a:{}};

res.i.wall = new Sprite("img/wall4.png", 4, 4);
res.i.grass = new Sprite("img/grass.png", 1, 1);
//res.i.star = new Sprite("img/star2.png", 1, 1);

// =======================================================================




// =============================== INIT ===================================

document.title = "Planner Bot";

var world = new World(10, 10);

var size  = 32;

var canvas = new Canvas("mainCanvas");
canvas.setSize(size*world.w,size*world.h);

var input  = canvas.input;

var mode = false;

var robot = new Robot();

//=============================== EVENTS =============================

input.on("mousedown", function(e){
	var xx = Math.floor(input.mouseX / size);
	var yy = Math.floor(input.mouseY / size);
	mode = !world.getCell(xx, yy).wall;
});



canvas.on("animate",function(delta){
	
	// ============ UPDATE
	if(canvas.input.isMouseDown(0)){
		var xx = Math.floor(canvas.input.mouseX / size);
		var yy = Math.floor(canvas.input.mouseY / size);
		world.getCell(xx, yy).wall = mode;
	}
	robot.update();
	
	// ============ DRAW
	canvas.clear();
	
	world.draw(canvas.ctx);
	robot.draw(canvas.ctx);
	//canvas.paused = true;
});


canvas.on("blur",function(){
	/**/
})