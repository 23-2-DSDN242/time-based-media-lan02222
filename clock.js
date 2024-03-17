/*
 * use p5.js to draw a clock on a 960x500 canvas
 */






let Seagull = []
let Gress;

function preload(){
  Seagull[0] = loadImage('assets/seagull_1.png');
  Seagull[1] = loadImage('assets/seagull_2.png');
   
  Grass = loadImage('assets/grass.png');
   
}   


function draw_clock(obj) { //obj

  if(obj.hours >= 6 || obj.hours < 20 ) {  //The background is bright before 19 o'clock and dark after 19 o'clock

  background(255); 
  let myStrokeWeight = 50;
  strokeWeight(myStrokeWeight)
  let lightblue = color(232, 253, 252) 
  let blue = color(70, 215, 249)

  for(let i = 0; i < width; i = i + myStrokeWeight ){
    let lerpMap = map(i, 0,width,0,1)
    let gradientColor = lerpColor(blue,lightblue,lerpMap) // ligtbule color gradient to blue color 
    stroke(gradientColor);
    line(i,0, i,height)
    
  }
} else {
  background(7, 34, 78); //dark blue
}

  angleMode(RADIANS)
  noStroke()


  
  fill(120,164,139,255)//120,164,139,255
  rect(0, 380, width, height/2); //ground

  let x=200;
  let y=120;
  
  draw_tree(x+500,y,2,obj)
  draw_tree(x+300,y,2,obj)
  draw_tree(x+100,y,2,obj)

  draw_stem(x-100,y+200,obj)
  draw_stem(x+150,y+200,obj)
  draw_stem(x+400,y+200,obj)
  draw_stem(x+30,y+200,obj)
  draw_stem(x+280,y+200,obj)
  draw_stem(x+530,y+200,obj)
  draw_stem(x+650,y+200,obj)

  draw_flower(x-100,y+200,obj)
  draw_flower(x+150,y+200,obj)
  draw_flower(x+400,y+200,obj)
  draw_flower(x+650,y+200,obj)

  draw_flower2(x+30,x+120,obj)
  draw_flower2(x+280,x+120,obj)
  draw_flower2(x+530,x+120,obj)
  
  
  

let clockHour = obj.hours
for (let i = 0; i < 12; i++) {   //loop 
  let heartX = 600 - i * 30;    //start position 600, then each distance is 30
  let Opacity = 30  

  let c;

  if (clockHour > i*2) {
    c = color(243, 78, 119, Opacity);  // if the current time is greater than the set time, the transparency of the heart changes
  } 
  else {
  c = color(251, 83, 123); // the hearts is normal color
  }
  draw_heart(heartX, -230, obj,c); //contral the 12 hearts positon,color
}


  image(Seagull[obj.seconds % 2], 250, 290); //cat walking speed
  console.log(obj.seconds % 2)

  

  let grassX = map(obj.seconds*2, 0, 59, 0, -Grass.width);

  // Draw grass
  for (let i = 0; i < width / Grass.width + 2; i++) {
    image(Grass, i * Grass.width + grassX, 410); //  grass position 
  }
  
  
  if(obj.seconds_until_alarm < 0){

  draw_cloud(150, 100,obj)
  // fill(235, 247, 247.50)
  // ellipse(30, 10, 75, 50);
  // ellipse(40, 20, 75, 50);
  // ellipse(10, 20, 75, 50);
  }

  else if(obj.seconds_until_alarm > 0){ // this is when the alarm is counting down 
   
    if(obj.millis < 999/2){
      sizeStep = 20;
      }
      else{
        sizeStep = 20*obj.seconds%30;
      }
    let sunColor = color(249, 99, 81, 35);

    let howManyCircles = map (obj.seconds,0, 59, 20,40) //30

    // console.log(howManyCircles);

    fill(sunColor);

      for(let i = 0; i < howManyCircles; i++){
    ellipse(90, 90,sizeStep*i);// sun
    }
 

    
}
  else{ // this will happen when obj.seconds_until_alarm  = 0 
    
    background(249, 99, 81, 150);
    fill(255); // white
    
    textSize(80)
    text(":", width/2-50, height/2-100)
    text(obj.hours, width/2-200, height/2-100)
    text(obj.minutes, width/2+100,height/2-100)
    
    textSize(38)
    text("People are learning the meaning of time every day", 30, height/2 )
  
  }
   
}

   

 
  function draw_tree(x,y,s,obj){
      // let treeColor
      
    let topcolor = color(240,181,176,255)
    let middlecolor = color(162,140,192)
    let bottoncolor = color(164,106,162)
    push()
    translate(x+obj.seconds*2, y);
  
    scale(s);

    
    fill(bottoncolor)
    rect(50, 95, 18, 35); //tree botton
  
    fill(middlecolor)
    triangle(30, 98, 58, 43, 86, 98); //tree middle
  
    fill(topcolor)
    triangle(30, 75, 58, 20, 86, 75); //(x1, y1, x2, y2, x3, y3)  top one
    pop()


    
}



