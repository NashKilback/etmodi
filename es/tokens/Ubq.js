var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgUbq = function SvgUbq(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#00EA90",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M13.661 5.631l5.833 3.051-5.62 3.445-.213-6.496zM10.34 18.337l-5.833-3.051 5.62-3.446.213 6.497z",
      fill: "white",
      fillOpacity: 0.698
    }),
    React.createElement("path", {
      d: "M19.494 15.51l-8.11 4.74v-6.652l8.11-4.916v6.827zM4.506 8.46l8.11-4.71v6.626l-8.11 4.91V8.459z",
      fill: "white"
    })
  );
};

export default SvgUbq;