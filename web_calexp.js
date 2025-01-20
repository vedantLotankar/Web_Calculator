// References
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');
const toggleButton = document.getElementById('toggle-advanced');
const calculator = document.querySelector('.calculator');

// Current input string
let currentInput = "";

// Function to update the display
function updateDisplay(value) {
  resultDisplay.value = value;
}

// Function to handle button clicks
function handleButtonClick(buttonValue) {
  if (buttonValue === 'AC') {
    currentInput = "";
    updateDisplay("0");
  } else if (buttonValue === '=') {
    try {
      let processedInput = currentInput
        .replace('×', '*')
        .replace('÷', '/')
        .replace('−', '-')
        .replace('^', '**')
        .replace('&radic;', 'Math.sqrt')
        .replace('&pi;', 'Math.PI');

      const result = eval(processedInput).toFixed(3); // Evaluate expression
      currentInput = result.toString();
      updateDisplay(currentInput);
    } catch {
      updateDisplay("Error");
      currentInput = "";
    }
  } else if (buttonValue === '⌫') {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay(currentInput);
  } else if (buttonValue === '%') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(currentInput);
  } else if (['sin', 'cos', 'tan', 'log', 'ln'].includes(buttonValue)) {
    try {
      const value = parseFloat(currentInput) || 0;
      let result;

      switch (buttonValue) {
        case 'sin':
          result = Math.sin((value * Math.PI) / 180); // Convert to radians
          break;
        case 'cos':
          result = Math.cos((value * Math.PI) / 180); // Convert to radians
          break;
        case 'tan':
          result = Math.tan((value * Math.PI) / 180); // Convert to radians
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
      }

      currentInput = result.toString();
      updateDisplay(result);
    } catch {
      updateDisplay("Error");
      currentInput = "";
    }
  } else {
    // Append numbers, operators, and parentheses
    currentInput += buttonValue;
    updateDisplay(currentInput);
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent.trim();
    handleButtonClick(buttonValue);
  });
});

// Toggle advanced buttons
toggleButton.addEventListener('click', () => {
  calculator.classList.toggle('show-advanced');
  calculator.style.width = calculator.classList.contains('show-advanced')
    ? "400px"
    : "340px"; // Adjust width for advanced layout
});
