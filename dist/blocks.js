/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/blocks/Amenities/Amenities.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/Amenities/Amenities.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Amenities_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Amenities.scss */ "./src/scripts/blocks/Amenities/Amenities.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon;
var Amenities = function Amenities(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "amenities",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "image-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
          onSelect: function onSelect(media) {
            return setAttributes({
              media: media
            });
          },
          render: function render(_ref2) {
            var open = _ref2.open;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "image-picker",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                isSmall: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "format-image"
                })
              })
            });
          }
        }), attributes.media && attributes.media.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          src: attributes.media.url,
          autoPlay: true,
          playsInline: true,
          muted: true,
          loop: true
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "background-image",
          style: {
            backgroundImage: "url(".concat(attributes.media == null ? 'https://picsum.photos/300/300' : attributes.media.url, ")")
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "h2",
          value: attributes.title,
          onChange: function onChange(title) {
            return setAttributes({
              title: title
            });
          }
        }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
            isPrimary: true,
            isSmall: true,
            onClick: function onClick() {
              setAttributes({
                items: [].concat(_toConsumableArray(attributes.items), [{
                  title: 'Title',
                  description: 'Description'
                }])
              });
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
              icon: "plus"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "contents",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "content-list",
            children: attributes.items.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                "class": "content-item" + ((index + 1) % 2 == 0 ? ' even' : ''),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "content-title",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                    tagName: "p",
                    value: item.title,
                    onChange: function onChange(title) {
                      var itemsCopy = _toConsumableArray(attributes.items);
                      itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                        title: title
                      });
                      setAttributes({
                        items: itemsCopy
                      });
                    }
                  }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                    isDestructive: true,
                    isSmall: true,
                    onClick: function onClick() {
                      setAttributes({
                        items: attributes.items.filter(function (_, i) {
                          return i !== index;
                        })
                      });
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                      icon: "minus"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "p",
                  className: "content-description",
                  value: item.description,
                  onChange: function onChange(description) {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                      description: description
                    });
                    setAttributes({
                      items: itemsCopy
                    });
                  }
                })]
              });
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "content-description content-description-main",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Amenities);

/***/ }),

/***/ "./src/scripts/blocks/Amenities/Amenities.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/Amenities/Amenities.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'Amenities',
  icon: 'format-image',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      "default": 'Amenities and Services'
    },
    media: {
      type: 'object',
      "default": null
    },
    items: {
      type: 'array',
      "default": [{
        title: 'Title',
        description: 'Description'
      }]
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ContactUs/ContactUs.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/ContactUs/ContactUs.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var _ContactUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.scss */ "./src/scripts/blocks/ContactUs/ContactUs.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var URLInputButton = wp.blockEditor.URLInputButton;
var ContactUs = function ContactUs(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_0__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "contact-us",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        className: "description-1",
        tagName: "p",
        value: attributes.description_1,
        onChange: function onChange(description_1) {
          return setAttributes({
            description_1: description_1
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "contacts",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          rel: "noopener noreferrer",
          href: "https://wa.me/6283877777621",
          className: "contact phone",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text",
            children: "+628 387 777 7621"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          rel: "noopener noreferrer",
          href: "mailto:contact@workatflow.com",
          className: "contact email",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text",
            children: "contact@workatflow.com"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "a",
        className: "btn btn-rounded",
        href: attributes.link_1.url,
        target: "_blank",
        rel: "noopener noreferrer",
        value: attributes.link_1.title,
        onChange: function onChange(title) {
          return setAttributes({
            link_1: {
              title: title
            }
          });
        }
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(URLInputButton, {
        url: attributes.link_1.url,
        onChange: function onChange(url, post) {
          setAttributes({
            link: {
              url: url,
              title: post && post.title
            }
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        className: "description-2",
        tagName: "p",
        value: attributes.description_2,
        onChange: function onChange(description_2) {
          return setAttributes({
            description_2: description_2
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "a",
        className: "btn btn-rounded",
        href: attributes.link_2.url,
        target: "_blank",
        rel: "noopener noreferrer",
        value: attributes.link_2.title,
        onChange: function onChange(title) {
          return setAttributes({
            link_2: {
              title: title
            }
          });
        }
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(URLInputButton, {
        url: attributes.link_2.url,
        onChange: function onChange(url, post) {
          setAttributes({
            link: {
              url: url,
              title: post && post.title
            }
          });
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);

/***/ }),

/***/ "./src/scripts/blocks/ContactUs/ContactUs.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/ContactUs/ContactUs.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "ContactUs",
  icon: "format-image",
  category: "common",
  attributes: {
    description_1: {
      type: "string",
      "default": "Thank you for your interest in Flow Coworking. We're excited to connect with you! Whether you have questions, need more information, or want to explore our space, there are several ways to reach out to us:"
    },
    description_2: {
      type: "string",
      "default": "Eager to see our space in person? Drop by at your convenience for a walk-in tour, subject to availability, or schedule an in-person tour below."
    },
    link_1: {
      type: "object",
      "default": {
        title: "Inquiry Form",
        url: "https://form.asana.com/?k=L_b-zJ6I-RiKEDAVbvbS6A&d=7388513620959"
      }
    },
    link_2: {
      type: "object",
      "default": {
        title: "Book a Tour",
        url: "https://calendly.com/flow_/booking"
      }
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/DoubleDesc/DoubleDesc.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/blocks/DoubleDesc/DoubleDesc.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DoubleDesc_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoubleDesc.scss */ "./src/scripts/blocks/DoubleDesc/DoubleDesc.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  ToggleControl = _wp$components.ToggleControl,
  PanelBody = _wp$components.PanelBody;
var DoubleDesc = function DoubleDesc(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "double-desc" + (attributes.hideSlider ? ' hide-slider' : '') + (attributes.hideLeft ? ' hide-left' : '') + (attributes.exHeight ? ' ex-height' : '') + (attributes.sMargin ? ' special-margin' : ''),
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Hide slider on phone",
          checked: attributes.hideSlider,
          onChange: function onChange(hideSlider) {
            return setAttributes({
              hideSlider: hideSlider
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Hide left",
          checked: attributes.hideLeft,
          onChange: function onChange(hideLeft) {
            return setAttributes({
              hideLeft: hideLeft
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Extra height",
          checked: attributes.exHeight,
          onChange: function onChange(exHeight) {
            return setAttributes({
              exHeight: exHeight
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Special margin",
          checked: attributes.sMargin,
          onChange: function onChange(sMargin) {
            return setAttributes({
              sMargin: sMargin
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Full Width Content End",
          checked: attributes.fullWidthContentEnd,
          onChange: function onChange(fullWidthContentEnd) {
            return setAttributes({
              fullWidthContentEnd: fullWidthContentEnd
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "content-start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          value: attributes.contentStart,
          onChange: function onChange(contentStart) {
            return setAttributes({
              contentStart: contentStart
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "images-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
          isPrimary: true,
          isSmall: true,
          onClick: function onClick() {
            return setAttributes({
              mediaSlider: [].concat(_toConsumableArray(attributes.mediaSlider), [{
                media: null,
                desc: 'Description'
              }])
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
            icon: "plus"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "slider" + (!attributes.hideSlider ? " slider-active" : ''),
          children: attributes.mediaSlider.map(function (image, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "image" + (isSelected || index == 0 ? ' active' : ''),
              children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
                onSelect: function onSelect(media) {
                  var mediaSliderCopy = _toConsumableArray(attributes.mediaSlider);
                  mediaSliderCopy[index] = _objectSpread(_objectSpread({}, mediaSliderCopy[index]), {}, {
                    media: media
                  });
                  setAttributes({
                    mediaSlider: mediaSliderCopy
                  });
                },
                render: function render(_ref2) {
                  var open = _ref2.open;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "image-picker",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                      isPrimary: true,
                      isSmall: true,
                      onClick: open,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                        icon: "format-image"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                      isDestructive: true,
                      isPrimary: true,
                      isSmall: true,
                      onClick: function onClick() {
                        var mediaSliderCopy = _toConsumableArray(attributes.mediaSlider);
                        mediaSliderCopy.splice(index, 1);
                        setAttributes({
                          mediaSlider: mediaSliderCopy
                        });
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                        icon: "trash"
                      })
                    })]
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "image-wrapper",
                children: image.media && image.media.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
                  src: image.media.url,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: image.media == null ? 'https://picsum.photos/300/300' : image.media.url,
                  alt: ""
                })
              }), !attributes.hideSlider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "slide-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "p",
                  value: image.desc,
                  onChange: function onChange(desc) {
                    var mediaSliderCopy = _toConsumableArray(attributes.mediaSlider);
                    mediaSliderCopy[index] = _objectSpread(_objectSpread({}, mediaSliderCopy[index]), {}, {
                      desc: desc
                    });
                    setAttributes({
                      mediaSlider: mediaSliderCopy
                    });
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "slide-progress",
                  children: [Array.from({
                    length: index + 1
                  }, function (_, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "line active",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "clickable"
                      })
                    });
                  }), Array.from({
                    length: attributes.mediaSlider.length - (index + 1)
                  }, function (_, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "line",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "clickable"
                      })
                    });
                  })]
                })]
              })]
            });
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "image-end",
          children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(media) {
              return setAttributes({
                mediaRight: media
              });
            },
            render: function render(_ref3) {
              var open = _ref3.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "image-picker",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                  isPrimary: true,
                  onClick: open,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                    icon: "format-image"
                  })
                })
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "image-wrapper",
            children: attributes.mediaRight && attributes.mediaRight.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
              src: attributes.mediaRight.url,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: attributes.mediaRight == null ? 'https://picsum.photos/300/300' : attributes.mediaRight.url
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "content-end " + (attributes.fullWidthContentEnd ? "full" : ""),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          value: attributes.contentEnd,
          onChange: function onChange(contentEnd) {
            return setAttributes({
              contentEnd: contentEnd
            });
          }
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoubleDesc);

/***/ }),

/***/ "./src/scripts/blocks/DoubleDesc/DoubleDesc.script.js":
/*!************************************************************!*\
  !*** ./src/scripts/blocks/DoubleDesc/DoubleDesc.script.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'DoubleDesc',
  icon: 'format-image',
  category: 'common',
  attributes: {
    sMargin: {
      type: 'boolean',
      "default": false
    },
    exHeight: {
      type: 'boolean',
      "default": false
    },
    hideLeft: {
      type: 'boolean',
      "default": false
    },
    hideSlider: {
      type: 'boolean',
      "default": false
    },
    fullWidthContentEnd: {
      type: 'boolean',
      "default": false
    },
    contentStart: {
      type: 'string',
      "default": 'Content'
    },
    contentEnd: {
      type: 'string',
      "default": 'Content'
    },
    mediaSlider: {
      type: 'array',
      "default": []
    },
    mediaRight: {
      type: 'object',
      "default": null
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/Hero/Hero.jsx":
/*!******************************************!*\
  !*** ./src/scripts/blocks/Hero/Hero.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.scss */ "./src/scripts/blocks/Hero/Hero.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  ToggleControl = _wp$components.ToggleControl;
var Hero = function Hero(_ref) {
  var setAttributes = _ref.setAttributes,
    attributes = _ref.attributes,
    isSelected = _ref.isSelected,
    edit = _ref.edit;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_0__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "hero" + (attributes.still ? ' still' : '') + (attributes.shrink ? ' shrink' : ''),
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Still",
          checked: attributes.still,
          onChange: function onChange(still) {
            return setAttributes({
              still: still
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Shrink height",
          checked: attributes.shrink,
          onChange: function onChange(shrink) {
            return setAttributes({
              shrink: shrink
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Show description",
          checked: attributes.showDesc,
          onChange: function onChange(showDesc) {
            return setAttributes({
              showDesc: showDesc
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "image-wrapper",
      "data-flip-id": "hero",
      children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUploadCheck, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "image-picker",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(image) {
              setAttributes({
                image: image
              });
            },
            render: function render(_ref2) {
              var open = _ref2.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                onClick: open,
                isPrimary: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "format-image"
                })
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(imagePortrait) {
              setAttributes({
                imagePortrait: imagePortrait
              });
            },
            render: function render(_ref3) {
              var open = _ref3.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                onClick: open,
                isPrimary: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "smartphone"
                })
              });
            }
          })]
        })
      }), attributes.image != null && attributes.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          src: attributes.image.url,
          autoPlay: true,
          loop: true,
          playsInline: true,
          muted: true,
          className: "desktop"
        }), attributes.imagePortrait != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          src: attributes.imagePortrait.url,
          autoPlay: true,
          loop: true,
          playsInline: true,
          muted: true,
          className: "portrait"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "background-image",
        style: {
          backgroundImage: "url(".concat(attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url, ")")
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hero-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "h1",
          value: attributes.title,
          onChange: function onChange(title) {
            return setAttributes({
              title: title
            });
          },
          "data-split-text": true
        }), attributes.showDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          value: attributes.description,
          onChange: function onChange(description) {
            return setAttributes({
              description: description
            });
          }
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/scripts/blocks/Hero/Hero.script.js":
/*!************************************************!*\
  !*** ./src/scripts/blocks/Hero/Hero.script.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "Hero",
  icon: "format-image",
  category: "common",
  attributes: {
    image: {
      type: 'object',
      "default": null
    },
    imagePortrait: {
      type: 'object',
      "default": null
    },
    title: {
      type: 'string',
      "default": 'Title'
    },
    description: {
      type: 'string',
      "default": 'Description'
    },
    still: {
      type: 'boolean',
      "default": false
    },
    showDesc: {
      type: 'boolean',
      "default": false
    },
    shrink: {
      type: 'boolean',
      "default": false
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ImageBackground/ImageBackground.jsx":
/*!****************************************************************!*\
  !*** ./src/scripts/blocks/ImageBackground/ImageBackground.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageBackground_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageBackground.scss */ "./src/scripts/blocks/ImageBackground/ImageBackground.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  SelectControl = _wp$components.SelectControl,
  ToggleControl = _wp$components.ToggleControl,
  Dropdown = _wp$components.Dropdown,
  ColorPicker = _wp$components.ColorPicker,
  ColorIndicator = _wp$components.ColorIndicator;
var ImageBackground = function ImageBackground(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "image-background" + (!attributes.bottomSpacing ? ' mb-0' : '') + (isSelected ? ' is-selected' : ''),
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
          label: "Direction",
          value: attributes.direction,
          onChange: function onChange(direction) {
            return setAttributes({
              direction: direction
            });
          },
          options: [{
            label: 'Left',
            value: 'left'
          }, {
            label: 'Right',
            value: 'right'
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Bottom spacing",
          checked: attributes.bottomSpacing,
          onChange: function onChange(bottomSpacing) {
            return setAttributes({
              bottomSpacing: bottomSpacing
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorPicker, {
              onChange: function onChange(bgColor) {
                return setAttributes({
                  bgColor: bgColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorIndicator, {
                colorValue: attributes.bgColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                text: "Background color",
                onClick: onToggle
              })]
            });
          }
        })
      })]
    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
      isPrimary: true,
      onClick: function onClick() {
        var itemsCopy = _toConsumableArray(attributes.items);
        itemsCopy.push({
          background: null,
          num: (itemsCopy.length + 1).toString().padStart(2, '0'),
          title: 'Title',
          description: 'Description',
          list: []
        });
        setAttributes({
          items: itemsCopy
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
        icon: "plus"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "slide-wrapper",
      children: attributes.items.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "image-wrapper" + (index == 0 ? ' is-active' : ''),
          children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(background) {
              var itemsCopy = _toConsumableArray(attributes.items);
              itemsCopy[index].background = background;
              setAttributes({
                items: itemsCopy
              });
            },
            render: function render(_ref3) {
              var open = _ref3.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "image-picker",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                  isPrimary: true,
                  onClick: open,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                    icon: "format-image"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                  isPrimary: true,
                  isDestructive: true,
                  onClick: function onClick() {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy.splice(index, 1);
                    setAttributes({
                      items: itemsCopy
                    });
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                    icon: "trash"
                  })
                })]
              });
            }
          }), item.background && item.background.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
            src: item.background.url,
            autoPlay: true,
            playsInline: true,
            loop: true,
            muted: true
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "background-image",
            style: {
              backgroundImage: "url(".concat(item.background ? item.background.url : 'https://picsum.photos/1920/1080', ")")
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "content-wrapper ".concat(attributes.direction),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "content-wrapper__content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "num",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "span",
                  value: item.num,
                  onChange: function onChange(num) {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                      num: num
                    });
                    setAttributes({
                      items: itemsCopy
                    });
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "h2",
                value: item.title,
                onChange: function onChange(title) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    title: title
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                },
                "data-split-text": true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "content-description",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "p",
                  value: item.description,
                  onChange: function onChange(description) {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                      description: description
                    });
                    setAttributes({
                      items: itemsCopy
                    });
                  },
                  "data-split-text": true
                }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                    isPrimary: true,
                    isSmall: true,
                    onClick: function onClick() {
                      var itemsCopy = _toConsumableArray(attributes.items);
                      itemsCopy[index].list.push('Text');
                      setAttributes({
                        items: itemsCopy
                      });
                    },
                    children: "Add"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                  className: "content-list" + (item.list.length > 0 ? '' : ' d-none'),
                  children: item.list.map(function (item, _index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                      "class": "content-list__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                        tagName: "span",
                        value: item,
                        onChange: function onChange(item) {
                          var itemsCopy = _toConsumableArray(attributes.items);
                          itemsCopy[index].list[_index] = item;
                          setAttributes({
                            items: itemsCopy
                          });
                        }
                      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                        isPrimary: true,
                        isSmall: true,
                        isDestructive: true,
                        className: "btn-delete",
                        onClick: function onClick() {
                          var itemsCopy = _toConsumableArray(attributes.items);
                          itemsCopy[index].list.splice(index, 1);
                          setAttributes({
                            items: itemsCopy
                          });
                        },
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                          icon: "trash"
                        })
                      })]
                    }, _index);
                  })
                })]
              })]
            })
          })]
        }, index);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageBackground);

/***/ }),

