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

/***/ "./components/HeaderConnect.js":
/*!*************************************!*\
  !*** ./components/HeaderConnect.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst HeaderConnect = (props)=>{\n    //  const [overviewGame, setOverviewGame] = useState(\"Welcome to the Game!!! Connect Metamask (Goerli) ==>\");\n    // useEffect(() => {\n    //   (async () => {\n    //   if(props.totalTokens == 0 && props.restartPoint == \"false\") {\n    //     setOverviewGame(\"The game will start after the first deposit!\");    \n    //   }  else if(props.restartPoint == \"false\" && props.userTokens > 0) {\n    //     setOverviewGame(\"Game is over. Claim your rewards.\");\n    //   } else if(props.restartPoint == \"false\" && props.userTokens == 0) {\n    //     setOverviewGame(\"Game is over. Wait for the start!\");\n    //   } else if(props.restartPoint == \"true\") {\n    //     setOverviewGame(\"Play in game: depo or bet and win x2!\");    \n    // }\n    //   })();\n    // }, [props.totalTokens, props.isConnected, props.userTokens, props.restartPoint]);\n    const miniNumber = Number(props.balanceAcc).toFixed(3);\n    const miniNumberContract = Number(props.balanceOfContract).toFixed(3);\n    const miniText = props.account.substring(0, 2) + \"...\" + props.account.slice(38);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n            size: \"small\",\n            style: {\n                marginTop: \"20px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                    href: props.onShowRules,\n                    header: true,\n                    onClick: props.onShowRules,\n                    children: \"How to play\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                    as: \"a\",\n                    onClick: props.onShowRules,\n                    children: \"About Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                    position: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                children: \"Funds in game\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 50,\n                                columnNumber: 31\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                animated: \"fade\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        visible: true,\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                name: \"ethereum\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 39\n                                            }, undefined),\n                                            \" \",\n                                            miniNumberContract\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 14\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        hidden: true,\n                                        children: \"Full bank\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 14\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 52,\n                                columnNumber: 14\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 49,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: [\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    children: \"Your Eth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    animated: \"fade\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            visible: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                    name: \"ethereum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                miniNumber\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            hidden: true,\n                                            children: \"Your eth\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 12\n                                }, undefined),\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    onClick: props.onInitConnection,\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 31\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    children: miniText\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_c = HeaderConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderConnect);\nvar _c;\n$RefreshReg$(_c, \"HeaderConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZEO0FBQ2pDO0FBQ2dCO0FBRTVDLE1BQU1PLGdCQUFnQixDQUFDQztJQUV2Qiw2R0FBNkc7SUFFM0csb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUVuQixrRUFBa0U7SUFDbEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSw0REFBNEQ7SUFDNUQsd0VBQXdFO0lBQ3hFLDREQUE0RDtJQUM1RCw4Q0FBOEM7SUFDOUMsb0VBQW9FO0lBQ3BFLElBQUk7SUFDSixVQUFVO0lBQ1Ysb0ZBQW9GO0lBRXBGLE1BQU1DLGFBQWFDLE9BQU9GLE1BQU1HLFVBQVUsRUFBRUMsT0FBTyxDQUFDO0lBQ3BELE1BQU1DLHFCQUFxQkgsT0FBT0YsTUFBTU0saUJBQWlCLEVBQUVGLE9BQU8sQ0FBQztJQUNuRSxNQUFNRyxXQUFXLE1BQU9DLE9BQU8sQ0FBRUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxRQUFRLE1BQU9ELE9BQU8sQ0FBRUUsS0FBSyxDQUFDO0lBQ2pGLHFCQUNFO2tCQVlBLDRFQUFDakIsbURBQUlBO1lBQUNrQixNQUFLO1lBQVFDLE9BQU87Z0JBQUNDLFdBQVc7WUFBTTs7OEJBQzFDLDhEQUFDcEIsbURBQUlBLENBQUNxQixJQUFJO29CQUFDQyxNQUFNZixNQUFNZ0IsV0FBVztvQkFBRUMsTUFBTTtvQkFBQ0MsU0FBU2xCLE1BQU1nQixXQUFXOzhCQUFFOzs7Ozs7OEJBQ3ZFLDhEQUFDckIsbURBQUlBLENBQUNtQixJQUFJO29CQUFDSyxJQUFHO29CQUFJRCxTQUFTbEIsTUFBTWdCLFdBQVc7OEJBQUU7Ozs7Ozs4QkFNNUMsOERBQUN2QixtREFBSUEsQ0FBQ0EsSUFBSTtvQkFBQzJCLFVBQVM7O3NDQUNuQiw4REFBQzNCLG1EQUFJQSxDQUFDcUIsSUFBSTtzQ0FDTixDQUFDZCxNQUFNUSxPQUFPLGlCQUFHLDhEQUFDaEIscURBQU1BO2dDQUFDNkIsT0FBTTswQ0FBUzs7Ozs7MERBRXhDLDhEQUFDN0IscURBQU1BO2dDQUFDNkIsT0FBTTtnQ0FBU0MsVUFBUzs7a0RBQ2hDLDhEQUFDOUIscURBQU1BLENBQUMrQixPQUFPO3dDQUFDQyxPQUFPOzs0Q0FBQzswREFBQyw4REFBQzlCLG1EQUFJQTtnREFBQytCLE1BQUs7Ozs7Ozs0Q0FBYTs0Q0FBRXBCOzs7Ozs7O2tEQUNuRCw4REFBQ2IscURBQU1BLENBQUMrQixPQUFPO3dDQUFDRyxNQUFNO2tEQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJMUIsOERBQUNqQyxtREFBSUEsQ0FBQ3FCLElBQUk7O2dDQUNULENBQUNkLE1BQU1RLE9BQU8saUJBQUcsOERBQUNoQixxREFBTUE7b0NBQUNtQyxPQUFPO29DQUFDZixPQUFPO3dDQUFDZ0IsYUFBYTtvQ0FBTTs4Q0FBRzs7Ozs7OERBRS9ELDhEQUFDcEMscURBQU1BO29DQUFDbUMsT0FBTztvQ0FBQ2YsT0FBTzt3Q0FBQ2dCLGFBQWE7b0NBQU07b0NBQUdOLFVBQVM7O3NEQUN0RCw4REFBQzlCLHFEQUFNQSxDQUFDK0IsT0FBTzs0Q0FBQ0MsT0FBTzs7OERBQUMsOERBQUM5QixtREFBSUE7b0RBQUMrQixNQUFLOzs7Ozs7Z0RBQWN4Qjs7Ozs7OztzREFDakQsOERBQUNULHFEQUFNQSxDQUFDK0IsT0FBTzs0Q0FBQ0csTUFBTTtzREFBQzs7Ozs7Ozs7Ozs7O2dDQUd0QixDQUFDMUIsTUFBTVEsT0FBTyxpQkFBRyw4REFBQ2hCLHFEQUFNQTtvQ0FBQ21DLE9BQU87b0NBQUNULFNBQVNsQixNQUFNNkIsZ0JBQWdCOzhDQUFFOzs7Ozs4REFFbkUsOERBQUNyQyxxREFBTUE7b0NBQUNtQyxPQUFPOzhDQUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7S0F0RU1SO0FBdUVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyQ29ubmVjdC5qcz9iZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgTWVudSwgSWNvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJDb25uZWN0ID0gKHByb3BzKSA9PiB7XG5cbi8vICBjb25zdCBbb3ZlcnZpZXdHYW1lLCBzZXRPdmVydmlld0dhbWVdID0gdXNlU3RhdGUoXCJXZWxjb21lIHRvIHRoZSBHYW1lISEhIENvbm5lY3QgTWV0YW1hc2sgKEdvZXJsaSkgPT0+XCIpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgKGFzeW5jICgpID0+IHtcblxuICAvLyAgIGlmKHByb3BzLnRvdGFsVG9rZW5zID09IDAgJiYgcHJvcHMucmVzdGFydFBvaW50ID09IFwiZmFsc2VcIikge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiVGhlIGdhbWUgd2lsbCBzdGFydCBhZnRlciB0aGUgZmlyc3QgZGVwb3NpdCFcIik7ICAgIFxuICAvLyAgIH0gIGVsc2UgaWYocHJvcHMucmVzdGFydFBvaW50ID09IFwiZmFsc2VcIiAmJiBwcm9wcy51c2VyVG9rZW5zID4gMCkge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiR2FtZSBpcyBvdmVyLiBDbGFpbSB5b3VyIHJld2FyZHMuXCIpO1xuICAvLyAgIH0gZWxzZSBpZihwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJmYWxzZVwiICYmIHByb3BzLnVzZXJUb2tlbnMgPT0gMCkge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiR2FtZSBpcyBvdmVyLiBXYWl0IGZvciB0aGUgc3RhcnQhXCIpO1xuICAvLyAgIH0gZWxzZSBpZihwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJ0cnVlXCIpIHtcbiAgLy8gICAgIHNldE92ZXJ2aWV3R2FtZShcIlBsYXkgaW4gZ2FtZTogZGVwbyBvciBiZXQgYW5kIHdpbiB4MiFcIik7ICAgIFxuICAvLyB9XG4gIC8vICAgfSkoKTtcbiAgLy8gfSwgW3Byb3BzLnRvdGFsVG9rZW5zLCBwcm9wcy5pc0Nvbm5lY3RlZCwgcHJvcHMudXNlclRva2VucywgcHJvcHMucmVzdGFydFBvaW50XSk7XG5cbiAgY29uc3QgbWluaU51bWJlciA9IE51bWJlcihwcm9wcy5iYWxhbmNlQWNjKS50b0ZpeGVkKDMpO1xuICBjb25zdCBtaW5pTnVtYmVyQ29udHJhY3QgPSBOdW1iZXIocHJvcHMuYmFsYW5jZU9mQ29udHJhY3QpLnRvRml4ZWQoMyk7XG4gIGNvbnN0IG1pbmlUZXh0ID0gKHByb3BzLmFjY291bnQpLnN1YnN0cmluZygwLCAyKSArICcuLi4nICsgKHByb3BzLmFjY291bnQpLnNsaWNlKDM4KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHsvKiA8ZGl2PlxuICAgIDxIZWFkZXIgYXM9J2gyJyBpY29uIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgIDxJY29uIG5hbWU9J3VzZXJzJyBjaXJjdWxhciAvPlxuICAgICAgPEhlYWRlci5Db250ZW50PkZyaWVuZHM8L0hlYWRlci5Db250ZW50PlxuICAgIDwvSGVhZGVyPlxuICAgIDxJbWFnZVxuICAgICAgY2VudGVyZWRcbiAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS9jZW50ZXJlZC1wYXJhZ3JhcGgucG5nJ1xuICAgIC8+XG4gIDwvZGl2PiAqL31cbiAgICA8TWVudSBzaXplPSdzbWFsbCcgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwifX0+XG4gICAgICA8TWVudS5JdGVtIGhyZWY9e3Byb3BzLm9uU2hvd1J1bGVzfSBoZWFkZXIgb25DbGljaz17cHJvcHMub25TaG93UnVsZXN9PkhvdyB0byBwbGF5PC9NZW51Lkl0ZW0+XG4gICAgICA8TGlzdC5JdGVtIGFzPSdhJyBvbkNsaWNrPXtwcm9wcy5vblNob3dSdWxlc30+QWJvdXQgVXM8L0xpc3QuSXRlbT5cblxuICAgICAgey8qIDxNZW51Lkl0ZW0gaHJlZj1cIlwiIGhlYWRlciBjb2xvcj0nZ3JlZW4nPntvdmVydmlld0dhbWV9PC9NZW51Lkl0ZW0+ICovfVxuXG4gICAgICB7LyogPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9e3Byb3BzLm9uSW5pdENvbm5lY3Rpb259PkNvbm5lY3Q8L0J1dHRvbj4gKi99XG5cbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPiAgICBcbiAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICB7IXByb3BzLmFjY291bnQgPyA8QnV0dG9uIGNvbG9yPSdvcmFuZ2UnPkZ1bmRzIGluIGdhbWU8L0J1dHRvbj4gXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nb3JhbmdlJyBhbmltYXRlZD0nZmFkZSc+XG4gICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IHZpc2libGU+IDxJY29uIG5hbWU9J2V0aGVyZXVtJyAvPiB7bWluaU51bWJlckNvbnRyYWN0fTwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IGhpZGRlbj5GdWxsIGJhbms8L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICBcbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgIHshcHJvcHMuYWNjb3VudCA/IDxCdXR0b24gcHJpbWFyeSBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjE1cHhcIn19PllvdXIgRXRoPC9CdXR0b24+XG4gICAgICAgICAgIDogXG4gICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjE1cHhcIn19IGFuaW1hdGVkPSdmYWRlJz5cbiAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCB2aXNpYmxlPjxJY29uIG5hbWU9J2V0aGVyZXVtJyAvPnttaW5pTnVtYmVyfTwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgaGlkZGVuPllvdXIgZXRoPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICAgIDwvQnV0dG9uPn1cblxuICAgICAgICAgICAgeyFwcm9wcy5hY2NvdW50ID8gPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9e3Byb3BzLm9uSW5pdENvbm5lY3Rpb259PkNvbm5lY3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICA6XG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+e21pbmlUZXh0fVxuICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbm5lY3Q7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1lbnUiLCJJY29uIiwiTGlzdCIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlckNvbm5lY3QiLCJwcm9wcyIsIm1pbmlOdW1iZXIiLCJOdW1iZXIiLCJiYWxhbmNlQWNjIiwidG9GaXhlZCIsIm1pbmlOdW1iZXJDb250cmFjdCIsImJhbGFuY2VPZkNvbnRyYWN0IiwibWluaVRleHQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwic2xpY2UiLCJzaXplIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJJdGVtIiwiaHJlZiIsIm9uU2hvd1J1bGVzIiwiaGVhZGVyIiwib25DbGljayIsImFzIiwicG9zaXRpb24iLCJjb2xvciIsImFuaW1hdGVkIiwiQ29udGVudCIsInZpc2libGUiLCJuYW1lIiwiaGlkZGVuIiwicHJpbWFyeSIsIm1hcmdpblJpZ2h0Iiwib25Jbml0Q29ubmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeaderConnect.js\n"));

/***/ })

});