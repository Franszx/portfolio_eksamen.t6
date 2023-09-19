window.addEventListener("load", titleScreen);

let points;
let lives;
document.querySelector("#lives").textContent = lives;
// window.AbortController.addEventListener("resize", windowResize);
let rndNum;

function titleScreen() {
  // console.log("titleScreen");

  hideAlleScreens();
  document.querySelector("#clapping").pause();
  document.querySelector("#fireworks").pause();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#startknap").addEventListener("click", infoScreen);
}
function infoScreen() {
  // console.log("info screen appears");

  hideAlleScreens();

  document.querySelector("#game_over_noice").pause();
  document.querySelector("#fire_game").pause();
  document.querySelector("#intro_sound").play();
  document.querySelector("#intro_sound").volume = 0.8;

  document.querySelector("#info_screen").classList.remove("hide");
  document.querySelector("#go_button").addEventListener("click", startGame);
}

// ---------------function startGame-------------------------

function startGame() {
  // console.log("start game");
  document.querySelector("#fire_game").pause();
  document.querySelector("#intro_sound").pause();
  document.querySelector("#game_soundtrack").play();
  document.querySelector("#game_soundtrack").volume = 0.8;
  document.querySelector("#game_soundtrack").currentTime = 0;
  printPoints();
  hideAlleScreens();

  points = 0;
  lives = 5;

  document.querySelector("#time_sprite").classList.add("shrink");

  document.querySelector("#time_sprite").addEventListener("animationend", endGame);

  document.querySelector("#points").textContent = points;
  document.querySelector("#lives").textContent = lives;

  document.querySelector("#game_background").classList.remove("hide");

  document.querySelector("#alien_container").addEventListener("mousedown", alienFall);
  document.querySelector("#astro_container").addEventListener("mousedown", astroFall);
  document.querySelector("#satellite_container").addEventListener("mousedown", satelliteFly);
  document.querySelector("#alien_container2").addEventListener("mousedown", alienFall2);
  document.querySelector("#astro_container2").addEventListener("mousedown", astroFall2);
  document.querySelector("#spaceship_container").addEventListener("mousedown", spaceshipFly);

  // ---------------classes to containers-------------------

  document.querySelector("#you_saved").classList.add("glow");
  document.querySelector("#go_button").classList.add("glow");
  document.querySelector("#try_again_btn").classList.add("glow");

  document.querySelector("#go_button").classList.add("pulse");
  document.querySelector("#game_over_btn").classList.add("pulse");
  document.querySelector("#you_saved").classList.add("pulse");
  document.querySelector("#go_button_02").classList.add("pulse2");
  document.querySelector("#game_over_go_btn").classList.add("glow");
  document.querySelector("#game_over_go_btn").classList.add("glow");
  document.querySelector("#astro_container").classList.add("falling");
  document.querySelector("#alien_container").classList.add("falling");
  document.querySelector("#astro_container2").classList.add("falling");
  document.querySelector("#alien_container2").classList.add("falling");
  document.querySelector("#satellite_container").classList.add("fly");
  document.querySelector("#spaceship_container").classList.add("fly");
  document.querySelector("#alien_container2").classList.add("delay");
  document.querySelector("#astro_container").classList.add("delay");
  document.querySelector("#spaceship_container").classList.add("delay");
  rndNum = generateRandomNumber(8);
  document.querySelector("#alien_container").classList.add("pos" + rndNum);
  rndNum = generateRandomNumber(8);
  document.querySelector("#alien_container2").classList.add("pos" + rndNum);
  rndNum = generateRandomNumber(8);
  document.querySelector("#astro_container").classList.add("pos" + rndNum);
  rndNum = generateRandomNumber(8);
  document.querySelector("#astro_container2").classList.add("pos" + rndNum);
  document.querySelector("#satellite_container").classList.add("flypos" + rndNum);
  rndNum = generateRandomNumber(4);
  document.querySelector("#spaceship_container").classList.add("flypos" + rndNum);
  rndNum = generateRandomNumber(4);
}

