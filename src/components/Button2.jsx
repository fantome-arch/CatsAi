import React from "react";

export const Button2 = ({ title, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-[8px]  bg-[#FE7F70] w-[355px] h-[55px] ${className} flex justify-center items-center`}
    >
      <span className="text-center font-mulish font-buttonTitle text-subHeading1">
        {title}
      </span>
    </div>
  );
};
