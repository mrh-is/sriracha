var gameInit = function() {

	var game = {};
	
	game.canvas = document.getElementById('gameCanvas');
	game.page = game.canvas.getContext('2d'); // game.page === game.ctx
	game.w = game.canvas.width;
	game.h = game.canvas.height;
	var img = new Image();
	img.src = "New-Pokemon-Drinking-Game.png";
	img.onload = function(){
		game.page.drawImage(img, 0, 0);
	};
}

function Level(level) {
	this.level = level;
	// create Schloo with given rate
	this.schloo = new Schloo(1);
	// create Bowl with given radius
	this.bowl = new Bowl(10);
	// create Bottle with given radius
	this.bottle = new Bottle(1);
}