const tamagotchi = document.getElementById("tamagotchi");
const icons = document.getElementById("tamagotchi-icons");
const cat = document.getElementById("cat");

  tamagotchi.addEventListener ("click", () => {
    icons.classList.add("visible");
    cat.classList.add("visible");
  }
    );

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


leftBtn.addEventListener("mousedown", () => {
  cat.src = "assets/images/happy_cat.gif";
  btnSound.play();

  setTimeout(() => {
    cat.src = "assets/images/cat_looking_arnd.gif";   
  }, 1500);
});

midBtn.addEventListener("mousedown", () => {
    cat.src = "assets/images/happy_cat_dance.gif";
    btnSound.play();


    setTimeout(() => {
        cat.src = "assets/images/cat_looking_arnd.gif";
    }, 1500);
});

rightBtn.addEventListener("mousedown", () => {
    cat.src = "assets/images/cat_sleeping.gif";
      btnSound.play();


    setTimeout(() => {
        cat.src = "assets/images/cat_looking_arnd.gif";
    }, 2000);
});

const music = document.getElementById("bg-music");
music.loop = true;
music.volume = 0.2;

document.addEventListener("click", () => {
  music.play();
}, { once: true });


