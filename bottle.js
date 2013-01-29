function Bottle(startX, startY, startRadius) {
	this.x = startX;
	this.y = startY;
	this.radius = startRadius;

	this.w = 150; // constant width of image
	this.h = 150; // constant height of image

	this.open = false;

	var that = this; // is there a better way to access this variable in this.draw?

	gameWidth = game.canvas.width;
	gameHeight = game.canvas.height;

	this.draw = function() {
		var bottleImage = new Image();
		bottleImage.src = "bottle.png";

		bottleImage.onload = function() {
			game.ctx.drawImage(bottleImage, that.x, that.y, that.w, that.h);
		};
	};

	this.move = function () {
			// console.log("moving "+direction+"!");

			if (keypresses[0] === 1) {
				if (that.y - 5 >= 0) {
					that.y = that.y - 5;
				}
			}
			if (keypresses[1] === 1) {
				if (that.y + that.h + 5 <= gameHeight) {
					that.y = that.y + 5;
				}
			}
			if (keypresses[2] === 1) {
				if (that.x - 5 >= 0) {
					that.x = that.x - 5;
				}
			}
			if (keypresses[3] === 1) {
				if (that.x + that.w + 5 <= gameWidth - 200) {
					that.x = that.x + 5;
				}
			}
	};
	
}
