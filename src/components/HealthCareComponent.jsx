import Support from "./Support";
import React, { useState } from "react";
import ContactUs from "./ContactUs";
import Integrity from "./Integrity";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HealthCareComponent({
  currentHealthCarePage,
  setCurrentHealthCarePage,
  data,
}) {
  const [playingIndex, setPlayingIndex] = useState(0);
  const { title, medical_equipments, link } = data;
  const navigate = useNavigate();
  // console.log(medical_equipments);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    // fade: true,
    autoplay: false,
    beforeChange: (current, next) => setPlayingIndex(next),
    customPaging: (i) => (
      <div
        className={`flex gap-2 ${
          i === playingIndex ? "text-primary w-8 h-8" : "text-gray-300"
        }`}
      ></div>
    ),
  };

  return (
    <>
      <div className="w-full relative ">
        <img
          src={`/assets/images/surgisolbanner.png`}
          alt="banner"
          className="w-full absolute h-full"
        />
        <div className="px-2 md:px-[49px] flex flex-col mx-auto items-center relative pb-5 md:pb-10 2xl:py-[49px]">
          <h2 className="  text-[32px] md:text-[45px] xl:text-[50px] 2xl:text-[64px] font-extrabold leading-[83.2px] text-center  md:pb-2">
            Surgisol
          </h2>
          <p className=" text-base xl:text-lg 2xl:text-[25px] font-medium 2xl:leading-[36px] ">
            Welcome to SurgiSol Healthcare Solutions Pvt Ltd, your premier
            destination for cutting-edge med-tech solutions in India and beyond.
            Established in June 2017, SurgiSol stands as a beacon of excellence,
            specializing in the distribution of top-tier medical devices,
            instruments, implants, and consumables from renowned global
            manufacturers. At SurgiSol, our core focus extends beyond mere
            distribution. We specialize in fostering partnerships and
            facilitating connections for a diverse range of healthcare projects.
            From liaising on government tenders to overseeing turnkey projects
            and nurturing public-private partnerships, SurgiSol thrives on being
            the conduit for groundbreaking healthcare solutions.
            <br />
            Join us at SurgiSol Healthcare Solutions Pvt Ltd as we continue to
            redefine healthcare solutions and shape the future of the medical
            landscape, one innovation at a time.
          </p>
        </div>
      </div>
      {/* hero */}
      <div className=" pt-10 md:pt-[43px] md:px-[49px]">
        <div className="">
          <p className="font-bold  text-[24px] text-center leading-[31.2px] text-[#00B4FF]">
            Healthcare
          </p>

          <h1 className="text-[24px] md:text-[40px] xl:text-[50px] font-extrabold text-center leading-[60.25px]">
            Medical Equipment&apos;s
          </h1>

          <p className="font-medium text-[18px]  md:text-[22px] xl:text-[25px] leading-[30px] text-center max-w-[1314px] mx-auto mt-[34px] text-[#2A2A2A70]">
            Discover Unrivaled Medical Innovations at UNISOL - Elevating
            Surgical Precision and Patient Care with Cutting-Edge Technologies.
          </p>
        </div>
        {/* Tabs Switchers */}

        <div className="w-full mt-[72px]">
          {/* <Slider {...settings}> */}
            <div className="flex items-center  overflow-scroll md:overflow-hidden  justify-around">
              <div className="w-max">
                <p
                  className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                    currentHealthCarePage === 0
                      ? "text-[#00B4FF]"
                      : "text-[#2A2A2A]"
                  }`}
                  onClick={() => setCurrentHealthCarePage(0)}
                >
                  Visualization System
                </p>

                {currentHealthCarePage === 0 && (
                  <div className="h-[3px] w-full bg-[#00B4FF]" />
                )}
              </div>
              <div className="w-max">
                <p
                  className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                    currentHealthCarePage === 1
                      ? "text-[#00B4FF]"
                      : "text-[#2A2A2A]"
                  }`}
                  onClick={() => setCurrentHealthCarePage(1)}
                >
                  Electro Cautery
                </p>
                {currentHealthCarePage === 1 && (
                  <div className="h-[3px] w-full bg-[#00B4FF]" />
                )}
              </div>

              <div className="w-max">
                <p
                  className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                    currentHealthCarePage === 2
                      ? "text-[#00B4FF]"
                      : "text-[#2A2A2A]"
                  }`}
                  onClick={() => setCurrentHealthCarePage(2)}
                >
                  3 in one Access System
                </p>
                {currentHealthCarePage === 2 && (
                  <div className="h-[3px] w-full bg-[#00B4FF]" />
                )}
              </div>
              <div className="w-max">
                <p
                  className={`mb-[23px] mx-4  font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${
                    currentHealthCarePage === 3
                      ? "text-[#00B4FF]"
                      : "text-[#2A2A2A]"
                  }`}
                  onClick={() => setCurrentHealthCarePage(3)}
                >
                  Other
                </p>
                {currentHealthCarePage === 3 && (
                  <div className="h-[3px] w-full bg-[#00B4FF]" />
                )}
              </div>
            </div>
            <div className="h-[1px] bg-[#2A2A2A]" />
          {/* </Slider> */}
        </div>
      </div>

      <div className="pt-[43px] pb-[70px] xl:pb-[111px] px-10 xl:px-[49px]">
        {/* medical equipments */}
        <div className="flex gap-[43px] flex-col">
          {medical_equipments?.map((item, i) => (
            <div
              key={i}
              className={`w-full flex flex-col  ${
                (i + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className=" md:flex-1">
                <img
                  src={item.img.path}
                  className={ `aspect-[574/510]  h-full ${item.img.className}  ${
                    (i + 1) % 2 === 0 ? "ml-auto md:w-[80%]  " : " "
                  } `}
                  alt=""
                />
              </div>

              <div className="flex-1 mt-10 md:mt-0 flex flex-col justify-center">
                <h1 className="font-bold text-[40px] xl:text-[50px] leading-[65px]">
                  {item.name}
                </h1>

                <p className= "mt-[10px] xl:mt-[40px] font-medium text-[20px] leading-[30.3px]  text-justify text-[#2A2A2A]">
                  {item?.para?.map((text) => (
                    <>
                      {text}
                      <br />
                    </>
                  ))}
                </p>

                <button
                  className="py-[14px] xl:py-[22px] px-[15px] xl:px-[21px] mt-[40px] bg-[#00B4FF] rounded-[6px] flex gap-[15px] items-center w-max"
                  onClick={() => navigate(item?.link)}
                >
                  <p className="font-bold text-[25px] leading-[25px] text-white">
                    Read More
                  </p>
                  <FaArrowRight fill="white" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Support />

      <ContactUs
        logo={"/assets/svg/unisol-logo.svg"}
        img={"/assets/images/contact-us-pic.png"}
      />
      <div className="max-w-[1370px] mx-auto">
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
  );
}

export default HealthCareComponent;
