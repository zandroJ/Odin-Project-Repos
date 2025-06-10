//create variables for placeholders
let currentInput = '';
let firstNumber = null;
let operator = null;

function updateDisplay() {//function for displaying the inputs on the element
  document.getElementById('display').value = currentInput;
}
function appendNumber(num) {// used for appending the number on the display
  currentInput += num;
  updateDisplay();
}
function setOperator(op) {
  if (currentInput === '') return;

  firstNumber = parseFloat(currentInput);
  operator = op;
  currentInput = ''; // reset input for the second number
}
function clearDisplay() {
  currentInput = '';
  firstNumber = null;
  operator = null;
  updateDisplay();
}
function calculate() {
  if (operator === null || currentInput === '') return;

  const secondNumber = parseFloat(currentInput);
  const result = operate(firstNumber, secondNumber, operator);
  currentInput = result.toString();
  firstNumber = null;
  operator = null;
  updateDisplay();
}
function operate(num1, num2, operator) {
  switch (operator) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
    default: return 0;
  }
}


function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return 'Error';
  return a / b;
}


