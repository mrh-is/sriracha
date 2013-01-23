var gameInit = function() {

	var game = {};
	
	game.canvas = document.getElementById("gameCanvas");
	game.ctx = game.canvas.getContext("2d"); // game context
	game.w = game.canvas.width;
	game.h = game.canvas.height;

	// makes canvas the area of focus for keyboard
	game.canvas.setAttribute("tabindex","0");
	game.canvas.focus();

	game.onKeyDown = function(event) {
		if(event.keyCode === 38) { // arrow up
			bottle.move("up");
		}
		if(event.keyCode === 40) { // arrow down
			bottle.move("down");
		}
		if(event.keyCode === 37) { // arrow left
			bottle.move("left");
		}
		if(event.keyCode === 39) { // arrow right
			bottle.move("right");
		}
		if(event.keyCode === 32) { // spacebar
			if(bottle.open === false) {
				bottle.open = true;
				console.log("bottle open!");
				// bowl.getSrirachaed(bottle.x, bottle.y, bottle.radius);
			}
		}
	}

	game.onKeyUp = function(event) {
		if(event.keyCode === 32) {
			bottle.open = false;
			console.log("bottle closed!");
		}
	}

	game.canvas.addEventListener("keydown", game.onKeyDown, false); // why does this need to be defined after the function is defined?
	game.canvas.addEventListener("keyup", game.onKeyUp, false);

	// mrh's test
	var img = new Image();
	img.src = "New-Pokemon-Drinking-Game.png";
	img.onload = function(){
		game.ctx.drawImage(img, 0, 0);
	};

	var bottle = new Bottle(200,200,20, game.ctx); // set x, y position and radius
	bottle.draw();
}
//

function Level(level) {
	this.level = level;
	// create Schloo with given rate
	this.schloo = new Schloo(1);
	// create Bowl with given radius
	this.bowl = new Bowl(10);
	// create Bottle with given radius
	this.bottle = new Bottle(1);
}
