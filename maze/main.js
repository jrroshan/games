const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 600;

let map = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
    0, 0, 0, 1, 1,
  ],
  [
    1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
];

let collisionBox = [];
let keyFound = false;
let gameFinished = false;
// Brick
let brick = new Image();
brick.src = "image/block.jpg";

// Player
let playerImage = new Image();
playerImage.src = "image/player.png";

// Door
let door = new Image();
door.src = "image/door.jpg";

// Key
let keyImage = new Image();
keyImage.src = "image/key.png";

class Key  {
  constructor(x,  y) {
    this.x = x;
    this.y = y;
  }

  draw()  {
    context.beginPath();
    context.drawImage(keyImage,this.x,this.y,20,20)
    context.closePath();
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.newX = 0;
    this.newY = 0;
  }

  draw() {
    context.beginPath();
    context.drawImage(playerImage, this.x, this.y, 20, 20);
    context.closePath();
  }

  update(x, y) {
    this.x = x;
    this.y = y;
  }
}

function checkCollision() {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      let block = collisionBox[i][j];
      if (gameFinished === false) {
        if (player.newX === block.x && player.newY === block.y) {
          if (block.status === 2) {
            if (keyFound === true) {
              gameFinished = true;
              player.update(player.newX, player.newY);
            } else {
              alert("key not found");
            }
          } else if (block.status === 3) {
            keyFound = true;
            player.update(player.newX, player.newY);
          } else if (block.status !== 1) {
            player.update(player.newX, player.newY);
          }
        } else if (
          player.newX < 0 ||
          (player.newX >= canvas.width && player.newY < 0) ||
          player.newY >= canvas.height
        ) {
        }
      }
    }
  }
}

let player = new Player(560,  560);

function drawBlock() {
  for (let i = 0; i < map.length; i++) {
    collisionBox.push([]);
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        context.beginPath();
        context.drawImage(brick, j * 20, i * 20, 20, 20);
        context.closePath();
      }
      if (map[i][j] === 2) {
        context.beginPath();
        context.drawImage(door, j * 20, i * 20, 20, 20);
        context.closePath();
      }
      if (map[i][j] === 3) {
        if (keyFound === false) {
          let key = new Key(j * 20, i * 20);
          key.draw();
        }
      }
      collisionBox[i].push({
        x: j * 20,
        y: i * 20,
        status:
          map[i][j] === 1 ? 1 : map[i][j] === 2 ? 2 : map[i][j] === 3 ? 3 : 0,
      });
    }
  }
}

drawBlock();

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    //Up
    player.newY = player.y - 20;
    player.newX = player.x;
  }

  if (e.code === "ArrowRight" || e.code === "KeyD") {
    // Right
    player.newX = player.x + 20;
    player.newY = player.y;
  }

  if (e.code === "ArrowDown" || e.code === "KeyS") {
    //Down
    player.newY = player.y + 20;
    player.newX = player.x;
  }

  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    //Left
    player.newX = player.x - 20;
    player.newY = player.y;
  }
  checkCollision();
});

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (gameFinished === false) {
    player.draw();
    drawBlock();
  } else {
    context.fillStyle = "red";
    context.font = "1.875rem Arial";
    context.textAlign = "center";
    context.fillText("Game Completed", canvas.width / 2, canvas.height / 2);
  }
  requestAnimationFrame(animate);
}

animate();

