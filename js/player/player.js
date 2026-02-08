
let EventKeydown_of_player = {
  move: {
    normal: "o"
  },

  player_direction: "right"  
};

let player = {
  speed: 5,
  attack_range: 45,

  hp: {
    hp_now: 100,
    hp_max: 100
  },

  mana: {
    mana_now: 100,
    mana_max: 100
  },

  rect_hp: {
    rect_w: 200,
    rect_h: 30
  }
};

function drawPlayer() {
  if (EventKeydown_of_player.move.normal === "w") {
    player_pos.y -= player.speed;
  } 
  else if (EventKeydown_of_player.move.normal === "s") {
    player_pos.y += player.speed;
  } 
  else if (EventKeydown_of_player.move.normal === "a") {
    player_pos.x -= player.speed;
    EventKeydown_of_player.player_direction = "left";
  } 
  else if (EventKeydown_of_player.move.normal === "d") {
    player_pos.x += player.speed;
    EventKeydown_of_player.player_direction = "right";
  }

  ctx.beginPath();
  
  if (EventKeydown_of_player.player_direction === "left") {
    ctx.drawImage(image_char1_left, canvas.width / 2, canvas.height / 2);
  }
  else if (EventKeydown_of_player.player_direction === "right") {
    ctx.drawImage(image_char1_right, canvas.width / 2, canvas.height / 2);
  }
  
  ctx.fill();
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
