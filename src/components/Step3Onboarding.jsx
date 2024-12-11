import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Cat7 from './svgs/Cat7';
import Cat8 from './svgs/Cat8';
import Button3 from './Button3';
import BoxUpload from './svgs/BoxUpload';
const Step3Onboarding = ({moveToPage}) => {
  return (
    <motion.div
      key={2} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 w-full"
    >
      <div className="mt-[59px] ml-[25px] ">
        <h1 className="text-[#533243] font-mulish text-header1 font-header1Weight  ">
          Upload Pictures of Bali
        </h1>
        <span className="w-[343px]  h-[66px] mt-[14px] text-subHeading1 font-dmsans text-[#9393AB] font-generalTextWeight1 ">
          Upload between 5 and 15 pictures of Bali so we can train our AI
          cameraman. Pictures can be of any size (portrait, landscape)
        </span>
        <div className="w-full  mt-[34px] flex flex-col gap-[14px]">
          <div className="flex gap-[18px] items-center">
            <Cat7 />
            <Cat8 />
            <BoxUpload className="h-[100px] w-[100px]" />
          </div>
          <div className="flex gap-[18px] items-center">
            <BoxUpload className="h-[100px] w-[100px]" />
            <BoxUpload className="h-[100px] w-[100px]" />
            <BoxUpload className="h-[100px] w-[100px] opacity-50" />
          </div>
          <div className="flex gap-[18px] items-center">
            <BoxUpload className="h-[100px] w-[100px] opacity-50 " />
            <BoxUpload className="h-[100px] w-[100px] opacity-50 " />
            <BoxUpload className="h-[100px] w-[100px] opacity-50" />
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full mt-[166px] items-center gap-[9px]">
        <Button3 title="See Guidelines"/>
        <Button title="Continue" onClick={moveToPage} page={8} />
      </div>
    </motion.div>
  );
}

export default Step3Onboarding