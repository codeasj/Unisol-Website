import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import WasteManagementCard from "../components/WasteManagementCard";
import Support from "../components/Support";
import ContactUs from "../components/ContactUs";
import WasteManagementAboutus from "../components/WasteManagementAboutus";
import VideoCarousel from "../components/VideoCarousel";
import FAQs from "../components/FAQs";
import Integrity from "../components/Integrity";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const equipmentData = {
  "Smart SurgN": {
    id: 1,
    equipmentName: "Smart SurgN",
    bannerImg: "/assets/images/smartsurgnbanner.png",
    desc: "The Smart SurgN machine finds application across various surgical specialties, leveraging its advanced technology to enhance procedures and improve patient care in the following areas:",
    applications: {
      desc: "UNISOL, a frontrunner in the medical and surgical equipment industry, champions sustainable waste management.",
      img: "/assets/images/solidwaste.png",
      data: [
        {
          title: "Solid Waste Generation",
          desc: "The generation of solid waste is influenced by population density, lifestyle, economic activities, and urbanization. Waste includes organic, inorganic, recyclable, and hazardous materials. Managing waste at its source through awareness and reduction strategies is vital to curb excessive generation.",
        },
        {
          title: "On-site Handling and Storage",
          desc: "Proper handling and storage techniques are imperative to prevent environmental contamination and health risks. Segregation, composting, and containment of waste at its origin help minimize adverse impacts on surroundings and ecosystems.",
        },
        {
          title: "Collection Methods",
          desc: "Efficient waste collection systems vary based on locality and waste types. Utilizing segregated bins, scheduled pickups, and involving community participation aids in streamlining collection processes. Addressing challenges like irregular waste disposal and limited infrastructure is pivotal for effective collection.",
        },
        {
          title: "Transfer and Transport",
          desc: "Moving waste from collection points to treatment facilities demands effective transportation methods. Embracing eco-friendly transport options, optimizing routes, and investing in suitable vehicles minimize energy consumption and environmental impact during transit.",
        },
        {
          title: "Material and Resource Recovery",
          desc: "Recovering materials through recycling, composting, and energy recovery reduces the strain on natural resources. Innovative technologies facilitate the extraction of valuable resources from waste, promoting a circular economy and minimizing landfill reliance.",
        },
        {
          title: "Disposal Methods",
          desc: "Disposal involves the final treatment and disposition of residual waste. Landfills, incineration, and biological treatment are among the prevalent disposal methods. However, minimizing disposal by maximizing recycling and recovery remains a primary goal for sustainable waste management.",
        },
      ],
    },
    quotes: [
      "4k Resolution Video",
      "FThree Video Color Modes",
      "Integrated Laser & LED Light Source",
      "Customizable Camera Buttons",
      "Four Imaging Modalities",
      "Future updates via communication ports (SSNet",
    ],
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
      img: "/assets/images/surgisolicon.png",
      desc: "The Smart SurgN machine is an innovative medical device designed to revolutionize surgical procedures through advanced technology and intelligent automation. This cutting-edge system integrates artificial intelligence (AI), robotics, and high-precision surgical tools to enhance the accuracy, efficiency, and safety of various surgical interventions. At its core, the Smart SurgN machine utilizes sophisticated AI algorithms to analyze vast amounts of medical data, including patient information, imaging scans, and surgical protocols. This AI-driven analysis assists surgeons by providing real-time guidance, predictive insights, and personalized recommendations during procedures.",
    },
  },

  "Surrounded Scope": {
    id: 2,
    bannerImg: "/assets/images/surroundedscopebanner.png",
    equipmentName: "Surrounded Scope",
    desc: "Discover Unrivaled Medical Innovations at SURGISOL- Elevating Surgical Precision and Patient Care with Cutting-Edge Technologies.",
    applications: {
      desc: "",
      img: "/assets/images/solidwaste.png",
      data: [
        {
          title: "Laparoscopic Surgery Advancements",
          desc: "The SURROUNDSCOPE's wide 270˚ field-of-view is particularly advantageous in laparoscopic surgeries across various specialties such as:",
        },
        {
          title: "Thoracic Surgical Interventions",
          desc: "In thoracic surgeries involving pleural or lung-related conditions, the SURROUNDSCOPE system's expanded field-of-view minimizes fogging and provides surgeons with an enhanced visual landscape, ensuring accurate and comprehensive procedures (e.g., Lobectomy, Pneumothorax treatment).",
        },
        {
          title: "Minimally Invasive Hernia Repair",
          desc: "The system proves highly beneficial in hernia repairs, including Transabdominal Preperitoneal (TAPP), Totally Extraperitoneal (TEP), and Ventral hernia repairs, enabling precise dissection and efficient closure.",
        },
        {
          title: "Biopsies and Lesion Excision",
          desc: "Surgeons benefit from improved visibility and accuracy in conducting biopsies for mediastinal or pleural lesions, resulting in more precise tissue sampling and reduced operative times.",
        },
        {
          title: "Enhanced Trocar Placements and Suturing",
          desc: "The SURROUNDSCOPE's advanced visual capabilities facilitate precise trocar placements and suturing techniques, ensuring optimal wound closure and reducing the risk of complications.",
        },
        {
          title: "Improved Surgical Training",
          desc: "Beyond its clinical applications, the SURROUNDSCOPE serves as an invaluable tool for surgical training and education. Its enhanced visualization allows trainees to observe intricate procedures more comprehensively, aiding in skill development and proficiency.",
        },
        {
          title: "Reduced Smoke and Fogging",
          desc: "The system's negligible smoke and lack of fogging significantly contribute to a clearer operating field throughout the surgery, enhancing safety and minimizing potential risks associated with impaired visibility.",
        },
        {
          title: "Patient-Centric Benefits",
          desc: " The system's efficiency and safety improvements translate into reduced hospitalization lengths, shorter recovery times, and potentially lower post-operative complications, thereby improving overall patient satisfaction and outcomes. ",
        },
      ],
    },
    benefits: {
      title: "Surrounded Scope",
      desc: "",
      points: [
        {
          title: "Enhanced Safety",
          desc: `The clinical data surrounding the SURROUND SCOPE underscores its ability to significantly improve safety across diverse surgical procedures. With an impressive reduction in hospitalization length and testimonials from 96.9% of surgeons attesting to its superior safety, UNISOL sees this as a pivotal advancement in ensuring patient welfare.`,
        },
        {
          title: "Optimized Efficiency",
          desc: `The system's efficiency is evidenced by reduced surgical durations across various procedures, indicating streamlined workflows and optimized surgical interventions. This efficiency is pivotal in delivering timely and effective care to our patients.`,
        },
        {
          title: "Expanded Field-of-View (FOV)",
          desc: `The wide 270 ̊ field-of-view of the SURROUND SCOPE revolutionizes surgical precision by minimizing blind spots during procedures. This expanded vision enables our surgeons to operate with heightened accuracy and confidence, ultimately translating into better patient outcomes.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `SURGISOL's interest in implementing the cutting-edge SURROUND SCOPE system within our medical facilities. SURGISOL is committed to advancing patient care through innovative technologies, and after comprehensive evaluation, we believe that integrating the SURROUND SCOPE into our surgical practices will significantly elevate our standards of minimally invasive surgery.`,
    },
  },

  "Strom 2.0": {
    id: 3,
    bannerImg: "/assets/images/strombanner.png",
    equipmentName: "Strom 2.0",
    desc: "The Strom® 2.0 series stands at the forefront of electrosurgery, embodying advanced technology and intelligent features that redefine surgical precision and safety. Incorporating Smart Tissue Sensing Technology powered by an ARM Core processor, these devices revolutionize the surgical landscape.",
    applications: {
      desc: "",
      img: "/assets/images/storm.png",
      data: [
        {
          title: "Urologic Procedures",
          desc: "Strom® 2.0 devices find extensive use in urologic surgeries. The ability to perform bipolar resection in a saline environment offers superior cutting effects and efficient coagulation, which are beneficial for procedures involving the urinary system.",
        },
        {
          title: "Gynecologic Surgeries",
          desc: "In gynecology, Strom® 2.0's capabilities are invaluable. The devices allow surgeons to operate in a saline environment with no-lag coagulation, providing precise cutting effects and enhancing surgical outcomes for gynecologic procedures.",
        },
        {
          title: "General Surgery",
          desc: "The versatility of Strom® 2.0 extends to various general surgical procedures. Its enhanced precision, reduced thermal spread, and adaptive technology make it suitable for surgeries across multiple specialties, ensuring optimal tissue effects and safety measures.",
        },
        {
          title: "Minimally Invasive Surgery",
          desc: "Strom® 2.0 devices are conducive to minimally invasive surgical techniques. The devices' precise energy delivery and minimized tissue damage facilitate minimally invasive approaches, aiding in faster recovery for patients.",
        },
        {
          title: "Oncological Surgery",
          desc: "In oncological surgeries, where precision is paramount, Strom® 2.0 devices offer significant advantages. The devices' ability to minimize tissue charring and ensure accurate energy delivery assists surgeons in delicate oncologic procedures.",
        },
        {
          title: "Dermatologic Procedures",
          desc: "Strom® 2.0's precision and reduced thermal spread make it suitable for dermatologic surgeries. It aids in precise tissue effects, contributing to better cosmetic outcomes and quicker recovery for patients undergoing dermatologic procedures.",
        },
      ],
    },
    benefits: {
      title: "Strom 2.0",
      desc: "",
      points: [
        {
          desc: `Enhanced Precision: Strom® 2.0 devices prioritize precise tissue effects through Smart Tissue Sensing Technology. This ensures accurate energy delivery, enhancing surgical precision and outcomes.`,
        },
        {
          desc: `Faster Performance: With improved monopolar performance and LigaProVS™ technology, Strom® 2.0 devices offer faster sealing times. This feature aids in reducing surgical duration, benefiting both surgeons and patients.`,
        },
        {
          desc: `Reduced Thermal Spread: Lower thermal spread in Strom® 2.0 devices minimizes tissue damage, preserving healthy tissue surrounding the targeted area. This reduction contributes to faster healing and recovery post-surgery.`,
        },
        {
          desc: `Versatile Applications: Strom® 2.0 devices are versatile and suitable for a wide range of surgical applications. From urologic procedures to gynecologic surgeries, these devices provide superior cutting effects and efficient coagulation.`,
        },
        {
          desc: `Safety Measures: Integrated Patient Return Electrode Contact Quality Monitoring (PRE-CQM) ensures uncompromised patient safety during surgical procedures. Surgeons can rely on these devices for consistent safety standards.`,
        },
        {
          desc: `Adaptive Technology: The Smart Tissue Sensing Technology powered by ARM Core adapts to various tissue types, allowing for real-time adjustment of energy delivery. This adaptability optimizes precision across diverse tissue structures.`,
        },
        {
          desc: `Minimal Tissue Charring: Enhanced LigaProVS™ technology in Strom® 2.0 devices minimizes tissue charring, contributing to better healing post-surgery and reducing the risk of complications.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `The Strom® 2.0 series stands at the forefront of electrosurgery, embodying advanced technology and intelligent features that redefine surgical precision and safety. Incorporating Smart Tissue Sensing Technology powered by an ARM Core processor, these devices revolutionize the surgical landscape.`,
    },
  },

  "Smoke Evacuation": {
    id: 4,
    bannerImg: "/assets/images/smokebanner.png",
    equipmentName: "Smoke Evacuation",
    desc: "Discover Unrivaled Medical Innovations at UNISOL - Elevating Surgical Precision and Patient Care with Cutting-Edge Technologies.",
    applications: {
      desc: "",
      // img: '/assets/images/storm.png',
      data: [
        {
          title: "Laparoscopic Procedures",
          desc: "The AirSeal® System's benefits are particularly evident in laparoscopic surgeries, where its unique functionalities enhance the surgeon's capabilities and procedural outcomes.",
        },
        {
          title: "Robotic Surgery",
          desc: "Integrating the system into robotic surgery ensures a higher level of precision and control, augmenting the capabilities of our surgical team and positively impacting patient care.",
        },
      ],
    },
    benefits: {
      title: "Implementing the AirSeal® System",
      desc: "",
      points: [
        {
          title: "Enhanced Surgical Precision",
          desc: `The AirSeal® System's 3-in-1 functionality ensures stable pneumoperitoneum, constant smoke evacuation, and valve-free access, contributing to higher surgical precision and accuracy.`,
        },
        {
          title: "Reduced Procedure Time",
          desc: `By providing a stable pneumoperitoneum and facilitating uninterrupted surgical processes, the system effectively reduces procedure time, enhancing overall efficiency in the operating room.`,
        },
        {
          title: "Improved Patient Outcomes",
          desc: `The system's capabilities translate into improved patient outcomes due to reduced exposure to smoke, enhanced visualization, and a minimally invasive approach, leading to quicker recovery times.`,
        },
        {
          title: "Optimized Operating Efficiency",
          desc: `With its ability to streamline surgical procedures and reduce complications, the AirSeal® System enhances the overall operating efficiency of our healthcare facility, ensuring smoother workflow and resource optimization.`,
        },
        {
          title: "Cost-Efficient Solution",
          desc: `By minimizing operative time, the system ultimately leads to reduced costs associated with surgical interventions, offering a cost-efficient solution without compromising on quality.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `The AirSeal® System's unique ability to provide stable pneumoperitoneum, constant smoke evacuation, and valve-free access to the abdominal cavity has been demonstrated to reduce procedural time, resulting in increased operating efficiency.2
            In addition, surgeons are enabled to achieve the benefits of operating at lower pressure without compromising exposure. See the difference in your next laparoscopic or robotic procedure!`,
    },
  },
  Vcare: {
    id: 5,
    bannerImg: "/assets/images/vcarebanner.png",
    equipmentName: "Vcare",
    desc: "Uterine manipulation in gynecological surgeries plays a pivotal role in ensuring precision, accessibility, and successful outcomes. Among the groundbreaking innovations, VCare® Plus and VCare® DX stand out as advanced uterine manipulators, offering unparalleled assistance during procedures like hysterectomy, salpingectomy, oophorectomy, myomectomy, and more.",
    applications: {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      img: "/assets/images/vcarecomponent.png",
      data: [
        {
          noBoldTitle: true,
          title: "Lorem Ipsum is simply dummy text is simply dummy text  ",
        },
        {
          noBoldTitle: true,
          title:
            "Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text is simply dummy text",
        },
        {
          noBoldTitle: true,
          title: "Lorem Ipsum is simply dummy text is simply dummy text",
        },
        {
          noBoldTitle: true,
          title:
            "Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text.",
        },
        {
          noBoldTitle: true,
          title:
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy .",
        },
        {
          noBoldTitle: true,
          title:
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text lorem Ipsum is simply.",
        },
      ],
    },
    benefits: {
      title: "Implementing the AirSeal® System",
      desc: "",
      points: [
        {
          title: "Enhanced Surgical Precision",
          desc: `The AirSeal® System's 3-in-1 functionality ensures stable pneumoperitoneum, constant smoke evacuation, and valve-free access, contributing to higher surgical precision and accuracy.`,
        },
        {
          title: "Reduced Procedure Time",
          desc: `By providing a stable pneumoperitoneum and facilitating uninterrupted surgical processes, the system effectively reduces procedure time, enhancing overall efficiency in the operating room.`,
        },
        {
          title: "Improved Patient Outcomes",
          desc: `The system's capabilities translate into improved patient outcomes due to reduced exposure to smoke, enhanced visualization, and a minimally invasive approach, leading to quicker recovery times.`,
        },
        {
          title: "Optimized Operating Efficiency",
          desc: `With its ability to streamline surgical procedures and reduce complications, the AirSeal® System enhances the overall operating efficiency of our healthcare facility, ensuring smoother workflow and resource optimization.`,
        },
        {
          title: "Cost-Efficient Solution",
          desc: `By minimizing operative time, the system ultimately leads to reduced costs associated with surgical interventions, offering a cost-efficient solution without compromising on quality.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `The VCARE uterine manipulator (see Figure 1) incorporates specially designed forward (cervical) and back (vaginal) cups. The cervical cup displaces the ureters laterally, retracts the urinary bladder, compresses the uterine vessels, and defines the incision for the colpotomy. The vaginal cup forms a seal to prevent loss of pneumoperitoneum during colpotomy and displaces the sigmoid colon away from the uterus. The manipulator tube conforms to the shape of the pelvic curve, and allows for easy manipulation of the uterus. A 10 cc inflatable balloon at the distal end is used to stabilize the manipulator tube within the uterine cavity. Properly inserted, in the supine position, the VCARE handle rests at a level above a patient’s thighs, where it is conveniently accessible for uterine manipulation. The handle is designed to be grasped and held`,
    },
  },
  Dozee: {
    id: 5,
    bannerImg: "/assets/images/dozeebanner.png",
    equipmentName: "Dozee",
    desc: "Dozee, your guardian of health and wellness. We specialize in cutting-edge, contactless health monitoring solutions designed to bring hospital-grade care to the comfort of your home. With Dozee, experience a revolution in remote health monitoring that ensures precise, real-time tracking of vital health parameters.",
    applications: {
      desc: "",
      img: "/assets/images/dozeemachine.png",
      data: [
        {
          title: "Track Your Health Daily",
          desc: "From heart rate to respiration, sleep, and stress levels, Dozee diligently monitors your well-being around the clock.",
        },
        {
          title: "Medical-Grade Accuracy",
          desc: "We pride ourselves on a staggering accuracy rate of 98.4%, comparable to professional medical devices, ensuring unparalleled accuracy for your peace of mind.",
        },
        {
          title: "AI-Driven Health Alerts",
          desc: "Our advanced AI engine proactively scans and identifies potential health concerns, alerting you in advance to safeguard your well-being.",
        },
      ],
    },
    benefits: {
      title: "Implementing the AirSeal® System",
      desc: "",
      points: [
        {
          title: "Enhanced Surgical Precision",
          desc: `The AirSeal® System's 3-in-1 functionality ensures stable pneumoperitoneum, constant smoke evacuation, and valve-free access, contributing to higher surgical precision and accuracy.`,
        },
        {
          title: "Reduced Procedure Time",
          desc: `By providing a stable pneumoperitoneum and facilitating uninterrupted surgical processes, the system effectively reduces procedure time, enhancing overall efficiency in the operating room.`,
        },
        {
          title: "Improved Patient Outcomes",
          desc: `The system's capabilities translate into improved patient outcomes due to reduced exposure to smoke, enhanced visualization, and a minimally invasive approach, leading to quicker recovery times.`,
        },
        {
          title: "Optimized Operating Efficiency",
          desc: `With its ability to streamline surgical procedures and reduce complications, the AirSeal® System enhances the overall operating efficiency of our healthcare facility, ensuring smoother workflow and resource optimization.`,
        },
        {
          title: "Cost-Efficient Solution",
          desc: `By minimizing operative time, the system ultimately leads to reduced costs associated with surgical interventions, offering a cost-efficient solution without compromising on quality.`,
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `Ballistocardiography uses mechanical vibrations produced by micro and macro body movements to study cardiac functions, extended to pulmonary and other functions. Dozee sensors placed under the mattress capture micro-vibrations produced in every heart beat, respiration cycles, tremors, seizures, and posture change, without any contact.AI algorithms convert the raw vibration data into meaningful bio-markers like heart rate, respiration rate, blood pressure, sleep cycle, etc. with clinical grade accuracy. Data can be remotely monitored using the SecureRPM Web and Smartphone application.Dozee's Early Warning System analyses patients' vital trends and automates risk scoring for effective triaging in the wards. Our SmartAlerts system provides timely and customizable alerts for each patient.`,
    },
  },
  "Vaginal Speculum": {
    id: 6,
    bannerImg: "/assets/images/vaginalspecularbanner.png",
    equipmentName: "Vaginal Speculum",
    desc: "PRAN Medsystems is a company managed by a group of medical professionals from different fields of super specialisation. The Company is into development, manufacture and sale of an array of novel consumables and equipment that will enhance the quality of medical practice of modern times. Though the dearth of new systems of equipment and devices have never plagued the medical practice, effective and user friendly models that can really serve the purpose for which they are proponed.",
    applications: {
      desc: "",
      img: "/assets/images/vaginalspecular.png",
      data: [
        {
          title: "Precise Examinations",
          desc: "Allows for detailed examinations of the cervix and vaginal canal by gently widening the vaginal walls.",
        },
        {
          title: "Comprehensive Assessments",
          desc: "Provides a clear view for medical professionals to identify abnormalities or irregularities that may require attention.",
        },
        {
          title: "Versatile Sizing",
          desc: "Available in various sizes to cater to different anatomies, ensuring comfort and tailored examinations for individuals.",
        },
        {
          title: "Comfortable Examinations",
          desc: "Smaller speculums accommodate intact hymens, enabling meticulous and comfortable examinations.",
        },
        {
          title: "Diagnostic Versatility",
          desc: "Facilitates various diagnostic procedures such as Pap smears, sample collection for tests, and minor gynecological procedures.",
        },
        {
          title: "Treatment Facilitation",
          desc: "Aids in procedures like intrauterine device (IUD) placement or colposcopies for effective treatment.",
        },
        {
          title: "Promotes Regular Check-ups",
          desc: "Focus on patient comfort encourages regular gynecological visits, ensuring optimal reproductive health care.",
        },
      ],
    },
    aboutus: {
      img: "/assets/images/surgisolicon.png",
      desc: `Ballistocardiography uses mechanical vibrations produced by micro and macro body movements to study cardiac functions, extended to pulmonary and other functions. Dozee sensors placed under the mattress capture micro-vibrations produced in every heart beat, respiration cycles, tremors, seizures, and posture change, without any contact.AI algorithms convert the raw vibration data into meaningful bio-markers like heart rate, respiration rate, blood pressure, sleep cycle, etc. with clinical grade accuracy. Data can be remotely monitored using the SecureRPM Web and Smartphone application.Dozee's Early Warning System analyses patients' vital trends and automates risk scoring for effective triaging in the wards. Our SmartAlerts system provides timely and customizable alerts for each patient.`,
    },
  },
};

function HealthCareAbout() {
  const [currentEquipment, setCurrentEquipment] = useState("");
  const [data, setData] = useState({});
  const { equipmentname } = useParams();
  const [bold, setBold] = useState(1);
  const [unbold, setUnbold] = useState(2);

  useEffect(() => {
    setCurrentEquipment(equipmentname);
    setData(equipmentData[equipmentname]);
  }, [equipmentname]);

  // console.log(data)
  return (
    <>
      <div className="relative  w-full h-full">
        <img
          src={data?.bannerImg}
          alt="banner"
          className=" h-full lg:h-[809px] w-full"
        />

        <div className=" absolute w-full h-full bg-[#0038FD] top-0 opacity-10"></div>

        <div className=" absolute top-[30%] left-[14%]">
          <h2 className="text-white text-[24px] md:text-[64px] font-bold m-0">
            {equipmentname}
          </h2>
          <h3 className="text-white text-xl md:text-2xl leading-[31.2px] font-semibold">
            Healthcare /{" "}
            <span className=" text-lg text-blue-500">{equipmentname}</span>{" "}
          </h3>
        </div>
      </div>

      <div className="pt-[46px] px-10 md:px-[49px]">
        <div className="max-w-[1568px] flex flex-col mx-auto items-center">
          <h3 className="font-bold text-[24px]  text-center leading-[31.2px] text-[#00B4FF]">
            Healthcare
          </h3>
          <h2 className=" text-[24px]  lg:text-[40px] xl:text-[50px] font-extrabold leading-[60px] text-center md:mt-2.5">
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
          className="absolute hidden lg:block right-0 top-0 lg:w-[270px] xl:w-[350px] 2xl:w-auto "
        />
        <img
          src="/assets/images/pattern2.png"
          alt=""
          className=" absolute hidden lg:block  left-0 bottom-0  lg:w-[270px] xl:w-[350px] 2xl:w-auto "
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
                  noBoldTitle={item.noBoldTitle}
                />
              ))}
            </div>
            <div className="flex ">
              <img
                src={data?.applications?.img}
                alt=""
                className="w-full hidden lg:block object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* quotes */}
      {currentEquipment === "Smart SurgN" && (
        <div className="mt-[50px]  2xl:mb-[150px] ">
          <div className="w-full  2xl:w-[1485px] mx-auto grid md:grid-cols-2  place-items-center">
            <div className="relative  w-[80%] 2xl:w-[676px] h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute  w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[21px] xl:text-[27.08px] relative">
                4k Resolution Video
              </p>
            </div>
            <div className="relative w-[80%] 2xl:w-[676px] h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[21px] xl:text-[27.08px] relative">
                FThree Video Color Modes
              </p>
            </div>
            <div className="relative w-[80%] 2xl:w-[676px]  h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[21px] xl:text-[27.08px] relative">
                Integrated Laser & LED Light Source
              </p>
            </div>
            <div className="relative w-[80%] 2xl:w-[676px]   h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[21px] xl:text-[27.08px] relative">
                Customizable Camera Buttons
              </p>
            </div>
            <div className="relative w-[80%] 2xl:w-[676px]   h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[21px] xl:text-[27.08px] relative">
                Four Imaging Modalities
              </p>
            </div>
            <div className="relative  w-[80%] 2xl:w-[676px]  h-[100px] md:h-[177.84px] flex justify-center items-center">
              <img
                src="/assets/images/quotesbanner.png"
                className=" absolute w-auto h-auto object-cover"
                alt=""
              />
              <p className="text-white font-bold leading-[33.58px] text-[18px] md:text-[21px] xl:text-[27.08px] relative">
                Future updates via communication ports
              </p>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Surrounded Scope" && (
        <div className="mt-10 lg:mt-0 w-full h-full bg-[#2A2A2A] py-[46px] relative  ">
          <div className="flex justify-center items-center w-full h-full mx-auto  max-w-[1920px]  ">
            <img
              src="/assets/images/blueball1.png"
              alt=""
              className=" absolute left:[50%] md:left-[330px] bottom-[-46px] "
            />
            <img
              src="/assets/images/blueball1.png"
              alt=""
              className=" absolute bottom-[66px] right-[238px] "
            />
            <img
              src="/assets/images/blueball2.png"
              alt=""
              className=" absolute right-0 bottom-[100%] "
            />
            <img
              src="/assets/images/cube.png"
              alt=""
              className=" absolute left-[37px] top-[68px] "
            />
            <img
              src="/assets/images/surroundedscopebanner-2.png "
              alt=""
              className=""
            />
          </div>
        </div>
      )}

      {/* airseal IFS */}
      {currentEquipment === "Smoke Evacuation" && (
        <div className="w-full ">
          <div className="flex items-center max-w-[1638px] pt-16 mx-5 xl:mx-10 2xl:mx-auto gap-[20px] lg:gap-[50px] xl:gap-[95px]">
            <div>
              <h1 className="font-bold text-[34px] text-center md:text-start md:text-[40px] xl:text-[50px] leading-[65px]">
                Airseal IFS
              </h1>
              <img
                src="/assets/images/airseal.png"
                alt=""
                className=" md:hidden  h-auto w-auto object-contain"
              />
              <p className=" text-justify text-[20px] xl:text-[25px] leading-[30px] xl:leading-[37.87px] font-medium">
                The AirSeal® System has emerged as a groundbreaking innovation
                in laparoscopic and robotic surgery. It redefines conventional
                insufflation, trocar, and filtered tubing systems, ushering in a
                new era of surgical precision and efficiency.
              </p>
              <button className="mt-[20px] px-2 md:px-[20px] xl:px-[59px] py-3 md:py-[18px] xl:py-[23px] bg-[#00B4FF] rounded-[6px] flex items-center gap-1 md:gap-[12px]">
                <FaArrowDown size={20} fill="white" />
                <p className="font-bold text-[25px] leading-[25px] text-white">
                  Brochure
                </p>
              </button>
            </div>
            <img
              src="/assets/images/airseal.png"
              alt=""
              className="w-[300px] lg:w-[500px] xl:w-[600px] hidden md:block 2xl:w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* features */}
      {currentEquipment === "Strom 2.0" && (
        <div className="py-[65px] md:px-10 w-full h-full bg-[#0152A8]  mt-10">
          <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-around gap-10 lg:gap-[201.5px]">
            <div className="w-[251.06px] h-[215px] xl:h-[269.16px]px-[23.71px] bg-white flex flex-col items-center py-[33.4px]">
              <div className="bg-[#F3FCFF] h-[73.27px] w-[73.27px] rounded-full flex justify-center items-center">
                <img src="/assets/images/missionicon.png" alt="" />
              </div>

              <h1 className="mt-[15px] xl:mt-[30.17px] font-semibold text-[17.24px] leading-[25.86px]">
                Mission
              </h1>
              <p className="font-light px-2 text-[10.78px] leading-[16.16px] text-center mt-[4px] xl:mt-[8.48px] text-[#2A2A2A80]">
                Preferred Choice for surgeons using Energy based devices and
                intelligent camera systems to positively impact surgical
                outcomes for more Patients.
              </p>
            </div>
            <div className="w-[251.06px] h-[215px] xl:h-[269.16px] px-[23.71px] bg-[#CDF0FF] flex flex-col items-center py-[33.4px]">
              <div className="bg-[#F3FCFF] h-[73.27px] w-[73.27px] rounded-full flex justify-center items-center">
                <img src="/assets/images/visionicon.png" alt="" />
              </div>

              <h1 className="mt-[15px] xl:mt-[30.17px] font-semibold text-[17.24px] leading-[25.86px]">
                Vision
              </h1>
              <p className="font-light pb-10 px-2 text-[10.78px] leading-[16.16px] text-center mt-[4px] xl:mt-[8.48px] text-[#2A2A2A80]">
                To be recognised as a comprehensive surgical solutions provider
                for innovative technologies for patients worldwide.
              </p>
            </div>
            <div className="w-[251.06px] h-[215px] xl:h-[269.16px] px-[23.71px] bg-white flex flex-col items-center py-[33.4px]">
              <div className="bg-[#F3FCFF] h-[73.27px] w-[73.27px] rounded-full flex justify-center items-center">
                <img src="/assets/images/valuesicon.png" alt="" />
              </div>

              <h1 className="mt-[15px] xl:mt-[30.17px] font-semibold text-[17.24px] leading-[25.86px]">
                Core Values
              </h1>
              <p className="font-light text-[10.78px] leading-[16.16px] text-center mt-[4px] xl:mt-[8.48px] text-[#2A2A2A80]">
                Innovative <br />
                Quality <br />
                Care
              </p>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Vcare" && (
        <div className="w-full h-full pt-[52px] pb-[38.62px]">
          <div className="max-w-[1770px] mx-auto flex flex-col md:flex-row  items-center gap-10 justify-evenly">
            <div className="w-[367.62px] flex flex-col items-center rounded-[9.84px] p-[29.51px_39.34px_29.51px_39.34px] shadow-md">
              <div className="w-[61.48px] h-[61.48px] bg-[#E8F5E9] rounded-[22.13px_6.15px_12.3px_6.15px] flex justify-center items-center">
                <img
                  src="/assets/images/peopleicon.png"
                  alt=""
                  className="w-[70%]"
                />
              </div>

              <h1 className="mt-[19.6px] font-bold text-[34.43px] leading-[44.26px]">
                Lorem ipsum
              </h1>

              <p className="p-[9.84px] font-normal text-[17.21px] leading-[24.59px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            <div className="w-[367.62px] flex flex-col items-center rounded-[9.84px] p-[29.51px_39.34px_29.51px_39.34px] shadow-md">
              <div className="w-[61.48px] h-[61.48px] bg-[#E8F5E9] rounded-[22.13px_6.15px_12.3px_6.15px] flex justify-center items-center">
                <img
                  src="/assets/images/peopleicon.png"
                  alt=""
                  className="w-[70%]"
                />
              </div>

              <h1 className="mt-[19.6px] font-bold text-[34.43px] leading-[44.26px]">
                Lorem ipsum
              </h1>

              <p className="p-[9.84px] font-normal text-[17.21px] leading-[24.59px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            <div className="w-[367.62px] flex flex-col items-center rounded-[9.84px] p-[29.51px_39.34px_29.51px_39.34px] shadow-md">
              <div className="w-[61.48px] h-[61.48px] bg-[#E8F5E9] rounded-[22.13px_6.15px_12.3px_6.15px] flex justify-center items-center">
                <img
                  src="/assets/images/peopleicon.png"
                  alt=""
                  className="w-[70%]"
                />
              </div>

              <h1 className="mt-[19.6px] font-bold text-[34.43px] leading-[44.26px]">
                Lorem ipsum
              </h1>

              <p className="p-[9.84px] font-normal text-[17.21px] leading-[24.59px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Vcare" && (
        <div className="w-full h-full bg-[#0152A8] py-[100px] pb-[61px] relative overflow-hidden">
          <img
            src="/assets/images/sizebanner.png"
            alt=""
            className=" absolute top-0 bottom-0 z-0 opacity-10"
          />
          <img
            src="/assets/images/sizesimages.png"
            alt=""
            className="mx-auto w-[1355.8px] h-[297px] object-contain relative z-20"
          />
        </div>
      )}

      {currentEquipment === "Vcare" && (
        <div className="w-full pt-10 pb-10  2xl:py-0 h-full bg-[#DFE9F2]">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-0 mx-5 lg:mr-5 xl:mr-10 items-center">
            <div className="lg:w-[561px] lg:ml-14 xl:ml-[169px] ">
              <div className=" font-extrabold text-[28px] md:text-[40px] xl:text-[55px]  2xl:text-[64px] md:leading-[60px] xl:leading-[77.12px]">
                <p className="text-[#095C89]">The improve ergonomic handle</p>
                <p className="text-[#039AD9]">
                  provides better manipulation{" "}
                  <br className="hidden md:block" /> and access{" "}
                  <br className="hidden md:block" /> to key targets
                </p>
              </div>
            </div>
            <img
              src="/assets/images/image 302.png"
              alt=""
              className="w-[500px] md:w-[470px] lg:w-[500px] 2xl:w-auto"
            />
          </div>
        </div>
      )}

      {currentEquipment === "Smoke Evacuation" && (
        <div className="w-full h-full px-5 mt-10 py-[51px] bg-[#000000] opacity-90">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-10 justify-around">
            <div className="w-[296px] flex flex-col items-center">
              <div className="w-[130px] h-[130px] border rounded-full p-[30px] mb-[25px]">
                <img src="/assets/images/stableicon.png" alt="" />
              </div>

              <p className="text-center text-white font-bold text-[28px] lg:text-[32px] leading-[38.4px]">
                Stable pheumoperitoneum
              </p>
            </div>
            <div className="w-[296px] flex flex-col items-center">
              <div className="w-[130px] h-[130px] border rounded-full p-[30px] mb-[25px]">
                <img src="/assets/images/evacuation.png" alt="" />
              </div>

              <p className="text-center text-white font-bold text-[28px] lg:text-[32px] leading-[38.4px]">
                Constant Smoke Evacuation
              </p>
            </div>
            <div className="w-[296px] flex flex-col items-center">
              <div className="w-[130px] h-[130px] border rounded-full p-[30px] mb-[25px]">
                <img src="/assets/images/highflow.png" alt="" />
              </div>

              <p className="text-center text-white font-bold text-[28px] lg:text-[32px] leading-[38.4px]">
                {" "}
                High Flow <br />
                Insufflation
              </p>
            </div>
          </div>
        </div>
      )}

      {/* impact */}
      {currentEquipment === "Smoke Evacuation" && (
        <div className="w-full h-full 2xl:pb-[50px] pt-10 md:pt-[103px]">
          <div className="flex flex-col mx-5 lg:mx-auto items-center">
            <h1 className="font-extrabold text-[28px] lg:text-[32px] md:text-[40px] xl:text-[50px] leading-[50px] text-center">
              Our Impact
            </h1>
            <p className="md:mt-[32px]  font-medium text-[18px] md:text-[25px] md:leading-[30px] text-center">
              At UNISOL, our commitment to advancing healthcare technologies is
              epitomized through our partnership with the innovative AirSeal®
              System. The integration of this cutting-edge technology has
              revolutionized the landscape of surgical procedures, creating a
              substantial impact on healthcare providers and patients alike.
            </p>
          </div>
          <div className="max-w-[1646px] mx-auto flex flex-col md:flex-row gap-[100px] 2xl:gap-[161px] items-center mt-[76px]">
            <img
              src="/assets/images/airsealequipment.png"
              alt=""
              className="w-[350px] lg:w-[550px] xl:w-[670px] 2xl:w-auto"
            />
            <div className="flex flex-col  gap-2 md:gap-[30px] 2xl:gap-[76px]">
              <div className="flex gap-[20px] 2xl:gap-[45.92px] items-center">
                <GoDotFill fill="#00B4FF" size={25} />
                <p className="font-bold text-[24px] md:text-[30px] xl:text-[35px] 2xl:text-[51.02px] 2xl:leading-[77.3px]">
                  Reduced Operative Time
                </p>
              </div>
              <div className="flex gap-[20px] 2xl:gap-[45.92px] items-center">
                <GoDotFill fill="#00B4FF" size={25} />
                <p className="font-bold  text-[24px] md:text-[30px] xl:text-[35px] 2xl:text-[51.02px] 2xl:leading-[77.3px]">
                  Increase Operative Efficinecy
                </p>
              </div>
              <div className="flex gap-[20px] 2xl:gap-[45.92px] items-center">
                <GoDotFill fill="#00B4FF" size={25} />
                <p className="font-bold  text-[24px] md:text-[30px] xl:text-[35px] 2xl:text-[51.02px] 2xl:leading-[77.3px]">
                  Reduce Pack Time
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Dozee" && (
        <div className="pt-16 md:pt-20 lg:pt-[40px] mx-5 md:mx-10 -mb-5 md:mb-0 md:pb-10 2xl:pb-[124px] ">
          <div className="flex justify-between items-center md:gap-2 xl:gap-[20px] 2xl:gap-[43px]">
            <div className="md:w-[444px] flex flex-col gap-7 md:gap-[80px] xl:gap-[150px] ">
              <div className="flex flex-col md:flex-row  items-center gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex flex-col md:flex-row items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/bedicon.png"
                    alt=""
                    className="mx-10"
                  />
                </div>
                <p className="font-medium text-[18px] text-center md:text-start md:text-[22px] xl:text-[24px] 2xl:text-[25px] md:leading-[37.87px]">
                  Improved ICU Bed throughput
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/monitoricon.png"
                    alt=""
                    className="mx-9"
                  />
                </div>
                <p className="font-medium text-[18px]  md:text-[22px]  text-center md:text-start xl:text-[25px] md:leading-[37.87px]">
                  Improved Clinical Outcomes & Patient Safety
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/bedicon.png"
                    alt=""
                    className="mx-10"
                  />
                </div>
                <p className="font-medium text-[18px]  md:text-[22px] text-center md:text-start xl:text-[24px] md:leading-[37.87px]">
                  Improved infection control
                </p>
              </div>
            </div>

            <img
              src="/assets/images/bedrest.png"
              alt=""
              className="hidden lg:block w-[400px] xl:w-[500px] 2xl:w-auto h-auto"
            />

            <div className="md:w-[444px] flex flex-col  gap-7 md:gap-[80px] xl:gap-[150px] ">
              <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/drequipicon.png"
                    alt=""
                    className="mx-10"
                  />
                </div>
                <p className="font-medium text-[18px]  md:text-[22px] text-center md:text-start  xl:text-[24px] md:leading-[37.87px]">
                  Improved ICU Bed throughput
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/nurseicon.png"
                    alt=""
                    className="mx-9"
                  />
                </div>
                <p className="font-medium  text-[18px]  md:text-[22px] text-center md:text-start xl:text-[24px] md:leading-[37.87px]">
                  Improved Clinical Outcomes & Patient Safety
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-[21px]">
                <div className="w-[80px] md:w-[98.29px] h-[86px] bg-[#0055D2] flex items-center justify-center rounded-[26.92px_26.92px_26.92px_0px]">
                  <img
                    src="/assets/images/mentalicon.png"
                    alt=""
                    className="mx-9"
                  />
                </div>
                <p className="font-medium  text-[18px]  md:text-[22px] text-center md:text-start xl:text-[24px] md:leading-[37.87px]">
                  Improved infection control
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Vaginal Speculum" && (
        <div className="pt-16 md:pt-[100px] lg:pt-20 ">
          <div className="w-full mx-auto">
            <div className="w-full flex flex-col md:flex-row gap-10 md:gap-2  items-center  justify-around">
              <div className="w-[250px] h-[420px]  flex flex-col items-center">
                <div className="relative w-[250px] h-[220px] lg:h-[280px] flex justify-center items-center">
                  <div className=" absolute w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute  w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3" />

                  <div className="w-[100px] h-[100px] bg-[#ffffff] flex justify-center items-center relative z-30 rounded-full">
                    <img
                      src="/assets/images/supporticon.png"
                      alt=""
                      className=" w-full"
                    />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Unique and Innovative
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-2 md:mt-[20px]">
                  Our Products are Unique and Innovative in the industry.
                </p>
              </div>

              <div className="w-[250px] h-[420px] flex flex-col items-center">
                <div className="relative w-[250px] h-[220px] lg:h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3 lg:bottom-0" />

                  <div className="w-[100px] h-[100px] bg-[#ffffff] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/dropicon.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Ergonomic Designs
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5  mt-2 md:mt-[20px]">
                  Experience ultimate comfort and functionality with our
                  ergonomic design.
                </p>
              </div>

              <div className="w-[250px] h-[420px] flex flex-col items-center">
                <div className="relative w-[250px] h-[220px] lg:h-[250px] flex justify-center items-center">
                  <div className=" absolute w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#CAEFFF] z-20 " />
                  <div className=" absolute w-[220px] h-[220px]  lg:w-[250px] lg:h-[250px] rounded-full bg-[#00B4FF] z-10 bottom-3 lg:bottom-0" />

                  <div className="w-[100px] h-[100px] bg-[#ffffff] flex justify-center items-center relative z-30 rounded-full">
                    <img src="/assets/images/useicon.png" alt="" />
                  </div>
                </div>

                <h1 className="font-bold text-[25px] leading-[34.5px] text-center mt-[20px]">
                  Ease of Use
                </h1>

                <p className=" font-normal text-[20px] leading-[30.3px] text-center px-5 mt-2 md:mt-[20px]">
                  Simplicity meets innovation. Our user-centric designs redefine
                  ease to use
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Vaginal Speculum" && (
        <div className="w-full h-full py-14 md:py-[97px] bg-[#2A2A2A] mt-10 px-5">
          <div className="w-full mx-auto lg:flex grid grid-cols-2 place-items-center gap-10 justify-between">
            <img
              src="/assets/images/operationimg1.png"
              alt=""
              className="aspect-[450/352]  w-auto h-[170px] lg:h-[230px] xl:h-[280px] 2xl:h-auto"
            />
            <img
              src="/assets/images/operationimg2.png"
              alt=""
              className="aspect-[281/352]  w-auto md:w-[220px] h-[170px] lg:h-[230px] xl:h-[280px] 2xl:h-auto"
            />
            <img
              src="/assets/images/operationimg3.png"
              alt=""
              className="aspect-[281/352]  w-auto md:w-[220px] h-[170px] lg:h-[230px] xl:h-[280px] 2xl:h-auto "
            />
            <img
              src="/assets/images/operationimg4.png"
              alt=""
              className="aspect-[450/352]  w-auto md:w-[220px] h-[170px] lg:h-[230px] xl:h-[280px] lg:pr-2 xl:pr-0 2xl:h-auto"
            />
          </div>
        </div>
      )}

      {/* Benefits */}
      {currentEquipment !== "Vcare" ||
        (currentEquipment !== "Dozee" && (
          <div className="h-full px-5  bg-black pt-10 md:pt-[121px] pb-10 md:pb-[85px] -mb-12 md:mb-0">
            <div className="mx-auto ">
              <h1 className="font-extrabold text-white text-[32px] md:text-[50px] text-center leading-[50px]">
                Benefits of {data?.benefits?.title}
              </h1>

              <p className=" text-center text-white font-medium  text-[28px] md:text-[31.28px] leading-[48.74px] mx-auto mt-7 md:mt-[44px]">
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
        ))}

      {currentEquipment === "Strom 2.0" && (
        <div className="w-full h-full pt-14 md:pt-[100px]">
          <div className="max-w-[1733px] mx-5 md:mx-auto">
            <img
              src="/assets/images/strommachine.png"
              alt=""
              className=" mx-auto w-auto  h-auto md:w-[1598px] lg:h-[660px] object-contain"
            />

            <div className=" mt-[80px]">
              <h1 className="text-center font-extrabold text-[27px] md:text-[45px] 2xl:text-[50px] md:leading-[60px]">
                Smart Tissue Using Technology
              </h1>
              <p className=" font-medium text-[18px] md:text-[28px] 2xl:text-[32.17px] md:leading-[40px] 2xl:leading-[48.74px] text-center text-[#00000070] max-w-[1580px] mx-auto mt-10 md:mt-[30px]">
                Enhanced Precision: Strom® 2.0 devices prioritize precise tissue
                effects through Smart Tissue Sensing Technology. This ensures
                accurate energy delivery, enhancing surgical precision and
                outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-[44px] mt-[32px]">
              <div className=" w-full flex flex-col items-center">
                <div className="w-[140px] h-[120px]  2xl:w-[160px] 2xl:h-[140px] bg-[#00B4FF] rounded-[43.82px] rounded-tr-[43.82px] rounded-br-[43.82px] rounded-bl-[0px] rounded-tl-[43.82px] flex justify-center items-center">
                  <p className="text-[84.6px] text-white font-bold ">1</p>
                </div>
                <h1 className=" mt-5 md:mt-[45px] 2xl:mt-[60px] text-[#00B4FF] text-[28px] md:text-[34px]  2xl:text-[36px] md:leading-[54.54px] text-center">
                  Precise Power Delivery
                </h1>

                <p className="font-medium text-[18px] md:text-[24px] 2xl:text-[25px] 2xl:leading-[37.87px] text-center">
                  Builds in Core allows rapid processing of tissue impedance
                  resulting accurate delivery.
                </p>
              </div>
              <div className=" w-full flex flex-col items-center">
                <div className="w-[140px] h-[120px]  2xl:w-[160px] 2xl:h-[140px] bg-[#00B4FF] rounded-[43.82px] rounded-tr-[43.82px] rounded-br-[43.82px] rounded-bl-[0px] rounded-tl-[43.82px] flex justify-center items-center">
                  <p className="text-[84.6px] text-white font-bold ">2</p>
                </div>
                <h1 className=" mt-5 md:mt-[45px] 2xl:mt-[60px] text-[#00B4FF] text-[28px] md:text-[34px]  2xl:text-[36px] md:leading-[54.54px] text-center">
                  Advanced Algorithm Based Controls
                </h1>

                <p className="font-medium text-[18px] md:text-[24px] 2xl:text-[25px] 2xl:leading-[37.87px] text-center">
                  Allows Continuous Control of various electrical parameters of
                  generator based on continuous information processing from
                  surgical site.
                </p>
              </div>

              <div className=" w-full flex flex-col items-center justify-aroun mx-auto   ">
                <div className="w-[140px] h-[120px]  2xl:w-[160px] 2xl:h-[140px] bg-[#00B4FF] rounded-[43.82px] rounded-tr-[43.82px] rounded-br-[43.82px] rounded-bl-[0px] rounded-tl-[43.82px] flex justify-center items-center">
                  <p className="text-[84.6px] text-white font-bold ">3</p>
                </div>
                <h1 className=" mt-5 md:mt-[45px] 2xl:mt-[60px] text-[#00B4FF] text-[28px] md:text-[34px]  2xl:text-[36px]  md:leading-[54.54px] text-center">
                  Dynamic Tissue Sensing
                </h1>

                <p className="font-medium text-[18px] md:text-[24px] 2xl:text-[25px] 2xl:leading-[37.87px] text-center">
                  Improved closed loop control circuitry and precise calibration
                  enables faster real time computation of electrical properties
                  of tissues resulted in regulated power output.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* impact */}
      {currentEquipment === "Surrounded Scope" && (
        <div className="w-full px-5 md:px-10 h-full mt-[60px]   lg:mb-[85px]">
          <h1 className="text-center font-extrabold text-[40px] md:text-[50px] leading-[50px]">
            Our Impact
          </h1>
          <p className="font-semibold text-[20px] md:leading-[10px] text-[#00B4FF] text-center mt-[10px]">
            “ 96.99 Gurgous Claim That Surrounded Scope is Better”
          </p>

          <div className="w-full flex flex-col  md:flex-row  justify-center items-center mt-[45px] md:mt-[50px] lg:mt-[131px]    gap-[35px] md:gap-[10px] lg:gap-[70px]">
            <img
              src="/assets/images/chart1.png"
              alt=""
              className="md:w-[380px] lg:w-[450px] xl:w-[560px] 2xl:w-auto"
            />
            <img
              src="/assets/images/chart2.png"
              alt=""
              className="md:w-[380px] lg:w-[450px] xl:w-[560px] 2xl:w-auto"
            />
          </div>
        </div>
      )}

      {/* from the professional */}
      <div className="w-full py-[80px] 2xl:pb-10 2xl:pt-10">
        <div className="flex flex-col w-full max-w-[1442px] justify-center items-center gap-5 md:gap-[33px] mx-auto">
          <h2 className="text-[34px] md:text-[50px] font-semibold leading-[50px] text-[#2A2A2A]">
            From the Professional
          </h2>
          <p className="font-medium px-5 md:px-10 text-xl 2xl:text-2xl leading-[26px] text-justify md:text-center text-[#2A2A2A]">
            As a professional in the field of healthcare, the management of
            bio-medical waste stands as a critical aspect of our commitment to
            patient care and environmental responsibility. Bio-medical waste,
            generated through medical procedures and healthcare activities,
            demands meticulous handling and disposal to prevent health risks and
            environmental contamination.
          </p>
        </div>
      </div>

      {/* wound protector  */}
      {currentEquipment === "Vaginal Speculum" && (
        <div className="w-full h-full py-[52px] bg-[#2D2D45]">
          <h1 className="text-center text-white text-[32px] md:text-[40px] xl:text-[45px] 2xl:text-[50px] font-extrabold leading-[60.25px]">
            Wound Protector
          </h1>

          <div className=" my-10 md:my-[80px]  max-w-[1601px] mx-10 xl:mx-4 2xl:mx-auto flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10  justify-between place-items-center  gap-y-[50px] xl:gap-y-[90px] 2xl:gap-y-[137px]">
            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px]  2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px] 2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px] 2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Dozee" && (
        <div className="w-full h-full pt-[52px] px-5 pb- md:pb-[  xl:pb-[121px] bg-[#2D2D45]">
          <div className="max-w-[1612.22px] mx-auto">
            <h1 className=" font-extrabold text-[28px] md:text-[34px] lg:text-[50px] md:leading-[60px] text-center text-white">
              Combines all energy functionalities in on device
            </h1>

            <p className="max-w-[749px] mx-auto text-white opacity-70 mt-5 md:mt-4 lg:mt-[30px] text-justify text-[20px] md:text-[25px] lg:leading-[37.87px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-x-3 lg:items-center md:place-items-center justify-between items-center mt-14 lg:mt-[94px]  md:gap-10 lg:gap-0">
              <div className="h-[400px] w-[290px] md:w-[321.41px]">
                <img src="/assets/images/sleapingboy.png" alt="w-full" />
                <p className="mt-2 xl:mt-[40px] text-center font-bold text-white text-[24px]  md:text-[28.19px] lg:text-[22px] xl:text-[28.19px] leading-[36.65px]">
                  Contactless Proprietary Ballistocardiography
                </p>
              </div>
              <div className="h-[400px] w-[290px] md:w-[321.41px]">
                <img src="/assets/images/remotemonitoring.png" alt="w-full" />
                <p className="mt-2 xl:mt-[40px] text-center font-bold text-white text-[24px]  md:text-[28.19px] lg:text-[22px] xl:text-[28.19px] leading-[36.65px]">
                  Accurate Remote Vitals Monitoring
                </p>
              </div>
              <div className="h-[400px] w-[290px] md:w-[321.41px]">
                <img src="/assets/images/warning.png" alt="w-full" />
                <p className="mt-2 xl:mt-[40px] text-center font-bold text-white text-[24px]  md:text-[28.19px] lg:text-[22px] xl:text-[28.19px] leading-[36.65px]">
                  AI Based Early Warning System
                </p>
              </div>
              <div className=" h-[400px] w-[290px] md:w-[321.41px]">
                <img src="/assets/images/security.png" alt="w-full" />
                <p className="mt-2 xl:mt-[40px] text-center font-bold text-white text-[24px] md:text-[28.19px] lg:text-[22px] xl:text-[28.19px] leading-[36.65px]">
                  Interoperable Systems with world class Security
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Vcare" && (
        <div className="w-full h-full pt-[80px]  md:pb-[113px] bg-[#2D2D45]">
          <div className="max-w-[1726px] mx-5  xl:mx-10 2xl:mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-[87px]">
            <img
              src="/assets/images/vcareplus.png"
              alt=""
              className="w-[380px] md:w-[300px] lg:w-[380px] xl:w-[430px] 2xl:w-auto"
            />

            <div>
              <h1 className="font-bold  text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] xl:leading-[65px] text-white">
                VCare® Plus and VCare® DX Plus
              </h1>

              <p className="font-medium text-[20px] md:text-[24px] xl:text-[28px] 2xl:text-[35px] 2xl:leading-[53px] text-white pt-3 md:pt-0 text-justify">
                VCare DX plus provides excellent control of the uterus without
                distention of vaginal fornices. Ideal for:
              </p>

              <div className="flex items-center gap-4">
                <GoDotFill fill="white" size={20} />
                <p className="font-medium text-[20px] md:text-[28px] xl:text-[30px] 2xl:text-[35px] leading-[53px] text-white text-justify">
                  Tubal Ligation
                </p>
              </div>
              <div className="flex items-center gap-4">
                <GoDotFill fill="white" size={20} />
                <p className="font-medium  text-[20px] md:text-[28px] xl:text-[30px] 2xl:text-[35px] leading-[53px] text-white text-justify">
                  Supracervical Hysterectomy
                </p>
              </div>
              <div className="flex items-center gap-4">
                <GoDotFill fill="white" size={20} />
                <p className="font-medium  text-[20px] md:text-[28px] xl:text-[30px]2xl:text-[35px] leading-[53px] text-white text-justify">
                  Diagnostic Laproscopy
                </p>
              </div>
              <div className="flex items-center gap-4">
                <GoDotFill fill="white" size={20} />
                <p className="font-medium  text-[20px] md:text-[28px] xl:text-[30px] 2xl:text-[35px] leading-[53px] text-white text-justify">
                  Tubal Occlusion
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Support />

      {currentEquipment === "Vaginal Speculum" && (
        <div className="w-full h-full py-10 md:py-[90px]">
          <div className="max-w-[1626px] mx-5  2xl:mx-auto flex flex-col md:flex-row gap-5 lg:gap-[70px] 2xl:gap-[97px] items-center">
            <img
              src="/assets/images/checkupimg.png"
              alt=""
              className="w-[390px] md:w-[300px] lg:w-[390px]  xl:w-[450px] 2xl:w-auto"
            />
            <div className="">
              <h1 className="font-bold text-[32px] md:text-[40px] xl:text-[45px] 2xl:text-[50px] xl:leading-[65px]">
                Vaginal Speculum
              </h1>

              <p className="font-medium text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[25px] mt-[12px] md:mt-[18px]">
                PRAN Vaginal Speculum is a disposable speculum which is unique
                in its shape and ergonomic use. Crystal clear transparency that
                aids high precision visibility is the hallmark of PRAN Vaginal
                Speculum. It's hygienic and it meets the demands of the patients
                of this era.
              </p>

              <h1 className="font-bold text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[25px] xl:leading-[37.87px] mt-[18px]">
                It's a sterile, transparent and disposable innovative
                design.....
              </h1>

              <button className="rounded-[6px] bg-[#00B4FF] px-[20px] py-[15px]  xl:py-[23px] xl:px-[36px] mt-[25px] flex items-center justify-center gap-3">
                <p className="font-bold text-[25px] text-white leading-[25px] ">
                  Order
                </p>
                <FaArrowRight size={22} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
      {currentEquipment === "Vaginal Speculum" && (
        //    <div className="w-full h-full py-[52px] bg-[#2D2D45]">
        //    <h1 className="text-center text-white text-[32px] md:text-[40px] xl:text-[45px] 2xl:text-[50px] font-extrabold leading-[60.25px]">
        //      Wound Protector
        //    </h1>

        //    <div className=" my-10 md:my-[80px]  max-w-[1601px] mx-10 xl:mx-4 2xl:mx-auto flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10  justify-between place-items-center  gap-y-[50px] xl:gap-y-[90px] 2xl:gap-y-[137px]">
        //      <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>

        //      <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>

        //      <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px]  2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>

        //      <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>

        //      <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px] 2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>

        //      <div className="py-2 md:w-[350px] lg:w-[380px] md:h-[120px] 2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
        //        <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
        //          Prevent Surgical Site Infection.
        //        </p>
        //      </div>
        //    </div>
        //  </div>

        <div className="w-full h-full  py-[52px]  relative">
          <div className="w-screen  h-full bg-[#2A2A2A70] absolute z-10 top-0"></div>
          <img
            src="/assets/images/vaginalspecularbanner2.png"
            className=" absolute top-0 h-full  w-full z-0"
            alt=""
          />
          <h1 className="relative z-10 text-center text-white text-[32px] md:text-[40px] xl:text-[45px] 2xl:text-[50px] font-extrabold leading-[60.25px]">
            Vaginal Speculum
          </h1>

          <p className="relative z-10  md:mt-[30px] font-medium text-[22px] md:text-[25px] md:leading-[37.87px] text-center mx-auto  opacity-70 text-white">
            Vaginal Speculum is a disposable speculum which is unique in its
            shape and ergonomic use. Crystal clear transparency that aids high
            precision visibility is the hallmark of PRAN Vaginal Speculum.
          </p>

          <div className="relative z-10 my-10 md:my-[115px] max-w-[1601px] mx-5 md:mx-10 xl:mx-4 2xl:mx-auto flex md:grid md:grid-cols-2 place-items-center gap-10  xl:grid-cols-3 justify-between flex-wrap gap-y-[50px] xl:gap-y-[90px] 2xl:gap-y-[137px]">
            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>
            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>

            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>
            <div className="py-2 md:w-[350px]  lg:w-[380px] md:h-[120px]  2xl:w-[453px] 2xl:h-[145px] bg-[#00000033] rounded-[4.93px] flex justify-center items-center px-[30px]">
              <p className="text-white font-bold text-[24px] 2xl:text-[28.19px] leading-[36.65px]">
                Prevent Surgical Site Infection.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full px-5 md:px-10 h-full py-[70px]">
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-center xl:gap-[100px] 2xl:gap-[128px]">
          <img
            src="/assets/images/vaginalequipicon.png"
            className=" w-auto h-[300px] md:h-[350px] 2xl:h-full"
            alt=""
          />
          <p className="font-medium text-xl md:text-2xl xl:text-3xl 2xl:text-[35px] leading-[28.6px] md:leading-[45px] 2xl:leading-[53.02px] text-justify">
            A basic and widely used medical device by gynaecologists for vaginal
            examination. Different types of speculums are in use, and the most
            commonly used, including at OPs, is Sims Speculum. Though disposable
            speculums are available in certain countries, sterilized and
            reusable stainless steel speculums are in use in most countries,
            including India.
          </p>
        </div>
      </div>

      {currentEquipment === "Vcare" && (
        <div className="w-full h-full 2xl:pt-[107px] pb-7 pb-10 lg:pb-0 ">
          <div className="w-full px-5 lg:px-10 2xl:px-[89px] flex flex-col md:flex-row items-center lg:gap-[50px] xl:gap-[100px] 2xl:gap-[149px]">
            <img
              src="/assets/images/vcare1.png"
              alt=""
              className="w-[400px] md:w-[320px] xl:w-[470px] 2xl:w-auto"
            />
            <div className="">
              <h1 className="font-bold text-[28px] md:text-[35px] xl:text-[45px] 2xl:text-[50px] md:leading-[65px]">
                VCare® Plus and VCare® DX Plus
              </h1>
              <p className="font-medium text-[20px] md:text-[24px] xl:text-[25px] md:leading-[37.87px] text-justify mt-[18px]">
                VCare® Plus helps surgeons deliver clear control of the anatomy
                using effective uterine manipulation while assisting with the
                identification of key surgical landmarks for a safe, efficient,
                and repeatable procedure.
              </p>
            </div>
          </div>
        </div>
      )}

      {currentEquipment === "Surrounded Scope" && (
        <div className=" w-full relative pb-[63px]">
          <img
            src="/assets/images/Surroundscopesystembanner1.png"
            alt=""
            className="h-full w-full absolute object-cover top-0 bottom-0 right-0 left-0 "
          />
          <img
            src="/assets/images/Surroundscopesystembanner2.png"
            alt=""
            className="h-full w-full absolute object-cover top-0 bottom-0 right-0 left-0 "
          />

          <div className=" relative z-40 top-0 pt-[81px]">
            <h1 className=" font-medium text-[30px] md:text-[35px] lg:text-[50px] lg:leading-[10px] text-center text-white">
              The SURROUND
              <span className="font-bold">
                SCOPE <span className="text-[20px]">TM</span> System
              </span>
            </h1>

            <div className=" max-w-[1590px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between px-10 gap-2  items-center mt-[55px]">
                <div className="w-[250px] md:w-[200px] lg:w-[250px] items-center flex flex-col">
                  <img
                    src="/assets/images/surroundedsystemequipment-1.png"
                    alt=""
                  />
                  <p className="font-bold whitespace-nowrap text-[24px] lg:text-[30px] text-center text-white leading-[30px] my-[20px] mx-[57px]">
                    270 ̊ Field of View
                  </p>
                </div>
                <div className="w-[250px] md:w-[200px] lg:w-[250px]  items-center flex flex-col">
                  <img
                    src="/assets/images/surroundedsystemequipment-2.png"
                    alt=""
                  />
                  <p className="font-bold text-[24px] whitespace-nowrap lg:text-[30px] text-center text-white leading-[30px] my-[20px] mx-[57px]">
                    No Fog
                  </p>
                </div>
                <div className="w-[250px] md:w-[200px] lg:w-[250px]  items-center flex flex-col">
                  <img
                    src="/assets/images/surroundedsystemequipment-3.png"
                    alt=""
                  />
                  <p className="font-bold  text-[24px] whitespace-nowrap lg:text-[30px] text-center text-white leading-[30px] my-[20px] mx-[57px]">
                    See Through Smoke
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center  gap-2 justify-around md:mt-[108px]">
                <div className="w-[250px] md:w-[200px] lg:w-[250px]  items-center flex flex-col">
                  <img
                    src="/assets/images/surroundedsystemequipment-4.png"
                    alt=""
                  />
                  <p className="font-bold  text-[24px] whitespace-nowrap lg:text-[30px] text-center text-white leading-[30px] my-[20px] mx-[57px]">
                    3 Ultra HD Cameras
                  </p>
                </div>
                <div className="w-[250px] md:w-[200px] lg:w-[250px]  items-center flex flex-col">
                  <img
                    src="/assets/images/surroundedsystemequipment-5.png"
                    alt=""
                  />
                  <p className="font-bold  text-[24px] whitespace-nowrap lg:text-[30px] text-center text-white leading-[30px] my-[20px] mx-[57px]">
                    10mm Shaft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* information */}
      {currentEquipment === "Smart SurgN" && (
        <div className="md:py-[90px] px-2">
          <h1 className="text-center text-[32px]  md:text-[45px] lg:text-[50px] md:leading-[60.25px] font-extrabold">
            Purpose-built for superior and reliable Performance
          </h1>
          <p className="w-auto  md:w-[749px] font-medium text-[24px] leading-[30px] mt-2 md:mt-[30px] text-[#2A2A2A70] mx-auto">
            All components seamlessly integrate to provide superb visibility,
            color reproduction and reliable performance.
          </p>

          <img
            src="/assets/images/surgnmachine.png"
            className=" w-[350px]  lg:w-[692px] lg:h-[629px] mx-auto my-[50px] md:my-[90px]"
            alt=""
          />

          <div className="mt-[10px] max-w-[1421px] px-5 md:px-10 mx-auto flex justify-between flex-wrap gap-6 md:gap-[100px] mb-10">
            <div className="lg:w-[534px]">
              <div className="flex gap-5 items-center">
                <div className=" w-[50px] h-[50px] bg-[#00B4FF] flex justify-center items-center rounded-full">
                  <p className="text-white font-bold text-[28px] md:text-[32px] leading-[38.4px] ">
                    1
                  </p>
                </div>

                <p className="font-bold text-[20px] md:text-[32px] leading-[38.4px]">
                  EyeRSurgN Head
                </p>
              </div>

              <p className=" font-medium text-[18px] md:text-[25px] md:leading-[37.87px] text-justify mt-[10px] md:mt-[34px]">
                Camera head visualizes regular and fluorescence images in
                stunning 4K Ultra HD resolution. Easily access functions with a
                touch of a button.
              </p>
            </div>

            <div className="lg:w-[534px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] bg-[#00B4FF] flex justify-center items-center rounded-full">
                  <p className="text-white font-bold  text-[28px] md:text-[32px] leading-[38.4px] ">
                    2
                  </p>
                </div>

                <p className="font-bold text-[20px] md:text-[32px] leading-[38.4px]">
                  ICG Laproscope
                </p>
              </div>

              <p className=" font-medium text-[18px] md:text-[25px] md:leading-[37.87px] text-justify  mt-[10px] md:mt-[34px]">
                Clearly examine organs in the abdomen with rigid laparoscopes in
                0 and 30 degree field of view.
              </p>
            </div>

            <div className="lg:w-[534px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] bg-[#00B4FF] flex justify-center items-center rounded-full">
                  <p className="text-white font-bold  text-[28px] md:text-[32px] leading-[38.4px] ">
                    3
                  </p>
                </div>

                <p className="font-bold text-[20px] md:text-[32px] leading-[38.4px]">
                  EyeRSurrgN Camera Console
                </p>
              </div>

              <p className=" font-medium text-[18px] md:text-[25px] md:leading-[37.87px] text-justify  mt-[10px] md:mt-[34px]">
                Make easy visual adjustments and customize camera button
                configuration on a 5-inch LCD Touchscreen.
              </p>
            </div>

            <div className="lg:w-[534px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] bg-[#00B4FF] flex justify-center items-center rounded-full">
                  <p className="text-white font-bold  text-[28px] md:text-[32px] leading-[38.4px] ">
                    4
                  </p>
                </div>

                <p className="font-bold text-[20px] md:text-[32px] leading-[38.4px]">
                  IRLightSurgN Light Source
                </p>
              </div>

              <p className=" font-medium text-[18px] md:text-[25px] md:leading-[37.87px] text-justify  mt-[10px] md:mt-[34px]">
                Clearly assess vessels, blood flow and tissue perfusion with the
                integrated laser and long-life LED Light Source.
              </p>
            </div>

            <div className="lg:w-[534px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] bg-[#00B4FF] flex justify-center items-center rounded-full">
                  <p className="text-white font-bold  text-[28px] md:text-[32px] leading-[38.4px] ">
                    5
                  </p>
                </div>

                <p className="font-bold text-[20px] md:text-[32px] leading-[38.4px]">
                  View4KSurgN Monitor
                </p>
              </div>

              <p className=" font-medium text-[18px] md:text-[25px] md:leading-[37.87px]  text-justify  mt-[10px] md:mt-[34px]">
                Stunning 4K resolution video with wide gamut colors on a 32-inch
                LCD display.
              </p>
            </div>
          </div>
        </div>
      )}
      {currentEquipment === "Smart SurgN" && (
        <div className="w-full  rounded-[25px] bg-[#2A2A2A] py-[111px] px-[139px] relative hidden md:block">
          <img
            src="/assets/images/dotbanner1.png"
            alt=""
            className=" absolute right-0 top-1"
          />
          <img
            src="/assets/images/dotbanner2.png"
            alt=""
            className=" absolute right-[50px] top-[250px]"
          />
          <img
            src="/assets/images/dotbanner3.png"
            alt=""
            className=" absolute left-0 bottom-0"
          />
          <div className="w-full relative z-20">
            <img src="/assets/images/surgnoperationbanner.png" alt="" />

            <div className="grid grid-cols-4 place-items-center mt-[16px] ">
              <p className="font-semibold text-[25px] leading-[30px] text-[#FFFFFF70] text-center">
                4k RGB Video with no fluorescence overlay
              </p>
              <p className="font-semibold text-[25px] leading-[30px] text-[#FFFFFF70] text-center">
                4k RGB Video with no fluorescence overlay
              </p>
              <p className="font-semibold text-[25px] leading-[30px] text-[#FFFFFF70] text-center">
                4k RGB Video with no fluorescence overlay
              </p>
              <p className="font-semibold text-[25px] leading-[30px] text-[#FFFFFF70] text-center">
                4k RGB Video with no fluorescence overlay
              </p>
            </div>
          </div>
        </div>
      )}

      {/* functionality */}
      {/* <div className=''>

            </div> */}

      {/* from the professionals */}
      <div className="my-10  lg:mx-0 overflow-hidden  ">
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

      <div className="h-full mb-10 bg-[#F2F2F2]">
        <div className="flex justify-center md:justify-around md:gap-10 md:px-5 lg:p-10">
          <div className=" flex flex-col justify-around  gap-8 text-white xl:pl-20 2xl:pl-24">
            <div className="flex flex-col gap-2">
              <div className=" w-28 rounded-md flex justify-center items-center mt-4">
                <img
                  src={"/assets/images/envirlogo.png"}
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

      <WasteManagementAboutus
        title={equipmentname}
        desc={data?.aboutus?.desc}
        img={data?.aboutus?.img}
      />

      <FAQs />
      <ContactUs
        logo={"/assets/svg/enviro-logo.svg"}
        img={"/assets/images/kids.png"}
      />

      <Integrity
        integerityPic={"/assets/images/JamesRouse.png"}
        Integrity={"Profit"}
        integerityName={"James Rouse"}
        integerityText={
          "‘’Profit is not legitimate purpose of business, the legitimate purpose of business is to provide a product or service that people need and do it so well that’s it’s profitable.’’"
        }
      />
    </>
  );
}

export default HealthCareAbout;
