function Bowl(x, y, radius) {
<<<<<<< HEAD
=======
	var bowl = this;

	this.isInsideBowl = function(x, y) {
		// console.log(x + " " + y + " " + radius);
		if (Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) > bowl.radius) {
			return false;
		}
		else {
			return true;
		}
	};
	this.isInsideSriracha = function(x, y, sX, sY, sRadius) {
		// console.log(x + " " + y + " " + radius);
		if (Math.sqrt(Math.pow(x-sX,2) + Math.pow(y-sY,2)) > sRadius) {
			return false;
		}
		else {
			return true;
		}
	};
	this.squareCenter = function(i, j) {
		var x = this.radius*2*(i+0.5)/this.gridSize-this.radius;
		var y = this.radius*2*(j+0.5)/this.gridSize-this.radius;
		return {x:x, y:y};
	};

>>>>>>> 1af94fdb7acb9d417fac6dd0236b9c07a407841d
	this.radius = radius;
	this.gridSize = 10;
	this.grid = new Array(this.gridSize);
	for (var i = this.grid.length - 1; i >= 0; i--) {
		this.grid[i] = new Array(this.gridSize);
<<<<<<< HEAD
	};
	this.completion = 0;
	this.x = x;
	this.y = y;
=======
		for (var j = this.grid[i].length - 1; j >= 0; j--) {
			var center = this.squareCenter(i,j);
			if (this.isInsideBowl(center.x, center.y)) {
				this.possible++;
				this.grid[i][j] = false;
			}
			else {
				this.grid[i][j] = true;
			}
		}
	}
	console.log(""+this.possible);
>>>>>>> 1af94fdb7acb9d417fac6dd0236b9c07a407841d

	this.draw = function() {
		var bowlImage = new Image();
		bowlImage.src = "bowl-vector.png";

		bowlImage.onload = function() {
			game.ctx.drawImage(bowlImage, bowl.x, bowl.y, bowl.radius*0.87, bowl.radius*0.75);
		};
	};

<<<<<<< HEAD
	this.getSrirachaed = function(x, y, radius) {
		x -= this.x;
		y -= this.y;
		if (Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) > radius) {
=======
	this.getSrirachaed = function(bottle) {
		if (!bottle.open) { return; }
		var x = bottle.x - this.x - this.radius;
		var y = bottle.y - this.y - this.radius + bottle.h;
		if (!this.isInsideBowl(x,y)) {
>>>>>>> 1af94fdb7acb9d417fac6dd0236b9c07a407841d
			// lose points
		}

<<<<<<< HEAD
		if (this.completion > 0.99) {
			this.done();
=======
		var minX = bottle.x - bottle.radius;
		var maxX = bottle.x + bottle.radius;
		var minY = bottle.y + bottle.h - bottle.radius;
		var maxY = bottle.y + bottle.h + bottle.radius;

		var minI = Math.round(minX*this.gridSize/(this.radius*2));
		var maxI = Math.round(maxX*this.gridSize/(this.radius*2));
		var minJ = Math.round(minY*this.gridSize/(this.radius*2));
		var maxJ = Math.round(maxY*this.gridSize/(this.radius*2));

		for (var i = minI; i <= maxI; i++) {
			for (var j = minJ; j <= maxJ; j++) {
				var center = this.squareCenter(i,j);
				if (this.isInsideSriracha(center.x, center.y, bottle.x, bottle.y+bottle.h, bottle.radius)) {
					if (this.grid[i][j]) {
						this.completed++;
					}
					this.grid[i][j] = true;
				}
			}
		}

		console.log("Get that sriracha!");

		if (this.completed/this.possible > 0.95) {
			// this.done();
			alert("You win!");
>>>>>>> 1af94fdb7acb9d417fac6dd0236b9c07a407841d
		}
	};
	this.done = function() {
		this.parent = new Level(this.parent.level);
	};
}
