
let EventKeydown_of_player = {
  move: {
    normal_x: "o",
    normal_y: "o"
  },

  player_direction: "right"  
};

function EventKeydown_of_player_move() {
  if (EventKeydown_of_player.move.normal_y === "w") {
    player_pos.y -= player.speed;
  } 
  else if (EventKeydown_of_player.move.normal_y === "s") {
    player_pos.y += player.speed;
  } 
  else if (EventKeydown_of_player.move.normal_x === "a") {
    player_pos.x -= player.speed;
    EventKeydown_of_player.player_direction = "left";
  } 
  else if (EventKeydown_of_player.move.normal_x === "d") {
    player_pos.x += player.speed;
    EventKeydown_of_player.player_direction = "right";
  }
}

function drawPlayer() {
  EventKeydown_of_player_move()
  
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
  if (e.key === "a" || e.key === "d") {
    EventKeydown_of_player.move.normal_x = e.key;
  }
  else if (e.key === "w" || e.key === "s") {
    EventKeydown_of_player.move.normal_y = e.key;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "a" || e.key.toLowerCase() === "d") {
    EventKeydown_of_player.move.normal_x = "o";
  }
  else if (e.key.toLowerCase() === "w" || e.key.toLowerCase() === "s") {
    EventKeydown_of_player.move.normal_y = "o";
  }
});


canvas.addEventListener("mousedown", function(event) {
  if (
    event.clientX < information_navigationButtons.w_button.x + information_navigationButtons.w_button.w &&
    event.clientX > information_navigationButtons.w_button.x &&
    event.clientY < information_navigationButtons.w_button.y + information_navigationButtons.w_button.h &&
    event.clientY > information_navigationButtons.w_button.y 
     ) {
    EventKeydown_of_player.move.normal_y = "w";
  }
   else if (
    event.clientX < information_navigationButtons.s_button.x + information_navigationButtons.s_button.w &&
    event.clientX > information_navigationButtons.s_button.x &&
    event.clientY < information_navigationButtons.s_button.y + information_navigationButtons.s_button.h &&
    event.clientY > information_navigationButtons.s_button.y 
     ) {
    EventKeydown_of_player.move.normal_y = "s";
  }


  if (
    event.clientX < information_navigationButtons.a_button.x + information_navigationButtons.a_button.w &&
    event.clientX > information_navigationButtons.a_button.x &&
    event.clientY < information_navigationButtons.a_button.y + information_navigationButtons.a_button.h &&
    event.clientY > information_navigationButtons.a_button.y 
     ) {
    EventKeydown_of_player.move.normal_x = "a";
  }
   else if (
    event.clientX < information_navigationButtons.d_button.x + information_navigationButtons.d_button.w &&
    event.clientX > information_navigationButtons.d_button.x &&
    event.clientY < information_navigationButtons.d_button.y + information_navigationButtons.d_button.h &&
    event.clientY > information_navigationButtons.d_button.y 
     ) {
    EventKeydown_of_player.move.normal_x = "d";
  }
});


canvas.addEventListener("mouseup", function(event) {
  if (
    event.clientX < information_navigationButtons.w_button.x + information_navigationButtons.w_button.w &&
    event.clientX > information_navigationButtons.w_button.x &&
    event.clientY < information_navigationButtons.w_button.y + information_navigationButtons.w_button.h &&
    event.clientY > information_navigationButtons.w_button.y 
     ) {
    EventKeydown_of_player.move.normal_y = "o";
  }
   else if (
    event.clientX < information_navigationButtons.s_button.x + information_navigationButtons.s_button.w &&
    event.clientX > information_navigationButtons.s_button.x &&
    event.clientY < information_navigationButtons.s_button.y + information_navigationButtons.s_button.h &&
    event.clientY > information_navigationButtons.s_button.y 
     ) {
    EventKeydown_of_player.move.normal_y = "o";
  }


  if (
    event.clientX < information_navigationButtons.a_button.x + information_navigationButtons.a_button.w &&
    event.clientX > information_navigationButtons.a_button.x &&
    event.clientY < information_navigationButtons.a_button.y + information_navigationButtons.a_button.h &&
    event.clientY > information_navigationButtons.a_button.y 
     ) {
    EventKeydown_of_player.move.normal_x = "o";
  }
   else if (
    event.clientX < information_navigationButtons.d_button.x + information_navigationButtons.d_button.w &&
    event.clientX > information_navigationButtons.d_button.x &&
    event.clientY < information_navigationButtons.d_button.y + information_navigationButtons.d_button.h &&
    event.clientY > information_navigationButtons.d_button.y 
     ) {
    EventKeydown_of_player.move.normal_x = "o";
  }
});
