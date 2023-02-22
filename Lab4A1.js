function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  tri(50,50,1);
  ell(80,80, 2)
  s3(0,-50, .5)
}

function tri(x,y, z){
  translate(x, y)
  scale(z)
  fill('red');
  triangle(30, 75, 58, 20, 86, 75);
}

function ell(x,y, z){
  translate(x, y)
  scale(z)
  fill('green');
  ellipse(30, 30, 40, 60);;
}

function s3(x,y, z){
  translate(x, y)
  scale(z)
  fill('blue');
  quad(150, 18, 200, 18, 216, 310, 144, 310);
}
