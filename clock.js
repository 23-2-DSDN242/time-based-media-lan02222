/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  // --------------------------
  // background(50); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

  ellipseMode (CENTER)
  background(20); //  beige
  fill(200);

  let OpacityAm = 35;
  // fill(249,140,255, OpacityAm);

  let blue = color(140, 255, 251,OpacityAm)
  let purple = color(175, 133, 255,OpacityAm)

  
  let MinForLerp = map(obj.minutes, 0 , 59, 0,1)
  let color0f0rb = lerpColor(blue,purple,MinForLerp)

  let sizeStep = 15;
  let howManyCircles = obj.seconds; //30

  //console.log(howManyCircles);

  fill(color0f0rb);

  for(let i = 0; i < howManyCircles; i++){
  ellipse(width / 2, height /2,sizeStep*i);
  }









}