/***/ "./src/scripts/blocks/ImageBackground/ImageBackground.script.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/blocks/ImageBackground/ImageBackground.script.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "ImageBackground",
  icon: "format-image",
  category: "common",
  attributes: {
    direction: {
      type: "string",
      "default": "right"
    },
    bottomSpacing: {
      type: "boolean",
      "default": true
    },
    bgColor: {
      type: 'string',
      "default": null
    },
    items: {
      type: 'array',
      "default": [{
        background: null,
        num: "01",
        title: "Title",
        description: "Description",
        list: []
      }]
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/LinkHover/LinkHover.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/LinkHover/LinkHover.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinkHover_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkHover.scss */ "./src/scripts/blocks/LinkHover/LinkHover.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/scripts/components/Button/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var URLInputButton = wp.blockEditor.URLInputButton;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon;
var LinkHover = function LinkHover(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    className: "link-hover",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
        tagName: "h2",
        value: attributes.title,
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        }
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Button, {
        isPrimary: true,
        onClick: function onClick() {
          var linksCopy = _toConsumableArray(attributes.links);
          linksCopy.push({
            url: '#',
            text: 'Link',
            image: null
          });
          setAttributes({
            links: linksCopy
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
          icon: "plus"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "link-container",
        children: attributes.links.map(function (link, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "link-item",
            "data-index": (index + 1).toString().padStart(2, '0'),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
              tagName: "a",
              href: link.url,
              value: link.text,
              onChange: function onChange(text) {
                var linksCopy = _toConsumableArray(attributes.links);
                linksCopy[index] = _objectSpread(_objectSpread({}, linksCopy[index]), {}, {
                  text: text
                });
                setAttributes({
                  links: linksCopy
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "image-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: link.image,
                alt: link.text
              })
            }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "link-admin",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(URLInputButton, {
                url: link.url,
                onChange: function onChange(url, post) {
                  var linksCopy = _toConsumableArray(attributes.links);
                  linksCopy[index] = _objectSpread(_objectSpread({}, linksCopy[index]), {}, {
                    url: url,
                    text: post && post.title || linksCopy[index].text
                  });
                  setAttributes({
                    links: linksCopy
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Button, {
                isPrimary: true,
                isDestructive: true,
                onClick: function onClick() {
                  var linksCopy = _toConsumableArray(attributes.links);
                  linksCopy.splice(index, 1);
                  setAttributes({
                    links: linksCopy
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                  icon: "trash"
                })
              })]
            })]
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "action",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isSelected: isSelected,
          text: attributes.link.text
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkHover);

/***/ }),

/***/ "./src/scripts/blocks/LinkHover/LinkHover.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/LinkHover/LinkHover.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "LinkHover",
  icon: "format-image",
  category: "common",
  attributes: {
    title: {
      type: "string",
      "default": "Title"
    },
    links: {
      type: "array",
      "default": [{
        text: "Link 1",
        url: "#",
        image: "https://picsum.photos/300/300"
      }, {
        text: "Link 2",
        url: "#",
        image: "https://picsum.photos/300/300"
      }, {
        text: "Link 3",
        url: "#",
        image: "https://picsum.photos/300/300"
      }]
    },
    link: {
      type: "object",
      "default": {
        text: "Link",
        url: "#"
      }
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ListImage/ListImage.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/ListImage/ListImage.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListImage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListImage.scss */ "./src/scripts/blocks/ListImage/ListImage.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon;
var ListImage = function ListImage(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected,
    edit = _ref.edit;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "list-image",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "content-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "content-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
            tagName: "h2",
            value: attributes.title,
            onChange: function onChange(title) {
              return setAttributes({
                title: title
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
            tagName: "p",
            value: attributes.description,
            onChange: function onChange(description) {
              return setAttributes({
                description: description
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "list-wrapper",
            children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
              isPrimary: true,
              isSmall: true,
              onClick: function onClick() {
                setAttributes({
                  items: [].concat(_toConsumableArray(attributes.items), ['Text'])
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                icon: "plus"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "list-wrapper-content",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                children: attributes.items.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                      tagName: "span",
                      value: item,
                      onChange: function onChange(item) {
                        var itemsCopy = _toConsumableArray(attributes.items);
                        itemsCopy[index] = item;
                        setAttributes({
                          items: itemsCopy
                        });
                      }
                    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                      isPrimary: true,
                      isDestructive: true,
                      isSmall: true,
                      onClick: function onClick() {
                        var itemsCopy = _toConsumableArray(attributes.items);
                        itemsCopy.splice(index, 1);
                        setAttributes({
                          items: itemsCopy
                        });
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                        icon: "trash"
                      })
                    })]
                  });
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "image-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "image-picker",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(image) {
              return setAttributes({
                image: image
              });
            },
            render: function render(_ref2) {
              var open = _ref2.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "format-image"
                })
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
            onSelect: function onSelect(imagePortrait) {
              return setAttributes({
                imagePortrait: imagePortrait
              });
            },
            render: function render(_ref3) {
              var open = _ref3.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "smartphone"
                })
              });
            }
          })]
        }), attributes.image != null && attributes.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
            "data-src": attributes.image.url,
            autoPlay: true,
            loop: true,
            playsInline: true,
            muted: true,
            className: "desktop lazy",
            src: edit ? attributes.image.url : null
          }), attributes.imagePortrait != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
            "data-src": attributes.imagePortrait.url,
            autoPlay: true,
            loop: true,
            playsInline: true,
            muted: true,
            className: "portrait lazy",
            src: edit ? attributes.imagePortrait.url : null
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "background-image",
          style: {
            backgroundImage: "url(".concat(attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url, ")")
          }
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListImage);

/***/ }),

/***/ "./src/scripts/blocks/ListImage/ListImage.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/ListImage/ListImage.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'ListImage',
  icon: 'format-image',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      "default": 'Title'
    },
    description: {
      type: 'string',
      "default": 'Description'
    },
    items: {
      type: 'array',
      "default": []
    },
    image: {
      type: 'object',
      "default": null
    },
    imagePortrait: {
      type: 'object',
      "default": null
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ListPost/ListPost.jsx":
/*!**************************************************!*\
  !*** ./src/scripts/blocks/ListPost/ListPost.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/remove */ "./node_modules/lodash/remove.js");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect,
  RawHTML = _wp$element.RawHTML;
var _wp$data = wp.data,
  withSelect = _wp$data.withSelect,
  select = _wp$data.select;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  SelectControl = _wp$components.SelectControl,
  QueryControls = _wp$components.QueryControls,
  Placeholder = _wp$components.Placeholder,
  Spinner = _wp$components.Spinner,
  TextareaControl = _wp$components.TextareaControl,
  TextControl = _wp$components.TextControl;
var ListPost = function ListPost(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    postTypes = _ref.postTypes,
    latestPosts = _ref.latestPosts;
  var postType = attributes.postType,
    order = attributes.order,
    orderBy = attributes.orderBy,
    postsToShow = attributes.postsToShow,
    categories = attributes.categories;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 1),
    categoriesList = _useState2[0];
  var hasPosts = !!(latestPosts !== null && latestPosts !== void 0 && latestPosts.length);
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    setDisplayPosts = _useState4[1];
  useEffect(function () {
    if (latestPosts != null) {
      var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
      setDisplayPosts(displayPosts);
    }
  }, [latestPosts]);
  var getPostTypeOptions = function getPostTypeOptions() {
    var postTypeOptions = lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(postTypes, function (postType) {
      return {
        value: postType.slug,
        label: postType.name
      };
    });
    return _toConsumableArray(postTypeOptions);
  };
  var postTypeOptions = getPostTypeOptions();
  var ServerSideRender = wp.serverSideRender;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(PanelBody, {
        title: "Sorting and filtering",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SelectControl, {
          label: "Post type",
          options: postTypeOptions,
          value: postType,
          onChange: function onChange(postType) {
            return setAttributes({
              postType: postType
            });
          }
        }), (postType === 'post' || postType === 'program') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SelectControl, {
          label: "Post Template",
          options: [{
            value: 'basic',
            label: 'Basic'
          }, {
            value: 'full',
            label: 'Full'
          }],
          onChange: function onChange(template) {
            return setAttributes({
              posts: _objectSpread(_objectSpread({}, attributes.posts), {}, {
                template: template
              })
            });
          }
        }), postType === 'program' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextControl, {
          label: "Category",
          value: attributes.posts.category,
          onChange: function onChange(category) {
            var postsCopy = _objectSpread({}, attributes.posts);
            postsCopy.category = category;
            setAttributes({
              posts: postsCopy
            });
          }
        }), postType === 'program' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextControl, {
          label: "Num",
          value: attributes.posts.num,
          onChange: function onChange(num) {
            var postsCopy = _objectSpread({}, attributes.posts);
            postsCopy.num = num;
            setAttributes({
              posts: postsCopy
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(QueryControls, {
          order: order,
          orderBy: orderBy,
          numberOfItems: postsToShow,
          categoriesList: categoriesList,
          selectedCategoryId: categories,
          onOrderChange: function onOrderChange(order) {
            return setAttributes({
              order: order
            });
          },
          onOrderByChange: function onOrderByChange(orderBy) {
            return setAttributes({
              orderBy: orderBy
            });
          },
          onNumberOfItemsChange: function onNumberOfItemsChange(postsToShow) {
            return setAttributes({
              postsToShow: postsToShow
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "list-post",
      children: [!hasPosts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Placeholder, {
        icon: "admin-post",
        label: "Latest posts",
        children: !Array.isArray(latestPosts) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Spinner, {}) : "No posts found."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ServerSideRender, {
        block: "media108/list-post",
        attributes: attributes
      })]
    })]
  });
};
ListPost.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    postType: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    order: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    orderBy: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    postsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
    categories: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  postTypes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
  latestPosts: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array)
};
var WrappedListPost = withSelect(function (select, props) {
  var _props$attributes = props.attributes,
    postType = _props$attributes.postType,
    categories = _props$attributes.categories,
    order = _props$attributes.order,
    orderBy = _props$attributes.orderBy,
    postsToShow = _props$attributes.postsToShow,
    taxonomy = _props$attributes.taxonomy,
    featuredImageSizeSlug = _props$attributes.featuredImageSizeSlug;
  var _select = select('core'),
    getEntityRecords = _select.getEntityRecords,
    getPostTypes = _select.getPostTypes,
    getTaxonomies = _select.getTaxonomies,
    getMedia = _select.getMedia;
  var postTypes = lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(getPostTypes({
    per_page: -1
  }), {
    viewable: true
  });
  lodash_remove__WEBPACK_IMPORTED_MODULE_4___default()(postTypes, {
    slug: 'attachment'
  });
  var taxonomies = lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(getTaxonomies(), {
    types: [postType]
  });
  var latestPostsQuery;
  if (postType === 'post') {
    latestPostsQuery = {
      categories: categories,
      order: order,
      orderby: orderBy,
      per_page: postsToShow
    };
  } else {
    latestPostsQuery = {
      order: order,
      orderby: orderBy,
      per_page: postsToShow
    };
    latestPostsQuery[taxonomy] = categories;
  }
  latestPostsQuery = lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(latestPostsQuery, function (value) {
    return !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1___default()(value);
  });
  var posts = getEntityRecords('postType', postType, latestPostsQuery);
  return {
    postTypes: postTypes,
    taxonomies: taxonomies,
    latestPosts: !Array.isArray(posts) ? posts : posts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);
        if (!url) {
          url = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(image, 'source_url', null);
        }
        return _objectSpread(_objectSpread({}, post), {}, {
          featuredImageSourceUrl: url
        });
      }
      return post;
    })
  };
})(ListPost);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrappedListPost);

/***/ }),

/***/ "./src/scripts/blocks/ListPost/ListPost.script.js":
/*!********************************************************!*\
  !*** ./src/scripts/blocks/ListPost/ListPost.script.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'ListPost',
  icon: 'format-image',
  category: 'common'
};


/***/ }),

/***/ "./src/scripts/blocks/MapIntro/MapIntro.jsx":
/*!**************************************************!*\
  !*** ./src/scripts/blocks/MapIntro/MapIntro.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapIntro_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapIntro.scss */ "./src/scripts/blocks/MapIntro/MapIntro.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var _assets_images_map_desktop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/map-desktop.png */ "./assets/images/map-desktop.png");
/* harmony import */ var _assets_images_map_mobile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/map-mobile.png */ "./assets/images/map-mobile.png");
/* harmony import */ var _assets_images_logo_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/logo-white.svg */ "./assets/images/logo-white.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  URLInputButton = _wp$blockEditor.URLInputButton,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  ToggleControl = _wp$components.ToggleControl,
  Dropdown = _wp$components.Dropdown,
  ColorPicker = _wp$components.ColorPicker,
  PanelRow = _wp$components.PanelRow,
  ColorIndicator = _wp$components.ColorIndicator;
var MapIntro = function MapIntro(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "map-intro" + (attributes.noContent ? ' no-content' : ''),
    style: {
      backgroundColor: attributes.backgroundColor
    },
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToggleControl, {
          label: "Right description",
          checked: attributes.rightDescription,
          onChange: function onChange(rightDescription) {
            return setAttributes({
              rightDescription: rightDescription
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToggleControl, {
          label: "Hide logo",
          checked: attributes.hideLogo,
          onChange: function onChange(hideLogo) {
            return setAttributes({
              hideLogo: hideLogo
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToggleControl, {
          label: "No content",
          checked: attributes.noContent,
          onChange: function onChange(noContent) {
            return setAttributes({
              noContent: noContent
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorPicker, {
              onChange: function onChange(backgroundColor) {
                return setAttributes({
                  backgroundColor: backgroundColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorIndicator, {
                colorValue: attributes.backgroundColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Button, {
                isPrimary: true,
                text: "Background color",
                onClick: onToggle
              })]
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "image-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "image-picker",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MediaUpload, {
            onSelect: function onSelect(image) {
              return setAttributes({
                image: image
              });
            },
            render: function render(_ref3) {
              var open = _ref3.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Icon, {
                  icon: "format-image"
                })
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MediaUpload, {
            onSelect: function onSelect(imagePortrait) {
              return setAttributes({
                imagePortrait: imagePortrait
              });
            },
            render: function render(_ref4) {
              var open = _ref4.open;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Icon, {
                  icon: "smartphone"
                })
              });
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          href: !isSelected ? attributes.url : '#',
          target: "_blank",
          rel: "nofollow noopener",
          children: attributes.image != null && attributes.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("video", {
            "data-src": attributes.image.url,
            autoPlay: true,
            loop: true,
            playsInline: true,
            muted: true,
            className: "lazy"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: attributes.image ? attributes.image.url : _assets_images_map_desktop_png__WEBPACK_IMPORTED_MODULE_2__["default"],
              alt: "",
              className: "image desktop"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: attributes.imagePortrait ? attributes.imagePortrait.url : _assets_images_map_mobile_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              alt: "",
              className: "image portrait"
            }), !attributes.hideLogo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                target: "_blank",
                rel: "nofollow noopener",
                href: attributes.link.url,
                className: "logo-container",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "logo",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: _assets_images_logo_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                    alt: ""
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "dot"
              })]
            })]
          })
        }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(URLInputButton, {
          url: attributes.url,
          onChange: function onChange(url) {
            return setAttributes({
              url: url
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "description-wrapper ".concat(attributes.rightDescription ? "right" : ""),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
            tagName: "h2",
            value: attributes.location,
            onChange: function onChange(location) {
              return setAttributes({
                location: location
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
            tagName: "p",
            value: attributes.description,
            onChange: function onChange(description) {
              return setAttributes({
                description: description
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
            className: "description-link",
            tagName: "a",
            href: attributes.link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            value: attributes.link.title,
            onChange: function onChange(title) {
              return setAttributes({
                link: {
                  title: title
                }
              });
            }
          }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(URLInputButton, {
            url: attributes.link.url,
            onChange: function onChange(url, post) {
              setAttributes({
                link: {
                  url: url,
                  title: post && post.title
                }
              });
            }
          })]
        })]
      }), !attributes.noContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
          tagName: "p",
          value: attributes.category,
          className: "text-category",
          onChange: function onChange(category) {
            return setAttributes({
              category: category
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
          tagName: "h2",
          value: attributes.title,
          onChange: function onChange(title) {
            return setAttributes({
              title: title
            });
          },
          "data-split-text": true,
          "data-motion-text": true
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapIntro);

/***/ }),

/***/ "./src/scripts/blocks/MapIntro/MapIntro.script.js":
/*!********************************************************!*\
  !*** ./src/scripts/blocks/MapIntro/MapIntro.script.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "MapIntro",
  icon: "format-image",
  category: "common",
  attributes: {
    hideLogo: {
      type: 'boolean',
      "default": false
    },
    rightDescription: {
      type: 'boolean',
      "default": true
    },
    noContent: {
      type: 'boolean',
      "default": true
    },
    backgroundColor: {
      type: 'string',
      "default": '#ebe6da'
    },
    title: {
      type: 'string',
      "default": 'Title'
    },
    category: {
      type: 'string',
      "default": 'Category'
    },
    image: {
      type: 'object',
      "default": null
    },
    imagePortrait: {
      type: 'object',
      "default": null
    },
    location: {
      type: 'string',
      "default": 'Midplaza 1 Lobby'
    },
    description: {
      type: 'string',
      "default": 'Jl. Jenderal Sudirman No.Kav 10-11, Karet Tengsin, Jakarta.'
    },
    url: {
      type: 'string',
      "default": null
    },
    link: {
      type: "object",
      "default": {
        title: "View on Google Maps",
        url: "https://maps.app.goo.gl/eW524AugLRnepRt87"
      }
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ScaledImage/ScaledImage.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/blocks/ScaledImage/ScaledImage.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScaledImage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScaledImage.scss */ "./src/scripts/blocks/ScaledImage/ScaledImage.scss");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/scripts/components/Button/Button.jsx");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  SelectControl = _wp$components.SelectControl,
  ToggleControl = _wp$components.ToggleControl,
  Dropdown = _wp$components.Dropdown,
  ColorPicker = _wp$components.ColorPicker,
  ColorIndicator = _wp$components.ColorIndicator;
var ScaledImage = function ScaledImage(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_2__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "scaled-image",
    style: {
      backgroundColor: attributes.bgColor != null ? attributes.bgColor : 'none'
    },
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorPicker, {
              color: attributes.bgColor,
              onChange: function onChange(bgColor) {
                return setAttributes({
                  bgColor: bgColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorIndicator, {
                colorValue: attributes.bgColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Button, {
                isPrimary: true,
                text: "Background color",
                onClick: onToggle
              })]
            });
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
        tagName: "h2",
        value: attributes.title,
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        },
        "data-split-text": true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "image-wrapper",
        "data-flip-id": "hero"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "scaled-image-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          "class": "category-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
            tagName: "p",
            className: "text-category",
            value: attributes.category,
            onChange: function onChange(category) {
              return setAttributes({
                category: category
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          "class": "description-wrapper desktop-only",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
            tagName: "p",
            className: "text-description",
            value: attributes.description,
            onChange: function onChange(description) {
              return setAttributes({
                description: description
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          "class": "description-wrapper phone-only",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Text, {
            tagName: "p",
            className: "text-description",
            value: attributes.descriptionM,
            onChange: function onChange(descriptionM) {
              return setAttributes({
                descriptionM: descriptionM
              });
            }
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScaledImage);

/***/ }),

/***/ "./src/scripts/blocks/ScaledImage/ScaledImage.script.js":
/*!**************************************************************!*\
  !*** ./src/scripts/blocks/ScaledImage/ScaledImage.script.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "ScaledImage",
  icon: "format-image",
  category: "common",
  attributes: {
    bgColor: {
      type: 'string',
      "default": null
    },
    title: {
      type: 'string',
      "default": 'Title'
    },
    category: {
      type: 'string',
      "default": 'Category'
    },
    description: {
      type: 'string',
      "default": 'Description'
    },
    descriptionM: {
      type: 'string',
      "default": 'Description M'
    },
    link: {
      type: 'object',
      "default": {
        text: 'Link',
        url: '#'
      }
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ScrollSlider/ScrollSlider.jsx":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/ScrollSlider/ScrollSlider.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollSlider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSlider.scss */ "./src/scripts/blocks/ScrollSlider/ScrollSlider.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  URLInputButton = _wp$blockEditor.URLInputButton,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  ToggleControl = _wp$components.ToggleControl;
var ScrollSlider = function ScrollSlider(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected,
    edit = _ref.edit;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "scroll-slider" + (edit ? ' is-selected' : ''),
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
      isPrimary: true,
      onClick: function onClick() {
        return setAttributes({
          items: [].concat(_toConsumableArray(attributes.items), [{
            image: null,
            title: 'Title',
            description: 'Description',
            link: {
              text: '',
              url: '',
              newTab: false
            }
          }])
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
        icon: "plus"
      })
    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        title: "Pricing",
        children: attributes.items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: item.title,
            checked: item.showLabel,
            onChange: function onChange(showLabel) {
              var itemsCopy = _toConsumableArray(attributes.items);
              itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                showLabel: showLabel
              });
              setAttributes({
                items: itemsCopy
              });
            }
          });
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        title: "New Tab",
        children: attributes.items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: item.title,
            checked: item.link.newTab,
            onChange: function onChange(newTab) {
              var itemsCopy = _toConsumableArray(attributes.items);
              itemsCopy[index].link = _objectSpread(_objectSpread({}, itemsCopy[index].link), {}, {
                newTab: newTab
              });
              setAttributes({
                items: itemsCopy
              });
            }
          });
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "slide-wrapper",
      children: [!edit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "media-wrapper",
          children: attributes.items.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "media-item-wrapper",
              style: {
                zIndex: attributes.items.length - 1 - index
              },
              children: item.image != null && item.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "media-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
                  "data-src": item.image.url,
                  autoPlay: true,
                  loop: true,
                  playsInline: true,
                  muted: true,
                  className: "desktop lazy",
                  src: edit ? item.image.url : null
                }), item.imagePortrait != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
                  "data-src": item.imagePortrait.url,
                  autoPlay: true,
                  loop: true,
                  playsInline: true,
                  muted: true,
                  className: "portrait lazy",
                  src: edit ? item.imagePortrait.url : null
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "media-item background-image",
                style: {
                  backgroundImage: "url(".concat(item.image == null ? "https://picsum.photos/1920/1080?".concat(index) : item.image.url, ")")
                }
              })
            });
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "content-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "slider-menu",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "line"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "num",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "num-active",
              children: "1"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "separator",
              children: "-"
            }), " ", attributes.items.length]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "text-content-wrapper",
            children: attributes.items.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "text-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "h2",
                  value: item.title,
                  onChange: function onChange(title) {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                      title: title
                    });
                    setAttributes({
                      items: itemsCopy
                    });
                  },
                  "data-split-text": true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                  tagName: "p",
                  value: item.description,
                  onChange: function onChange(description) {
                    var itemsCopy = _toConsumableArray(attributes.items);
                    itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                      description: description
                    });
                    setAttributes({
                      items: itemsCopy
                    });
                  },
                  "data-split-text": true
                })]
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "slider-action",
            children: attributes.items.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "a",
                href: item.link.url,
                className: "btn btn-block" + (index == 0 ? ' active' : ''),
                value: item.link.text,
                target: item.link.newTab ? '_blank' : '_self',
                rel: item.link.newTab ? 'noopener noreferrer' : ''
              });
            })
          })]
        })]
      }), edit && attributes.items.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container" + (index == 0 ? ' active' : ''),
          "data-index": (index + 1).toString().padStart(2, '0'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "media-wrapper",
            children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "image-picker",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
                onSelect: function onSelect(image) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    image: image
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                },
                render: function render(_ref2) {
                  var open = _ref2.open;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                    isPrimary: true,
                    onClick: open,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                      icon: "format-image"
                    })
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
                onSelect: function onSelect(imagePortrait) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    imagePortrait: imagePortrait
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                },
                render: function render(_ref3) {
                  var open = _ref3.open;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                    isPrimary: true,
                    onClick: open,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                      icon: "smartphone"
                    })
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                isDestructive: true,
                onClick: function onClick() {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy.splice(index, 1);
                  setAttributes({
                    items: itemsCopy
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "trash"
                })
              })]
            }), item.image != null && item.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
                "data-src": item.image.url,
                autoPlay: true,
                loop: true,
                playsInline: true,
                muted: true,
                className: "desktop lazy",
                src: edit ? item.image.url : null
              }), item.imagePortrait != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
                "data-src": item.imagePortrait.url,
                autoPlay: true,
                loop: true,
                playsInline: true,
                muted: true,
                className: "portrait lazy",
                src: edit ? item.imagePortrait.url : null
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "background-image",
              style: {
                backgroundImage: "url(".concat(item.image == null ? 'https://picsum.photos/1920/1080' : item.image.url, ")")
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "slider-menu",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                href: "#",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "line"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "num",
              children: [index + 1, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "separator",
                children: "-"
              }), " ", attributes.items.length]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "text-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "h2",
                value: item.title,
                onChange: function onChange(title) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    title: title
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "p",
                value: item.description,
                onChange: function onChange(description) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    description: description
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "slider-action",
              children: [item.showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "slider-label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "label",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                    tagName: "span",
                    value: item.label,
                    onChange: function onChange(label) {
                      var itemsCopy = _toConsumableArray(attributes.items);
                      itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                        label: label
                      });
                      setAttributes({
                        items: itemsCopy
                      });
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "price",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                    tagName: "span",
                    value: item.price,
                    onChange: function onChange(price) {
                      var itemsCopy = _toConsumableArray(attributes.items);
                      itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                        price: price
                      });
                      setAttributes({
                        items: itemsCopy
                      });
                    }
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "a",
                href: item.link.url,
                className: "btn btn-block",
                target: item.link.newTab ? '_blank' : '',
                rel: item.link.newTab ? 'noopener noreferrer' : '',
                value: item.link.text,
                onChange: function onChange(text) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    link: _objectSpread(_objectSpread({}, itemsCopy[index].link), {}, {
                      text: text
                    })
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                }
              }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(URLInputButton, {
                url: item.link.url,
                onChange: function onChange(url, post) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[index] = _objectSpread(_objectSpread({}, itemsCopy[index]), {}, {
                    link: {
                      url: url,
                      text: post && post.title || itemsCopy[index].link.text,
                      newTab: itemsCopy[index].newTab
                    }
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                }
              })]
            })]
          })]
        }, index);
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSlider);

