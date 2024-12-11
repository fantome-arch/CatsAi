import React from "react";
import Check from "./Check.jsx";
import Cross2 from "./Cross2";
const Cat7 = () => {
  return (
    <div className=" h-[100px] w-[100px] rounded-[5px] border border-[#FE7F70]">
      <div className=" absolute">
        <div
          className="absolute z-[55]
left-[86px] top-[-6px]"
        >
          <Cross2 className=" h-[21.81px] w-[21.81px] " />
        </div>
        <img
          className=" h-[100px] w-[100px] rounded-[5px]"
          src="https://s3-alpha-sig.figma.com/img/f7cb/d9b9/a7671d3fbd491da337f11872694e5658?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0cttSDJhuVD3gbhoTz6oni--yJZZ~7tMK3YpriQweSHOF91XeCStJMPOf1RoEMRglBwMHumV0LnKhEKzxyGm2s9PlIJfMl-ebb8zdPKAFVQNL6nUqhus4dty~zq-5MeF-gw7DwIO5wi-WrCmM4HbVoFgjk5yepYLh-v2fHk0jKigmlkc6nZ4kSm4lDEkeoghpQ2nA-NbUezXu4K6Zyqp215G1zaAitzOslxsGHLzs~bdZ01rb5KfvE1tC3~EP2lxGH14~33bSbXglbHZ26YvF5KXmsiSr53wLehcRZrNv253YzeAHVJl-oYQ8x6VA2h5NFy2NOiMRsg4fIH8vYHMA__"
        />
      </div>
    </div>
  );
};

export default Cat7;
