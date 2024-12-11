import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Cat4 from "./svgs/Cat4";
const HowDoesItWork4 = ({ moveToPage }) => {
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
        <Cat4 className="w-[187px] h-[187px]" />
      </div>
      <div className="mt-[26px] flex flex-col justify-center items-center">
        <span className="text-[#333459] font-mulish text-subHeading3 font-titleWeight1">
          We deliver your cat pictures
        </span>
        <span className="w-[300px] text-center h-[92px] text-[#333459] font-mulish mt-[30px] font-generalTextWeight1 text-generalText1 ">
          We’ll then generate these pictures looking just like your cat. It’s
          pretty much like a photoshoot, except you won’t end up full of
          scratches or have to take all the treats out of the closet.
        </span>
      </div>
      <div className="w-full mt-[39px] flex items-center justify-center">
        <Button title="I'm ready" onClick={moveToPage} page={6} />
      </div>
      <div className="ml-[24px] mt-[30px] flex flex-col gap-[14px]">
        <span className="font-mulish text-[#FE7F70] font-buttonTitle text-generalText2">
          Important
        </span>
        <span className="w-[309px] h-[90px] italic text-left font-mulish font-buttonTitle text-generalText1 text-[#9393AB]">
          This is experimental technology and the pictures might not always
          resemble your cat. In such cases you can re-generate them. If this
          still doesn’t work — get in touch! We’ll make it right.
        </span>
      </div>
    </motion.div>
  );
};

export default HowDoesItWork4;
