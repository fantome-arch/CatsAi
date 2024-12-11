import * as React from "react";

const BoxUpload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    className={props.className}
    fill="none"
    viewBox="0 0 100 100"
  >
    <rect
      width="99"
      height="99"
      x="0.5"
      y="0.5"
      stroke="#FE7F70"
      strokeDasharray="2 2"
      rx="4.5"
    ></rect>
    <path
      fill="#FE7F70"
      fillOpacity="0.1"
      d="M0 8a8 8 0 0 1 8-8h84a8 8 0 0 1 8 8v84a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
    ></path>
    <circle
      cx="49.5"
      cy="50.5"
      r="14.5"
      fill="#FE7F70"
      transform="rotate(90 49.5 50.5)"
    ></circle>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M55.697 50.699a.827.827 0 0 0-.828-.828h-4.344v-4.344a.827.827 0 1 0-1.654 0v4.344h-4.343a.827.827 0 0 0 0 1.655h4.343v4.343a.827.827 0 1 0 1.654 0v-4.343h4.344c.457 0 .828-.37.828-.827"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default BoxUpload;
