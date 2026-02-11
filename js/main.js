function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  resize_canvas();
  create_normal_map();
  draw_AvatarHealthbarManabar();
  drawPlayer();
  create_navigationButton();
  requestAnimationFrame(gameLoop);
};

gameLoop();

