function Bowl(x, y, radius) {
	this.radius = radius;
	this.gridSize = 10;
	this.grid = new Array(this.gridSize);
	for (var i = this.grid.length - 1; i >= 0; i--) {
		this.grid[i] = new Array(this.gridSize);
	};
	this.completion = 0;
	this.x = x;
	this.y = y;

	var bowl = this;

	this.draw = function() {
		var bowlImage = new Image();
		bowlImage.src = "bowl-vector.png";

		bowlImage.onload = function() {
			game.ctx.drawImage(bowlImage, 103, 290, bowl.radius*2, bowl.radius*2);
		};
	};

	this.getSrirachaed = function(x, y, radius) {
		x -= this.x;
		y -= this.y;
		if (Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) > radius) {
			// lose points
		}

		if (this.completion > 0.99) {
			this.done();
		}
	};
	this.done = function() {
		this.parent = new Level(this.parent.level);
	};
}
