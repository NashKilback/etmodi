import React from "react";

const SvgGup = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#37DCD8"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M11.992 9.51L9.904 7.405A24.427 24.427 0 0112 4.5c.767.912 1.467 1.88 2.092 2.894l-2.1 2.115zm4.289 2.107c.59 1.651 1.454 3.303.63 4.888a5.627 5.627 0 01-2.334 2.352c-2.714 1.44-6.074.382-7.504-2.352-.832-1.585.137-3.367.728-5.018.54-1.217 1.087-2.34 1.708-3.418l2.483 2.5 2.496-2.513c.657 1.135 1.224 2.304 1.793 3.562v-.001z"
      fill="white"
    />
  </svg>
);

export default SvgGup;
