import React from "react";
import { FaArrowRight } from "react-icons/fa";
function WasteManagementAboutus({ title, desc, img, imgCheck }) {
  return (
    <div
      className="w-full bg-cover bg-no-repeat relative z-10 "
      style={{
        backgroundImage: 'url("/assets/images/wastemanagementabout.png")',
      }}
    >
      <div className="flex px-5 md:px-[10px] lg:px-[30px] gap-[10px] pt-10 md:pt-[48px] pb-[32px]">
        <div className={ `${imgCheck? "lg:w-[30%]" : "md:w-[30%] "}  hidden md:flex justify-center items-center`}>
          {imgCheck ? (
            ""
          ) : (
            <img src={img} alt="" className="md:w-auto  h-[89px] object-cover" />
          )}
        </div>

        <div className={ ` ${imgCheck? "lg:w-[70%]" : "md:w-[70%] "}`}>
          <div className="flex flex-col   md:gap-[9.63px]">
            <h1 className="font-extrabold text-[1.875rem] leading-[1.875rem]">
              About Us
            </h1>
            <div className="w-[4.591rem] h-[2px] bg-[#00B4FF] "></div>
          </div>

          <div className=" mt-4 md:mt-[38px]">
            <h1 className=" font-semibold  text-[2.4rem] md:text-[3.3rem] 2xl:text-[4rem]  md:leading-[5.2rem]">
              {title}
            </h1>

            <p className=" font-medium  text-[18px] md:text-[1.3rem]  2xl:text-[1.563rem]  md:leading-[1.8rem] xl:leading-[2rem] 2xl:leading-[2.26rem] text-[#2A2A2A] mt-[20px]">
              {desc}
            </p>

            <button className=" px-2  md:px-4 xl:px-[42px] py-3 md:py-4  xl:py-[22px] p-3 rounded-md font-medium bg-primary mt-[20px] flex items-center justify-center gap-4 md:gap-[25px]">
              <p className="text-white font-bold text-[1.563rem] leading-[1.563rem]">
                View
              </p>
              <FaArrowRight size={25} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteManagementAboutus;
