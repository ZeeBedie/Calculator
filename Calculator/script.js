"use strict";

// Log when the script is loaded
console.log("Script Loaded");

// Get the display element
const display = document.getElementById("display");

// Add click event listeners to all buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.textContent;

    if (input === "=") {
      calculate(); // If the equal button is clicked, calculate the result
    } else if (input === "C") {
      clearDisplay(); // If the clear button is clicked, clear the display
    } else {
      numberButtonClicked(input); // Otherwise, handle the button input (number/operator)
    }
  });
});

// Function to handle number and operator button clicks
function numberButtonClicked(input) {
  display.value += input; // Append the clicked button value to the display
}

// Function to clear the display
function clearDisplay() {
  display.value = ""; // Reset the display to an empty string
}

// Function to calculate the result
function calculate() {
  try {
    // Use eval() to calculate the value in the display and update it with the result
    display.value = eval(display.value.replace("x", "*"));
  } catch (error) {
    display.value = "Error"; // Show an error if the calculation is invalid
  }
}
