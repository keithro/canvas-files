// --------------------
// Create the Canvas
// --------------------
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set rendering context to 2D
const c = canvas.getContext('2d');

// ------------------------------------
// Create Shapes
// ------------------------------------
// /* Drawing a rectangle */
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(200, 200, 50, 50);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(50, 400, 500, 50);

// /* Drawing a line */
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = '#fa34a3';
// c.stroke();

// /* Arc / Circle */
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// /* Making multiple circles */
// for(let i = 0; i < 9; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//   c.stroke();
// }

// ------------------------------------
/* Animating Objects */
// ------------------------------------

// // starting point
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// // speed (px per frame)
// let dx = (Math.random() - 0.5) * 8;
// let dy = (Math.random() - 0.5) * 8;
// let radius = 30;

// function animate() {
//   requestAnimationFrame(animate); // start animation
//   c.clearRect(0, 0, innerWidth, innerHeight); // clear whole area at beginning of each animation frame

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();

//   // If it touches left or right edge reverse direction;
//   if(x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }

//   // If it touches top or bottom edge reverse direction
//   if(y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
//   }

//   x += dx; // increasing val of x each loop/animation frame
//   y += dy;
// }

// animate();

// ---------------------------------------
/* Using OOP to Create Multiple Objects */
// ---------------------------------------

// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;

//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = '#ff1493';
//     c.stroke();
//     c.fillStyle = '#e6e6fa';
//     c.fill();
//   }

//   this.update = function() {
//     // If it touches left or right edge reverse direction;
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }

//     // If it touches top or bottom edge reverse direction
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx; // increasing val of x each loop/animation frame
//     this.y += this.dy;

//     this.draw();
//   }
// }

// // Create an array to store all our circles
// const circleArray = []

// // Create 100 and push to array
// for(let i = 0; i < 100; i++) {
//   let radius = 30;
//   let x = Math.random() * (innerWidth - radius * 2) + radius; // (width - r * 2) + r
//   let y = Math.random() * (innerHeight - radius * 2) + radius;
//   let dx = (Math.random() - 0.5) * 2;
//   let dy = (Math.random() - 0.5) * 2;

//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }


// function animate() {
//   requestAnimationFrame(animate); // start animation
//   c.clearRect(0, 0, innerWidth, innerHeight); // clear whole area at beginning of each animation frame

//   // for(let circle of circleArray) {
//   //   circle.update();
//   // }

//   circleArray.forEach(cir => cir.update());
// }

// animate();

// ---------------------------------------
/* Adding Interactivity */
// ---------------------------------------

const mouse = {
  x: undefined,
  y: undefined
}

const maxRadius = 40;
const minRadius = 2;

const colorArray = [
  '#283149',
  '#404B69',
  '#DA0463',
  '#DBEDF3',
  // '#000000'
]

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius; // min is equal to original size
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function () {
    // If it touches left or right edge reverse direction;
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    // If it touches top or bottom edge reverse direction
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx; // increasing val of x each loop/animation frame
    this.y += this.dy;

    // Interactivity: if within 50px of mouse pointer
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) { // grow if within 50px of mouse
      if(this.radius < maxRadius) { // only grow up to maxRadius (40px)
        this.radius += 1;
      }
    } else if(this.radius > this.minRadius) { // shrink if not within 50px and larger than minRadius (2px)
      this.radius -= 1;
    }

    this.draw();
  }
}

let circleArray = []

function init() {
  circleArray = [];

  // Create 100 cirles and push to array
  for (let i = 0; i < 500; i++) {
    let radius = Math.random() * 3 + 1; // 1-4
    let x = Math.random() * (innerWidth - radius * 2) + radius; // (width - r * 2) + r
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate); // start animation
  c.clearRect(0, 0, innerWidth, innerHeight); // clear whole area at beginning of each animation frame

  circleArray.forEach(cir => cir.update());
}

init();
animate();
