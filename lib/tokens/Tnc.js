"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgTnc = function SvgTnc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#FF439B",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.67 10.353l4.224 7.272H6.184l1.403-2.327 6.309.001-1.599-2.61 1.372-2.336zm-4.313 1.692l4.295-7.14L19.5 14.75h-2.808l-3.09-5.37-1.5 2.666-2.745-.001zm3.664 2.714L4.5 14.72l5.855-9.844 1.395 2.36-3.227 5.188h3.125l1.373 2.336z",
      fill: "white"
    })
  );
};

exports.default = SvgTnc;