/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvYXBwL3N0b3JlLmpzP2IxODUiXSwibmFtZXMiOlsic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiLCJiYXNrZXRSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUNsQ0MsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRUMsd0RBQWFBO0FBRGQ7QUFEeUIsQ0FBRCxDQUE1QiIsImZpbGUiOiIuL3NyYy9hcHAvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYmFza2V0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGJhc2tldDogYmFza2V0UmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/iprogrammer/News_weather_app/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    session: pageProps.session,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n      store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUMsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBYyxXQUFPLEVBQUVBLFNBQVMsQ0FBQ0MsT0FBakM7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBRUMsNkNBQWpCO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUEsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"removeGroupedFromBasket\": function() { return /* binding */ removeGroupedFromBasket; },\n/* harmony export */   \"hydrate\": function() { return /* binding */ hydrate; },\n/* harmony export */   \"clearBasket\": function() { return /* binding */ clearBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; },\n/* harmony export */   \"selectTotal\": function() { return /* binding */ selectTotal; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"basket\",\n  initialState,\n  reducers: {\n    hydrate: (state, action) => {\n      return action.payload;\n    },\n    // Store actions\n    addToBasket: (state, action) => {\n      state.items = [...state.items, action.payload];\n    },\n    removeFromBasket: (state, action) => {\n      let pos = state.items.findIndex(item => item.id === action.payload.id);\n      let newBasket = [...state.items];\n\n      if (pos > -1) {\n        newBasket.splice(pos, 1);\n      } else {\n        console.warn(`Can't remove product (id: ${action.payload.id}) as its not in the basket`);\n      }\n\n      state.items = newBasket;\n    },\n    removeGroupedFromBasket: (state, action) => {\n      let newBasket = state.items.filter(item => item.id !== action.payload.id);\n      state.items = newBasket;\n    },\n    clearBasket: (state, action) => {\n      state.items = [];\n    }\n  }\n});\nconst {\n  addToBasket,\n  removeFromBasket,\n  removeGroupedFromBasket,\n  hydrate,\n  clearBasket\n} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice\n\nconst selectItems = state => state.basket.items;\nconst selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzQ1YzkiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaHlkcmF0ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZFRvQmFza2V0IiwicmVtb3ZlRnJvbUJhc2tldCIsInBvcyIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlR3JvdXBlZEZyb21CYXNrZXQiLCJmaWx0ZXIiLCJjbGVhckJhc2tldCIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInNlbGVjdFRvdGFsIiwicmVkdWNlIiwidG90YWwiLCJwcmljZSIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFO0FBRFksQ0FBckI7QUFJTyxNQUFNQyxXQUFXLEdBQUdDLDZEQUFXLENBQUM7QUFDckNDLE1BQUksRUFBRSxRQUQrQjtBQUVyQ0osY0FGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzFCLGFBQU9BLE1BQU0sQ0FBQ0MsT0FBZDtBQUNELEtBSE87QUFJUjtBQUNBQyxlQUFXLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzlCRCxXQUFLLENBQUNOLEtBQU4sR0FBYyxDQUFDLEdBQUdNLEtBQUssQ0FBQ04sS0FBVixFQUFpQk8sTUFBTSxDQUFDQyxPQUF4QixDQUFkO0FBQ0QsS0FQTztBQVFSRSxvQkFBZ0IsRUFBRSxDQUFDSixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDbkMsVUFBSUksR0FBRyxHQUFHTCxLQUFLLENBQUNOLEtBQU4sQ0FBWVksU0FBWixDQUF1QkMsSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWVAsTUFBTSxDQUFDQyxPQUFQLENBQWVNLEVBQTNELENBQVY7QUFDQSxVQUFJQyxTQUFTLEdBQUcsQ0FBQyxHQUFHVCxLQUFLLENBQUNOLEtBQVYsQ0FBaEI7O0FBRUEsVUFBSVcsR0FBRyxHQUFHLENBQUMsQ0FBWCxFQUFjO0FBQ1pJLGlCQUFTLENBQUNDLE1BQVYsQ0FBaUJMLEdBQWpCLEVBQXNCLENBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xNLGVBQU8sQ0FBQ0MsSUFBUixDQUNHLDZCQUE0QlgsTUFBTSxDQUFDQyxPQUFQLENBQWVNLEVBQUcsNEJBRGpEO0FBR0Q7O0FBRURSLFdBQUssQ0FBQ04sS0FBTixHQUFjZSxTQUFkO0FBQ0QsS0FyQk87QUFzQlJJLDJCQUF1QixFQUFFLENBQUNiLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMxQyxVQUFJUSxTQUFTLEdBQUdULEtBQUssQ0FBQ04sS0FBTixDQUFZb0IsTUFBWixDQUNiUCxJQUFELElBQVVBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUCxNQUFNLENBQUNDLE9BQVAsQ0FBZU0sRUFEdkIsQ0FBaEI7QUFJQVIsV0FBSyxDQUFDTixLQUFOLEdBQWNlLFNBQWQ7QUFDRCxLQTVCTztBQTZCUk0sZUFBVyxFQUFFLENBQUNmLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLEdBQWMsRUFBZDtBQUNEO0FBL0JPO0FBSDJCLENBQUQsQ0FBL0I7QUFzQ0EsTUFBTTtBQUNYUyxhQURXO0FBRVhDLGtCQUZXO0FBR1hTLHlCQUhXO0FBSVhkLFNBSlc7QUFLWGdCO0FBTFcsSUFNVHBCLFdBQVcsQ0FBQ3FCLE9BTlQsQyxDQVFQOztBQUNPLE1BQU1DLFdBQVcsR0FBSWpCLEtBQUQsSUFBV0EsS0FBSyxDQUFDa0IsTUFBTixDQUFheEIsS0FBNUM7QUFDQSxNQUFNeUIsV0FBVyxHQUFJbkIsS0FBRCxJQUN6QkEsS0FBSyxDQUFDa0IsTUFBTixDQUFheEIsS0FBYixDQUFtQjBCLE1BQW5CLENBQTBCLENBQUNDLEtBQUQsRUFBUWQsSUFBUixLQUFpQmMsS0FBSyxHQUFHZCxJQUFJLENBQUNlLEtBQXhELEVBQStELENBQS9ELENBREs7QUFHUCwrREFBZTNCLFdBQVcsQ0FBQzRCLE9BQTNCIiwiZmlsZSI6Ii4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmFza2V0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBoeWRyYXRlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgLy8gU3RvcmUgYWN0aW9uc1xuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBsZXQgcG9zID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXTtcblxuICAgICAgaWYgKHBvcyA+IC0xKSB7XG4gICAgICAgIG5ld0Jhc2tldC5zcGxpY2UocG9zLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgQ2FuJ3QgcmVtb3ZlIHByb2R1Y3QgKGlkOiAke2FjdGlvbi5wYXlsb2FkLmlkfSkgYXMgaXRzIG5vdCBpbiB0aGUgYmFza2V0YFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5pdGVtcyA9IG5ld0Jhc2tldDtcbiAgICB9LFxuICAgIHJlbW92ZUdyb3VwZWRGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgbGV0IG5ld0Jhc2tldCA9IHN0YXRlLml0ZW1zLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICApO1xuXG4gICAgICBzdGF0ZS5pdGVtcyA9IG5ld0Jhc2tldDtcbiAgICB9LFxuICAgIGNsZWFyQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBbXTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGFkZFRvQmFza2V0LFxuICByZW1vdmVGcm9tQmFza2V0LFxuICByZW1vdmVHcm91cGVkRnJvbUJhc2tldCxcbiAgaHlkcmF0ZSxcbiAgY2xlYXJCYXNrZXQsXG59ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PlxuICBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlLCAwKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();