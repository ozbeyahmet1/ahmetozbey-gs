"use strict";
(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [642],
  {
    "./node_modules/@babel/runtime/helpers/esm/extends.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
    },
    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _objectWithoutProperties });
    },
    "./src/component/toggle/toggle.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { Toggle: () => Toggle, default: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Toggle$parameters,
        _Toggle$parameters2,
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js"),
        _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/redux/index.ts"),
        _index__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__("./src/styles/globals.scss"), __webpack_require__("./src/component/toggle/index.tsx")),
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
        title: "Components/Toggle",
        component: _index__WEBPACK_IMPORTED_MODULE_5__.Z,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        decorators: [
          function (Story) {
            return __jsx(
              react_redux__WEBPACK_IMPORTED_MODULE_2__.zt,
              { store: _redux__WEBPACK_IMPORTED_MODULE_3__.h },
              __jsx(Story, null),
            );
          },
        ],
        argTypes: { value: { control: "boolean" } },
      };
      var Toggle = { args: { value: !0 } };
      Toggle.parameters = _objectSpread(
        _objectSpread({}, Toggle.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Toggle$parameters = Toggle.parameters) || void 0 === _Toggle$parameters
                ? void 0
                : _Toggle$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: "{\n  args: {\n    value: true\n  }\n}" },
                null === (_Toggle$parameters2 = Toggle.parameters) ||
                  void 0 === _Toggle$parameters2 ||
                  null === (_Toggle$parameters2 = _Toggle$parameters2.docs) ||
                  void 0 === _Toggle$parameters2
                  ? void 0
                  : _Toggle$parameters2.source,
              ),
            },
          ),
        },
      );
    },
    "./src/component/toggle/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Toggle });
      var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
        styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
        insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        toggle_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/component/toggle/toggle.module.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(toggle_module.Z, options);
      toggle_module.Z && toggle_module.Z.locals && toggle_module.Z.locals;
      var _excluded = ["value", "onChange"],
        __jsx = react.createElement,
        Toggle = function Toggle(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            mode = value ? "checked" : "";
          return __jsx(
            "div",
            (0, esm_extends.Z)({ className: ["toggle_container", mode].join(" "), onClick: onChange }, props),
            __jsx(
              "div",
              { className: "toggle_track ".concat(value ? "checked" : "") },
              __jsx(
                "div",
                { className: "toggle_thumb--hover" },
                __jsx("div", { className: "toggle_thumb ".concat(value ? "checked" : "") }),
              ),
            ),
          );
        };
      (Toggle.displayName = "Toggle"),
        (Toggle.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Toggle",
          props: {
            value: { required: !0, tsType: { name: "boolean" }, description: "" },
            "data-testid": { required: !1, tsType: { name: "string" }, description: "" },
            onChange: {
              required: !0,
              tsType: {
                name: "signature",
                type: "function",
                raw: "() => void",
                signature: { arguments: [], return: { name: "void" } },
              },
              description: "",
            },
          },
        });
      try {
        (Toggle.displayName = "Toggle"),
          (Toggle.__docgenInfo = {
            description: "",
            displayName: "Toggle",
            props: {
              value: { defaultValue: null, description: "", name: "value", required: !0, type: { name: "boolean" } },
              "data-testid": {
                defaultValue: null,
                description: "",
                name: "data-testid",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "() => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/component/toggle/index.tsx#Toggle"] = {
              docgenInfo: Toggle.__docgenInfo,
              name: "Toggle",
              path: "src/component/toggle/index.tsx#Toggle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/component/toggle/toggle.module.scss":
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
          ".toggle_toggle_container__fdsUn{width:44px;height:20px;background-color:var(--grey);border-radius:12px;cursor:pointer;position:relative;display:flex;align-items:center}.toggle_toggle_container__fdsUn.toggle_checked__v3zI7 .toggle_toggle_track__oXU9O{background-color:var(--green);border:.6px solid #b0b0b0}.toggle_toggle_container__fdsUn.toggle_checked__v3zI7 .toggle_toggle_thumb__5rmQu{transform:translateX(25px)}.toggle_toggle_track__oXU9O{width:100%;height:100%;background-color:var(--grey);border-radius:12px;transition:background-color .3s ease;border:.6px solid #afc6bd;display:flex}.toggle_toggle_thumb__5rmQu{aspect-ratio:1;height:100%;background-color:#f9f9f9;border:.6px solid #f2ebdb;border-radius:50%;position:absolute;transition:transform .3s ease;top:0;left:0;transition:all .3s ease}.toggle_toggle_thumb__5rmQu:hover{box-shadow:0 0 0 4px var(--lightGreen)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/component/toggle/toggle.module.scss"],
            names: [],
            mappings:
              "AAAA,gCACE,UAAA,CACA,WAAA,CACA,4BAAA,CACA,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CAEE,kFACE,6BAAA,CACA,yBAAA,CAGF,kFACE,0BAAA,CAKN,4BACE,UAAA,CACA,WAAA,CACA,4BAAA,CACA,kBAAA,CACA,oCAAA,CACA,yBAAA,CACA,YAAA,CAGF,4BACE,cAAA,CACA,WAAA,CACA,wBAAA,CACA,yBAAA,CACA,iBAAA,CACA,iBAAA,CACA,6BAAA,CACA,KAAA,CACA,MAAA,CACA,uBAAA,CACA,kCACE,sCAAA",
            sourcesContent: [
              ".toggle_container {\n  width: 44px;\n  height: 20px;\n  background-color: var(--grey);\n  border-radius: 12px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  &.checked {\n    .toggle_track {\n      background-color: var(--green);\n      border: 0.6px solid #b0b0b0;\n    }\n\n    .toggle_thumb {\n      transform: translateX(25px);\n    }\n  }\n}\n\n.toggle_track {\n  width: 100%;\n  height: 100%;\n  background-color: var(--grey);\n  border-radius: 12px;\n  transition: background-color 0.3s ease;\n  border: 0.6px solid #afc6bd;\n  display: flex;\n}\n\n.toggle_thumb {\n  aspect-ratio: 1;\n  height: 100%;\n  background-color: #f9f9f9;\n  border: 0.6px solid #f2ebdb;\n  border-radius: 50%;\n  position: absolute;\n  transition: transform 0.3s ease;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease;\n  &:hover {\n    box-shadow: 0 0 0 4px var(--lightGreen);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            toggle_container: "toggle_toggle_container__fdsUn",
            checked: "toggle_checked__v3zI7",
            toggle_track: "toggle_toggle_track__oXU9O",
            toggle_thumb: "toggle_toggle_thumb__5rmQu",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/runtime/api.js": (module) => {
      module.exports = function (cssWithMappingToString) {
        var list = [];
        return (
          (list.toString = function toString() {
            return this.map(function (item) {
              var content = "",
                needLayer = void 0 !== item[5];
              return (
                item[4] && (content += "@supports (".concat(item[4], ") {")),
                item[2] && (content += "@media ".concat(item[2], " {")),
                needLayer && (content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")),
                (content += cssWithMappingToString(item)),
                needLayer && (content += "}"),
                item[2] && (content += "}"),
                item[4] && (content += "}"),
                content
              );
            }).join("");
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            "string" == typeof modules && (modules = [[null, modules, void 0]]);
            var alreadyImportedModules = {};
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                null != id && (alreadyImportedModules[id] = !0);
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              (dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = "@layer"
                      .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                      .concat(item[1], "}")),
                  (item[5] = layer)),
                media &&
                  (item[2]
                    ? ((item[1] = "@media ".concat(item[2], " {").concat(item[1], "}")), (item[2] = media))
                    : (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}")), (item[4] = supports))
                    : (item[4] = "".concat(supports))),
                list.push(item));
            }
          }),
          list
        );
      };
    },
    "./node_modules/css-loader/dist/runtime/sourceMaps.js": (module) => {
      module.exports = function (item) {
        var content = item[1],
          cssMapping = item[3];
        if (!cssMapping) return content;
        if ("function" == typeof btoa) {
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),
            data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),
            sourceMapping = "/*# ".concat(data, " */");
          return [content].concat([sourceMapping]).join("\n");
        }
        return [content].join("\n");
      };
    },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (module) => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        return result;
      }
      function modulesToDom(list, options) {
        for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = { css: item[1], media: item[2], sourceMap: item[3], supports: item[4], layer: item[5] };
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++, stylesInDOM[indexByIdentifier].updater(obj);
          else {
            var updater = addElementStyle(obj, options);
            (options.byIndex = i), stylesInDOM.splice(i, 0, { identifier, updater, references: 1 });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        return function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            )
              return;
            api.update((obj = newObj));
          } else api.remove();
        };
      }
      module.exports = function (list, options) {
        var lastIdentifiers = modulesToDom((list = list || []), (options = options || {}));
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i]);
            stylesInDOM[index].references--;
          }
          for (var newLastIdentifiers = modulesToDom(newList, options), _i = 0; _i < lastIdentifiers.length; _i++) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i]);
            0 === stylesInDOM[_index].references && (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": (module) => {
      var memo = {};
      module.exports = function insertBySelector(insert, style) {
        var target = (function getTarget(target) {
          if (void 0 === memo[target]) {
            var styleTarget = document.querySelector(target);
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement)
              try {
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                styleTarget = null;
              }
            memo[target] = styleTarget;
          }
          return memo[target];
        })(insert);
        if (!target)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        target.appendChild(style);
      };
    },
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (module) => {
      module.exports = function insertStyleElement(options) {
        var element = document.createElement("style");
        return options.setAttributes(element, options.attributes), options.insert(element, options.options), element;
      };
    },
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = function setAttributesWithoutAttributes(styleElement) {
        var nonce = __webpack_require__.nc;
        nonce && styleElement.setAttribute("nonce", nonce);
      };
    },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
      module.exports = function domAPI(options) {
        if ("undefined" == typeof document) return { update: function update() {}, remove: function remove() {} };
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            !(function apply(styleElement, options, obj) {
              var css = "";
              obj.supports && (css += "@supports (".concat(obj.supports, ") {")),
                obj.media && (css += "@media ".concat(obj.media, " {"));
              var needLayer = void 0 !== obj.layer;
              needLayer && (css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {")),
                (css += obj.css),
                needLayer && (css += "}"),
                obj.media && (css += "}"),
                obj.supports && (css += "}");
              var sourceMap = obj.sourceMap;
              sourceMap &&
                "undefined" != typeof btoa &&
                (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                  " */",
                )),
                options.styleTagTransform(css, styleElement, options.options);
            })(styleElement, options, obj);
          },
          remove: function remove() {
            !(function removeStyleElement(styleElement) {
              if (null === styleElement.parentNode) return !1;
              styleElement.parentNode.removeChild(styleElement);
            })(styleElement);
          },
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (module) => {
      module.exports = function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
        else {
          for (; styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      };
    },
  },
]);
