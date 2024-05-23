import React from "react";
import FAQCard from "./FAQCard";

function FAQs() {
  return (
    <div className="w-full flex justify-center items-center pt-[23px] pb-[115px]">
      <div className="">
        <h3 className="font-regular text-[#2A2A2A] border-[0.5px] border-[#2A2A2A] px-[15.83px] py-[3.44px] text-[0.875rem] leading-[19.88px] text-center w-max mx-auto">
          FAQ
        </h3>

        <h1 className="mt-[13px] font-semibold text-[1.875rem] leading-[2.438rem] text-center">
          Frequently Asked Questions
        </h1>

        <div className="grid md:grid-cols-2  gap-[30px] mt-[40px]">
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </div>
  );
}

export default FAQs;
