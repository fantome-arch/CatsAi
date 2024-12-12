import React from 'react'

export const Button4 = ({title,onClick,className='',page}) => {
  return (
    <div
      onClick={() => onClick(page)}
      className={`cursor-pointer rounded-[8px]  bg-white w-[355px] h-[55px] ${className} flex justify-center items-center`}
    >
      <span className="text-center font-mulish text-[#333459] font-buttonTitle text-subHeading1">
        {title}
      </span>
    </div>
  );
}
