const gameOverSound = new Audio("/sounds/game-over.mp3");
const jumpSound = new Audio("/sounds/jump.mp3");
const powerDownSound = new Audio("/sounds/power-down.mp3");
const powerUpSound = new Audio("/sounds/power-up.mp3");


const soundIcon = document.getElementById("sound-icon");
let soundEnabled = true;

const startGame = document.getElementById("start-game");
startGame?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  statsSection?.scrollIntoView();
});

const endGame = document.getElementById("game-over");
endGame?.addEventListener("click", () => {
  if (soundEnabled) {
    gameOverSound.play();
  }
});

const toggleSoundButton = document.getElementById("toggle-sound");
const toggleSound = () => {
  soundEnabled = !soundEnabled;
  soundIcon.src = soundEnabled ? "/assets/high-volume.png" : "/assets/mute.png";

  if (soundEnabled) {
    soundIcon.alt = "Sound On";
    powerUpSound.play();
  } else {
    soundIcon.alt = "Sound Off";
    powerDownSound.play();
  }
};
toggleSoundButton.addEventListener("click", toggleSound);


const goToStats = document.getElementById("go-to-stats");
const statsSection = document.getElementById("stats");
goToStats?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  statsSection?.scrollIntoView();
});

const goToProjects = document.getElementById("go-to-projects");
const projectsSection = document.getElementById("projects");
goToProjects?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  projectsSection?.scrollIntoView();
});


const goToResume = document.getElementById("go-to-resume");
const resumeSection = document.getElementById("resume");
goToResume?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  resumeSection?.scrollIntoView();
});

const goToContact = document.getElementById("go-to-contact");
const contactSection = document.getElementById("contact");
goToContact?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  contactSection?.scrollIntoView();
});
