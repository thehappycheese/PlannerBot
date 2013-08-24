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


function draw(){
	var x,y,z;
	var xd,yd,zd;
	var scale = 8;
	var width = 32;
	
	var c = canvas.ctx;
	
	c.fillStyle = "white";
	c.fillRect(0,0,width*scale,width*scale);
	
	c.strokeStyle = "grey";
	for(var i=0;i<width*scale;i+=scale){
		c.beginPath();
		c.moveTo(0,i);
		c.lineTo(width*scale,i);
		c.moveTo(i,0);
		c.lineTo(i,width*scale);
		c.stroke();
	}
	
	// ============================= Draw sphereiod =============================
	for(y=0;y<width;y++){
		for(x=0;x<width;x++){
			for(z=0;z<width;z++){
				xd = width/2-x;
				yd = width/2-y;
				zd = width/2-z;
				if(Math.sqrt(xd*xd+yd*yd+zd*zd)<width/2 || (zd>0 && Math.sqrt(xd*xd+yd*yd)<width/2)){
					pix(x,y,z,"rgb("+(x*8)+","+(y*8)+","+(z*8)+")");
				}
			}
		}
	}
	/*
	// ============================= Draw square =============================
	for(y=0;y<width;y+=0.5){
		for(x=0;x<width;x+=0.5){
			pix(x,y,0,"rgb("+(x*8)+","+(y*8)+","+(4*8)+")");
		}
	}
	*/
	// ============================= Draw circle =============================
	/*z=0;
	for(y=0;y<=width;y++){
		for(x=0;x<=width;x++){
			xd = 15.5-x;
			yd = 15.5-y;
			zd = 15.5-z;
			if(Math.sqrt(xd*xd+yd*yd)<15){
				pix(x,y,z,"rgba("+(x*8)+","+(y*8)+","+(z*8)+",0.1)");
			}
		}
	}*/
}

function pix(x,y,z,col){
	var scale = 8;
	var width = 32;
	
	canvas.ctx.fillStyle = col;
	var pnt = {x:x*scale*Math.SQRT1_2, y:y*scale*Math.SQRT1_2};
	Math.rotate(pnt,-Math.PI/4)
	pnt.x = (pnt.x/scale)+canvas.mouseX/scale-10;
	pnt.y = (pnt.y/scale/2 + 22.2 - 0.5*z)+canvas.mouseY/scale-10;
	
	if(true){
		pnt.x*=scale;
		pnt.y*=scale;
		canvas.ctx.fillRect(pnt.x, pnt.y,1,1);
	}else{
		pnt.x=Math.floor(pnt.x)*scale;
		pnt.y=Math.floor(pnt.y)*scale;
		canvas.ctx.fillRect(pnt.x, pnt.y,scale,scale);
	}
	
	
	
	
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
	//canvas.paused = true;
});


canvas.on("blur",function(){
	/*canvas.ctx.fillStyle = "black";
	canvas.ctx.fillRect(0,0, canvas.width, 20);
	canvas.ctx.fillStyle = "yellow";
	canvas.ctx.font = "13 px sans-serif"
	canvas.ctx.fillText("Click here to give the game focus!",0,14);*/
})