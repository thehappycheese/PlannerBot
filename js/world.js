




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
	
	
	this.setCell = (function(x, y, value){
		if(x<0 || x>=this.w || y<0 || y>=this.h){
			return;
		}
		this.cells[y][x] = value;
	}).bind(this);
	
	this.draw = (function(ctx){
		var x, y;
		for(x = 0 ; x<this.w; x++){
			for(y = 0; y<this.h; y++){
				ctx.fillStyle = this.getCell(x,y).color;
				ctx.fillRect(x*size, y*size, size-1, size-1);
				imgGrass.drawFrameAt(ctx, 0,x*size,y*size,0);
			}
		}
	}).bind(this);
	
	// ========= CONSTRUCTION ===================
	this.w = aw;
	this.h = ah;
	
	this.cells = null;
	
	this.setSize(this.w, this.h);
	
}



