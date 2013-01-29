function Intro() {
	messageStatus = 1;

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
	game.ctx.strokeRect(180, 420, 550, 70);
	game.ctx.closePath();
	game.ctx.restore();
}

function Lose() {
	messageStatus = 1;

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
	game.ctx.fillText("GO HOME,", 200, 180);
	game.ctx.fillText("SRIRACHA", 200, 245);
	game.ctx.fillText("YOU'RE DRUNK", 200, 350);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO TRY AGAIN.", 340, 525);
	game.ctx.restore();

}

function Level1() {
	messageStatus = 2;

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
	game.ctx.fillText("Woohoo!", 200, 180);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "26px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("You passed level 1!", 200, 240);
	game.ctx.fillText("From here it only gets more difficult.", 200, 300);
	game.ctx.fillText("The bowl will get smaller, but Michelle", 200, 330);
	game.ctx.fillText("will get hungry faster, and she'll also be", 200, 360);
	game.ctx.fillText("pickier about how well you cover the bowl.", 200, 390);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);
	game.ctx.restore();

	console.log("level1");
}

function Level2() {
	messageStatus = 3;

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
	game.ctx.fillText("Nice work!", 200, 180);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "26px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("You beat level 2!", 200, 240);
	game.ctx.fillText("The next level is a whole 'nother story.", 200, 300);
	game.ctx.fillText("", 200, 330);
	game.ctx.fillText("Think you can handle it?", 200, 360);
	game.ctx.fillText("", 200, 390);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);

}

function Level3() {
	messageStatus = 4;

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
	game.ctx.fillText("Impressive.", 200, 180);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "26px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("Most impressive.", 200, 240);
	game.ctx.fillText("But you are not a Jedi yet!", 200, 300);
	game.ctx.fillText("", 200, 330);
	game.ctx.fillText("Betcha can't beat level 4.", 200, 360);
	game.ctx.fillText("", 200, 390);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);

}

function Level4() {
	messageStatus = 5;

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
	game.ctx.fillText("BAZINGA!", 200, 180);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "26px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("Only one more level left!", 200, 240);
	game.ctx.fillText("You know the drill.", 200, 300);
	game.ctx.fillText("", 200, 330);
	game.ctx.fillText("", 200, 360);
	game.ctx.fillText("", 200, 390);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "14px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("HIT THE SPACE BAR TO START.", 350, 525);

}

function Level5() {
	messageStatus = 6;

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
	game.ctx.fillText("OMG YOU WIN", 200, 180);
	game.ctx.restore();

	game.ctx.save();
	game.ctx.font= "26px Trebuchet MS";
	game.ctx.fillStyle = "#D23B27";
	game.ctx.fillText("Your mother would be so proud!", 200, 240);
	game.ctx.fillText("", 200, 300);
	game.ctx.fillText("Sudo make me a sandwich.", 200, 330);
	game.ctx.fillText("", 200, 360);
	game.ctx.fillText("", 200, 390);
	game.ctx.restore();

}

function ShowLevelMessage(endLevel) {
	window.clearInterval(intervalId);
	spacePushed = false;
	var thing;
	if (endLevel === 0) {
		thing = Intro;
	}
	else if (endLevel === 1) {
		thing = Level1;
	}
	else if (endLevel === 2) {
		thing = Level2;
	}
	else if (endLevel === 3) {
		thing = Level3;
	}
	else if (endLevel === 4) {
		thing = Level4;
	}
	else if (endLevel === 5) {
		thing = Level5;
	}
	else if (endLevel === 69) {
		thing = Lose;
	}
	intervalId = window.setInterval(thing, 50);
}