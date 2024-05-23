import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

export default function OurIndustry() {
  const [playingIndex, setPlayingIndex] = useState(0);

  const industryData = [
    {
      id: 1,
      name: "Healthcare",
      text: "At UNISOL, we believe that collaboration drives progress. We invite you to join hands with us in shaping the future of healthcare. Together, let's create a healthier tomorrow where innovation and compassion intersect for the betterment of humanity. Thank you for choosing UNISOL - Where Precision Meets Care. For inquiries, collaborations, or to explore our range of cutting-edge solutions, reach out to us through the provided contact information.",
    },
    {
      id: 2,
      name: "Startup",
      text: "At UNISOL, we believe that collaboration drives progress. We invite you to join hands with us in shaping the future of healthcare. Together, let's create a healthier tomorrow where innovation and compassion intersect for the betterment of humanity. Thank you for choosing UNISOL - Where Precision Meets Care. For inquiries, collaborations, or to explore our range of cutting-edge solutions, reach out to us through the provided contact information.",
    },
    {
      id: 3,
      name: "Hospitality",
      text: "At UNISOL, we believe that collaboration drives progress. We invite you to join hands with us in shaping the future of healthcare. Together, let's create a healthier tomorrow where innovation and compassion intersect for the betterment of humanity. Thank you for choosing UNISOL - Where Precision Meets Care. For inquiries, collaborations, or to explore our range of cutting-edge solutions, reach out to us through the provided contact information.",
    },
  ];
  const isMobile = useMediaQuery({
    query: "(min-width: 280px) and ( max-width: 768px)",
  });

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
    autoplay: isMobile ? false : true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (current, next) => setPlayingIndex(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div
        className={`flex gap-2 ${
          i === playingIndex ? "text-primary w-8 h-8" : "text-gray-300"
        }`}
      >
        <GoDotFill className="hidden md:block w-20 h-20" />
      </div>
    ),
  };

  

  return (
    <div className="my-10">
      <h1 className="text-xl  font-bold text-center underline underline-offset-8 decoration-primary decoration-2">
        Our Industry
      </h1>
      <div
        style={{ backgroundImage: 'url("/assets/images/our-industry.png")', backgroundSize: "100% 100%", backgroundRepeat: 'no-repeat'  }}
        className="w-full  bg-cover my-5  "
     
     >
        <div className="   bg-gradient-to-r from-black w-auto md:w-full md:h-full">
          <Slider {...settings}>
            {industryData?.map((industry) => (
              <div
                key={industry.id}
                className=" px-5  text-justify md:m-16 md:ml-32 md:bg-opacity-30 md:bg-white md:backdrop-blur-[10px]  text-white   max-w-[600px] shadow-2xl rounded-md"
              >
                <h1 className="text-3xl  font-semibold px-10 py-5">
                  {industry?.name}
                </h1>

                <p className=" md:px-10 text-lg">{industry.text}</p>

                <button className="my-5 md:mx-10   bg-primary w-40 p-3 text-white font-medium rounded-md flex gap-2 justify-center mx-auto  items-center">
                  <span>Read More</span>
                  <span >
                    <GoArrowRight />
                  </span>
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-5 justify-center items-center my-10">
        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row  gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/services.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="">
              <h2 className="text-2xl whitespace-nowrap font-[HouschkaPro-Bold]">
                3,254 +
              </h2>
              <h5 className="font-medium text-center">Services</h5>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/clients.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl   whitespace-nowrap font-[HouschkaPro-Bold]">
                4,865 +
              </h2>
              <h5 className="font-medium  text-center">Clients</h5>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/project.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl  whitespace-nowrap font-[HouschkaPro-Bold]">
                2,654 +
              </h2>
              <h5 className="font-medium  text-center">Project</h5>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/expert.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl whitespace-nowrap  font-[HouschkaPro-Bold]">
                100 +
              </h2>
              <h5 className="font-medium  text-center">Expert Team</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
