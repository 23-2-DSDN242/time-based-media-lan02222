/*
 * use p5.js to draw a clock on a 960x500 canvas
 */


// let numFrames = 2;  //not work
// var frame = 0;
// let Cat =  new Array(numFrames);


// function preload(){
//     Cat[0] = loadImage('assets/cat_walking_1.png');
//     Cat[1] = loadImage('assets/cat_walking_2.png');
  
// }


function draw_clock() { //obj
  background(255, 204, 0); //  morning light color
  
 

  noStroke()
  fill(200)
  rect(0, 380, width, height/2); //ground， (move it in front of sun, did not show)



  fill(255,0,0)
  ellipse(width/2, height/1.5, 350); sun
 
  fill(100, 50, 150)
  triangle(30, 98, 58, 43, 86, 98);
  triangle(30, 75, 58, 20, 86, 75); //(x1, y1, x2, y2, x3, y3) 

  rect(50, 95, 18, 35); //tree
}

  // // function draw_tree(x,y,s){
  //   fill(0)
  //     triangle(x,y,
  //               x+s/2,y+s,
  //               x-s/2,y+s)
    
  //               triangle(x,y,
  //                  x+s/2,y-s,
  //                  x-s/2,y-s)
  //                 //  rect(30, 20, 55, 55);
  
  // }

  

  
  
// }


// function draw_cat() {  //obj
// frame++;
// if (frame == numFrames) frame = 0;
// image(Cat[frame], 100, 100);

// } 
  



  
  
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

// -------------------------------------------- week 2 (4)
//   noStroke()
//   angleMode(DEGREES)
//   ellipseMode (CENTER)
//   translate(width/2,height/2)
//   background(20); //  beige
//   fill(200);

//   let OpacityAm = 35;
//   // fill(249,140,255, OpacityAm);

//   let blue = color(140, 255, 251,OpacityAm)
//   let purple = color(175, 133, 255,OpacityAm)

  
//   let MinForLerp = map(obj.minutes, 0 , 59, 0,1)
//   let color0f0rb = lerpColor(blue,purple,MinForLerp)

//   let sizeStep = 15;
//   let howManyCircles = map (obj.seconds,0, 59, 20,40) //30

//   //console.log(howManyCircles);

//   fill(color0f0rb);

//   for(let i = 0; i < howManyCircles; i++){
//   ellipse(0, 0,sizeStep*i);
//   }


//   fill("#Fae")
//   ellipse(0,0, 50);

//   let hourHand = map (obj.hours, 0, 23, 0, 360)

// push()
// for(let i = 0; i < 24; i++ ){
//   if( i == obj.hours){   
//     size = 40;
//   }
//   else{
//     size = 20
//   }

//   rotate(360 / 24)

// //   ellipse(0,-100,50)

// drawTriangles(0,-200,size)

// //   fill(0)
// //   ellipse(0,115,20)

// pop()
// }

// }

 

// function drawTriangles(x,y,s){
// fill(255)
//   triangle(x,y,
//             x+s/2,y+s,
//             x-s/2,y+s)

//             triangle(x,y,
//                x+s/2,y-s,
//                x-s/2,y-s)
//    }

















