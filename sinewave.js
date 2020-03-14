var angleInc = 0.036;
var angleIncc = 0.036;

function setup(){
	createCanvas(windowWidth,windowHeight);
	noStroke();
	background(222);

}

function draw(){
	background(200,200,200,20);
	angleInc += 0.0001; //speed
	angleIncc += 0.001; //speed

	var scale = 50.0; //scale
	var offset = 200.0; //translate in y axis
	var angle = 10; 
	var angleX = 10;
	var bruitC = 0.001;
	var posC = noise(millis()*bruitC)*20;

	var bruitX = 0.00001;
	var posX = noise(millis()*bruitX)* 50;

	for(var x = 0; x <= width; x+= posX){
		var y = offset + (sin(angle) * scale);
		noFill();
		stroke(0);
		rect(x*2, y*2, posC,posC*2);
		angle += angleInc;

		y = offset + (cos(angle)*scale);
		stroke(255);
		fill(200,100,random(255));
		ellipse(x*2, y*2, posC,posX);

		var z = offset + (sin(angleX)*scale*100);
		fill(random(100), random(255), 50);
		ellipse(x, y/2, 20,random(20));
		angleX += angleIncc;
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}