/***/ }),

/***/ "./src/scripts/blocks/ScrollSlider/ScrollSlider.script.js":
/*!****************************************************************!*\
  !*** ./src/scripts/blocks/ScrollSlider/ScrollSlider.script.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'ScrollSlider',
  icon: 'format-image',
  category: 'common',
  attributes: {
    items: {
      type: 'array',
      "default": [{
        image: null,
        imagePortrait: null,
        title: 'Title',
        description: 'Description',
        label: 'From',
        price: 'IDR 4,000,000 /Month',
        showLabel: true,
        link: {
          text: 'Link',
          url: '#',
          newTab: false
        }
      }]
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/SideImage/SideImage.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/SideImage/SideImage.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideImage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideImage.scss */ "./src/scripts/blocks/SideImage/SideImage.scss");
/* harmony import */ var _hooks_useRichText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText.js */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon;
var SideImage = function SideImage(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText_js__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "side-image",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          className: "heading",
          value: attributes.heading,
          onChange: function onChange(heading) {
            return setAttributes({
              heading: heading
            });
          },
          "data-split-text": true,
          "data-motion-text": true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          className: "description",
          value: attributes.description,
          onChange: function onChange(description) {
            return setAttributes({
              description: description
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "image-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
          onSelect: function onSelect(image) {
            setAttributes({
              image: image
            });
          },
          render: function render(_ref2) {
            var open = _ref2.open;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "image-picker",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "format-image"
                })
              })
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "media-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: attributes.image != null ? attributes.image.url : "https://picsum.photos/300/300",
            alt: ""
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideImage);

/***/ }),

/***/ "./src/scripts/blocks/SideImage/SideImage.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/SideImage/SideImage.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'SideImage',
  icon: 'format-image',
  category: 'common',
  attributes: {
    heading: {
      type: 'string',
      "default": 'Title'
    },
    description: {
      type: 'string',
      "default": 'Description'
    },
    image: {
      type: 'object',
      "default": null
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/TextBackground/TextBackground.jsx":
/*!**************************************************************!*\
  !*** ./src/scripts/blocks/TextBackground/TextBackground.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextBackground_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBackground.scss */ "./src/scripts/blocks/TextBackground/TextBackground.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon;
var TextBackground = function TextBackground(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "text-background",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "image-wrapper",
      children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
        onSelect: function onSelect(image) {
          return setAttributes({
            image: image
          });
        },
        render: function render(_ref2) {
          var open = _ref2.open;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
            isPrimary: true,
            onClick: open,
            className: "image-picker",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
              icon: "format-image"
            })
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "background-image",
        style: {
          backgroundImage: "url(".concat(attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url, ")")
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "content-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "h2",
        value: attributes.title,
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "description-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "p",
          value: attributes.description,
          onChange: function onChange(description) {
            return setAttributes({
              description: description
            });
          }
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBackground);

/***/ }),

/***/ "./src/scripts/blocks/TextBackground/TextBackground.script.js":
/*!********************************************************************!*\
  !*** ./src/scripts/blocks/TextBackground/TextBackground.script.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'TextBackground',
  icon: 'format-image',
  category: 'common',
  attributes: {
    image: {
      type: 'object',
      "default": null
    },
    title: {
      type: 'string',
      "default": 'Title'
    },
    description: {
      type: 'string',
      "default": 'Description'
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/TextColor/TextColor.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/TextColor/TextColor.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextColor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextColor.scss */ "./src/scripts/blocks/TextColor/TextColor.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  ToggleControl = _wp$components.ToggleControl,
  Dropdown = _wp$components.Dropdown,
  Button = _wp$components.Button,
  ColorPicker = _wp$components.ColorPicker,
  ColorIndicator = _wp$components.ColorIndicator;
var TextColor = function TextColor(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "text-color" + (attributes.vp ? ' vp' : ''),
    style: {
      backgroundColor: attributes.backgroundColor
    },
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Use v-padding instead of height",
          checked: attributes.vp,
          onChange: function onChange(vp) {
            return setAttributes({
              vp: vp
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorPicker, {
              onChange: function onChange(backgroundColor) {
                return setAttributes({
                  backgroundColor: backgroundColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorIndicator, {
                colorValue: attributes.backgroundColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                text: "Background color",
                onClick: onToggle
              })]
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorPicker, {
              onChange: function onChange(textColor) {
                return setAttributes({
                  textColor: textColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref3) {
            var isOpen = _ref3.isOpen,
              onToggle = _ref3.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorIndicator, {
                colorValue: attributes.textColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                text: "Text color",
                onClick: onToggle
              })]
            });
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "content-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "h2",
        value: attributes.title,
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        },
        style: {
          color: attributes.textColor
        },
        "data-split-text": true,
        "data-motion-text": true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextColor);

/***/ }),

/***/ "./src/scripts/blocks/TextColor/TextColor.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/TextColor/TextColor.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "TextColor",
  icon: "format-image",
  category: "common",
  attributes: {
    vp: {
      type: 'boolean',
      "default": false
    },
    title: {
      type: "string",
      "default": "Title"
    },
    backgroundColor: {
      type: "string",
      "default": "#ffffff"
    },
    textColor: {
      type: "string",
      "default": "#000000"
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/TextImage/TextImage.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/TextImage/TextImage.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextImage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextImage.scss */ "./src/scripts/blocks/TextImage/TextImage.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  ToggleControl = _wp$components.ToggleControl,
  SelectControl = _wp$components.SelectControl;
var TextImage = function TextImage(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected,
    edit = _ref.edit;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "text-image" + (attributes.wide ? ' wide' : ''),
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Wider title",
          checked: attributes.wide,
          onChange: function onChange(wide) {
            return setAttributes({
              wide: wide
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: "Show floating description",
          checked: attributes.showFloatingDesc,
          onChange: function onChange(showFloatingDesc) {
            return setAttributes({
              showFloatingDesc: showFloatingDesc
            });
          }
        }), attributes.showFloatingDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
          label: "Floating description direction",
          value: attributes.floatingDescDir,
          onChange: function onChange(direction) {
            return setAttributes({
              floatingDescDir: direction
            });
          },
          options: [{
            label: 'Left',
            value: 'left'
          }, {
            label: 'Right',
            value: 'right'
          }]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "h2",
          value: attributes.title,
          onChange: function onChange(title) {
            return setAttributes({
              title: title
            });
          },
          "data-split-text": true,
          "data-motion-text": true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
          tagName: "h3",
          value: attributes.subtitle,
          onChange: function onChange(subtitle) {
            return setAttributes({
              subtitle: subtitle
            });
          },
          "data-split-text": true,
          "data-motion-text": true,
          "data-motion-text-short": true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "description-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            "class": "quote",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
              tagName: "p",
              value: attributes.quote,
              onChange: function onChange(quote) {
                return setAttributes({
                  quote: quote
                });
              }
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "image-wrapper",
      children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        "class": "image-picker",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
          onSelect: function onSelect(image) {
            return setAttributes({
              image: image
            });
          },
          render: function render(_ref2) {
            var open = _ref2.open;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
              isPrimary: true,
              onClick: open,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                icon: "format-image"
              })
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
          onSelect: function onSelect(imagePortrait) {
            return setAttributes({
              imagePortrait: imagePortrait
            });
          },
          render: function render(_ref3) {
            var open = _ref3.open;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
              isPrimary: true,
              onClick: open,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                icon: "smartphone"
              })
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "frame-wrapper",
        children: [attributes.image != null && attributes.image.type == 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
            src: attributes.image.url,
            autoPlay: true,
            loop: true,
            playsInline: true,
            muted: true,
            "class": "desktop"
          }), attributes.imagePortrait != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
            src: attributes.imagePortrait.url,
            autoPlay: true,
            loop: true,
            playsInline: true,
            muted: true,
            "class": "portrait"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "background-image",
          style: {
            backgroundImage: "url(".concat(attributes.image ? attributes.image.url : 'https://picsum.photos/1920/1080', ")")
          }
        }), attributes.showFloatingDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "description-inner" + (attributes.showFloatingDesc ? ' show ' : ' ') + attributes.floatingDescDir,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
            tagName: "p",
            value: attributes.description,
            onChange: function onChange(description) {
              return setAttributes({
                description: description
              });
            }
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextImage);

/***/ }),

/***/ "./src/scripts/blocks/TextImage/TextImage.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/TextImage/TextImage.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: "TextImage",
  icon: "format-image",
  category: "common",
  attributes: {
    showFloatingDesc: {
      type: 'boolean',
      "default": false
    },
    floatingDescDir: {
      type: 'string',
      "default": 'right'
    },
    wide: {
      type: 'boolean',
      "default": false
    },
    title: {
      type: "string",
      "default": "Title"
    },
    subtitle: {
      type: "string",
      "default": "Description"
    },
    quote: {
      type: "string",
      "default": "Quote"
    },
    description: {
      type: "string",
      "default": "Description"
    },
    image: {
      type: "object",
      "default": null
    },
    imagePortrait: {
      type: 'object',
      "default": null
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/TextIntro/TextIntro.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/blocks/TextIntro/TextIntro.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextIntro_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextIntro.scss */ "./src/scripts/blocks/TextIntro/TextIntro.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Dropdown = _wp$components.Dropdown,
  Button = _wp$components.Button,
  ColorPicker = _wp$components.ColorPicker,
  ColorIndicator = _wp$components.ColorIndicator,
  SelectControl = _wp$components.SelectControl;
var TextIntro = function TextIntro(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "text-intro " + attributes.margin,
    style: {
      backgroundColor: attributes.backgroundColor
    },
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
          label: "Margin",
          value: attributes.margin,
          onChange: function onChange(margin) {
            return setAttributes({
              margin: margin
            });
          },
          options: [{
            label: 'Default',
            value: ''
          }, {
            label: 'Before Solutions list',
            value: 'before-solutions-list'
          }, {
            label: 'Before related solutions',
            value: 'before-related-solutions'
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dropdown, {
          renderContent: function renderContent() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorPicker, {
              onChange: function onChange(backgroundColor) {
                return setAttributes({
                  backgroundColor: backgroundColor
                });
              }
            });
          },
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorIndicator, {
                colorValue: attributes.backgroundColor
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                text: "Background color",
                onClick: onToggle
              })]
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "h2",
        value: attributes.title,
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        },
        "data-split-text": true,
        "data-motion-text": true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
        tagName: "p",
        value: attributes.description,
        onChange: function onChange(description) {
          return setAttributes({
            description: description
          });
        }
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextIntro);

/***/ }),

/***/ "./src/scripts/blocks/TextIntro/TextIntro.script.js":
/*!**********************************************************!*\
  !*** ./src/scripts/blocks/TextIntro/TextIntro.script.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'TextIntro',
  icon: 'format-image',
  category: 'common',
  attributes: {
    margin: {
      type: 'string',
      "default": ''
    },
    title: {
      type: 'string',
      "default": 'Title'
    },
    description: {
      type: 'string',
      "default": 'Description'
    },
    backgroundColor: {
      type: 'string',
      "default": null
    }
  }
};


/***/ }),

/***/ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.jsx":
/*!****************************************************************!*\
  !*** ./src/scripts/blocks/ThreeHighlights/ThreeHighlights.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThreeHighlights_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeHighlights.scss */ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  URLInputButton = _wp$blockEditor.URLInputButton,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Icon = _wp$components.Icon,
  PanelBody = _wp$components.PanelBody,
  ToggleControl = _wp$components.ToggleControl;
