
import React, { useState } from 'react'
import Support from './Support';
import ContactUs from './ContactUs'
import Integrity from './Integrity';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function StarupProjectComponent({ currentStartUpPage, setCurrentStartUpPage, data }) {
    const { startup_equipments } = data;
    const navigate = useNavigate()

    return (

        <>
            <div className='w-full relative '>
                <img
                    src={`/assets/images/surgisolbanner.png`}
                    alt='banner'
                    className='w-full absolute h-full'
                />
                <div className='px-5 md:px-[49px] flex flex-col mx-auto items-center relative pb-5 md:pb-10 2xl:py-[49px]'>
                    <h2 className="text-[32px] md:text-[45px] xl:text-[50px] 2xl:text-[64px] font-extrabold leading-[83.2px] text-center  md:pb-2">Ignite Sphere</h2>
                    <p className='text-base xl:text-lg 2xl:text-[25px] font-medium 2xl:leading-[36px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            {/* hero */}
            <div className='pt-10 md:pt-[43px] md:px-[49px]' >

                <div className=''>
                    <p className='font-bold  text-[24px] text-center leading-[31.2px] text-[#00B4FF]'>Healthcare</p>

                    <h1 className='text-[24px] md:text-[40px] xl:text-[50px] font-extrabold text-center leading-[60.25px]'>Medical Equipment's</h1>

                    <p className='font-medium text-[18px]  md:text-[22px] xl:text-[25px] leading-[30px] text-center max-w-[1314px] mx-auto mt-[34px] text-[#2A2A2A70]'>Discover Unrivaled Medical Innovations at UNISOL - Elevating Surgical Precision and Patient Care with Cutting-Edge Technologies.
                    </p>
                </div>
                {/* Tabs Switchers */}
                <div className='w-full mt-[72px]'>
                    <div className='flex items-center  overflow-scroll md:overflow-hidden  justify-around'>
                        <div className='w-max'>
                            <p className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentStartUpPage === 0 ? "text-[#00B4FF]" : "text-[#2A2A2A]"}`} onClick={() => setCurrentStartUpPage(0)}>Agricultue Drone</p>

                            {currentStartUpPage === 0 && <div className='h-[3px] w-full bg-[#00B4FF]' />}

                        </div>
                        <div className='w-max'>
                            <p className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentStartUpPage === 1 ? "text-[#00B4FF]" : "text-[#2A2A2A]"}`} onClick={() => setCurrentStartUpPage(1)}>Medicine Dispenser</p>
                            {currentStartUpPage === 1 && <div className='h-[3px] w-full bg-[#00B4FF]' />}
                        </div>

                        <div className='w-max'>
                            <p className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentStartUpPage === 2 ? "text-[#00B4FF]" : "text-[#2A2A2A]"}`} onClick={() => setCurrentStartUpPage(2)}>Hospital Laundry</p>
                            {currentStartUpPage === 2 && <div className='h-[3px] w-full bg-[#00B4FF]' />}
                        </div>

                    </div>
                    <div className='h-[1px] bg-[#2A2A2A]' />

                </div>

            </div>

            <div className='pt-[43px] pb-[70px] xl:pb-[111px] px-10 xl:px-[49px]' >

                {/* medical equipments */}
                <div className='flex gap-[43px] flex-col'>
                    {startup_equipments?.map((item, i) => <div key={i} className={` w-full flex flex-col ${(i + 1) % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                        <div className='md:flex-1'>
                            <img src={item.img.path} className={ `  h-auto w-[90%] ${item.img.className} ${(i + 1) % 2 === 0 ? 'ml-auto md:w-[80%]' : 'md:w-auto'}`} alt="" />
                        </div>

                        <div className='flex-1 md:mt-0 flex flex-col justify-center'>
                            <h1 className='font-bold  text-[32px] md:text-[40px] xl:text-[50px] leading-[65px]'>{item.name}</h1>

                            <div className='mt-[5px] xl:mt-[40px] font-medium text-[20px] leading-[30.3px]  text-justify text-[#2A2A2A]'>
                                {item?.para?.map((text, i) =>
                                    <p key={i}>
                                        {text}
                                        <br />
                                    </p>)}
                            </div>

                            <button className='py-[14px] xl:py-[22px] px-[15px] xl:px-[21px] mt-[40px] bg-[#00B4FF] rounded-[6px] flex gap-[15px] items-center w-max' onClick={() => navigate(item?.link)}>
                                <p className='font-bold text-[25px] leading-[25px] text-white'>Read More</p>
                                <FaArrowRight fill='white' size={20} />
                            </button>
                        </div>

                    </div>)
                    }


                </div>

            </div>

            <Support />

            {/* <ContactUs logo={'/assets/svg/unisol-logo.svg'} img={'/assets/images/contact-us-pic.png'} /> */}
            <div className='max-w-[1370px] mx-auto'>

                <Integrity
                    integerityPic={"../assets/images/JamesRouse.png"}
                    Integrity={"Profit"}
                    integerityName={"James Rouse"}
                    integerityText={
                        "‘’Profit is not legitimate purpose of business, the legitimate purpose of business is to provide a product or service that people need and do it so well that’s it’s profitable.’’"
                    }
                />
            </div>
        </>
    )
}

export default StarupProjectComponent