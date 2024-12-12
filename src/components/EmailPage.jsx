import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Circle from './svgs/Circle';
const EmailPage = ({moveToPage}) => {
   return (
     <motion.div
       key={2} // Unique key for each screen
       initial={{ x: "100%" }} // Start off-screen to the right
       animate={{ x: 0 }} // Animate to center
       exit={{ x: "-100%" }} // Exit off-screen to the left
       transition={{ duration: 0.5 }}
       className="absolute flex flex-col z-20 w-full"
     >
       <div className="mt-[81px] ml-[25px] flex flex-col   ">
         <h1 className="font-mulish font-header1Weight text-header1 text-[#533243]">
           What's your email?
         </h1>
         <span className="text-[#9393AB] mt-[21px] font-dmsans text-subHeading1 font-generalTextWeight1">
           We need this to send you notifications once your pictures are ready.
         </span>
       </div>

       <div className="ml-[29px] mt-[45px] flex flex-col gap-[16px]">
         <input
           type="text"
           placeholder="Your Email"
           className="w-[335px] h-[55px] text-[#533243]
           border placeholder:mt-[18.48px] placeholder:pl-[22px] placeholder-[#C1C1D7] placeholder:text-subHeading2 font-mulish font-subHeading1Weight border-[#D1D1D1] rounded-[8px] bg-white"
         />
         <span className=" font-mulish italic font-generalTextWeight1 text-generalText4 text-[#9393AB]">
           Don’t worry ... we won’t spam you!
         </span>
         <div className="flex w-full items-center justify-center">
           <div className="mt-[378px] w-full flex items-center gap-[9px]">
             <Circle />
             <span className=" font-mulish text-[#9393AB] font-generalTextWeight1 text-generalText5">
               I accept the{" "}
               <span className="cursor-pointer text-[#F16459] underline">
                 Terms and Conditions
               </span>{" "}
               and{" "}
               <span className="cursor-pointer text-[#F16459] underline">
                 Privacy Policy
               </span>
             </span>
           </div>
         </div>
       </div>
       <div className="w-full mt-[22px] flex justify-center items-center">
         <Button title="Continue" onClick={moveToPage} page={0} />
       </div>
     </motion.div>
   );
}

export default EmailPage