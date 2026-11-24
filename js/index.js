const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const endScreen = document.querySelector(".end-screen");
const startButton = document.querySelector(".start-btn");
const gameContainer = document.querySelector(".game-container");

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  gameContainer.style.display = "flex";
});

let game;

window.addEventListener("load", () => {
  startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
  });

  document.addEventListener("keydown", (e) => {
    if (game !== undefined) {
      if (e.key === " ") {
        if (game.player.isJumping === false) {
          game.player.jump();
        }
      }
      if (e.key === "ArrowLeft") {
        game.player.moveLeft();
      }
      if (e.key === "ArrowRight") {
        game.player.moveRight();
      }
    }
  });
});
