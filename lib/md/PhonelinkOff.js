"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPhonelinkOff = function SvgPhonelinkOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement("path", { d: "M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" })
  );
};

exports.default = SvgPhonelinkOff;