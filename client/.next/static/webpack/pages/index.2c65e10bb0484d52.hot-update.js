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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst HeaderConnect = (props)=>{\n    //  const [overviewGame, setOverviewGame] = useState(\"Welcome to the Game!!! Connect Metamask (Goerli) ==>\");\n    // useEffect(() => {\n    //   (async () => {\n    //   if(props.totalTokens == 0 && props.restartPoint == \"false\") {\n    //     setOverviewGame(\"The game will start after the first deposit!\");    \n    //   }  else if(props.restartPoint == \"false\" && props.userTokens > 0) {\n    //     setOverviewGame(\"Game is over. Claim your rewards.\");\n    //   } else if(props.restartPoint == \"false\" && props.userTokens == 0) {\n    //     setOverviewGame(\"Game is over. Wait for the start!\");\n    //   } else if(props.restartPoint == \"true\") {\n    //     setOverviewGame(\"Play in game: depo or bet and win x2!\");    \n    // }\n    //   })();\n    // }, [props.totalTokens, props.isConnected, props.userTokens, props.restartPoint]);\n    const miniNumber = Number(props.balanceAcc).toFixed(3);\n    const miniNumberContract = Number(props.balanceOfContract).toFixed(3);\n    const miniText = props.account.substring(0, 2) + \"...\" + props.account.slice(38);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n            size: \"small\",\n            style: {\n                marginTop: \"20px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                    href: \"/\",\n                    header: true,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    primary: true,\n                    onClick: props.onInitConnection,\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                    position: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                children: \"Funds in game\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 49,\n                                columnNumber: 31\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                animated: \"fade\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        visible: true,\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                name: \"ethereum\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 39\n                                            }, undefined),\n                                            \" \",\n                                            miniNumberContract\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 14\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        hidden: true,\n                                        children: \"Full bank\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 14\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 51,\n                                columnNumber: 14\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 48,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: [\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    children: \"Your Eth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    animated: \"fade\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            visible: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                    name: \"ethereum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                miniNumber\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            hidden: true,\n                                            children: \"Your eth\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 12\n                                }, undefined),\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    onClick: props.onInitConnection,\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 31\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    children: miniText\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_c = HeaderConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderConnect);\nvar _c;\n$RefreshReg$(_c, \"HeaderConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVEO0FBQzNCO0FBQ2dCO0FBRTVDLE1BQU1NLGdCQUFnQixDQUFDQztJQUV2Qiw2R0FBNkc7SUFFM0csb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUVuQixrRUFBa0U7SUFDbEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSw0REFBNEQ7SUFDNUQsd0VBQXdFO0lBQ3hFLDREQUE0RDtJQUM1RCw4Q0FBOEM7SUFDOUMsb0VBQW9FO0lBQ3BFLElBQUk7SUFDSixVQUFVO0lBQ1Ysb0ZBQW9GO0lBRXBGLE1BQU1DLGFBQWFDLE9BQU9GLE1BQU1HLFVBQVUsRUFBRUMsT0FBTyxDQUFDO0lBQ3BELE1BQU1DLHFCQUFxQkgsT0FBT0YsTUFBTU0saUJBQWlCLEVBQUVGLE9BQU8sQ0FBQztJQUNuRSxNQUFNRyxXQUFXLE1BQU9DLE9BQU8sQ0FBRUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxRQUFRLE1BQU9ELE9BQU8sQ0FBRUUsS0FBSyxDQUFDO0lBQ2pGLHFCQUNFO2tCQVlBLDRFQUFDaEIsbURBQUlBO1lBQUNpQixNQUFLO1lBQVFDLE9BQU87Z0JBQUNDLFdBQVc7WUFBTTs7OEJBQzFDLDhEQUFDbkIsbURBQUlBLENBQUNvQixJQUFJO29CQUFDQyxNQUFLO29CQUFJQyxNQUFNOzhCQUFDOzs7Ozs7OEJBSTNCLDhEQUFDdkIscURBQU1BO29CQUFDd0IsT0FBTztvQkFBQ0MsU0FBU2xCLE1BQU1tQixnQkFBZ0I7OEJBQUU7Ozs7Ozs4QkFFL0MsOERBQUN6QixtREFBSUEsQ0FBQ0EsSUFBSTtvQkFBQzBCLFVBQVM7O3NDQUNuQiw4REFBQzFCLG1EQUFJQSxDQUFDb0IsSUFBSTtzQ0FDTixDQUFDZCxNQUFNUSxPQUFPLGlCQUFHLDhEQUFDZixxREFBTUE7Z0NBQUM0QixPQUFNOzBDQUFTOzs7OzswREFFeEMsOERBQUM1QixxREFBTUE7Z0NBQUM0QixPQUFNO2dDQUFTQyxVQUFTOztrREFDaEMsOERBQUM3QixxREFBTUEsQ0FBQzhCLE9BQU87d0NBQUNDLE9BQU87OzRDQUFDOzBEQUFDLDhEQUFDN0IsbURBQUlBO2dEQUFDOEIsTUFBSzs7Ozs7OzRDQUFhOzRDQUFFcEI7Ozs7Ozs7a0RBQ25ELDhEQUFDWixxREFBTUEsQ0FBQzhCLE9BQU87d0NBQUNHLE1BQU07a0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxQiw4REFBQ2hDLG1EQUFJQSxDQUFDb0IsSUFBSTs7Z0NBQ1QsQ0FBQ2QsTUFBTVEsT0FBTyxpQkFBRyw4REFBQ2YscURBQU1BO29DQUFDd0IsT0FBTztvQ0FBQ0wsT0FBTzt3Q0FBQ2UsYUFBYTtvQ0FBTTs4Q0FBRzs7Ozs7OERBRS9ELDhEQUFDbEMscURBQU1BO29DQUFDd0IsT0FBTztvQ0FBQ0wsT0FBTzt3Q0FBQ2UsYUFBYTtvQ0FBTTtvQ0FBR0wsVUFBUzs7c0RBQ3RELDhEQUFDN0IscURBQU1BLENBQUM4QixPQUFPOzRDQUFDQyxPQUFPOzs4REFBQyw4REFBQzdCLG1EQUFJQTtvREFBQzhCLE1BQUs7Ozs7OztnREFBY3hCOzs7Ozs7O3NEQUNqRCw4REFBQ1IscURBQU1BLENBQUM4QixPQUFPOzRDQUFDRyxNQUFNO3NEQUFDOzs7Ozs7Ozs7Ozs7Z0NBR3RCLENBQUMxQixNQUFNUSxPQUFPLGlCQUFHLDhEQUFDZixxREFBTUE7b0NBQUN3QixPQUFPO29DQUFDQyxTQUFTbEIsTUFBTW1CLGdCQUFnQjs4Q0FBRTs7Ozs7OERBRW5FLDhEQUFDMUIscURBQU1BO29DQUFDd0IsT0FBTzs4Q0FBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7S0FyRU1SO0FBc0VOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyQ29ubmVjdC5qcz9iZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgTWVudSwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJDb25uZWN0ID0gKHByb3BzKSA9PiB7XG5cbi8vICBjb25zdCBbb3ZlcnZpZXdHYW1lLCBzZXRPdmVydmlld0dhbWVdID0gdXNlU3RhdGUoXCJXZWxjb21lIHRvIHRoZSBHYW1lISEhIENvbm5lY3QgTWV0YW1hc2sgKEdvZXJsaSkgPT0+XCIpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgKGFzeW5jICgpID0+IHtcblxuICAvLyAgIGlmKHByb3BzLnRvdGFsVG9rZW5zID09IDAgJiYgcHJvcHMucmVzdGFydFBvaW50ID09IFwiZmFsc2VcIikge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiVGhlIGdhbWUgd2lsbCBzdGFydCBhZnRlciB0aGUgZmlyc3QgZGVwb3NpdCFcIik7ICAgIFxuICAvLyAgIH0gIGVsc2UgaWYocHJvcHMucmVzdGFydFBvaW50ID09IFwiZmFsc2VcIiAmJiBwcm9wcy51c2VyVG9rZW5zID4gMCkge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiR2FtZSBpcyBvdmVyLiBDbGFpbSB5b3VyIHJld2FyZHMuXCIpO1xuICAvLyAgIH0gZWxzZSBpZihwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJmYWxzZVwiICYmIHByb3BzLnVzZXJUb2tlbnMgPT0gMCkge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiR2FtZSBpcyBvdmVyLiBXYWl0IGZvciB0aGUgc3RhcnQhXCIpO1xuICAvLyAgIH0gZWxzZSBpZihwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJ0cnVlXCIpIHtcbiAgLy8gICAgIHNldE92ZXJ2aWV3R2FtZShcIlBsYXkgaW4gZ2FtZTogZGVwbyBvciBiZXQgYW5kIHdpbiB4MiFcIik7ICAgIFxuICAvLyB9XG4gIC8vICAgfSkoKTtcbiAgLy8gfSwgW3Byb3BzLnRvdGFsVG9rZW5zLCBwcm9wcy5pc0Nvbm5lY3RlZCwgcHJvcHMudXNlclRva2VucywgcHJvcHMucmVzdGFydFBvaW50XSk7XG5cbiAgY29uc3QgbWluaU51bWJlciA9IE51bWJlcihwcm9wcy5iYWxhbmNlQWNjKS50b0ZpeGVkKDMpO1xuICBjb25zdCBtaW5pTnVtYmVyQ29udHJhY3QgPSBOdW1iZXIocHJvcHMuYmFsYW5jZU9mQ29udHJhY3QpLnRvRml4ZWQoMyk7XG4gIGNvbnN0IG1pbmlUZXh0ID0gKHByb3BzLmFjY291bnQpLnN1YnN0cmluZygwLCAyKSArICcuLi4nICsgKHByb3BzLmFjY291bnQpLnNsaWNlKDM4KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHsvKiA8ZGl2PlxuICAgIDxIZWFkZXIgYXM9J2gyJyBpY29uIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgIDxJY29uIG5hbWU9J3VzZXJzJyBjaXJjdWxhciAvPlxuICAgICAgPEhlYWRlci5Db250ZW50PkZyaWVuZHM8L0hlYWRlci5Db250ZW50PlxuICAgIDwvSGVhZGVyPlxuICAgIDxJbWFnZVxuICAgICAgY2VudGVyZWRcbiAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS9jZW50ZXJlZC1wYXJhZ3JhcGgucG5nJ1xuICAgIC8+XG4gIDwvZGl2PiAqL31cbiAgICA8TWVudSBzaXplPSdzbWFsbCcgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwifX0+XG4gICAgICA8TWVudS5JdGVtIGhyZWY9XCIvXCIgaGVhZGVyPkhvbWU8L01lbnUuSXRlbT5cblxuICAgICAgey8qIDxNZW51Lkl0ZW0gaHJlZj1cIlwiIGhlYWRlciBjb2xvcj0nZ3JlZW4nPntvdmVydmlld0dhbWV9PC9NZW51Lkl0ZW0+ICovfVxuXG4gICAgICA8QnV0dG9uIHByaW1hcnkgb25DbGljaz17cHJvcHMub25Jbml0Q29ubmVjdGlvbn0+Q29ubmVjdDwvQnV0dG9uPlxuXG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz4gICAgXG4gICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgeyFwcm9wcy5hY2NvdW50ID8gPEJ1dHRvbiBjb2xvcj0nb3JhbmdlJz5GdW5kcyBpbiBnYW1lPC9CdXR0b24+IFxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J29yYW5nZScgYW5pbWF0ZWQ9J2ZhZGUnPlxuICAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCB2aXNpYmxlPiA8SWNvbiBuYW1lPSdldGhlcmV1bScgLz4ge21pbmlOdW1iZXJDb250cmFjdH08L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCBoaWRkZW4+RnVsbCBiYW5rPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgXG4gICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICB7IXByb3BzLmFjY291bnQgPyA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNXB4XCJ9fT5Zb3VyIEV0aDwvQnV0dG9uPlxuICAgICAgICAgICA6IFxuICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNXB4XCJ9fSBhbmltYXRlZD0nZmFkZSc+XG4gICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgdmlzaWJsZT48SWNvbiBuYW1lPSdldGhlcmV1bScgLz57bWluaU51bWJlcn08L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IGhpZGRlbj5Zb3VyIGV0aDwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0J1dHRvbj59XG5cbiAgICAgICAgICAgIHshcHJvcHMuYWNjb3VudCA/IDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXtwcm9wcy5vbkluaXRDb25uZWN0aW9ufT5Db25uZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgOlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PnttaW5pVGV4dH1cbiAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb25uZWN0OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJNZW51IiwiSWNvbiIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlckNvbm5lY3QiLCJwcm9wcyIsIm1pbmlOdW1iZXIiLCJOdW1iZXIiLCJiYWxhbmNlQWNjIiwidG9GaXhlZCIsIm1pbmlOdW1iZXJDb250cmFjdCIsImJhbGFuY2VPZkNvbnRyYWN0IiwibWluaVRleHQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwic2xpY2UiLCJzaXplIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJJdGVtIiwiaHJlZiIsImhlYWRlciIsInByaW1hcnkiLCJvbkNsaWNrIiwib25Jbml0Q29ubmVjdGlvbiIsInBvc2l0aW9uIiwiY29sb3IiLCJhbmltYXRlZCIsIkNvbnRlbnQiLCJ2aXNpYmxlIiwibmFtZSIsImhpZGRlbiIsIm1hcmdpblJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderConnect.js\n"));

/***/ })

});