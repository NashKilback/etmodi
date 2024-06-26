var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgMod = function SvgMod(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#09547D",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      opacity: 0.5,
      d: "M17.239 15.755V6.06l-4.734 4.837 4.734 4.858z",
      fill: "white"
    }),
    React.createElement("path", { d: "M6.75 5.25l.228.234 6.35 6.506L6.75 18.74V5.25z", fill: "white" })
  );
};

export default SvgMod;