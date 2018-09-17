let altoSax;
let bass;
let bell;
let blast;
let bottle;
let bowTapping;
let bubble;
let cap;
let cello;
let clap;
let cymbal;
let drum;
let electricBass;
let harmonica;
let metallic;
let paper;
let plinks;
let pop;
let reversedBass;
let ring;
let rocket;
let shoot;
let tambourine;
let tomTom;
let water;
let waveClap;

var contents = "";
var count = 0;
var countToClear = 0;

function preload() {
	altoSax = loadSound('assets/sounds/alto-sax.wav');
  	bass = loadSound('assets/sounds/bass.wav');
  	bell = loadSound('assets/sounds/bell.wav');
  	blast = loadSound('assets/sounds/blast.wav');
  	bottle = loadSound('assets/sounds/bottle.wav');
  	bowTapping = loadSound('assets/sounds/bow-tapping.wav');
  	bubble = loadSound('assets/sounds/bubble.mp3');
  	cap = loadSound('assets/sounds/cap.wav');
  	cello = loadSound('assets/sounds/cello.wav');
  	clap = loadSound('assets/sounds/clap.wav');
  	cymbal = loadSound('assets/sounds/cymbal.wav');
  	drum = loadSound('assets/sounds/drum.wav');
  	electricBass = loadSound('assets/sounds/electric-bass.wav');
  	harmonica = loadSound('assets/sounds/harmonica.wav');
  	metallic = loadSound('assets/sounds/metallic.wav');
  	paper = loadSound('assets/sounds/paper.wav');
  	plinks = loadSound('assets/sounds/plinks.wav');
  	pop = loadSound('assets/sounds/pop.wav');
  	reversedBass = loadSound('assets/sounds/reversed-bass.wav');
  	ring = loadSound('assets/sounds/ring.wav');
  	rocket = loadSound('assets/sounds/rocket.wav');
  	shoot = loadSound('assets/sounds/shoot.wav');
  	tambourine = loadSound('assets/sounds/tambourine.wav');
  	tomTom = loadSound('assets/sounds/tom-tom.wav');
  	water = loadSound('assets/sounds/water.mp3');
  	waveClap = loadSound('assets/sounds/wave-clap.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);

  fill(50);
  textSize(50);
  text(contents, 200, 50, 3000, 3000);
}

function keyTyped() {
  if (countToClear < 34) {
    if (count < 17) {

    	switch(key) {
      	case 'q':
          	altoSax.play();
            contents += 'q\t';
            count++;
            countToClear++;
          	break;
      	case 'w':
          	bass.play();
            contents += 'w\t';
            count++;
            countToClear++;
          	break;
          case 'e':
          	bell.play();
            contents += 'e\t';
            count++;
            countToClear++;
          	break;
          case 'r':
          	blast.play();
            contents += 'r\t';
            count++;
            countToClear++;
          	break;
          case 't':
          	bottle.play();
            contents += 't\t';
            count++;
            countToClear++;
          	break;
          case 'y':
          	bowTapping.play();
            contents += 'y\t';
            count++;
            countToClear++;
          	break;
          case 'u':
          	bubble.play();
            contents += 'u\t';
            count++;
            countToClear++;
          	break;
          case 'i':
          	cap.play();
            contents += 'i\t';
            count++;
            countToClear++;
          	break;
          case 'o':
          	cello.play();
            contents += 'o\t';
            count++;
            countToClear++;
          	break;
          case 'p':
          	clap.play();
            contents += 'p\t';
            count++;
            countToClear++;
          	break;
          case 'a':
          	cymbal.play();
            contents += 'a\t';
            count++;
            countToClear++;
          	break;
          case 's':
          	drum.play();
            contents += 's\t';
            count++;
            countToClear++;
          	break;
          case 'd':
          	electricBass.play();
            contents += 'd\t';
            count++;
            countToClear++;
          	break;
          case 'f':
          	harmonica.play();
            contents += 'f\t';
            count++;
            countToClear++;
          	break;
          case 'g':
          	metallic.play();
            contents += 'g\t';
            count++;
            countToClear++;
          	break;
          case 'h':
          	paper.play();
            contents += 'h\t';
            count++;
            countToClear++;
          	break;
          case 'j':
          	plinks.play();
            contents += 'j\t';
            count++;
            countToClear++;
          	break;
          case 'k':
          	bass.play();
            contents += 'k\t';
            count++;
            countToClear++;
          	break;
          case 'l':
          	pop.play();
            contents += 'l\t';
            count++;
            countToClear++;
          	break;
          case 'z':
          	bass.play();
            contents += 'z\t';
            count++;
            countToClear++;
          	break;
          case 'x':
          	reversedBass.play();
            contents += 'x\t';
            count++;
            countToClear++;
          	break;
          case 'c':
          	ring.play();
            contents += 'c\t';
            count++;
            countToClear++;
          	break;
          case 'v':
          	rocket.play();
            contents += 'v\t';
            count++;
            countToClear++;
          	break;
          case 'b':
          	shoot.play();
            contents += 'b\t';
            count++;
            countToClear++;
          	break;
          case 'n':
          	tambourine.play();
            contents += 'n\t';
            count++;
            countToClear++;
          	break;
          case 'm':
          	tomTom.play();
            contents += 'm\t';
            count++;
            countToClear++;
          	break;
  	     }
       }
       else {
        contents += '\n';
        //contents = "";
        count = 0;
      } 
    }
    else {
      contents = "";
      countToClear = 0;
    }
    console.log("count: "+count);
}