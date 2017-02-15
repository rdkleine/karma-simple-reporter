/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	var SimpleReporter = (function () {
	    function SimpleReporter(baseReporterDecorator, formatError, config) {
	        // this.onRunStart = SimpleReporter.onRunStart;
	    }
	    SimpleReporter.onRunStart = function (browsers) {
	    };
	    return SimpleReporter;
	}());
	module.exports = { 'reporter:simple': ['type', SimpleReporter] };
	// let SimpleReporter = function (baseReporterDecorator, formatError, config) {
	//   baseReporterDecorator(this);
	//   this.onRunStart = function (browsers) {
	//     this._browsers = [];
	//     this.writeLog('Starting karma-simpler-reporter', 'log');
	//   }
	//   this.onRunComplete = function (browsers, results) {
	//     this.writeLog('All done!', 'log');
	//     if (browsers.length > 1 && !results.disconnected && !results.error) {
	//       if (!results.falied) {
	//         this.writeCommonMsg('success', results.success);
	//       } else {
	//         this.writeCommonMsg('failed', results.failed, results.success);
	//       }
	//     }
	//   }
	//   this.onBrowserStart = function (browser) {
	//     this.writeLog('Browser start', 'log');
	//     this._browsers.push(browser);
	//   }
	// };
	// module.exports = { 'reporter:simple': ['type', SimpleReporter] }; 


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTFjMWIyMmQyODhjZTM3OTM4MWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsK0MiLCJmaWxlIjoiLi9kaXN0L2Rldi9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MWMxYjIyZDI4OGNlMzc5MzgxZiIsIid1c2Ugc3RyaWN0JztcclxudmFyIFNpbXBsZVJlcG9ydGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpbXBsZVJlcG9ydGVyKGJhc2VSZXBvcnRlckRlY29yYXRvciwgZm9ybWF0RXJyb3IsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHRoaXMub25SdW5TdGFydCA9IFNpbXBsZVJlcG9ydGVyLm9uUnVuU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBTaW1wbGVSZXBvcnRlci5vblJ1blN0YXJ0ID0gZnVuY3Rpb24gKGJyb3dzZXJzKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNpbXBsZVJlcG9ydGVyO1xyXG59KCkpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHsgJ3JlcG9ydGVyOnNpbXBsZSc6IFsndHlwZScsIFNpbXBsZVJlcG9ydGVyXSB9O1xyXG4vLyBsZXQgU2ltcGxlUmVwb3J0ZXIgPSBmdW5jdGlvbiAoYmFzZVJlcG9ydGVyRGVjb3JhdG9yLCBmb3JtYXRFcnJvciwgY29uZmlnKSB7XHJcbi8vICAgYmFzZVJlcG9ydGVyRGVjb3JhdG9yKHRoaXMpO1xyXG4vLyAgIHRoaXMub25SdW5TdGFydCA9IGZ1bmN0aW9uIChicm93c2Vycykge1xyXG4vLyAgICAgdGhpcy5fYnJvd3NlcnMgPSBbXTtcclxuLy8gICAgIHRoaXMud3JpdGVMb2coJ1N0YXJ0aW5nIGthcm1hLXNpbXBsZXItcmVwb3J0ZXInLCAnbG9nJyk7XHJcbi8vICAgfVxyXG4vLyAgIHRoaXMub25SdW5Db21wbGV0ZSA9IGZ1bmN0aW9uIChicm93c2VycywgcmVzdWx0cykge1xyXG4vLyAgICAgdGhpcy53cml0ZUxvZygnQWxsIGRvbmUhJywgJ2xvZycpO1xyXG4vLyAgICAgaWYgKGJyb3dzZXJzLmxlbmd0aCA+IDEgJiYgIXJlc3VsdHMuZGlzY29ubmVjdGVkICYmICFyZXN1bHRzLmVycm9yKSB7XHJcbi8vICAgICAgIGlmICghcmVzdWx0cy5mYWxpZWQpIHtcclxuLy8gICAgICAgICB0aGlzLndyaXRlQ29tbW9uTXNnKCdzdWNjZXNzJywgcmVzdWx0cy5zdWNjZXNzKTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICB0aGlzLndyaXRlQ29tbW9uTXNnKCdmYWlsZWQnLCByZXN1bHRzLmZhaWxlZCwgcmVzdWx0cy5zdWNjZXNzKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICB0aGlzLm9uQnJvd3NlclN0YXJ0ID0gZnVuY3Rpb24gKGJyb3dzZXIpIHtcclxuLy8gICAgIHRoaXMud3JpdGVMb2coJ0Jyb3dzZXIgc3RhcnQnLCAnbG9nJyk7XHJcbi8vICAgICB0aGlzLl9icm93c2Vycy5wdXNoKGJyb3dzZXIpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7ICdyZXBvcnRlcjpzaW1wbGUnOiBbJ3R5cGUnLCBTaW1wbGVSZXBvcnRlcl0gfTsgXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==