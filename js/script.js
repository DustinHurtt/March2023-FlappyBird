const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')

let gameOn = false

let animationId

const background = new Image()
background.src = './images/bg.png'

const fabbyImg = new Image()
fabbyImg.src = './images/flappy.png'

const fabby = {
  x: 400,
  y: 200,
  width: 80,
  height: 56,
  speedX: 0,
  speedY: 0,
  gravity: .1,
  // gravitySpeed: 0,

  update() {
    if (this.y + this.height >= canvas.height) {
        this.y -= 20
      }
    if (this.y <= 0) {
        this.y += 20
      }
    if (this.speedY < 8) { 
        this.speedY += this.gravity
      } else {
        this.speedY = this.speedY
      }
    this.y += this.speedY
    ctx.drawImage(fabbyImg, this.x, this.y, this.width, this.height)
    },

  newPostion(event) {

    switch (event.code) {
      case 'ArrowLeft':
        this.x -= 6

        break;
      case 'ArrowRight':
        this.x += 6

        break;
      case 'Space':
        if (this.speedY > -5){
        this.speedY -= 1}
        console.log("space");
        break;
    }
    }

}


function animationLoop() {

  ctx.clearRect(0, 0, 1200, 600)
  ctx.drawImage(background, 0, 0, 1200, 600)

  fabby.update()

  
}

function startGame() {

  gameOn = true

  animationId = setInterval(animationLoop, 16)

  console.log('starting')
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {

    if (!gameOn) {
      
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

    }
  };

  document.addEventListener("keydown", (event) => {

    fabby.newPostion(event)

  });


};
