// Initialize the quantity data to 0
let data = 0;

// Get a reference to the HTML element for displaying quantity
const quantityContainer = document.getElementById("quantity-container");

// Set the initial value of the quantity container to the data
quantityContainer.innerText = data;

// Get references to the increment and decrement buttons
const qtyIncrement = document.getElementById("qty-increment");
const qtyDecrement = document.getElementById("qty-decrement");

// Add click event listener to the increment button
qtyIncrement.addEventListener("click", () => {
  // Increment the data value by 1
  data += 1;

  // Update the quantity container with the new data value
  quantityContainer.innerHTML = data;
});

// Add click event listener to the decrement button
qtyDecrement.addEventListener("click", () => {
  // Check if data is already at 0 to prevent negative values
  if (data === 0) return;

  // Decrement the data value by 1
  data -= 1;

  // Update the quantity container with the new data value
  quantityContainer.innerHTML = data;
});
