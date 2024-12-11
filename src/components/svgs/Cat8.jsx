import React from 'react'
import ThreeDot from './ThreeDot';
const Cat8 = () => {
 return (
   <div className=" h-[100px] w-[100px] rounded-[5px] border border-[#FE7F70]">
     <div className="absolute ">
       <div
         className="absolute z-[55]
left-[33px] top-[50px]"
       >
         <ThreeDot />
       </div>
       <img
         className=" h-[100px] w-[100px] rounded-[5px]"
         src="https://s3-alpha-sig.figma.com/img/5520/4d8d/eb26ec11d200911b74f9c81df03564bf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h4O0yhy-CA--wN7s1JLjvZwwrGn9PMg5PaBW1RRFWoRcHoVJeC3x6ziNsUYVZiF4JAhJBV6sMXyI4KydnmwAY-W9Sqw8Bp8OI8LiNKKM~svj1GHClosa3uETZQav5ZO3n7JUDzJlIPnKFNJYv1n0YU3WKQ3NE5EnLYXil-ZqwHNL-esduuU9MHjyKPg6CpxWY4D59rtTC9-7GJREuNvrkw2Z-BltKAoRuVk9q625RTWV3Zd~F2youlRnh4NJWibpgKNOVQMhtBNPWbo0JwUXfsuwUpZLVrDVCphO-rPffnknChsPwAicZuT1JndaUgCV~NarlpCEsZOb-a1aLbd4-Q__"
       />
     </div>
   </div>
 );
}

export default Cat8