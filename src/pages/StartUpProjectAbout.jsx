import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import WasteManagementCard from "../components/WasteManagementCard";
import Support from "../components/Support";
import ContactUs from "../components/ContactUs";
import WasteManagementAboutus from "../components/WasteManagementAboutus";
import FAQs from "../components/FAQs";
import Integrity from "../components/Integrity";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import VideoCarousel from "../components/VideoCarousel";

const equipmentData = {
  "Agricultue Drone": {
    id: 1,
    equipmentName: "Agricultue Drone",
    bannerImg: "/assets/images/dronebannerimg.png",
    desc: "The Smart SurgN machine finds application across various surgical specialties, leveraging its advanced technology to enhance procedures and improve patient care in the following areas:",
    applications: {
      desc: "UNISOL, a frontrunner in the medical and surgical equipment industry, champions sustainable waste management.",
      img: "/assets/images/droneimg2.png",
      data: [
        {
          title: "Precision Spraying",
          desc: "Agricultural drones offer precise spraying of fertilizers, pesticides, and herbicides, ensuring targeted application, minimizing waste, and maximizing effectiveness.",
        },
        {
          title: "Real-time Crop Monitoring",
          desc: "Drones equipped with high-resolution cameras and sensors enable live monitoring of crop health, facilitating early detection of issues such as disease, pests, or nutrient deficiencies",
        },
        {
          title: "Efficient Pest Control",
          desc: "Utilizing advanced technology, drones aid in efficient pest control by precisely targeting affected areas, reducing the need for extensive chemical use.",
        },
        {
          title: "Optimized Farm Management",
          desc: "These drones provide farmers with actionable insights by collecting data on crop health, growth patterns, and field conditions, empowering them to make informed decisions for better farm management.",
        },
        {
          title: "Enhanced Yield and Productivity",
          desc: "By offering precise spraying and monitoring capabilities, agricultural drones contribute to increased yield and improved productivity by ensuring optimal crop health and resource utilization.",
        },
        {
          title: "Inclusivity for Women Farmers",
          desc: "Drones with user-friendly interfaces cater to the needs of women farmers, empowering inclusivity in agriculture by providing accessible tools for efficient spraying and monitoring.",
        },
        {
          title: "Timely Intervention",
          desc: "Early detection of crop issues through drone monitoring allows for timely intervention, preventing potential crop losses and optimizing yield.",
        },
        {
          title: "Flexible and Convenient",
          desc: "Agricultural drones offer flexibility and convenience in farm operations, allowing for quick and targeted interventions without the constraints of traditional methods.",
        },
        {
          title: "Environmental Conservation",
          desc: "By reducing chemical usage and optimizing resource utilization, drones contribute to environmentally friendly farming practices, promoting sustainability in agriculture.",
        },
        {
          title: "Revolutionizing Farming Practices",
          desc: "Overall, the integration of agricultural drones represents a revolution in farming practices, leveraging technology to enhance efficiency, productivity, and sustainability in modern agriculture.",
        },
      ],
    },

    benefits: {
      title: "Smart SurgN",
      desc: "The Smart SurgN machine offers a number of benefits that collectively elevate the standard of surgical care, ensuring safer, more precise, and more efficient procedures, ultimately improving patient outcomes.",
      points: [
        {
          title: "Precision and Accuracy:",
          desc: `The machine's high-level precision and accuracy in performing surgical tasks surpass human capabilities, leading to more precise incisions, meticulous tissue manipulation, and optimal implant placements, reducing the margin of error in surgeries.`,
        },
        {
          title: "Minimally Invasive Techniques",
          desc: `Its advanced technology enables minimally invasive procedures, resulting in smaller incisions, reduced trauma to surrounding tissues, less postoperative pain, shorter hospital stays, and faster recovery times for patients.`,
        },
        {
          title: "Real-time Guidance and Decision Support",
          desc: `Through AI-driven analysis, the machine provides surgeons with real-time guidance, predictive insights, and personalized recommendations during surgeries, assisting in critical decision-making and improving overall surgical outcomes.`,
        },
        {
          title: "Improved Patient Safety",
          desc: `The enhanced precision and AI assistance contribute to increased safety during procedures, minimizing risks of complications, reducing blood loss, and lowering the chances of postoperative infections, thereby enhancing patient safety.`,
        },
        {
          title: "Enhanced Surgical Capabilities",
          desc: `Surgeons can perform complex and delicate procedures with greater ease and efficiency, even in challenging anatomical locations or intricate surgeries, thanks to the machine's stability, accuracy, and advanced tools.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/svg/final.svg",
      desc: "The Smart SurgN machine is an innovative medical device designed to revolutionize surgical procedures through advanced technology and intelligent automation. This cutting-edge system integrates artificial intelligence (AI), robotics, and high-precision surgical tools to enhance the accuracy, efficiency, and safety of various surgical interventions. At its core, the Smart SurgN machine utilizes sophisticated AI algorithms to analyze vast amounts of medical data, including patient information, imaging scans, and surgical protocols. This AI-driven analysis assists surgeons by providing real-time guidance, predictive insights, and personalized recommendations during procedures.",
    },
  },
  "Medicines Dispenser": {
    id: 2,
    equipmentName: "Medicines Dispenser",
    bannerImg: "/assets/images/medicinebannerimg.png",
    desc: "The world of healthcare has witnessed remarkable advancements in the way medication is administered, thanks to the evolution of medicine dispensers. UNISOL has introduced user-friendly medicine dispensers equipped with intuitive technology, simplifying medication administration, ultimately improving patient outcomes, and revo",
    applications: {
      desc: "",
    //   img: "",
      data: [
        {
          title: "Enhancing Patient Compliance and Adherence",
          desc: "Modern dispensers promote adherence to prescribed medication regimens, reducing the likelihood of missed doses and improving patient compliance, especially among elderly or forgetful individuals",
        },
        {
          title: "Remote Monitoring and Smart Features",
          desc: "UNISOL's cutting-edge dispensers are integrated with remote monitoring features, allowing healthcare providers to track patient adherence and intervene if necessary. The incorporation of smart features further enhances usability.",
        },
        {
          title: "Integration with Healthcare Systems",
          desc: "UNISOL's dispensers seamlessly integrate with existing healthcare systems, facilitating efficient data exchange between providers and ensuring accurate medication records.",
        },
        {
          title: "Precision and Accuracy in Dosage",
          desc: "The emphasis on precision ensures accurate dosage delivery, which is crucial for patients requiring specific and controlled medication intake.",
        },
      ],
    },

    aboutus: {
      img: "/assets/svg/final.svg",
      desc: "The Smart SurgN machine is an innovative medical device designed to revolutionize surgical procedures through advanced technology and intelligent automation. This cutting-edge system integrates artificial intelligence (AI), robotics, and high-precision surgical tools to enhance the accuracy, efficiency, and safety of various surgical interventions. At its core, the Smart SurgN machine utilizes sophisticated AI algorithms to analyze vast amounts of medical data, including patient information, imaging scans, and surgical protocols. This AI-driven analysis assists surgeons by providing real-time guidance, predictive insights, and personalized recommendations during procedures.",
    },
  },
  "Hospital Laundry": {
    id: 3,
    equipmentName: "Hospital Laundry",
    bannerImg: "/assets/images/laundrybanner.png",
    desc: "Our specialized hospital laundry services ensure pristine cleanliness and integrity for healthcare linens and garments by ensuring top-tier hygiene and efficiency. Trust our dedicated hospital laundry solutions for impeccable sterilization and handling of medical textiles, prioritizing infection control and patient well-being.",
    applications: {
      desc: "The envisioned Automated Barrier Technology-based Laundry System is set to redefine standards in healthcare laundry management. This state-of-the-art system employs cutting-edge automation and stringent infection control measures to optimize the laundering process for hospital textiles.",
      img: "/assets/images/laundryimg.png",
      data: [
        {
          title: "Advanced Automation",
          desc: "The system integrates automated machinery and processes, reducing manual intervention and ensuring a more consistent, standardized cleaning process.",
        },
        {
          title: "Barrier Technology:",
          desc: "With a paramount focus on infection prevention, the proposed system adheres to rigorous hygiene protocols, mitigating the risk of hospital-acquired infections (HAIs).",
        },
        {
          title: "Efficiency and Speed:",
          desc: "By streamlining operations, the automated system enhances efficiency, expediting the turnaround time for clean and sanitized hospital linens.",
        },
        {
          title: "Environmental Sustainability:",
          desc: "The system incorporates eco-friendly practices, optimizing water and energy usage, and employing eco-conscious detergents and cleaning agents.",
        },
      ],
    },

    aboutus: {
      img: "/assets/svg/final.svg",
      desc: "The Smart SurgN machine is an innovative medical device designed to revolutionize surgical procedures through advanced technology and intelligent automation. This cutting-edge system integrates artificial intelligence (AI), robotics, and high-precision surgical tools to enhance the accuracy, efficiency, and safety of various surgical interventions. At its core, the Smart SurgN machine utilizes sophisticated AI algorithms to analyze vast amounts of medical data, including patient information, imaging scans, and surgical protocols. This AI-driven analysis assists surgeons by providing real-time guidance, predictive insights, and personalized recommendations during procedures.",
    },

    benefits: {
      title: "Hospital Laundry",
      desc: "",
      points: [
        {
          title: "Enhanced Hygiene Standards",
          desc: `The implementation of Automated Barrier Technology significantly reduces the risk of cross-contamination, ensuring superior hygiene levels in hospital linens.`,
        },
        {
          title: "Increased Operational Efficiency",
          desc: `By automating processes and minimizing human intervention, the laundry system boosts productivity and reduces labor costs.`,
        },
        {
          title: "Improved Patient Safety",
          desc: `Clean, sanitized linens play a pivotal role in patient care, contributing to a safer healthcare environment and aiding in faster recovery`,
        },
        {
          title: "Cost-Effectiveness",
          desc: `The efficient utilization of resources and optimized processes translate to cost savings in the long run for healthcare facilities.`,
        },
      ],
    },
  },
};

function StartUpProjectAbout() {
  const [currentEquipment, setCurrentEquipment] = useState("");
  const [data, setData] = useState({});
  const { equipmentname } = useParams();

  useEffect(() => {
    setCurrentEquipment(equipmentname);
    setData(equipmentData[equipmentname]);
  }, [equipmentname]);

  return (
    <>
      {/* banner */}
      <div className="relative  w-full h-full">
        <img src={data?.bannerImg} alt="banner" className=" w-full" />

        <div className="  absolute w-full h-full bg-[#0038FD] top-0 opacity-10"></div>

        <div className="absolute top-[30%] left-[14%]">
          <h2 className="text-white text-[32px]  md:text-[64px] font-bold m-0">
            {equipmentname}
          </h2>
          <h3 className="text-white text-xl md:text-2xl leading-[31.2px] font-semibold">
            Healthcare /{" "}
            <span className="  text-lg text-blue-500">{equipmentname}</span>{" "}
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="pt-[46px] px-10 md:px-[49px]">
        <div className="max-w-[1568px] flex flex-col mx-auto items-center">
          <h3 className="font-bold text-[24px]  text-center leading-[31.2px] text-[#00B4FF]">
            Startup
          </h3>
          <h2 className="text-[24px]  lg:text-[40px] xl:text-[50px] font-extrabold leading-[60px] text-center md:mt-2.5">
            About {equipmentname}
          </h2>
          <p className="text-[18px] xl:text-[25px] leading-[30px] font-medium  text-center text-[#2A2A2A70]">
            {data?.desc}
          </p>

          <button className="bg-[#00B4FF] text-[25px] font-bold text-white leading-[25px] py-3 md:py-5 px-3 md:px-5  md:w-[240px] md:h-[70px] rounded-[6px] flex items-center justify-center mt-5   md:mt-[50px]  gap-1 md:gap-2">
            <FaArrowDown />
            <p className="">Brochure</p>
          </button>
        </div>
      </div>

      {/* applications */}
      <div className="w-full relative mt-10 md:mt-0 ">
        <img
          src="/assets/images/pattern1.png"
          alt=""
          className=" absolute hidden lg:block right-0 top-0 lg:w-[270px] xl:w-[350px] 2xl:w-auto"
        />
        <img
          src="/assets/images/pattern2.png"
          alt=""
          className="  absolute hidden lg:block  left-0 bottom-0  lg:w-[270px] xl:w-[350px] 2xl:w-auto"
        />

        <div className="md:pt-[76px] px-5 md:px-10  lg:pl-20 xl:pl-[138px] pr-[39px]">
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
              {data?.applications?.desc}
            </p>
          </div>

          <div className=" flex mt-5 md:mt-[44px] h-full gap-3 lg:pb-[180px] xl:pb-[248px]  items-center">
            <div className="w-[1224px] flex flex-col gap-[10px] 2xl:gap-[30px] h-full">
              {/* card */}
              {data?.applications?.data.map((item, i) => (
                <WasteManagementCard
                  key={i}
                  id={item.id}
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </div>
            <div className="flex">
              {data?.applications?.img && (
                <img
                  src={data?.applications?.img}
                  alt=""
                  className="w-full hidden lg:block object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {currentEquipment === "Agricultue Drone" && (
        <>
          <div className="w-full h-full py-[67px] px-5">
            <div className="max-w-[1840px] mx-auto flex flex-col md:flex-row md:flex-wrap items-center justify-around  gap-y-10">
              <div className="md:w-[284px] md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon1.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Precision Farming
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                  Enable precise application of fertilizers, pesticides, and
                  water, reducing wastage and increasing crop yield.
                </p>
              </div>
              <div className="md:w-[284px]  md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon2.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Aerial Imaging
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                  Captures high-resolution images of fields, providing farmers
                  with valuable insights into crop health, growth patterns, and
                  potential issues.
                </p>
              </div>
              <div className="md:w-[284px]  md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon3.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Automated Operation
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                  Can be programmed to operate autonomously, saving time and
                  labor for farmers.
                </p>
              </div>
              <div className="md:w-[284px]  md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon4.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Multi-Spectral Sensors
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                  Detects variations in crop health by analyzing different
                  wavelengths, aiding in early disease detection and optimized
                  crop management.
                </p>
              </div>
              <div className="md:w-[284px]  md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon5.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Real-Time Monitoring
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                  Provides instant data on field conditions, allowing prompt
                  decision-making and responsive actions.
                </p>
              </div>
              <div className="md:w-[284px]  md:h-[500px] flex flex-col items-center">
                <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[250px] h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#2A2A2A] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dronfeatureicon5.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Mapping and Navigation
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-[20px]">
                   Creates detailed maps of farmland for efficient navigation
                  and targeted treatment application.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:mt-[98px] px-5">
            <div className="max-w-[1740px] mx-auto ">
              <img
                src="/assets/images/droneinfield.png"
                alt=""
                className=" h-[200px] md:h-auto"
              />
              <h1 className="font-bold text-[24px] md:text-[34px] lg:text-[50px] lg:leading-[50px] text-center mt-10 md:mt-[77px]">
                Providing Drone for Agriculture spraying and monitoring the
                health of crop
              </h1>
              <p className="font-medium text-[18px] md:text-[24px] lg:text-[25px] md:leading-[37.87px] text-center mt-5 lg:mt-[50px] mb-20 lg:mb-[20px]">
                Our drones offer precise spraying and real-time crop health
                monitoring. The technology we use ensures efficient pest control
                and proactive crop management.
              </p>
            </div>
          </div>

          <div className="w-full h-full bg-[#0152A8] py-14 md:py-[112px] ">
            <div className="max-w-[1527.55px] mx-auto grid lg:grid-cols-3 gap-10 ">
              <div className="flex flex-col items-center">
                <div className="h-[290px] w-[320px]  lg:w-[321px] lg:h-[287px] rounded-[4.93px] bg-[#F9F9F933] flex items-center justify-center">
                  <img
                    src="/assets/images/drone1.png"
                    alt=""
                    className="md:w-[70%]"
                  />
                </div>
                <h1 className="font-bold text-[24px] md:text-[35px] lg:text-[28.19px] md:mt-5 lg:mt-[49.55px] text-white text-center">
                  BIR – The Experience Drone
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-[290px] w-[320px]  lg:w-[321px] lg:h-[287px] rounded-[4.93px] bg-[#F9F9F933] flex items-center justify-center">
                  <img
                    src="/assets/images/drone2.png"
                    alt=""
                    className="md:w-[70%]"
                  />
                </div>
                <h1 className="font-bold text-[24px]  md:text-[35px] lg:text-[28.19px] md:mt-5 lg:mt-[49.55px] text-white text-center">
                  Vidyut – for Indoors and Outdoors
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-[290px] w-[320px]  lg:w-[321px] lg:h-[287px] rounded-[4.93px] bg-[#F9F9F933] flex items-center justify-center">
                  <img
                    src="/assets/images/drone3.png"
                    alt=""
                    className="md:w-[70%]"
                  />
                </div>
                <h1 className="font-bold text-[24px]  md:text-[35px] lg:text-[28.19px] mt-2 md:mt-5 lg:mt-[49.55px] text-white text-center">
                  Advik – for 360° Dynamics
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-full py-[112px] px-4 lg:px-10">
            <div className="max-w-[1762px] mx-auto">
              <div className="w-full flex flex-col md:flex-row items-center gap-[50px] xl:gap-[98px]">
                <img
                  src="/assets/images/farmer.png"
                  alt=""
                  className="md:w-[40%] 2xl:w-full"
                />
                <div>
                  <h1 className="font-bold text-4xl xl:text-[50px] leading-[65px]">
                    For Farmers
                  </h1>
                  <div className="font-medium text-lg xl:text-[25px] xl:leading-[37.87px] text-justify mt-[18px]">
                    <p>
                      Our drone for agriculture offers efficient spraying
                      capabilities, ensuring precise and targeted application
                      while monitoring crop health in real-time, empowering
                      farmers with actionable insights for optimal yield.
                    </p>

                    <div className="flex gap-2 ml-2">
                      <GoDotFill className="mt-1.5" size={20} />
                      <p>
                        Advanced spraying technology for precise and even
                        distribution of fertilizers and pesticides.
                      </p>
                    </div>
                    <div className="flex gap-2 ml-2">
                      <GoDotFill className="mt-1.5" />
                      <p>
                        Live monitoring of crop health using high-resolution
                        cameras and sensors, aiding in early detection of issues
                        for timely intervention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col-reverse md:flex-row  items-center gap-[50px] xl:gap-[98px] mt-[100px]">
                <div>
                  <h1 className="font-bold text-4xl xl:text-[50px] leading-[65px]">
                    {" "}
                    For Woman
                  </h1>
                  <div className="font-medium text-lg xl:text-[25px] xl:leading-[37.87px] text-justify mt-[18px]">
                    <p>
                      Empower women in agriculture with our drone technology,
                      enabling efficient spraying and crop health monitoring.
                      Revolutionize farming practices while ensuring inclusivity
                      and empowerment for women.
                    </p>

                    <div className="flex gap-2 ml-2">
                      <GoDotFill className="mt-1.5" size={20} />
                      <p>
                        Accessible and user-friendly interface designed for ease
                        of use, catering to women farmers' needs.
                      </p>
                    </div>
                    <div className="flex gap-2 ml-2">
                      <GoDotFill className="mt-1.5" />
                      <p>
                        Efficient crop surveillance and spraying capabilities to
                        optimize yield, while offering flexibility and
                        convenience for female farmers.
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  src="/assets/images/woman.png"
                  alt=""
                  className="md:w-[40%] 2xl:w-full"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {currentEquipment === "Medicines Dispenser" && (
        <>
          <div className="w-full h-full pt-[44px] pb-[66px] px-5">
            <div className="max-w-[1768px] mx-auto grid  place-items-center md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-5">
              <div className="w-full md:h-[360px] lg:h-auto xl:w-[404px] px-[10px] py-[15px] xl:p-[43.17px_49.34px_43.17px_49.34px] shadow-lg">
                <div className="px-3 py-4 xl:p-[27.14px_23.44px_27.14px_23.44px] w-max bg-[#23A6F0] rounded-[12px]">
                  <img src="/assets/svg/hearticon.svg" alt="" />
                </div>

                <h1 className="font-bold text-[19.74px] leading-[29.6px] mt-[24px]">
                  Enhanced Patient Adherence
                </h1>

                <div className="w-[61.68px] h-[2.47px] bg-[#00B4FF] mt-[24px]" />

                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Encourages strict adherence to prescribed medication
                    schedules.
                  </p>
                </div>
                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Minimizes missed doses, particularly beneficial for seniors
                    or those prone to forgetfulness.
                  </p>
                </div>
              </div>

              <div className="w-full md:h-[360px] lg:h-auto xl:w-[404px] px-[10px] py-[15px] xl:p-[43.17px_49.34px_43.17px_49.34px] shadow-lg">
                <div className="px-3 py-4 xl:p-[27.14px_23.44px_27.14px_23.44px] w-max bg-[#F9C863] rounded-[12px]">
                  <img src="/assets/svg/sheeticon.svg" alt="" />
                </div>

                <h1 className="font-bold text-[19.74px] leading-[29.6px] mt-[24px]">
                  Remote Monitoring and Intelligent Functions
                </h1>

                <div className="w-[61.68px] h-[2.47px] bg-[#00B4FF] mt-[24px]" />

                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Integration of remote monitoring capabilities for healthcare
                    providers.
                  </p>
                </div>
                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Smart functionalities augment usability and accessibility.
                  </p>
                </div>
              </div>

              <div className="w-full md:h-[360px] lg:h-autoxl:w-[404px] px-[10px] py-[15px] xl:p-[43.17px_49.34px_43.17px_49.34px] shadow-lg">
                <div className="px-3 py-4 xl:p-[27.14px_23.44px_27.14px_23.44px] w-max bg-[#29ECBD] rounded-[12px]">
                  <img src="/assets/images/dricon.png" alt="" />
                </div>

                <h1 className="font-bold text-[19.74px] leading-[29.6px] mt-[24px]">
                  Seamless Healthcare System Integration
                </h1>

                <div className="w-[61.68px] h-[2.47px] bg-[#00B4FF] mt-[24px]" />

                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Effortless integration with existing healthcare
                    infrastructure.
                  </p>
                </div>
                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[12px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Facilitates smooth data exchange between providers, ensuring
                    accurate medication records
                  </p>
                </div>
              </div>

              <div className="w-full md:h-[360px] lg:h-auto xl:w-[404px] px-[10px] py-[15px] xl:p-[43.17px_49.34px_43.17px_49.34px] shadow-lg">
                <div className="px-3 py-4 xl:p-[27.14px_23.44px_27.14px_23.44px] w-max bg-[#6750A4] rounded-[12px]">
                  <img src="/assets/images/dricon.png" alt="" />
                </div>

                <h1 className="font-bold text-[19.74px] leading-[29.6px] mt-[24px]">
                  Precision in Dosage Delivery
                </h1>

                <div className="w-[61.68px] h-[2.47px] bg-[#00B4FF] mt-[24px]" />

                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>Prioritizes precision for precise dosage delivery.</p>
                </div>
                <div className="text-[17.27px] font-light leading-[24px] text-[#737373] flex mt-[24px] gap-2 ml-2">
                  <GoDotFill size={17} />
                  <p>
                    Crucial for patients requiring specific and controlled
                    medication intake.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pt-[45px] px-5">
            <div className="max-w-[1740px] mx-auto">
              <h1 className="font-extrabold text-[35px] md:text-[50px] leading-[60.25px] text-center">
                Pharmacy
              </h1>
              <p className="font-medium text-[22px] md:text-[25px] leading-[30px] text-center text-[#2A2A2A70] md:mt-[17px]">
                Customizable Solutions for Your Pharmacy
              </p>

              <img
                src="/assets/images/drimg.png"
                className="w-full h-[150px] md:h-full mt-5 md:mt-[60px]"
                alt=""
              />
              <div className="py-10 md:py-[81px]">
                <p className="font-medium text-[18px] md:text-[30px] xl:text-[40px] md:leading-[44.6px] mb-2 md:mb-8">
                  UNISOL understands that each pharmacy operates uniquely.
                  That's why our medicine dispensers offer customizable features
                  tailored to suit your specific needs. From various dispensing
                  options to flexible scheduling capabilities, our solutions
                  adapt to your workflow, enhancing operational efficiency while
                  maintaining the highest standards of patient care.
                </p>

                <div className="flex items-center font-medium text-[16px] md:text-[30px] xl:text-[40px] gap-2  md:leading-[44.6px] ">
                    <GoDotFill size={window.innerWidth < 768 ? 12 : 15} />
                    <p>Seamless Integration with Pharmacy Systems</p>
                </div>
                <div className="flex items-center font-medium text-[16px] md:text-[30px] xl:text-[40px] gap-2 md:leading-[44.6px]">
                  <GoDotFill size={window.innerWidth < 768 ? 12 : 15} />
                  <p>Improved Patient Experience</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {currentEquipment === "Hospital Laundry" && (
        <>
          <div className="w-full h-full py-[51px] bg-[#000000] opacity-90 mt-14 ">
            <div className="max-w-[1366px] mx-auto flex flex-col md:flex-row gap-8   items-center justify-between ">
              <div className="w-[296px] flex flex-col items-center">
                <div className="w-[130px] h-[130px] border rounded-full p-[30px] md:mb-[25px]">
                  <img src="/assets/images/stableicon.png" alt="" />
                </div>

                <p className="text-center text-white font-bold text-[25px] md:text-[32px] leading-[38.4px]">
                  Advanced Automation
                </p>
              </div>
              <div className="w-[296px] flex flex-col items-center">
                <div className="w-[130px] h-[130px] border rounded-full p-[30px] md:mb-[25px]">
                  <img src="/assets/images/evacuation.png" alt="" />
                </div>

                <p className="text-center text-white font-bold text-[25px] md:text-[32px] leading-[38.4px]">
                  Barrier Technology
                </p>
              </div>
              <div className="w-[296px] flex flex-col items-center">
                <div className="w-[130px] h-[130px] border rounded-full p-[30px] md:mb-[25px]">
                  <img src="/assets/images/highflow.png" alt="" />
                </div>

                <p className="text-center text-white font-bold text-[25px] md:text-[32px] leading-[38.4px]">
                  Efficacy and speed
                </p>
              </div>
            </div>
          </div>

          <div className="h-full px-5  bg-black pt-10 md:pt-[121px] pb-10 md:pb-[85px] mb-20 md:mb-10">
            <div className="mx-auto">
              <h1 className="font-extrabold text-white text-[32px] md:text-[50px] text-center leading-[50px]">
                Benefits of {data?.benefits?.title}
              </h1>

              <p className="  text-center text-white font-medium  text-[28px] md:text-[31.28px] leading-[48.74px] mx-auto mt-7 md:mt-[44px]">
                {data?.benefits?.desc}
              </p>

              <div className="md:mt-[60px] 2xl:mt-[90px] flex flex-col gap-5 md:gap-[40px] 2xl:gap-[60px]">
                {data?.benefits?.points?.map((item, i) => (
                  <div key={i} className="">
                    <h3 className="font-semibold text-[22px] whitespace-nowrap md:text-[32.17px] 2xl:leading-[48.74px] text-white">
                      {item.title}
                    </h3>

                    <p className="font-medium text-[18px] md:text-[28px] 2xl:text-[32.17px] 2xl:leading-[48.74px] text-white  mt-[10px] md:mt-[37px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="overflow-hidden">
        <VideoCarousel />
      </div>

      {/* satified  */}

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
                className="w- lg:w-20 lg:h-20 xl:w-full 2xl:h-full"
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
        logo={"/assets/svg/Ignite Sphere.svg"}
        img={"/assets/images/kids.png"}
      />

      <WasteManagementAboutus
        title={equipmentname}
        desc={data?.aboutus?.desc}
        img={"/assets/svg/final.svg"}
      />

      <FAQs />

      <div className="h-full mb-10 bg-[#F2F2F2]">
        <div className="flex justify-center md:justify-around md:gap-10 md:px-5 lg:p-10">
          <div className=" flex flex-col justify-around  gap-8 text-white xl:pl-20 2xl:pl-24">
            <div className="flex flex-col gap-2">
              <div className=" w-28 rounded-md flex justify-center items-center mt-4">
                <img
                  src={"/assets/svg/Ignite Sphere.svg"}
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
        integerityPic={"/assets/images/kennedy.png"}
        Integrity={"Motivation"}
        integerityName={"John F. kennedy"}
        integerityText={"‘’Things do not happen. Things are made to  happen.’’"}
      />
    </>
  );
}

export default StartUpProjectAbout;
