import React, { useState } from "react";
import ContactUs from "./ContactUs";

import CareerCard from "./CareerCard";

const jobs = [
  {
    id: 1,
    title: "Data science Engineer, Geospatial",
    location: "Noida, India",
    description:
      "Lorem Ipsum is simply dummy text of the printing dummy text of the printing lorem Ipsum is simply dummy text of the printing dummy text of the printing Lorem Ipsum is simply dummy text .",
  },
  {
    id: 2,
    title: "Data science Engineer, Geospatial",
    location: "Noida, India",
    description:
      "Lorem Ipsum is simply dummy text of the printing dummy text of the printing lorem Ipsum is simply dummy text of the printing dummy text of the printing Lorem Ipsum is simply dummy text .",
  },
  {
    id: 3,
    title: "Data science Engineer, Geospatial",
    location: "Noida, India",
    description:
      "Lorem Ipsum is simply dummy text of the printing dummy text of the printing lorem Ipsum is simply dummy text of the printing dummy text of the printing Lorem Ipsum is simply dummy text .",
  },
];

function CareersComponent({ currentCareerPage, setCurrentCareerPage }) {
  return (
    <>
      {currentCareerPage === 2 && (
        <div className="flex flex-col items-center justify-center mt-[60px] ">
          <h1 className="text-[28px] md:text-[50px] leading-[60.25px] font-extrabold">
            Open <span className="text-[#00B4FF]">Position</span> in all
            locations
          </h1>

          <p className=" text-[20px] mb-4 md:mb-0 md:text-[25px] px-5 font-medium leading-[30px] text-center  text-[#2A2A2A] md:mt-[34px]">
            There are open positions available across all locations. Join us in
            various places, where opportunities await.
          </p>
        </div>
      )}

      <div className="p-5 [49px] w-full">
        <h2 className="font-semibold text-2xl leading-[31.2px] text-center text-[#00B4FF] mb-4 md:mb-[54px]">
          Careers
        </h2>

        {/* Tabs Switchers */}
        
          <div className="w-full md:mt-[72px]">
          <div className="flex items-center  overflow-scroll md:overflow-hidden  justify-around">
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer  ${
                  currentCareerPage === 1 ? "text-[#00B4FF]" : "text-[#2A2A2A]"
                }`}
                onClick={() => setCurrentCareerPage(1)}
              >
                Become a partner
              </p>

              {currentCareerPage === 1 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer  ${
                  currentCareerPage === 2 ? "text-[#00B4FF]" : "text-[#2A2A2A]"
                }`}
                onClick={() => setCurrentCareerPage(2)}
              >
                Join Us
              </p>
              {currentCareerPage === 2 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
          </div>
          </div>
          <div className="h-[1px] bg-[#2A2A2A]" />
          
        

        {/* Tab 1st */}
        {currentCareerPage === 1 && (
          <div className="flex justify-center items-center mt-10 mb-10 md:mt-[75px]">
            <p className="font-semibold text-[18px] md:text-[32px] md:leading-[50px] text-center max-w-[1465px]">
              "Step into the forefront of medical innovation. Join UNISOL in
              advancing healthcare with cutting-edge equipment and a community
              dedicated to shaping the future of surgical excellence."
            </p>
          </div>
        )}

        {/* Tab 2nd */}
        {currentCareerPage === 2 && (
          <div className="mt-14  pb-[56px] md:px-[85px] flex flex-col gap-10 md:gap-[50px]">
            {jobs.map((job) => (
              <CareerCard
                key={job.id}
                title={job.title}
                description={job.description}
                location={job.location}
              />
            ))}
          </div>
        )}

        {/* Tab 2nd */}
        {currentCareerPage === 2 && (
          <div
            style={{ backgroundImage: 'url("/assets/images/integrity.png")' }}
            className="h-60 bg-cover"
          >
            <div className="flex gap-10 justify-center items-center p-5">
              <div className="flex-[1] flex justify-end items-center">
                <img
                  src="/assets/images/kennedy.png"
                  alt="kalam"
                  className="w-60 h-52 p-1"
                />
              </div>

              <div className="flex-[2] flex flex-col pr-32">
                <h2 className="text-xl font-bold">Motivation</h2>
                <h5 className="font-semibold">John F. kennedy</h5>
                <p className="mt-2">
                  &#34;Things do not happen. Things are made to happen.&#34;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tab 1st */}
      {currentCareerPage === 1 && <ContactUs logo={"../assets/images/SurgiSol.png"}
        img={"../assets/images/contact-us-pic.png"} />}
    </>
  );
}

export default CareersComponent;
