const gameOverSound = new Audio("/game-over.mp3");
const jumpSound = new Audio("/jump.mp3");

const goToStats = document.getElementById("go-to-stats");
const startGame = document.getElementById("start-game");
const endGame = document.getElementById("game-over");
const statsSection = document.getElementById("stats");

goToStats?.addEventListener("click", () => {
  jumpSound.play();
  statsSection?.scrollIntoView();
});

startGame?.addEventListener("click", () => {
  jumpSound.play();
  statsSection?.scrollIntoView();
});

endGame?.addEventListener("click", () => {
  gameOverSound.play();
});

const goToResume = document.getElementById("go-to-resume");
const resumeSection = document.getElementById("resume");
goToResume?.addEventListener("click", () => {
  jumpSound.play();
  resumeSection?.scrollIntoView();
});

const goToContact = document.getElementById("go-to-contact");
const contactSection = document.getElementById("contact");
goToContact?.addEventListener("click", () => {
  jumpSound.play();
  contactSection?.scrollIntoView();
});
