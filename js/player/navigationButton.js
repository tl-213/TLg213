let information_navigationButtons = {
  w_button: {
    x: 120,
    y: canvas.height - 271,
    w: 75,
    h: 75
  },
  s_button: {
    x: 0,
    y: 0,
    w: 75,
    h: 75
  },
  a_button: {
    x: 0,
    y: 0,
    w: 75,
    h: 75
  },
  d_button: {
    x: 0,
    y: 0,
    w: 75,
    h: 75
  }
};

function create_navigationButton() {
  let size_imageNavigationButton = 270 * scale_canvas
  
  ctx.drawImage(buttons_for_phone.image_navigationButton, 
                5, 
                canvas.height - size_imageNavigationButton - 5, 
                size_imageNavigationButton, 
	              size_imageNavigationButton);

  

  
  ctx.fillStyle = "rgba(255, 255, 255, 0)";
  
  information_navigationButtons.w_button.x = size_imageNavigationButton / 2 - information_navigationButtons.w_button.w / 2 + 1
  information_navigationButtons.w_button.y = canvas.height - size_imageNavigationButton - 2
  
  ctx.fillRect(information_navigationButtons.w_button.x,
               information_navigationButtons.w_button.y,
               information_navigationButtons.w_button.w,
               information_navigationButtons.w_button.h);



  
  ctx.fillStyle = "rgba(0, 255, 0, 0)";
  
  information_navigationButtons.a_button.x = 2
  information_navigationButtons.a_button.y = canvas.height - (size_imageNavigationButton / 2) - (information_navigationButtons.d_button.h / 2) - 6
  
  ctx.fillRect(information_navigationButtons.a_button.x,
               information_navigationButtons.a_button.y,
               information_navigationButtons.a_button.w,
               information_navigationButtons.a_button.h);



  
  ctx.fillStyle = "rgba(255, 0, 0, 0)";
  
  information_navigationButtons.s_button.x = size_imageNavigationButton / 2 - information_navigationButtons.w_button.w / 2
  information_navigationButtons.s_button.y = canvas.height - information_navigationButtons.s_button.h
  
  ctx.fillRect(information_navigationButtons.s_button.x,
               information_navigationButtons.s_button.y,
               information_navigationButtons.s_button.w,
               information_navigationButtons.s_button.h);



  
  ctx.fillStyle = "rgba(0, 0, 255, 0)";
  
  information_navigationButtons.d_button.x = size_imageNavigationButton - information_navigationButtons.d_button.w
  information_navigationButtons.d_button.y = canvas.height - (size_imageNavigationButton / 2) - (information_navigationButtons.d_button.h / 2) - 6
  
  ctx.fillRect(information_navigationButtons.d_button.x,
               information_navigationButtons.d_button.y,
               information_navigationButtons.d_button.w,
               information_navigationButtons.d_button.h);
};


window.addEventListener("keydown", function(e) {
  if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=")) {
    e.preventDefault();
  }
}, { passive: false });

window.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });
