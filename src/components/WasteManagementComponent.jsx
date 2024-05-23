import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import WasteManagementCard from "./WasteManagementCard";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import Support from "./Support";
import ContactUs from "./ContactUs";
import WasteManagementAboutus from "./WasteManagementAboutus";
import VideoCarousel from "../components/VideoCarousel";
import FAQs from "./FAQs";
import Integrity from "./Integrity";

function WasteManagementComponent({
  currentWasteManagementPage,
  setCurrentWasteManagementPage,
  data,
}) {
  const { title, hero, applications, aboutus } = data;
  console.log(title);

  const [imgCheck, setImgCheck] = useState(1);

  return (
    <>
      {/* hero */}
      <div className="pt-[46px] md:px-[49px]">
        <div className="max-w-[1568px] flex flex-col mx-auto items-center">
          <h3 className="font-bold text-[28px]  text-center leading-[31.2px] text-[#00B4FF]">
            {hero.title}
          </h3>
          <h2 className="text-[23px]  lg:text-[40px] xl:text-[50px] font-extrabold leading-[60px] text-center md:mt-2.5">
            Solid Waste Management
          </h2>
          <p className="text-[18px] xl:text-[25px] leading-[30px] font-medium  text-center text-[#2A2A2A70]">
            {hero.desc}
          </p>

          <button className="bg-[#00B4FF] text-[25px] font-bold text-white leading-[25px] py-3 md:py-5 px-3 md:px-5  md:w-[240px] md:h-[70px] rounded-[6px] flex items-center justify-center mt-5   md:mt-[50px]  gap-1 md:gap-2">
            <FaArrowDown />
            <p className="">Brochure</p>
          </button>
        </div>

        <div className="w-full mt-[72px]">
          {/* Tabs Switchers */}

          <div className="flex items-center  overflow-scroll md:overflow-hidden  justify-around">
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentWasteManagementPage === 0 ? "text-[#00B4FF]" : "text-[#2A2A2A]"
                  }`}
                onClick={() => setCurrentWasteManagementPage(0)}
              >
                Solid Waste Management
              </p>

              {currentWasteManagementPage === 0 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentWasteManagementPage === 1 ? "text-[#00B4FF]" : "text-[#2A2A2A]"
                  }`}
                onClick={() => setCurrentWasteManagementPage(1)}
              >
                Biomedical Waste Management
              </p>
              {currentWasteManagementPage === 1 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>

            <div className="w-max">
              <p
                className={`mb-[23px] mx-4 whitespace-nowrap font-medium text-[22px] xl:text-[25px] leading-[30px] cursor-pointer ${currentWasteManagementPage === 2 ? "text-[#00B4FF]" : "text-[#2A2A2A]"
                  }`}
                onClick={() => setCurrentWasteManagementPage(2)}
              >
                Water Waste Management
              </p>
              {currentWasteManagementPage === 2 && (
                <div className="h-[3px] w-full bg-[#00B4FF]" />
              )}
            </div>
          </div>
          <div className="h-[1px] bg-[#2A2A2A]" />
        </div>
      </div>

      {/* applications */}
      <div className="w-full relative mt-10 md:mt-0 ">
        <img
          src="../assets/images/pattern1.png"
          alt=""
          className=" absolute hidden lg:block right-0 top-0 lg:w-[270px] xl:w-[350px] 2xl:w-auto "
        />
        <img
          src="../assets/images/pattern2.png"
          alt=""
          className="  absolute hidden lg:block  left-0 bottom-0  lg:w-[270px] xl:w-[350px] 2xl:w-auto  "
        />

        <div className="md:pt-[76px] px-5 md:px-10 lg:pl-20 xl:pl-[138px] pr-[39px]">
          <div>
            <div className="md:hidden ">
              <img
                src={data?.applications?.img}
                alt=""
                className="w-full  h-full"
              />
            </div>
            <h2 className="text-[20px] md:text-[44px] xl:text-[48px] 2xl:text-[50px] font-semibold leading-[65px] text-[#00B4FF] md:mb-[38px]">
              Application
            </h2>
            <p className="font-medium text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[25px] leading-[23.22px] md:leading-[28px]">
              {applications.desc}
            </p>
          </div>

          <div className="flex mt-5 md:mt-[44px] h-full gap-3 lg:pb-[180px] xl:pb-[248px]  items-center">
            <div className="lg:w-[1224px] flex flex-col gap-[10px] 2xl:gap-[30px] h-full">
              {/* card */}
              {applications.data.map((item, index) => (
                <WasteManagementCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </div>
            <div className="flex ">
              <img
                src={applications.img}
                alt=""
                className="w-full hidden lg:block object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* solid waste management */}
      {title === "Solid Waste Management" && (
        <div className=" pt-10 md:pt-14   lg:pt-0 pb-10 md:pb-14 lg:pb-0 2xl:pt-[70px] 2xl:pb-[51px] w-full px-5">
          <div className="flex flex-col md:flex-row px-1 md:px-32 w-full justify-center items-center gap-2 md:gap-[92px]">
            <img
              src="../assets/images/solidwastebucket1.png"
              alt=""
              className="w-[33%] h-full 2xl:w-[416.97px] lg:h-[697.02px] object-contain"
            />
            <img
              src="../assets/images/solidwastebucket2.png"
              alt=""
              className="w-[33%] h-full 2xl:w-[416.97px] lg:h-[697.02px] object-contain"
            />
            <img
              src="../assets/images/solidwastebucket3.png"
              alt=""
              className="w-[33%] h-full 2xl:w-[416.97px] lg:h-[697.02px] object-contain"
            />
          </div>
        </div>
      )}

      {/* boimedical waste management */}
      {title === "Biomedical Waste" && (
        <div className="pt-14 md:pt-[110px] pb-[58px]">
          <div className="flex w-full items-center justify-between   2xl:pl-[68px] 2xl:pr-[95px]">
            <img
              src="../assets/images/boimedicalbuket.png"
              alt=""
              className="md:w-[350px] lg:w-[400px] hidden md:block  xl:w-[500px] 2xl:w-[678px] h-[678px] object-contain"
            />

            <div className="flex flex-col mx-5 md:mx-0 gap-10 md:gap-[55px]">
              <div className=" flex  items-center md:mr-10 xl:mr-28 2xl:pr-4   2xl:py-[35px]  rounded-[19px] bg-[#F0B330] relative">
                <div className=" w-[131px] xl:w-[124px] 2xl:w-[145px] h-full translate-x-2 xl:translate-x-4 2xl:translate-x-0     bg-black  rotate-[270deg] flex justify-center ">
                  <p className=" text-bold text-white">Yellow</p>
                </div>

                <p className=" font-semibold text-[1.35rem] 2xl:text-[1.563rem]  md:leading-[2.2rem] 2xl:leading-[2.367rem] text-white">
                  Human/Animal anatemical waste <br />
                  Solid waste, Expired medicine ,Chemical waste, Body Fluid,
                  Clinical waste
                </p>
              </div>
              <div className="flex  items-center md:mr-10 xl:mr-28   2xl:py-[35px] rounded-[19px] bg-[#CD191B] relative">
                <div className=" w-[118px] xl:w-[120px] 2xl:w-[145px] h-full -translate-x-1 xl:translate-x-4 2xl:translate-x-0 bg-black  rotate-[270deg] flex justify-center ">
                  <p className=" text-bold text-white">Red</p>
                </div>
                <p className=" font-semibold text-[1.35rem] 2xl:text-[1.563rem] py-6 md:leading-[2.2rem] 2xl:leading-[2.367rem] text-white">
                  Contaminated waste(Recyclable) <br />
                  Plastic bags, Bottles, Pipes, Container, Catheters
                </p>
              </div>
              <div className="flex  items-center md:mr-10 xl:mr-28   2xl:py-[35px] rounded-[19px] bg-[#F1F1F1] relative">
                <div className=" w-[150px] xl:w-[120px]  2xl:w-[145px] -translate-x-2 xl:translate-x-4 2xl:translate-x-0 h-full  bg-black  rotate-[270deg] flex justify-center ">
                  <p className=" text-bold text-white">White</p>
                </div>
                <p className=" font-semibold text-[1.35rem] 2xl:text-[1.563rem] py-6 md:leading-7 xl:leading-[2.2rem] 2xl:leading-[2.367rem] text-black">
                  Scalpels, Blades, Needles <br />
                  Syringes with fixed needle sharp metals, Needle tip cutter
                </p>
              </div>
              <div className="flex  items-center md:mr-10 xl:mr-28   2xl:py-[35px] rounded-[19px] bg-[#3C57B0] relative">
                <div className="w-[160px] xl:w-[118px]  h-full  2xl:w-[145px]  -translate-x-1 xl:translate-x-4 2xl:translate-x-0   bg-black  rotate-[270deg] flex justify-center left-0 top-[61px]">
                  <p className=" text-bold text-white">Blue</p>
                </div>
                <p className=" font-semibold text-[1.35rem] 2xl:text-[1.563rem] md:leading-10 xl:leading-[2.2rem] 2xl:leading-[2.367rem] text-white">
                  Broken glassware, Cytotoxic waste <br />
                  Metallic body implant Contaminated glasses including medicine
                  vials.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* water waste management */}
      {title === "Water Waste" && (
        <div className="pt-[60px] pb-14 md:pb-[119px] w-full h-auto px-10 md:px-0 md:pl-[136px]">
          <div className="w-full h-full md:relative flex flex-col md:block items-center md:pr-14 2xl:pr-20 ">
            <h1 className=" font-semibold  text-[24px]  md:text-[1.5rem] text-center xl:text-[2.5rem] 2xl:text-[4rem] md:absolute z-20">
              Waste Water, its type & Impact on <br className="hidden md:block" /> Environment
            </h1>
            <img
              src="../assets/images/digram.png"
              alt=""
              className=" object-contain aspect-[1380/773] translate-y-4  xl:translate-y-6 2xl:translate-y-8 w-full 2xl:w-[1380px] ml-auto  2xl:h-[773px]"
            />
          </div>
        </div>
      )}


      {/* india banner */}
      <div className="flex flex-col md:flex-row lg:gap-[93px] pb-10 md:pb-0 pt-10 md:pt-0  h-full md:h-[500px] xl:h-[600px] 2xl:h-[838px] w-full bg-black py-[7px] items-center  lg:px-[217px]">
        <div className="h-full flex items-center">
          <img src="../assets/images/map.png" alt="" className="scale-90 lg:scale-100 w-full" />
        </div>
        <div className="flex text-center items-center">
          <h2 className="font-extrabold text-[40px] md:text-[80px] xl:[text-[100px] 2xl:text-[114.83px] md:leading-[90px] xl:leading-[100px] 2xl:leading-[114.83px] text-[#00B4FF]">
            62 <br className="hidden md:block" /> Million Tones
          </h2>
        </div>
      </div>

      {/* from the professionals */}
      <div className="w-full py-10 md:py-[80px] 2xl:pb-10 2xl:pt-10">
        <div className="flex flex-col w-full max-w-[1442px] justify-center items-center gap-5 md:gap-[33px] mx-auto">
          <h2 className="text-[34px] md:text-[50px] font-semibold leading-[50px] text-[#2A2A2A]">
            From the Professional
          </h2>
          <p className="font-medium px-5 md:px-10 text-xl 2xl:text-2xl leading-[26px] text-justify md:text-center text-[#2A2A2A]">
            {" "}
            As a professional in the field of healthcare, the management of
            bio-medical waste stands as a critical aspect of our commitment to
            patient care and environmental responsibility. Bio-medical waste,
            generated through medical procedures and healthcare activities,
            demands meticulous handling and disposal to prevent health risks and
            environmental contamination.
          </p>
        </div>
      </div>

      <div className="my-10  lg:mx-0 overflow-hidden  ">
        <VideoCarousel />
      </div>


      {/* satified  */}
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap md:gap-5 justify-center pt-10 md:pt-0 items-center my-10">
        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row  gap-2 justify-center items-center md:p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/services.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
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
                src="/assets/images/setting.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl   whitespace-nowrap font-[HouschkaPro-Bold]">
                4,865 +
              </h2>
              <h5 className="font-medium  text-center">Client</h5>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/surgeries.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl  whitespace-nowrap font-[HouschkaPro-Bold]">
                2,654 +
              </h2>
              <h5 className="font-medium  text-center">Project</h5>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center py-10 lg:p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/distribution.png"
                alt="industries"
                className="w-[95px] lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center md:px-10 lg:px-0 items-center">
              <h2 className="text-2xl whitespace-nowrap  font-[HouschkaPro-Bold]">
                100 +
              </h2>
              <h5 className="font-medium  text-center">Expert Team</h5>
            </div>
          </div>
        </div>
      </div>

      <Support />

      <ContactUs
        logo={"/assets/svg/enviro-logo.svg"}
        img={"/assets/images/kids.png"}
      />

      <WasteManagementAboutus
        title={aboutus.title}
        desc={aboutus.desc}
        // imgCheck={imgCheck}
        img={"../assets/svg/envv.svg"}
      />

      <FAQs />

      <div className="h-full mb-10 bg-[#F2F2F2]">
        <div className="flex justify-center md:justify-around md:gap-10 md:px-5 lg:p-10">
          <div className=" flex flex-col justify-around  gap-8 text-white xl:pl-20 2xl:pl-24">
            <div className="flex flex-col gap-2">
              <div className=" w-28 rounded-md flex justify-center items-center mt-4">
                <img
                  src={"../assets/images/SurgiSol.png"}
                  alt="logo"
                  className="w-24 h-12 p-1"
                />
              </div>

              <h1 className=" text-[2.2rem]  md:text-[2.5rem] xl:text-[3.125rem] leading-[3.125rem] font-extrabold text-black">
                Request For Quotation
              </h1>

              <div>
                <p>
                  <span className=" text-black">Call us Directly: </span>
                  <span className="font-semibold text-black">
                    +91 987 456 3210
                  </span>
                </p>

                <p>
                  <span className=" text-black">Contact Email: </span>
                  <span className="font-semibold text-black">
                    surgisol@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <input
              type="text"
              className="p-3 md:p-2 lg:p-3 w-full  border rounded-[10px] text-black border-gray-600 bg-transparent outline-none"
              placeholder="Full Name"
            />
            <div>
              <input
                type="text"
                className="p-3 md:p-2 lg:p-3 w-full border rounded-[10px] text-black border-gray-600 bg-transparent outline-none"
                placeholder="Phone"
              />
              <div className="flex mt-1.5 gap-[13px]">
                <input type="checkbox" name="" id="" className="bg-gray-600" />
                <p className="font-regular text-[10px] leading-[13.62px] text-black">
                  Preffered Contact Method
                </p>
              </div>
            </div>
            <input
              type="text"
              className="p-3 md:p-2 lg:p-3  w-full border rounded-[10px] text-black border-gray-600 bg-transparent outline-none"
              placeholder="Landline No."
            />
            <div>
              <input
                type="text"
                className="p-3 md:p-2 lg:p-3 border w-full rounded-[10px] text-black border-gray-600 bg-transparent outline-none"
                placeholder="Email Id"
              />
              <div className="flex mt-1.5 gap-[13px]">
                <input type="checkbox" name="" id="" className="bg-gray-600" />
                <p className="font-regular text-[10px] leading-[13.62px] text-black">
                  Preffered Contact Method
                </p>
              </div>
            </div>
            <div className="flex  justify-center mb-4">
              <button className="w-32 p-3 rounded-md font-medium bg-primary ">
                Submit
              </button>
            </div>
          </div>

          <div className=" flex items-center ">
            <div className="w-[320px] h-[330px] lg:w-[400px] lg:h-[437px] xl:w-[500px] 2xl:w-[526px] xl:h-[563px] bg-[#6750A4] relative hidden md:block">
              <img
                src={"/assets/images/wastemanagementabout2.png"}
                alt="logo"
                className=" w-[548px] h-[503px] absolute -bottom-[120px] lg:-bottom-[100px] xl:bottom-[-65px] object-contain   "
              />
            </div>
          </div>
        </div>
      </div>

      <Integrity
        integerityPic={"../assets/images/integrity-pic.png"}
        Integrity={"Integerity"}
        integerityName={"Michelle Obama"}
        integerityText={
          "‘’We learned about honesty and integerity-that the truth matters... that you don't take shortcuts or play by your own set of rules... and success doesn't count unless you earn it fair and square.’’"
        }
      />
    </>
  );
}

export default WasteManagementComponent;
