/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./task1.js":
/*!******************!*\
  !*** ./task1.js ***!
  \******************/
/***/ (() => {

eval("const debounce = (fn, ms) => {\r\n  let timeout;\r\n  return function () {\r\n    const fnCall = () => {\r\n      fn.apply(this, arguments);\r\n    };\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(fnCall, ms);\r\n  };\r\n};\r\n\r\nfunction onChange(e) {\r\n  console.log(e.target.value);\r\n}\r\n\r\nonChange = debounce(onChange, 200);\r\n\r\ndocument.getElementById(\"search\").addEventListener(\"keyup\", onChange);\r\n\n\n//# sourceURL=webpack://task1/./task1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./task1.js"]();
/******/ 	
/******/ })()
;