var ThreeHighlights = function ThreeHighlights(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected;
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "three-highlights",
    children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        children: attributes.items.map(function (item, key) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: item.title,
            checked: item.showButton,
            onChange: function onChange(showButton) {
              var itemsCopy = _toConsumableArray(attributes.items);
              itemsCopy[key] = _objectSpread(_objectSpread({}, itemsCopy[key]), {}, {
                showButton: showButton
              });
              setAttributes({
                items: itemsCopy
              });
            }
          });
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "image-wrapper",
        children: [isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaUpload, {
          onSelect: function onSelect(image) {
            return setAttributes({
              image: image
            });
          },
          render: function render(_ref2) {
            var open = _ref2.open;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "image-picker",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
                isPrimary: true,
                onClick: open,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  icon: "format-image"
                })
              })
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "media-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: attributes.image != null ? attributes.image.url : "https://picsum.photos/300/300",
            alt: ""
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "content-wrapper",
        children: attributes.items.map(function (item, key) {
          return (item.title != '' || isSelected) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "num",
              children: [(key + 1).toString().padStart(2, '0'), "."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
              tagName: "p",
              className: "content-title",
              value: item.title,
              onChange: function onChange(title) {
                return setAttributes({
                  items: attributes.items.map(function (item, index) {
                    return index === key ? _objectSpread(_objectSpread({}, item), {}, {
                      title: title
                    }) : item;
                  })
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
              tagName: "p",
              "class": "content-desc",
              value: item.description,
              onChange: function onChange(description) {
                return setAttributes({
                  items: attributes.items.map(function (item, index) {
                    return index === key ? _objectSpread(_objectSpread({}, item), {}, {
                      description: description
                    }) : item;
                  })
                });
              }
            }), item.link && item.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
                tagName: "a",
                className: "btn btn-rounded",
                href: item.link.url,
                target: "_blank",
                rel: "noopener noreferrer",
                value: item.link.title,
                onChange: function onChange(title) {
                  return setAttributes({
                    items: attributes.items.map(function (item, index) {
                      return index === key ? _objectSpread(_objectSpread({}, item), {}, {
                        link: _objectSpread(_objectSpread({}, item.link), {}, {
                          title: title
                        })
                      }) : item;
                    })
                  });
                }
              }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(URLInputButton, {
                url: item.link.url,
                onChange: function onChange(url, post) {
                  var itemsCopy = _toConsumableArray(attributes.items);
                  itemsCopy[key] = _objectSpread(_objectSpread({}, itemsCopy[key]), {}, {
                    link: {
                      url: url,
                      title: post && post.title || itemsCopy[key].title
                    }
                  });
                  setAttributes({
                    items: itemsCopy
                  });
                }
              })]
            })]
          });
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeHighlights);

/***/ }),

/***/ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.script.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/blocks/ThreeHighlights/ThreeHighlights.script.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockData: () => (/* binding */ blockData)
/* harmony export */ });
var blockData = {
  title: 'ThreeHighlights',
  icon: 'format-image',
  category: 'common',
  attributes: {
    image: {
      type: 'object',
      "default": null
    },
    items: {
      type: 'array',
      "default": [{
        title: 'Title',
        description: 'Description',
        link: {
          title: 'Book Now',
          url: '#'
        },
        showButton: false
      }, {
        title: 'Title',
        description: 'Description',
        link: {
          title: 'Book Now',
          url: '#'
        },
        showButton: false
      }, {
        title: 'Title',
        description: 'Description',
        link: {
          title: 'Book Now',
          url: '#'
        },
        showButton: false
      }]
    }
  }
};


/***/ }),

/***/ "./src/scripts/components/Button/Button.jsx":
/*!**************************************************!*\
  !*** ./src/scripts/components/Button/Button.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.scss */ "./src/scripts/components/Button/Button.scss");
