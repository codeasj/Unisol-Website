import React, { useState } from "react";
import HospitalityBanner from "../../components/HospitalityBanner";
import { FaArrowDown } from "react-icons/fa6";
import HospitalityCarousel from "../../components/HospitalityCarousel";
import WasteManagementCard from "../../components/WasteManagementCard";
import WasteManagementAboutus from "../../components/WasteManagementAboutus";
import ContactUs from "../../components/ContactUs";
import FAQs from "../../components/FAQs";
import Integrity from "../../components/Integrity";

const data = {
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",

  applications: {
    desc: "Lorem Ipsum isy's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum isy's standard dummy text ever since the 1500s, when an unknown ",
    data: [
      {
        title: "Lorem Ipsum is simply dummy text is simply dummy text",
        // desc: "The generation of solid waste is influenced by population density, lifestyle, economic activities, and urbanization. Waste includes organic, inorganic, recyclable, and hazardous materials. Managing waste at its source through awareness and reduction strategies is vital to curb excessive generation.",
      },
      {
        title:
          "Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text is simply dummy text   ",
        // desc: "Proper handling and storage techniques are imperative to prevent environmental contamination and health risks. Segregation, composting, and containment of waste at its origin help minimize adverse impacts on surroundings and ecosystems.",
      },
      {
        title: "Lorem Ipsum is simply dummy text is simply dummy text  ",
        // desc: "Efficient waste collection systems vary based on locality and waste types. Utilizing segregated bins, scheduled pickups, and involving community participation aids in streamlining collection processes. Addressing challenges like irregular waste disposal and limited infrastructure is pivotal for effective collection.",
      },
      {
        title:
          "Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text.",
        // desc: "Recovering materials through recycling, composting, and energy recovery reduces the strain on natural resources. Innovative technologies facilitate the extraction of valuable resources from waste, promoting a circular economy and minimizing landfill reliance.",
      },
      {
        title:
          "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy .",
        // desc: "Disposal involves the final treatment and disposition of residual waste. Landfills, incineration, and biological treatment are among the prevalent disposal methods. However, minimizing disposal by maximizing recycling and recovery remains a primary goal for sustainable waste management.",
      },
      {
        title:
          "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text lorem Ipsum is simply ",
        // desc: "Disposal involves the final treatment and disposition of residual waste. Landfills, incineration, and biological treatment are among the prevalent disposal methods. However, minimizing disposal by maximizing recycling and recovery remains a primary goal for sustainable waste management.",
      },
    ],
  },

  aboutus: {
    title: "Sports Management",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
};

const SportsManagement = () => {
  const [currentCareerPage, setCurrentCareerPage] = useState(1);
  const [bold, setBold] = useState(1);
  const [imgCheck, setImgCheck] = useState(1);

  return (
    <>
      <HospitalityBanner
        currentImage={currentCareerPage + 2}
        currentPageName={"Sports Managment"}
      />

      <div className="pt-[46px] px-10 md:px-[49px]">
        <div className="max-w-[1568px] flex flex-col mx-auto items-center">
          <h3 className="font-bold text-[24px]  text-center leading-[31.2px] text-[#00B4FF]">
            Hospitality
          </h3>
          <h2 className=" text-[24px]  lg:text-[40px] xl:text-[50px] font-extrabold leading-[60px] text-center md:mt-2.5">
            Sports Management
          </h2>
          <p className="text-[18px] xl:text-[25px] leading-[30px] font-medium  text-center text-[#2A2A2A70]">
            {data.desc}
          </p>

          <button className="bg-[#00B4FF] text-[25px] font-bold text-white leading-[25px] py-3 md:py-5 px-3 md:px-5  md:w-[240px] md:h-[70px] rounded-[6px] flex items-center justify-center mt-5   md:mt-[50px]  gap-1 md:gap-2">
            <FaArrowDown />
            <p className="">Brochure</p>
          </button>
        </div>
      </div>

      <div className="w-full relative mt-10 md:mt-0  ">
        <img
          src="/assets/images/pattern1.png"
          alt=""
          className=" absolute hidden lg:block right-0 top-0 lg:w-[270px] xl:w-[350px] 2xl:w-auto"
        />
        <img
          src="/assets/images/pattern2.png"
          alt=""
          className="absolute hidden lg:block  left-0 bottom-0  lg:w-[270px] xl:w-[350px] 2xl:w-auto"
        />

        <div className="md:pt-[76px] px-5 md:px-10  lg:pl-20 xl:pl-[138px] pr-[39px]">
          <div>
            <h2 className="text-[20px] md:text-[44px] xl:text-[48px] 2xl:text-[50px] font-semibold leading-[65px] text-[#00B4FF] md:mb-[38px]">
              Application
            </h2>
            <p className="font-medium text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[25px] leading-[23.22px] md:leading-[28px]">
              {data?.applications?.desc}
            </p>

            <div className="flex mt-[44px] h-full gap-3 lg:pb-[180px] xl:pb-[248px]  items-center">
              <div className="w-[1224px] flex flex-col gap-[30px] h-full">
                {/* card */}
                {data?.applications?.data.map((item, index) => (
                  <WasteManagementCard
                    key={index}
                    id={item.id}
                    title={item.title}
                    bold={bold}
                    // description={item.desc}
                  />
                ))}
              </div>
              <div className="flex ">
                <img
                  src={data?.applications?.img}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row mt-20 px-10 md:px-5 xl:px-10 2xl:px-20 gap-10 justify-center mb-20 ">
        <div className="bg-[#D9DFEF] rounded-lg flex flex-col  items-center justify-center px-4  py-4 xl:px-8  2xl:px-10  gap-2 xl:pt-5 xl:gap-4  2xl:pt-0 2xl:gap-8    xl:w-[500px] 2xl:w-[344px] h-full xl:h-[411px]">
          <img
            src="../assets/svg/v1.svg"
            alt=""
            className=" w-[75px] xl:w-[92px]"
          />
          <div className="font-bold  text-xl xl:text-2xl text-[#2a2a2a]">
            Lorem ipsum
          </div>
          <div className=" text-[13px] latoo leading-4 xl:leading-6 font-[500px]">
            The purpose of lorem ipsum is to create a looking block of text
            sentence, paragraph, page,doesn't distract from the layout. A
            practice not without on The purpose of lorem ipsum is to create a
            looking block of text sentence, paragraph, page,doesn't distract
            from the layout. A practice not without on
          </div>
        </div>
        <div className="bg-[#A9EED3] rounded-lg flex flex-col  items-center justify-center  px-4 py-4 xl:px-8  2xl:px-10  gap-2 xl:pt-5  xl:gap-4 2xl:pt-0 2xl:gap-8  w-auto xl:w-[500px] 2xl:w-[344px] h-full xl:h-[411px]">
          <img
            src="../assets/svg/v2.svg"
            alt=""
            className=" w-[75px] xl:w-[92px]"
          />
          <div className="font-bold text-xl xl:text-2xl text-[#2a2a2a]">
            {" "}
            Lorem ipsum
          </div>
          <div className="text-[13px] latoo leading-4 xl:leading-6 font-[500px]">
            The purpose of lorem ipsum is to create a looking block of text
            sentence, paragraph, page,doesn't distract from the layout. A
            practice not without on The purpose of lorem ipsum is to create a
            looking block of text sentence, paragraph, page,doesn't distract
            from the layout. A practice not without on
          </div>
        </div>
        <div className="bg-[#C5B3EA] rounded-lg flex flex-col  items-center justify-center   px-4 py-4 xl:px-8 2xl:px-10  gap-2 xl:pt-5 xl:gap-4 2xl:pt-0  2xl:gap-8 w-auto xl:w-[500px] 2xl:w-[344px] h-full xl:h-[411px]">
          <img
            src="../assets/svg/v3.svg"
            alt=""
            className=" w-[75px] xl:w-[92px]"
          />
          <div className="font-bold text-xl xl:text-2xl text-[#2a2a2a]">
            {" "}
            Lorem ipsum
          </div>
          <div className="text-[13px] latoo leading-4 xl:leading-6 font-[500px]">
            The purpose of lorem ipsum is to create a looking block of text
            sentence, paragraph, page,doesn't distract from the layout. A
            practice not without on The purpose of lorem ipsum is to create a
            looking block of text sentence, paragraph, page,doesn't distract
            from the layout. A practice not without on
          </div>
        </div>
        <div className="bg-[#FBBED7] rounded-lg flex flex-col  items-center justify-center   px-4 py-4 xl:px-8  2xl:px-10  gap-2 xl:pt-5 2xl:pt-0 xl:gap-4  2xl:gap-8  w-auto xl:w-[500px] 2xl:w-[344px] h-full xl:h-[411px]">
          <img
            src="../assets/svg/v4.svg"
            alt=""
            className=" w-[75px] xl:w-[92px]"
          />
          <div className="font-bold text-xl xl:text-2xl text-[#2a2a2a]">
            {" "}
            Lorem ipsum
          </div>
          <div className="text-[13px] latoo leading-4 xl:leading-6 font-[500px]">
            The purpose of lorem ipsum is to create a looking block of text
            sentence, paragraph, page,doesn't distract from the layout. A
            practice not without on The purpose of lorem ipsum is to create a
            looking block of text sentence, paragraph, page,doesn't distract
            from the layout. A practice not without on
          </div>
        </div>
      </div>

      <div className="md:py-12 overflow-hidden">
        <HospitalityCarousel />
      </div>

      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-5 justify-center items-center my-10">
        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row  gap-2 justify-center items-center p-10">
            <div className="bg-gray-200">
              <img
                src="/assets/images/smile.png"
                alt="industries"
                className="lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl whitespace-nowrap font-[HouschkaPro-Bold]">
                3,254 +
              </h2>
              <h5 className="font-medium text-center">Happy Customers</h5>
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
              <h5 className="font-medium  text-center">Installation</h5>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:border-r-2 h-40"></div>

        <div className="md:border-t-2">
          <div className="flex flex-col md:flex-row gap-2 md:-translate-x-9 lg:translate-x-0 justify-center items-center p-10">
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
              <h5 className="font-medium  text-center">Surgeries</h5>
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
                className=" w-[95px] lg:w-20 lg:h-20 xl:w-[100px] 2xl:h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl whitespace-nowrap  font-[HouschkaPro-Bold]">
                100 +
              </h2>
              <h5 className="font-medium  text-center">Distribution Network</h5>
            </div>
          </div>
        </div>
      </div>

      <ContactUs
        logo={"../assets/images/SurgiSol.png"}
        img={"../assets/images/contact-us-pic.png"}
      />

      <WasteManagementAboutus
        title={data?.aboutus?.title}
        desc={data?.aboutus.desc}
        imgCheck={imgCheck}
      />

      <FAQs />

      <div className="h-full mb-10 bg-[#F2F2F2]">
        <div className="flex justify-center md:justify-around md:gap-10 md:px-5 lg:p-10">
          <div className=" flex flex-col justify-around  gap-8 text-white xl:pl-20 2xl:pl-24">
            <div className="flex flex-col gap-2">
              <div className=" w-28 rounded-md flex justify-center items-center mt-4">
                <img
                  src={"/assets/images/SurgiSol.png"}
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
        integerityPic={"../assets/images/JamesRouse.png"}
        Integrity={"Profit"}
        integerityName={"James Rouse"}
        integerityText={
          "‘’Profit is not legitimate purpose of business, the legitimate purpose of business is to provide a product or service that people need and do it so well that’s it’s profitable.’’"
        }
      />
    </>
  );
};

export default SportsManagement;
