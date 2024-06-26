"use strict";
(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [875],
  {
    "./src/component/card/card.stories.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { Card: () => card_stories_Card, default: () => card_stories });
      var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        es = __webpack_require__("./node_modules/react-redux/es/index.js"),
        redux = __webpack_require__("./src/redux/index.ts"),
        next_image =
          (__webpack_require__("./src/styles/globals.scss"),
          __webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs")),
        index_esm = __webpack_require__("./node_modules/react-icons/ai/index.esm.js"),
        utils = __webpack_require__("./src/helpers/utils.ts");
      const usePosition = function useBottomPosition(_ref) {
        var elementRef = _ref.elementRef,
          _useState = (0, react.useState)(null),
          bottomPosition = _useState[0],
          setBottomPosition = _useState[1];
        return (
          (0, react.useEffect)(
            function () {
              var measureBottomPosition = function measureBottomPosition() {
                if (elementRef.current) {
                  var rect = elementRef.current.getBoundingClientRect();
                  setBottomPosition(rect.bottom);
                }
              };
              return (
                measureBottomPosition(),
                window.addEventListener("resize", measureBottomPosition),
                function () {
                  window.removeEventListener("resize", measureBottomPosition);
                }
              );
            },
            [elementRef],
          ),
          bottomPosition
        );
      };
      var productWidgetSlice = __webpack_require__("./src/redux/store/slices/productWidgetSlice.ts"),
        component_checkbox = __webpack_require__("./src/component/checkbox/index.tsx"),
        colorBadge = __webpack_require__("./src/component/colorBadge/index.tsx"),
        __jsx = react.createElement;
      function ColorPalette(_ref) {
        var selectedColor = _ref.selectedColor,
          onChange = _ref.onChange;
        return __jsx(
          "div",
          { className: "colorPalette" },
          [
            { name: "white", value: "white" },
            { name: "black", value: "black" },
            { name: "green", value: "green" },
            { name: "blue", value: "blue" },
            { name: "beige", value: "beige" },
          ].map(function (color, i) {
            return __jsx(colorBadge.Z, {
              background: color.value,
              isSelected: selectedColor == color.value,
              key: i,
              onChange,
            });
          }),
        );
      }
      (ColorPalette.displayName = "ColorPalette"),
        (ColorPalette.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ColorPalette",
          props: {
            selectedColor: { required: !0, tsType: { name: "Color" }, description: "" },
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
        (colorPalette.displayName = "colorPalette"),
          (colorPalette.__docgenInfo = {
            description: "",
            displayName: "colorPalette",
            props: {
              selectedColor: {
                defaultValue: null,
                description: "",
                name: "selectedColor",
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
            (STORYBOOK_REACT_CLASSES["src/component/colorPalette/index.tsx#colorPalette"] = {
              docgenInfo: colorPalette.__docgenInfo,
              name: "colorPalette",
              path: "src/component/colorPalette/index.tsx#colorPalette",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Card$parameters,
        _Card$parameters2,
        toggle = __webpack_require__("./src/component/toggle/index.tsx"),
        tooltip = __webpack_require__("./src/component/tooltip/index.tsx"),
        card_jsx = react.createElement;
      function Card(_ref) {
        var action = _ref.action,
          active = _ref.active,
          amount = _ref.amount,
          id = _ref.id,
          linked = _ref.linked,
          selectedColor = _ref.selectedColor,
          type = _ref.type,
          cardStyle = { background: (0, utils.a)(selectedColor), color: (0, utils.g)(selectedColor) },
          dispatch = (0, es.I0)(),
          bottomRef = (0, react.useRef)(null),
          bottomPosition = usePosition({ elementRef: bottomRef }),
          containerStyle = { top: bottomPosition || 0 },
          _useState = (0, react.useState)(!1),
          showTooltip = _useState[0],
          setShowTooltip = _useState[1];
        return card_jsx(
          "div",
          { className: "card" },
          card_jsx(
            "div",
            { className: "card--top", style: cardStyle },
            card_jsx(next_image.Z, {
              src: "https://res.cloudinary.com/droheqpxn/image/upload/v1700233486/grenspark/logo_eji8n9.svg",
              width: 32,
              height: 32,
              alt: "",
            }),
            card_jsx(
              "div",
              null,
              card_jsx("p", { className: "card_description" }, "This product ", action),
              card_jsx("p", { className: "card_count" }, amount, " ", type),
            ),
          ),
          card_jsx(
            "div",
            { className: "card--bottom" },
            card_jsx(
              "div",
              { className: "card_block", ref: bottomRef },
              card_jsx(
                "div",
                { className: "card_text" },
                card_jsx("p", null, "Link to Public Profile"),
                card_jsx(
                  "div",
                  {
                    onMouseEnter: function onMouseEnter() {
                      return setShowTooltip(!0);
                    },
                  },
                  card_jsx(index_esm.ocf, { size: 12 }),
                ),
              ),
              card_jsx(component_checkbox.Z, {
                checked: linked,
                label: "",
                onChange: function handleLinked() {
                  dispatch((0, productWidgetSlice.bb)({ productId: id }));
                },
              }),
            ),
            card_jsx(
              "div",
              { className: "card_block" },
              card_jsx("p", null, "Badge Color"),
              card_jsx(ColorPalette, {
                selectedColor,
                onChange: function handleChangeColor(newColor) {
                  dispatch((0, productWidgetSlice.zX)({ productId: id, newColor }));
                },
              }),
            ),
            card_jsx(
              "div",
              { className: "card_block" },
              card_jsx("p", null, "Activate Badge"),
              card_jsx(toggle.Z, {
                value: active,
                onChange: function handleSetActive() {
                  dispatch((0, productWidgetSlice.J7)({ productId: id }));
                },
              }),
            ),
          ),
          card_jsx(
            "div",
            { className: "card_tooltipWrapper", style: containerStyle },
            showTooltip && card_jsx(tooltip.Z, { showTooltip: setShowTooltip }),
          ),
        );
      }
      (Card.displayName = "Card"), (Card.__docgenInfo = { description: "", methods: [], displayName: "Card" });
      try {
        (card.displayName = "card"),
          (card.__docgenInfo = {
            description: "",
            displayName: "card",
            props: {
              id: { defaultValue: null, description: "", name: "id", required: !0, type: { name: "number" } },
              type: {
                defaultValue: null,
                description: "",
                name: "type",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"carbon"' }, { value: '"plastic bottles"' }, { value: '"trees"' }],
                },
              },
              amount: { defaultValue: null, description: "", name: "amount", required: !0, type: { name: "number" } },
              action: {
                defaultValue: null,
                description: "",
                name: "action",
                required: !0,
                type: { name: "enum", value: [{ value: '"collects"' }, { value: '"plants"' }, { value: '"offsets"' }] },
              },
              active: { defaultValue: null, description: "", name: "active", required: !0, type: { name: "boolean" } },
              linked: { defaultValue: null, description: "", name: "linked", required: !0, type: { name: "boolean" } },
              selectedColor: {
                defaultValue: null,
                description: "",
                name: "selectedColor",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/component/card/index.tsx#card"] = {
              docgenInfo: card.__docgenInfo,
              name: "card",
              path: "src/component/card/index.tsx#card",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var card_stories_jsx = react.createElement;
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
                (0, defineProperty.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      const card_stories = {
        title: "Components/Card",
        component: Card,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          selectedColor: { control: "inline-radio", options: ["beige", "green", "white", "black", "blue"] },
          action: { control: "inline-radio", options: ["collects", "plants", "offsets"] },
          type: { control: "inline-radio", options: ["carbon", "plastic bottles", "trees"] },
        },
        decorators: [
          function (Story) {
            return card_stories_jsx(es.zt, { store: redux.h }, card_stories_jsx(Story, null));
          },
        ],
      };
      var card_stories_Card = {
        args: { action: "collects", active: !0, amount: 1, id: 1, linked: !0, selectedColor: "green", type: "carbon" },
      };
      card_stories_Card.parameters = _objectSpread(
        _objectSpread({}, card_stories_Card.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Card$parameters = card_stories_Card.parameters) || void 0 === _Card$parameters
                ? void 0
                : _Card$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                {
                  originalSource:
                    '{\n  args: {\n    action: "collects",\n    active: true,\n    amount: 1,\n    id: 1,\n    linked: true,\n    selectedColor: "green",\n    type: "carbon"\n  }\n}',
                },
                null === (_Card$parameters2 = card_stories_Card.parameters) ||
                  void 0 === _Card$parameters2 ||
                  null === (_Card$parameters2 = _Card$parameters2.docs) ||
                  void 0 === _Card$parameters2
                  ? void 0
                  : _Card$parameters2.source,
              ),
            },
          ),
        },
      );
    },
    "./src/component/checkbox/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Checkbox });
      var __jsx = __webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;
      function Checkbox(_ref) {
        var checked = _ref.checked,
          label = _ref.label,
          onChange = _ref.onChange,
          inputId = "cbx-" + Math.floor(1e3 * Math.random());
        return __jsx(
          "div",
          { className: "checkbox_wrapper" },
          __jsx("input", {
            className: "inp-cbx",
            id: inputId,
            type: "checkbox",
            style: { display: "none" },
            checked,
            onChange,
          }),
          __jsx(
            "label",
            { className: "cbx", htmlFor: inputId },
            __jsx(
              "span",
              null,
              __jsx(
                "svg",
                { width: "12px", height: "9px", viewBox: "0 0 12 9" },
                __jsx("polyline", { points: "1 5 4 8 11 1" }),
              ),
            ),
            label,
          ),
        );
      }
      (Checkbox.displayName = "Checkbox"),
        (Checkbox.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Checkbox",
          props: {
            label: { required: !0, tsType: { name: "string" }, description: "" },
            checked: { required: !0, tsType: { name: "boolean" }, description: "" },
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
        (checkbox.displayName = "checkbox"),
          (checkbox.__docgenInfo = {
            description: "",
            displayName: "checkbox",
            props: {
              label: { defaultValue: null, description: "", name: "label", required: !0, type: { name: "string" } },
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !0,
                type: { name: "boolean" },
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
            (STORYBOOK_REACT_CLASSES["src/component/checkbox/index.tsx#checkbox"] = {
              docgenInfo: checkbox.__docgenInfo,
              name: "checkbox",
              path: "src/component/checkbox/index.tsx#checkbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
  },
]);
