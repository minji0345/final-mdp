var pieces, radius, fft, analyzer, mapMouseX, mapMouseY, audio, toggleBtn, uploadBtn, uploadedAudio, uploadAnim;
var colorPalette = ["#02073c", "#5b0ff5", "#f50fac", "#f50fac"];

let img2,img3;

function preload() {
  audio = loadSound("assets/mamma_mia.mp3");
  img2 = loadImage("assets/ki2.png");
  img3 = loadImage("assets/ki3.png");
}

function setup() {
  createCanvas(600, 700);
  
  analyzer = new p5.Amplitude();
  fft = new p5.FFT();
  audio.loop();
}

function draw() {
  background(255);
  
  
  level = analyzer.getLevel();
  fft.analyze();
  
  push();
  
    translate(300,350);
	var bass = fft.getEnergy(100, 150);
	var treble = fft.getEnergy(150, 250);
	var mid = fft.getEnergy("mid");

	var mapMid = map(mid, 0, 255, -radius, radius);
    var scaleMid = map(mid, 0, 255, 1, 1.5);
    //추가
	
  
    

	var mapTreble = map(treble, 0, 255, 200, 350);
	var scaleTreble = map(treble, 0, 255, 0, 1);

	var mapbass = map(bass, 0, 255, 50, 200);
	var scalebass = map(bass, 0, 255, 0.05, 1.2);

	//mapMouseX = map(mouseX, 0, width, 1, 50);
	mapMouseXbass = map(mouseX, 0, width, 1, 5);
	//mapMouseY = map(mouseY, 0, height, 2, 6);
    
  mapMouseX = map(mouseX, 0, width, 4, 10);
mapMouseY = map(mouseY, 0, height, height / 4, height);

pieces = mapMouseX;
radius = mapMouseY;



	for (i = 0; i < pieces; i += 0.5) {

		rotate(TWO_PI /pieces);

		noFill();
      
      /*----------  MID  ----------*/
		push();
		noStroke(0);
        fill(255,162,26,100);
       ellipse(mapMid + i / 2, -mapMid - i * 2, radius/3, radius/3);
		//triangle(mapMid + i / 2, mapMid - i * 2, radius, radius,radius/2, radius/2);
		pop();

		/*----------  BASS  ----------*/
		push();
		stroke(0);
		rotate(frameCount * -0.005);
		strokeWeight(0.5);
        line(mapbass, radius / 2, radius, radius);
        line(-mapbass, -radius / 2, -radius, -radius);
		pop();


		
      
      //add
        push();
        stroke(0);
        strokeWeight(0.5);
        fill(255);
        scale(mid*0.005);
        ellipse(-mapMid -100, -radius/ 2, radius/8, radius/8);
        fill(32,32,237,200);
        ellipse(mapMid+400, -radius / 2, radius/5, radius/5);
		pop();


		/*----------  TREMBLE  ----------*/
		push();
		stroke(32,32,237,200);
		strokeWeight(0.6);
		scale(mouseY * 0.0005);
        ellipse(mapTreble, radius / 2, radius, radius);
        //ellipse(-mapTreble, -radius / 2, radius, radius);
		//ellipse(mapTreble,-mapTreble, mapMouseY * i / 2, mapMouseY * i / 2);
		pop();

	}
  
  pop();
  
  push();
  translate(300,0);
  imageMode(CENTER);
  image(img2,0,200,img2.width*0.15,img2.height*0.15);
  image(img3,0,600,img3.width*0.12,img3.height*0.12);
  pop();
}

// function polygon(x, y, radius, npoints) {
// 	var angle = TWO_PI / npoints;
// 	beginShape();
// 	for (var a = 0; a < TWO_PI; a += angle) {
// 		var sx = x + cos(a) * radius;
// 		var sy = y + sin(a) * radius;
// 		curveVertex(sx, sy);   
// 	}
// 	endShape(CLOSE);
// }