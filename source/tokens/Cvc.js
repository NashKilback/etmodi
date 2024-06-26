import React from "react";

const SvgCvc = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#3AB03E"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12.87 12.584a1.756 1.756 0 00.998-1.58c0-.97-.796-1.757-1.777-1.757-.983 0-1.78.787-1.78 1.757a1.755 1.755 0 00.999 1.58v2.17h1.56v-2.17zm-.78 5.041c-3.139 0-5.692-2.523-5.692-5.625s2.553-5.625 5.693-5.625a5.694 5.694 0 015.445 3.984h1.962C18.74 7.006 15.712 4.5 12.09 4.5 7.898 4.5 4.5 7.858 4.5 12c0 4.142 3.398 7.5 7.59 7.5 3.622 0 6.65-2.506 7.408-5.859h-1.963a5.694 5.694 0 01-5.445 3.984"
      fill="white"
    />
  </svg>
);

export default SvgCvc;
