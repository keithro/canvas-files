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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Initial Setup\nvar canvas = document.querySelector('canvas');\nvar c = canvas.getContext('2d');\n\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\n// Variables\nvar mouse = {\n  x: innerWidth / 2,\n  y: innerHeight / 2\n};\n\nvar colors = ['#00bdff', '#4d39ce', '#088eff'];\n\n// Event Listeners\naddEventListener('mousemove', function (event) {\n  mouse.x = event.clientX;\n  mouse.y = event.clientY;\n});\n\naddEventListener('resize', function () {\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n\n  init();\n});\n\n// Utility Functions\nfunction randomIntFromRange(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nfunction randomColor(colors) {\n  return colors[Math.floor(Math.random() * colors.length)];\n}\n\nfunction distance(x1, y1, x2, y2) {\n  var xDist = x2 - x1;\n  var yDist = y2 - y1;\n\n  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n}\n\n// Objects\n\nvar Particle = function () {\n  function Particle(x, y, radius, color) {\n    _classCallCheck(this, Particle);\n\n    this.x = x;\n    this.y = y;\n    // this.initialX = x; // no longer need \n    // this.initialY = y;\n    this.radius = radius;\n    this.color = color;\n    this.radians = Math.random() * Math.PI * 2; // to spawn in random location along circular path\n    this.velocity = 0.05;\n    // this.distanceFromCenter = randomIntFromRange(50, 120);\n    this.distanceFromCenter = randomIntFromRange(5, 500);\n    this.lastMouse = { x: x, y: y };\n  }\n\n  _createClass(Particle, [{\n    key: 'update',\n    value: function update() {\n      var lastPoint = {\n        x: this.x,\n        y: this.y\n      };\n\n      // Move points over time\n      this.radians += this.velocity;\n\n      // Drag effect: only moving 5% of the different each frame\n      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;\n      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;\n\n      // adding to original x or y position (not current position) * a random dist from center\n      this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;\n      this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;\n\n      this.draw(lastPoint);\n    }\n  }, {\n    key: 'draw',\n    value: function draw(lastPoint) {\n      c.beginPath();\n      c.strokeStyle = this.color;\n      c.lineWidth = this.radius;\n      c.moveTo(lastPoint.x, lastPoint.y); // takes previous coordinates\n      c.lineTo(this.x, this.y); // takes new coordinates\n      c.stroke();\n      c.closePath();\n    }\n  }]);\n\n  return Particle;\n}();\n\n/* \nfunction Particle(x, y, radius, color) {\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n  this.color = color;\n  this.radians = 0;\n}\n\nParticle.prototype.update = function () {\n  this.x = x + Math.cos(this.radians); // adding to original x position not current position\n  this.draw();\n}\n\nParticle.prototype.draw = function () {\n  c.beginPath();\n  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n  c.fillStyle = this.color;\n  c.fill();\n  c.closePath();\n}\n */\n\n// Implementation\n\n\nvar particles = void 0;\n\nfunction init() {\n  particles = [];\n\n  for (var i = 0; i < 100; i++) {\n    var radius = Math.random() * 2 + 1; // from 1 to 2\n    var color = randomColor(colors);\n\n    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));\n  }\n}\n\n// Animation Loop\nfunction animate() {\n  requestAnimationFrame(animate);\n\n  c.fillStyle = 'rgba(48, 48, 48, 0.05)';\n  c.fillRect(0, 0, canvas.width, canvas.height);\n\n  particles.forEach(function (object) {\n    return object.update();\n  });\n}\n\ninit();\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2FudmFzLmpzPzYxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5pdGlhbCBTZXR1cFxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbi8vIFZhcmlhYmxlc1xuY29uc3QgbW91c2UgPSB7XG4gIHg6IGlubmVyV2lkdGggLyAyLFxuICB5OiBpbm5lckhlaWdodCAvIDJcbn1cblxuY29uc3QgY29sb3JzID0gW1xuICAnIzAwYmRmZicsXG4gICcjNGQzOWNlJyxcbiAgJyMwODhlZmYnLFxuXTtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gIG1vdXNlLnggPSBldmVudC5jbGllbnRYO1xuICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WTtcbn0pXG5cbmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuXG4gIGluaXQoKTtcbn0pXG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG5mdW5jdGlvbiByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgY29uc3QgeERpc3QgPSB4MiAtIHgxO1xuICBjb25zdCB5RGlzdCA9IHkyIC0geTE7XG5cbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGlzdCwgMikgKyBNYXRoLnBvdyh5RGlzdCwgMikpO1xufVxuXG4vLyBPYmplY3RzXG5jbGFzcyBQYXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHJhZGl1cywgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgLy8gdGhpcy5pbml0aWFsWCA9IHg7IC8vIG5vIGxvbmdlciBuZWVkIFxuICAgIC8vIHRoaXMuaW5pdGlhbFkgPSB5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnJhZGlhbnMgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7IC8vIHRvIHNwYXduIGluIHJhbmRvbSBsb2NhdGlvbiBhbG9uZyBjaXJjdWxhciBwYXRoXG4gICAgdGhpcy52ZWxvY2l0eSA9IDAuMDU7XG4gICAgLy8gdGhpcy5kaXN0YW5jZUZyb21DZW50ZXIgPSByYW5kb21JbnRGcm9tUmFuZ2UoNTAsIDEyMCk7XG4gICAgdGhpcy5kaXN0YW5jZUZyb21DZW50ZXIgPSByYW5kb21JbnRGcm9tUmFuZ2UoNSwgNTAwKTtcbiAgICB0aGlzLmxhc3RNb3VzZSA9IHsgeDogeCwgeTogeSB9O1xuICB9XG4gIFxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgbGFzdFBvaW50ID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfTtcblxuICAgIC8vIE1vdmUgcG9pbnRzIG92ZXIgdGltZVxuICAgIHRoaXMucmFkaWFucyArPSB0aGlzLnZlbG9jaXR5O1xuXG4gICAgLy8gRHJhZyBlZmZlY3Q6IG9ubHkgbW92aW5nIDUlIG9mIHRoZSBkaWZmZXJlbnQgZWFjaCBmcmFtZVxuICAgIHRoaXMubGFzdE1vdXNlLnggKz0gKG1vdXNlLnggLSB0aGlzLmxhc3RNb3VzZS54KSAqIDAuMDU7XG4gICAgdGhpcy5sYXN0TW91c2UueSArPSAobW91c2UueSAtIHRoaXMubGFzdE1vdXNlLnkpICogMC4wNTtcblxuICAgIC8vIGFkZGluZyB0byBvcmlnaW5hbCB4IG9yIHkgcG9zaXRpb24gKG5vdCBjdXJyZW50IHBvc2l0aW9uKSAqIGEgcmFuZG9tIGRpc3QgZnJvbSBjZW50ZXJcbiAgICB0aGlzLnggPSB0aGlzLmxhc3RNb3VzZS54ICsgTWF0aC5jb3ModGhpcy5yYWRpYW5zKSAqIHRoaXMuZGlzdGFuY2VGcm9tQ2VudGVyO1xuICAgIHRoaXMueSA9IHRoaXMubGFzdE1vdXNlLnkgKyBNYXRoLnNpbih0aGlzLnJhZGlhbnMpICogdGhpcy5kaXN0YW5jZUZyb21DZW50ZXI7XG5cbiAgICB0aGlzLmRyYXcobGFzdFBvaW50KTtcbiAgfVxuICBcbiAgZHJhdyhsYXN0UG9pbnQpIHtcbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGMubGluZVdpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgYy5tb3ZlVG8obGFzdFBvaW50LngsIGxhc3RQb2ludC55KTsgLy8gdGFrZXMgcHJldmlvdXMgY29vcmRpbmF0ZXNcbiAgICBjLmxpbmVUbyh0aGlzLngsIHRoaXMueSk7IC8vIHRha2VzIG5ldyBjb29yZGluYXRlc1xuICAgIGMuc3Ryb2tlKCk7XG4gICAgYy5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG4vKiBcbmZ1bmN0aW9uIFBhcnRpY2xlKHgsIHksIHJhZGl1cywgY29sb3IpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgdGhpcy5yYWRpYW5zID0gMDtcbn1cblxuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy54ID0geCArIE1hdGguY29zKHRoaXMucmFkaWFucyk7IC8vIGFkZGluZyB0byBvcmlnaW5hbCB4IHBvc2l0aW9uIG5vdCBjdXJyZW50IHBvc2l0aW9uXG4gIHRoaXMuZHJhdygpO1xufVxuXG5QYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgYy5iZWdpblBhdGgoKTtcbiAgYy5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICBjLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gIGMuZmlsbCgpO1xuICBjLmNsb3NlUGF0aCgpO1xufVxuICovXG5cbi8vIEltcGxlbWVudGF0aW9uXG5sZXQgcGFydGljbGVzO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBwYXJ0aWNsZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgcmFkaXVzID0gKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7IC8vIGZyb20gMSB0byAyXG4gICAgY29uc3QgY29sb3IgPSByYW5kb21Db2xvcihjb2xvcnMpO1xuXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCByYWRpdXMsIGNvbG9yKSk7XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIExvb3BcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDQ4LCA0OCwgNDgsIDAuMDUpJztcbiAgYy5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIHBhcnRpY2xlcy5mb3JFYWNoKG9iamVjdCA9PiAgb2JqZWN0LnVwZGF0ZSgpKTtcbn1cblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jYW52YXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);