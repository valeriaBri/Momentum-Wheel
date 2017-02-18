function setup() {
  createCanvas(800, 600);
  background(40);
  angleMode(DEGREES);
  frameRate(10);
}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color('a5a5a5'), color('c4c5c6'), (frameCount%120)/120));
  ellipse(100,0,250,250);

    

  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), (frameCount%5)/5));
  rect(0,0,100,100);

}
