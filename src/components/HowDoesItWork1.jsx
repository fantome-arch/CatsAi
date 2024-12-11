import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cat1 from "@/components/svgs/Cat1";
import { Button } from "./Button";
import Cat2 from "./svgs/Cat2";
const HowDoesItWork1 = ({ moveToPage }) => {
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
      <div className="w-full mt-[40px]  flex justify-center items-center">
        <Cat1 className="w-[221px] h-[221px]" />
      </div>
      <div className="mt-[26px] flex flex-col justify-center items-center">
        <span className="text-[#333459] font-mulish text-subHeading3 font-titleWeight1">
          Upload Pictures of Your Cat
        </span>
        <span className="w-[300px] text-center h-[92px] text-[#333459] font-mulish mt-[30px] font-generalTextWeight1 text-generalText1 ">
          You can upload up to 25 pictures, but a minimum of 10. These should be
          in different poses, environments, days and focused on your cat only.
          The photos are safely stored.
        </span>
      </div>
      <div className="w-full mt-[39px] flex items-center justify-center">
        <Button title="Next" onClick={moveToPage} page={3} />
      </div>
      <div className="flex w-full justify-center   mt-[46.99px] items-center">
        <div className=" w-[108.6px] h-[105.27px]">
          <Cat2 />
        </div>
        <span className="w-[237px] flext justify-end h-[52px] text-right text-[#9393AB]  font-mulish font-subHeading1Weight text-generalText2">
          “My Julinho just looked sooooo cute”
        </span>
      </div>
    </motion.div>
  );
};

export default HowDoesItWork1;
