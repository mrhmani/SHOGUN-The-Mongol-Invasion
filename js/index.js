const startScreen = document.querySelector(".start-screen")  
const gameScreen = document.querySelector(".game-screen") 
const endScreen = document.querySelector(".end-screen") 
const startButton = document.querySelector(".start-btn") 

startButton.addEventListener('click', () => {
    startScreen.style.display = "none"
  gameScreen.style.display = "flex"
});
