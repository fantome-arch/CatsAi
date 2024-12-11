import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Handle from "./svgs/Handle";
import Cat5 from "./svgs/Cat5";
import Cat6 from "./svgs/Cat6";
const Modal = ({moveToPage}) => {
  return (
    <motion.div
      initial={{ y: "105%" }}
      animate={{ y: "80px" }}
      exit={{ y: "110%" }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-[394px] rounded-lg h-[807px] bg-white absolute z-40"
    >
      <div className="w-full flex justify-center">
        <Handle />
      </div>
      <div className="ml-[29px]  mt-[24px] flex flex-col  ">
        <span className="w-[306px] h-[70px] font-mulish text-header2 text-[#333459] font-titleWeight1 ">
          Pictures you select are really important.
        </span>
        <span className="w-[343px] h-[88px] text-[#9393AB] font-dmsans font-subHeading1Weight text-subHeading1">
          Please review examples of pictures you should upload and those you
          should not. This will influence the quality of the pics we generate
        </span>
        <div className="mt-[27px] flex gap-[29px] ">
          <Cat5 />
          <Cat6 />
        </div>
      </div>
      <div className="mt-[355px] w-full flex items-center justify-center">
        <Button title="Ready to upload" page={7} onClick={moveToPage} />
      </div>
    </motion.div>
  );
};

export default Modal;
