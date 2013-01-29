var game = {}; // global
var keypresses = [0, 0, 0, 0]; // track state of keypresses: up down left right
var introStatus = true;

var gameInit = function() {

	game.canvas = document.getElementById("gameCanvas");
	game.ctx = game.canvas.getContext("2d"); // game context

	// makes canvas the area of focus for keyboard
	game.canvas.setAttribute("tabindex","0");
	game.canvas.focus();

	game.onKeyDown = function(event) {
		if(event.keyCode === 38) { // arrow up
			keypresses[0] = 1;
		}
		if(event.keyCode === 40) { // arrow down
			keypresses[1] = 1;
		}
		if(event.keyCode === 37) { // arrow left
			keypresses[2] = 1;
		}
		if(event.keyCode === 39) { // arrow right
			keypresses[3] = 1;
		}
		if(event.keyCode === 32) { // spacebar

			// use this if statement for single "bottle open" event

			// if(bottle.open === false) {
			//	bottle.open = true;
			//	console.log("bottle open!");
			// }
			

			// use this (non-if) statement for continuous "bottle open" events

			level.bottle.open = true;
			console.log("bottle open!");
			// level.bowl.getSrirachaed(level.bottle.x+level.bottle.h, level.bottle.y+level.bottle.w, level.bottle.radius);
			// level.bowl.getSrirachaed(level.bottle);
		}
	};

	game.onKeyUp = function(event) {
		if(event.keyCode === 38) { // arrow up
			keypresses[0] = 0;
		}
		if(event.keyCode === 40) { // arrow down
			keypresses[1] = 0;
		}
		if(event.keyCode === 37) { // arrow left
			keypresses[2] = 0;
		}
		if(event.keyCode === 39) { // arrow right
			keypresses[3] = 0;
		}
		if(event.keyCode === 32) { // spacebar
			if(introStatus === true) {
				startRefresh();
				introStatus = false;
			}
			else {
				level.bottle.open = false;
				console.log("bottle closed!");
			}
		}
	};

	game.canvas.addEventListener("keydown", game.onKeyDown, false); // why does this need to be defined after the function is defined?
	game.canvas.addEventListener("keyup", game.onKeyUp, false);

	var gameStart = new Intro();
	console.log("started game");

};

function startRefresh() {
	var refreshInterval = 50;  // 50 millisecond
	var level = new Level(1, refreshInterval);
	console.log("Level is created!");
	
	game.update = function() {
		level.schloo.draw(); // draw background/animations
		level.bowl.draw();// draw bowl
		level.bottle.move();
		level.bottle.draw(); // draw bottle
		level.bowl.getSrirachaed(level.bottle);
	};

	window.setInterval(game.update, refreshInterval);
}

function Level(level, refreshInterval) {
	this.level = level;
	// this.message = new Message();
	// create Schloo with given rate
	this.schloo = new Schloo(1, refreshInterval);
	// create Bowl with given radius
	this.bowl = new Bowl(50,150,200);
	// create Bottle with given radius
	this.bottle = new Bottle(200,200,20);
}

function Intro() {
	game.canvas = document.getElementById("gameCanvas");
	game.ctx = game.canvas.getContext("2d"); // game context
	game.ctx.save();
	game.ctx.fillStyle = "rgba(60, 60, 60, 1)";
	game.ctx.fillRect(0, 0, 900, 600);
	game.ctx.restore();
	game.ctx.save();
	game.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
	game.ctx.fillRect(50, 50, 800, 500);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "70px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("get that", 375, 145);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "115px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("sriracha", 220, 240);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "205px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("!", 630, 243);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "18px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("You guys!!!", 220, 315);
	game.ctx.fillText("Michelle is HUNGRY. The problem is, she's allergic to any", 220, 350);
	game.ctx.fillText("food that doesn't have sriracha on it. Help her out by", 220, 370);
	game.ctx.fillText("covering the entire bowl before she gets too hungry.", 220, 390);
	game.ctx.fillText("Use the ARROW KEYS for navigation", 220, 450);
	game.ctx.fillText("and the SPACE BAR to dispense the sriracha.", 220, 470);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);

	game.ctx.save();
	game.ctx.beginPath();
	game.ctx.strokeStyle = "#D23B27";
	game.ctx.lineWidth = 2;
	game.ctx.strokeRect(180, 420, 540, 70);
	game.ctx.closePath();
	game.ctx.restore();
}