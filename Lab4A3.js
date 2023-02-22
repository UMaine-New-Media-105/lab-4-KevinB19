function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  sprite(20,0,1,240,50,25,100)
}

function sprite(x,y,z,h,s,l,a){
  if(mouseIsPressed){
    translate(x,y)
    scale(z)
    fill(h,s,l,a)
    rect(125, 100, 100);
    ellipse(150, 120, 20);
    ellipse(200, 120, 20);
    ellipse(175, 165, 40, 10);
  } else{
    translate(x,y)
    scale(z)
    fill(h,s,l,a)
    ellipse(175, 150, 100);
    rect(140, 120, 20);
    rect(190, 120, 20);
    rect(155, 165, 40, 10);
    
  }
}
