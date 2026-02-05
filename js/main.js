function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer1();
  requestAnimationFrame(gameLoop);
}

gameLoop()

