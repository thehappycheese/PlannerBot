

// ========================  ACTIONS  ========================

function aGoto(dest) {

	this.precondition = "pathableto:"+dest;
	this.postcondition = "at:"+dest;
	
	this.cost = (function (world) {
		return 1;
	}).bind(this);
	
	this.test = (function (world) {
		// location is valid and pathable to
		
	}).bind(this);

	this.modify = (function (world) {
		// location at destination.
		return world;
	}).bind(this);
}



// ======================= WORLD AND AGENT ============================
function pAgent(){
	this.x = 5;
	this.inventory = [];
	this.has = (function(item){
		return this.inventory.indexOf(item) !== -1;
	}).bind(this);
}

function pWorld() {
    this.agent = 5; // player
    this.kx = 0; // key
    this.dx = 6; // door
    this.sx = 8; // star

    this.haskey = false;
    this.hasstar = false;


    this.clone = (function () {
    	var result = new pWorld();
    	result.px = this.px = 5; // player
    	result.kx = this.kx = 0; // key
    	result.dx = this.dx = 6; // door
    	result.sx = this.sx = 8; // star

    	result.haskey = this.haskey = false;
    	result.hasstar = this.hasstar = false;
    	return result;
    }).bind(this);
}


// ================================= CREATE PLAN ======================



function Plan(aworld, agoal, aactionset) {
    var plan = [];
	// ======= OPEN AND CLOSED SET =======
	// --- an object containing the world and actionset "So far" ----
    var todo = [{ w: aworld.clone(), a: [] , h:999, g:0}];
    var done = [];
    while (todo.length > 0) {

    	// Find all actions which have prerequisites met:
    	var newNodes = getValidActionsFromList(dummyworld, aactionset);
    }
	//

}










var world = new pWorld();

var goal = {px:0}; // Goal: move player to 0;

var actionset = [aMoveLeft, aMoveRight];

console.log(Plan(world,goal,actionset));





// ============================= HELPER FUNCTIONS ================================

function getValidActionsFromList(world, list) {
	var result = [];
	for (var item in list) {
		if (list[item].pre(world)) {
			result.push(list[item]);
		}
	}
	return result;
}