// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE

  background(200); //  beige
  angleMode(DEGREES);
  fill(0); // dark grey
  textSize(400);
  textAlign(CENTER, CENTER);
  
  translate(width/2,height/2);
  push()
  rotate((360/12)*11)
  text("10", 0,0);
  pop()

 let blockSize =50;

  noStroke()
  push()
  fill(255,0,0)
  rotate((360/12)*obj.seconds);
  rect(0,0,blockSize,blockSize)
  rect(0,50,blockSize,blockSize)
  rect(0,100,blockSize,blockSize)
  rect(50,100,blockSize,blockSize)
  rect(100,100,blockSize,blockSize)
  
  pop()



// background(255, 204, 0); //  morning time orange
// fill(200)
// noStroke()
// rect(0, 400, width, height/2); //ground

// fill(255,0,0)
// ellipse(30, 30, 60, 60);

}
