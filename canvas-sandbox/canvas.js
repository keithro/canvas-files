var canvas = document.querySelector('.canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
  var c = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}