const canvas = document.getElementById("TL_canvas");
const ctx = canvas.getContext("2d");

let device = "o";

function isTouchDevice() {
  return navigator.maxTouchPoints > 0;
};

function isPhoneLike() {
  return isTouchDevice() && window.innerWidth <= 900;
};

if (isPhoneLike()) {
  device = "phone";
}
else {
  device = "computer";
};

let original_width = 1210;
let original_height = 545;

function resize_canvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

let scale_canvas = Math.min(
  canvas.width / original_width,
  canvas.height / original_height
);

console.log(scale_canvas)

function TLdrawImage(image, x, y, w = null, h = null, useScale = null) {
  ctx.beginPath();
  
  if (w === null && h === null && useScale === null) {
    ctx.drawImage(image, x, y);
    return
  }
  else if (useScale === true && scale_canvas <= 1.2 && scale_canvas >= 0.7) {
    ctx.drawImage(image, 
                  x * scale_canvas, y * scale_canvas, 
                  w * scale_canvas, h * scale_canvas)
  }
  else {
    ctx.drawImage(image, x, y, w, h);
  }
};
