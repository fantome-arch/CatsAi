import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Cat3 from "./svgs/Cat3";
import Stars from "./svgs/Stars";
const HowDoesItWork2 = ({ moveToPage }) => {
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
        <Cat3 className="w-[179px] h-[179px]" />
      </div>
      <div className="mt-[26px] flex flex-col justify-center items-center">
        <span className="text-[#333459] font-mulish text-subHeading3 font-titleWeight1">
          We train our AI on your cat
        </span>
        <span className="w-[300px] text-center h-[92px] text-[#333459] font-mulish mt-[30px] font-generalTextWeight1 text-generalText1 ">
          We use advanced AI technology to train our model on your cat's unique
          characteristics. The colors, the paws, the expressions. All is taken
          into account. This can take a bit of time and results are better with
          better photos.
        </span>
      </div>
      <div className="w-full mt-[39px] flex items-center justify-center">
        <Button title="Next" onClick={moveToPage} page={4} />
      </div>
      <div className="flex flex-col  justify-center items-center   mt-[46.99px] ">
        <Stars />
        <span className="mt-[25.29px] text-center w-[237px] flext justify-end h-[52px] text-[#9393AB]  font-mulish font-subHeading1Weight text-generalText2">
          “This app is so fun to use. I created some pretty fun Christmas Cards
          out of it.”
        </span>
      </div>
    </motion.div>
  );
};

export default HowDoesItWork2;
