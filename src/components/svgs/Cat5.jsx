import React from "react";
import Check from "./Check.jsx";
import Cross from "./Cross";
const Cat5 = () => {
  return (
    <div className=" h-[115px] w-[115px]">
      <div className="absolute">
        <div
          className="absolute z-[55]
left-[97px] top-[-10px]"
        >
          <Check className=" h-[30px] w-[30px] " />
        </div>
        <img
          className=" h-[115px] w-[115px]"
          src="https://s3-alpha-sig.figma.com/img/6855/f465/0cbbc503a43534214a4f3b658a95f274?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKsbiRygCqBSUaPcs5xdOMrrTfn8C0NkLZ4EmIWf5FeYd0mRrmZMPKajvdKR-QWCL1EliHyD5BAOMveoO2BXIt97ja-oosry9zXrm6HtWHh-PKV9p4gocF1IkkUh7D4lW~tnXf5goWcLAzxJs2anP3Bw0pPnP4hTBFpKHPwfkTzBBx7mU0q7vGpBsGkj0lxPHcGaiTq4dtlMz8-sr1mDFRYVstACSkspq6NaFgdM2xAb8xDFixFfI0bfjCzmuptTCYq9MCCDTOWOzdNwouHQsXqKzWti0m7Pn2KSfrkEuJoMLrCn6HMM1XQj5Ssv0zvI23Lr4ekjp9KaMV-tOrXYbA__"
        />
      </div>
    </div>
  );
};

export default Cat5;
