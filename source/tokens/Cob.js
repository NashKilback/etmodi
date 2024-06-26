import React from "react";

const SvgCob = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#13BF99"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12 18.75H8.598l1.704-2.968h3.396l1.704 2.968H12zM10.303 8.217h-.001L8.598 5.25h6.804l-1.704 2.967h-3.396zm7.499 7.154H17.8h.002l-1.705 2.969-1.698-2.968h.001l1.697-2.969H19.5l-1.698 2.968zM6.198 8.622l1.704-2.968L9.6 8.622l-1.698 2.967H4.5l1.698-2.967zm3.401 6.75H9.6L7.902 18.34l-1.704-2.968-1.698-2.97h3.402L9.6 15.372v.001zm8.203-6.75L19.5 11.59h-3.402l-1.699-2.968 1.698-2.968 1.705 2.968z"
      fill="white"
    />
  </svg>
);

export default SvgCob;
