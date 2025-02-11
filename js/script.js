// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const messageEl = document.getElementById("message");

  // On mouse enter, add the pulse animation
  messageEl.addEventListener("mouseenter", function () {
    messageEl.classList.add("pulse");
  });

  // On mouse leave, remove the pulse animation in case it's still active
  messageEl.addEventListener("mouseleave", function () {
    messageEl.classList.remove("pulse");
  });

  // Once the animation ends, remove the class to allow re-triggering
  messageEl.addEventListener("animationend", function () {
    messageEl.classList.remove("pulse");
  });
});
