"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgJnt = function SvgJnt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#0050DB",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M12 19.5a2.72 2.72 0 01-1.383-.379l-3.98-2.34a2.838 2.838 0 01-1.387-2.445V9.662a2.848 2.848 0 011.388-2.444l3.979-2.34c.421-.248.9-.378 1.389-.379.484 0 .96.13 1.377.379l3.98 2.34a2.84 2.84 0 011.387 2.445v4.672a2.848 2.848 0 01-1.387 2.445l-3.98 2.34c-.42.248-.897.379-1.383.379zm-2.289-4.822l-.737.75a2.017 2.017 0 001.467.617c1.148-.002 2.08-.948 2.081-2.118v-.638c.315.185.673.282 1.037.281a1.998 1.998 0 001.473-.609l-.736-.75c-.195.2-.46.313-.737.313a1.048 1.048 0 01-1.037-1.056V7.946h-1.037v5.988c0 .585-.464 1.058-1.038 1.058-.277-.001-.542-.114-.736-.314z",
      fill: "white"
    })
  );
};

exports.default = SvgJnt;