document.addEventListener("DOMContentLoaded", function () {
  /* -------------------------------------------
     Pulse Animation on Text Hover
  ------------------------------------------- */
  const messageEl = document.getElementById("message");

  messageEl.addEventListener("mouseenter", function () {
    messageEl.classList.add("pulse");
  });

  messageEl.addEventListener("mouseleave", function () {
    messageEl.classList.remove("pulse");
  });

  messageEl.addEventListener("animationend", function () {
    messageEl.classList.remove("pulse");
  });


  /* -------------------------------------------
     Matrix Rain Animation on Canvas
  ------------------------------------------- */
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  // Set the canvas size to fill the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Binary characters to display
  const binaryChars = ["0", "1"];

  // Font size (in pixels) for the binary digits
  const fontSize = 16;
  ctx.font = fontSize + "px monospace";

  // Calculate the number of columns based on the canvas width and font size
  const columns = Math.floor(canvas.width / fontSize);

  // Create an array of drops – one per column. Each drop represents the y-coordinate (in "rows")
  const drops = [];
  for (let i = 0; i < columns; i++) {
    // Initialize drops at random y positions for a varied effect
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
  }

  // Function to draw the matrix rain effect
  function drawMatrix() {
    // Create a fading effect by drawing a semi-transparent rectangle over the entire canvas
    ctx.fillStyle = "rgba(0, 31, 63, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the color and font for the binary characters
    ctx.fillStyle = "#ffffff";
    ctx.font = fontSize + "px monospace";

    // Loop over each column
    for (let i = 0; i < drops.length; i++) {
      // Choose a random binary character
      const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      // Draw the character at the appropriate (x, y) position
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Randomly reset the drop to the top when it passes the bottom
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      // Increment the y coordinate for the drop
      drops[i]++;
    }
    // Request the next frame
    requestAnimationFrame(drawMatrix);
  }

  // Start the matrix rain animation
  drawMatrix();

  // Update canvas size when the window is resized
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});