class player {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.element = document.createElement("div");
    this.x = 0;
    this.y = 50;
    this.width = 70;
    this.height = 70;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;

    this.gameScreen.appendChild(this.element);
  }
}
