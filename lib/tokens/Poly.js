"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPoly = function SvgPoly(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#4C5A95",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M20.25 8.447l-.033-.53-.163.445-.92.772-1.053.157-.315-.292.923-1.225.945-.274-1.023.021-1.487 1.036-1.394-.096-1.958-.961-1.156.224-3.608 2.885-1.739.537-.716.699-1.279.017-.634 1.133-.89.246.841.11.783-1.015 1.209.242-.023 1.086-.603 1.563-.345 1.446-.372.577.942-.2-.107-.59.801-1.589 1.542-.598.597-.95 1.009-.706 2.002.281 2.017-.85-.341 1.345-.897.079-.256 1.104.767-.492 1.272-.53.994-1.5.063-.708.534.53 1.553.937.883-.403-.052-1.979-.256-.766 1.153-.281.79-.937z",
      fill: "white"
    })
  );
};

exports.default = SvgPoly;