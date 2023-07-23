// demarrer le jeu
function go (){
    let start = document.querySelector(".start");
    let game = document.querySelector(".game");
    start.style.display =" none";
    game.style.display ="block";
    run()
}

// jeux
let hero1 = document.querySelector(".hero1");
let hero2 = document.querySelector(".hero2");
let hero3 = document.querySelector(".hero3");

function fly (){
    hero1.style.display ="block";
    hero2.style.display ="none";
    hero3.style.display ="none";
}

function run (){
    hero1.style.display ="none";
    hero2.style.display ="block";
    hero3.style.display ="none";
}

function dig (){
    hero1.style.display ="none";
    hero2.style.display ="none";
    hero3.style.display ="block";
}

// score
const scoreElement = document.getElementById("score");
let score = 0;
function updateScore() {
  score += 1;
  scoreElement.textContent = score;
}

// bird
const bird = document.querySelector(".bird");
function detectBird() {
    const hero1Rect = hero1.getBoundingClientRect();
    const birdRect = bird.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero1Rect.top < birdRect.bottom &&
      hero1Rect.bottom > birdRect.top &&
      hero1Rect.left < birdRect.right &&
      hero1Rect.right > birdRect.left
    ) {
      updateScore();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectBird);
}
detectBird();

// ball
const ball = document.querySelector(".ball");
function detectBall() {
    const hero2Rect = hero2.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero2Rect.top < ballRect.bottom &&
      hero2Rect.bottom > ballRect.top &&
      hero2Rect.left < ballRect.right &&
      hero2Rect.right > ballRect.left
    ) {
      updateScore();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectBall);
}
detectBall();

// os
const os = document.querySelector(".os");
function detectOs() {
    const hero3Rect = hero3.getBoundingClientRect();
    const osRect = os.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero3Rect.top < osRect.bottom &&
      hero3Rect.bottom > osRect.top &&
      hero3Rect.left < osRect.right &&
      hero3Rect.right > osRect.left
    ) {
      updateScore();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectOs);
}
detectOs();

// dégats
const lifeElement = document.getElementById("life");
let life = 1000;

function updateLife(){
    life -= 1;
    lifeElement.textContent = life;
}

const guepe = document.querySelector(".fly")
function detectFly() {
    const hero1Rect = hero1.getBoundingClientRect();
    const guepeRect = guepe.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero1Rect.top < guepeRect.bottom &&
      hero1Rect.bottom > guepeRect.top &&
      hero1Rect.left < guepeRect.right &&
      hero1Rect.right > guepeRect.left
    ) {
      updateLife();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectFly);
}
detectFly();

const choc = document.querySelector(".choc")
function detectChoc() {
    const hero2Rect = hero2.getBoundingClientRect();
    const chocRect = choc.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero2Rect.top < chocRect.bottom &&
      hero2Rect.bottom > chocRect.top &&
      hero2Rect.left < chocRect.right &&
      hero2Rect.right > chocRect.left
    ) {
      updateLife();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectChoc);
}
detectChoc();

const snack = document.querySelector(".snack")
function detectSnack() {
    const hero3Rect = hero3.getBoundingClientRect();
    const snackRect = snack.getBoundingClientRect();
  
    // Vérifier si les deux éléments se superposent
    if (
      hero3Rect.top < snackRect.bottom &&
      hero3Rect.bottom > snackRect.top &&
      hero3Rect.left < snackRect.right &&
      hero3Rect.right > snackRect.left
    ) {
      updateLife();
    }
  
    // Exécute automatiquement la fonction à chaque rafraîchissement de l'écran
    requestAnimationFrame(detectSnack);
}
detectSnack();

// mort
function dead (){
    if(life <= 0){
        let game = document.querySelector(".game");
        let dcd = document.querySelector(".dead")
        let start = document.querySelector(".start")
        game.style.display ="none"
        dcd.style.display ="block"
        start.style.display ="none"
    }
    requestAnimationFrame(dead);
}
dead();

const restart = document.getElementById ("restart");
// Sélectionnez le bouton par son ID
// Fonction pour recharger la page
function recharge() {
  location.reload();
}