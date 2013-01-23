var gameInit = function() {

	var game = {};
	
	game.canvas = document.getElementById('gameCanvas');
	game.page = game.canvas.getContext('2d'); // game.page === game.ctx
	game.w = game.canvas.width;
	game.h = game.canvas.height;
}