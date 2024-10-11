const gameOverSound = new Audio("/game-over.mp3");
const jumpSound = new Audio("/jump.mp3");
const powerDownSound = new Audio("/power-down.mp3");
const powerUpSound = new Audio("/power-up.mp3");

const goToStats = document.getElementById("go-to-stats");
const startGame = document.getElementById("start-game");
const endGame = document.getElementById("game-over");
const statsSection = document.getElementById("stats");

const toggleSoundButton = document.getElementById("toggle-sound");
const soundIcon = document.getElementById("sound-icon");
let soundEnabled = true;

const toggleSound = () => {
  soundEnabled = !soundEnabled;
  soundIcon.src = soundEnabled ? "/high-volume.png" : "/mute.png";

  if (soundEnabled) {
    soundIcon.alt = "Sound On";
    powerUpSound.play();
  } else {
    soundIcon.alt = "Sound Off";
    powerDownSound.play();
  }
};

toggleSoundButton.addEventListener("click", toggleSound);

goToStats?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  statsSection?.scrollIntoView();
});

startGame?.addEventListener("click", () => {
  if (soundEnabled) {
    jumpSound.play();
  }
  statsSection?.scrollIntoView();
});

endGame?.addEventListener("click", () => {
  if (soundEnabled) {
    gameOverSound.play();
  }
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
