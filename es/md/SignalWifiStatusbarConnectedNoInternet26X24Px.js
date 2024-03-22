var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalWifiStatusbarConnectedNoInternet26X24Px = function SvgSignalWifiStatusbarConnectedNoInternet26X24Px(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", {
      fillOpacity: 0.3,
      d: "M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
    }),
    React.createElement("path", { d: "M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" }),
    React.createElement("path", { d: "M0 0h26v24H0z", fill: "none" })
  );
};

export default SvgSignalWifiStatusbarConnectedNoInternet26X24Px;