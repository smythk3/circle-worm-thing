var x = 180;
var y = 180;
var xspeed = 5;
var yspeed = 25;


function setup() {
  createCanvas(800,500);
  background (255);

}

function draw() {

	//distance from center of the screen
	var d = dist(800/2, 500/2, mouseX, mouseY);

  	fill (random(200, 250), random(200, 250), random(200, 255));
  	ellipse (x, y, random(80, 10));

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 800 || x < 10)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
