/*

get that sriracha!

is a javascript game created by:
jennifer tran (jtran1)
michael helmbrecht (mhelmbre)
michelle lew (mlew1)

29 jan 2013

*/

function Schloo(level) { // constructor for background / schloo
	
	this.width = 200;
	
	// progress bar is redrawn!
	this.hungerBar = function(percentHungry) {
		game.ctx.save();
		game.ctx.beginPath();
		game.ctx.strokeStyle = "black";
		game.ctx.lineWidth = 2;
		game.ctx.strokeRect(680, 25, this.width, 25);
		game.ctx.beginPath();

		var rgb = {
			r: Math.max(Math.min(12.5*(percentHungry*100-46),100),0),
			g: Math.max(Math.min((-12.5)*(Math.abs(percentHungry*100-70)-24),90),0),
			b: Math.max(Math.min((-12.5)*(percentHungry*100-54),100),0)
		};
		game.ctx.fillStyle = "rgb("+rgb.r+"%,"+rgb.g+"%,"+rgb.b+"%)";

		game.ctx.fillRect(680, 25, percentHungry*this.width, 25);
		game.ctx.closePath();
		game.ctx.restore();
	};
	
	this.myScore = function(){
		game.ctx.save();
		game.ctx.font= "16px Trebuchet MS";
		// game.ctx.fillStyle = "black";
		game.ctx.fillText("Getting hungry...!", 705, 100);
		game.ctx.restore();
	};

	if (level === 1) {
		console.log("level is" + level);
		this.totalTime = 900;
		this.elapsedTime = 0;
	}
	else if (level === 2) {
		console.log("level is" + level);
		this.totalTime = 600;
		this.elapsedTime = 0;
	}
	else if (level === 3) {
		console.log("level is" + level);
		this.totalTime = 300;
		this.elapsedTime = 0;
	}
	else if (level === 4) {

		this.totalTime = 200;
		this.elapsedTime = 0;
	}
	else {
		this.totalTime = 100;
		this.elapsedTime = 0;
	}
	
	console.log("level is" + level);

	this.draw = function(percentHungry) {
		function drawSprite(imageObject, x, y, rotation, scale) {
			var w = imageObject.width;
			var h = imageObject.height;
			game.ctx.save();
		}

		var bgImage = new Image(), _self = this;
		bgImage.src = "table.png";
		
		this.elapsedTime++;
		var schloo = this;

		var percent = schloo.elapsedTime/schloo.totalTime;

		var imgSchloo = new Image();
		imgSchloo.src = "the-schloo-table-mad-sprite.png";

		imgSchloo.onload = function() {
			if (percent > 0.95){
				game.ctx.drawImage(imgSchloo, 0, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
			}
			else if (percent > 0.8) {
				game.ctx.drawImage(imgSchloo, 900, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
			}
			else if (percent > 0.6) {
				game.ctx.drawImage(imgSchloo, 1800, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
			}
			else if (percent > 0.4) {
				game.ctx.drawImage(imgSchloo, 2700, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
			}
			else {
				game.ctx.drawImage(imgSchloo, 3600, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
			}
		};

		bgImage.onload = function() {
			game.ctx.drawImage(bgImage, 0, 0, game.canvas.width, game.canvas.height);

			_self.progressBar(window.level.bowl.completed/window.level.bowl.possible);

			if (percent < 1) {  // only execute if percent is less than 100%
				_self.hungerBar(percent);
				game.ctx.save();
				game.ctx.font= "16px Trebuchet MS";
				game.ctx.fillText(Math.round(percent * 100)+"%", 698, 75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
				game.ctx.restore();
			}
			else { // only execute if percent is 100% or more
				_self.hungerBar(1);
				game.ctx.save();
				game.ctx.font= "16px Trebuchet MS";
				game.ctx.fillText("100%", 698,75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
				game.ctx.restore();
				window.clearInterval(intervalId);
				ShowLevelMessage(69);
			}
			if (percent > 0.5) {
				_self.myScore();
			}
		};
	};
	

	this.progressBar = function(completion) {
		// game.ctx.save();
		// game.ctx.beginPath();
		// game.ctx.fillStyle = "gray";
		// game.ctx.fillRect(680+this.width*window.level.bowl.completion, 155, this.width*(1-window.level.bowl.completion), 25);
		// game.ctx.restore();
		game.ctx.save();
		game.ctx.beginPath();
		game.ctx.strokeStyle = "red";
		game.ctx.lineWidth = 2;
		game.ctx.strokeRect(680, 155, this.width*window.level.bowl.completion, 25);
		game.ctx.beginPath();
		game.ctx.save();
		game.ctx.beginPath();
		game.ctx.strokeStyle = "black";
		game.ctx.lineWidth = 2;
		game.ctx.strokeRect(680, 155, this.width, 25);
		game.ctx.beginPath();

		var rgb = {
			r: Math.max(Math.min(12.5*(completion*100-(46*window.level.bowl.completion)),100),0),
			g: Math.max(Math.min((-12.5)*(Math.abs(completion*100-(70*window.level.bowl.completion))-(24*window.level.bowl.completion)),90),0),
			b: Math.max(Math.min((-12.5)*(completion*100-(54*window.level.bowl.completion)),100),0)
		};
		game.ctx.fillStyle = "rgb("+rgb.r+"%,"+rgb.g+"%,"+rgb.b+"%)";

		game.ctx.fillRect(680, 155, completion*this.width, 25);
		game.ctx.closePath()
		game.ctx.restore();

		if (completion < 1) {  // only execute if percent is less than 100%
			game.ctx.save();
			game.ctx.font= "16px Trebuchet MS";
			game.ctx.fillText(Math.round(completion * 100)+"%", 698, 205);
			game.ctx.fillText("SRIRACHA LEVEL", 744, 205);
			game.ctx.fillText(window.level.bowl.completion*100 + "% coverage required", 696, 225);
			game.ctx.restore();
		}
		else { // only execute if percent is 100% or more
			game.ctx.save();
			game.ctx.font= "16px Trebuchet MS";
			game.ctx.fillText("100%", 698, 205);
			game.ctx.fillText("SRIRACHA LEVEL", 744, 205);
			game.ctx.fillText(window.level.bowl.completion*100 + "% coverage required", 696, 225);
			game.ctx.restore();
		}
	};
}
