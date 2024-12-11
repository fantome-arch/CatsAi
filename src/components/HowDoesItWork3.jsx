import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import CatImagesGroup from "./CatImagesGroup";
import Mobile from "./svgs/Mobile";
const HowDoesItWork3 = ({ moveToPage }) => {
  return (
    <motion.div
      key={2} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 w-full"
    >
      <div className="flex flex-col">
        <span className="cursor-pointer underline font-dmsans text-subHeading1 text-[#9393AB] ml-[329px] mt-[38px]">
          Skip
        </span>
        <h1 className="mt-[12px] ml-[24px] text-[#533243]  font-mulish font-header1Weight text-header1 ">
          Here’s how it works..
        </h1>
      </div>
      <div className="w-full mt-[64px]  flex justify-center items-center">
        <Mobile className="w-[164px] h-[164px]" />
      </div>
      <div className="mt-[26px] flex flex-col justify-center items-center">
        <span className="text-[#333459] font-mulish text-subHeading3 font-titleWeight1">
          You pick pictures to generate
        </span>
        <span className="w-[300px] text-center h-[92px] text-[#333459] font-mulish mt-[30px] font-generalTextWeight1 text-generalText1 ">
          Pick from our packs with over 150+ different themed pictures or
          generate your own. Standing in front of the Eiffel tower, acting as a
          super hero or anything else... you're in charge (for a change!)
        </span>
      </div>
      <div className="w-full mt-[39px] flex items-center justify-center">
        <Button title="Next" onClick={moveToPage} page={5} />
      </div>
      <div className="ml-[26.14px] flex mt-[50.27px]  items-center justify-center flex-col w-full    ">
        <CatImagesGroup />

      </div>
    </motion.div>
  );
};

export default HowDoesItWork3;
