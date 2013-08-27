"use strict";

///* ../lib/Canvas.js
///* ../lib/Sprite.js
///* ../lib/Math.js
///* ../lib/geom.js
///* World.js
///* Robot.js



// ============ RESOURCE LOADER ====================


function ResourceManager(){
	this.data = {};
	this.load = (function(idString, data){
		if(this.data[idString]!==undefined){
			throw new Error("RESOURCE MANAGER: idString already used: " + idString);
		}else{
			this.data[idString] = data;
		}
	}).bind(this);
	this.get = (function(idString){
		if(this.data[idString]===undefined){
			throw new Error("RESOURCE MANAGER: idString not found: " + idString);
		}else{
			return this.data[idString];
		}
	}).bind(this);
}

var resource = new ResourceManager();

resource.load("iWall", new Sprite("img/wall4.png", 4, 4));
resource.load("iGrass", new Sprite("img/grass.png", 1, 1));


// =======================================================================




// =============================== INIT ===================================

document.title = "Planner Bot";

var world = new World(10, 10);


var canvas = new Canvas("mainCanvas");
var robot = new Robot();

//=============================== EVENTS =============================

canvas.on("mousedown", function(e){
	
});



canvas.on("animate",function(delta){
	
	// ============ UPDATE
	
	world.update();
	robot.update();
	
	// ============ DRAW
	canvas.clear();
	
	// renderer
	//canvas.paused = true;
});


canvas.on("blur",function(){
	/**/
})