const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 328;
canvas.height = 614;

// Background
const backgroundImage = new Image();
backgroundImage.src = "images/lane.png";

// Player Image
const playerImage = new Image();
playerImage.src = "images/playerCar.png";

// Truck Image
const truckImage = new Image();
truckImage.src = "images/truck.png";

// Car Image
const carImage = new Image();
carImage.src = "images/enemyCar.png";

// Stone Image
const stoneImage = new Image();
stoneImage.src = "images/rock.png";

let enemies = [truckImage, carImage, stoneImage];
let laneAxis = [50, 125, 205];

let velocity = 2;

let enemyArray = [];
let backgroundArray = [];
let score = 0;
let highScore =
  localStorage.getItem("highscore") === null
    ? 0
    : localStorage.getItem("highscore");

let gameOver = false;
let gameStart = false;

class Background {
  constructor(y) {
    this.y = y;
  }

  draw() {
    context.drawImage(backgroundImage, 0, this.y, canvas.width, canvas.height);
  }
}

backgroundArray.push(new Background(0), new Background(-canvas.height));

class Player {
  constructor(x) {
    this.x = x;
    this.y = canvas.height - 120;
    this.width = 75;
    this.height = 90;
  }

  draw() {
    context.drawImage(playerImage, this.x, this.y, this.width, this.height);
  }
}

class Enemy {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = 70;
    this.height = 90;
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

enemyArray.push(
  new Enemy(
    laneAxis[Math.floor(Math.random() * 3)],
    -10,
    enemies[Math.floor(Math.random() * 3)]
  )
);

const player = new Player(canvas.width / 2 - 42);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (gameOver === false) {
    if (gameStart) {
      for (let i = 0; i < backgroundArray.length; i++) {
        backgroundArray[i].draw();
        backgroundArray[i].y += velocity;
        if (backgroundArray[i].y === canvas.height) {
          backgroundArray[i].y = -canvas.height;
        }
      }
      for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].y === 220) {
          enemyArray.push(
            new Enemy(
              laneAxis[Math.floor(Math.random() * 3)],
              -10,
              enemies[Math.floor(Math.random() * 3)]
            )
          );
        }
        enemyArray[i].draw();
        enemyArray[i].y += velocity;
        if (enemyArray[i].y >= canvas.height) {
          enemyArray.splice(i, 1);
          score++;
        }
      }
      for (let i = 0; i < enemyArray.length; i++) {
        if (
          enemyArray[i].x < player.x + player.width &&
          enemyArray[i].x + enemyArray[i].width > player.x &&
          enemyArray[i].y < player.y + player.height &&
          enemyArray[i].height + enemyArray[i].y > player.y
        ) {
          gameOver = true;
        }
      }
      player.draw();
      if (highScore !== null) {
        if (score > highScore) {
          localStorage.setItem("highscore", score);
        }
      } else {
        localStorage.setItem("highscore", score);
      }
      context.font = "1.25rem serif";
      context.fillStyle = "black";
      context.fillText("Score: " + score, 40, 20);
    } else {
      context.fillStyle = "red";
      context.font = "1.875rem Arial";
      context.textAlign = "center";
      context.fillText(
        "Press Space to Start",
        canvas.width / 2,
        canvas.height / 2
      );
      context.fillText(
        "High Score: " + highScore,
        canvas.width / 2,
        canvas.height / 2 - 50
      );
    }
  } else {
    context.fillStyle = "red";
    context.font = "1.875rem Arial";
    context.textAlign = "center";
    context.fillText("Car Crashed", canvas.width / 2, canvas.height / 2);
  }
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 1000 / 60);
}

animate();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    if (gameStart === false) {
      gameStart = true;
    }
  }
  if (e.code === "ArrowLeft") {
    if (player.x + 75 > 121) {
      player.x -= 76;
    }
  }
  if (e.code === "ArrowRight") {
    if (player.x < 197) {
      player.x += 76;
    }
  }
});
