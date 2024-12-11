import * as React from "react";

const Cross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    className={props.className}
    viewBox="0 0 30 30"
  >
    <path
      fill="#F16459"
      fillRule="evenodd"
      d="M15 30c8.284 0 15-6.716 15-15S23.284 0 15 0 0 6.716 0 15s6.716 15 15 15"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20.35 9c-.645.611-10.312 9.793-11.015 10.335"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20.335 20.016C19.723 19.37 10.54 9.704 10 9"
    ></path>
  </svg>
);

export default Cross;
