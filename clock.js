/*
 * use p5.js to draw a clock on a 960x500 canvas
 */






let Cat = []
let Gress;

function preload(obj){
    Cat[0] = loadImage('assets/cat_walking_1.png');
    Cat[1] = loadImage('assets/cat_walking_2.png');
   
    Grass = loadImage('assets/grass.png');
   
}   


function draw_clock(obj) { //obj

  
  background(229, 242, 255); //  morning light color
  
  angleMode(RADIANS)

  noStroke()
  
//----------------------------------// sun, not used for the time being, make the loop bigger and change the color
  
// let OpacityAm = 35;

  // let orangered = color(249, 99, 81, OpacityAm)
  // let orange = color(255, 192, 99,  OpacityAm)

  
  // let MinForLerp = map(obj.hours, 0 , 59, 0,1)
  // let color0f0rb = lerpColor(orangered,orange,MinForLerp)

  // let sizeStep = 15;
  // let howManyCircles = map (obj.hours,0, 59, 20,40) //30

  //console.log(howManyCircles);

  // fill(color0f0rb);

  // for(let i = 0; i < howManyCircles; i++){
  // ellipse(width/2, height/1.5,sizeStep*i);// sun
  // }
  //---------------------------------------------
  
  fill(120,164,139,255)//120,164,139,255
  rect(0, 380, width, height/2); //ground


  draw_tree(800,120,obj)
  draw_tree(600,120,obj)
  draw_tree(400,120,obj)

  draw_stem(100,320,obj)
  draw_stem(350,320,obj)
  draw_stem(600,320,obj)
  draw_stem(230,320,obj)
  draw_stem(480,320,obj)
  draw_stem(730,320,obj)
  draw_stem(850,320,obj)

  draw_flower(100,320,obj)
  draw_flower(350,320,obj)
  draw_flower(600,320,obj)
  draw_flower(850,320,obj)

  draw_flower2(230,320,obj)
  draw_flower2(480,320,obj)
  draw_flower2(730,320,obj)


  image(Cat[obj.seconds % 2], 250, 300); //cat walking speed
  console.log(obj.seconds % 2)

  

  let grassX = map(obj.seconds*2, 0, 59, 0, -Grass.width);

  // Draw grass
  for (let i = 0; i < width / Grass.width + 2; i++) {
    image(Grass, i * Grass.width + grassX, 410); //  grass position 
  }
}
 
  // image(Grass, -10, 410); 


   
// }
 
    function draw_tree(x,y,s,obj){
      // let treeColor
      
      let topcolor = color(240,181,176,255)
      let middlecolor = color(162,140,192)
      let bottoncolor = color(164,106,162)
      push()
  translate(x, y);
  
  scale(2);
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
  let HowsizePistil = map (obj.seconds,0,59,30,20)

  push()
  fill(flowerColor);
  translate(x-obj.seconds*2, y);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 20, HowsizeFlower, HowsizeFlower+3); 
    rotate(TWO_PI / 10);
  }
  strokeWeight(3);
  stroke(255, 204, 0,35);
  fill(252, 243, 207);
  ellipse(0, 0, HowsizePistil);
  pop()

  
}
  


function draw_stem(x,y,obj) {
  let stemColor = color(144,188,171,255); // Flower stem color
  let stemWeight = map(obj.seconds/2, 0, 59, 0.5, 10); //contral stemWeight

  push()
  translate(x-obj.seconds*2, y);
  stroke(stemColor);
  strokeWeight(stemWeight);
  line(0, 0, 0, 58);

  pop()
}

function draw_flower2(x,y,obj){ 
  push()
  fill(255, 255, 255,100)
  translate(x-obj.seconds*2, y);
  scale(0.55);
  strokeWeight(10);
  stroke(245, 183, 177, 30);
  let rotationAngle = map(obj.seconds % 59, 0, 59, 0, TWO_PI);  //Use obj to control flower spin
   rotate(rotationAngle);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
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

















