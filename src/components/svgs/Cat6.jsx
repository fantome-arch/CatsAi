import React from "react";
import Check from "./Check";
import Cross from "./Cross";
const Cat6= () => {
   return (
     <div className=" h-[115px] w-[115px]">
       <div className="absolute">
         <div
           className="absolute z-[55]
left-[97px] top-[-10px]"
         >
           <Cross className=" h-[30px] w-[30px] " />
         </div>
         <img
           className=" z-[54] h-[115px] w-[115px]"
           src="https://s3-alpha-sig.figma.com/img/ffec/44e1/bcaa0757089743f98368bca91cfbaa29?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O53yUJHExd6AI8yS-~66l68fdl-aVarq3H5sYZjlbRkpECHiuKrhaqQJbPsBJVIayUjp3WDvDml3P0Jx~NXPbRz2~5UxM8dogQMIThx-aYX~xj0V9boToG38kE9Amls~eoi91dj9QyvpR3oTmFVXzVMjhAojP6QDNCZLeh161FDgcYYNN9txpgzed6nmAUKLnH8AEERPEeDjNjDq876gPkq~MUpEUOBg5AJP9Omqq~pgAFqpXB4FYG8V5yXNUWV5FGlUPwSigBz~WYewdlUUW~19u05lQYFKk3mtddSGrXgDIWZy-5LnEyc7NN-yD1rnIdZhOU33y9Ji~mddqU0xlQ__"
         />
       </div>
     </div>
   );
};

export default Cat6
