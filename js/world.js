

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
	
	this.update = (function(){
		
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



