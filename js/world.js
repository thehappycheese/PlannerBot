

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
		for(x = 0 ; x<this.w; x+=1){
			for(y = 0.5; y<this.h-0.5; y+=1){
				if (this.getCell(x, Math.floor(y)).wall && this.getCell(x, Math.ceil(y)).wall) {
					res.i.wall.drawFrameAt(ctx, 1, x * size, y * size, 0);
				}
			}
		}
		for(x = 0.5 ; x<this.w-0.5; x+=1){
			for(y = 0; y<this.h; y+=1){
				if (this.getCell(Math.floor(x), y).wall && this.getCell(Math.ceil(x), y).wall) {
					res.i.wall.drawFrameAt(ctx, 2, x * size, y * size, 0);
				}
			}
		}
		for(x = 0.5 ; x<this.w-0.5; x+=1){
			for(y = 0.5; y<this.h-0.5; y+=1){
				if (this.getCell(Math.floor(x), Math.ceil(y)).wall && this.getCell(Math.ceil(x), Math.floor(y)).wall) {
					//		
					if(!this.getCell(Math.floor(x), Math.floor(y)).wall && !this.getCell(Math.ceil(x), Math.ceil(y)).wall){
						res.i.wall.drawFrameAt(ctx, 3, x * size, y * size, 0);
					}
				}
				if (this.getCell(Math.floor(x), Math.floor(y)).wall && this.getCell(Math.ceil(x), Math.ceil(y)).wall) {
					//		
					if(!this.getCell(Math.floor(x), Math.ceil(y)).wall && !this.getCell(Math.ceil(x), Math.floor(y)).wall){
						res.i.wall.drawFrameAt(ctx, 4, x * size, y * size, 0);
					}
				}
			}
		}
		var tt = size;
		res.i.player.drawFrameAt(ctx,0,Math.round((canvas.mouseX-tt/2)/tt)*tt, Math.round((canvas.mouseY-tt/2)/tt)*tt);
	}).bind(this);
	
	// ========= CONSTRUCTION ===================
	this.viewport = {w:10, h:10, x:0, y:0};
	this.w = aw;
	this.h = ah;
	
	this.cells = null;
	
	this.setSize(this.w, this.h);
	
}



