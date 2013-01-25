function Bottle(startX, startY, startRadius) {
	this.x = startX;
	this.y = startY;
	this.radius = startRadius;

	this.w = 100; // constant width of image
	this.h = 100; // constant height of image

	this.open = false;

	var that = this; // is there a better way to access this variable in this.draw?

	gameWidth = game.canvas.width;
	gameHeight = game.canvas.height;

	this.draw = function() {
		var bottleImage = new Image();
		bottleImage.src = "bottle.png";

		bottleImage.onload = function() {
			game.ctx.drawImage(bottleImage, that.x, that.y);
		}
	}

	this.move = function (direction) {
			console.log("moving "+direction+"!");

			if (direction === "up") {
				if (that.y - 5 >= 0) {
					that.y = that.y - 5;
					that.draw();
				}
			}
			if (direction === "down") {
				console.log(gameHeight);
				console.log(that.y);
				if (that.y + that.h + 5 <= gameHeight) {
					that.y = that.y + 5;
					that.draw();
				}
			}
			if (direction === "left") {
				if (that.x - 5 >= 0) {
					that.x = that.x - 5;
					that.draw();
				}
			}
			if (direction === "right") {
				if (that.x + that.w + 5 <= gameWidth) {
					that.x = that.x + 5;
					that.draw();
				}
			}
	}
	
}


// TO DO LIST
// simultaneous x/y movement
// spacebar
// 