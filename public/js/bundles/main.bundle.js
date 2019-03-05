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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app/controller.js":
/*!*************************************!*\
  !*** ./public/js/app/controller.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./public/js/app/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./public/js/app/view.js\");\n\n\n\n\n\n///// Controller /////\nconst CTRL = (function(MDL, VIEW) {\n\n    const playAgain = () => {\n        console.log(\"here\");\n        MDL.exited = false;\n        return null;\n    };\n\n    const stopGame = () => {\n        console.log(\"here\");\n       MDL.exited = true;\n       return null;\n    };\n\n    const handleSelection = (event) => {\n        return new Promise((resolve) => {\n            let userPick;\n            if(event.target.classList.contains(\"rock\")) userPick = \"rock\";\n            else if(event.target.classList.contains(\"paper\")) userPick = \"paper\";\n            else if(event.target.classList.contains(\"scissors\")) userPick = \"scissors\";\n            else console.log(\"ERROR: invalid element selected in handleSelection\");\n    \n            let compPick = [\"rock\", \"paper\", \"scissors\"][Math.round(Math.random()*2)];\n            console.log(compPick);\n            switch(true) {\n                case(userPick === compPick):\n                VIEW.clearGameView();\n                VIEW.displayTie(userPick, compPick);\n                break;\n                case(userPick === \"rock\" && compPick === \"scissors\"):\n                case(userPick === \"paper\" && compPick === \"rock\"):\n                case(userPick === \"scissors\" && compPick === \"paper\"):\n                VIEW.clearGameView();\n                VIEW.displayWin(userPick, compPick)\n                break;\n                case(userPick === \"rock\" && compPick === \"paper\"):\n                case(userPick === \"paper\" && compPick === \"scissors\"):\n                case(userPick === \"scissors\" && compPick === \"rock\"):\n                VIEW.clearGameView();\n                VIEW.displayLose(userPick, compPick);\n                break;\n                default:\n                console.log(\"ERROR: user selection is not properly comparing to computer selection in handleSelection\");\n            }\n            setTimeout(() => {\n                VIEW.askToPlayAgain();\n                _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].playYes().addEventListener(\"click\", () => {\n                    resolve(playAgain());\n                });\n                _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].playNo().addEventListener(\"click\",() => {\n                    resolve(stopGame());\n                });\n            }, 5000);\n        });\n    };\n\n    const initSelection = () => {\n        return new Promise((resolve) => {\n            _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].rock().addEventListener(\"click\", (event) => {\n                resolve(handleSelection(event));\n            });\n            _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].paper().addEventListener(\"click\", (event) => {\n                resolve(handleSelection(event));\n            });\n            _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].scissors().addEventListener(\"click\", (event) => {\n                resolve(handleSelection(event));\n            });\n        });\n    };\n\n    const userSelection = () => {\n        return new Promise((resolve) => {\n            VIEW.clearGameView();\n            VIEW.displayChoices();\n            resolve(initSelection());\n        });\n    };\n\n    const initializeGame = () => {\n        return new Promise((resolve) => {\n            MDL.exited = false;\n            VIEW.clearGameView();\n            VIEW.welcomeScreen();\n            _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].yesButton().addEventListener(\"click\", () => {\n                resolve(userSelection());\n            });\n        });\n    };\n\n    return {\n        initializeGame,\n        userSelection,\n        handleSelection,\n    };\n} (_model__WEBPACK_IMPORTED_MODULE_1__[\"MDL\"], _view__WEBPACK_IMPORTED_MODULE_2__[\"VIEW\"]) );\n\n\n///// EXECUTION /////\nconst gameLoop = () => {\n    CTRL.initializeGame()\n    .then(() => {\n        if(_model__WEBPACK_IMPORTED_MODULE_1__[\"MDL\"].exited === false) return gameLoop();\n        else console.log(\"goodbye!!\");\n    });\n};\n\ngameLoop();\n\n\n//# sourceURL=webpack:///./public/js/app/controller.js?");

/***/ }),

/***/ "./public/js/app/elements.js":
/*!***********************************!*\
  !*** ./public/js/app/elements.js ***!
  \***********************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n\nconst elements = {\n\n    gameView: document.querySelector(\".game-view\"), \n    yesButton: () =>  document.querySelector(\".yes\"),\n    noButton: () => document.querySelector(\".no\"),\n    rock: () => document.querySelector(\".rock\"),\n    paper: () => document.querySelector(\".paper\"),\n    scissors: () => document.querySelector(\".scissors\"),\n    playYes: () => document.querySelector(\".play-yes\"),\n    playNo: () => document.querySelector(\".play-no\"),\n    \n};\n\n\n\n//# sourceURL=webpack:///./public/js/app/elements.js?");

/***/ }),

