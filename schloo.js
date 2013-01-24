function Schloo() { // constructor for background / schloo

	this.draw = function() {
		var bgImage = new Image();
		bgImage.src = "New-Pokemon-Drinking-Game.png";

		bgImage.onload = function() {
			game.ctx.drawImage(bgImage, 0, 0);
		}
	};
}