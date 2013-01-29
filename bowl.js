function Bowl(x, y, radius, completion) {
	var bowl = this;

	this.isInsideBowl = function(x, y) {
		// console.log(x + " " + y + " " + radius);
		if (Math.sqrt(Math.pow(x-bowl.radius,2) + Math.pow(y-bowl.radius,2)) > bowl.radius) {
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
		var x = this.radius*2*(i+0.5)/this.gridSize;//-this.radius;
		var y = this.radius*2*(j+0.5)/this.gridSize;//-this.radius;
		return {x:x, y:y};
	};

	this.radius = radius;
	this.x = x;
	this.y = y;
	this.srirachaPoints = [];

	this.completed = 0;
	this.possible = 0;
	this.completion = completion;
	this.won = false;
	this.gridSize = Math.round(radius/10);
	this.grid = new Array(this.gridSize);
	for (var i = this.grid.length - 1; i >= 0; i--) {
		this.grid[i] = new Array(this.gridSize);
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

	this.draw = function() {
		var bowlImage = new Image();
		bowlImage.src = "bowl-vector.png";

		bowlImage.onload = function() {
			game.ctx.drawImage(bowlImage, bowl.x, bowl.y, bowl.radius*2, bowl.radius*2);

			game.ctx.strokeStyle = "#D23B27";
			game.ctx.lineJoin = "round";
			game.ctx.lineCap = "round";
			game.ctx.lineWidth = 20;

			for (var i = 0; i < bowl.srirachaPoints.length; i++) {
				if (bowl.srirachaPoints[i].length === 0) { continue; }
				game.ctx.beginPath();
				game.ctx.moveTo(bowl.srirachaPoints[i][0].x, bowl.srirachaPoints[i][0].y);
				if (bowl.srirachaPoints[i].length === 1) {
					game.ctx.lineTo(bowl.srirachaPoints[i][0].x-1, bowl.srirachaPoints[i][0].y);
				}
				else {
					for (var j = 1; j < bowl.srirachaPoints[i].length; j++) {
						game.ctx.lineTo(bowl.srirachaPoints[i][j].x, bowl.srirachaPoints[i][j].y);
					}
				}
				game.ctx.stroke();
			}
		};
	};

	this.getSrirachaed = function(bottle) {
		if (bowl.won) { return; }

		if (!bottle.open) {
			if (bowl.srirachaPoints.length === 0) {
				bowl.srirachaPoints.push([]);
			}
			else if (bowl.srirachaPoints[bowl.srirachaPoints.length-1].length !== 0) {
				bowl.srirachaPoints.push([]);
			}
			return;
		}

		var x = bottle.x - bowl.x;
		var y = bottle.y - bowl.y+ bottle.h;
		if (!bowl.isInsideBowl(x,y)) {
			// lose points
			console.log("Lose points");
			bowl.srirachaPoints.push([]);
			return;
		}

		if (bowl.srirachaPoints[bowl.srirachaPoints.length-1].length === 0) {
			bowl.srirachaPoints[bowl.srirachaPoints.length-1].push({x:bottle.x, y:bottle.y+bottle.h});
		}
		else {
			var lastPoint = bowl.srirachaPoints[bowl.srirachaPoints.length-1][bowl.srirachaPoints[bowl.srirachaPoints.length-1].length-1];
			if ((lastPoint.x !== bottle.x) || (lastPoint.y !== bottle.y+bottle.h)) {
				bowl.srirachaPoints[bowl.srirachaPoints.length-1].push({x:bottle.x, y:bottle.y+bottle.h});
			}
		}

		var minX = x - bottle.radius;
		var maxX = x + bottle.radius;
		var minY = y - bottle.radius;
		var maxY = y + bottle.radius;

		var minI = Math.round(minX*bowl.gridSize/(bowl.radius*2));
		var maxI = Math.round(maxX*bowl.gridSize/(bowl.radius*2));
		var minJ = Math.round(minY*bowl.gridSize/(bowl.radius*2));
		var maxJ = Math.round(maxY*bowl.gridSize/(bowl.radius*2));

		for (var i = minI; i <= maxI; i++) {
			for (var j = minJ; j <= maxJ; j++) {
				var center = bowl.squareCenter(i,j);
				if (bowl.isInsideSriracha(center.x, center.y, x, y, bottle.radius)) {
					if (!bowl.grid[i][j]) {
						bowl.completed++;
					}
					bowl.grid[i][j] = true;
				}
			}
		}

		console.log("Get that sriracha! "+Math.round(bowl.completed/bowl.possible*1000)/10+" done.");

		if (bowl.completed/bowl.possible > bowl.completion) {
			bowl.won = true;
			alert("You win!");
			var newLevel = level.level;
			var refreshRate = level.refreshRate;
			level = new Level(newLevel+1, refreshRate);
		}
	};
}

