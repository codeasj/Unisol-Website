import React from "react";
import { FaCheck } from "react-icons/fa";

function WasteManagementCard({ id, title, description,bold, noBoldTitle }) {
  return (
    <div key={id}>
      <div
        className={`${
         bold ||noBoldTitle ? "" : "font-bold"
        } flex items-center gap-5  text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[25px] leading-[28px] 2xl:leading-[16px] `}
      >
        <FaCheck className="text-[#00B4FF]" />
        <p>{title}</p>
      </div>

      <p className="text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] font-medium leading-[24.24px] md:leading-[35px] 2xl:leading-[38px] md:mt-[18px]">
        {description}
      </p>
    </div>
  );
}

export default WasteManagementCard;
