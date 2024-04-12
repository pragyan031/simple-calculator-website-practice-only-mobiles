/* function evaluateExpression() {
    // Get the input value
    var expression = document.getElementById("expression").value;
  
    try {
      // Evaluate the expression using math.js
      var result = math.evaluate(expression);
      // Display the result
      document.getElementById("result").textContent = "Result: " + result;
    } catch (error) {
      // Handle errors
      document.getElementById("result").textContent =
        "Error: " + error.message;
    }
  }*/
const num_buttons = document.getElementsByClassName("num-btn");
const reset_button = document.getElementsByClassName("reset-btn");
const result_button = document.getElementsByClassName("res-btn");
const delete_button = document.getElementsByClassName("del-btn");
const Display = document.getElementById("out-in-scr");
const numButtonsArray = [...num_buttons];

let Display_content = "";

numButtonsArray.forEach(function (index) {
  index.addEventListener("click", () => {
    if (index.innerHTML === "x") {
      Display_content += "*";
    } else {
      Display_content += index.innerHTML;
    }
    Display.value = Display_content; // Update the value of the input field
  });
});
delete_button[0].addEventListener("click", () => {
  Display_content = Display_content.slice(0, -1); // Remove the last character
  Display.value = Display_content; // Update the value of the input field
});
reset_button[0].addEventListener("click", () => {
  Display_content = ""; // Remove the last character
  Display.value = Display_content; // Update the value of the input field
});
result_button[0].addEventListener("click", () => {
  // Get the input value

  try {
    // Evaluate the expression using math.js
    let result = math.evaluate(Display.value);
    // Display the result
    Display_content = result; // Remove the last character
    Display.value = Display_content;
  } catch (error) {
    // Handle errors
    Display.value = error.message;
  }
});
