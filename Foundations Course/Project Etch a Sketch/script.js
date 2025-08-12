// Create the container
const container = document.createElement('div');
document.body.appendChild(container);

// Apply flexbox and styling via JS
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '272px'; // 16x16px + 15 gaps of 2px
container.style.gap = '2px';
container.style.border = '1px solid #ccc';
container.style.padding = '4px';
container.style.boxSizing = 'border-box'; // important for sizing

// Create 16x16 = 256 squares
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  
  // Style the square
  square.style.width = '16px';
  square.style.height = '16px';
  square.style.backgroundColor = '#3498db';
  square.style.transition = 'background-color 0.2s ease'; // smooth hover

  // Simulate CSS hover by using mouseover/mouseout events
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
  });
  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = '#3498db';
  });

  container.appendChild(square);
}

const button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'Resize Grid';

button.addEventListener('click', () => {
  let userInput = prompt("Enter a number (max 100): ");
  let userPrompt = parseInt(userInput);

  if (isNaN(userPrompt) || userPrompt < 1 || userPrompt > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  // Update container size
  container.style.width = (userPrompt * 16 + (userPrompt - 1) * 2) + 'px';
  container.innerHTML = ""; // Clear existing squares

  for (let i = 0; i < userPrompt * userPrompt; i++) {
    const square = document.createElement('div');

    // Style the square
    square.style.width = '16px';
    square.style.height = '16px';
    square.style.backgroundColor = '#3498db';
    square.style.transition = 'background-color 0.2s ease';

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'blue';
    });
    square.addEventListener('mouseout', () => {
      square.style.backgroundColor = '#3498db';
    });

    container.appendChild(square);
  }
});


