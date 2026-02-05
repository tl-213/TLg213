const canvas = document.getElementById("test_canvas");
const ctx = canvas.getContext("2d");

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer1();
  requestAnimationFrame(gameLoop);
}
