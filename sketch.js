// Cookie Clicker
// Anamol Dhakal
// 11/16/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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
