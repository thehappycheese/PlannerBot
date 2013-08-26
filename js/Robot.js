
///* geom.js

function Robot(){
	
	this.position = new geom.Point(5,5);
	this.rotation = 0;
	this.sprite = new Sprite("img/simplebot.png", 3, 1);
	
	this.blinkCounter = 0;
	
	
	
	
	
	this.draw = (function(ctx){
		this.sprite.drawAt(ctx,this.position.x,this.position.y,0);
	}).bind(this);
	
	this.update = (function(){
		
		if(this.blinkCounter>350){
			this.sprite.currentFrame=1;
		}
		if(this.blinkCounter>351){
			this.sprite.currentFrame=2;
		}
		if(this.blinkCounter>352){
			this.sprite.currentFrame=0;
			this.blinkCounter = 0;
		}
		
		this.blinkCounter++;
	}).bind(this);
	

}

//function behaviour

function bRobotBlink(){
	this.on
}