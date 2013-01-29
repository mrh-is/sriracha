function Schloo(level, refreshInterval) { // constructor for background / schloo


	this.width = 200;
	

	// progress bar is redrawn!
	this.hungerBar = function(percentHungry) {
		game.ctx.save();
		game.ctx.beginPath();
		game.ctx.strokeStyle = "black";
		game.ctx.lineWidth = 2;
		game.ctx.strokeRect(680, 25, this.width, 25);
		game.ctx.beginPath();
		
		if (percentHungry > 0.90){
			game.ctx.fillStyle = "red";
				}
		else if (0.50 < percentHungry) {
			game.ctx.fillStyle = "yellow";
		}
		else {
			game.ctx.fillStyle = "blue";
		}
		
		game.ctx.fillRect(680, 25, percentHungry*this.width, 25);
		game.ctx.closePath();
		game.ctx.restore();
	}	;
	
	this.myScore = function(){
		game.ctx.save();
		game.ctx.font= "16px Arial";
		//game.ctx.fillStyle = "black";
		game.ctx.fillText("don't let schloo get hungry!!", 687, 100);
		game.ctx.restore();
	};

	

	this.totalTime = 500;  // 10,000 milliseconds
	this.elapsedTime = 0;
	console.log("elapsedTime is set to 0");
	this.refreshInterval = refreshInterval;


	this.draw = function(percentHungry) {
		var bgImage = new Image(), _self = this;
		bgImage.src = "table.png";
		
		var imgSchloo = new Image();
		imgSchloo.src = "the-schloo-table.png";
		imgSchloo.onload = function() {
			game.ctx.drawImage(imgSchloo, 0, 0);
			}
		
		
		var imgSchlooMad = new Image();
		imgSchlooMad.src = "the-schloo-table-mad.png";
		imgSchlooMad.onload = function(){
			game.ctx.drawImage(imgSchlooMad, 0, 0);
			}
		// };

		this.elapsedTime = this.elapsedTime + 1;
		var schloo = this;

		bgImage.onload = function() {
			game.ctx.drawImage(bgImage, 0, 0, game.canvas.width, game.canvas.height);
			var percent = schloo.elapsedTime/schloo.totalTime;
			if (percent < 1) {  // only execute if percent is less than 100%
				_self.hungerBar(percent);
				game.ctx.font= "16px Arial";
				game.ctx.fillText(Math.round(percent * 100)+"%", 698, 75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
			}
			else  // only execute if percent is 100% or more
			{
				_self.hungerBar(1);	game.ctx.font= "16px Arial";
				game.ctx.fillText("100%", 698,75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
			}
			if (percent > 0.5) {
				_self.myScore();
			}
		};
	};
	
/*
	this.keepScore = function (){
		print(parseInt(percentHungry*this.width)+"%");
	}
*/

	
	
}
