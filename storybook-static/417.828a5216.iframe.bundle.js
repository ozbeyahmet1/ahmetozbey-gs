"use strict";
(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [417],
  {
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/styles/globals.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/css-loader/dist/runtime/api.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@import"https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap";:root{--blue: #2e3a8c;--green: #3b755f;--beige: #f2ebdb;--black: #212121;--white: #ffffff;--lightGreen: #afc6bd;--grey: #f9f9f9}.toggle_container{width:44px;height:20px;background-color:var(--grey);border-radius:12px;cursor:pointer;position:relative;display:flex;align-items:center}.toggle_container.checked .toggle_track{background-color:var(--green);border:.6px solid #b0b0b0}.toggle_container.checked .toggle_thumb{transform:translateX(25px)}.toggle_track{width:100%;height:100%;background-color:var(--grey);border-radius:12px;transition:background-color .3s ease;border:.6px solid #afc6bd;display:flex}.toggle_thumb{aspect-ratio:1;height:100%;background-color:#f9f9f9;border:.6px solid #f2ebdb;border-radius:50%;position:absolute;transition:transform .3s ease;top:0;left:0;transition:all .3s ease}.toggle_thumb:hover{box-shadow:0 0 0 4px var(--lightGreen)}.checkbox_wrapper .cbx{-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}.checkbox_wrapper .cbx span{display:inline-block;vertical-align:middle;transform:translate3d(0, 0, 0)}.checkbox_wrapper .cbx span:first-child{position:relative;width:20px;height:20px;border-radius:2px;transform:scale(1);vertical-align:middle;border:1px solid var(--black);transition:all .2s ease}.checkbox_wrapper .cbx span:first-child svg{position:absolute;z-index:1;top:5px;left:4px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translate3d(0, 0, 0)}.checkbox_wrapper .cbx span:first-child:before{content:"";width:100%;height:100%;background:var(--green);display:block;transform:scale(0);opacity:1;border-radius:50%;transition-delay:.2s}.checkbox_wrapper:hover  span:first-child{width:100%;height:100%}.checkbox_wrapper .cbx span:last-child{margin-left:8px}.checkbox_wrapper .cbx:hover span:first-child{border-color:gray}.checkbox_wrapper .inp-cbx:checked+.cbx span:first-child{border-color:var(--green);background:var(--green);animation:check-15 .6s ease}.checkbox_wrapper .inp-cbx:checked+.cbx span:first-child svg{stroke-dashoffset:0}.checkbox_wrapper .inp-cbx:checked+.cbx span:first-child:before{transform:scale(2.2);opacity:0;transition:all .6s ease}.checkbox_wrapper .inp-cbx:checked+.cbx span:last-child{color:#b9b8c3;transition:all .3s ease}.checkbox_wrapper .inp-cbx:checked+.cbx span:last-child:after{transform:scaleX(1);transition:all .3s ease}@keyframes check-15{50%{transform:scale(1.2)}}.colorBadge{width:16px;height:16px;aspect-ratio:1;transition:all .3s;cursor:pointer;display:block}.colorBadge:hover{opacity:.8}.colorPalette{display:flex;align-items:center;gap:4px}.card{width:220px}.card--top{display:flex;align-items:flex-start;color:#fff;gap:20px;padding:10px 15px;border-radius:6px}.card_text{display:flex;align-items:flex-start;gap:5px}.card_text svg{cursor:pointer}.card_description{font-size:12px;font-weight:400}.card_count{font-size:16px;font-weight:800}.card_block{margin-top:10px;display:flex;align-items:center;color:var(--green);justify-content:space-between;margin-bottom:10px}.card_block p{font-size:14px}.card_tooltipWrapper{position:absolute}@media only screen and (max-width: 600px){.card{width:100%}}.homepage{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.homepage_headline{margin-bottom:20px;border-bottom:2px solid #b0b0b0;padding-bottom:5px;font-weight:500;width:100%}.homepage_section{box-shadow:rgba(0,0,0,.35) 0px 5px 15px;padding:30px 50px;width:60%;animation:slideIn .6s normal;display:flex;align-items:flex-end;flex-direction:column}.homepage_cardWrapper{display:flex;width:100%;align-items:center;gap:50px}@media only screen and (max-width: 575.98px){.homepage_section{width:90%}.homepage_cardWrapper{display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr))}}@media(min-width: 576px)and (max-width: 768px){.homepage_section{width:90%}.homepage_cardWrapper{display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr))}}@media(min-width: 768px){.homepage_section{width:auto}}.tooltip{background-color:#fff;display:flex;align-items:center;flex-direction:column;box-shadow:rgba(0,0,0,.35) 0px 5px 15px;padding:24px 16px;width:248px;border-radius:5px;animation:slideIn .6s normal}.tooltip p{font-size:14px;line-height:16px;text-align:center;margin-bottom:12px}.tooltip button{background-color:rgba(0,0,0,0);border:none;color:var(--green);font-size:14px;font-weight:600;cursor:pointer;transition:all .3s}.tooltip button:hover{text-decoration:underline}@keyframes slideIn{0%{opacity:0;transform:translateY(-60px)}100%{transform:translateY(0);opacity:1}}*{box-sizing:border-box;margin:0;padding:0;font-family:"Cabin",sans-serif}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/styles/globals.scss",
              "webpack://./src/styles/_variables.scss",
              "webpack://./src/component/toggle/toggle.module.scss",
              "webpack://./src/component/checkbox/checkbox.module.scss",
              "webpack://./src/component/colorBadge/colorBadge.module.scss",
              "webpack://./src/component/colorPalette/colorPalette.module.scss",
              "webpack://./src/component/card/card.module.scss",
              "webpack://./src/views/homepage/homepage.module.scss",
              "webpack://./src/component/tooltip/tooltip.module.scss",
              "webpack://./src/styles/animations.scss",
            ],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");\n@import "./imports";\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Cabin", sans-serif;\n}\n',
              ":root {\n  --blue: #2e3a8c;\n  --green: #3b755f;\n  --beige: #f2ebdb;\n  --black: #212121;\n  --white: #ffffff;\n  --lightGreen: #afc6bd;\n  --grey: #f9f9f9;\n}\n",
              ".toggle_container {\n  width: 44px;\n  height: 20px;\n  background-color: var(--grey);\n  border-radius: 12px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  &.checked {\n    .toggle_track {\n      background-color: var(--green);\n      border: 0.6px solid #b0b0b0;\n    }\n\n    .toggle_thumb {\n      transform: translateX(25px);\n    }\n  }\n}\n\n.toggle_track {\n  width: 100%;\n  height: 100%;\n  background-color: var(--grey);\n  border-radius: 12px;\n  transition: background-color 0.3s ease;\n  border: 0.6px solid #afc6bd;\n  display: flex;\n}\n\n.toggle_thumb {\n  aspect-ratio: 1;\n  height: 100%;\n  background-color: #f9f9f9;\n  border: 0.6px solid #f2ebdb;\n  border-radius: 50%;\n  position: absolute;\n  transition: transform 0.3s ease;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease;\n  &:hover {\n    box-shadow: 0 0 0 4px var(--lightGreen);\n  }\n}\n",
              '.checkbox_wrapper .cbx {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n}\n.checkbox_wrapper .cbx span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox_wrapper .cbx span:first-child {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 2px;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid var(--black);\n  transition: all 0.2s ease;\n}\n.checkbox_wrapper .cbx span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  left: 4px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox_wrapper .cbx span:first-child:before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  background: var(--green);\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n  transition-delay: 0.2s;\n}\n.checkbox_wrapper:hover  span:first-child {\n  width: 100%;\n  height: 100%;\n}\n.checkbox_wrapper .cbx span:last-child {\n  margin-left: 8px;\n}\n\n.checkbox_wrapper .cbx:hover span:first-child {\n  border-color: grey;\n}\n\n.checkbox_wrapper .inp-cbx:checked + .cbx span:first-child {\n  border-color: var(--green);\n  background: var(--green);\n  animation: check-15 0.6s ease;\n}\n.checkbox_wrapper .inp-cbx:checked + .cbx span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox_wrapper .inp-cbx:checked + .cbx span:first-child:before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n.checkbox_wrapper .inp-cbx:checked + .cbx span:last-child {\n  color: #b9b8c3;\n  transition: all 0.3s ease;\n}\n.checkbox_wrapper .inp-cbx:checked + .cbx span:last-child:after {\n  transform: scaleX(1);\n  transition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n  50% {\n    transform: scale(1.2);\n  }\n}\n',
              ".colorBadge {\n  width: 16px;\n  height: 16px;\n  aspect-ratio: 1;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: block;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n",
              ".colorPalette {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n",
              ".card {\n  width: 220px;\n  &--top {\n    display: flex;\n    align-items: flex-start;\n    color: white;\n    gap: 20px;\n    padding: 10px 15px;\n    border-radius: 6px;\n  }\n  &_text {\n    display: flex;\n    align-items: flex-start;\n    gap: 5px;\n    svg {\n      cursor: pointer;\n    }\n  }\n  &_description {\n    font-size: 12px;\n    font-weight: 400;\n  }\n  &_count {\n    font-size: 16px;\n    font-weight: 800;\n  }\n  &_block {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    color: var(--green);\n    justify-content: space-between;\n    margin-bottom: 10px;\n    p {\n      font-size: 14px;\n    }\n  }\n  &_tooltipWrapper {\n    position: absolute;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .card {\n    width: 100%;\n  }\n}\n",
              ".homepage {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n\n  &_headline {\n    margin-bottom: 20px;\n    border-bottom: 2px solid #b0b0b0;\n    padding-bottom: 5px;\n    font-weight: 500;\n    width: 100%;\n  }\n  &_section {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    padding: 30px 50px;\n    width: 60%;\n    animation: slideIn 0.6s normal;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: column;\n  }\n  &_cardWrapper {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 50px;\n  }\n}\n\n@media only screen and (max-width: 575.98px) {\n  .homepage {\n    &_section {\n      width: 90%;\n    }\n    &_cardWrapper {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    }\n  }\n}\n\n@media (min-width: 576px) and (max-width: 768px) {\n  .homepage {\n    &_section {\n      width: 90%;\n    }\n    &_cardWrapper {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    }\n  }\n}\n@media (min-width: 768px) {\n  .homepage {\n    &_section {\n      width: auto;\n    }\n  }\n}\n",
              ".tooltip {\n  background-color: white;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding: 24px 16px;\n  width: 248px;\n  border-radius: 5px;\n  animation: slideIn 0.6s normal;\n  p {\n    font-size: 14px;\n    line-height: 16px;\n    text-align: center;\n    margin-bottom: 12px;\n  }\n  button {\n    background-color: transparent;\n    border: none;\n    color: var(--green);\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.3s;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n}\n",
              "@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-60px);\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/styles/globals.scss": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_globals_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/styles/globals.scss",
          ),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_globals_scss__WEBPACK_IMPORTED_MODULE_6__.Z,
        options,
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_globals_scss__WEBPACK_IMPORTED_MODULE_6__.Z &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_globals_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_globals_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals;
    },
  },
]);
