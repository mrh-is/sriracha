function Schloo() { // constructor for background / schloo

	this.draw = function() {
		var bgImage = new Image();
		bgImage.src = "table.png";

		bgImage.onload = function() {
			game.ctx.drawImage(bgImage, 0, 0, game.canvas.width, game.canvas.height);
		};
	};
}
