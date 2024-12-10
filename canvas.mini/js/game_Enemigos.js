//Traer una referncia del objeto (elemento)canvas
const canvas = document.getElementById("mycanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
// ----------------------------------------------

// ----------------------------------------------
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;
//vARIABLE QUE INDICA SI EL JUEGO A ACABADO
let isPlaying = true;

//Crear los eventos para detectar el click del raton
canvas.addEventListener("mousedown", function imprimirClick() {
  player.isMoving = true;
});
canvas.addEventListener("mouseup", function imprimirClick() {
  player.isMoving = false;
});
canvas.addEventListener("touchstart", function imprimirClick() {
  player.isMoving = true;
});
canvas.addEventListener("touchend", function imprimirClick() {
  player.isMoving = false;
});
//Craer el player
const player = {
  x: 10,
  y: GAME_H / 2 - 20,
  w: 30,
  h: 30,
  color: "gold",
  speedX: 3.5,
  isMoving: false,
};
//Crear la meta
const meta = {
  x: GAME_W - 40,
  y: GAME_H / 2 - 20,
  w: 30,
  h: 30,
  color: "green",
  speedX: 1.5,
  isMoving: false,
};

const enemies = [
  {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color: "purple",
    speedY: 2.5,
  },
  {
    x: 200,
    y: 100,
    w: 40,
    h: 40,
    color: "magenta",
    speedY: 3.7,
  },
  {
    x: 500,
    y: 100,
    w: 30,
    h: 30,
    color: "indic",
    speedY: 3.5,
  },
  {
    x: 400,
    y: 100,
    w: 40,
    h: 40,
    color: "darckpurple",
    speedY: 2.9,
  },
  {
    x: 300,
    y: 100,
    w: 50,
    h: 50,
    color: "purple",
    speedY: 1.7,
  },
];
function update() {
  //Mover al player
  if (player.isMoving) {
    player.x += player.speedX;
  }
  //Miramos si chocamos con la meta si es asi has ganando
if (checkColision(player,meta)) {
    isPlaying = false;
    alert("Has ganado");
    window.location ="";
    
}
  //Para cada enemigo del array
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    //Mirar si hay colision con el player
    if (checkColision(player, enemies[i])) {
      isPlaying = false;
      alert("Intentalo otrabez");
      window.location = ""; //refrescar la pagina
    }

    //Mover el enemy
    enemies[i].y += enemies[i].speedY;
    //Chequear la colision con el borde inferior
    if (enemies[i].y + enemies[i].h >= GAME_H) {
      enemies[i].speedY = enemies[i].speedY * -1;
    } else if (enemies[i].y <= 0) {
      //Chequear la colision con el borde superior
      enemies[i].y = 0;
      enemies[i].speedY = enemies[i].speedY * -1;
    }
  }
}
function draw() {
  //Limpia el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);

  //Dibuja al player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Dibujar la Meta
  ctx.fillStyle = meta.color;
  ctx.fillRect(meta.x, meta.y, meta.w, meta.h);

  //Dibuja los enemigos
  for (let i = 0; i < enemies.length; i++) {
    ctx.fillStyle = enemies[i].color;
    ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h);
  }
  enemies.forEach(function (enemy) {
    
  })
}

function checkColision(rect1, rect2) {
  const colX = rect1.x + rect1.w > rect2.x && rect1.x < rect2.x + rect2.w;
  const colY = rect1.y + rect1.h > rect2.y && rect1.y < rect2.y + rect2.h;
  return colX && colY;
}

// setInterval(function () {
// draw();
// update();
// }, 1);

function step() {
  update();
  draw();
  if (isPlaying) {
    window.requestAnimationFrame(step);
  }
}
//Paso inicial
step();
