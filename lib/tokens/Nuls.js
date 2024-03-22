"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNuls = function SvgNuls(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#82BD39",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M10.802 14.52L12 16.098V19.5l-4.5-1.997V8.714c0-.13.058-.253.159-.34l.512-.438a.477.477 0 01.693.072l4.098 5.374 2.264 1.384v-7.41l-2-.998-.098 4.647L12.069 9.6l-.048-5.1L16.5 6.584v8.748l-1.018.839-3.205-1.79-3.558-4.668-.049 7.09 2.119 1.086.013-3.369z",
      fill: "white"
    })
  );
};

exports.default = SvgNuls;