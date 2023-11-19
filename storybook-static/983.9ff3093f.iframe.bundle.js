(self.webpackChunkgreenspark = self.webpackChunkgreenspark || []).push([
  [983],
  {
    "./node_modules/@babel/runtime/helpers/esm/extends.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
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
      "use strict";
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
    "./node_modules/@storybook/nextjs/dist/images/next-image.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => next_image_default });
      var defaultLoader = ({ src, width, quality = 75 }) => {
          let missingValues = [];
          if ((src || missingValues.push("src"), width || missingValues.push("width"), missingValues.length > 0))
            throw new Error(
              `Next Image Optimization requires ${missingValues.join(
                ", ",
              )} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify(
                { src, width, quality },
              )}`,
            );
          let url = new URL(src, window.location.href);
          return (
            !url.searchParams.has("w") &&
              !url.searchParams.has("q") &&
              (url.searchParams.set("w", width.toString()), url.searchParams.set("q", quality.toString())),
            src.startsWith("http://") || src.startsWith("https://")
              ? url.toString()
              : url.toString().slice(url.origin.length)
          );
        },
        next_image =
          (__webpack_require__("./node_modules/@storybook/nextjs/dist/chunk-FFRTCGB4.mjs"),
          __webpack_require__("./node_modules/next/image.js")),
        image_default = __webpack_require__.n(next_image),
        react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        ImageContext = __webpack_require__("./node_modules/@storybook/nextjs/dist/image-context.mjs").ImageContext,
        next_image_default = ({ loader, ...props }) => {
          let imageParameters = react.useContext(ImageContext);
          return react.createElement(image_default(), {
            ...imageParameters,
            ...props,
            loader: loader ?? defaultLoader,
          });
        };
    },
    "./node_modules/css-loader/dist/runtime/api.js": (module) => {
      "use strict";
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
      "use strict";
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
    "./node_modules/next/dist/client/image-component.js": (module, exports, __webpack_require__) => {
      var process = __webpack_require__("./node_modules/process/browser.js");
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "Image", {
          enumerable: !0,
          get: function () {
            return Image;
          },
        });
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _react = __webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(
          __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        ),
        _reactdom = _interop_require_default._(
          __webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),
        ),
        _head = _interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/head.js")),
        _getimgprops = __webpack_require__("./node_modules/next/dist/shared/lib/get-img-props.js"),
        _imageconfig = __webpack_require__("./node_modules/next/dist/shared/lib/image-config.js"),
        _imageconfigcontextsharedruntime = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js",
        ),
        _routercontextsharedruntime =
          (__webpack_require__("./node_modules/next/dist/shared/lib/utils/warn-once.js"),
          __webpack_require__("./node_modules/next/dist/shared/lib/router-context.shared-runtime.js")),
        _imageloader = _interop_require_default._(
          __webpack_require__("./node_modules/next/dist/shared/lib/image-loader.js"),
        ),
        configEnv = process.env.__NEXT_IMAGE_OPTS;
      function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
        const src = null == img ? void 0 : img.src;
        if (!img || img["data-loaded-src"] === src) return;
        img["data-loaded-src"] = src;
        ("decode" in img ? img.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (img.parentElement && img.isConnected) {
              if (("empty" !== placeholder && setBlurComplete(!0), null == onLoadRef ? void 0 : onLoadRef.current)) {
                const event = new Event("load");
                Object.defineProperty(event, "target", { writable: !1, value: img });
                let prevented = !1,
                  stopped = !1;
                onLoadRef.current({
                  ...event,
                  nativeEvent: event,
                  currentTarget: img,
                  target: img,
                  isDefaultPrevented: () => prevented,
                  isPropagationStopped: () => stopped,
                  persist: () => {},
                  preventDefault: () => {
                    (prevented = !0), event.preventDefault();
                  },
                  stopPropagation: () => {
                    (stopped = !0), event.stopPropagation();
                  },
                });
              }
              (null == onLoadingCompleteRef ? void 0 : onLoadingCompleteRef.current) &&
                onLoadingCompleteRef.current(img);
            }
          });
      }
      function getDynamicProps(fetchPriority) {
        const [majorStr, minorStr] = _react.version.split(".", 2),
          major = parseInt(majorStr, 10),
          minor = parseInt(minorStr, 10);
        return major > 18 || (18 === major && minor >= 3) ? { fetchPriority } : { fetchpriority: fetchPriority };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      const ImageElement = (0, _react.forwardRef)((param, forwardedRef) => {
        let {
          src,
          srcSet,
          sizes,
          height,
          width,
          decoding,
          className,
          style,
          fetchPriority,
          placeholder,
          loading,
          unoptimized,
          fill,
          onLoadRef,
          onLoadingCompleteRef,
          setBlurComplete,
          setShowAltText,
          onLoad,
          onError,
          ...rest
        } = param;
        return _react.default.createElement("img", {
          ...rest,
          ...getDynamicProps(fetchPriority),
          loading,
          width,
          height,
          decoding,
          "data-nimg": fill ? "fill" : "1",
          className,
          style,
          sizes,
          srcSet,
          src,
          ref: (0, _react.useCallback)(
            (img) => {
              forwardedRef &&
                ("function" == typeof forwardedRef
                  ? forwardedRef(img)
                  : "object" == typeof forwardedRef && (forwardedRef.current = img)),
                img &&
                  (onError && (img.src = img.src),
                  img.complete && handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete));
            },
            [src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, onError, unoptimized, forwardedRef],
          ),
          onLoad: (event) => {
            handleLoading(event.currentTarget, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete);
          },
          onError: (event) => {
            setShowAltText(!0), "empty" !== placeholder && setBlurComplete(!0), onError && onError(event);
          },
        });
      });
      function ImagePreload(param) {
        let { isAppRouter, imgAttributes } = param;
        const opts = {
          as: "image",
          imageSrcSet: imgAttributes.srcSet,
          imageSizes: imgAttributes.sizes,
          crossOrigin: imgAttributes.crossOrigin,
          referrerPolicy: imgAttributes.referrerPolicy,
          ...getDynamicProps(imgAttributes.fetchPriority),
        };
        return isAppRouter && _reactdom.default.preload
          ? (_reactdom.default.preload(imgAttributes.src, opts), null)
          : _react.default.createElement(
              _head.default,
              null,
              _react.default.createElement("link", {
                key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
                rel: "preload",
                href: imgAttributes.srcSet ? void 0 : imgAttributes.src,
                ...opts,
              }),
            );
      }
      const Image = (0, _react.forwardRef)((props, forwardedRef) => {
        const isAppRouter = !(0, _react.useContext)(_routercontextsharedruntime.RouterContext),
          configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext),
          config = (0, _react.useMemo)(() => {
            const c = configEnv || configContext || _imageconfig.imageConfigDefault,
              allSizes = [...c.deviceSizes, ...c.imageSizes].sort((a, b) => a - b),
              deviceSizes = c.deviceSizes.sort((a, b) => a - b);
            return { ...c, allSizes, deviceSizes };
          }, [configContext]),
          { onLoad, onLoadingComplete } = props,
          onLoadRef = (0, _react.useRef)(onLoad);
        (0, _react.useEffect)(() => {
          onLoadRef.current = onLoad;
        }, [onLoad]);
        const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
        (0, _react.useEffect)(() => {
          onLoadingCompleteRef.current = onLoadingComplete;
        }, [onLoadingComplete]);
        const [blurComplete, setBlurComplete] = (0, _react.useState)(!1),
          [showAltText, setShowAltText] = (0, _react.useState)(!1),
          { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
            defaultLoader: _imageloader.default,
            imgConf: config,
            blurComplete,
            showAltText,
          });
        return _react.default.createElement(
          _react.default.Fragment,
          null,
          _react.default.createElement(ImageElement, {
            ...imgAttributes,
            unoptimized: imgMeta.unoptimized,
            placeholder: imgMeta.placeholder,
            fill: imgMeta.fill,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            setShowAltText,
            ref: forwardedRef,
          }),
          imgMeta.priority ? _react.default.createElement(ImagePreload, { isAppRouter, imgAttributes }) : null,
        );
      });
      ("function" == typeof exports.default || ("object" == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, "__esModule", { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default));
    },
    "./node_modules/next/dist/shared/lib/amp-context.shared-runtime.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return AmpStateContext;
          },
        });
      const AmpStateContext = __webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")
        ._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"))
        .default.createContext({});
    },
    "./node_modules/next/dist/shared/lib/amp-mode.js": (__unused_webpack_module, exports) => {
      "use strict";
      function isInAmpMode(param) {
        let { ampFirst = !1, hybrid = !1, hasQuery = !1 } = void 0 === param ? {} : param;
        return ampFirst || (hybrid && hasQuery);
      }
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return isInAmpMode;
          },
        });
    },
    "./node_modules/next/dist/shared/lib/get-img-props.js": (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "getImgProps", {
          enumerable: !0,
          get: function () {
            return getImgProps;
          },
        });
      __webpack_require__("./node_modules/next/dist/shared/lib/utils/warn-once.js");
      const _imageblursvg = __webpack_require__("./node_modules/next/dist/shared/lib/image-blur-svg.js"),
        _imageconfig = __webpack_require__("./node_modules/next/dist/shared/lib/image-config.js");
      function isStaticRequire(src) {
        return void 0 !== src.default;
      }
      new Map();
      function getInt(x) {
        return void 0 === x
          ? x
          : "number" == typeof x
            ? Number.isFinite(x)
              ? x
              : NaN
            : "string" == typeof x && /^[0-9]+$/.test(x)
              ? parseInt(x, 10)
              : NaN;
      }
      function generateImgAttrs(param) {
        let { config, src, unoptimized, width, quality, sizes, loader } = param;
        if (unoptimized) return { src, srcSet: void 0, sizes: void 0 };
        const { widths, kind } = (function getWidths(param, width, sizes) {
            let { deviceSizes, allSizes } = param;
            if (sizes) {
              const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g,
                percentSizes = [];
              for (let match; (match = viewportWidthRe.exec(sizes)); match) percentSizes.push(parseInt(match[2]));
              if (percentSizes.length) {
                const smallestRatio = 0.01 * Math.min(...percentSizes);
                return { widths: allSizes.filter((s) => s >= deviceSizes[0] * smallestRatio), kind: "w" };
              }
              return { widths: allSizes, kind: "w" };
            }
            return "number" != typeof width
              ? { widths: deviceSizes, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [width, 2 * width].map((w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1]),
                    ),
                  ],
                  kind: "x",
                };
          })(config, width, sizes),
          last = widths.length - 1;
        return {
          sizes: sizes || "w" !== kind ? sizes : "100vw",
          srcSet: widths
            .map((w, i) => loader({ config, src, quality, width: w }) + " " + ("w" === kind ? w : i + 1) + kind)
            .join(", "),
          src: loader({ config, src, quality, width: widths[last] }),
        };
      }
      function getImgProps(param, _state) {
        let {
          src,
          sizes,
          unoptimized = !1,
          priority = !1,
          loading,
          className,
          quality,
          width,
          height,
          fill = !1,
          style,
          onLoad,
          onLoadingComplete,
          placeholder = "empty",
          blurDataURL,
          fetchPriority,
          layout,
          objectFit,
          objectPosition,
          lazyBoundary,
          lazyRoot,
          ...rest
        } = param;
        const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
        let config,
          c = imgConf || _imageconfig.imageConfigDefault;
        if ("allSizes" in c) config = c;
        else {
          const allSizes = [...c.deviceSizes, ...c.imageSizes].sort((a, b) => a - b),
            deviceSizes = c.deviceSizes.sort((a, b) => a - b);
          config = { ...c, allSizes, deviceSizes };
        }
        let loader = rest.loader || defaultLoader;
        delete rest.loader, delete rest.srcSet;
        const isDefaultLoader = "__next_img_default" in loader;
        if (isDefaultLoader) {
          if ("custom" === config.loader)
            throw new Error(
              'Image with src "' +
                src +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          const customImageLoader = loader;
          loader = (obj) => {
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
          };
        }
        if (layout) {
          "fill" === layout && (fill = !0);
          const layoutToSizes = { responsive: "100vw", fill: "100vw" },
            layoutStyle = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[layout];
          layoutStyle && (style = { ...style, ...layoutStyle });
          const layoutSizes = layoutToSizes[layout];
          layoutSizes && !sizes && (sizes = layoutSizes);
        }
        let blurWidth,
          blurHeight,
          staticSrc = "",
          widthInt = getInt(width),
          heightInt = getInt(height);
        if (
          (function isStaticImport(src) {
            return (
              "object" == typeof src &&
              (isStaticRequire(src) ||
                (function isStaticImageData(src) {
                  return void 0 !== src.src;
                })(src))
            );
          })(src)
        ) {
          const staticImageData = isStaticRequire(src) ? src.default : src;
          if (!staticImageData.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(staticImageData),
            );
          if (!staticImageData.height || !staticImageData.width)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(staticImageData),
            );
          if (
            ((blurWidth = staticImageData.blurWidth),
            (blurHeight = staticImageData.blurHeight),
            (blurDataURL = blurDataURL || staticImageData.blurDataURL),
            (staticSrc = staticImageData.src),
            !fill)
          )
            if (widthInt || heightInt) {
              if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
              } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
              }
            } else (widthInt = staticImageData.width), (heightInt = staticImageData.height);
        }
        src = "string" == typeof src ? src : staticSrc;
        let isLazy = !priority && ("lazy" === loading || void 0 === loading);
        (!src || src.startsWith("data:") || src.startsWith("blob:")) && ((unoptimized = !0), (isLazy = !1)),
          config.unoptimized && (unoptimized = !0),
          isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG && (unoptimized = !0),
          priority && (fetchPriority = "high");
        const qualityInt = getInt(quality);
        const imgStyle = Object.assign(
            fill
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit,
                  objectPosition,
                }
              : {},
            showAltText ? {} : { color: "transparent" },
            style,
          ),
          backgroundImage =
            blurComplete || "empty" === placeholder
              ? null
              : "blur" === placeholder
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, _imageblursvg.getImageBlurSvg)({
                    widthInt,
                    heightInt,
                    blurWidth,
                    blurHeight,
                    blurDataURL: blurDataURL || "",
                    objectFit: imgStyle.objectFit,
                  }) +
                  '")'
                : 'url("' + placeholder + '")';
        let placeholderStyle = backgroundImage
          ? {
              backgroundSize: imgStyle.objectFit || "cover",
              backgroundPosition: imgStyle.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage,
            }
          : {};
        const imgAttributes = generateImgAttrs({
          config,
          src,
          unoptimized,
          width: widthInt,
          quality: qualityInt,
          sizes,
          loader,
        });
        return {
          props: {
            ...rest,
            loading: isLazy ? "lazy" : loading,
            fetchPriority,
            width: widthInt,
            height: heightInt,
            decoding: "async",
            className,
            style: { ...imgStyle, ...placeholderStyle },
            sizes: imgAttributes.sizes,
            srcSet: imgAttributes.srcSet,
            src: imgAttributes.src,
          },
          meta: { unoptimized, priority, placeholder, fill },
        };
      }
    },
    "./node_modules/next/dist/shared/lib/head.js": (module, exports, __webpack_require__) => {
      var process = __webpack_require__("./node_modules/process/browser.js");
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all) Object.defineProperty(target, name, { enumerable: !0, get: all[name] });
        })(exports, {
          defaultHead: function () {
            return defaultHead;
          },
          default: function () {
            return _default;
          },
        });
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _react = __webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(
          __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        ),
        _sideeffect = _interop_require_default._(
          __webpack_require__("./node_modules/next/dist/shared/lib/side-effect.js"),
        ),
        _ampcontextsharedruntime = __webpack_require__(
          "./node_modules/next/dist/shared/lib/amp-context.shared-runtime.js",
        ),
        _headmanagercontextsharedruntime = __webpack_require__(
          "./node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js",
        ),
        _ampmode = __webpack_require__("./node_modules/next/dist/shared/lib/amp-mode.js");
      __webpack_require__("./node_modules/next/dist/shared/lib/utils/warn-once.js");
      function defaultHead(inAmpMode) {
        void 0 === inAmpMode && (inAmpMode = !1);
        const head = [_react.default.createElement("meta", { charSet: "utf-8" })];
        return (
          inAmpMode ||
            head.push(_react.default.createElement("meta", { name: "viewport", content: "width=device-width" })),
          head
        );
      }
      function onlyReactElement(list, child) {
        return "string" == typeof child || "number" == typeof child
          ? list
          : child.type === _react.default.Fragment
            ? list.concat(
                _react.default.Children.toArray(child.props.children).reduce(
                  (fragmentList, fragmentChild) =>
                    "string" == typeof fragmentChild || "number" == typeof fragmentChild
                      ? fragmentList
                      : fragmentList.concat(fragmentChild),
                  [],
                ),
              )
            : list.concat(child);
      }
      const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
      function reduceComponents(headChildrenElements, props) {
        const { inAmpMode } = props;
        return headChildrenElements
          .reduce(onlyReactElement, [])
          .reverse()
          .concat(defaultHead(inAmpMode).reverse())
          .filter(
            (function unique() {
              const keys = new Set(),
                tags = new Set(),
                metaTypes = new Set(),
                metaCategories = {};
              return (h) => {
                let isUnique = !0,
                  hasKey = !1;
                if (h.key && "number" != typeof h.key && h.key.indexOf("$") > 0) {
                  hasKey = !0;
                  const key = h.key.slice(h.key.indexOf("$") + 1);
                  keys.has(key) ? (isUnique = !1) : keys.add(key);
                }
                switch (h.type) {
                  case "title":
                  case "base":
                    tags.has(h.type) ? (isUnique = !1) : tags.add(h.type);
                    break;
                  case "meta":
                    for (let i = 0, len = METATYPES.length; i < len; i++) {
                      const metatype = METATYPES[i];
                      if (h.props.hasOwnProperty(metatype))
                        if ("charSet" === metatype) metaTypes.has(metatype) ? (isUnique = !1) : metaTypes.add(metatype);
                        else {
                          const category = h.props[metatype],
                            categories = metaCategories[metatype] || new Set();
                          ("name" === metatype && hasKey) || !categories.has(category)
                            ? (categories.add(category), (metaCategories[metatype] = categories))
                            : (isUnique = !1);
                        }
                    }
                }
                return isUnique;
              };
            })(),
          )
          .reverse()
          .map((c, i) => {
            const key = c.key || i;
            if (
              process.env.__NEXT_OPTIMIZE_FONTS &&
              !inAmpMode &&
              "link" === c.type &&
              c.props.href &&
              ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((url) =>
                c.props.href.startsWith(url),
              )
            ) {
              const newProps = { ...(c.props || {}) };
              return (
                (newProps["data-href"] = newProps.href),
                (newProps.href = void 0),
                (newProps["data-optimized-fonts"] = !0),
                _react.default.cloneElement(c, newProps)
              );
            }
            return _react.default.cloneElement(c, { key });
          });
      }
      const _default = function Head(param) {
        let { children } = param;
        const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext),
          headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
        return _react.default.createElement(
          _sideeffect.default,
          { reduceComponentsToState: reduceComponents, headManager, inAmpMode: (0, _ampmode.isInAmpMode)(ampState) },
          children,
        );
      };
      ("function" == typeof exports.default || ("object" == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, "__esModule", { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default));
    },
    "./node_modules/next/dist/shared/lib/image-blur-svg.js": (__unused_webpack_module, exports) => {
      "use strict";
      function getImageBlurSvg(param) {
        let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
        const svgWidth = blurWidth ? 40 * blurWidth : widthInt,
          svgHeight = blurHeight ? 40 * blurHeight : heightInt,
          viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          viewBox +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (viewBox
            ? "none"
            : "contain" === objectFit
              ? "xMidYMid"
              : "cover" === objectFit
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          blurDataURL +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg;
          },
        });
    },
    "./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return ImageConfigContext;
          },
        });
      const _react = __webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(
          __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        ),
        _imageconfig = __webpack_require__("./node_modules/next/dist/shared/lib/image-config.js"),
        ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
    },
    "./node_modules/next/dist/shared/lib/image-config.js": (__unused_webpack_module, exports) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all) Object.defineProperty(target, name, { enumerable: !0, get: all[name] });
        })(exports, {
          VALID_LOADERS: function () {
            return VALID_LOADERS;
          },
          imageConfigDefault: function () {
            return imageConfigDefault;
          },
        });
      const VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"],
        imageConfigDefault = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    "./node_modules/next/dist/shared/lib/image-external.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      "use strict";
      var process = __webpack_require__("./node_modules/process/browser.js");
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all) Object.defineProperty(target, name, { enumerable: !0, get: all[name] });
        })(exports, {
          unstable_getImgProps: function () {
            return unstable_getImgProps;
          },
          default: function () {
            return _default;
          },
        });
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _getimgprops = __webpack_require__("./node_modules/next/dist/shared/lib/get-img-props.js"),
        _warnonce = __webpack_require__("./node_modules/next/dist/shared/lib/utils/warn-once.js"),
        _imagecomponent = __webpack_require__("./node_modules/next/dist/client/image-component.js"),
        _imageloader = _interop_require_default._(
          __webpack_require__("./node_modules/next/dist/shared/lib/image-loader.js"),
        ),
        unstable_getImgProps = (imgProps) => {
          (0, _warnonce.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.",
          );
          const { props } = (0, _getimgprops.getImgProps)(imgProps, {
            defaultLoader: _imageloader.default,
            imgConf: process.env.__NEXT_IMAGE_OPTS,
          });
          for (const [key, value] of Object.entries(props)) void 0 === value && delete props[key];
          return { props };
        },
        _default = _imagecomponent.Image;
    },
    "./node_modules/next/dist/shared/lib/image-loader.js": (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      var process = __webpack_require__("./node_modules/process/browser.js");
      function defaultLoader(param) {
        let { config, src, width, quality } = param;
        return (
          config.path +
          "?url=" +
          encodeURIComponent(src) +
          "&w=" +
          width +
          "&q=" +
          (quality || 75) +
          (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "")
        );
      }
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "default", {
          enumerable: !0,
          get: function () {
            return _default;
          },
        }),
        (defaultLoader.__next_img_default = !0);
      const _default = defaultLoader;
    },
    "./node_modules/next/dist/shared/lib/side-effect.js": (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "default", {
          enumerable: !0,
          get: function () {
            return SideEffect;
          },
        });
      const _react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        isServer = "undefined" == typeof window,
        useClientOnlyLayoutEffect = isServer ? () => {} : _react.useLayoutEffect,
        useClientOnlyEffect = isServer ? () => {} : _react.useEffect;
      function SideEffect(props) {
        const { headManager, reduceComponentsToState } = props;
        function emitChange() {
          if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
          }
        }
        var _headManager_mountedInstances;
        isServer &&
          (null == headManager ||
            null == (_headManager_mountedInstances = headManager.mountedInstances) ||
            _headManager_mountedInstances.add(props.children),
          emitChange());
        return (
          useClientOnlyLayoutEffect(() => {
            var _headManager_mountedInstances;
            return (
              null == headManager ||
                null == (_headManager_mountedInstances = headManager.mountedInstances) ||
                _headManager_mountedInstances.add(props.children),
              () => {
                var _headManager_mountedInstances;
                null == headManager ||
                  null == (_headManager_mountedInstances = headManager.mountedInstances) ||
                  _headManager_mountedInstances.delete(props.children);
              }
            );
          }),
          useClientOnlyLayoutEffect(
            () => (
              headManager && (headManager._pendingUpdate = emitChange),
              () => {
                headManager && (headManager._pendingUpdate = emitChange);
              }
            ),
          ),
          useClientOnlyEffect(
            () => (
              headManager &&
                headManager._pendingUpdate &&
                (headManager._pendingUpdate(), (headManager._pendingUpdate = null)),
              () => {
                headManager &&
                  headManager._pendingUpdate &&
                  (headManager._pendingUpdate(), (headManager._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    "./node_modules/next/dist/shared/lib/utils/warn-once.js": (__unused_webpack_module, exports) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "warnOnce", {
          enumerable: !0,
          get: function () {
            return warnOnce;
          },
        });
      let warnOnce = (_) => {};
    },
    "./node_modules/next/image.js": (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__("./node_modules/next/dist/shared/lib/image-external.js");
    },
    "./node_modules/react-icons/ai/index.esm.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { ocf: () => AiOutlineInfoCircle });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        DefaultContext = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        IconContext = react.createContext && react.createContext(DefaultContext),
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i])) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            __assign.apply(this, arguments)
          );
        },
        __rest = function (s, e) {
          var t = {};
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
          if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
          }
          return t;
        };
      function Tree2Element(tree) {
        return (
          tree &&
          tree.map(function (node, i) {
            return react.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child));
          })
        );
      }
      function iconBase_GenIcon(data) {
        return function (props) {
          return react.createElement(
            IconBase,
            __assign({ attr: __assign({}, data.attr) }, props),
            Tree2Element(data.child),
          );
        };
      }
      function IconBase(props) {
        var elem = function (conf) {
          var className,
            attr = props.attr,
            size = props.size,
            title = props.title,
            svgProps = __rest(props, ["attr", "size", "title"]),
            computedSize = size || conf.size || "1em";
          return (
            conf.className && (className = conf.className),
            props.className && (className = (className ? className + " " : "") + props.className),
            react.createElement(
              "svg",
              __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, conf.attr, attr, svgProps, {
                className,
                style: __assign(__assign({ color: props.color || conf.color }, conf.style), props.style),
                height: computedSize,
                width: computedSize,
                xmlns: "http://www.w3.org/2000/svg",
              }),
              title && react.createElement("title", null, title),
              props.children,
            )
          );
        };
        return void 0 !== IconContext
          ? react.createElement(IconContext.Consumer, null, function (conf) {
              return elem(conf);
            })
          : elem(DefaultContext);
      }
      function AiOutlineInfoCircle(props) {
        return iconBase_GenIcon({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
              },
            },
          ],
        })(props);
      }
    },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (module) => {
      "use strict";
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
      "use strict";
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
      "use strict";
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
      "use strict";
      module.exports = function setAttributesWithoutAttributes(styleElement) {
        var nonce = __webpack_require__.nc;
        nonce && styleElement.setAttribute("nonce", nonce);
      };
    },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
      "use strict";
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
      "use strict";
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
