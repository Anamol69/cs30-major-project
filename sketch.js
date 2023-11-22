// Cookie Clicker
// Anamol Dhakal
// 11/16/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class GoldenVariants {
  constructor(test1, test2, test3, test4, test5, test6) {
    this.test1 = test1;
    this.test2 = test2;
    this.test3 = test3;
    this.test4 = test4;
    this.test5 = test5;
    this.test6 = test6;
    this.x;
    this.y;
    this.dx;
    this.dy;
    this.width;
  }
  goldenCookie() {

  }

  goldenRush() {

  }

  goldenStar() {
    
  }

  
}




let cookie;
let goldenCookie;
let menuMusic;
let mainGameMusic;
let clickSound;
let goldenCookieSound;

function preload() {
  cookie = loadImage("cookie.png");
  goldenCookie = loadImage("goldenCookie.png");

  
  
  menuMusic = loadSound("menuMusic.flac");
  mainGameMusic = loadSound("mainGameMusic.ogg");
  clickSound = loadSound("clickSound.mp3");
  goldenCookieSound = loadSound("goldenCookieSound.wav");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(random(0, 255), random(0, 255), random(0, 255));
  circle(mouseX, mouseY, 100);
}



