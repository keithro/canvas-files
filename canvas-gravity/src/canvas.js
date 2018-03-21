// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

const gravity = 1;
const friction = 0.96;

// Event Listeners
addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
})

addEventListener('click', () => {
  init();
})

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects
function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy; // velocity
  this.radius = radius;
  this.color = color;
}

Ball.prototype.update = function () {
  if (this.y + this.radius + this.dy > canvas.height) {
    this.dy = -this.dy * friction;
    this.dx = this.dx * friction;
  } else {
    this.dy += gravity; // increases downward acceleration
  }

  if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) { // don't need to subtract dx for right side
    this.dx = -this.dx;
  }

  this.x += this.dx;
  this.y += this.dy; // adding velocity of 1 every time fn is called
  this.draw();
}

Ball.prototype.draw = function () {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.stroke();
  c.closePath();
}

// Implementation
let ballArray = [];

function init() {
  ballArray = [];
  
  for (let i = 0; i < 300; i++) {
    const radius = randomIntFromRange(8, 20);
    const x = randomIntFromRange(radius, canvas.width - radius); // subtract radius to prevent from getting spawned on edge
    const y = randomIntFromRange(0, canvas.height - radius);
    const dx = randomIntFromRange(-4, 4);
    const dy = randomIntFromRange(-4, 4);
    const color = randomColor(colors);

    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  ballArray.forEach(ball => {
    ball.update();
  });
}

init();
animate();