/***/ "./public/js/app/model.js":
/*!********************************!*\
  !*** ./public/js/app/model.js ***!
  \********************************/
/*! exports provided: MDL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDL\", function() { return MDL; });\n\nconst MDL = (function() {\n    let playerScore = 0;\n    let compScore = 0;\n    let exited = false;\n\n\n\n    return {\n        playerScore,\n        compScore,\n        exited,\n    };\n} () );\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/model.js?");

/***/ }),

/***/ "./public/js/app/view.js":
/*!*******************************!*\
  !*** ./public/js/app/view.js ***!
  \*******************************/
/*! exports provided: VIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEW\", function() { return VIEW; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./public/js/app/model.js\");\n\n\n\nconst VIEW = (function(MDL) {\n\n    const appendP = (string, ...nodeClass) => {\n        let node = document.createElement(\"p\");\n        [...nodeClass].forEach((item, index, arr) => {\n            node.classList.add(item);\n        });\n        node.textContent = string;\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].gameView.appendChild(node);\n    };\n\n    const appendImage = (src, nodeClass) => {\n        let node = document.createElement(\"div\");\n        node.classList.add(\"image\");\n        node.innerHTML = `\n            <img class=\"${nodeClass}\" src=\"${src}\"/>\n        `;\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].gameView.appendChild(node);\n    };\n\n    const appendRock = () => {\n        appendImage(\"../img/rock.svg\", \"rock\");\n    };\n\n    const appendPaper = () => {\n        appendImage(\"../img/paper.svg\", \"paper\");\n    };\n\n    const appendScissors = () => {\n        appendImage(\"../img/scissors.svg\", \"scissors\");\n    };\n\n    const welcomeScreen = () => {\n        appendP(\"Welcome to Rock Paper Scissors.\", \"welcome\", \"u-margin-b\")\n        appendP(\"Would You like to play a game?\", \"none\");\n\n        appendP(\"Yes\", \"button\", \"yes\");\n        appendP(\"No\", \"button\", \"no\");\n    };\n\n    const displayChoices = () => {\n        appendP(\"Select rock, paper, or scissors.\", \"select-prompt\", \"u-margin-b\")\n        appendP(\"Best of luck to you.\", \"select-prompt\")\n\n        appendRock();\n        appendPaper();\n        appendScissors();\n    };\n\n    const displayTie = (userPick, compPick) => {\n        appendP(\"!!! It's A Tie !!!\", \"u-margin-b\");\n        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);\n        appendImage(`../img/${userPick}.svg`, \"left-pick\");\n        appendP(\"equals\", \"beats\");\n        appendImage(`../img/${compPick}.svg`, \"right-pick\");\n    };\n\n    const displayWin = (userPick, compPick) => {\n        appendP(\"!!! You Win !!!\", \"u-margin-b\");\n        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);\n        appendImage(`../img/${userPick}.svg`, \"left-pick\");\n        appendP(\"beats\", \"beats\");\n        appendImage(`../img/${compPick}.svg`, \"right-pick\");\n    };\n\n    const displayLose = (userPick, compPick) => {\n        appendP(\"... You Lose ...\", \"u-margin-b\");\n        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);\n        appendImage(`../img/${compPick}.svg`, \"left-pick\");\n        appendP(\"beats\", \"beats\");\n        appendImage(`../img/${userPick}.svg`, \"right-pick\");\n    };\n\n    const askToPlayAgain = () => {\n        appendP(\"Return to the Main Screen?\", \"play-again\");\n\n        appendP(\"Yes\", \"button\", \"play-yes\");\n        appendP(\"No\", \"button\", \"play-no\");\n    };\n\n\n    const clearGameView = () => {\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].gameView.innerHTML = \"\";\n    };\n\n    return {\n        welcomeScreen,\n        clearGameView,\n        displayChoices,\n        displayTie,\n        displayWin,\n        displayLose,\n        askToPlayAgain,\n    };\n} (_model__WEBPACK_IMPORTED_MODULE_1__[\"MDL\"]) );\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/view.js?");

/***/ })

/******/ });