/* harmony import */ var _hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRichText */ "./src/scripts/hooks/useRichText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Button = function Button(props) {
  var Text = (0,_hooks_useRichText__WEBPACK_IMPORTED_MODULE_1__["default"])(props.isSelected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    href: "#",
    "class": "btn btn-primary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
      tagName: "span",
      value: props.text
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/scripts/hooks/useRichText.js":
/*!******************************************!*\
  !*** ./src/scripts/hooks/useRichText.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RichText = wp.blockEditor.RichText;
var useRichText = function useRichText(isSelected) {
  return isSelected ? RichText : RichText.Content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRichText);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Amenities/Amenities.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Amenities/Amenities.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":lang(jp) .amenities .container .content-wrapper h2 {\n  max-width: unset;\n}\n:lang(jp) .amenities .container .content-wrapper .content-description {\n  font-size: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n  text-wrap: nowrap;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .amenities .container .content-wrapper .content-description {\n    text-wrap: wrap;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .amenities .container .content-wrapper .content-list .content-item {\n    padding: calc(28 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n:lang(jp) .amenities .container .content-wrapper .content-list .content-item .content-title.active p strong {\n  font-weight: 300;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .amenities .container .content-wrapper .content-list .content-item .content-title p {\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .amenities .container .content-wrapper .content-list .content-item p {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-wrap: nowrap;\n  }\n}\n\n#editor .amenities .container .content-wrapper .content-list .content-item .content-description {\n  display: block;\n}\n\n.amenities {\n  overflow: hidden;\n}\n.amenities .container {\n  display: flex;\n  margin: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #9378AE;\n  border-radius: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(29 / var(--vw) * var(--scaler) * var(--multiplier)) calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .amenities .container {\n    flex-direction: column;\n    padding: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    overflow: hidden;\n    height: calc(100vh - 6 / var(--vw) * var(--scaler) * var(--multiplier) * 2);\n  }\n}\n.amenities .container .image-wrapper {\n  flex: 0 0 45%;\n  width: 45%;\n  border-radius: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(762 / var(--vw) * var(--scaler) * var(--multiplier));\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .image-wrapper {\n    flex: none;\n    width: 100%;\n    height: calc(434 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.amenities .container .image-wrapper .background-image,\n.amenities .container .image-wrapper video {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.amenities .container .content-wrapper {\n  padding-left: calc(104 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding-right: calc(81 / var(--vw) * var(--scaler) * var(--multiplier));\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper {\n    padding: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.amenities .container .content-wrapper h2 {\n  font-size: calc(64 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: -0.64px;\n  line-height: calc(62 / var(--vw) * var(--scaler) * var(--multiplier));\n  max-width: calc(420 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FFFFFF;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper h2 {\n    font-size: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n    letter-spacing: -0.38px;\n  }\n}\n.amenities .container .content-wrapper a {\n  color: #FFFFFF;\n  opacity: 0.4;\n  font-size: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n.amenities .container .content-wrapper .contents {\n  flex-grow: 1;\n  border-bottom: 1px solid #FFFFFF;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .contents {\n    border-bottom: none;\n  }\n}\n.amenities .container .content-wrapper .content-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list {\n    background-color: #8A6EA7;\n    margin-left: 0;\n    flex-direction: column;\n    border-radius: calc(8 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.amenities .container .content-wrapper .content-list .content-item {\n  margin-bottom: calc(27 / var(--vw) * var(--scaler) * var(--multiplier));\n  flex: 0 0 calc(295 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(295 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.amenities .container .content-wrapper .content-list .content-item.even {\n  flex: 0 0 calc(211 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(211 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item.even {\n    flex: unset;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item {\n    flex: unset;\n    width: 100%;\n    margin-left: 0;\n    margin-bottom: 0;\n    padding: calc(28 / var(--vw) * var(--scaler) * var(--multiplier)) calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    position: relative;\n  }\n  .amenities .container .content-wrapper .content-list .content-item:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    height: 1px;\n    bottom: 0;\n    left: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n    background-color: rgba(236, 230, 218, 0.2);\n  }\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title {\n  position: relative;\n  opacity: 0.4;\n  transition: opacity 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93), padding 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n  cursor: pointer;\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title:hover, .amenities .container .content-wrapper .content-list .content-item .content-title:focus, .amenities .container .content-wrapper .content-list .content-item .content-title.active {\n  opacity: 1;\n  padding-left: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title:hover::before, .amenities .container .content-wrapper .content-list .content-item .content-title:focus::before, .amenities .container .content-wrapper .content-list .content-item .content-title.active::before {\n  transform: translateY(-50%) scale(1);\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title.active {\n  pointer-events: none;\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title::before {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%) scale(0);\n  transform-origin: center;\n  content: \"\";\n  display: inline-block;\n  width: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  will-change: transform;\n  transition: transform 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item .content-title::before {\n    width: calc(4 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: calc(4 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    transform: translateY(-50%) scale(1);\n  }\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item .content-title {\n    opacity: 1;\n    padding-left: calc(34 / var(--vw) * var(--scaler) * var(--multiplier));\n    pointer-events: none;\n  }\n}\n.amenities .container .content-wrapper .content-list .content-item .content-title p {\n  font-size: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  color: #FFFFFF;\n  margin: 0;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item .content-title p {\n    font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.amenities .container .content-wrapper .content-list .content-item p {\n  font-size: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FFFFFF;\n}\n.amenities .container .content-wrapper .content-list .content-item .content-description {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-list .content-item .content-description {\n    padding: 0 calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    display: block;\n    opacity: 0.6;\n    margin-bottom: 0;\n  }\n}\n.amenities .container .content-wrapper .content-list .content-item .content-description p {\n  color: #FFFFFF;\n}\n.amenities .container .content-wrapper .content-description {\n  color: #FFFFFF;\n}\n@media screen and (max-width: 500px) {\n  .amenities .container .content-wrapper .content-description {\n    display: none;\n  }\n}\n.amenities .container .content-wrapper .content-description-main {\n  margin: calc(24 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-clip: no-clip;\n          mask-clip: no-clip;\n  mask-position: center;\n  -webkit-mask-size: cover;\n          mask-size: cover;\n}\n.amenities .container .content-wrapper .content-description-main p {\n  margin: 0;\n}\n\n:lang(jp) .amenities .container .content-wrapper .content-list .content-item.even {\n  flex: 0 0 calc(237 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(237 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .amenities .container .content-wrapper .content-list .content-item.even {\n    flex: unset;\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ContactUs/ContactUs.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ContactUs/ContactUs.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 500px) {\n  :lang(jp) .contact-us .container .description-1, :lang(jp) .contact-us .container .description-2 {\n    max-width: unset;\n    width: calc(289 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n\n.contact-us {\n  color: #575349;\n}\n.contact-us .container {\n  max-width: calc(712 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin: 0 auto;\n  padding: calc(195.26 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container {\n    padding-top: calc(67 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-bottom: calc(143.56 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-left: calc(48.52 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-right: calc(48.52 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .description-1,\n.contact-us .container .description-2 {\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(46 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 300;\n  margin: 0;\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .description-1,\n  .contact-us .container .description-2 {\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .description-1 {\n    max-width: calc(276 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .description-2 {\n  max-width: calc(648 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-top: calc(197.26 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .description-2 {\n    max-width: calc(244 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-top: calc(84.72 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .contacts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: calc(76.66 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-top: calc(76.43 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .contacts {\n    gap: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-top: calc(43.72 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .contacts .contact {\n  display: flex;\n  align-items: center;\n  height: calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .contacts .contact {\n    height: calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .contacts .contact:hover .text::before {\n  transform-origin: right;\n  transform: scaleX(0);\n}\n.contact-us .container .contacts .contact .text {\n  color: #575349;\n  font-size: calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n  display: block;\n}\n.contact-us .container .contacts .contact .text::before {\n  content: \"\";\n  position: absolute;\n  bottom: calc(-3 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #575349;\n  opacity: 0.7;\n  transform-origin: left;\n  transition: transform 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .contacts .contact .text {\n    font-size: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(21.47 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .contacts .contact .icon {\n  width: calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-size: 100%;\n  background-repeat: no-repeat;\n  margin-right: calc(21.34 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .contacts .contact .icon {\n    width: calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-right: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.contact-us .container .contacts .contact.phone .icon {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjY2OTMgMTYuODA4NkM0LjY2OTMgMTAuNTQ5NCA5Ljc0MzQxIDUuNDc1MjYgMTYuMDAyNiA1LjQ3NTI2QzIyLjI2MTggNS40NzUyNiAyNy4zMzU5IDEwLjU0OTQgMjcuMzM1OSAxNi44MDg2QzI3LjMzNTkgMjMuMDY3OCAyMi4yNjE4IDI4LjE0MTkgMTYuMDAyNiAyOC4xNDE5QzEzLjc3MyAyOC4xNDE5IDExLjY5NzYgMjcuNDk5NSA5Ljk0NjU4IDI2LjM5MDFDOS42MjA3IDI2LjE4MzcgOS4yMjEzOCAyNi4xMjg1IDguODUxNzIgMjYuMjM4N0w1LjAxMjg2IDI3LjM4NDVMNi40NTgyNSAyNC4wMDIzQzYuNjI5MDkgMjMuNjAyNiA2LjU5NDMzIDIzLjE0NDcgNi4zNjUxIDIyLjc3NTRDNS4yOTAyMSAyMS4wNDMzIDQuNjY5MyAxOS4wMDA1IDQuNjY5MyAxNi44MDg2Wk0xNi4wMDI2IDIuODA4NTlDOC4yNzA2NSAyLjgwODU5IDIuMDAyNjMgOS4wNzY2MSAyLjAwMjYzIDE2LjgwODZDMi4wMDI2MyAxOS4yNTk0IDIuNjMzNDkgMjEuNTY2MyAzLjc0MjE0IDIzLjU3MjJMMS40NDMyMyAyOC45NTEzQzEuMjQgMjkuNDI2OSAxLjMzMDA5IDI5Ljk3NyAxLjY3NDM3IDMwLjM2MjlDMi4wMTg2NSAzMC43NDg5IDIuNTU1MDMgMzAuOTAwOSAzLjA1MDU5IDMwLjc1MjlMOS4wNDk4MiAyOC45NjI2QzExLjA5OTIgMzAuMTM3MyAxMy40NzQyIDMwLjgwODYgMTYuMDAyNiAzMC44MDg2QzIzLjczNDYgMzAuODA4NiAzMC4wMDI2IDI0LjU0MDYgMzAuMDAyNiAxNi44MDg2QzMwLjAwMjYgOS4wNzY2MSAyMy43MzQ2IDIuODA4NTkgMTYuMDAyNiAyLjgwODU5Wk0xOS4wNTkzIDE5LjcxODVMMTcuMzA3IDIwLjk1MjdDMTYuNDg2MyAyMC40ODUzIDE1LjU3OSAxOS44MzI3IDE0LjY2ODkgMTguOTIyNkMxMy43MjI3IDE3Ljk3NjUgMTMuMDIxMyAxNi45OTk3IDEyLjUwNDEgMTYuMTAzN0wxMy42MTc3IDE1LjE1ODVDMTQuMDk1NSAxNC43NTI5IDE0LjIyNjMgMTQuMDY5IDEzLjkzMTkgMTMuNTE1NkwxMi41MTMxIDEwLjg0OUMxMi4zMjIgMTAuNDg5OSAxMS45Nzc1IDEwLjIzNzcgMTEuNTc3NSAxMC4xNjRDMTEuMTc3NCAxMC4wOTAzIDEwLjc2NTcgMTAuMjAzMyAxMC40NTkyIDEwLjQ3MDdMMTAuMDM4NiAxMC44Mzc5QzkuMDI2OTEgMTEuNzIwOCA4LjQyODYxIDEzLjE3MTcgOC45MjQ0OSAxNC42NDA3QzkuNDM4NTggMTYuMTYzNyAxMC41MzU3IDE4LjU2MDYgMTIuNzgzMyAyMC44MDgyQzE1LjIwMTQgMjMuMjI2MyAxNy42NTc3IDI0LjE3ODYgMTkuMDk0MSAyNC41NDg1QzIwLjI1MTQgMjQuODQ2MyAyMS4zNDY2IDI0LjQ0NyAyMi4xMTgzIDIzLjgxODJMMjIuOTA3IDIzLjE3NTVDMjMuMjQ0MyAyMi45MDA3IDIzLjQyNjMgMjIuNDc4NSAyMy4zOTQ2IDIyLjA0NDVDMjMuMzYyNyAyMS42MTA1IDIzLjEyMTEgMjEuMjE5MyAyMi43NDczIDIwLjk5NjVMMjAuNTA5NSAxOS42NjMxQzIwLjA1NzUgMTkuMzkzOSAxOS40ODk1IDE5LjQxNTUgMTkuMDU5MyAxOS43MTg1WiIgZmlsbD0iIzU3NTM0OSIvPgo8L3N2Zz4K\");\n}\n.contact-us .container .contacts .contact.email .icon {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjkxNzQgNy44MjU4MUMzMS43NzMxIDcuMDk5MTkgMzEuNDUwOSA2LjQzNDI1IDMxLjAwMSA1Ljg4NDk0QzMwLjkwNjEgNS43NjUyNSAzMC44MDcgNS42NTgwNiAzMC42OTk2IDUuNTUwODdDMjkuOTAyNCA0Ljc0OTc1IDI4Ljc4MzUgNC4yNSAyNy41NjEyIDQuMjVINC40Mzg4MUMzLjIxNjUgNC4yNSAyLjEwMTYyIDQuNzQ5NzUgMS4zMDA2OSA1LjU1MDg3QzEuMTkzNSA1LjY1ODA2IDEuMDk0MzggNS43NjUyNSAwLjk5OTI1IDUuODg0OTRDMC41NDkwNjIgNi40MzQxOSAwLjIyNjg3NSA3LjA5OTE5IDAuMDg2NjI1IDcuODI1ODFDMC4wMjkgOC4xMDYyNSAwIDguMzk2MDYgMCA4LjY4OTA2VjI0LjkyODZDMCAyNS41NTE2IDAuMTMyMTI1IDI2LjE1MDUgMC4zNjc3NSAyNi42OTEzQzAuNTg2MzEyIDI3LjIwNzYgMC45MDg1NjIgMjcuNjc0NyAxLjMwMDYyIDI4LjA2NjRDMS40IDI4LjE2NTUgMS40OTg2OSAyOC4yNTY2IDEuNjA2MzcgMjguMzQ3MkMyLjM3NDI1IDI4Ljk4MzIgMy4zNjU0NCAyOS4zNjcyIDQuNDM4ODEgMjkuMzY3MkgyNy41NjEyQzI4LjYzNDkgMjkuMzY3MiAyOS42MzA0IDI4Ljk4MzIgMzAuMzkzOSAyOC4zNDMyQzMwLjUwMTIgMjguMjU2NiAzMC42MDA0IDI4LjE2NTUgMzAuNjk5NiAyOC4wNjY0QzMxLjA5MTQgMjcuNjc0NyAzMS40MTM2IDI3LjIwNzYgMzEuNjM2NyAyNi42OTEzVjI2LjY4NzNDMzEuODcyMyAyNi4xNDY1IDMxLjk5OTkgMjUuNTUxNiAzMS45OTk5IDI0LjkyODdWOC42ODkwNkMzMiA4LjM5NjA2IDMxLjk3MTQgOC4xMDYyNSAzMS45MTc0IDcuODI1ODFaTTIuOTA2ODEgNy4xNTY4MUMzLjMwMzM4IDYuNzYwNjkgMy44MzU5NCA2LjUyMDg4IDQuNDM4ODEgNi41MjA4OEgyNy41NjEyQzI4LjE2NDEgNi41MjA4OCAyOC43MDEzIDYuNzYwNjkgMjkuMDkzMiA3LjE1NjgxQzI5LjE2MzMgNy4yMjczOCAyOS4yMjk0IDcuMzA2IDI5LjI4NzcgNy4zODQxMkwxNy4xNjg1IDE3Ljk0NjNDMTYuODM0MyAxOC4yMzkzIDE2LjQyMTQgMTguMzgzOSAxNiAxOC4zODM5QzE1LjU4MjkgMTguMzgzOSAxNS4xNzAyIDE4LjIzOTMgMTQuODMxNiAxNy45NDYzTDIuNzE3IDcuMzc5NjNDMi43NzA2MyA3LjMwMTUgMi44MzY2OSA3LjIyNzM4IDIuOTA2ODEgNy4xNTY4MVpNMi4yNzA4NyAyNC45Mjg2VjkuNzI5NTZMMTEuMDQxMSAxNy4zODA1TDIuMjc1MzEgMjUuMDIzM0MyLjI3MDg3IDI0Ljk5NDMgMi4yNzA4NyAyNC45NjE3IDIuMjcwODcgMjQuOTI4NlpNMjcuNTYxMiAyNy4wOTU5SDQuNDM4ODFDNC4wNDYyNSAyNy4wOTU5IDMuNjc4OTQgMjYuOTkyOCAzLjM2NTQ0IDI2LjgxMTRMMTIuNjE0MSAxOC43NTE1TDEzLjQ3NzUgMTkuNTAyNkMxNC4yMDAxIDIwLjEzMDUgMTUuMTA0MiAyMC40NDg1IDE2IDIwLjQ0ODVDMTYuOTAwNCAyMC40NDg1IDE3LjgwNDUgMjAuMTMwNSAxOC41MjcgMTkuNTAyNkwxOS4zOSAxOC43NTE1TDI4LjYzNSAyNi44MTE0QzI4LjMyMTEgMjYuOTkyOCAyNy45NTM4IDI3LjA5NTkgMjcuNTYxMiAyNy4wOTU5Wk0yOS43MjkxIDI0LjkyODZDMjkuNzI5MSAyNC45NjE3IDI5LjcyOTEgMjQuOTk0MyAyOS43MjQ5IDI1LjAyMzNMMjAuOTU5MSAxNy4zODQ5TDI5LjcyOTEgOS43MzM2M1YyNC45Mjg2WiIgZmlsbD0iIzU3NTM0OSIvPgo8L3N2Zz4K\");\n}\n.contact-us .container .btn {\n  margin-top: calc(64 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(29 / var(--vw) * var(--scaler) * var(--multiplier)) calc(63 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(21.47 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #ECE6DA;\n}\n@media screen and (max-width: 500px) {\n  .contact-us .container .btn {\n    padding: calc(19 / var(--vw) * var(--scaler) * var(--multiplier)) calc(41.5 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(16.7 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/DoubleDesc/DoubleDesc.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/DoubleDesc/DoubleDesc.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":lang(jp) .double-desc.oie1 .container .content-start p,\n:lang(jp) .double-desc.oie1 .container .content-end p {\n  max-width: unset;\n  font-weight: 400;\n}\n:lang(jp) .double-desc.oie1 .container .content-start {\n  margin-left: auto;\n  text-align: right;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.oie1 .container .content-start {\n    margin: 0;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.oie1 .container .content-start p {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n  }\n}\n:lang(jp) .double-desc.oie1 .container .content-end {\n  margin-left: 0;\n}\n:lang(jp) .double-desc.diou1 .container .content-start,\n:lang(jp) .double-desc.diou1 .container .content-end {\n  margin-left: 0;\n}\n:lang(jp) .double-desc.diou1 .container .content-start p,\n:lang(jp) .double-desc.diou1 .container .content-end p {\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.diou1 .container .content-start p,\n  :lang(jp) .double-desc.diou1 .container .content-end p {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n  }\n}\n:lang(jp) .double-desc.diou1 .container .content-end p {\n  max-width: unset;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.diou1 .container .content-end p {\n    margin-left: calc(-31 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: 100vw;\n    padding-left: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-right: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .double-desc.asd32 .container .content-start {\n  margin-left: 0;\n}\n:lang(jp) .double-desc.asd32 .container .content-start p {\n  max-width: calc(1024 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.asd32 .container .content-start p {\n    max-width: unset;\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    width: 100vw;\n    margin-left: calc(-31 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.asd32 .container .content-end {\n    margin: 0;\n  }\n}\n:lang(jp) .double-desc.asd32 .container .content-end p {\n  margin-left: auto;\n  max-width: calc(901 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.asd32 .container .content-end p {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    width: 100vw;\n    margin: 0 auto;\n    line-height: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-left: calc(-31 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .double-desc.asd31 .container .content-start {\n  margin-left: 0;\n}\n:lang(jp) .double-desc.asd31 .container .content-start p {\n  max-width: calc(1024 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.asd31 .container .content-start p {\n    max-width: unset;\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    width: 100vw;\n    margin-left: calc(-31 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .double-desc.asd31 .container .content-end p {\n  margin-left: auto;\n  max-width: calc(955 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.asd31 .container .content-end p {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    width: calc(298 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0 auto;\n    line-height: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .double-desc.dfhiu1 .container .content-start {\n  margin-left: calc(327 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-right: calc(-50 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.dfhiu1 .container .content-start {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n:lang(jp) .double-desc.dfhiu1 .container .content-start p {\n  max-width: unset;\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.dfhiu1 .container .content-start p {\n    font-size: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n  }\n}\n:lang(jp) .double-desc.dfhiu1 .container .content-end {\n  margin-left: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.dfhiu1 .container .content-end {\n    margin: 0 0 0 calc(-31 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .double-desc.dfhiu1 .container .content-end p {\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  max-width: unset;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .double-desc.dfhiu1 .container .content-end p {\n    font-size: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    width: 100vw;\n  }\n}\n\n.double-desc.special-margin .container .content-end {\n  margin-left: calc(557 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc.special-margin .container .content-end {\n    margin-left: unset;\n  }\n}\n\n#editor .double-desc .container .images-wrapper .slider .image {\n  position: relative;\n  opacity: 1 !important;\n}\n#editor .double-desc .container .images-wrapper .slider .image img {\n  transform: scale(1) !important;\n}\n#editor .double-desc .container .images-wrapper .slide-content .slide-progress .line.active {\n  --progress: 1;\n}\n\n.double-desc {\n  margin: calc(197 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(179 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc {\n    margin: calc(64 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.double-desc.hide-left .container .images-wrapper .slider {\n  display: none;\n}\n.double-desc.hide-left .container .images-wrapper .image-end {\n  width: 100%;\n  flex: 1;\n}\n.double-desc.hide-left .container .images-wrapper .image-end img {\n  width: 100%;\n}\n.double-desc.ex-height .container .images-wrapper .image-end img {\n  height: 80vh;\n}\n@media screen and (max-width: 500px) {\n  .double-desc.ex-height .container .images-wrapper .image-end img {\n    height: 25vh;\n  }\n}\n@media screen and (max-width: 500px) {\n  .double-desc.hide-slider .container .images-wrapper .slider {\n    display: none;\n  }\n}\n.double-desc .container {\n  margin: 0 calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container {\n    margin: 0 calc(31 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .content-start {\n  margin-left: calc(572 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .content-start {\n    margin-left: 0;\n    margin-right: calc(27 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .content-start p {\n  margin: 0 0 calc(102 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(46 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 300;\n  max-width: calc(738 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .content-start p {\n    max-width: unset;\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0;\n  }\n}\n.double-desc .container .content-end {\n  margin: calc(116 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0 calc(269 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .content-end {\n    margin: 0 calc(9 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.double-desc .container .content-end.full p {\n  max-width: 100%;\n}\n.double-desc .container .content-end p {\n  margin: 0;\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(46 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 300;\n  max-width: calc(773 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .content-end p {\n    max-width: unset;\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .images-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .images-wrapper {\n    flex-direction: column;\n    margin: calc(34 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n    gap: calc(34 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@keyframes scaleInUp {\n  from {\n    transform: scale(1.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes scaleOutDown {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}\n.double-desc .container .images-wrapper .slider-active .image-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.double-desc .container .images-wrapper .slider-active .image.active img {\n  animation: scaleInUp 1s cubic-bezier(0.32, 0.85, 0.31, 0.93) forwards;\n}\n.double-desc .container .images-wrapper .slider-active .image img,\n.double-desc .container .images-wrapper .slider-active .image video {\n  transform: scale(1.2);\n  animation: scaleOutDown 1s cubic-bezier(0.32, 0.85, 0.31, 0.93) forwards;\n}\n.double-desc .container .images-wrapper .slider {\n  position: relative;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.double-desc .container .images-wrapper .slider .slide-content {\n  border-radius: 8px;\n  background: rgba(34, 29, 25, 0.64);\n  -webkit-backdrop-filter: blur(27.1499996185px);\n          backdrop-filter: blur(27.1499996185px);\n  position: absolute;\n  left: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n  bottom: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(33 / var(--vw) * var(--scaler) * var(--multiplier)) calc(20 / var(--vw) * var(--scaler) * var(--multiplier)) calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(238 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #F9F3E6;\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .images-wrapper .slider .slide-content {\n    border-radius: calc(7 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: unset;\n    right: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .images-wrapper .slider .slide-content .slide-progress {\n  display: flex;\n  margin: 0 calc(-4 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.double-desc .container .images-wrapper .slider .slide-content .slide-progress .line {\n  height: 1px;\n  background-color: rgba(249, 243, 230, 0.2);\n  margin: 0 calc(4 / var(--vw) * var(--scaler) * var(--multiplier));\n  flex: 1;\n  cursor: pointer;\n  position: relative;\n  --origin: left;\n  --progress: 0;\n}\n.double-desc .container .images-wrapper .slider .slide-content .slide-progress .line::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #F9F3E6;\n  transform-origin: var(--origin);\n  transform: scaleX(var(--progress));\n}\n.double-desc .container .images-wrapper .slider .slide-content .slide-progress .line.active {\n  opacity: 1;\n}\n.double-desc .container .images-wrapper .slider .slide-content .slide-progress .line .clickable {\n  cursor: pointer;\n  padding: 35% 0;\n  margin: -35% 0;\n  position: absolute;\n  inset: 0;\n}\n.double-desc .container .images-wrapper .slider .image {\n  position: relative;\n  width: calc(522 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(350 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.4s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n.double-desc .container .images-wrapper .slider .image:not(:first-child) {\n  position: absolute;\n  inset: 0;\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .images-wrapper .slider .image {\n    width: 100%;\n    height: calc(217 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(7 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .images-wrapper .slider .image.active {\n  opacity: 1;\n}\n.double-desc .container .images-wrapper .slider .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.double-desc .container .images-wrapper .slider .image img,\n.double-desc .container .images-wrapper .slider .image video {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.double-desc .container .images-wrapper .image-end {\n  position: relative;\n}\n.double-desc .container .images-wrapper .image-end .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.double-desc .container .images-wrapper .image-end .image-wrapper {\n  width: calc(840 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(493 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .images-wrapper .image-end .image-wrapper {\n    width: 100%;\n    border-radius: calc(7 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.double-desc .container .images-wrapper .image-end img,\n.double-desc .container .images-wrapper .image-end video {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n@media screen and (max-width: 500px) {\n  .double-desc .container .images-wrapper .image-end img,\n  .double-desc .container .images-wrapper .image-end video {\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Hero/Hero.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Hero/Hero.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#editor .hero {\n  position: relative;\n}\n#editor .hero-content h1 {\n  opacity: 1;\n}\n#editor .hero-content p {\n  opacity: 1;\n}\n\n:lang(jp) .hero.basic .hero-content h1 {\n  font-family: \"Bodoni 72\", Arial, Helvetica, sans-serif;\n}\n\n.hero {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n}\n.hero.still {\n  position: relative;\n}\n.hero.shrink {\n  height: 60vh;\n}\n.hero.shrink .hero-content {\n  left: calc(143 / var(--vw) * var(--scaler) * var(--multiplier));\n  bottom: calc(85 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .hero.shrink .hero-content {\n    left: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    bottom: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.hero .image-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  visibility: visible;\n  will-change: transform, width, height;\n}\n.hero .image-wrapper.active {\n  visibility: hidden;\n}\n.hero .image-wrapper.flipping {\n  visibility: visible;\n}\n.hero .image-wrapper .image-picker {\n  z-index: 1;\n}\n.hero .image-wrapper .background-image {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.hero .image-wrapper video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.hero .image-wrapper video.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .hero .image-wrapper video.portrait {\n    display: block;\n  }\n}\n@media screen and (max-width: 500px) {\n  .hero .image-wrapper video.desktop {\n    display: none;\n  }\n}\n.hero-content {\n  position: absolute;\n  bottom: calc(128.69 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(114 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FAF5EA;\n}\n.hero-content h1 {\n  margin: 0;\n  opacity: 0;\n  line-height: calc(72 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .hero-content h1 {\n    line-height: calc(44 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.hero-content p {\n  font-size: calc(15 / var(--vw) * var(--scaler) * var(--multiplier));\n  opacity: 0;\n}\n@media screen and (max-width: 500px) {\n  .hero-content {\n    left: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n    bottom: calc(184 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ImageBackground/ImageBackground.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ImageBackground/ImageBackground.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 500px) {\n  :lang(jp) .image-background.wr4 .content-wrapper {\n    width: calc(100% - 5 / var(--vw) * var(--scaler) * var(--multiplier) * 2);\n    left: calc(5 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .image-background.wr4 .content-wrapper .content-wrapper__content .content-description p {\n  width: calc(502 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .image-background.wr4 .content-wrapper .content-wrapper__content .content-description p {\n    width: calc(317 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n\n.image-background.mb-0 {\n  margin-bottom: 0;\n}\n.image-background.is-selected .slide-wrapper {\n  height: auto;\n}\n.image-background.is-selected .slide-wrapper .image-wrapper {\n  height: 100vh;\n  position: relative;\n  display: block;\n}\n.image-background .slide-wrapper {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n}\n.image-background .master .media {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.image-background .master .content-wrapper {\n  z-index: 999;\n  height: calc(400 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .master .content-wrapper {\n    width: calc(100% - 24 / var(--vw) * var(--scaler) * var(--multiplier) * 2);\n    height: calc(300 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0;\n    left: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: 0;\n    bottom: calc(100 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .master .content-wrapper__content {\n  position: absolute;\n  inset: 0;\n  padding: calc(67 / var(--vw) * var(--scaler) * var(--multiplier)) calc(62 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .master .content-wrapper__content {\n    padding: calc(25 / var(--vw) * var(--scaler) * var(--multiplier)) calc(27 / var(--vw) * var(--scaler) * var(--multiplier)) calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .master .content-wrapper__content:not(:first-child) h2 {\n  border-bottom: 0;\n}\n.image-background .master .content-wrapper__content:not(:first-child) .char {\n  opacity: 0;\n}\n.image-background .image-wrapper,\n.image-background .master {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.image-background .image-wrapper.is-active,\n.image-background .master.is-active {\n  display: block;\n}\n.image-background .image-wrapper .image-picker,\n.image-background .master .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.image-background .image-wrapper .background-image,\n.image-background .image-wrapper video,\n.image-background .master .background-image,\n.image-background .master video {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.image-background .content-wrapper {\n  position: absolute;\n  bottom: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(67 / var(--vw) * var(--scaler) * var(--multiplier)) calc(62 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(565 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.image-background .content-wrapper.left {\n  left: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: unset;\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper.left {\n    left: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper {\n    padding: calc(25 / var(--vw) * var(--scaler) * var(--multiplier)) calc(27 / var(--vw) * var(--scaler) * var(--multiplier)) calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    bottom: calc(17 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: unset;\n    width: auto;\n    margin: 0 calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .content-wrapper__content {\n  position: relative;\n  z-index: 1;\n  color: #FFFFFF;\n}\n.image-background .content-wrapper:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper:before {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .content-wrapper :lang(jp) h2 {\n  font-size: calc(42 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(45 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper :lang(jp) h2 {\n    font-size: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .content-wrapper h2 {\n  margin: 0 0 calc(19 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  font-size: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(55 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: -0.52px;\n  border-bottom: 1px solid #E5DED1;\n  color: #E5DED1;\n  padding-bottom: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper h2 {\n    font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n    margin: 0 0 calc(16 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n    padding-bottom: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.image-background .content-wrapper .content-description {\n  display: flex;\n  flex-direction: column;\n}\n.image-background .content-wrapper .content-description > p {\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-weight: 400;\n  color: #F9F3E6;\n  text-wrap: pretty;\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper .content-description > p {\n    margin: 0;\n  }\n}\n.image-background .content-wrapper .content-description .content-list {\n  flex-shrink: 1;\n  margin-top: calc(61 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding-left: 0;\n  list-style: none;\n  margin-bottom: calc(-8 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper .content-description .content-list {\n    margin-top: 0;\n  }\n}\n.image-background .content-wrapper .content-description .content-list__item {\n  position: relative;\n  padding: calc(8 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(8 / var(--vw) * var(--scaler) * var(--multiplier)) calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.image-background .content-wrapper .content-description .content-list__item:before {\n  content: \"\";\n  width: calc(5 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(5 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  display: block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.image-background .content-wrapper .content-description .content-list__item:not(:last-child) {\n  border-bottom: 1px solid rgba(229, 222, 209, 0.2);\n}\n.image-background .content-wrapper .content-description .content-list__item .btn-delete {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.image-background .content-wrapper .num {\n  display: none;\n  float: right;\n  font-size: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: 0.01em;\n}\n@media screen and (max-width: 500px) {\n  .image-background .content-wrapper .num {\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n    letter-spacing: calc(-0.14 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/LinkHover/LinkHover.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/LinkHover/LinkHover.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".link-hover .container {\n  text-align: center;\n  padding: calc(238 / var(--vw) * var(--scaler) * var(--multiplier)) calc(193 / var(--vw) * var(--scaler) * var(--multiplier)) calc(198 / var(--vw) * var(--scaler) * var(--multiplier));\n  background: #F6F3EB;\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container {\n    padding: calc(80 / var(--vw) * var(--scaler) * var(--multiplier)) calc(45 / var(--vw) * var(--scaler) * var(--multiplier)) calc(65 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container h2 {\n    max-width: calc(189 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0 auto calc(70 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.link-hover .container .link-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 calc(45 / var(--vw) * var(--scaler) * var(--multiplier)) calc(96 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container .link-container {\n    flex-direction: column;\n    margin: 0 0 calc(45 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.link-hover .container .link-container .link-item {\n  position: relative;\n  margin-bottom: calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.link-hover .container .link-container .link-item .link-admin {\n  position: absolute;\n  display: flex;\n  z-index: 1;\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container .link-container .link-item {\n    border-bottom: 1px solid #BFBEBB;\n    text-align: left;\n    padding-bottom: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-bottom: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.link-hover .container .link-container .link-item:not(:first-child):before {\n  content: \"/\";\n  margin: 0 calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container .link-container .link-item:not(:first-child):before {\n    content: none;\n  }\n}\n.link-hover .container .link-container .link-item a, .link-hover .container .link-container .link-item:before {\n  font-size: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(33 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  color: #575349;\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container .link-container .link-item a, .link-hover .container .link-container .link-item:before {\n    font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.link-hover .container .link-container .link-item:after {\n  content: attr(data-index);\n  display: inline-block;\n  font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  opacity: 0.3;\n  vertical-align: top;\n  margin-left: calc(8 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .link-hover .container .link-container .link-item:after {\n    display: none;\n  }\n}\n.link-hover .container .link-container .link-item .image-wrapper {\n  position: absolute;\n  opacity: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ListImage/ListImage.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ListImage/ListImage.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#editor .list-image {\n  height: unset;\n}\n#editor .list-image .container .image-wrapper {\n  flex: 0 0 50%;\n  width: 50%;\n}\n#editor .content-inner {\n  overflow-y: auto;\n}\n#editor .list-wrapper {\n  overflow: auto;\n}\n\n.list-image {\n  height: 100vh;\n}\n@media screen and (max-width: 500px) {\n  .list-image {\n    height: auto;\n  }\n}\n.list-image .container {\n  display: flex;\n  height: 100%;\n  padding: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .list-image .container {\n    flex-direction: column-reverse;\n  }\n}\n.list-image .container .content-wrapper {\n  flex-grow: 1;\n  padding-right: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper {\n    padding-right: 0;\n  }\n}\n.list-image .container .content-wrapper .content-inner {\n  height: 100%;\n  background-color: #9378AE;\n  padding: calc(82 / var(--vw) * var(--scaler) * var(--multiplier)) calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper .content-inner {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    padding: calc(43 / var(--vw) * var(--scaler) * var(--multiplier)) calc(19 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.list-image .container .content-wrapper .content-inner h2 {\n  font-size: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(55 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: calc(-0.52 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #ECE6DA;\n  margin: 0;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper .content-inner h2 {\n    font-size: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n    letter-spacing: calc(-0.38 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.list-image .container .content-wrapper .content-inner p {\n  color: #ECE6DA;\n  max-width: calc(327 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper .content-inner p {\n    max-width: unset;\n  }\n}\n.list-image .container .content-wrapper .content-inner .list-wrapper {\n  margin-top: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: 100%;\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper .content-inner .list-wrapper {\n    margin-top: calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.list-image .container .content-wrapper .content-inner .list-wrapper .list-wrapper-content {\n  padding: calc(50 / var(--vw) * var(--scaler) * var(--multiplier)) calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #8A6EA7;\n  border-radius: calc(4 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .content-wrapper .content-inner .list-wrapper .list-wrapper-content {\n    padding: calc(36 / var(--vw) * var(--scaler) * var(--multiplier)) calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.list-image .container .content-wrapper .content-inner .list-wrapper ul {\n  color: #ECE6DA;\n  padding-left: 0;\n  list-style: none;\n  margin: calc(-16 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n}\n.list-image .container .content-wrapper .content-inner .list-wrapper ul li {\n  position: relative;\n  padding: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-bottom: 1px solid rgba(229, 222, 209, 0.2);\n}\n.list-image .container .content-wrapper .content-inner .list-wrapper ul li:before {\n  content: \"\";\n  display: inline-block;\n  border-radius: 50%;\n  width: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #FFFFFF;\n  top: 50%;\n  left: 0;\n  position: absolute;\n  transform: translateY(-50%);\n}\n.list-image .container .image-wrapper {\n  height: 100%;\n  flex: 0 0 calc(984 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(984 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #575349;\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .image-wrapper {\n    flex: unset;\n    width: 100%;\n    height: calc(434 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    background-color: #9378AE;\n    border-radius: 0;\n    border-top-right-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-top-left-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.list-image .container .image-wrapper .image-picker {\n  z-index: 1;\n}\n.list-image .container .image-wrapper .background-image,\n.list-image .container .image-wrapper video {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.list-image .container .image-wrapper video {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.list-image .container .image-wrapper video.desktop {\n  display: block;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .image-wrapper video.desktop {\n    display: none;\n  }\n}\n.list-image .container .image-wrapper video.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .list-image .container .image-wrapper video.portrait {\n    display: block;\n    border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/MapIntro/MapIntro.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/MapIntro/MapIntro.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 500px) {\n  :lang(jp) .map-intro .container .image-wrapper .description-wrapper h2 {\n    padding-right: 0;\n  }\n}\n\n#editor .map-intro .block-editor-url-input__button {\n  position: absolute;\n  bottom: 0;\n}\n\n.map-intro {\n  padding: calc(156 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(212 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n}\n.map-intro.no-content {\n  padding-bottom: 0;\n}\n@media screen and (max-width: 500px) {\n  .map-intro {\n    padding: calc(32 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0 0;\n  }\n}\n.map-intro .container .image-wrapper {\n  margin: 0 auto;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(1013 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(552 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper {\n    width: auto;\n    height: calc(481 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0 calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .description-wrapper {\n  position: absolute;\n  bottom: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(15 / var(--vw) * var(--scaler) * var(--multiplier)) calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  background: rgba(88, 84, 74, 0.71);\n  -webkit-backdrop-filter: blur(49.4324531555px);\n          backdrop-filter: blur(49.4324531555px);\n  color: #E5DED1;\n  width: calc(277 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.map-intro .container .image-wrapper .description-wrapper.right {\n  left: unset;\n  right: calc(16.07 / var(--vw) * var(--scaler) * var(--multiplier));\n  bottom: calc(15.52 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .description-wrapper.right {\n    bottom: calc(24.77 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(29 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(277 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .description-wrapper {\n    bottom: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: auto;\n    padding: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .description-wrapper .description-link {\n  display: block;\n  position: relative;\n  color: #ECE6DA;\n  margin-top: calc(30.19 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(15.51 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  padding-right: calc(29.52 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding-bottom: calc(8 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: -moz-fit-content;\n  width: fit-content;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .description-wrapper .description-link {\n    margin-top: calc(31.5 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .description-wrapper .description-link:hover::after {\n  transform: translate(calc(1.5 / var(--vw) * var(--scaler) * var(--multiplier)), calc(-1.5 / var(--vw) * var(--scaler) * var(--multiplier)));\n}\n.map-intro .container .image-wrapper .description-wrapper .description-link::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: calc(0.5 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #E5DED1;\n  opacity: 0.5;\n  transition: transform 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n  transform-origin: right;\n}\n.map-intro .container .image-wrapper .description-wrapper .description-link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: calc(3 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: 0;\n  width: calc(9 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(9 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC43Njg1NTUgNi44NDA0OUw2Ljg2ODgxIDAuNzQwMjM0TTYuODY4ODEgMC43NDAyMzRIMS4zNzg1OE02Ljg2ODgxIDAuNzQwMjM0VjYuMjMwNDciIHN0cm9rZT0iI0VDRTZEQSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\");\n  background-size: 100%;\n  opacity: 0.8;\n  transition: transform 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n.map-intro .container .image-wrapper .description-wrapper h2 {\n  margin-bottom: calc(11 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding-bottom: calc(25 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-top: 0;\n  line-height: normal;\n  font-size: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #E5DED1;\n  border-bottom: 1px solid #E5DED1;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .description-wrapper h2 {\n    font-size: calc(25 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-right: calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding-bottom: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .description-wrapper p {\n  margin: 0;\n  font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n.map-intro .container .image-wrapper .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.map-intro .container .image-wrapper .dot {\n  position: absolute;\n  top: calc(272.7 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(533.99 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: white;\n  border-radius: 50%;\n  border: calc(5 / var(--vw) * var(--scaler) * var(--multiplier)) solid #5A8ACC;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .dot {\n    top: calc(214.72 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(144.07 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(11.42 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: calc(11.42 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .logo-container {\n  box-sizing: content-box;\n  position: absolute;\n  top: calc(235.98 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(493.95 / var(--vw) * var(--scaler) * var(--multiplier));\n  cursor: pointer;\n}\n.map-intro .container .image-wrapper .logo-container:hover {\n  padding-bottom: calc(5 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.map-intro .container .image-wrapper .logo-container:hover .logo {\n  transform: translateY(calc(-5 / var(--vw) * var(--scaler) * var(--multiplier)));\n}\n.map-intro .container .image-wrapper .logo-container .logo {\n  width: calc(92.71 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(33.71 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(50.57 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #5A8ACC;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n.map-intro .container .image-wrapper .logo-container .logo img {\n  width: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .logo-container {\n    top: calc(179.78 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(105.97 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(88.22 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: calc(32.08 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(48.12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .image-wrapper .image {\n  width: 100%;\n  height: 100%;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.map-intro .container .image-wrapper .image.desktop {\n  display: block;\n}\n.map-intro .container .image-wrapper .image.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper .image {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n  .map-intro .container .image-wrapper .image.desktop {\n    display: none;\n  }\n  .map-intro .container .image-wrapper .image.portrait {\n    display: block;\n  }\n}\n.map-intro .container .image-wrapper #map {\n  width: 100%;\n  height: 100%;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.map-intro .container .image-wrapper #map.desktop {\n  display: block;\n}\n.map-intro .container .image-wrapper #map.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .image-wrapper #map {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n  .map-intro .container .image-wrapper #map.desktop {\n    display: none;\n  }\n  .map-intro .container .image-wrapper #map.portrait {\n    display: block;\n  }\n}\n.map-intro .container .content-wrapper {\n  margin-top: calc(177 / var(--vw) * var(--scaler) * var(--multiplier));\n  text-align: center;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .content-wrapper {\n    margin-top: calc(147 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.map-intro .container .content-wrapper .text-category {\n  margin: 0;\n}\n.map-intro .container .content-wrapper .text-category:before {\n  content: unset;\n}\n.map-intro .container .content-wrapper h2 {\n  max-width: calc(810 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin: calc(48 / var(--vw) * var(--scaler) * var(--multiplier)) auto 0;\n}\n@media screen and (max-width: 500px) {\n  .map-intro .container .content-wrapper h2 {\n    margin-top: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-bottom: calc(93 / var(--vw) * var(--scaler) * var(--multiplier));\n    max-width: unset;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScaledImage/ScaledImage.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScaledImage/ScaledImage.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scaled-image {\n  width: 100%;\n  height: auto;\n  padding: calc(50 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(173 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image {\n    padding: calc(92 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(103 / var(--vw) * var(--scaler) * var(--multiplier));\n    min-height: 100vh;\n  }\n}\n.scaled-image .container {\n  margin: 0 calc(156 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(156 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container {\n    margin: 0 calc(47 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container h2 {\n    margin: 0 0 calc(48 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.scaled-image .container .image-wrapper {\n  width: calc(572 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(356 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #575349;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  overflow: hidden;\n  z-index: 1;\n  visibility: hidden;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1.05);\n  will-change: transform, width, height;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container .image-wrapper {\n    border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scaled-image .container .image-wrapper.active {\n  visibility: visible;\n}\n.scaled-image .container .image-wrapper video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.scaled-image .container .image-wrapper video.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container .image-wrapper video.portrait {\n    display: block;\n  }\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container .image-wrapper video.desktop {\n    display: none;\n  }\n}\n@media screen and (max-width: 500px) {\n  .scaled-image .container .image-wrapper {\n    width: calc(282 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: calc(282 / var(--vw) * var(--scaler) * var(--multiplier));\n    top: 40%;\n  }\n}\n.scaled-image-content {\n  width: calc(572 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin: calc(543 / var(--vw) * var(--scaler) * var(--multiplier)) auto 0;\n  display: flex;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image-content {\n    flex-direction: column;\n    width: auto;\n    margin: calc(40 / var(--vw) * var(--scaler) * var(--multiplier) + 300 / var(--vw) * var(--scaler) * var(--multiplier)) calc(14 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.scaled-image-content .category-wrapper {\n  flex: 0 0 50%;\n  width: 50%;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image-content .category-wrapper {\n    flex: 1;\n    width: 100%;\n    margin-bottom: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scaled-image-content .description-wrapper {\n  flex: 0 0 calc(373 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(373 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .scaled-image-content .description-wrapper {\n    flex: 1;\n    width: 100%;\n  }\n}\n.scaled-image-content .description-wrapper .text-description {\n  margin-bottom: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  opacity: 0.9;\n  font-weight: 400;\n  font-size: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: 1.4;\n}\n@media screen and (max-width: 500px) {\n  .scaled-image-content .description-wrapper .text-description {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scaled-image-content p {\n  margin: 0;\n}\n\n:lang(jp) .scaled-image-content {\n  padding-top: calc(79 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-left: calc(138 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image-content {\n    padding-top: 0;\n    margin: calc(543 / var(--vw) * var(--scaler) * var(--multiplier)) auto 0;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image .container h2 {\n    font-size: calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .scaled-image .container .category-wrapper {\n  flex: 0 0 calc(143 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(143 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image .container .category-wrapper {\n    flex: 1;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image .container .category-wrapper .text-category {\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n    line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-transform: capitalize;\n    text-align: center;\n    position: relative;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 auto;\n  }\n  :lang(jp) .scaled-image .container .category-wrapper .text-category:before {\n    position: absolute;\n    bottom: calc(-8 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: 50%;\n    transform: translateX(-50%);\n    width: 80%;\n  }\n}\n:lang(jp) .scaled-image .container .description-wrapper {\n  padding-top: 1em;\n  flex: 0 0 calc(962 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(962 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image .container .description-wrapper {\n    flex: 1;\n    width: 100vw;\n    margin-left: calc(-47 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .scaled-image .container .description-wrapper .text-description {\n  font-size: calc(19 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .scaled-image .container .description-wrapper .text-description {\n    font-size: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n    text-align: center;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScrollSlider/ScrollSlider.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScrollSlider/ScrollSlider.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#editor .scroll-slider .slide-wrapper {\n  height: unset;\n}\n#editor .scroll-slider .slide-wrapper .container {\n  height: 100vh;\n}\n#editor .scroll-slider .slide-wrapper .container .media-wrapper .media-item-wrapper {\n  display: block;\n  height: calc(500 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n#editor .scroll-slider .slide-wrapper .container .content-wrapper .slider-action .btn {\n  position: relative;\n}\n#editor .scroll-slider .media-wrapper {\n  flex: 0 0 50%;\n}\n#editor .scroll-slider.is-selected .container {\n  display: flex;\n}\n#editor .container,\n#editor .media-item-wrapper,\n#editor .text-content,\n#editor .slider-action {\n  position: relative;\n}\n#editor .slider-action {\n  background-color: inherit;\n  overflow: initial;\n}\n#editor .slider-action .btn {\n  display: block;\n  background-color: #5D524A;\n  opacity: 1;\n  pointer-events: inherit;\n  top: inherit;\n  left: inherit;\n}\n\n.scroll-slider {\n  background-color: #FAF7F1;\n  position: relative;\n}\n.scroll-slider .slide-wrapper {\n  height: 100vh;\n}\n.scroll-slider .container {\n  height: 100vh;\n  padding: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: absolute;\n  inset: 0;\n  display: flex;\n  gap: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container {\n    height: auto;\n    margin: 0 calc(5 / var(--vw) * var(--scaler) * var(--multiplier));\n    display: block;\n  }\n  .scroll-slider .container.active {\n    display: block;\n  }\n}\n.scroll-slider .container .media-wrapper {\n  height: 100%;\n  flex: 0 0 calc(984 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(984 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n}\n.scroll-slider .container .media-wrapper .media-item-wrapper {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .media-wrapper .media-item-wrapper {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scroll-slider .container .media-wrapper .media-item {\n  will-change: clip-path;\n  height: 100%;\n}\n.scroll-slider .container .media-wrapper .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .media-wrapper {\n    width: 100%;\n    padding: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    background-color: #EDE1C2;\n    border-top-left-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-top-right-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: 27vh;\n    height: 27dvh;\n  }\n}\n.scroll-slider .container .media-wrapper .background-image,\n.scroll-slider .container .media-wrapper video {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.scroll-slider .container .media-wrapper video {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.scroll-slider .container .media-wrapper video.desktop {\n  display: block;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .media-wrapper video.desktop {\n    display: none;\n  }\n}\n.scroll-slider .container .media-wrapper video.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .media-wrapper video.portrait {\n    display: block;\n  }\n}\n.scroll-slider .container .content-wrapper {\n  position: relative;\n  height: 100%;\n  flex: 1;\n  background-color: #ECE6DA;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    padding: calc(34 / var(--vw) * var(--scaler) * var(--multiplier)) calc(23 / var(--vw) * var(--scaler) * var(--multiplier)) calc(14 / var(--vw) * var(--scaler) * var(--multiplier)) calc(19 / var(--vw) * var(--scaler) * var(--multiplier));\n    height: 60vh;\n    height: 60dvh;\n  }\n}\n.scroll-slider .container .content-wrapper:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.scroll-slider .container .content-wrapper .slider-menu {\n  overflow: auto;\n  opacity: 0;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .slider-menu {\n    display: none;\n  }\n}\n.scroll-slider .container .content-wrapper .slider-menu a {\n  float: right;\n  display: block;\n  width: calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #6F6A59;\n  border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.scroll-slider .container .content-wrapper .slider-menu a .line {\n  display: block;\n  width: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: 1px;\n  background-color: #FFFFFF;\n}\n.scroll-slider .container .content-wrapper .text-content,\n.scroll-slider .container .content-wrapper .num,\n.scroll-slider .container .content-wrapper .slider-action {\n  z-index: 1;\n}\n.scroll-slider .container .content-wrapper .text-content-wrapper {\n  position: relative;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .text-content-wrapper {\n    height: 100%;\n    overflow-y: auto;\n    text-overflow: clip;\n  }\n}\n.scroll-slider .container .content-wrapper .text-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .text-content:not(:first-of-type) {\n    opacity: 0;\n    will-change: opacity;\n  }\n}\n.scroll-slider .container .content-wrapper .text-content:not(:first-of-type) .char {\n  opacity: 0;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .text-content:not(:first-of-type) .char {\n    opacity: 1;\n  }\n}\n.scroll-slider .container .content-wrapper .num {\n  margin: calc(19 / var(--vw) * var(--scaler) * var(--multiplier)) calc(16 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  font-weight: 500;\n  position: relative;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .num {\n    display: none;\n  }\n}\n.scroll-slider .container .content-wrapper h2 {\n  margin-top: calc(74 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding-bottom: calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-bottom: 1px solid rgba(93, 82, 74, 0.5);\n  margin-bottom: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #5D524A;\n  font-size: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(55 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: 0.01em;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper h2 {\n    font-size: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: 1.0526315789;\n    letter-spacing: calc(-0.38 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-top: 0;\n    padding-bottom: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-bottom: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scroll-slider .container .content-wrapper p {\n  color: #1D1A16;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper p {\n    margin: 0 calc(15 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0;\n    font-weight: 400;\n  }\n}\n.scroll-slider .container .content-wrapper .slider-action {\n  position: absolute;\n  bottom: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #5D524A;\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .slider-action {\n    bottom: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-top: calc(35 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scroll-slider .container .content-wrapper .slider-action .slider-label {\n  margin-bottom: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(25 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  border-top: 1px solid rgba(93, 82, 74, 0.4);\n  border-bottom: 1px solid rgba(93, 82, 74, 0.4);\n  opacity: 0.6;\n}\n.scroll-slider .container .content-wrapper .slider-action .slider-label .label {\n  font-size: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  margin-bottom: calc(2 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.scroll-slider .container .content-wrapper .slider-action .slider-label .price {\n  font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 500;\n}\n.scroll-slider .container .content-wrapper .slider-action a {\n  width: 100%;\n  display: block;\n  font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(27 / var(--vw) * var(--scaler) * var(--multiplier)) calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.scroll-slider .container .content-wrapper .slider-action a::before {\n  content: none;\n}\n@media screen and (max-width: 500px) {\n  .scroll-slider .container .content-wrapper .slider-action a {\n    padding: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: left;\n    font-size: calc(11 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-transform: uppercase;\n    letter-spacing: calc(1.32 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.scroll-slider .container .content-wrapper .slider-action .btn {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1) 0.1s, background-color 0.4s ease;\n}\n.scroll-slider .container .content-wrapper .slider-action .btn:hover {\n  background-color: #4b433c;\n}\n.scroll-slider .container .content-wrapper .slider-action .btn:first-child {\n  position: relative;\n}\n.scroll-slider .container .content-wrapper .slider-action .btn.active {\n  display: block;\n  opacity: 1;\n  pointer-events: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/SideImage/SideImage.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/SideImage/SideImage.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".side-image .container {\n  display: flex;\n  padding: calc(130 / var(--vw) * var(--scaler) * var(--multiplier)) calc(145 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin: 0 calc(-38 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .side-image .container {\n    padding: 0 calc(37 / var(--vw) * var(--scaler) * var(--multiplier));\n    flex-direction: column;\n    margin: 0 0 calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.side-image .container .content-wrapper {\n  flex: 0 0 51%;\n  width: 51%;\n  padding: calc(53 / var(--vw) * var(--scaler) * var(--multiplier)) calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media screen and (max-width: 500px) {\n  .side-image .container .content-wrapper {\n    flex: unset;\n    width: unset;\n    padding: 0;\n  }\n}\n.side-image .container .content-wrapper .heading {\n  font-size: calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 300;\n}\n@media screen and (max-width: 500px) {\n  .side-image .container .content-wrapper .heading {\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.side-image .container .content-wrapper .description {\n  font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  width: calc(353 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-left: calc(124 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .side-image .container .content-wrapper .description {\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(254 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-left: unset;\n    margin-bottom: calc(53 / var(--vw) * var(--scaler) * var(--multiplier));\n    align-self: flex-end;\n  }\n}\n.side-image .container .image-wrapper {\n  flex: 0 0 49%;\n  width: 49%;\n  padding: 0 calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n}\n@media screen and (max-width: 500px) {\n  .side-image .container .image-wrapper {\n    flex: unset;\n    width: 100%;\n    padding: 0;\n  }\n}\n.side-image .container .image-wrapper .media-wrapper {\n  overflow: hidden;\n  border-radius: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .side-image .container .image-wrapper .media-wrapper {\n    height: calc(333 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.side-image .container .image-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextBackground/TextBackground.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextBackground/TextBackground.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-background {\n  height: 100vh;\n  padding: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n}\n.text-background .image-wrapper {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.text-background .image-wrapper .image-picker {\n  position: absolute;\n  z-index: 1;\n}\n.text-background .image-wrapper .background-image {\n  width: 100%;\n  height: 100%;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-size: cover;\n  background-position: center;\n}\n@media screen and (max-width: 500px) {\n  .text-background .image-wrapper .background-image {\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-background .content-wrapper h2 {\n  position: absolute;\n  top: calc(110 / var(--vw) * var(--scaler) * var(--multiplier));\n  left: calc(110 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FAF5EA;\n  margin: 0;\n}\n@media screen and (max-width: 500px) {\n  .text-background .content-wrapper h2 {\n    top: calc(87 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-background .content-wrapper .description-wrapper {\n  width: calc(516 / var(--vw) * var(--scaler) * var(--multiplier));\n  padding: calc(60 / var(--vw) * var(--scaler) * var(--multiplier)) calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FAF5EA;\n  position: absolute;\n  bottom: calc(60 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: calc(60 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  background: rgba(34, 29, 25, 0.64);\n  -webkit-backdrop-filter: blur(27.1499996185px);\n          backdrop-filter: blur(27.1499996185px);\n}\n@media screen and (max-width: 500px) {\n  .text-background .content-wrapper .description-wrapper {\n    width: calc(273 / var(--vw) * var(--scaler) * var(--multiplier));\n    bottom: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding: calc(42 / var(--vw) * var(--scaler) * var(--multiplier)) calc(31 / var(--vw) * var(--scaler) * var(--multiplier));\n    border-radius: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-background .content-wrapper .description-wrapper p {\n  margin: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextColor/TextColor.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextColor/TextColor.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-color {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #9378AE;\n  color: #FFFFFF;\n}\n.text-color.vp {\n  height: unset;\n  padding: calc(228 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n}\n@media screen and (max-width: 500px) {\n  .text-color.vp {\n    padding: calc(73 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(65 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-color.vp h2 {\n  text-align: center;\n}\n.text-color h2 {\n  text-align: left;\n  font-size: calc(80 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(90 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: 0.01em;\n}\n@media screen and (max-width: 500px) {\n  .text-color h2 {\n    font-size: calc(42 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: 1.0476190476;\n    margin: 0 calc(57 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextImage/TextImage.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextImage/TextImage.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":lang(jp) .text-image.gr4 .container .content-wrapper h2 {\n  margin: 0 calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  text-align: left;\n}\n:lang(jp) .text-image.gr4 .description-inner {\n  padding: calc(45 / var(--vw) * var(--scaler) * var(--multiplier)) calc(30 / var(--vw) * var(--scaler) * var(--multiplier)) calc(45 / var(--vw) * var(--scaler) * var(--multiplier)) calc(56.48 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image.gr4 .description-inner {\n    padding: calc(42 / var(--vw) * var(--scaler) * var(--multiplier)) calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .text-image.gr4 .description-inner p {\n  font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image.gr4 .description-inner p {\n    text-align: center;\n    font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .text-image.gr5.left1 .description-inner.left p {\n  text-align: left;\n  font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image.gr5.left1 .description-inner.left p {\n    font-size: calc(11.5 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(295 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0 auto;\n  }\n}\n:lang(jp) .text-image.gr5 .container .content-wrapper h2 {\n  margin: 0 calc(26 / var(--vw) * var(--scaler) * var(--multiplier));\n  text-align: left;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image.gr5 .description-inner.left {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image.gr5 .description-inner.left p {\n    font-size: calc(11.5 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n    line-height: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n  }\n}\n:lang(jp) .text-image .container {\n  margin: 0 calc(69 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(144 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image .container {\n    margin: 0 calc(39 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(45 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0;\n  }\n}\n:lang(jp) .text-image .container .content-wrapper {\n  margin-left: 0;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image .container .content-wrapper {\n    margin: 0;\n  }\n}\n:lang(jp) .text-image .container .content-wrapper h2 {\n  font-size: calc(64 / var(--vw) * var(--scaler) * var(--multiplier));\n  max-width: unset;\n  border-bottom: 1px solid #FFFFFF;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image .container .content-wrapper h2 {\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n    margin: 0 auto;\n  }\n}\n:lang(jp) .text-image .container .content-wrapper h3 {\n  margin-left: auto;\n  max-width: calc(925 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  line-height: calc(60 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image .container .content-wrapper h3 {\n    font-size: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(30 / var(--vw) * var(--scaler) * var(--multiplier));\n    text-align: center;\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-image .container .content-wrapper h3 div {\n    text-align: center !important;\n  }\n}\n\n.text-image {\n  padding: calc(170 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0;\n  background-color: #5D524A;\n  color: #FAF7F1;\n}\n.text-image.wide .container .content-wrapper {\n  margin-left: 0;\n}\n@media screen and (max-width: 500px) {\n  .text-image.wide .container .content-wrapper {\n    margin-left: unset;\n    margin-right: unset;\n    width: calc(307 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0 auto;\n  }\n}\n.text-image.wide .container .content-wrapper h2 {\n  max-width: calc(773 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin: 0 auto;\n}\n@media screen and (max-width: 500px) {\n  .text-image.wide .container .content-wrapper h2 {\n    max-width: unset;\n  }\n}\n@media screen and (max-width: 500px) {\n  .text-image {\n    padding: calc(88 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0 0;\n  }\n}\n.text-image .container {\n  margin: 0 calc(144 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-image .container {\n    margin: 0;\n  }\n}\n.text-image .container .content-wrapper {\n  margin-left: calc(239 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-bottom: calc(200 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-image .container .content-wrapper {\n    margin: 0 calc(45 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-image .container .content-wrapper h2 {\n  margin: 0 0 calc(66 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  max-width: calc(732 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FAF7F1;\n  font-size: calc(80 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(92 / var(--vw) * var(--scaler) * var(--multiplier));\n  letter-spacing: calc(-0.8 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-image .container .content-wrapper h2 {\n    margin: 0;\n    font-size: calc(42 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(46 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-weight: 400;\n  }\n}\n.text-image .container .content-wrapper h3 {\n  font-size: calc(35 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(43 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 300;\n  max-width: calc(796 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-image .container .content-wrapper h3 {\n    font-size: calc(22 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: 1.2727272727;\n  }\n}\n.text-image .container .content-wrapper .description-wrapper {\n  display: none;\n  position: relative;\n  margin-top: calc(59 / var(--vw) * var(--scaler) * var(--multiplier));\n  margin-bottom: calc(126 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-image .container .content-wrapper .description-wrapper {\n    margin-top: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-bottom: calc(41 / var(--vw) * var(--scaler) * var(--multiplier));\n    flex-direction: column;\n  }\n}\n.text-image .container .content-wrapper .description-wrapper p {\n  margin: 0;\n}\n.text-image .container .content-wrapper .description-wrapper .quote {\n  flex: 0 0 50%;\n  width: 50%;\n}\n@media screen and (max-width: 500px) {\n  .text-image .container .content-wrapper .description-wrapper .quote {\n    flex: 1;\n    width: 100%;\n  }\n}\n.text-image .container .content-wrapper .description-wrapper .quote p {\n  font-weight: 400;\n}\n.text-image .container .content-wrapper .description-wrapper .quote p:before {\n  content: \"\";\n  display: inline-block;\n  width: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: 1px;\n  background-color: #FAF7F1;\n  vertical-align: middle;\n  margin-right: calc(11 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.text-image .frame-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  will-change: transform;\n  transform: scale(1.2);\n}\n.text-image .image-wrapper {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  will-change: transform;\n}\n@media screen and (max-width: 500px) {\n  .text-image .image-wrapper {\n    width: auto;\n    border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-image .image-wrapper .image-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.text-image .image-wrapper .background-image,\n.text-image .image-wrapper video {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.text-image .image-wrapper .background-image.portrait,\n.text-image .image-wrapper video.portrait {\n  display: none;\n}\n@media screen and (max-width: 500px) {\n  .text-image .image-wrapper .background-image.desktop,\n  .text-image .image-wrapper video.desktop {\n    display: none;\n  }\n  .text-image .image-wrapper .background-image.portrait,\n  .text-image .image-wrapper video.portrait {\n    display: block;\n  }\n}\n.text-image .image-wrapper video {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.text-image .description-inner {\n  position: absolute;\n  width: calc(565 / var(--vw) * var(--scaler) * var(--multiplier));\n  bottom: calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-radius: calc(12 / var(--vw) * var(--scaler) * var(--multiplier));\n  background: rgba(34, 29, 25, 0.64);\n  -webkit-backdrop-filter: blur(27.1499996185px);\n          backdrop-filter: blur(27.1499996185px);\n  padding: calc(43 / var(--vw) * var(--scaler) * var(--multiplier)) calc(56 / var(--vw) * var(--scaler) * var(--multiplier));\n  display: block;\n  will-change: transform;\n}\n.text-image .description-inner.left {\n  left: calc(50 / var(--vw) * var(--scaler) * var(--multiplier));\n  right: unset;\n}\n@media screen and (max-width: 500px) {\n  .text-image .description-inner.left {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n@media screen and (max-width: 500px) {\n  .text-image .description-inner {\n    margin-top: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin-left: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    bottom: calc(17 / var(--vw) * var(--scaler) * var(--multiplier));\n    left: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    right: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    margin: 0;\n    width: calc(321 / var(--vw) * var(--scaler) * var(--multiplier));\n    padding: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-image .description-inner p {\n  font-weight: 400;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextIntro/TextIntro.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextIntro/TextIntro.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":lang(jp) .text-intro.opi1 .container h2 {\n  max-width: unset;\n  font-size: calc(45 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .text-intro.opi1 .container h2 {\n    font-size: calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .text-intro.opi1 .container p {\n  max-width: unset;\n  font-size: calc(13 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n\n.text-intro.before-solutions-list .container {\n  padding: calc(134 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0;\n}\n@media screen and (max-width: 500px) {\n  .text-intro.before-solutions-list .container {\n    padding: calc(95 / var(--vw) * var(--scaler) * var(--multiplier)) 0 0;\n  }\n}\n.text-intro.before-related-solutions .container {\n  padding: calc(165 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(111 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-intro.before-related-solutions .container {\n    padding: calc(91 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(58 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-intro .container {\n  padding: calc(200 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  text-align: center;\n}\n@media screen and (max-width: 500px) {\n  .text-intro .container {\n    padding: calc(86 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  }\n}\n.text-intro .container h2 {\n  margin: 0 auto calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #575349;\n  max-width: calc(630 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .text-intro .container h2 {\n    max-width: unset;\n    margin: 0 calc(38 / var(--vw) * var(--scaler) * var(--multiplier)) calc(32 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.text-intro .container p {\n  margin: 0 auto;\n  color: #575349;\n  max-width: calc(450 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  .text-intro .container p {\n    max-width: unset;\n    margin: 0 calc(67 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights .container .content-wrapper .content-item:first-child .btn {\n    margin-top: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:first-child .content-title {\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:first-child .content-desc {\n  width: calc(396 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:first-child .content-desc {\n    width: calc(335 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:last-child .content-title {\n    text-wrap: nowrap;\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:last-child .content-desc {\n  width: calc(488 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.fio1 .container .content-wrapper .content-item:last-child .content-desc {\n    width: calc(349 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item .content-title {\n    text-wrap: nowrap;\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:first-child .content-desc {\n  width: calc(396 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:first-child .content-desc {\n    width: calc(335 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:last-child .content-title {\n  text-wrap: nowrap;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:last-child .content-title {\n    text-wrap: unset;\n  }\n}\n:lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:last-child .content-desc {\n  width: calc(488 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.iro1 .container .content-wrapper .content-item:last-child .content-desc {\n    width: calc(349 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item .content-title {\n  text-wrap: nowrap;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item .content-title {\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item:first-child .content-desc {\n  width: calc(396 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item:first-child .content-desc {\n    width: calc(345 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item:nth-child(2) .content-desc {\n  width: calc(488 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.ip2 .container .content-wrapper .content-item:nth-child(2) .content-desc {\n    width: 100%;\n  }\n}\n:lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item:last-child .content-desc {\n  width: calc(486 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item:last-child .content-desc {\n    width: calc(344 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item .content-title {\n  text-wrap: nowrap;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item .content-title {\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item .content-desc {\n  width: calc(396 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-size: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.e98u32ue .container .content-wrapper .content-item .content-desc {\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    width: calc(345 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.weop1 .content-item:nth-child(1) .content-desc {\n  width: calc(396 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.weop1 .content-item:nth-child(1) .content-desc {\n    width: calc(345 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.weop1 .content-item:nth-child(2) .content-title {\n  text-wrap: nowrap;\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.weop1 .content-item:nth-child(2) .content-title {\n    font-size: calc(23 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n:lang(jp) .three-highlights.weop1 .content-item:nth-child(2) .content-desc {\n  width: calc(488 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  :lang(jp) .three-highlights.weop1 .content-item:nth-child(2) .content-desc {\n    width: 100%;\n  }\n}\n\n.three-highlights .container {\n  display: flex;\n  padding: 0 calc(118 / var(--vw) * var(--scaler) * var(--multiplier)) calc(47 / var(--vw) * var(--scaler) * var(--multiplier)) calc(42 / var(--vw) * var(--scaler) * var(--multiplier));\n  background-color: #F9F3E6;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container {\n    flex-direction: column;\n    padding: 0 calc(20 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.three-highlights .container .image-wrapper {\n  flex: 0 0 61%;\n  width: 61%;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .image-wrapper {\n    flex: unset;\n    width: 100%;\n    margin-bottom: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.three-highlights .container .image-wrapper .media-wrapper {\n  overflow: hidden;\n  border-radius: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: 100%;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .image-wrapper .media-wrapper {\n    border-radius: calc(7 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.three-highlights .container .image-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.three-highlights .container .content-wrapper {\n  flex: 0 0 39%;\n  width: 39%;\n  padding: calc(96 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(96 / var(--vw) * var(--scaler) * var(--multiplier)) calc(118 / var(--vw) * var(--scaler) * var(--multiplier));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper {\n    flex: unset;\n    width: 100%;\n    padding: 0;\n  }\n}\n.three-highlights .container .content-wrapper .content-item {\n  width: 100%;\n}\n.three-highlights .container .content-wrapper .content-item:not(:last-child) {\n  margin-bottom: calc(68 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper .content-item:not(:last-child) {\n    margin-bottom: calc(33 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper .content-item:last-child {\n    margin-bottom: calc(52 / var(--vw) * var(--scaler) * var(--multiplier));\n  }\n}\n.three-highlights .container .content-wrapper .content-item .num {\n  opacity: 0.6;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper .content-item .num {\n    margin: 0;\n  }\n}\n.three-highlights .container .content-wrapper .content-item .content-title {\n  font-size: calc(38 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  letter-spacing: -0.76px;\n  line-height: calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  opacity: 0.9;\n  margin: 0;\n  padding: calc(8 / var(--vw) * var(--scaler) * var(--multiplier)) 0 calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  border-bottom: 1px solid #6F6A59;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper .content-item .content-title {\n    padding: calc(10 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n    margin-bottom: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n    font-size: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n    letter-spacing: -0.56px;\n  }\n}\n.three-highlights .container .content-wrapper .content-item .content-desc {\n  opacity: 0.6;\n  font-weight: 400;\n}\n@media screen and (max-width: 500px) {\n  .three-highlights .container .content-wrapper .content-item .content-desc {\n    margin: 0;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/components/Button/Button.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/components/Button/Button.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn {\n  display: inline-block;\n  padding: calc(5 / var(--vw) * var(--scaler) * var(--multiplier)) 0;\n  color: #575349;\n  text-decoration: none;\n  border-bottom: 1px solid #575349;\n  font-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  font-size: calc(18 / var(--vw) * var(--scaler) * var(--multiplier));\n  line-height: calc(21.47 / var(--vw) * var(--scaler) * var(--multiplier));\n  font-weight: 400;\n  position: relative;\n  margin-left: calc(21 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n@media screen and (max-width: 500px) {\n  .btn {\n    font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n    line-height: calc(24 / var(--vw) * var(--scaler) * var(--multiplier));\n    opacity: 0.9;\n  }\n}\n.btn:before {\n  content: \"\";\n  position: absolute;\n  left: calc(-21 / var(--vw) * var(--scaler) * var(--multiplier));\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-block;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNS43MzQzOCIgY3k9IjUuMTAxNTYiIHI9IjQuNSIgc3Ryb2tlPSIjNTc1MzQ5Ii8+Cjwvc3ZnPgo=);\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-right: calc(11 / var(--vw) * var(--scaler) * var(--multiplier));\n  width: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(10 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.btn-block {\n  padding: calc(35 / var(--vw) * var(--scaler) * var(--multiplier)) calc(40 / var(--vw) * var(--scaler) * var(--multiplier));\n  background: #5D524A;\n  margin-left: 0;\n  color: #FAF5EA;\n  text-transform: uppercase;\n  letter-spacing: calc(1.68 / var(--vw) * var(--scaler) * var(--multiplier));\n  position: relative;\n}\n.btn-block:after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: calc(36 / var(--vw) * var(--scaler) * var(--multiplier));\n  content: \"\";\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA0OSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjAuMTkzMzU5IiB5MT0iMTMuNzM4MyIgeDI9IjM0LjE5MzQiIHkyPSIxMy43MzgzIiBzdHJva2U9IiNGQUY1RUEiLz4KPHBhdGggZD0iTTM0LjE5MzQgMjcuNzM4M0MzMS41MjMzIDI3LjczODMgMjguOTEzMiAyNi45NDY1IDI2LjY5MzIgMjUuNDYzMUMyNC40NzMxIDIzLjk3OTcgMjIuNzQyOCAyMS44NzEzIDIxLjcyMSAxOS40MDQ1QzIwLjY5OTIgMTYuOTM3NyAyMC40MzE5IDE0LjIyMzMgMjAuOTUyOCAxMS42MDQ2QzIxLjQ3MzcgOC45ODU4MiAyMi43NTk0IDYuNTgwMzUgMjQuNjQ3NCA0LjY5MjM0QzI2LjUzNTQgMi44MDQzMyAyOC45NDA5IDEuNTE4NTggMzEuNTU5NiAwLjk5NzY4QzM0LjE3ODQgMC40NzY3NzkgMzYuODkyOCAwLjc0NDEyNSAzOS4zNTk2IDEuNzY1OTFDNDEuODI2NCAyLjc4NzY5IDQzLjkzNDggNC41MTgwMiA0NS40MTgyIDYuNzM4MDhDNDYuOTAxNiA4Ljk1ODE1IDQ3LjY5MzQgMTEuNTY4MiA0Ny42OTM0IDE0LjIzODMiIHN0cm9rZT0iI0ZBRjVFQSIvPgo8L3N2Zz4K\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: block;\n  width: calc(48 / var(--vw) * var(--scaler) * var(--multiplier));\n  height: calc(28 / var(--vw) * var(--scaler) * var(--multiplier));\n}\n.btn-rounded {\n  padding: calc(16 / var(--vw) * var(--scaler) * var(--multiplier));\n  border: none;\n  margin: 0;\n  background: #5D524A;\n  border-radius: calc(6 / var(--vw) * var(--scaler) * var(--multiplier));\n  color: #FFFFFF;\n  font-weight: 400;\n  font-size: calc(14 / var(--vw) * var(--scaler) * var(--multiplier));\n  transition: background 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93), color 0.6s cubic-bezier(0.32, 0.85, 0.31, 0.93);\n}\n.btn-rounded:not(.light):hover {\n  background: #EDE1CB !important;\n  color: #847F75 !important;\n}\n.btn-rounded.light {\n  background: #EDE1CB;\n  color: #847F75;\n}\n.btn-rounded.light:hover {\n  background: #5D524A;\n  color: #ECE6DA;\n}\n.btn-rounded::before {\n  content: unset;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./assets/images/logo-white.svg":
/*!**************************************!*\
  !*** ./assets/images/logo-white.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/wp-content/themes/flow-wp/dist/images/logo-white.svg?de2e46d30b26db8f1159cbf897f96257");

/***/ }),

