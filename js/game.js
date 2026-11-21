class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
    this.player = null;
    this.enemies = [];
    this.enemyInterval = null;
    this.animationInterval = null;
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.player = new Player();

    this.enemyInterval = setInterval(() => {
      this.spawnEnemy();
    }, 5000);

    this.animationInterval = setInterval(() => {
      this.animate();
    }, 14);
  }

  animate() {
    this.enemies.forEach((enemy, i) => {
      if (enemy.x <= 0) {
        this.enemies.splice(i, 1);
        enemy.element.remove();
      }

      enemy.move();
      this.checkCollision(this.player, enemy, i);
    });
  }

  spawnEnemy() {
    if (this.enemies.length <= 5) this.enemies.push(new Enemy());
  }
}
