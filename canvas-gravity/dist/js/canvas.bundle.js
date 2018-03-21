/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Initial Setup\nvar canvas = document.querySelector('canvas');\nvar c = canvas.getContext('2d');\n\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\n// Variables\nvar mouse = {\n  x: innerWidth / 2,\n  y: innerHeight / 2\n};\n\nvar colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];\n\nvar gravity = 1;\nvar friction = 0.96;\n\n// Event Listeners\naddEventListener('mousemove', function (event) {\n  mouse.x = event.clientX;\n  mouse.y = event.clientY;\n});\n\naddEventListener('resize', function () {\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n\n  init();\n});\n\naddEventListener('click', function () {\n  init();\n});\n\n// Utility Functions\nfunction randomIntFromRange(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nfunction randomColor(colors) {\n  return colors[Math.floor(Math.random() * colors.length)];\n}\n\nfunction distance(x1, y1, x2, y2) {\n  var xDist = x2 - x1;\n  var yDist = y2 - y1;\n\n  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n}\n\n// Objects\nfunction Ball(x, y, dx, dy, radius, color) {\n  this.x = x;\n  this.y = y;\n  this.dx = dx;\n  this.dy = dy; // velocity\n  this.radius = radius;\n  this.color = color;\n}\n\nBall.prototype.update = function () {\n  if (this.y + this.radius + this.dy > canvas.height) {\n    this.dy = -this.dy * friction;\n    this.dx = this.dx * friction;\n  } else {\n    this.dy += gravity; // increases downward acceleration\n  }\n\n  if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {\n    // don't need to subtract dx for right side\n    this.dx = -this.dx;\n  }\n\n  this.x += this.dx;\n  this.y += this.dy; // adding velocity of 1 every time fn is called\n  this.draw();\n};\n\nBall.prototype.draw = function () {\n  c.beginPath();\n  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n  c.fillStyle = this.color;\n  c.fill();\n  c.stroke();\n  c.closePath();\n};\n\n// Implementation\nvar ballArray = [];\n\nfunction init() {\n  ballArray = [];\n\n  for (var i = 0; i < 300; i++) {\n    var radius = randomIntFromRange(8, 20);\n    var x = randomIntFromRange(radius, canvas.width - radius); // subtract radius to prevent from getting spawned on edge\n    var y = randomIntFromRange(0, canvas.height - radius);\n    var dx = randomIntFromRange(-4, 4);\n    var dy = randomIntFromRange(-4, 4);\n    var color = randomColor(colors);\n\n    ballArray.push(new Ball(x, y, dx, dy, radius, color));\n  }\n}\n\n// Animation Loop\nfunction animate() {\n  requestAnimationFrame(animate);\n  c.clearRect(0, 0, canvas.width, canvas.height);\n\n  ballArray.forEach(function (ball) {\n    ball.update();\n  });\n}\n\ninit();\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2FudmFzLmpzPzYxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5pdGlhbCBTZXR1cFxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbi8vIFZhcmlhYmxlc1xuY29uc3QgbW91c2UgPSB7XG4gIHg6IGlubmVyV2lkdGggLyAyLFxuICB5OiBpbm5lckhlaWdodCAvIDJcbn1cblxuY29uc3QgY29sb3JzID0gWycjMjE4NUM1JywgJyM3RUNFRkQnLCAnI0ZGRjZFNScsICcjRkY3RjY2J107XG5cbmNvbnN0IGdyYXZpdHkgPSAxO1xuY29uc3QgZnJpY3Rpb24gPSAwLjk2O1xuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgbW91c2UueCA9IGV2ZW50LmNsaWVudFg7XG4gIG1vdXNlLnkgPSBldmVudC5jbGllbnRZO1xufSlcblxuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbiAgaW5pdCgpO1xufSlcblxuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGluaXQoKTtcbn0pXG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG5mdW5jdGlvbiByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgY29uc3QgeERpc3QgPSB4MiAtIHgxO1xuICBjb25zdCB5RGlzdCA9IHkyIC0geTE7XG5cbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGlzdCwgMikgKyBNYXRoLnBvdyh5RGlzdCwgMikpO1xufVxuXG4vLyBPYmplY3RzXG5mdW5jdGlvbiBCYWxsKHgsIHksIGR4LCBkeSwgcmFkaXVzLCBjb2xvcikge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLmR4ID0gZHg7XG4gIHRoaXMuZHkgPSBkeTsgLy8gdmVsb2NpdHlcbiAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gIHRoaXMuY29sb3IgPSBjb2xvcjtcbn1cblxuQmFsbC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy55ICsgdGhpcy5yYWRpdXMgKyB0aGlzLmR5ID4gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keSAqIGZyaWN0aW9uO1xuICAgIHRoaXMuZHggPSB0aGlzLmR4ICogZnJpY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5keSArPSBncmF2aXR5OyAvLyBpbmNyZWFzZXMgZG93bndhcmQgYWNjZWxlcmF0aW9uXG4gIH1cblxuICBpZiAodGhpcy54ICsgdGhpcy5yYWRpdXMgKyB0aGlzLmR4ID4gY2FudmFzLndpZHRoIHx8IHRoaXMueCAtIHRoaXMucmFkaXVzIDw9IDApIHsgLy8gZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdCBkeCBmb3IgcmlnaHQgc2lkZVxuICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgfVxuXG4gIHRoaXMueCArPSB0aGlzLmR4O1xuICB0aGlzLnkgKz0gdGhpcy5keTsgLy8gYWRkaW5nIHZlbG9jaXR5IG9mIDEgZXZlcnkgdGltZSBmbiBpcyBjYWxsZWRcbiAgdGhpcy5kcmF3KCk7XG59XG5cbkJhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIGMuYmVnaW5QYXRoKCk7XG4gIGMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgYy5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICBjLmZpbGwoKTtcbiAgYy5zdHJva2UoKTtcbiAgYy5jbG9zZVBhdGgoKTtcbn1cblxuLy8gSW1wbGVtZW50YXRpb25cbmxldCBiYWxsQXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgYmFsbEFycmF5ID0gW107XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDMwMDsgaSsrKSB7XG4gICAgY29uc3QgcmFkaXVzID0gcmFuZG9tSW50RnJvbVJhbmdlKDgsIDIwKTtcbiAgICBjb25zdCB4ID0gcmFuZG9tSW50RnJvbVJhbmdlKHJhZGl1cywgY2FudmFzLndpZHRoIC0gcmFkaXVzKTsgLy8gc3VidHJhY3QgcmFkaXVzIHRvIHByZXZlbnQgZnJvbSBnZXR0aW5nIHNwYXduZWQgb24gZWRnZVxuICAgIGNvbnN0IHkgPSByYW5kb21JbnRGcm9tUmFuZ2UoMCwgY2FudmFzLmhlaWdodCAtIHJhZGl1cyk7XG4gICAgY29uc3QgZHggPSByYW5kb21JbnRGcm9tUmFuZ2UoLTQsIDQpO1xuICAgIGNvbnN0IGR5ID0gcmFuZG9tSW50RnJvbVJhbmdlKC00LCA0KTtcbiAgICBjb25zdCBjb2xvciA9IHJhbmRvbUNvbG9yKGNvbG9ycyk7XG5cbiAgICBiYWxsQXJyYXkucHVzaChuZXcgQmFsbCh4LCB5LCBkeCwgZHksIHJhZGl1cywgY29sb3IpKTtcbiAgfVxufVxuXG4vLyBBbmltYXRpb24gTG9vcFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGJhbGxBcnJheS5mb3JFYWNoKGJhbGwgPT4ge1xuICAgIGJhbGwudXBkYXRlKCk7XG4gIH0pO1xufVxuXG5pbml0KCk7XG5hbmltYXRlKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NhbnZhcy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);