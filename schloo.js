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

		var rgb = {
			r: Math.max(Math.min(12.5*(percentHungry*100-46),100),0),
			g: Math.max(Math.min((-12.5)*(Math.abs(percentHungry*100-70)-24),90),0),
			b: Math.max(Math.min((-12.5)*(percentHungry*100-54),100),0)
		};
		game.ctx.fillStyle = "rgb("+rgb.r+"%,"+rgb.g+"%,"+rgb.b+"%)";
		
		// if (percentHungry > 0.90){
		// 	game.ctx.fillStyle = "red";
		// 		}
		// else if (0.50 < percentHungry) {
		// 	game.ctx.fillStyle = "yellow";
		// }
		// else {
		// 	game.ctx.fillStyle = "blue";
		// }
		
		game.ctx.fillRect(680, 25, percentHungry*this.width, 25);
		game.ctx.closePath();
		game.ctx.restore();
	}	;
	
	this.myScore = function(){
		game.ctx.save();
		game.ctx.font= "16px Trebuchet MS";
		// game.ctx.fillStyle = "black";
		game.ctx.fillText("don't let schloo get hungry!!", 687, 100);
		game.ctx.restore();
	};

	

	this.totalTime = 500;  // 10,000 milliseconds
	this.elapsedTime = 0;
	console.log("elapsedTime is set to 0");
	this.refreshInterval = refreshInterval;

	this.draw = function(percentHungry) {
	
	function drawSprite(imageObject, x, y, rotation, scale){
	    var w = imageObject.width;
	    var h = imageObject.height;
	    game.ctx.save();
	    
	    }
	    
		var bgImage = new Image(), _self = this;
		bgImage.src = "table.png";
		
		


		this.elapsedTime++;
		var schloo = this;


		var percent = schloo.elapsedTime/schloo.totalTime;
			
		var imgSchloo = new Image(), _self = this;
		imgSchloo.src = "the-schloo-table-mad-sprite.png";
			
		imgSchloo.onload = function(){
			if (percent > 0.95){
				game.ctx.drawImage(imgSchloo, 0, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
				}
			else if (percent > 0.8) 
				{
				game.ctx.drawImage(imgSchloo, 900, 0, 900, 600, 0, 0, game.canvas.width, game.canvas.height);
				} 
			else if (percent > 0.6){
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
			
			if (percent < 1) {  // only execute if percent is less than 100%
				_self.hungerBar(percent);
				game.ctx.save();
				game.ctx.font= "16px Trebuchet MS";
				game.ctx.fillText(Math.round(percent * 100)+"%", 698, 75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
				game.ctx.restore();
			}
			else  // only execute if percent is 100% or more
			{
				_self.hungerBar(1);
				game.ctx.save();
				game.ctx.font= "16px Trebuchet MS";
				game.ctx.fillText("100%", 698,75);
				game.ctx.fillText("HUNGER LEVEL", 744, 75);
				game.ctx.restore();
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
