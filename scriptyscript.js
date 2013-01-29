var game = {}; // global
var level;
var messageStatus = 0;
var intervalId;
var spacePushed = false;

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

			spacePushed = true;
			console.log("keyDown "+spacePushed);

			if (level === undefined) { return; }
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
			console.log("space up");
			if (!spacePushed) { return; }
			spacePushed = false;
			console.log("keyUp "+spacePushed);
			if ((messageStatus > 0) && (messageStatus < 6)) {
				window.clearInterval(intervalId);
				startRefresh(messageStatus);
				messageStatus = 0;
			}
			else {
				level.bottle.open = false;
				console.log("bottle closed!");
			}
		}
	};

	game.canvas.addEventListener("keydown", game.onKeyDown, false); // why does this need to be defined after the function is defined?
	game.canvas.addEventListener("keyup", game.onKeyUp, false);

	// var gameStart = new Intro();
	ShowLevelMessage(0);
	console.log("started game");

};

function startRefresh(startLevel) {
	var refreshInterval = 50;  // 50 millisecond
	level = new Level(startLevel, refreshInterval);
	console.log("Level is created!");
	
	game.update = function() {
		console.log("updating");
		level.schloo.draw(); // draw background/animations
		level.bowl.draw();// draw bowl
		level.bottle.move();
		level.bottle.draw(); // draw bottle
		level.bowl.getSrirachaed(level.bottle);
	};

	intervalId = window.setInterval(game.update, refreshInterval);
}

function Level(level, refreshInterval) {
	this.level = level;
	// this.message = new Message();
	// create Schloo with given rate
	this.schloo = new Schloo(level, refreshInterval);
	// create Bowl with given radius
	this.bowl = new Bowl(50+12.5*(level-1),150+12.5*(level-1),200-25*(level-1), 0.5+0.1*(level-1));
	// create Bottle with given radius
	this.bottle = new Bottle(this.bowl.x+this.bowl.radius,this.bowl.y+this.bowl.radius-150,20);
	keypresses = [0, 0, 0, 0]; // track state of keypresses: up down left right
}

