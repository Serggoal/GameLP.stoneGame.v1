"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AllStats.js":
/*!********************************!*\
  !*** ./components/AllStats.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\nconst AllStats = (props)=>{\n    const miniTokenPrice = Number(props.stopSupply).toFixed(4);\n    const miniTolalTokens = Number(props.totalTokens).toFixed(2);\n    const miniUserTokens = Number(props.userTokens).toFixed(2);\n    const miniNumberRewards = Number(props.userReward).toFixed(4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {\n                color: \"violet\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                    compact: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                            as: \"a\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                    name: \"dollar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 6\n                                }, undefined),\n                                \" Token \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 35\n                                }, undefined),\n                                \" price\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    color: \"red\",\n                                    floating: true,\n                                    children: miniTokenPrice\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 6\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                            lineNumber: 15,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                            as: \"a\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                    name: \"users\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 6\n                                }, undefined),\n                                \" Total \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 34\n                                }, undefined),\n                                \" tokens\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    color: \"orange\",\n                                    floating: true,\n                                    children: miniTolalTokens\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 6\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                            lineNumber: 21,\n                            columnNumber: 4\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                            as: \"a\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                    name: \"male\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 6\n                                }, undefined),\n                                \" Your \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 32\n                                }, undefined),\n                                \" tokens\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    color: \"teal\",\n                                    floating: true,\n                                    children: miniUserTokens\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 6\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                            lineNumber: 27,\n                            columnNumber: 4\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {\n                color: \"green\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                    compact: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                            as: \"a\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                    name: \"ethereum\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 6\n                                }, undefined),\n                                \" Your LP\",\n                                props.isConnected && props.userTokens > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    color: \"green\",\n                                    floating: true,\n                                    children: [\n                                        \" \",\n                                        miniNumberRewards,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 51\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    color: \"green\",\n                                    floating: true,\n                                    children: \" 0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                            lineNumber: 39,\n                            columnNumber: 5\n                        }, undefined),\n                        props.userTokens > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                            vertical: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {\n                                disabled: props.isActiveShowButton,\n                                text: \"Claim LP rewards\",\n                                floating: true,\n                                labeled: true,\n                                button: true,\n                                style: {\n                                    margin: \"10px\"\n                                },\n                                icon: \"angle double down\",\n                                className: \"icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Menu, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Header, {\n                                            icon: \"ethereum\",\n                                            size: \"big\",\n                                            content: miniNumberRewards\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Divider, {}, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {\n                                            as: \"a\",\n                                            onClick: props.onHandleClaimRewards25,\n                                            description: \"25%\",\n                                            text: \"A little bit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {\n                                            as: \"a\",\n                                            onClick: props.onHandleClaimRewards50,\n                                            description: \"50%\",\n                                            text: \"Halving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {\n                                            as: \"a\",\n                                            onClick: props.onHandleClaimRewards100,\n                                            description: \"100%\",\n                                            text: \"Full balance\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 5\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                                lineNumber: 48,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                            lineNumber: 47,\n                            columnNumber: 3\n                        }, undefined) : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/AllStats.js\",\n                lineNumber: 37,\n                columnNumber: 2\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = AllStats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllStats);\nvar _c;\n$RefreshReg$(_c, \"AllStats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSW1CLFNBQVNsQyxNQUFNcUMsc0JBQXNCOzRDQUFFRCxhQUFZOzRDQUFNYixNQUFLOzs7Ozs7c0RBQ3BGLDhEQUFDekIsdURBQVFBLENBQUNnQixJQUFJOzRDQUFDQyxJQUFHOzRDQUFJbUIsU0FBU2xDLE1BQU1zQyx1QkFBdUI7NENBQUVGLGFBQVk7NENBQU9iLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FJeEY7Ozs7Ozs7Ozs7Ozs7O0FBTUo7S0F0RU14QjtBQXVFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsbFN0YXRzLmpzP2YxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSwgSWNvbiwgTGFiZWwsIFNlZ21lbnQsIERyb3Bkb3duIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IEFsbFN0YXRzID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBtaW5pVG9rZW5QcmljZSA9IE51bWJlcihwcm9wcy5zdG9wU3VwcGx5KS50b0ZpeGVkKDQpO1xuICAgIGNvbnN0IG1pbmlUb2xhbFRva2VucyA9IE51bWJlcihwcm9wcy50b3RhbFRva2VucykudG9GaXhlZCgyKTtcbiAgICBjb25zdCBtaW5pVXNlclRva2VucyA9IE51bWJlcihwcm9wcy51c2VyVG9rZW5zKS50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IG1pbmlOdW1iZXJSZXdhcmRzID0gTnVtYmVyKHByb3BzLnVzZXJSZXdhcmQpLnRvRml4ZWQoNCk7XG5cbiAgICByZXR1cm4gKCBcbiAgICAgIDw+XG4gICAgPFNlZ21lbnQgY29sb3I9J3Zpb2xldCcgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgIDxNZW51IGNvbXBhY3Q+XG5cbiAgICAgPE1lbnUuSXRlbSBhcz0nYSc+XG4gICAgIDxJY29uIG5hbWU9J2RvbGxhcicgLz4gVG9rZW4gPGJyPjwvYnI+IHByaWNlXG4gICAgIDxMYWJlbCBjb2xvcj0ncmVkJyBmbG9hdGluZz5cbiAgICAgICB7bWluaVRva2VuUHJpY2V9XG4gICAgIDwvTGFiZWw+XG4gICA8L01lbnUuSXRlbT5cbiAgIDxNZW51Lkl0ZW0gYXM9J2EnPlxuICAgICA8SWNvbiBuYW1lPSd1c2VycycgLz4gVG90YWwgPGJyPjwvYnI+IHRva2Vuc1xuICAgICA8TGFiZWwgY29sb3I9J29yYW5nZScgZmxvYXRpbmc+XG4gICAgICAge21pbmlUb2xhbFRva2Vuc31cbiAgICAgPC9MYWJlbD5cbiAgIDwvTWVudS5JdGVtPlxuICAgPE1lbnUuSXRlbSBhcz0nYSc+XG4gICAgIDxJY29uIG5hbWU9J21hbGUnIC8+IFlvdXIgPGJyPjwvYnI+IHRva2VucyBcbiAgICAgPExhYmVsIGNvbG9yPSd0ZWFsJyBmbG9hdGluZz5cbiAgICAgICB7bWluaVVzZXJUb2tlbnN9XG4gICAgIDwvTGFiZWw+XG4gICA8L01lbnUuSXRlbT5cbiBcbiAgPC9NZW51PiBcbiA8L1NlZ21lbnQ+XG5cbiA8U2VnbWVudCBjb2xvcj0nZ3JlZW4nIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICA8TWVudSBjb21wYWN0PlxuICAgIDxNZW51Lkl0ZW0gYXM9J2EnPlxuICAgICA8SWNvbiBuYW1lPSdldGhlcmV1bScgLz4gWW91ciBMUCBcbiAgICAge3Byb3BzLmlzQ29ubmVjdGVkICYmIHByb3BzLnVzZXJUb2tlbnMgPiAwID8gPExhYmVsIGNvbG9yPSdncmVlbicgZmxvYXRpbmc+IHttaW5pTnVtYmVyUmV3YXJkc30gPC9MYWJlbD5cbiAgICAgIDpcbiAgICAgIDxMYWJlbCBjb2xvcj0nZ3JlZW4nIGZsb2F0aW5nPiAwIDwvTGFiZWw+IH1cbiAgIDwvTWVudS5JdGVtPlxuXG57cHJvcHMudXNlclRva2VucyA+IDAgP1xuICA8TWVudSB2ZXJ0aWNhbD5cbiAgICA8RHJvcGRvd25cbiAgICBkaXNhYmxlZD17cHJvcHMuaXNBY3RpdmVTaG93QnV0dG9ufVxuICAgIHRleHQ9J0NsYWltIExQIHJld2FyZHMnXG4gICAgZmxvYXRpbmdcbiAgICBsYWJlbGVkXG4gICAgYnV0dG9uXG4gICAgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX1cbiAgICBpY29uPSdhbmdsZSBkb3VibGUgZG93bidcbiAgICBjbGFzc05hbWU9J2ljb24nXG4gID5cbiAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgIDxEcm9wZG93bi5IZWFkZXIgaWNvbj0nZXRoZXJldW0nIHNpemU9J2JpZycgY29udGVudD17bWluaU51bWJlclJld2FyZHN9IC8+XG4gICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxuICAgICAgPERyb3Bkb3duLkl0ZW0gYXM9J2EnIG9uQ2xpY2s9e3Byb3BzLm9uSGFuZGxlQ2xhaW1SZXdhcmRzMjV9IGRlc2NyaXB0aW9uPScyNSUnIHRleHQ9J0EgbGl0dGxlIGJpdCcgLz5cbiAgICAgIDxEcm9wZG93bi5JdGVtIGFzPSdhJyBvbkNsaWNrPXtwcm9wcy5vbkhhbmRsZUNsYWltUmV3YXJkczUwfSBkZXNjcmlwdGlvbj0nNTAlJyB0ZXh0PSdIYWx2aW5nJyAvPlxuICAgICAgPERyb3Bkb3duLkl0ZW0gYXM9J2EnIG9uQ2xpY2s9e3Byb3BzLm9uSGFuZGxlQ2xhaW1SZXdhcmRzMTAwfSBkZXNjcmlwdGlvbj0nMTAwJScgdGV4dD0nRnVsbCBiYWxhbmNlJyAvPlxuICAgIDwvRHJvcGRvd24uTWVudT5cbiAgPC9Ecm9wZG93bj5cbiAgPC9NZW51PlxuICA6IFwiXCJcbiB9XG4gIDwvTWVudT4gXG4gPC9TZWdtZW50PlxuIDwvPlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBBbGxTdGF0czsiXSwibmFtZXMiOlsiTWVudSIsIkljb24iLCJMYWJlbCIsIlNlZ21lbnQiLCJEcm9wZG93biIsIkFsbFN0YXRzIiwicHJvcHMiLCJtaW5pVG9rZW5QcmljZSIsIk51bWJlciIsInN0b3BTdXBwbHkiLCJ0b0ZpeGVkIiwibWluaVRvbGFsVG9rZW5zIiwidG90YWxUb2tlbnMiLCJtaW5pVXNlclRva2VucyIsInVzZXJUb2tlbnMiLCJtaW5pTnVtYmVyUmV3YXJkcyIsInVzZXJSZXdhcmQiLCJjb2xvciIsInRleHRBbGlnbiIsImNvbXBhY3QiLCJJdGVtIiwiYXMiLCJuYW1lIiwiYnIiLCJmbG9hdGluZyIsImlzQ29ubmVjdGVkIiwidmVydGljYWwiLCJkaXNhYmxlZCIsImlzQWN0aXZlU2hvd0J1dHRvbiIsInRleHQiLCJsYWJlbGVkIiwiYnV0dG9uIiwic3R5bGUiLCJtYXJnaW4iLCJpY29uIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwic2l6ZSIsImNvbnRlbnQiLCJEaXZpZGVyIiwib25DbGljayIsIm9uSGFuZGxlQ2xhaW1SZXdhcmRzMjUiLCJkZXNjcmlwdGlvbiIsIm9uSGFuZGxlQ2xhaW1SZXdhcmRzNTAiLCJvbkhhbmRsZUNsYWltUmV3YXJkczEwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AllStats.js\n"));

/***/ })

});