// function windowResize() {
//   console.log("windowResize");
//   let widthScreen = document.querySelector("#screen").clientWidth;
//   let myFontInProcent = 4;
//   let myFont = (widthScreen / 100) * myFontInProcent;
//   document.querySelector("#points").style.fontSize = myFont + "px";

//   let myFontInProcent2 = 4;
//   let myFont2 = (widthScreen / 100) * myFontInProcent2;
//   document.querySelector("#lives").style.fontSize = myFont2 + "px";
// }

// -------------- points -------------------

function addPoint() {
  points = points + 1;
  if (points > 9) {
    endGame();
  }
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}

// --------------- lives -------------------

function removeLives() {
  lives = lives - 1;
  document.querySelector("#lives").textContent = lives;
  if (lives <= 0) {
    endGame();
  }
}

// ------------------ all objects falling from the sky ---------------

function alienFall() {
  // console.log("alien fall down");
  document.querySelector("#alien_container").removeEventListener("mousedown", alienFall);
  document.querySelector("#alien_container").classList.add("freeze");
  document.querySelector("#alien_sprite").classList.add("disAppear");
  // document.querySelector("#alien_sprite").classList.add("glow");
  document.querySelector("#alien_container").addEventListener("animationend", restartAlien);
  document.querySelector("#alien_whip").play();
  document.querySelector("#alien_whip").currentTime = 0;

  addPoint();
  printPoints();
}

function alienFall2() {
  document.querySelector("#alien_container2").removeEventListener("mousedown", alienFall2);
  document.querySelector("#alien_container2").classList.add("freeze");
  document.querySelector("#alien_sprite2").classList.add("disAppear");
  document.querySelector("#alien_container2").addEventListener("animationend", restartAlien2);
  document.querySelector("#alien_whip").play();
  document.querySelector("#alien_whip").currentTime = 0;
  addPoint();
  printPoints();
}

function astroFall() {
  // console.log("astronaut must stop, turn");
  document.querySelector("#astro_container").removeEventListener("mousedown", astroFall);
  document.querySelector("#astro_container").classList.add("freeze");
  document.querySelector("#astro_sprite").classList.add("rotate");
  document.querySelector("#astro_container").addEventListener("animationend", restartAstro);
  document.querySelector("#astro_hit").play();
  document.querySelector("#astro_hit").currentTime = 0;
  removeLives();
}

function astroFall2() {
  document.querySelector("#astro_container2").removeEventListener("mousedown", astroFall);
  document.querySelector("#astro_container2").classList.add("freeze");
  document.querySelector("#astro_sprite2").classList.add("rotate");
  document.querySelector("#astro_container2").addEventListener("animationend", restartAstro2);
  document.querySelector("#astro_hit").play();
  document.querySelector("#astro_hit").currentTime = 0;
  removeLives();
}

function satelliteFly() {
  // console.log("satellite fly from side");
  document.querySelector("#satellite_container").removeEventListener("mousedown", satelliteFly);

  document.querySelector("#satellite_container").classList.add("freeze");
  document.querySelector("#satellite_sprite").classList.add("rotate");
  document.querySelector("#satellite_container").addEventListener("animationend", restartSatellite);
  document.querySelector("#ow_sat").play();
  document.querySelector("#ow_sat").currentTime = 0;
  removeLives();
}

