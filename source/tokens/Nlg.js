import React from "react";

const SvgNlg = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#2AB0FD"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.136 11.103c.124-.002.203.015.252.06.053.048.074.126.085.248.35 4.034-2.701 7.681-6.748 8.055-4.173.386-7.796-2.625-8.192-6.81-.386-4.064 2.666-7.751 6.74-8.122 2.306-.21 4.299.515 5.976 2.112.017.017.013.086-.006.106-.377.383-.757.763-1.14 1.14-.022.021-.1.018-.124-.004-1.73-1.585-3.735-2.054-5.927-1.256-2.217.808-3.486 2.48-3.737 4.835-.338 3.187 2.068 5.996 5.276 6.238 2.909.22 5.544-1.84 6.027-4.713.004-.029-.06-.1-.093-.1-1.797-.005-3.593-.004-5.388-.01-.047 0-.133-.087-.135-.134-.01-.502-.01-1.004 0-1.506.001-.045.081-.126.125-.127 1.197-.007 5.87.004 7.008-.013l.001.001z"
      fill="white"
    />
  </svg>
);

export default SvgNlg;