/***/ "./assets/images/map-desktop.png":
/*!***************************************!*\
  !*** ./assets/images/map-desktop.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/wp-content/themes/flow-wp/dist/images/map-desktop.png?51642d868ae82688089aa2ed82be6d17");

/***/ }),

/***/ "./assets/images/map-mobile.png":
/*!**************************************!*\
  !*** ./assets/images/map-mobile.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/wp-content/themes/flow-wp/dist/images/map-mobile.png?adc5db53d1d93dbdf68854e4b796acaf");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_basePullAt.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePullAt.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/kebabCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/kebabCase.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/pickBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/pickBy.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/remove.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/remove.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePullAt = __webpack_require__(/*! ./_basePullAt */ "./node_modules/lodash/_basePullAt.js");

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./src/scripts/blocks/Amenities/Amenities.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/Amenities/Amenities.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Amenities_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./Amenities.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Amenities/Amenities.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Amenities_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Amenities_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ContactUs/ContactUs.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/ContactUs/ContactUs.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ContactUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ContactUs.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ContactUs/ContactUs.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ContactUs_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ContactUs_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/DoubleDesc/DoubleDesc.scss":
/*!*******************************************************!*\
  !*** ./src/scripts/blocks/DoubleDesc/DoubleDesc.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_DoubleDesc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./DoubleDesc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/DoubleDesc/DoubleDesc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_DoubleDesc_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_DoubleDesc_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/Hero/Hero.scss":
/*!*******************************************!*\
  !*** ./src/scripts/blocks/Hero/Hero.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Hero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./Hero.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/Hero/Hero.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Hero_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Hero_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ImageBackground/ImageBackground.scss":
/*!*****************************************************************!*\
  !*** ./src/scripts/blocks/ImageBackground/ImageBackground.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ImageBackground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ImageBackground.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ImageBackground/ImageBackground.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ImageBackground_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ImageBackground_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/LinkHover/LinkHover.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/LinkHover/LinkHover.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_LinkHover_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./LinkHover.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/LinkHover/LinkHover.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_LinkHover_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_LinkHover_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ListImage/ListImage.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/ListImage/ListImage.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ListImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ListImage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ListImage/ListImage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ListImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ListImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/MapIntro/MapIntro.scss":
/*!***************************************************!*\
  !*** ./src/scripts/blocks/MapIntro/MapIntro.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_MapIntro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./MapIntro.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/MapIntro/MapIntro.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_MapIntro_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_MapIntro_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ScaledImage/ScaledImage.scss":
/*!*********************************************************!*\
  !*** ./src/scripts/blocks/ScaledImage/ScaledImage.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScaledImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ScaledImage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScaledImage/ScaledImage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScaledImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScaledImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ScrollSlider/ScrollSlider.scss":
/*!***********************************************************!*\
  !*** ./src/scripts/blocks/ScrollSlider/ScrollSlider.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScrollSlider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ScrollSlider.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ScrollSlider/ScrollSlider.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScrollSlider_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ScrollSlider_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/SideImage/SideImage.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/SideImage/SideImage.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_SideImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./SideImage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/SideImage/SideImage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_SideImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_SideImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/TextBackground/TextBackground.scss":
/*!***************************************************************!*\
  !*** ./src/scripts/blocks/TextBackground/TextBackground.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextBackground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./TextBackground.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextBackground/TextBackground.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextBackground_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextBackground_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/TextColor/TextColor.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/TextColor/TextColor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextColor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./TextColor.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextColor/TextColor.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextColor_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextColor_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/TextImage/TextImage.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/TextImage/TextImage.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./TextImage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextImage/TextImage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextImage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/TextIntro/TextIntro.scss":
/*!*****************************************************!*\
  !*** ./src/scripts/blocks/TextIntro/TextIntro.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextIntro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./TextIntro.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/TextIntro/TextIntro.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextIntro_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_TextIntro_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss":
/*!*****************************************************************!*\
  !*** ./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ThreeHighlights_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./ThreeHighlights.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/blocks/ThreeHighlights/ThreeHighlights.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ThreeHighlights_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_ThreeHighlights_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/scripts/components/Button/Button.scss":
/*!***************************************************!*\
  !*** ./src/scripts/components/Button/Button.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!../../../../node_modules/webpack-import-glob-loader/index.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./node_modules/webpack-import-glob-loader/index.js!./src/scripts/components/Button/Button.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Button_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_node_modules_webpack_import_glob_loader_index_js_Button_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/scripts/blocks.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_Amenities_Amenities_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/Amenities/Amenities.jsx */ "./src/scripts/blocks/Amenities/Amenities.jsx");
