"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgHotTub = function SvgHotTub(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    _react2.default.createElement("circle", { cx: 7, cy: 6, r: 2 }),
    _react2.default.createElement("path", { d: "M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z" }),
    _react2.default.createElement("path", { fill: "none", d: "M0 0h24v24H0z" })
  );
};

exports.default = SvgHotTub;