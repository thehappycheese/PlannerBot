

///* Cell.js

function World(aw,ah){
	"use strict";
	
	this.setSize = (function(aw, ah){
		this.w = aw;
		this.h = ah;
		
		this.cells = [];
		
		var i, j, temp;
		
		for(i = 0 ; i < this.h; i++){
			temp = [];
			for(j = 0;j<this.w;j++){
				temp.push(new Cell())
			}
			this.cells.push(temp);
		}
		
	}).bind(this);
	
	
	this.getCell = (function(x, y){
		if(x<0 || x>=this.w || y<0 || y>=this.h){
			return null;
		}
		return this.cells[y][x];
	}).bind(this);
	
	this.draw = (function(ctx){
		var x, y;
		for(x = 0 ; x<this.w; x++){
			for(y = 0; y<this.h; y++){				
				res.i.grass.drawFrameAt(ctx, 0, x * size, y * size, 0);
				if (this.getCell(x, y).wall) {
					res.i.wall.drawFrameAt(ctx, 0, x * size, y * size, 0);
				}
			}
		}
	}).bind(this);
	
	// ========= CONSTRUCTION ===================
	this.viewport = {w:10, h:10, x:0, y:0};
	this.w = aw;
	this.h = ah;
	
	this.scale = 32;
	
	this.cells = null;
	this.entities = [];
	
	this.setSize(this.w, this.h);
	
}



