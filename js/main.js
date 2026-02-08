function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  create_normal_map();
  draw_AvatarHealthbarManabar();
  drawPlayer1();
  requestAnimationFrame(gameLoop);
}

gameLoop()

