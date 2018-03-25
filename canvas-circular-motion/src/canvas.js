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

const colors = [
  '#00bdff',
  '#4d39ce',
  '#088eff',
];

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
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    // this.initialX = x; // no longer need 
    // this.initialY = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2; // to spawn in random location along circular path
    this.velocity = 0.05;
    // this.distanceFromCenter = randomIntFromRange(50, 120);
    this.distanceFromCenter = randomIntFromRange(5, 500);
    this.lastMouse = { x: x, y: y };
  }
  
  update() {
    const lastPoint = {
      x: this.x,
      y: this.y
    };

    // Move points over time
    this.radians += this.velocity;

    // Drag effect: only moving 5% of the different each frame
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // adding to original x or y position (not current position) * a random dist from center
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  }
  
  draw(lastPoint) {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y); // takes previous coordinates
    c.lineTo(this.x, this.y); // takes new coordinates
    c.stroke();
    c.closePath();
  }
}

/* 
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = 0;
}

Particle.prototype.update = function () {
  this.x = x + Math.cos(this.radians); // adding to original x position not current position
  this.draw();
}

Particle.prototype.draw = function () {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
}
 */

// Implementation
let particles;

function init() {
  particles = [];

  for (let i = 0; i < 100; i++) {
    const radius = (Math.random() * 2) + 1; // from 1 to 2
    const color = randomColor(colors);

    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  c.fillStyle = 'rgba(48, 48, 48, 0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(object =>  object.update());
}

init();
animate();
