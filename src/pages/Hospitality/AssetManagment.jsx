import React, { useState } from "react";
import HospitalityBanner from "../../components/HospitalityBanner";
import { GoArrowRight } from "react-icons/go";
import Support from "../../components/Support";
import ContactUs from "../../components/ContactUs";
import Integerity from "../../components/Integrity";
import { useNavigate } from "react-router-dom";

const AssetManagment = () => {
  const [currentCareerPage, setCurrentCareerPage] = useState(1);
  const [currentHostpalityPage, setCurrentHostpatilityPage] = useState(0);
  const navigate = useNavigate();
  const hotels = () => {
    navigate("../hospitality/hotelManagement");
  };
  const sports = () => {
    navigate("../hospitality/sportsManagement");
  };

  return (
    <>
      <HospitalityBanner
        currentImage={currentCareerPage}
        currentPageName={"Hotel Managment"}
      />

      <div className="w-full relative ">
        <img
          src={`../assets/images/surgisolbanner.png`}
          alt="banner"
          className="w-full absolute h-full"
        />
        <div className="px-2 md:px-[49px] flex flex-col mx-auto items-center relative pb-5 md:pb-10 2xl:py-[49px]">
          <h2 className="text-[32px] md:text-[45px] xl:text-[50px] 2xl:text-[64px] font-extrabold leading-[83.2px] text-center  md:pb-2">
            Company Name
          </h2>
          <p className="text-base xl:text-lg 2xl:text-[25px] font-medium 2xl:leading-[36px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="pt-10 md:pt-[43px] lg:px-[49px]">
        <div className="">
          <p className="font-bold  text-[24px] text-center leading-[31.2px] text-[#00B4FF]">
            Hospitality
          </p>

          <h1 className="text-[24px] md:text-[40px] xl:text-[50px] font-extrabold text-center leading-[60.25px]">
            Hotel Management
          </h1>

          <p className="font-medium text-[18px]  md:text-[22px] xl:text-[25px] leading-[30px] text-center max-w-[1314px] mx-auto mt-[34px] text-[#2A2A2A70]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </div>
        {/* Tabs Switchers */}
        <div className="w-full mt-[72px]">
          <div className="flex items-center  overflow-scroll md:overflow-hidden  justify-around">
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                  currentHostpalityPage === 0
                    ? "text-[#00B4FF]"
                    : "text-[#2A2A2A]"
                }`}
                onClick={() => setCurrentHostpatilityPage(0)}
              >
                Hotels Management
              </p>

              {currentHostpalityPage === 0 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                  currentHostpalityPage === 1
                    ? "text-[#00B4FF]"
                    : "text-[#2A2A2A]"
                }`}
                onClick={() => setCurrentHostpatilityPage(1)}
              >
                Sports Management
              </p>
              {currentHostpalityPage === 1 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
          </div>
          <div className="h-[1px] bg-[#2A2A2A]" />
     
     
          {currentHostpalityPage === 0 && (
            <div className="flex flex-col md:flex-row w-full justify-between md:pt-10 lg:pt-0 items-center px-5 md:px-0 lg:px-5 ">
              <img
                src="../assets/images/hotel.png"
                alt="hotel"
                className="aspect-[626/626] w-[80%]  mb-5 md:mb-0 md:w-[40%] lg:w-[400px] xl:w-[480px] 2xl:w-auto"
              />

              <div className="md:w-[864px] lg:pr-10">
                <div className="text-[#2A2A2A] font-bold text-4xl xl:text-5xl">
                  Hotel
                </div>
                <div className="text-[#2A2A2A] text-justify font-medium  text-xl xl:text-2xl lg:pl-2 pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <button
                  onClick={hotels}
                  className="my-5  bg-primary px-[13px] py-2 xl:px-3 2xl:px-5 xl:py-3 text-white font-bold text-2xl rounded-md flex gap-2 justify-center items-center"
                >
                  Read
                  <GoArrowRight />
                </button>
              </div>
            </div>
          )}

          {currentHostpalityPage === 1 && (
            <div className="flex flex-col-reverse md:flex-row w-full justify-between  items-center px-5 md:px-0 lg:px-5">
              <div className="lg:w-[864px] lg:pl-10">
                <div className="text-[#2A2A2A] font-bold pt-4 2xl:pt-0 text-4xl xl:text-5xl">
                  Sports
                </div>
                <div className="text-[#2A2A2A] text-justify font-medium  text-xl xl:text-2xl  xl:pl-3 pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <button
                  onClick={sports}
                  className="my-5  bg-primary  px-[13px] py-2 xl:px-3 2xl:px-5 xl:py-3 text-white font-bold text-2xl rounded-md flex gap-2 justify-center items-center"
                >
                  Read
                  <GoArrowRight />
                </button>
              </div>
              <img
                src="../assets/images/sports.png"
                alt="sports"
                className="aspect-[810/505] w-[450px] md:w-[50%] lg:w-[450px] xl:w-[600px] 2xl:w-auto"
              />
            </div>
          )}
        </div>
      </div>
      <Support />
      <ContactUs
        logo={"../assets/images/SurgiSol.png"}
        img={"../assets/images/contact-us-pic.png"}
      />

      <Integerity
        integerityPic={"../assets/images/kennedy.png"}
        Integrity={"Motivation"}
        integerityName={"John F. kennedy"}
        integerityText={"‘’Things do not happen. Things are made to  happen.’’"}
      />
    </>
  );
};

export default AssetManagment;
