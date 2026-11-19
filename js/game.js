class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
  } 

  startGame() {
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.player = new Player()
    this.enemy = new Enemy()
  }

}