/* harmony import */ var _blocks_ContactUs_ContactUs_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/ContactUs/ContactUs.jsx */ "./src/scripts/blocks/ContactUs/ContactUs.jsx");
/* harmony import */ var _blocks_DoubleDesc_DoubleDesc_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/DoubleDesc/DoubleDesc.jsx */ "./src/scripts/blocks/DoubleDesc/DoubleDesc.jsx");
/* harmony import */ var _blocks_Hero_Hero_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Hero/Hero.jsx */ "./src/scripts/blocks/Hero/Hero.jsx");
/* harmony import */ var _blocks_ImageBackground_ImageBackground_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/ImageBackground/ImageBackground.jsx */ "./src/scripts/blocks/ImageBackground/ImageBackground.jsx");
/* harmony import */ var _blocks_LinkHover_LinkHover_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/LinkHover/LinkHover.jsx */ "./src/scripts/blocks/LinkHover/LinkHover.jsx");
/* harmony import */ var _blocks_ListImage_ListImage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/ListImage/ListImage.jsx */ "./src/scripts/blocks/ListImage/ListImage.jsx");
/* harmony import */ var _blocks_ListPost_ListPost_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/ListPost/ListPost.jsx */ "./src/scripts/blocks/ListPost/ListPost.jsx");
/* harmony import */ var _blocks_MapIntro_MapIntro_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/MapIntro/MapIntro.jsx */ "./src/scripts/blocks/MapIntro/MapIntro.jsx");
/* harmony import */ var _blocks_ScaledImage_ScaledImage_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/ScaledImage/ScaledImage.jsx */ "./src/scripts/blocks/ScaledImage/ScaledImage.jsx");
/* harmony import */ var _blocks_ScrollSlider_ScrollSlider_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/ScrollSlider/ScrollSlider.jsx */ "./src/scripts/blocks/ScrollSlider/ScrollSlider.jsx");
/* harmony import */ var _blocks_SideImage_SideImage_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/SideImage/SideImage.jsx */ "./src/scripts/blocks/SideImage/SideImage.jsx");
/* harmony import */ var _blocks_TextBackground_TextBackground_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/TextBackground/TextBackground.jsx */ "./src/scripts/blocks/TextBackground/TextBackground.jsx");
/* harmony import */ var _blocks_TextColor_TextColor_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/TextColor/TextColor.jsx */ "./src/scripts/blocks/TextColor/TextColor.jsx");
/* harmony import */ var _blocks_TextImage_TextImage_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/TextImage/TextImage.jsx */ "./src/scripts/blocks/TextImage/TextImage.jsx");
/* harmony import */ var _blocks_TextIntro_TextIntro_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/TextIntro/TextIntro.jsx */ "./src/scripts/blocks/TextIntro/TextIntro.jsx");
/* harmony import */ var _blocks_ThreeHighlights_ThreeHighlights_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/ThreeHighlights/ThreeHighlights.jsx */ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.jsx");
/* harmony import */ var _blocks_Amenities_Amenities_script_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/Amenities/Amenities.script.js */ "./src/scripts/blocks/Amenities/Amenities.script.js");
/* harmony import */ var _blocks_ContactUs_ContactUs_script_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/ContactUs/ContactUs.script.js */ "./src/scripts/blocks/ContactUs/ContactUs.script.js");
/* harmony import */ var _blocks_DoubleDesc_DoubleDesc_script_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/DoubleDesc/DoubleDesc.script.js */ "./src/scripts/blocks/DoubleDesc/DoubleDesc.script.js");
/* harmony import */ var _blocks_Hero_Hero_script_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/Hero/Hero.script.js */ "./src/scripts/blocks/Hero/Hero.script.js");
/* harmony import */ var _blocks_ImageBackground_ImageBackground_script_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/ImageBackground/ImageBackground.script.js */ "./src/scripts/blocks/ImageBackground/ImageBackground.script.js");
/* harmony import */ var _blocks_LinkHover_LinkHover_script_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/LinkHover/LinkHover.script.js */ "./src/scripts/blocks/LinkHover/LinkHover.script.js");
/* harmony import */ var _blocks_ListImage_ListImage_script_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/ListImage/ListImage.script.js */ "./src/scripts/blocks/ListImage/ListImage.script.js");
/* harmony import */ var _blocks_ListPost_ListPost_script_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/ListPost/ListPost.script.js */ "./src/scripts/blocks/ListPost/ListPost.script.js");
/* harmony import */ var _blocks_MapIntro_MapIntro_script_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/MapIntro/MapIntro.script.js */ "./src/scripts/blocks/MapIntro/MapIntro.script.js");
/* harmony import */ var _blocks_ScaledImage_ScaledImage_script_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/ScaledImage/ScaledImage.script.js */ "./src/scripts/blocks/ScaledImage/ScaledImage.script.js");
/* harmony import */ var _blocks_ScrollSlider_ScrollSlider_script_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/ScrollSlider/ScrollSlider.script.js */ "./src/scripts/blocks/ScrollSlider/ScrollSlider.script.js");
/* harmony import */ var _blocks_SideImage_SideImage_script_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/SideImage/SideImage.script.js */ "./src/scripts/blocks/SideImage/SideImage.script.js");
/* harmony import */ var _blocks_TextBackground_TextBackground_script_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/TextBackground/TextBackground.script.js */ "./src/scripts/blocks/TextBackground/TextBackground.script.js");
/* harmony import */ var _blocks_TextColor_TextColor_script_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/TextColor/TextColor.script.js */ "./src/scripts/blocks/TextColor/TextColor.script.js");
/* harmony import */ var _blocks_TextImage_TextImage_script_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/TextImage/TextImage.script.js */ "./src/scripts/blocks/TextImage/TextImage.script.js");
/* harmony import */ var _blocks_TextIntro_TextIntro_script_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/TextIntro/TextIntro.script.js */ "./src/scripts/blocks/TextIntro/TextIntro.script.js");
/* harmony import */ var _blocks_ThreeHighlights_ThreeHighlights_script_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/ThreeHighlights/ThreeHighlights.script.js */ "./src/scripts/blocks/ThreeHighlights/ThreeHighlights.script.js");
/* harmony import */ var lodash_kebabCase_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lodash/kebabCase.js */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase_js__WEBPACK_IMPORTED_MODULE_34__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

















