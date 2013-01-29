function Bowl(x, y, radius) {
	this.isInside = function(x, y) {
		// console.log(x + " " + y + " " + radius);
		if (Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) > radius) {
			return false;
		}
		else {
			return true;
		}
	};
	this.isSquareInside = function(i, j) {
		var x = this.radius*2*(i+0.5)/this.gridSize-this.radius;
		var y = this.radius*2*(j+0.5)/this.gridSize-this.radius;
		return this.isInside(x,y);
	};

	this.radius = radius;
	this.x = x;
	this.y = y;

	this.completed = 0;
	this.possible = 0;
	this.gridSize = 20;
	this.grid = new Array(this.gridSize);
	for (var i = this.grid.length - 1; i >= 0; i--) {
		this.grid[i] = new Array(this.gridSize);
		for (var j = this.grid[i].length - 1; j >= 0; j--) {
			if (this.isSquareInside(i,j)) {
				this.possible++;
			}
		}
	}
	console.log(""+this.possible);

	var bowl = this;

	this.draw = function() {
		var bowlImage = new Image();
		bowlImage.src = "bowl-vector.png";

		bowlImage.onload = function() {
			game.ctx.drawImage(bowlImage, bowl.x, bowl.y, bowl.radius*0.87, bowl.radius*0.75);
		};
	};

	this.getSrirachaed = function(bottle) {
		var x = bottle.x - this.x - this.radius;
		var y = bottle.y - this.y - this.radius + bottle.h;
		if (!this.isInside(x,y)) {
			// lose points
			console.log("Lose points");
			return;
		}

		console.log("Get that sriracha!");

		if (this.completion > 0.90) {
			this.done();
		}
	};
	this.done = function() {
		this.parent = new Level(this.parent.level);
	};
}
