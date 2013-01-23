function Bottle(startX, startY, startRadius, context) {
	this.x = startX;
	this.y = startY;
	this.radius = startRadius;

	this.open = false;

	var that = this; // is there a better way to access this variable in this.draw?

	this.draw = function() {
		var bottleImage = new Image();
		bottleImage.src = "bottle.png";

		bottleImage.onload = function() {
			context.drawImage(bottleImage, that.x, that.y);
		}
	}

	this.move = function (direction) {
		// if (direction === "up") {
		// 	// do something
			console.log("moving "+direction+"!");
		// }
	}


	// TO DO LIST
	

	// on move

	// if (this.open === false) {
	// 	return;
	// }

	// bowl.getSrirached(this.x, this.y, this.radius) {
	// 	this.draw

	// }

	// // move
	// // valve
}