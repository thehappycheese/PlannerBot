

function clone(obj) {
    if (obj == null || typeof (obj) != 'object')
        return obj;

    var temp = obj.constructor(); // changed

    for (var key in obj)
        temp[key] = obj[key];
    return temp;
}


function pWorld() {
    this.px = 5; // player
    this.kx = 0; // key
    this.dx = 6; // door
    this.sx = 8; // star

    this.haskey = false;
    this.hasstar = false;


    this.clone = (function () {
        return clone(this);
    }).bind(this);
}



function aMoveLeft() {
    this.pre = (function (world) {
        return (world.px>0   &&   world.dx != (world.px-1) );
    }).bind(this);

    this.post = (function (world) {
        world.px -= 1;
        return world;
    }).bind(this);
}

function aMoveLeft() {
    this.pre = (function (world) {
        return (world.px>0   &&   world.dx != (world.px-1) );
    }).bind(this);

    this.post = (function (world) {
        world.px -= 1;
        return world;
    }).bind(this);
}





function State() {
    this.world = [];
    this.add = (function (aname, avalue) {
        this.world.push({ n: aname, v: avalue });
        return this;
    }).bind(this);
    // Provide hierustic to determine the distance between two states
}




function Plan(world, goal, actionSet) {
    var plan = [];
    // Duplicate world to use as dummy
    var dw = world.clone();
    // Open set
    var todo = [{w:dw, a:[]}];
    var done = [];
    // Find first action which has prerequisites met:
    for(var i = 0;i<actionset.length; i++){
        if(actionset[i].pre(dw)){
            actionset[i].post(dw);
            plan.push(actionset[i].constructor.name);
        }
    }
}








var w = new pWorld();

var goal = (new State()).add("px", 0); // Goal: move player to 0;

var actionset = [aMoveLeft];

console.log(Plan(w,goal,actionset));













/*
----------------------------------------------------

keepfueled


find enemyBase;
sto currentPosition in A;
report A;


*/