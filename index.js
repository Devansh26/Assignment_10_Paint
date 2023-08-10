// Get canvas element and context
const canvas = document.getElementById('main');
const context = canvas.getContext('2d');

// Set initial brush color
let currentColor = '#000000';

// Set initial brush size
let brushSize = 5;

// Function to change brush color
function changeColor(color) {
  currentColor = color;
  context.strokeStyle = currentColor;
}

// Function to clear the canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to handle brush size changes
function changeBrushSize(size) {
  brushSize = size;
  context.lineWidth = brushSize;
  document.getElementById('brushSize').textContent = brushSize;
}

// Add event listeners to color buttons
document.getElementById('black').addEventListener('click', () => changeColor('#000000'));
document.getElementById('pink').addEventListener('click', () => changeColor('#F50057'));
document.getElementById('blue').addEventListener('click', () => changeColor('#2979FF'));
document.getElementById('yellow').addEventListener('click', () => changeColor('#FFD600'));

// Add event listener to eraser button
document.getElementById('erase').addEventListener('click', () => changeColor('#FFFFFF'));

// Add event listener to clear button
document.getElementById('new').addEventListener('click', clearCanvas);

// Add event listener to slider
const slider = document.getElementById('slider');
slider.addEventListener('input', () => changeBrushSize(parseInt(slider.value)));

// Set initial brush size and color
changeBrushSize(brushSize);
changeColor(currentColor);

// Add mouse event listeners for drawing
let isDrawing = false;

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;
  context.beginPath();
  context.moveTo(x, y);
});

canvas.addEventListener('mousemove', (event) => {
  if (!isDrawing) return;
  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;
  context.lineTo(x, y);
  context.stroke();
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  context.closePath();
});

canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
  context.closePath();
});
