class Player {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.element = document.createElement("div");
    this.x = 50;
    this.y = 450;
    this.width = 100;
    this.height = 150;
    this.image = "./assets/redsamurai.png";

    this.isJumping = false;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.backgroundImage = `url("${this.image}")`;
    this.element.style.backgroundPosition = `center`;
    this.element.style.backgroundSize = `cover`;

    this.gameScreen.appendChild(this.element);
  }

  jump() {
    this.isJumping = true;

    const upInterval = setInterval(() => {
      this.y -= 10;
    }, 20);

    setTimeout(() => {
      clearInterval(upInterval);

      const downInterval = setInterval(() => {
        this.y += 10;
      }, 20);

      setTimeout(() => {
        clearInterval(downInterval);
        this.isJumping = false;
      }, 800);
    }, 800);
  }

  updatePlayer() {
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;
  }

  moveLeft() {
    if (this.x >= 7) {
      this.x -= 30;
      this.element.style.left = `${this.x}px`;
    }
  }

  moveRight() {
    if (this.x <= 880) {
      this.x += 30;
      this.element.style.left = `${this.x}px`;
    }
  }

}
