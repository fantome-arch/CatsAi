import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Cat from './svgs/Cat';
import { Button4 } from './Button4';
const HomePage = ({moveToPage}) => {
  return (
    <motion.div
      key={2} // Unique key for each screen
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to center
      exit={{ x: "-100%" }} // Exit off-screen to the left
      transition={{ duration: 0.5 }}
      className="absolute flex flex-col z-20 h-full w-full bg-[#FE7F70]"
    >
      <div className="flex ml-[27px] mt-[55px] gap-[13.95px]">
        <Cat />
        <h1 className="font-paytone font-generalTextWeight1 text-logoText text-white">
          CATCAMERA
        </h1>
      </div>
      <div className="flex ml-[27px] mt-[15px] w-[339px] h-[175px]">
        <span className="font-mulish font-titleWeight1 text-generalText1 text-white">
          catcamera is a virtual photo studio that lets you generate dozens of
          themed hyper-realistic pictures of your cat. Ever wondered what your
          cat looks like as a super hero? A princess? Or a jedi? Wonder no more.
          Upload a few pictures of your cat and we’ll use our advanced AI to
          generate fun pics you’ll want to share... or keep.
        </span>
      </div>
        <img className='mt-[-50px]' src="https://firebasestorage.googleapis.com/v0/b/portfolio-43d28.appspot.com/o/image_2024-12-12_022833912.png?alt=media&token=def7b528-a6a1-4733-abc7-401df295ef16" />
        <div className='absolute bottom-[91px] flex w-full justify-center items-center '>
          <Button4 title="Get Started" onClick={moveToPage} page={1} />
        </div>
    </motion.div>
  );
}

export default HomePage