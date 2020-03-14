
var tileCount = 20;


function setup() {
  frameRate(1);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220);
	noStroke();
	var r = 100;
	var g = 80;
	var b = 80;

	for(var j = 0; j < tileCount; j++){
		for(var i = 0; i <tileCount; i++){
			var x = i * 80;
			var y = j * 80;
			c = color(random(r), random(g), random(b));
			fill (c);
			rect(x, y , 80, 80);
		}
	fill(0);
	ellipse (random(tileCount*40), random(tileCount*40), 100,100);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

