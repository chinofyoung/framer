(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive .(t|j)s(x?)|.css$":
/*!*************************************!*\
  !*** ./code sync .(t|j)s(x?)|.css$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Effects": "./code/Effects.tsx",
	"./Effects.tsx": "./code/Effects.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive .(t|j)s(x?)|.css$";

/***/ }),

/***/ "./code/Effects.tsx":
/*!**************************!*\
  !*** ./code/Effects.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvRWZmZWN0cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBNEQ7QUFFNUQsTUFBTSxJQUFJLEdBQUcsYUFBSSxDQUFDO0lBQ2QsTUFBTSxFQUFFLElBQUk7SUFDWixLQUFLLEVBQUUsbUJBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEIsT0FBTyxFQUFFLG1CQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQztDQUMxQixDQUFDLENBQUE7QUFFVyxRQUFBLEtBQUssR0FBYSxHQUFHLEVBQUU7O0lBQ2hDLE9BQU87UUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsS0FBSzs7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQixnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ2hDO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRWpDLE9BQU87UUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsS0FBSzs7WUFDRCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNwRCxPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsRUFBRTthQUNmLENBQUMsQ0FBQTtTQUNMO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRS9CLE9BQU87UUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsS0FBSzs7WUFDRCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUN2QztLQUNKLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxZQUFZLEdBQWEsR0FBRyxFQUFFOztJQUN2QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtLQUMxQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEdBQUcsRUFBRTs7SUFDdEMsT0FBTztRQUNILEtBQUs7O1lBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUMxQixnQkFBTyxDQUFDLE1BQU0sQ0FDVixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2xEO2dCQUNJLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCLEVBQ0QsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDakMsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUE7U0FDeEI7S0FDSixDQUFBO0NBQ0osQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    toggle: true,
    scale: framer_1.Animatable(1),
    opacity: framer_1.Animatable(1),
    rotation: framer_1.Animatable(0),
});
exports.Scale = () => {
    window["__checkBudget__"]();
    return {
        scale: data.scale,
        onTap() {
            window["__checkBudget__"]();
            data.scale.set(0.6);
            framer_1.animate.spring(data.scale, 1);
        },
    };
};
exports.Rotate = props => {
    window["__checkBudget__"]();
    data.rotation.set(props.rotation);
    return {
        rotation: data.rotation,
        onTap() {
            window["__checkBudget__"]();
            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {
                tension: 250,
                friction: 20,
            });
        },
    };
};
exports.Fade = props => {
    window["__checkBudget__"]();
    data.opacity.set(props.opacity);
    return {
        opacity: data.opacity,
        onTap() {
            window["__checkBudget__"]();
            framer_1.animate.linear(data.opacity, 0, 0.2);
        },
    };
};
exports.SwitchOutput = () => {
    window["__checkBudget__"]();
    return {
        opacity: data.opacity,
        rotation: data.rotation,
    };
};
exports.SwitchInput = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            framer_1.animate.spring({ opacity: data.opacity, rotation: data.rotation }, {
                opacity: toggle ? 0.5 : 1,
                rotation: toggle ? 360 : 0,
            }, { tension: 200, friction: 20 });
            data.toggle = !toggle;
        },
    };
};
exports.__info__ = [{ name: "Scale", type: "override" }, { name: "Rotate", type: "override" }, { name: "Fade", type: "override" }, { name: "SwitchOutput", type: "override" }, { name: "SwitchInput", type: "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive .(t|j)s(x?)|.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"0.7.13","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-1/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-hand-iphone-1"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-hand-iphone-2"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-2 */ "framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-2/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-hand-iphone-2"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-2","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-iphone-x-space-gray"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray */ "framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-space-gray/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-iphone-x-space-gray"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-space-gray","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"build/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@framer/framer.device-hand-iphone-1\":\"^1.0.0\",\"@framer/framer.device-hand-iphone-2\":\"^1.0.0\",\"@framer/framer.device-skin-apple-iphone-x-space-gray\":\"^1.0.0\",\"@types/react\":\"^16.0.31\",\"framer\":\"^0.7.11\"},\"peerDependencies\":{\"framer\":\"^0.7.11\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"4d130df3-0d45-473c-bcbe-0f1d1a2a3c41\"},\"author\":\"Benjamin den Boer\",\"dependencies\":{}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ })

/******/ });
});