function spaceshipFly() {
  document.querySelector("#spaceship_container").removeEventListener("mousedown", spaceshipFly);
  document.querySelector("#spaceship_container").classList.add("freeze");
  document.querySelector("#spaceship_sprite").classList.add("rotate");
  document.querySelector("#spaceship_container").addEventListener("animationend", restartSpaceship);
  document.querySelector("#ow_sat").play();
  document.querySelector("#ow_sat").currentTime = 0;
  removeLives();
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// ------------------ all the restart functions ----------------------

function restartAlien() {
  // console.log("restartAlien");
  document.querySelector("#alien_container").classList = "";
  document.querySelector("#alien_sprite").classList = "";

  document.querySelector("#alien_sprite").offsetHeight;

  let rndNum = generateRandomNumber(8);

  document.querySelector("#alien_container").classList.add("pos" + rndNum);
  document.querySelector("#alien_container").classList.add("falling");

  document.querySelector("#alien_container").addEventListener("mousedown", alienFall);
}

function restartAlien2() {
  document.querySelector("#alien_container2").classList = "";
  document.querySelector("#alien_sprite2").classList = "";

  document.querySelector("#alien_sprite2").offsetHeight;

  let rndNum = generateRandomNumber(8);

  document.querySelector("#alien_container2").classList.add("pos" + rndNum);
  document.querySelector("#alien_container2").classList.add("falling");

  document.querySelector("#alien_container2").addEventListener("mousedown", alienFall2);
}

function restartAstro() {
  // console.log("restartAstro");
  document.querySelector("#astro_container").classList = "";
  document.querySelector("#astro_sprite").classList = "";
  document.querySelector("#astro_sprite").offsetHeight;

  let rndNum = generateRandomNumber(8);

  document.querySelector("#astro_container").classList.add("pos" + rndNum);

  document.querySelector("#astro_container").classList.add("falling");

  document.querySelector("#astro_container").addEventListener("mousedown", astroFall);
}

function restartAstro2() {
  document.querySelector("#astro_container2").classList = "";
  document.querySelector("#astro_sprite2").classList = "";
  document.querySelector("#astro_sprite2").offsetHeight;

  let rndNum = generateRandomNumber(8);

  document.querySelector("#astro_container2").classList.add("pos" + rndNum);

  document.querySelector("#astro_container2").classList.add("falling");

  document.querySelector("#astro_container2").addEventListener("mousedown", astroFall2);
}

function restartSatellite() {
  // console.log("restartSatellite");
  document.querySelector("#satellite_container").classList = "";
  document.querySelector("#satellite_sprite").classList = "";

  document.querySelector("#satellite_sprite").offsetHeight;

  let rndNum = generateRandomNumber(4);

  document.querySelector("#satellite_container").classList.add("fly");
  document.querySelector("#satellite_container").classList.add("flypos" + rndNum);

  document.querySelector("#satellite_container").addEventListener("mousedown", satelliteFly);
}

function restartSpaceship() {
  document.querySelector("#spaceship_container").classList = "";
  document.querySelector("#spaceship_sprite").classList = "";

  document.querySelector("#spaceship_sprite").offsetHeight;

  let rndNum = generateRandomNumber(4);

  document.querySelector("#spaceship_container").classList.add("flypos" + rndNum);

  document.querySelector("#spaceship_container").classList.add("fly");

  document.querySelector("#spaceship_container").addEventListener("mousedown", spaceshipFly);
}

// ------------------- win or loose Screens --------------------------------------

function endGame() {
  console.log("endGame" + lives);

  if (lives <= 0) {
    lose();
  } else {
    if (points > 9) {
      win();
    } else {
      lose();
    }
  }
  document.querySelector("#time_sprite").removeEventListener("animationend", endGame);
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#game_soundtrack").pause();
}

function lose() {
  // console.log("losing");
  hideAlleScreens();
  document.querySelector("#fire_game").play();
  document.querySelector("#fire_game").volume = 0.7;
  document.querySelector("#fire_game").currentTime = 0;
  document.querySelector("#game_over_noice").play();
  document.querySelector("#game_over_noice").volume = 0.7;
  document.querySelector("#game_over_noice").currentTime = 0;
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#game_over_go_btn").addEventListener("click", infoScreen);
}

function win() {
  // console.log("winning");

  hideAlleScreens();
  document.querySelector("#clapping").play();
  document.querySelector("#clapping").volume = 0.5;

  document.querySelector("#fireworks").play();
  document.querySelector("#fireworks").volume = 0.6;
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#go_button_02").addEventListener("click", titleScreen);
}

// ------------------ hide screens ---------------------------------

function hideAlleScreens() {
  // console.log("hideAllScreens");

  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#info_screen").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_background").classList.add("hide");
}
