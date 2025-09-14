const tamagotchi = document.getElementById("tamagotchi");
const icons = document.getElementById("tamagotchi-icons");
const cat = document.getElementById("cat");
const stats = document.getElementsByClassName("stats");

  tamagotchi.addEventListener ("click", () => {
    icons.classList.add("visible");
    cat.classList.add("visible");
    for (let i = 0; i < stats.length; i++) {
    stats[i].classList.add("visible");
  }

  setInterval(() => {
  hunger -= 10; 
  fun -= 10;
  sleep -=10;
  document.getElementById("hunger-value").textContent = hunger;
  document.getElementById("fun-value").textContent = fun;
  document.getElementById("sleep-value").textContent = sleep;
  
    }, 5000);
  }
    );

  limitStats = () => {
    if (hunger < 0) hunger = 0;
    if (fun < 0) fun = 0;
    if (sleep < 0) sleep = 0;
  }
  setInterval(limitStats, 5000);


const buttons = document.querySelectorAll(".btn");
const btnSound = document.getElementById("btn-sound");

buttons.forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("pressed"));
});

const leftBtn = document.getElementById("left-btn");
const midBtn = document.getElementById("mid-btn");
const rightBtn = document.getElementById("right-btn");

let hunger = 100;
let fun = 100;
let sleep = 100;

leftBtn.addEventListener("mousedown", () => {
  cat.src = "assets/images/happy_cat.gif";
  btnSound.play();
  catMeow.play();
  hunger += 10;
  if (hunger > 100) {
      hunger = 100;
    }  
    document.getElementById("hunger-value").textContent = hunger;
    
  setTimeout(() => {
    cat.src = "assets/images/cat_looking_arnd.gif";   
    catMeow.pause();
  }, 1500);
});

const catPurr = document.getElementById("cat-purr");
const catMeow = document.getElementById("cat-meow");

midBtn.addEventListener("mousedown", () => {
    cat.src = "assets/images/happy_cat_dance.gif";
    btnSound.play();
    catPurr.play();
    fun += 10;
     if (fun > 100) {
      fun = 100;
    } 

    document.getElementById("fun-value").textContent = fun;

    setTimeout(() => {
        cat.src = "assets/images/cat_looking_arnd.gif";
        catPurr.pause();
    }, 1500);
});

rightBtn.addEventListener("mousedown", () => {
    cat.src = "assets/images/cat_sleeping.gif";
    btnSound.play();
    sleep += 10;
     if (sleep > 100) {
      sleep = 100;
    }
    document.getElementById("sleep-value").textContent = sleep;

    setTimeout(() => {
        cat.src = "assets/images/cat_looking_arnd.gif";
    }, 2000);
});

document.getElementById("hunger-value").textContent = hunger;
document.getElementById("fun-value").textContent = fun;
document.getElementById("sleep-value").textContent = sleep;


const music = document.getElementById("bg-music");
music.loop = true;
music.volume = 0.2;

document.addEventListener("click", () => {
  music.play();
}, { once: true });


let hungerZeroTime = 0;
let sleepZeroTime = 0;
let funZeroTime = 0;

function updateStats() {
  if (hunger <= 0) {
    hungerZeroTime++;
  } else {
    hungerZeroTime = 0; 
  }

  if (sleep <= 0) {
    sleepZeroTime++;
  } else {
    sleepZeroTime = 0;
  }

  if (fun <= 0) {
    funZeroTime++;
  } else {
    funZeroTime = 0;
  }

  checkSpriteChange();
}

function checkSpriteChange() {
  const limit = 5; 

  if (hungerZeroTime >= limit || sleepZeroTime >= limit || funZeroTime >= limit) {
    cat.src = "assets/images/cat_crying.gif";
  } 
}
setInterval(updateStats, 1000);


const ipc = require('electron').ipcRenderer

function closeApp(e) {
  e.preventDefault()
  ipc.send('close')
}

document.getElementById("close-btn").addEventListener("click", closeApp);
