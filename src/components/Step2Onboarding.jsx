'use client'
import React,{useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Modal from './Modal';
import { Button2 } from './Button2';
import Check from './svgs/Check';
import Cross from './svgs/Cross';
import { Button } from './Button';
const Step2Onboarding = ({moveToPage}) => {
    const [showModal,setShowModal]=useState(false)
  return (
    <motion.div
      key={2} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 w-full"
    >
      <div className="ml-[25px] mt-[59px] flex flex-col gap-[21px]">
        <h1 className="font-mulish font-header1Weight text-header1 text-[#533243]">
          Picture Guidelines
        </h1>
        <span className="font-dmsans text-subHeading1 font-subHeading1Weight text-[#9393AB]">
          To train our AI model we need a few pictures of Bali. The more (and
          better) pictures we get the more photo-realistic pictures we can
          generate later.
        </span>
      </div>
      <div className="flex  flex-col mt-[22px] ml-[26px] gap-[12px]">
        <div className="flex  h-[36px]  items-center gap-[16px]">
          <Check />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Upload pictures taken in different days and in different
            environments
          </span>
        </div>
        <div className="flex  h-[36px] items-center gap-[16px]">
          <Check />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Ensure there is only one cat in the pictures you choose.
          </span>
        </div>
        <div className="flex h-[36px] items-center gap-[16px]">
          <Check />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Choose different angles and perspectives (sides, front, top etc)
          </span>
        </div>
        <div className="flex  h-[54px] items-center gap-[16px]">
          <Check />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Upload at least a few pictures that are zoomed in on your cat, so we
            can see details like colors, eyes and paws.
          </span>
        </div>
        <div className="flex h-[36px] items-center gap-[16px]">
          <Cross />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Don’t upload pictures of multiple cats or too many pictures with
            humans
          </span>
        </div>
        <div className="flex h-[36px] items-center gap-[16px]">
          <Cross />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Don’t upload pictures taken too far away or where your cat isn’t
            clearly visible
          </span>
        </div>
        <div className="flex h-[36px] items-center gap-[16px]">
          <Cross />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Don’t upload pictures of others or pictures over which you do not
            have ownership.
          </span>
        </div>
        <div className="flex h-[36px] items-center gap-[16px]">
          <Cross />
          <span className="w-[300px] text-[#9393AB] h-[36px] font-dmsans font-generalTextWeight1 text-generalText3">
            Don’t upload pictures of your cat at different ages or where
            physical composition changed.
          </span>
        </div>
      </div>
      <div className="mt-[151px] flex w-full  justify-center ">
        <Button2 title="Continue" onClick={setShowModal} />
      </div>
      <div
        onClick={() => setShowModal(!showModal)}
        className={`absolute z-30 w-full h-full bg-black opacity-50 ${
          !showModal && "hidden"
        }`}
      ></div>
      <AnimatePresence>
        {showModal && (
          <Modal moveToPage={moveToPage} setShowModal={setShowModal} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Step2Onboarding