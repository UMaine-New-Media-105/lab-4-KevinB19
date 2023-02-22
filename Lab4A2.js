function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  tri(50,50,1,100,75,50,100);
  ell(80,80, 2,150,50,50,100)
  s3(0,-50, .5,200,25,50,100)
}

function tri(x,y,z,h,s,l,a){
  translate(x, y)
  scale(z)
  fill(h,s,l,a);
  triangle(30, 75, 58, 20, 86, 75);
}

function ell(x,y,z,h,s,l,a){
  translate(x, y)
  scale(z)
  fill(h,s,l,a);
  ellipse(30, 30, 40, 60);;
}

function s3(x,y, z,h,s,l,a){
  translate(x, y)
  scale(z)
  fill(h,s,l,a);
  quad(150, 18, 200, 18, 216, 310, 144, 310);
}
