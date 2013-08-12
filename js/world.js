

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
				
				ctx.fillStyle = this.getCell(x, y).color;
				
				res.i.grass.drawFrameAt(ctx, 0, x * size, y * size, 0);
				if (this.getCell(x, y).wall) {
					var a0 = 0,
						a1 = 0,
						a2 = 0,
						a3 = 0;

					if (this.getCell(x - 1, y)) {
						a0 = this.getCell(x - 1, y).wall ? 1 : 0;
					}
					if (this.getCell(x, y-1)) {
						a1 = this.getCell(x, y-1).wall ? 1 : 0;
					}
					if (this.getCell(x+1, y )) {
						a2 = this.getCell(x+1, y).wall ? 1 : 0;
					}
					if (this.getCell(x, y + 1)) {
						a3 = this.getCell(x, y + 1).wall ? 1 : 0;
					}
					var f = a0 | (a1 << 1) | (a2 << 2) | (a3 << 3);
					res.i.wall.drawFrameAt(ctx, f, x * size, y * size, 0);
				}
			}
		}
	}).bind(this);
	
	// ========= CONSTRUCTION ===================
	this.viewport = {w:10, h:10, x:0, y:0};
	this.w = aw;
	this.h = ah;
	
	this.cells = null;
	
	this.setSize(this.w, this.h);
	
}



