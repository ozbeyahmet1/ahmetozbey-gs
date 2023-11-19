"use strict";
(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [397],
  {
    "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function _typeof(o) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ("object" !== _typeof(input) || null === input) return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" !== _typeof(res)) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === hint ? String : Number)(input);
        })(arg, "string");
        return "symbol" === _typeof(key) ? key : String(key);
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = _toPropertyKey(key)) in obj
            ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _defineProperty });
    },
    "./src/component/tooltip/tooltip.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Tooltip: () => Tooltip,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Tooltip$parameters,
        _Tooltip$parameters2,
        _Users_ahmet_Desktop_Coding_greenspark_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/Tooltip",
        component: __webpack_require__("./src/component/tooltip/index.tsx").Z,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Tooltip = { args: {} };
      Tooltip.parameters = _objectSpread(
        _objectSpread({}, Tooltip.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Tooltip$parameters = Tooltip.parameters) || void 0 === _Tooltip$parameters
                ? void 0
                : _Tooltip$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: "{\n  args: {}\n}" },
                null === (_Tooltip$parameters2 = Tooltip.parameters) ||
                  void 0 === _Tooltip$parameters2 ||
                  null === (_Tooltip$parameters2 = _Tooltip$parameters2.docs) ||
                  void 0 === _Tooltip$parameters2
                  ? void 0
                  : _Tooltip$parameters2.source,
              ),
            },
          ),
        },
      );
    },
    "./src/component/tooltip/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Tooltip });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/next/link.js"),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Tooltip(_ref) {
        var showTooltip = _ref.showTooltip;
        return __jsx(
          "div",
          {
            className: "tooltip",
            onMouseLeave: function onMouseLeave() {
              return showTooltip(!1);
            },
            "data-testid": "tooltip-container",
          },
          __jsx(
            "p",
            null,
            "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.",
          ),
          __jsx(
            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
            { href: "/mywidgets" },
            __jsx("button", null, "View Public Profile"),
          ),
        );
      }
      (Tooltip.displayName = "Tooltip"),
        (Tooltip.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Tooltip",
          props: {
            showTooltip: {
              required: !0,
              tsType: {
                name: "Dispatch",
                elements: [{ name: "SetStateAction", elements: [{ name: "boolean" }], raw: "SetStateAction<boolean>" }],
                raw: "Dispatch<SetStateAction<boolean>>",
              },
              description: "",
            },
          },
        });
      try {
        (tooltip.displayName = "tooltip"),
          (tooltip.__docgenInfo = {
            description: "",
            displayName: "tooltip",
            props: {
              showTooltip: {
                defaultValue: null,
                description: "",
                name: "showTooltip",
                required: !0,
                type: { name: "Dispatch<SetStateAction<boolean>>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/component/tooltip/index.tsx#tooltip"] = {
              docgenInfo: tooltip.__docgenInfo,
              name: "tooltip",
              path: "src/component/tooltip/index.tsx#tooltip",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
