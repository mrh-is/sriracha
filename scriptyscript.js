var game = {}; // global

var gameInit = function() {

	game.canvas = document.getElementById("gameCanvas");
	game.ctx = game.canvas.getContext("2d"); // game context

	// makes canvas the area of focus for keyboard
	game.canvas.setAttribute("tabindex","0");
	game.canvas.focus();

	game.onKeyDown = function(event) {
		if(event.keyCode === 38) { // arrow up
			var startUp = window.setInterval(level.bottle.move("up"), 1000/60);
		}
		if(event.keyCode === 40) { // arrow down
			var startDown = window.setInterval(level.bottle.move("down"), 1000/60);
		}
		if(event.keyCode === 37) { // arrow left
			var startLeft = window.setInterval(level.bottle.move("left"), 1000/60);
		}
		if(event.keyCode === 39) { // arrow right
			var startRight = window.setInterval(level.bottle.move("right"), 1000/60);
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
			level.bowl.getSrirachaed(level.bottle.x, level.bottle.y, level.bottle.radius);
		}
	};

	game.onKeyUp = function(event) {
		if(event.keyCode === 38) { // arrow up
			clearInterval(startUp);
		}
		if(event.keyCode === 40) { // arrow down
			clearInterval(startDown);
		}
		if(event.keyCode === 37) { // arrow left
			clearInterval(startLeft);
		}
		if(event.keyCode === 39) { // arrow right
			clearInterval(startRight);
		}
		if(event.keyCode === 32) { // spacebar
			level.bottle.open = false;
			console.log("bottle closed!");
		}
	};

	game.canvas.addEventListener("keydown", game.onKeyDown, false); // why does this need to be defined after the function is defined?
	game.canvas.addEventListener("keyup", game.onKeyUp, false);

	var level = new Level(1);

	game.update = function() {
		level.schloo.draw(); // draw background/animations
		level.bowl.draw();
		// draw bowl
		level.bottle.draw(); // draw bottle
	};

	window.setInterval(game.update, 1000/60);
};


function Level(level) {
	this.level = level;
	// create Schloo with given rate
	this.schloo = new Schloo(1);
	// create Bowl with given radius
	this.bowl = new Bowl(50,100,150);
	// create Bottle with given radius
	this.bottle = new Bottle(200,200,20);
}
