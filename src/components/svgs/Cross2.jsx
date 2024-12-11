import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    className={props.className}
    fill="none"
    viewBox="0 0 21 21"
  >
    <path
      fill="#C1C1D7"
      fillRule="evenodd"
      d="M10.405 20.81c5.746 0 10.405-4.659 10.405-10.405C20.81 4.658 16.15 0 10.405 0 4.658 0 0 4.658 0 10.405S4.658 20.81 10.405 20.81"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M14.116 6.243c-.447.424-7.153 6.793-7.64 7.169"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M14.105 13.884c-.424-.448-6.793-7.153-7.168-7.641"
    ></path>
  </svg>
);

export default SvgIcon;
