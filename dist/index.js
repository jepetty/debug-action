module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(334);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 334:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

// import * as github from '@actions/github';
const cp = __webpack_require__(129);

// Object.defineProperty(github.context, 'github', {enumerable: true});
// Object.defineProperty(process.env, 'env', { enumerable: true});
// console.log('-------- GitHub Properties --------')
// for (const prop in github.context) {
//     console.log(`${prop}: ${github.context[prop]}`);
// }
// Object.defineProperty(github.context.payload, 'payload', {enumerable: true});
// for (const prop in github.context.payload) {
//     console.log(`payload.${prop}: ${github.context.payload[prop]}`)
// }
// if (github.context.eventName === 'pull_request') {
//     Object.defineProperty(github.context.payload.pull_request, 'payload', {enumerable: true});
//     for (const prop in github.context.payload.pull_request) {
//         console.log(`pullrequest.${prop}: ${github.context.payload.pull_request[prop]}`)
//     }
//     for (const prop in github.context.payload.pull_request.base) {
//         console.log(`pullrequest.base.${prop}: ${github.context.payload.pull_request.base[prop]}`)
//     }
//     for (const prop in github.context.payload.pull_request.head) {
//         console.log(`pullrequest.head.${prop}: ${github.context.payload.pull_request.head[prop]}`)
//     }
// }

console.log('\n-------- Process.ENV properties --------')
for (const prop in process.env) {
    console.log(`${prop}: ${process.env[prop]}`);
}

const nodeThing = cp.exec('node -v');
nodeThing.stdout.on('data', (chunk) => {
    console.log(`Node version: ${chunk}`);
});
nodeThing.on('message', (message) => {
    console.log(message);
})

/***/ })

/******/ });