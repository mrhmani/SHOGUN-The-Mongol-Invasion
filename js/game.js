class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen"); 
    this.player = null
    this.enemies = []
    this.enemyInterval = null
  } 

  startGame() {
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.player = new Player()


    this.enemyInterval = setInterval(() => {
      this.spawnEnemy()
    }, 5000)
  } 

  spawnEnemy() {
    if (this.enemies.length <= 5) this.enemies.push(new Enemy())
  }


}

