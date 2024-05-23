import React from "react";
import { GoArrowRight } from "react-icons/go";
import VideoCarousel from "./VideoCarousel";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="px-5 pt-5 lg:px-10 ">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:px-5 xl:px-20 2xl:px-40">
        <div className="flex-[1] mt-4 ">
          <img
            src="/assets/images/doctor.png"
            alt="logo"
            className=" w-full lg:w-72  xl:w-80 md:h-60"
          />

          <div className="bg-black text-white w-full  md:w-72 xl:w-80 mt-[-2px]">
            <div className="px-5 py-2">
              <h3 className="text-xl font-semibold">Vikram Khulsange</h3>
              <p className="text-gray-500 text-lg">Director</p>
              <p className="text-sm">
                Vikram Khulsange is the Founder and Director at SurgiSol
                Healthcare Solutions Pvt Ltd and is instrumental in the genesis
                evolution of the organization He has rich experience in Telecom,
                Advertising Healthcare business With over 22 years of exposure
                to the healthcare business, he enjoys goodwill and trust of some
                of the biggest KOLs and is well resourced with insights into
                Medical Diagnostic, Surgical devices Pharmaceuticals business
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[2] flex flex-col gap-5">
          <h5 className=" text-lg font-semibold underline underline-offset-8 decoration-primary decoration-2">
            About Us
          </h5>

          <h2 className="text-2xl  lg:text-4xl leading-[1.3] font-bold">
            Delivering
            <span className="text-primary"> Products </span>
            to the <br /> Healing Hands
          </h2>

          <p className="  text-lg  lg:text-base xl:text-xl">
            At the heart of our mission lies the commitment to deliver essential
            products to the healing hands that tirelessly work towards the
            well-being of others. Whether it's medical supplies, therapeutic
            tools, or wellness essentials, our goal is to ensure these vital
            items reach the dedicated professionals and caregivers who make a
            profound difference in people's lives.
            <br />
            We understand the significance of timely, reliable deliveries in
            supporting those on the front lines of healthcare and wellness. With
            precision and care, we strive to facilitate seamless distribution,
            enabling practitioners to focus on what truly matters - delivering
            compassionate care and aiding in the process of healing
          </p>

          <button
            onClick={() => navigate("/about-us")}
            className="bg-primary w-32 p-2 text-white rounded-md self-center flex gap-2 justify-center items-center"
          >
            <span>More</span>
            <span>
              <GoArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="my-10 -mx-5 overflow-hidden  ">
        <VideoCarousel />
      </div>
    </div>
  );
}
