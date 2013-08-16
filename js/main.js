"use strict";

///* ../lib/Canvas.js
///* ../lib/Sprite.js
///* ../lib/Math.js
///* World.js





var res = {i:{}, a:{}};

res.i.wall = new Sprite("img/wall4.png", 4, 4);
res.i.grass = new Sprite("img/grass.png", 1, 1);
res.i.player = new Sprite("img/robot2.png", 4, 2);
//res.i.star = new Sprite("img/star2.png", 1, 1);

// =======================================================================

var scale = 8;
function draw(){
	var x,y,z;
	var xd,yd,zd;
	var c = canvas.ctx;
	c.fillStyle = "white";
	c.fillRect(0,0,32*scale,32*scale);
	for(y=0;y<32;y++){
		for(x=0;x<32;x++){
			for(z=0;z<32;z++){
				xd = 16-x;
				yd = 16-y;
				zd = 16-z;
				if(Math.sqrt(xd*xd+yd*yd+zd*zd)<16 || (zd>0 && Math.sqrt(xd*xd+yd*yd)<16)){
					pix(x,y,z,"rgb("+(x*8)+","+(y*8)+","+(z*8)+")");
				}
			}
		}
	}
}

function pix(x,y,z,col){
	canvas.ctx.fillStyle = col;
	var pnt = {x:x*scale*Math.SQRT1_2, y:y*scale*Math.SQRT1_2};
	Math.rotate(pnt,-Math.PI/4);
	pnt.x = Math.round(pnt.x/scale)*scale;
	pnt.y = Math.round(pnt.y/scale/1.99)*scale + 23*scale - Math.round(0.5*z)*scale;
	canvas.ctx.fillRect(pnt.x, pnt.y,scale,scale);
	
}


// =============================== INIT ===================================

document.title = "Planner Bot";

var world = new World(60, 40);

var size  = 16*1;

var px = 0;
var py = 0;


//=============================== DECLARATIONS=============================


var canvas = new Canvas("mainCanvas");
canvas.setSize(size*world.w,size*world.h);

var mode = false;
canvas.on("mousedown", function(e){
	var xx = Math.floor(canvas.mouseX / size);
	var yy = Math.floor(canvas.mouseY / size);
	mode = !world.getCell(xx, yy).wall;
});



canvas.on("update",function(delta){
	if(canvas.isMouseDown(0)){
		var xx = Math.floor(canvas.mouseX / size);
		var yy = Math.floor(canvas.mouseY / size);
		world.getCell(xx, yy).wall = mode;
	}
});


canvas.on("draw", function (ctx) {
	canvas.clear();
	
	//world.draw(ctx);
	draw();
});


canvas.on("blur",function(){
	canvas.ctx.fillStyle = "black";
	canvas.ctx.fillRect(0,0, canvas.width, 20);
	canvas.ctx.fillStyle = "yellow";
	canvas.ctx.font = "13 px sans-serif"
	canvas.ctx.fillText("Click here to give the game focus!",0,14);
})