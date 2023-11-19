"use strict";
(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [578],
  {
    "./src/component/colorBadge/colorBadge.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ColorBadges: () => ColorBadges,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _ColorBadges$paramete,
        _ColorBadges$paramete2,
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js"),
        _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/redux/index.ts"),
        _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/component/colorBadge/index.tsx"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0,
                _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                  e,
                  r,
                  t[r],
                );
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/ColorBadge",
        component: _index__WEBPACK_IMPORTED_MODULE_4__.Z,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { background: { control: "radio", options: ["beige", "green", "white", "black", "blue"] } },
        decorators: [
          function (Story) {
            return __jsx(
              react_redux__WEBPACK_IMPORTED_MODULE_2__.zt,
              { store: _redux__WEBPACK_IMPORTED_MODULE_3__.h },
              __jsx(Story, null),
            );
          },
        ],
      };
      var ColorBadges = { args: { background: "green", isSelected: !0 } };
      ColorBadges.parameters = _objectSpread(
        _objectSpread({}, ColorBadges.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_ColorBadges$paramete = ColorBadges.parameters) || void 0 === _ColorBadges$paramete
                ? void 0
                : _ColorBadges$paramete.docs,
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: '{\n  args: {\n    background: "green",\n    isSelected: true\n  }\n}' },
                null === (_ColorBadges$paramete2 = ColorBadges.parameters) ||
                  void 0 === _ColorBadges$paramete2 ||
                  null === (_ColorBadges$paramete2 = _ColorBadges$paramete2.docs) ||
                  void 0 === _ColorBadges$paramete2
                  ? void 0
                  : _ColorBadges$paramete2.source,
              ),
            },
          ),
        },
      );
    },
    "./src/component/colorBadge/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => ColorBadge });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/helpers/utils.ts"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function ColorBadge(_ref) {
        var isSelected = _ref.isSelected,
          background = _ref.background,
          onChange = _ref.onChange,
          containerStyle = {
            border: isSelected ? "2px solid grey" : "",
            background: (0, _helpers_utils__WEBPACK_IMPORTED_MODULE_1__.a)(background),
          };
        return __jsx("span", {
          style: containerStyle,
          className: "colorBadge",
          onClick: function onClick() {
            return onChange(background);
          },
          "data-testid": "colorBadge",
        });
      }
      (ColorBadge.displayName = "ColorBadge"),
        (ColorBadge.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ColorBadge",
          props: {
            isSelected: { required: !0, tsType: { name: "boolean" }, description: "" },
            background: { required: !0, tsType: { name: "Color" }, description: "" },
            onChange: {
              required: !0,
              tsType: {
                name: "signature",
                type: "function",
                raw: "(newColor: Color) => void",
                signature: { arguments: [{ name: "newColor", type: { name: "Color" } }], return: { name: "void" } },
              },
              description: "",
            },
          },
        });
      try {
        (colorBadge.displayName = "colorBadge"),
          (colorBadge.__docgenInfo = {
            description: "",
            displayName: "colorBadge",
            props: {
              isSelected: {
                defaultValue: null,
                description: "",
                name: "isSelected",
                required: !0,
                type: { name: "boolean" },
              },
              background: {
                defaultValue: null,
                description: "",
                name: "background",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"beige"' },
                    { value: '"green"' },
                    { value: '"white"' },
                    { value: '"black"' },
                    { value: '"blue"' },
                  ],
                },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(newColor: Color) => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/component/colorBadge/index.tsx#colorBadge"] = {
              docgenInfo: colorBadge.__docgenInfo,
              name: "colorBadge",
              path: "src/component/colorBadge/index.tsx#colorBadge",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/helpers/utils.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      function colorConverter(selectedColor) {
        switch (selectedColor) {
          case "blue":
            return "#2e3a8c";
          case "green":
            return "#3b755f";
          case "beige":
            return "#f2ebdb";
          case "black":
            return "#212121";
          default:
            return "#ffffff";
        }
      }
      function fontColorMatcher(selectedColor) {
        switch (selectedColor) {
          case "beige":
            return "#3b755f";
          case "white":
            return "#212121";
          default:
            return "#ffffff";
        }
      }
      __webpack_require__.d(__webpack_exports__, { a: () => colorConverter, g: () => fontColorMatcher });
    },
    "./src/redux/index.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { h: () => store });
      var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js",
        ),
        redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/redux-persist/es/index.js"),
        redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/redux-persist/lib/storage/index.js",
        ),
        _store_slices_productWidgetSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/redux/store/slices/productWidgetSlice.ts",
        ),
        persistConfig = {
          key: "root",
          storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__.Z,
          blacklist: ["productWidget/fetchProducts"],
        },
        persistedReducer = (0, redux_persist__WEBPACK_IMPORTED_MODULE_0__.OJ)(
          persistConfig,
          _store_slices_productWidgetSlice__WEBPACK_IMPORTED_MODULE_2__.ZP,
        ),
        store = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.xC)({
          reducer: { productWidgetReducer: persistedReducer },
          middleware: function middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
              serializableCheck: {
                ignoredActions: [
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__._P,
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__.I2,
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__.E7,
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__.ex,
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__.e,
                  redux_persist__WEBPACK_IMPORTED_MODULE_0__.Nz,
                ],
              },
            });
          },
        });
      (0, redux_persist__WEBPACK_IMPORTED_MODULE_0__.p5)(store);
    },
    "./src/redux/store/slices/productWidgetSlice.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        J7: () => changeActivity,
        ZP: () => __WEBPACK_DEFAULT_EXPORT__,
        bb: () => changeLinkedState,
        zX: () => changeColor,
      });
      var _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js",
        ),
        axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/axios/lib/axios.js"),
        console = __webpack_require__("./node_modules/console-browserify/index.js");
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0,
                _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                  e,
                  r,
                  t[r],
                );
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var fetchProducts = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.hg)(
          "productWidget/fetchProducts",
          (0,
          _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(
              function _callee() {
                var response;
                return _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (_context.prev = 0),
                            (_context.next = 3),
                            axios__WEBPACK_IMPORTED_MODULE_4__.Z.get("https://api.mocki.io/v2/016d11e8/product-widgets")
                          );
                        case 3:
                          return (response = _context.sent), _context.abrupt("return", response.data);
                        case 7:
                          throw (
                            ((_context.prev = 7),
                            (_context.t0 = _context.catch(0)),
                            new Error("Failed to fetch data from the API"))
                          );
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[0, 7]],
                );
              },
            ),
          ),
        ),
        productWidgetSlice = (0, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.oM)({
          name: "productWidget",
          initialState: { products: [], status: "idle", error: null },
          reducers: {
            changeColor: function changeColor(state, action) {
              var _action$payload = action.payload,
                productId = _action$payload.productId,
                newColor = _action$payload.newColor,
                updatedProducts = state.products.map(function (product) {
                  return product.id === productId
                    ? _objectSpread(_objectSpread({}, product), {}, { selectedColor: newColor })
                    : product;
                });
              state.products = updatedProducts;
            },
            changeLinkedState: function changeLinkedState(state, action) {
              var productId = action.payload.productId,
                updatedProducts = state.products.map(function (product) {
                  return product.id === productId
                    ? _objectSpread(_objectSpread({}, product), {}, { linked: !product.linked })
                    : product;
                });
              state.products = updatedProducts;
            },
            changeActivity: function changeActivity(state, action) {
              var productId = action.payload.productId,
                updatedProducts = state.products.map(function (product) {
                  return product.id === productId
                    ? _objectSpread(_objectSpread({}, product), {}, { active: !product.active })
                    : _objectSpread(_objectSpread({}, product), {}, { active: !1 });
                });
              state.products = updatedProducts;
            },
          },
          extraReducers: function extraReducers(builder) {
            builder
              .addCase(fetchProducts.pending, function (state) {
                state.status = "loading";
              })
              .addCase(fetchProducts.fulfilled, function (state, action) {
                (state.status = "succeeded"),
                  (state.products = action.payload),
                  (state.error = null),
                  console.log(state);
              })
              .addCase(fetchProducts.rejected, function (state, action) {
                (state.status = "failed"), (state.error = action.error.message || "Failed to fetch data");
              });
          },
        }),
        _productWidgetSlice$a = productWidgetSlice.actions,
        changeColor = _productWidgetSlice$a.changeColor,
        changeLinkedState = _productWidgetSlice$a.changeLinkedState,
        changeActivity = _productWidgetSlice$a.changeActivity;
      const __WEBPACK_DEFAULT_EXPORT__ = productWidgetSlice.reducer;
    },
  },
]);