function draw_flower(x,y,obj){  //draw the flower,
  
  let pink = color(245, 183, 177)
  let yellow = color(249, 231, 159)
  let minForLerp = map(obj.minutes, 0, 59, 0, 1)
  let flowerColor = lerpColor(pink,yellow,minForLerp)
  
  let HowsizeFlower = map (obj.seconds,0,59,4,20)
  let HowsizeFlowerCore = map (obj.seconds,0,59,30,20)

  push()
  fill(flowerColor); //Flower color changes with minutes
  translate(x-obj.seconds*2, y); //flower position changes with seconds
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 20, HowsizeFlower, HowsizeFlower+3); //Flower size changes with seconds
    rotate(TWO_PI / 10);
  }
  strokeWeight(3);
  stroke(255, 204, 0,35);
  fill(252, 243, 207);
  ellipse(0, 0, HowsizeFlowerCore); //FlowerCore size changes with seconds
  pop()

  
}
  


function draw_stem(x,y,obj) {
  let stemColor = color(144,188,171,255); // Flower stem color
  let stemWeight = map(obj.seconds/2, 0, 59, 0.5, 10); //contral stemWeight changes with seconds

  push()
  translate(x-obj.seconds*2, y); //stem position changes with seconds
  stroke(stemColor);
  strokeWeight(stemWeight);
  line(0, 0, 0, 58);

  pop()
}

function draw_flower2(x,y,obj){ //The petals of another flower rotate according to seconds
  push()
  fill(255, 255, 255,100)
  translate(x-obj.seconds*2, y);
  scale(0.55);
  strokeWeight(10);
  stroke(245, 183, 177, 30);
  let rotationAngle = map(obj.seconds % 59, 0, 59, 0, TWO_PI);  //use map to contral the angle change
   rotate(rotationAngle);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  pop()
}



function draw_heart(x,y,obj,c){ //use bezierVertex to draw a heart

  let VertexX =200;
  let VertexY =200;
  
  push()
  translate(x, y);

  fill(c); 
  noStroke(); 
  scale(1.5);

  beginShape();
  vertex(200, 200);
  bezierVertex(VertexX-5, VertexY-5, VertexX-10, VertexY+3.3, VertexX, VertexY+10); //(195, 195, 190, 203.3, 200, 210)
  bezierVertex(VertexX+10, VertexY+3.3, VertexX+5, 195, VertexX, VertexY); //(210, 203.3, 205, 195, 200, 200)
  endShape(CLOSE);

  pop()
  
}

function draw_cloud(x, y,obj) { //use 3 ellipses to draw a cloud
  push()
  translate(x, y);
  fill(250)
  noStroke();
  ellipse(30, 10, 75, 50);
  ellipse(40, 20, 75, 50);
  ellipse(10, 20, 75, 50);
  pop()
}




  


  

  
  
















