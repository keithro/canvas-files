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
eval("\n\n// Initial Setup\nvar canvas = document.querySelector('canvas');\nvar c = canvas.getContext('2d');\n\nc.fillStyle = \"blue\";\nc.fillRect(0, 0, canvas.width, canvas.height);\n\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\n// Variables\nvar mouse = {\n    x: 20,\n    y: 20\n};\n\nvar colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];\n\n// Event Listeners\naddEventListener('mousemove', function (event) {\n    mouse.x = event.clientX;\n    mouse.y = event.clientY;\n});\n\naddEventListener('resize', function () {\n    canvas.width = innerWidth;\n    canvas.height = innerHeight;\n\n    init();\n});\n\n// Utility Functions\nfunction randomIntFromRange(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nfunction randomColor(colors) {\n    return colors[Math.floor(Math.random() * colors.length)];\n}\n\nfunction distance(x1, y1, x2, y2) {\n    // Distance between objects\n    var xDist = x2 - x1;\n    var yDist = y2 - y1;\n\n    // Pythagorean Theorem\n    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n}\n\n// Objects\nfunction Circle(x, y, radius, color) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n}\n\nCircle.prototype.update = function () {\n    this.draw();\n};\n\nCircle.prototype.draw = function () {\n    c.beginPath();\n    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    c.fillStyle = this.color;\n    c.fill();\n    c.closePath();\n};\n\n// Implementation\nvar circle1 = void 0;\nvar circle2 = void 0;\n\n// let circles;\n\nfunction init() {\n    circle1 = new Circle(300, 300, 100, 'black');\n    circle2 = new Circle(undefined, undefined, 30, 'red');\n\n    /* circles = []\n     for (let i = 0; i < 2; i++) {\n        circles.push();\n    } */\n}\n\n// Animation Loop\nfunction animate() {\n    requestAnimationFrame(animate);\n    c.clearRect(0, 0, canvas.width, canvas.height);\n    c.fillStyle = \"#d5d5d5\";\n    c.fillRect(0, 0, canvas.width, canvas.height);\n\n    circle1.update();\n    circle2.x = mouse.x;\n    circle2.y = mouse.y;\n    circle2.update();\n\n    if (distance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {\n        circle1.color = 'red';\n    } else {\n        circle1.color = 'black';\n    }\n\n    console.log(distance(circle1.x, circle1.y, circle2.x, circle2.y));\n\n    // objects.forEach(object => {\n    //  object.update();\n    // });\n}\n\ninit();\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2FudmFzLmpzPzYxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5pdGlhbCBTZXR1cFxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmMuZmlsbFN0eWxlID0gXCJibHVlXCI7XG5jLmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbmNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbi8vIFZhcmlhYmxlc1xuY29uc3QgbW91c2UgPSB7XG4gICAgeDogMjAsXG4gICAgeTogMjBcbn1cblxuY29uc3QgY29sb3JzID0gWycjMjE4NUM1JywgJyM3RUNFRkQnLCAnI0ZGRjZFNScsICcjRkY3RjY2J11cblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgbW91c2UueCA9IGV2ZW50LmNsaWVudFhcbiAgICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WVxufSlcblxuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGhcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHRcblxuICAgIGluaXQoKVxufSlcblxuLy8gVXRpbGl0eSBGdW5jdGlvbnNcbmZ1bmN0aW9uIHJhbmRvbUludEZyb21SYW5nZShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldXG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgLy8gRGlzdGFuY2UgYmV0d2VlbiBvYmplY3RzXG4gICAgY29uc3QgeERpc3QgPSB4MiAtIHgxXG4gICAgY29uc3QgeURpc3QgPSB5MiAtIHkxXG5cbiAgICAvLyBQeXRoYWdvcmVhbiBUaGVvcmVtXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGlzdCwgMikgKyBNYXRoLnBvdyh5RGlzdCwgMikpXG59XG5cbi8vIE9iamVjdHNcbmZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMuY29sb3IgPSBjb2xvclxufVxuXG5DaXJjbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhdygpXG59XG5cbkNpcmNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIGMuYmVnaW5QYXRoKClcbiAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSlcbiAgICBjLmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcbiAgICBjLmZpbGwoKVxuICAgIGMuY2xvc2VQYXRoKClcbn1cblxuLy8gSW1wbGVtZW50YXRpb25cbmxldCBjaXJjbGUxO1xubGV0IGNpcmNsZTI7XG5cbi8vIGxldCBjaXJjbGVzO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNpcmNsZTEgPSBuZXcgQ2lyY2xlKDMwMCwgMzAwLCAxMDAsICdibGFjaycpO1xuICAgIGNpcmNsZTIgPSBuZXcgQ2lyY2xlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAzMCwgJ3JlZCcpO1xuXG4gICAgLyogY2lyY2xlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjaXJjbGVzLnB1c2goKTtcbiAgICB9ICovXG59XG5cbi8vIEFuaW1hdGlvbiBMb29wXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICBjLmZpbGxTdHlsZSA9IFwiI2Q1ZDVkNVwiO1xuICAgIGMuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGNpcmNsZTEudXBkYXRlKCk7XG4gICAgY2lyY2xlMi54ID0gbW91c2UueDtcbiAgICBjaXJjbGUyLnkgPSBtb3VzZS55O1xuICAgIGNpcmNsZTIudXBkYXRlKCk7XG5cbiAgICBpZiAoZGlzdGFuY2UoY2lyY2xlMS54LCBjaXJjbGUxLnksIGNpcmNsZTIueCwgY2lyY2xlMi55KSA8IGNpcmNsZTEucmFkaXVzICsgY2lyY2xlMi5yYWRpdXMpIHtcbiAgICAgICAgY2lyY2xlMS5jb2xvciA9ICdyZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpcmNsZTEuY29sb3IgPSAnYmxhY2snO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlKGNpcmNsZTEueCwgY2lyY2xlMS55LCBjaXJjbGUyLngsIGNpcmNsZTIueSkpO1xuXG4gICAgLy8gb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgLy8gIG9iamVjdC51cGRhdGUoKTtcbiAgICAvLyB9KTtcbn1cblxuaW5pdCgpXG5hbmltYXRlKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY2FudmFzLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);