







function startGame() {
  // let logo = document.getElementById('logo')
  // logo.style.visibility = 'hidden'
  // logo.style.height = '0px'
  console.log('starting')
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let logo = document.getElementById('logo')
    logo.style.visibility = 'hidden'
    logo.style.height = '0px'

    let container = document.getElementById('game-board')
    container.style.visibility = 'visible'
    container.style.height = '600px'

    let gameBoard = document.getElementById('my-canvas')
    gameBoard.height = '600'
    gameBoard.width = '1200'

    startGame();
  };
};