var blocks = [_blocks_Amenities_Amenities_jsx__WEBPACK_IMPORTED_MODULE_0__, _blocks_ContactUs_ContactUs_jsx__WEBPACK_IMPORTED_MODULE_1__, _blocks_DoubleDesc_DoubleDesc_jsx__WEBPACK_IMPORTED_MODULE_2__, _blocks_Hero_Hero_jsx__WEBPACK_IMPORTED_MODULE_3__, _blocks_ImageBackground_ImageBackground_jsx__WEBPACK_IMPORTED_MODULE_4__, _blocks_LinkHover_LinkHover_jsx__WEBPACK_IMPORTED_MODULE_5__, _blocks_ListImage_ListImage_jsx__WEBPACK_IMPORTED_MODULE_6__, _blocks_ListPost_ListPost_jsx__WEBPACK_IMPORTED_MODULE_7__, _blocks_MapIntro_MapIntro_jsx__WEBPACK_IMPORTED_MODULE_8__, _blocks_ScaledImage_ScaledImage_jsx__WEBPACK_IMPORTED_MODULE_9__, _blocks_ScrollSlider_ScrollSlider_jsx__WEBPACK_IMPORTED_MODULE_10__, _blocks_SideImage_SideImage_jsx__WEBPACK_IMPORTED_MODULE_11__, _blocks_TextBackground_TextBackground_jsx__WEBPACK_IMPORTED_MODULE_12__, _blocks_TextColor_TextColor_jsx__WEBPACK_IMPORTED_MODULE_13__, _blocks_TextImage_TextImage_jsx__WEBPACK_IMPORTED_MODULE_14__, _blocks_TextIntro_TextIntro_jsx__WEBPACK_IMPORTED_MODULE_15__, _blocks_ThreeHighlights_ThreeHighlights_jsx__WEBPACK_IMPORTED_MODULE_16__];

















var scripts = [_blocks_Amenities_Amenities_script_js__WEBPACK_IMPORTED_MODULE_17__, _blocks_ContactUs_ContactUs_script_js__WEBPACK_IMPORTED_MODULE_18__, _blocks_DoubleDesc_DoubleDesc_script_js__WEBPACK_IMPORTED_MODULE_19__, _blocks_Hero_Hero_script_js__WEBPACK_IMPORTED_MODULE_20__, _blocks_ImageBackground_ImageBackground_script_js__WEBPACK_IMPORTED_MODULE_21__, _blocks_LinkHover_LinkHover_script_js__WEBPACK_IMPORTED_MODULE_22__, _blocks_ListImage_ListImage_script_js__WEBPACK_IMPORTED_MODULE_23__, _blocks_ListPost_ListPost_script_js__WEBPACK_IMPORTED_MODULE_24__, _blocks_MapIntro_MapIntro_script_js__WEBPACK_IMPORTED_MODULE_25__, _blocks_ScaledImage_ScaledImage_script_js__WEBPACK_IMPORTED_MODULE_26__, _blocks_ScrollSlider_ScrollSlider_script_js__WEBPACK_IMPORTED_MODULE_27__, _blocks_SideImage_SideImage_script_js__WEBPACK_IMPORTED_MODULE_28__, _blocks_TextBackground_TextBackground_script_js__WEBPACK_IMPORTED_MODULE_29__, _blocks_TextColor_TextColor_script_js__WEBPACK_IMPORTED_MODULE_30__, _blocks_TextImage_TextImage_script_js__WEBPACK_IMPORTED_MODULE_31__, _blocks_TextIntro_TextIntro_script_js__WEBPACK_IMPORTED_MODULE_32__, _blocks_ThreeHighlights_ThreeHighlights_script_js__WEBPACK_IMPORTED_MODULE_33__];

var registerBlockType = wp.blocks.registerBlockType;
blocks.forEach(function (block, index) {
  if (block["default"].name === "") {
    registerBlockType("media108/list-post", {
      title: "List Post",
      icon: "universal-access-alt",
      category: "common",
      edit: block["default"]
    });
    return;
  }
  registerBlockType("media108/" + lodash_kebabCase_js__WEBPACK_IMPORTED_MODULE_34___default()(block["default"].name), _objectSpread(_objectSpread({}, scripts[index].blockData), {}, {
    edit: function edit(props) {
      return block["default"](_objectSpread(_objectSpread({}, props), {}, {
        edit: true
      }));
    },
    save: block["default"]
  }));
});
})();

/******/ })()
;