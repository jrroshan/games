const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 288;
canvas.height = 512;

//Welcome screen
const welcomeImage = new Image();
welcomeImage.src = "images/message.png";

//Background Image
const backgroundImage = new Image();
backgroundImage.src = "images/background-day.png";

//Top Pipe Image
const topPipeImage = new Image();
topPipeImage.src = "images/pipe-green-top.png";

// Bottom Pipe Image
const bottomPipeImage = new Image();
bottomPipeImage.src = "images/pipe-green.png";

// Bottom Base Image
const bottomBaseImage = new Image();
bottomBaseImage.src = "images/base.png";

//Bird Image
let birdImage = new Image();
birdImage.src = "images/bluebird-midflap.png";

// Game over Image
let gameOverImage = new Image();
gameOverImage.src = "images/gameover.png";

context.font = "1.25rem serif";
context.fillStyle = "black";

let pipeArray = [];
let score = 0;
let flappy_highScore =
  localStorage.getItem("flappy_highScore") === null
    ? 0
    : localStorage.getItem("flappy_highScore");

let gameOver = false;
let gameStart = false;

let gap = 80;
let constant = topPipeImage.height + gap;

class Pipe {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    context.drawImage(topPipeImage, this.x, this.y);
    context.drawImage(bottomPipeImage, this.x, this.y + constant);
  }
}

class Bird {
  constructor(y) {
    this.x = canvas.width / 2;
    this.y = y;
  }

  draw() {
    context.drawImage(birdImage, this.x, this.y);
  }

  update() {
    if (this.y >= canvas.height - bottomBaseImage.height) {
      location.reload();
    }
  }
}

pipeArray.push(new Pipe(canvas.width, 0));

let bird = new Bird(canvas.height / 2 - 80);

function draw() {
  for (let i = 0; i < pipeArray.length; i++) {
    pipeArray[i].draw();
    pipeArray[i].x--;
    if (pipeArray[i].x === 80) {
      score += 1;
      pipeArray.push(
        new Pipe(canvas.width, Math.floor(Math.random() * (-100 - 50 + 1) + 50))
      );
    }
    if (
      (bird.x + birdImage.width >= pipeArray[i].x &&
        bird.x <= pipeArray[i].x + topPipeImage.width &&
        (bird.y <= pipeArray[i].y + topPipeImage.height ||
          bird.y + birdImage.height >= pipeArray[i].y + constant)) ||
      bird.y + birdImage.height >= canvas.height - bottomBaseImage.height
    ) {
      gameOver = true;
    }
    if (pipeArray[i].x + 50 <= 0) {
      pipeArray.splice(i, 1);
    }
  }
  bird.y += 1;
  bird.draw();
  bird.update();
  if (flappy_highScore !== null) {
    if (score > flappy_highScore) {
      localStorage.setItem("flappy_highScore", score);
    }
  } else {
    localStorage.setItem("flappy_highScore", score);
  }
  context.drawImage(bottomBaseImage, 0, canvas.height - bottomBaseImage.height);
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(backgroundImage, 0, 0);
  if (gameOver === false) {
    if (gameStart) {
      draw();
      context.fillText("Score: " + score, 10, 20);
    } else {
      context.fillText("HighScore: " + flappy_highScore, 10, 20);
      context.drawImage(welcomeImage, 50, 50);
    }
  } else {
    context.drawImage(gameOverImage, 50, 50);
  }
  requestAnimationFrame(animate);
}

animate();
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    if (gameStart === false) {
      gameStart = true;
    }
    bird.y -= 30;
  }
  if (e.code === "Enter") {
    if (gameOver === true) {
      this.location.reload();
    }
  }
});
