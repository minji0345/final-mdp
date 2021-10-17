let virus;
let viruses = [];
let viruses2 = [];
let angle = 0;
let button;
let color1 = 0;
let pattern = [];
let lightx, lighty;

var pieces, radius, fft, mapMouseX, mapMouseY, audio;
var pieces1, radius1, fft, mapMouseX1, mapMouseY1;
var pieces2, radius2,analyzer, mapMouseX2, mapMouseY2;

let img1, img2, img3;
let back;


function preload() {
	audio = loadSound("assets/mamma_mia.mp3");
  img1 = loadImage("assets/ki1.png");
  img2 = loadImage("assets/ki2.png");
  img3 = loadImage("assets/ki3.png");
}

function setup() {
  createCanvas(650, 800);
  virus = new Light(-1,2,20);
  for (let i = 0; i < 700; i ++){
    viruses[i] = new Light(random(-1,1),random(-1,1),random(5,25),random(width),random(height));
  }
  for (let i = 0; i < 800; i ++){
    viruses2[i] = new Light(random(-0.5,0.5),random(-2,2),random(3,10),random(width),random(height));
  }

  textFont('urbanist');

  //사운드 관련
  fft = new p5.FFT();
  
  analyzer = new p5.Amplitude();
  
    
  audio.play();

  pieces1 = 4;
  radius1 = height / 4;
}


function draw() {
  current = millis();
  background(255);

  fft.analyze();
  

  fill('rgba(255,162,26,0.5)');

  if (mouseIsPressed) {
    cursor('grab'); 
  }else{
    cursor();
  }

  secondOne();
  
  
  for(let v of viruses){
    v.display();
    
    if (mouseIsPressed){
    v.move();
  }
  }
  
for(let v of viruses2){
    v.display();
    
    if (mouseIsPressed){
    v.move();
  }
  }

push();
  stroke(0);
  strokeWeight(1);
  fill(255,162,26,150);
  ellipse(325,280,410,410);
  ellipse(325,500,80,60);
  ellipse(325,540,140,90);
  ellipse(325,580,80,60);
  ellipse(325,615,80,60);
  triangle(125,720,325,645,525,720);
pop();

push();
  imageMode(CENTER);
  image(img2,325,160,img2.width*0.15,img2.height*0.15);
  image(img3,325,750,img3.width*0.12,img3.height*0.12);
pop();

// drawLight();


}

// function drawLight(){
//   push();
//   noFill();
//   stroke(255,162,26);
//   rectMode(CENTER);
//   //변수명 바꾸면 될듯
//   rect(325,400,100,100);
//   line(325,400,width/2,height/2+100);
//   line(275,500,width/2+50,height/2+100);
//   pop();
//   pop();
// }

function secondOne() {
  var bass = fft.getEnergy("bass");
var treble = fft.getEnergy("treble");
var mid = fft.getEnergy("mid");

var mapMid = map(mid, 0, 255, -radius, radius);
var scaleMid = map(mid, 0, 255, 1, 1.5);

var mapTreble = map(treble, 0, 255, -radius, radius);
var scaleTreble = map(treble, 0, 255, 1, 1.5);

var mapbass = map(bass, 0, 255, -100, 800);
var scalebass = map(bass, 0, 255, 0, 0.8);

mapMouseX = map(mouseX, 0, width, 4, 10);
mapMouseY = map(mouseY, 0, height, height / 4, height);

pieces = mapMouseX;
radius = mapMouseY;
  

  push();
  //background(56, 0, 161);
translate(width / 2, height / 2);


strokeWeight(0.5);

for (i = 0; i < pieces; i += 0.5) {

  rotate(TWO_PI / pieces);


  //아래(bass)
  push();
  strokeWeight(1.5);
  stroke(0);
  scale(scalebass);
  rotate(frameCount * -0.5);
  line(mapbass, radius / 2, radius, radius);
  line(-mapbass, -radius / 2, radius, radius);
      fill(81,10,163,100);
      // ellipse(mapbass-100, radius / 2,radius);
      // ellipse(mapbass-100, -radius / 2,radius);
      fill(255,255,0);
      ellipse(mapbass-300,radius/5,radius/10);
      if(mouseIsPressed){
        fill(236,192,255);
        strokeWeight(1);
        ellipse(mapbass-mapbass*0.8,radius/5,radius/15);
      }
  pop();



  //중간(mid)
  push();
  strokeWeight(0.25);
  stroke(255);
  scale(scaleMid);
  ellipse(mapMid, radius / 2, radius, radius);
  ellipse(-mapMid, -radius / 2, radius, radius);
      
      stroke(0);
      strokeWeight(0.5);
      fill(211,45,45,200);
      ellipse(-mapMid -100, -radius / 2, radius/5, radius/5);
      fill(10,137,98,200);
      ellipse(mapMid +100, -radius / 2, radius/5, radius/5);
      fill(32,32,237,200);
      ellipse(mapMid +200, -radius / 2, radius/5, radius/5);
      fill(237,198,32,200);
      ellipse(-mapMid -200, -radius / 2, radius/5, radius/5);
  pop();


  //떨림(tremble)
  push();
  stroke(255);
  scale(scaleTreble);
  line(mapTreble, radius / 2, radius, radius);
  line(-mapTreble, -radius / 2, radius, radius);
  pop();

}
pop();
//image(logo1,0,680,logo2.width/8,logo2.height/8);
}

