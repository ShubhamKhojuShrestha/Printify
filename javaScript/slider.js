// Selecting the slider element from the HTML
const slider = document.getElementById("slider");

// Selecting the right and left buttons for scrolling
const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");

// Adding an event listener to the right button for scrolling right
rightBtn.addEventListener("click", (event) => {
  // Using the scrollBy method to scroll the slider to the right by 400 pixels smoothly
  slider.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

// Adding an event listener to the left button for scrolling left
leftBtn.addEventListener("click", (event) => {
  // Using the scrollBy method to scroll the slider to the left by 400 pixels smoothly
  slider.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});
