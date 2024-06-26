import React from "react";

const SvgBtm = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#504C4C"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M8.12 11.532l-1.308 2.774.608 2.274 1.55.414 1.923 1.925-.579.581-4.584-1.23-1.23-4.584.923-.921 4.006-4.007-1.309 2.774-1.308 2.774 4.081-4.082-1.464-1.466-1.309 2.774zm2.104 1.575l4.082 4.082 2.274-.61.415-1.549 1.924-1.923.581.579-1.229 4.585-4.585 1.229-4.927-4.929 1.465-1.464zm3.552-2.214L9.694 6.811l-2.275.61-.414 1.547-1.924 1.925-.581-.579 1.23-4.585L10.314 4.5l.921.923 4.005 4.005-1.464 1.465zm1.254-3.888l-1.923-1.924.579-.581 4.585 1.229 1.229 4.585-4.929 4.927-1.464-1.465 4.083-4.083-.61-2.274-1.55-.414z"
      fill="white"
    />
  </svg>
);

export default SvgBtm;
