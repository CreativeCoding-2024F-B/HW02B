function setup() {
  createCanvas(windowWidth, windowHeight);

  push();
  stroke(150, 155, 0);
  strokeWeight(10);
  ellipse(720, 260, 80);
  pop();

  fill(0, 255, 255);
  quad(130, 240, 250, 160, 480, 250, 300, 450);

  push();
  translate(300, 100); 
  rotate(45);
  fill(300, 200, 0);
  rect(-20, 100, 50, 200);
  pop();

  fill(200, 100, 0); 
  rect(500, 400, 200);
  fill(150, 175, 170);
  rect(760, 120, 90, 80);
  fill(250, 200, 3);
  rect(800, 200, 100, 200);
}

function draw() {
}
