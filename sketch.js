// Cookie Clicker
// Anamol Dhakal
// 11/16/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// class Shop {
//   constructor(x, y, price, name, amountOwned) {
//     this.x = x;
//     this. y = y;
//     this.price = price;
//     this.name = name;
//     this.amountOwned = amountOwned;
//   }
//   dough() {
//     this.price = "10 cookies";
//     this.name = "Cookie Dough";
//     this.x = 100;
//     this.y = 100;
//   }
//   flower() {
//     this.price = "100 cookies";
//     this.name = "Flower";
//     this.x = 150;
//     this.y = 150;
//   }

// }

// class GoldenVariants {
//   constructor(test1, test2, test3, test4, test5, test6) {
//     this.test1 = test1;
//     this.test2 = test2;
//     this.test3 = test3;
//     this.test4 = test4;
//     this.test5 = test5;
//     this.test6 = test6;
//     this.x;
//     this.y;
//     this.dx;
//     this.dy;
//     this.width;
//   }
//   goldenCookie() {

//   }

//   goldenRush() {

//   }

//   goldenStar() {
    
//   }

  
// }

let cookie = document.querySelector(".cookie-cost");
let parsedCookie = parseFloat(cookie.innerHTML);

let cursorCost = document.querySelector(".cursor-cost");
let parsedCursorCost = parseFloat(cursorCost.innerHTML);
let cursorLevel = document.querySelector(".cursor-level");
let cursorIncrease = document.querySelector(".cursor-increase");
let parsedCursorIncrease = parseFloat(cursorIncrease.innerHTML);

let sugarCost = document.querySelector(".sugar-cost");
let parsedSugarCost = parseFloat(sugarCost.innerHTML);
let sugarLevel = document.querySelector(".sugar-level");
let sugarIncrease = document.querySelector(".sugar-increase");
let parsedSugarIncrease = parseFloat(sugarIncrease.innerHTML);

let farmCost = document.querySelector(".farm-cost");
let parsedFarmCost = parseFloat(farmCost.innerHTML);
let farmLevel = document.querySelector(".farm-level");
let farmIncrease = document.querySelector(".farm-increase");
let parsedFarmIncrease = parseFloat(farmIncrease.innerHTML);

let cpcText = document.getElementById("cpc-text");
let cpsText = document.getElementById("cps-text");

let cpc = 1;

let cps = 0;
// let leaderboard = [];
// let goldenCookie;
// let menuMusic;
// let mainGameMusic;
// let clickSound;
// let goldenCookieSound;
// let gameStarted = false;
// let miniGame = false;

function incrementCookie() {
  const cpc = 1;
  cookie.innerHTML = Math.round(parsedCookie += cpc);
  
}

function buyCursor() {
  if (parsedCookie >= parsedCursorCost) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedCursorCost);

    cursorLevel.innerHTML ++;

    parsedCursorIncrease = parseFloat ((parsedCursorIncrease * 1.03).toFixed(2));
    cursorIncrease.innerHTML = parsedCursorIncrease;
    cpc += parsedCursorIncrease;

    parsedCursorCost *= 1.18;
    cursorCost.innerHTML = Math.round(parsedCursorCost);
  }
}

function buySugar() {
  if (parsedCookie >= parsedSugarCost) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedSugarCost);

    sugarLevel.innerHTML ++;

    parsedSugarIncrease = parseFloat ((parsedSugarIncrease * 1.03).toFixed(2));
    sugarIncrease.innerHTML = parsedSugarIncrease;
    cpc += parsedSugarIncrease;

    parsedSugarCost *= 1.18;
    sugarCost.innerHTML = Math.round(parsedSugarCost);
  }
}

function buyFarm() {
  if (parsedCookie >= parsedFarmCost) {
    cookie.innerHTML = Math.round(parsedCookie -= parsedFarmCost);

    farmLevel.innerHTML ++;

    parsedFarmIncrease = parseFloat ((parsedFarmIncrease * 1.03).toFixed(2));
    farmIncrease.innerHTML = parsedFarmIncrease;
    cps += parsedFarmIncrease;

    parsedFarmCost *= 1.18;
    farmCost.innerHTML = Math.round(parsedFarmCost);
  }
}

setInterval(() => {
  parsedCookie += cps / 10;
  cookie.innerHTML = Math.round(parsedCookie);
  cpcText.innerHTML = Math.round(cpc);
  cpsText.innerHTML = Math.round(cps);
}, 100);

// function preload() {
//   cookie = loadImage("cookie.png");
//   goldenCookie = loadImage("goldenCookie.png");

  
  
//   menuMusic = loadSound("menuMusic.flac");
//   mainGameMusic = loadSound("mainGameMusic.ogg");
//   clickSound = loadSound("clickSound.mp3");
//   goldenCookieSound = loadSound("goldenCookieSound.wav");

//   menuMusic.setVolume(0.5);
//   clickSound.setVolume(1);
//   goldenCookieSound.setVolume(2);


// }


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
//   startScreen();
// }



// function startScreen() {
//   if (!menuMusic.isPlaying()) {
//     menuMusic.loop;
//   }
// }

// function mousePressed() {
//   clickSound.play();
// }

// function goldenCookieSpawn() {

//   goldenCookieSound.play();
// }

