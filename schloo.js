function Schloo(level, refreshInterval) { // constructor for background / schloo

	this.width = 200;

	
	var percentSlepy;
	var intervalDuration = 250;
	
		
	function getHungreadOnly(duration){
		var increment = intervalDuration*this.width/duration;
	}
	
	function resetStart(){
		
	}
	
	// progress bar is redrawn!
	this.hungerBar = function(percent) {
		game.ctx.strokeStyle = "black";
		game.ctx.strokeRect(680, 25, this.width, 25);
		game.ctx.beginPath();
		game.ctx.fillRect(680, 25, percent*this.width, 25);
		
	}	

	this.totalTime = 100;  // 10,000 milliseconds
	this.elapsedTime = 0;
	console.log("elapsedTime is set to 0");
	this.refreshInterval = refreshInterval;


	this.draw = function(percent) {
		var bgImage = new Image(), _self = this;
		bgImage.src = "table.png";

		this.elapsedTime = this.elapsedTime + 1;
		var schloo = this;

		bgImage.onload = function() {
			game.ctx.drawImage(bgImage, 0, 0, game.canvas.width, game.canvas.height);
			var percent = schloo.elapsedTime/schloo.totalTime;
			if (percent < 1){  // only execute if percent is less than 100%
				_self.hungerBar(percent);
			}
			else  // only execute if percent is 100% or more
			{
				_self.hungerBar(1);
				
			}
		};
	};
	
	
}
