
function xyrPoint (ax,ay,ar){
	this.x = ax || 0;
	this.y = ay || 0;
	this.r = ar || 0;
	
	this.add = (function(xyr){
		this.x += xyr.x;
		this.y += xyr.y;
		this.r += xyr.r;
		return this;
	}).bind(this);
	
	this.subtract = (function(xyr){
		this.x -= xyr.x;
		this.y -= xyr.y;
		this.r -= xyr.r;
		return this;
	}).bind(this);
	
	this.multiply = (function(scalar){
		this.x -= xyr.x;
		this.y -= xyr.y;
		this.r -= xyr.r;
		return this;
	}).bind(this);
	
	this.dist = (function(xy){
		return Math.sqrt(Math.pow(this.x-xy.x, 2) + Math.pow(this.y-xy.y,2));
	}).bind(this);
	
	this.distSq = (function(xy){
		return Math.sqrt(Math.pow(this.x-xy.x, 2) + Math.pow(this.y-xy.y,2));
	}).bind(this);
}