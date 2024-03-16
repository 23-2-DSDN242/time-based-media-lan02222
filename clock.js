/*
 * use p5.js to draw a clock on a 960x500 canvas
 */






let Cat = []
function preload(obj){
    Cat[0] = loadImage('assets/cat_walking_1.png');
    Cat[1] = loadImage('assets/cat_walking_2.png');
   
}

// let Grass;
// function preload(obj){
//     Grass = loadImage('assets/grass.png');
   
// }    //can not work


function draw_clock(obj) { //obj
  background(174, 214, 241); //  morning light color
  
  angleMode(RADIANS)

  noStroke()
  fill(255,117,94,200)
  ellipse(width/2, height/1.5, 350); //sun


  fill(120,164,139,255)
  rect(0, 380, width, height/2); //ground


  draw_tree(800,250,obj)
  draw_tree(600,250,obj)
  draw_tree(400,250,obj)

  draw_stem(100,320,obj)
  draw_stem(250,320,obj)
  draw_stem(400,320,obj)

  draw_flower(100,320,obj)
  draw_flower(250,320,obj)
  draw_flower(400,320,obj)

  // image(Grass, 0, 0); //can not work

  image(Cat[obj.seconds % 2], 250, 300);
  console.log(obj.seconds % 2)

   }
  
 
    function draw_tree(x,y,obj){
      // let treeColor
      let topcolor = color(240,181,176,255)
      let middlecolor = color(162,140,192)
      let bottoncolor = color(164,106,162)
      push()
  translate(x, y);

  fill(bottoncolor)
  rect(50, 95, 18, 35); //tree botton
  
  fill(middlecolor)
  triangle(30, 98, 58, 43, 86, 98); //tree middle
  
  fill(topcolor)
  triangle(30, 75, 58, 20, 86, 75); //(x1, y1, x2, y2, x3, y3)  top one
    pop()


    
}



function draw_flower(x,y,obj){ 
  
  let pink = color(245, 183, 177)
  let yellow = color(249, 231, 159)
  let minForLerp = map(obj.minutes, 0, 59, 0, 1)
  let flowerColor = lerpColor(pink,yellow,minForLerp)
  
  let HowsizeFlower = map (obj.seconds,0,59,4,20)

  push()
  fill(flowerColor);
  translate(x-obj.seconds*2, y);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 20, HowsizeFlower, HowsizeFlower+3); 
    rotate(TWO_PI / 10);
  }
  fill(252, 243, 207);
  ellipse(0, 0, HowsizeFlower+3);
  pop()
}
  
function draw_stem(x,y,obj) {
  let stemColor = color(144,188,171,255); // Flower stem color
  let stemWeight = map(obj.seconds/2, 0, 59, 0.5, 10);

  push()
  translate(x-obj.seconds*2, y);
  stroke(stemColor);
  strokeWeight(stemWeight);
  line(0, 0, 0, 58);

  pop()
}





// function draw_frontgrass(x,y,obj) {

//   push();
//   translate(x,y);

//   stroke(100, 200, 100);

//   endShape();
//   pop()
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

















