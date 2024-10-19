// Select the screen element for displaying calculations
const screen = document.querySelector(".screen");
let ans = null; // Variable to store the last answer

// Function to print input on the screen
function printOnScreen(input) {
    screen.value += input; // Append the input to the current screen value
}

// Function to clear the screen
function clearScreen() {
    screen.value = ""; // Set the screen value to an empty string
}

// Function to delete the last character from the screen
function deleteLast() {
    // If the screen shows "Error" or "undefined", reset the screen to an empty space
    if (screen.value == "Error" || screen.value == "undefined") {
        screen.value = " ";
    } else {
        // Remove the last character from the screen value
        screen.value = screen.value.slice(0, -1);
    }
}

// Function to append the last answer to the screen
function lastAns() {
    if (ans !== null) { // Check if there is a last answer stored
        screen.value += ans; // Append the last answer to the screen
    }
}

// Function to calculate the expression on the screen
function Calc() {
    try {
        // Replace trigonometric functions with Math functions for evaluation
        let expression = screen.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan');

        // Evaluate the modified expression using eval
        screen.value = eval(expression);
        ans = screen.value; // Store the result as the last answer
    } catch (error) {
        screen.value = "Error"; // Display "Error" if evaluation fails
    }
}
