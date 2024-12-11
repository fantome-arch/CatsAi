import React from 'react'

const Button3 = ({title}) => {
  return (
    <div
      className={`cursor-pointer rounded-[8px]  bg-[rgba(254,127,112,0.1)] w-[355px] h-[55px]  flex justify-center items-center`}
    >
      <span className="text-center text-[rgba(254,127,112,1)] font-mulish font-buttonTitle text-subHeading1">
        {title}
      </span>
    </div>
  );
}

export default Button3