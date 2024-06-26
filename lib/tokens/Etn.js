"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEtn = function SvgEtn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#23BEE2",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M14.91 10.102l2.428-2.56a6.951 6.951 0 01-8.69 10.543l6.18-3.184 1.006-.519-.932-.644-.666-.46 1.942-.992.966-.494-.865-.654-1.37-1.036zm-5.82 4.15l-2.264 2.385a6.921 6.921 0 01-1.78-4.64A6.951 6.951 0 0115.68 6.098L9.172 9.453l-1.006.52.932.643.666.46-1.942.993-.966.493.865.655 1.37 1.035zm-2.688 2.833l-.469.493a8.212 8.212 0 01-2.183-5.582C3.75 7.45 7.451 3.75 12 3.75c1.87 0 3.597.625 4.982 1.678l-.676.349A7.53 7.53 0 0012 4.429c-4.174 0-7.57 3.395-7.57 7.567a7.53 7.53 0 001.973 5.088l-.001.001zm11.361-9.99l.471-.495a8.208 8.208 0 012.016 5.396c0 4.547-3.701 8.246-8.25 8.246a8.206 8.206 0 01-4.69-1.466l.693-.357A7.527 7.527 0 0012 19.562c4.174 0 7.57-3.394 7.57-7.566a7.53 7.53 0 00-1.807-4.9v-.001zm-9.632 5.58l2.956-1.51-1.602-1.107 8.872-4.573-4.465 4.7 1.976 1.495-2.955 1.51 1.602 1.107-8.872 4.574 4.465-4.701-1.976-1.495z",
      fill: "white"
    })
  );
};

exports.default = SvgEtn;