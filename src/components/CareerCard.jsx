import React from 'react'
import { SlLocationPin } from "react-icons/sl";
function CareerCard({ id, title, location, description }) {
    return (
        <div key={id} className='w-full bg-[#2A2A2A] py-[23px] pl-[24px] pr-[55px] border-l-[10px] rounded-[5px] border-l-[#00B4FF] '>
            <h3 className='text-[25px] text-white font-bold leading-[30px] '>{title}</h3>
            <div className='text-white text-2xl font-medium leading-[29px] flex gap-2 items-center mt-2 mb-[13px]'><SlLocationPin /> <p >{location}</p></div>
            <p className='text-xl font-medium leading-[24px] text-white'>{description}</p>

            <button className='flex bg-[#00B4FF] ml-auto text-black w-[150px] h-[44px] items-center justify-center rounded-[5px] font-bold text-[25px] leading-[30px] mt-[26px]'>Apply</button>
        </div>
    )
}

export default CareerCard