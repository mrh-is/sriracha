var gameInit = function() {

	var game = {};
	
	game.canvas = document.getElementById('gameCanvas');
	game.page = game.canvas.getContext('2d'); // game.page === game.ctx
	game.w = game.canvas.width;
	game.h = game.canvas.height;
	var img = new Image();
	img.src = "New-Pokemon-Drinking-Game.png";
	img.onload = function(){
		console.log("img load");
		game.page.drawImage(img, 0, 0);
	};
}