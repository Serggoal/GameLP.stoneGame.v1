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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst HeaderConnect = (props)=>{\n    //  const [overviewGame, setOverviewGame] = useState(\"Welcome to the Game!!! Connect Metamask (Goerli) ==>\");\n    // useEffect(() => {\n    //   (async () => {\n    //   if(props.totalTokens == 0 && props.restartPoint == \"false\") {\n    //     setOverviewGame(\"The game will start after the first deposit!\");    \n    //   }  else if(props.restartPoint == \"false\" && props.userTokens > 0) {\n    //     setOverviewGame(\"Game is over. Claim your rewards.\");\n    //   } else if(props.restartPoint == \"false\" && props.userTokens == 0) {\n    //     setOverviewGame(\"Game is over. Wait for the start!\");\n    //   } else if(props.restartPoint == \"true\") {\n    //     setOverviewGame(\"Play in game: depo or bet and win x2!\");    \n    // }\n    //   })();\n    // }, [props.totalTokens, props.isConnected, props.userTokens, props.restartPoint]);\n    const miniNumber = Number(props.balanceAcc).toFixed(3);\n    const miniNumberContract = Number(props.balanceOfContract).toFixed(3);\n    const miniText = props.account.substring(0, 2) + \"...\" + props.account.slice(38);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n            size: \"small\",\n            style: {\n                marginTop: \"20px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                    href: \"/\",\n                    header: true,\n                    children: \"How to play\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                    as: \"a\",\n                    onClick: ()=>setOpenModalWin(false),\n                    children: \"About Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                    position: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                children: \"Funds in game\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 50,\n                                columnNumber: 31\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"orange\",\n                                animated: \"fade\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        visible: true,\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                name: \"ethereum\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 39\n                                            }, undefined),\n                                            \" \",\n                                            miniNumberContract\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 14\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                        hidden: true,\n                                        children: \"Full bank\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 14\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                lineNumber: 52,\n                                columnNumber: 14\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 49,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                            children: [\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    children: \"Your Eth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    style: {\n                                        marginRight: \"15px\"\n                                    },\n                                    animated: \"fade\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            visible: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                    name: \"ethereum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                miniNumber\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {\n                                            hidden: true,\n                                            children: \"Your eth\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 12\n                                }, undefined),\n                                !props.account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    onClick: props.onInitConnection,\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 31\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    primary: true,\n                                    children: miniText\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sergeyb/MyDevelop/GameLP/client/components/HeaderConnect.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_c = HeaderConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderConnect);\nvar _c;\n$RefreshReg$(_c, \"HeaderConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZEO0FBQ2pDO0FBQ2dCO0FBRTVDLE1BQU1PLGdCQUFnQixDQUFDQztJQUV2Qiw2R0FBNkc7SUFFM0csb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUVuQixrRUFBa0U7SUFDbEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSw0REFBNEQ7SUFDNUQsd0VBQXdFO0lBQ3hFLDREQUE0RDtJQUM1RCw4Q0FBOEM7SUFDOUMsb0VBQW9FO0lBQ3BFLElBQUk7SUFDSixVQUFVO0lBQ1Ysb0ZBQW9GO0lBRXBGLE1BQU1DLGFBQWFDLE9BQU9GLE1BQU1HLFVBQVUsRUFBRUMsT0FBTyxDQUFDO0lBQ3BELE1BQU1DLHFCQUFxQkgsT0FBT0YsTUFBTU0saUJBQWlCLEVBQUVGLE9BQU8sQ0FBQztJQUNuRSxNQUFNRyxXQUFXLE1BQU9DLE9BQU8sQ0FBRUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxRQUFRLE1BQU9ELE9BQU8sQ0FBRUUsS0FBSyxDQUFDO0lBQ2pGLHFCQUNFO2tCQVlBLDRFQUFDakIsbURBQUlBO1lBQUNrQixNQUFLO1lBQVFDLE9BQU87Z0JBQUNDLFdBQVc7WUFBTTs7OEJBQzFDLDhEQUFDcEIsbURBQUlBLENBQUNxQixJQUFJO29CQUFDQyxNQUFLO29CQUFJQyxNQUFNOzhCQUFDOzs7Ozs7OEJBQzNCLDhEQUFDckIsbURBQUlBLENBQUNtQixJQUFJO29CQUFDRyxJQUFHO29CQUFJQyxTQUFTLElBQU1DLGdCQUFnQjs4QkFBUTs7Ozs7OzhCQU12RCw4REFBQzFCLG1EQUFJQSxDQUFDQSxJQUFJO29CQUFDMkIsVUFBUzs7c0NBQ25CLDhEQUFDM0IsbURBQUlBLENBQUNxQixJQUFJO3NDQUNOLENBQUNkLE1BQU1RLE9BQU8saUJBQUcsOERBQUNoQixxREFBTUE7Z0NBQUM2QixPQUFNOzBDQUFTOzs7OzswREFFeEMsOERBQUM3QixxREFBTUE7Z0NBQUM2QixPQUFNO2dDQUFTQyxVQUFTOztrREFDaEMsOERBQUM5QixxREFBTUEsQ0FBQytCLE9BQU87d0NBQUNDLE9BQU87OzRDQUFDOzBEQUFDLDhEQUFDOUIsbURBQUlBO2dEQUFDK0IsTUFBSzs7Ozs7OzRDQUFhOzRDQUFFcEI7Ozs7Ozs7a0RBQ25ELDhEQUFDYixxREFBTUEsQ0FBQytCLE9BQU87d0NBQUNHLE1BQU07a0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxQiw4REFBQ2pDLG1EQUFJQSxDQUFDcUIsSUFBSTs7Z0NBQ1QsQ0FBQ2QsTUFBTVEsT0FBTyxpQkFBRyw4REFBQ2hCLHFEQUFNQTtvQ0FBQ21DLE9BQU87b0NBQUNmLE9BQU87d0NBQUNnQixhQUFhO29DQUFNOzhDQUFHOzs7Ozs4REFFL0QsOERBQUNwQyxxREFBTUE7b0NBQUNtQyxPQUFPO29DQUFDZixPQUFPO3dDQUFDZ0IsYUFBYTtvQ0FBTTtvQ0FBR04sVUFBUzs7c0RBQ3RELDhEQUFDOUIscURBQU1BLENBQUMrQixPQUFPOzRDQUFDQyxPQUFPOzs4REFBQyw4REFBQzlCLG1EQUFJQTtvREFBQytCLE1BQUs7Ozs7OztnREFBY3hCOzs7Ozs7O3NEQUNqRCw4REFBQ1QscURBQU1BLENBQUMrQixPQUFPOzRDQUFDRyxNQUFNO3NEQUFDOzs7Ozs7Ozs7Ozs7Z0NBR3RCLENBQUMxQixNQUFNUSxPQUFPLGlCQUFHLDhEQUFDaEIscURBQU1BO29DQUFDbUMsT0FBTztvQ0FBQ1QsU0FBU2xCLE1BQU02QixnQkFBZ0I7OENBQUU7Ozs7OzhEQUVuRSw4REFBQ3JDLHFEQUFNQTtvQ0FBQ21DLE9BQU87OENBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QjtLQXRFTVI7QUF1RU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJDb25uZWN0LmpzP2JkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBJY29uLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlckNvbm5lY3QgPSAocHJvcHMpID0+IHtcblxuLy8gIGNvbnN0IFtvdmVydmlld0dhbWUsIHNldE92ZXJ2aWV3R2FtZV0gPSB1c2VTdGF0ZShcIldlbGNvbWUgdG8gdGhlIEdhbWUhISEgQ29ubmVjdCBNZXRhbWFzayAoR29lcmxpKSA9PT5cIik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAoYXN5bmMgKCkgPT4ge1xuXG4gIC8vICAgaWYocHJvcHMudG90YWxUb2tlbnMgPT0gMCAmJiBwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJmYWxzZVwiKSB7XG4gIC8vICAgICBzZXRPdmVydmlld0dhbWUoXCJUaGUgZ2FtZSB3aWxsIHN0YXJ0IGFmdGVyIHRoZSBmaXJzdCBkZXBvc2l0IVwiKTsgICAgXG4gIC8vICAgfSAgZWxzZSBpZihwcm9wcy5yZXN0YXJ0UG9pbnQgPT0gXCJmYWxzZVwiICYmIHByb3BzLnVzZXJUb2tlbnMgPiAwKSB7XG4gIC8vICAgICBzZXRPdmVydmlld0dhbWUoXCJHYW1lIGlzIG92ZXIuIENsYWltIHlvdXIgcmV3YXJkcy5cIik7XG4gIC8vICAgfSBlbHNlIGlmKHByb3BzLnJlc3RhcnRQb2ludCA9PSBcImZhbHNlXCIgJiYgcHJvcHMudXNlclRva2VucyA9PSAwKSB7XG4gIC8vICAgICBzZXRPdmVydmlld0dhbWUoXCJHYW1lIGlzIG92ZXIuIFdhaXQgZm9yIHRoZSBzdGFydCFcIik7XG4gIC8vICAgfSBlbHNlIGlmKHByb3BzLnJlc3RhcnRQb2ludCA9PSBcInRydWVcIikge1xuICAvLyAgICAgc2V0T3ZlcnZpZXdHYW1lKFwiUGxheSBpbiBnYW1lOiBkZXBvIG9yIGJldCBhbmQgd2luIHgyIVwiKTsgICAgXG4gIC8vIH1cbiAgLy8gICB9KSgpO1xuICAvLyB9LCBbcHJvcHMudG90YWxUb2tlbnMsIHByb3BzLmlzQ29ubmVjdGVkLCBwcm9wcy51c2VyVG9rZW5zLCBwcm9wcy5yZXN0YXJ0UG9pbnRdKTtcblxuICBjb25zdCBtaW5pTnVtYmVyID0gTnVtYmVyKHByb3BzLmJhbGFuY2VBY2MpLnRvRml4ZWQoMyk7XG4gIGNvbnN0IG1pbmlOdW1iZXJDb250cmFjdCA9IE51bWJlcihwcm9wcy5iYWxhbmNlT2ZDb250cmFjdCkudG9GaXhlZCgzKTtcbiAgY29uc3QgbWluaVRleHQgPSAocHJvcHMuYWNjb3VudCkuc3Vic3RyaW5nKDAsIDIpICsgJy4uLicgKyAocHJvcHMuYWNjb3VudCkuc2xpY2UoMzgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIDxkaXY+XG4gICAgPEhlYWRlciBhcz0naDInIGljb24gdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgPEljb24gbmFtZT0ndXNlcnMnIGNpcmN1bGFyIC8+XG4gICAgICA8SGVhZGVyLkNvbnRlbnQ+RnJpZW5kczwvSGVhZGVyLkNvbnRlbnQ+XG4gICAgPC9IZWFkZXI+XG4gICAgPEltYWdlXG4gICAgICBjZW50ZXJlZFxuICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICBzcmM9Jy9pbWFnZXMvd2lyZWZyYW1lL2NlbnRlcmVkLXBhcmFncmFwaC5wbmcnXG4gICAgLz5cbiAgPC9kaXY+ICovfVxuICAgIDxNZW51IHNpemU9J3NtYWxsJyBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fT5cbiAgICAgIDxNZW51Lkl0ZW0gaHJlZj1cIi9cIiBoZWFkZXI+SG93IHRvIHBsYXk8L01lbnUuSXRlbT5cbiAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2RhbFdpbihmYWxzZSl9PkFib3V0IFVzPC9MaXN0Lkl0ZW0+XG5cbiAgICAgIHsvKiA8TWVudS5JdGVtIGhyZWY9XCJcIiBoZWFkZXIgY29sb3I9J2dyZWVuJz57b3ZlcnZpZXdHYW1lfTwvTWVudS5JdGVtPiAqL31cblxuICAgICAgey8qIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXtwcm9wcy5vbkluaXRDb25uZWN0aW9ufT5Db25uZWN0PC9CdXR0b24+ICovfVxuXG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz4gICAgXG4gICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgeyFwcm9wcy5hY2NvdW50ID8gPEJ1dHRvbiBjb2xvcj0nb3JhbmdlJz5GdW5kcyBpbiBnYW1lPC9CdXR0b24+IFxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J29yYW5nZScgYW5pbWF0ZWQ9J2ZhZGUnPlxuICAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCB2aXNpYmxlPiA8SWNvbiBuYW1lPSdldGhlcmV1bScgLz4ge21pbmlOdW1iZXJDb250cmFjdH08L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCBoaWRkZW4+RnVsbCBiYW5rPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgXG4gICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICB7IXByb3BzLmFjY291bnQgPyA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNXB4XCJ9fT5Zb3VyIEV0aDwvQnV0dG9uPlxuICAgICAgICAgICA6IFxuICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNXB4XCJ9fSBhbmltYXRlZD0nZmFkZSc+XG4gICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgdmlzaWJsZT48SWNvbiBuYW1lPSdldGhlcmV1bScgLz57bWluaU51bWJlcn08L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IGhpZGRlbj5Zb3VyIGV0aDwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0J1dHRvbj59XG5cbiAgICAgICAgICAgIHshcHJvcHMuYWNjb3VudCA/IDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXtwcm9wcy5vbkluaXRDb25uZWN0aW9ufT5Db25uZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgOlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PnttaW5pVGV4dH1cbiAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb25uZWN0OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJNZW51IiwiSWNvbiIsIkxpc3QiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXJDb25uZWN0IiwicHJvcHMiLCJtaW5pTnVtYmVyIiwiTnVtYmVyIiwiYmFsYW5jZUFjYyIsInRvRml4ZWQiLCJtaW5pTnVtYmVyQ29udHJhY3QiLCJiYWxhbmNlT2ZDb250cmFjdCIsIm1pbmlUZXh0IiwiYWNjb3VudCIsInN1YnN0cmluZyIsInNsaWNlIiwic2l6ZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiSXRlbSIsImhyZWYiLCJoZWFkZXIiLCJhcyIsIm9uQ2xpY2siLCJzZXRPcGVuTW9kYWxXaW4iLCJwb3NpdGlvbiIsImNvbG9yIiwiYW5pbWF0ZWQiLCJDb250ZW50IiwidmlzaWJsZSIsIm5hbWUiLCJoaWRkZW4iLCJwcmltYXJ5IiwibWFyZ2luUmlnaHQiLCJvbkluaXRDb25uZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderConnect.js\n"));

/***/ })

});