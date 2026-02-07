function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  create_normal_map();
  drawPlayer1();
  requestAnimationFrame(gameLoop);
}

gameLoop()

