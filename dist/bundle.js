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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class ItemModule{\n    constructor(item, price){\n        this.item = item;\n        this.price = price;\n    }\n}\n\nfunction InputForm(){\n    document.getElementById('submitBtn').addEventListener('click', function(e){\n\n        const itemName = document.getElementById('itemName');\n        const itemPrice = document.getElementById('itemPrice');\n\n        const newItem = new ItemModule(itemName.value, itemPrice.value)\n        ItemManager.pushItems(newItem);\n\n        console.clear();\n        ItemManager.getTasks();\n\n        itemName.value = '';\n        itemPrice.value = '';\n        e.preventDefault();\n\n    })\n}\n\n// This module is used for adding an item to the `mainList[]` array\nconst ItemManager = (function(){\n    var mainList = []\n\n    function pushItems(item){\n        mainList.push(item);\n    }\n\n    function getTasks(){\n        console.table(mainList);\n    }\n\n    return {\n        pushItems,\n        getTasks,\n    }\n})();\n\n\n\nInputForm();\n\n\n//# sourceURL=webpack://grocerylist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;