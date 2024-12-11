import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import CatsGroup2 from './svgs/CatsGroup2';
import BoxUpload from './svgs/BoxUpload';
const Step3OnBoarding2 = ({moveToPage}) => {
  return (
    <motion.div
      key={2} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 w-full"
    >
      <div className="mt-[59px] ml-[25px]">
        <h1 className="font-mulish font-header1Weight text-header1 text-[#533243]">
          Let us see the details
        </h1>
        <span className="mt-[14px] text-[#9393AB] font-dmsans text-subHeading1">
          To properly capture all details, we need one of the pictures to be
          focused on Bali’s face, facing the camera and zoomed in on it.
        </span>
      </div>
      <div className="flex flex-col items-center gap-[12px] ">
        <span className="font-mulish font-header1Weight text-subHeading4 text-[#533243]">
          Bali’s head shot
        </span>
        <BoxUpload className="h-[234px] w-[234px]" />
      </div>
      <div className="mt-[34px] flex w-full flex-col items-center">
        <span className="font-mulish text-[#533243] font-generalTextWeight1 text-subHeading4 text-center">
          here are some examples:
        </span>
      </div>
      <div className="w-full flex  mt-[18px] justify-center">
        <CatsGroup2 />
      </div>
      <div className='flex justify-center mt-[140px]'>
        <Button title="Continue" onClick={moveToPage} page={9} />
      </div>
    </motion.div>
  );
}

export default Step3OnBoarding2