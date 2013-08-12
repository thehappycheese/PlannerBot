


function Viewport(aw,ah){
	this.x = 0;
	this.y = 0;
	this.w = aw;
	this.h = ah;
	
	this.within = (function(x,y){
		if(x>=this.x && y>=this.y){
			if(this.w+this.x>x && this.h+this.y>y){
				return true;
			}
		}
		return false;
	}).bind(this);
	
	this.tx = (function(){
		
	}).bind(this);
	
}