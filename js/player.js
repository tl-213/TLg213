let EventKeydown_of_player = {
  move: {
    normal: "o"
  },

  skill: {}
};

let player1 = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 5,

  hp: {
    hp_now: 100,
    hp_max: 100
  },

  rect_hp: {
    rect_w: 200,
    rect_h: 30
  }
};

function drawPlayer1() {
  if (EventKeydown_of_player.move.normal === "w") {
    player1.y -= player1.speed;
  } 
  else if (EventKeydown_of_player.move.normal === "s") {
    player1.y += player1.speed;
  } 
  else if (EventKeydown_of_player.move.normal === "a") {
    player1.x -= player1.speed;
  } 
  else if (EventKeydown_of_player.move.normal === "d") {
    player1.x += player1.speed;
  }

  ctx.beginPath();
  ctx.drawImage(image_player1_right.png, player1.x, player1.y);
  //ctx.arc(player1.x, player1.y, player1.r, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(
    10,
    70,
    player1.rect_hp.rect_w,
    player1.rect_hp.rect_h
  );

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(
    10,
    70,
    player1.rect_hp.rect_w * (player1.hp.hp_now / player1.hp.hp_max),
    player1.rect_hp.rect_h
  );
}

window.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "d" || e.key === "w" || e.key === "s") {
    EventKeydown_of_player.move.normal = e.key;
  }
});

window.addEventListener("keyup", (e) => {
  if (
    e.key.toLowerCase() === "w" ||
    e.key.toLowerCase() === "s" ||
    e.key.toLowerCase() === "a" ||
    e.key.toLowerCase() === "d"
  ) {
    EventKeydown_of_player.move.normal = "o";
  }
});

