
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {

	var tamango = random(150);
	ellipse (mouseX, mouseY, tamango, tamango);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}