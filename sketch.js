let virus;
let viruses = [];
let viruses2 = [];
let viruses3 = [];
let angle = 0;
let start1 = true;
let circleSize = 100;
let button;
let color1 = 0;

function setup() {
  createCanvas(600, 700);
  virus = new Light(-1,2,20);
  for (let i = 0; i < 700; i ++){
    viruses[i] = new Light(random(-1,1),random(-1,1),random(5,25),random(width),random(height));
  }
  for (let i = 0; i < 800; i ++){
    viruses2[i] = new Light(random(-0.5,0.5),random(-2,2),random(3,10),random(width),random(height));
  }

  for (let i = 0; i < 300; i ++){
    viruses3[i] = new Virus2(random(-2,2),random(-0.5,0.5),random(5,20),random(width),random(height));
  }
  textFont('urbanist');
  button = createButton('First');
  button.mousePressed(buttonClicked);
  button.style('border:none');
  button.style('padding:5px');
  button.style('background : rgb(29,99,255);');
  button.style("font-family: 'Do Hyeon'");
  button.style("font-size: 22px");
  button.style('color : rgb(255,255,255);');
  button.style('width : 100px');
  button.style('border-radius: 10px');
  button.position(200,510);
  button.style('display : none');
}


function draw() {
  background(0);
  
// 한마리만 있을 때
//   virus.display();
  
//   if (mouseIsPressed){
//     virus.move();
//   }

start();
fill('rgba(0,0,0,0.5)');

if (start1==true){
  color1 = 0;
  button.style('display : none');
  push();
  fill(255);
  ellipse(mouseX,mouseY,100,100);
  pop();

  push();
  fill(0);
  textSize(random(28,32));
  text("Here!",220,250,100,100);
  pop();
}

if (start1 == true && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300){
  cursor('grab');
  //circleSize = random(90,110);
}else{
  cursor();
}

  if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300){
    start1 = false;
  }

  if (start1 == false){
  color1 = 255;
  push();
  fill(29,99,255);
  //stroke(0);
  //strokeWeight(2);
  rectMode(CENTER);
  textSize(32);
  //fontWeight(400);
  textAlign(CENTER);
  textFont('urbanist');
  text("Let's get rid of the COVID virus.",250,250);
  pop();

  button.style('display : block');
  }
  
  
  for(let v of viruses){
    v.display();
    
    if (mouseIsPressed && start1 == false){
    v.move();
  }
  }
  
for(let v of viruses2){
    v.display();
    
    if (mouseIsPressed && start1 == false){
    v.move();
  }
  }

  for(let v of viruses3){
    v.display();
    
    if (mouseIsPressed && start1 == false){
    v.move();
  }
  }

push();

  if(start1 == false){
    if (circleSize < 600){
      circleSize += 20;
    }else{
      circleSize = 600;
    }


    noCursor();
    translate(mouseX,mouseY);
    rectMode(CENTER);
    rotate(angle);
    fill(29,99,255);
    noStroke();
    rect(0,0,80,5);
  }


  if(mouseIsPressed){
    angle += 0.2;
  }

pop();

if(start1 == true){
  push();
  fill(29,99,255);
  //stroke(0);
  //strokeWeight(2);
  rectMode(CENTER);
  textSize(32);
  //fontWeight(400);
  textAlign(CENTER);
  textFont('urbanist');
  text('Here we go agian',250,180);
  pop();
}

}


function start() {
  push();
  fill(color1);
  ellipse(width/2,height/2,circleSize,circleSize);
  pop();
}

function buttonClicked() {
  cursor();
  start1 = true;
  circleSize = 100;
}