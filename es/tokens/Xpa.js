var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgXpa = function SvgXpa(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#4FA784",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.181 9.634L13.1 7.891l-2.08 3.544-2.417-2.803 1.095-.14 1.129 1.325 1.252-2.219-5.512-1.58a.44.44 0 00-.553.525l2.443 9.807 2.622-4.416 2.417 2.803-1.095.14-1.128-1.325-2.483 4.137.368 1.478a.443.443 0 00.735.21l9.472-9.007a.435.435 0 00-.183-.736z",
      fill: "white"
    })
  );
};

export default SvgXpa;