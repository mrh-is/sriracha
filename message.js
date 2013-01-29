function Intro() {
	game.canvas = document.getElementById("gameCanvas");
	game.ctx = game.canvas.getContext("2d"); // game context
	game.ctx.save();
	game.ctx.fillStyle = "rgba(60, 60, 60, 1)";
	game.ctx.fillRect(0, 0, 900, 600);
	game.ctx.restore();
	game.ctx.save();
	game.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
	game.ctx.fillRect(50, 50, 800, 500);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "70px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("get that", 375, 145);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "115px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("sriracha", 220, 240);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "205px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("!", 630, 243);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "18px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("You guys!!!", 220, 315);
	game.ctx.fillText("Michelle is HUNGRY. The problem is, she's allergic to any", 220, 350);
	game.ctx.fillText("food that doesn't have sriracha on it. Help her out by", 220, 370);
	game.ctx.fillText("covering the entire bowl before she gets too hungry.", 220, 390);
	game.ctx.fillText("Use the ARROW KEYS for navigation", 220, 450);
	game.ctx.fillText("and the SPACE BAR to dispense the sriracha.", 220, 470);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);

	game.ctx.save();
	game.ctx.beginPath();
	game.ctx.strokeStyle = "#D23B27";
	game.ctx.lineWidth = 2;
	game.ctx.strokeRect(180, 420, 540, 70);
	game.ctx.closePath();
	game.ctx.restore();
}