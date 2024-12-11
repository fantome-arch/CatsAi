"use client";
import React from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
const Step1Onboarding = ({moveToPage}) => {
  return (
    <motion.div
      key={1} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 w-full"
    >
      <div className="ml-[25px] mt-[81px] flex flex-col">
        <h1 className="text-[#533243]  font-mulish font-header1Weight text-header1">
          Lets get started...
        </h1>
        <h2 className="mt-[21px]   text-[#9393AB] font-subHeading1Weight font-dmsans  text-subHeading1">
          What is the name of your cat?
        </h2>
      </div>
      <div className="ml-[29px] mt-[45px] ">
        <input
          type="text"
          placeholder="your furry friend name"
          className="w-[335px] h-[55px] text-[#533243]
           border placeholder:mt-[18.48px] placeholder:pl-[22px] placeholder-[#C1C1D7] placeholder:text-subHeading2 font-mulish font-subHeading1Weight border-[#D1D1D1] rounded-[8px] bg-white"
        />
      </div>
      <div className="mt-[16px] ml-[29px]  text-[#9393AB] font-subHeading1Weight font-mulish  text-subHeading1">
        Don’t worry you can add more cats later!
      </div>
      <div className="mt-[466px] w-full flex items-center justify-center">
        <Button title="Continue" onClick={moveToPage} page={2} />
      </div>
    </motion.div>
  );
};

export default Step1Onboarding;
