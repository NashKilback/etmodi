var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgDai = function SvgDai(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "white",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M11.998 2.734l9.192 9.191-9.192 9.191-9.19-9.19 9.19-9.192z",
      fill: "#FFCE45"
    }),
    React.createElement("path", {
      d: "M11.998 14.924l-9.198-3 9.198-9.191 9.2 9.192-9.2 3z",
      fill: "#FEBE44"
    }),
    React.createElement("path", {
      d: "M6 11.325h4.2l1.799-2 1.999 2h4.2l-6.2-6.7L6 11.325z",
      fill: "inherit"
    }),
    React.createElement("path", {
      opacity: 0.42,
      d: "M11.998 21.116V2.733l9.192 9.192-9.192 9.19z",
      fill: "#D9A547"
    })
  );
};

export default SvgDai;