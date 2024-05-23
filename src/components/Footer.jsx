import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="lg:h-[500px] bg-gray-50">
      <div className="lg:px-20 md:py-10 px-5 py-7">
        <div className="lg:pt-10 md:pb-5">
          <img
            src="/assets/svg/unisol-logo.svg"
            alt="logo"
            className="w-24 h-12"
          />
        </div>

        <div className="grid gap-10 md:gap-5 lg:gap-10 xl:gap-3 2xl:gap-10 grid-cols-2 gap-y-7 sm:grid-cols-3 md:grid-cols-5">
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-lg">Home</li>
            <li onClick={() => navigate('/careers')} className=" cursor-pointer">Our Team</li>
            <li onClick={() => navigate('/careers')} className=" cursor-pointer">Careers</li>
            <li onClick={() => navigate('/careers')} className=" cursor-pointer">Become a Partner</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-bold text-lg">Healthcare</li>
            <li onClick={() => { navigate('/health-care', { state: { activePage: 0 } }); location.reload() }} className=" cursor-pointer">Visualization System</li>
            <li onClick={() => { navigate('/health-care', { state: { activePage: 1 } }); location.reload() }} className=" cursor-pointer">Electro Cautery</li>
            <li onClick={() => { navigate('/health-care', { state: { activePage: 2 } }); location.reload() }} className=" cursor-pointer">3 in one access System</li>
            <li onClick={() => { navigate('/health-care', { state: { activePage: 3 } }); location.reload() }} className=" cursor-pointer">Other</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-bold text-lg">Waste Management</li>
            <li onClick={() => { navigate('/waste-management', { state: { activePage: 0 } }); location.reload() }} className=" cursor-pointer">Solid Waste Management</li>
            <li onClick={() => { navigate('/waste-management', { state: { activePage: 1 } }); location.reload() }} className=" cursor-pointer">Biomedical Waste Management</li>
            <li onClick={() => { navigate('/waste-management', { state: { activePage: 2 } }); location.reload() }} className=" cursor-pointer">Water Waste Management</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-bold text-lg">Start-up Project</li>
            <li onClick={() => { navigate('/startup-project', { state: { activePage: 0 } }); location.reload() }} className=" cursor-pointer">Agriculture Drone</li>
            <li onClick={() => { navigate('/startup-project', { state: { activePage: 1 } }); location.reload() }} className=" cursor-pointer">Medical Dispenser</li>
            <li onClick={() => { navigate('/startup-project', { state: { activePage: 2 } }); location.reload() }} className=" cursor-pointer">Hospital Laundry</li>
          </ul>

          <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
            <div className="flex flex-col gap-2 w-full">
              <h5 className="font-bold text-lg">Subscription</h5>
              <div className="flex w-full md:flex-col xl:flex-row  md:gap-1  md:border-[0.74px] xl:gap-0 rounded-[7.44px] md:rounded-none xl:rounded-[7.44px] border-[0.74px]  border-black md:border-white xl:border-black overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="md:py-1 md:px-1 xl:px-3 p-3  xl:p-3 w-full outline-none bg-transparent border-[0.74px] md:border-[0.74px] rounded-none md:rounded xl:rounded-none md:border-black xl:border-none xl:border-2 flex-1"
                />
                <button className="bg-primary py-1 px-5 text-white md:self-end xl:self-auto rounded-none  md:rounded xl:rounded-none font-medium">
                  Send
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg">Follow Us</h5>

              <div className="flex gap-5 text-2xl">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5 lg:mt-32 ">
          <p className="text-center md:text-start w-full md:w-max">
            Copyright 2023 Surgisol All Rights Reserved.
          </p>

          <ul className="md:flex gap-5 hidden">
            <li className="w-full md:w-max">Privacy Policy</li>
            <li className="w-full md:w-max">Terms of Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
