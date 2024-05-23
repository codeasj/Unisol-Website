import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
function FAQCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-[10px] xl:p-[27px] mx-5 xl:w-[585px] h-max  ${
        isOpen ? "bg-[#F1F1F1]" : "border-[#CECECE]  border-[1px]"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-[65px]">
        <p className="font-semibold text-[1.25rem] leading-[1.625rem]">
          Why is solid waste management important?
        </p>

        <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer">
          {isOpen ? (
            <RxCross2 size={20} className="text-[20px] text-[#00B4FF]" />
          ) : (
            <FaPlus size={20} fill="#00B4FF" />
          )}
        </div>
      </div>

      {isOpen && (
        <p className="mt-[15px] text-base mb-[27px]">
          Challenges include irregular disposal, insufficient infrastructure,
          and inadequate community participation.
        </p>
      )}
    </div>
  );
}

export default FAQCard;
