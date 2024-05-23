import React from "react";

export default function WhatWeDo() {
  return (
    <div
      style={{ backgroundImage: 'url("/assets/images/what-we-do-bg.png")' }}
      className="relative w-full h-[1515px] md:h-[750px] text-white flex justify-center items-center bg-cover"
    >
      <div className="absolute z-10 w-full h-full bg-[#000] opacity-85">
        <div className="absolute z-20 w-full h-full p-10">
          <h1 className="text-3xl text-center font-[HouschkaPro-Bold] font-bold underline underline-offset-[12px] decoration-primary decoration-2">
            What We Do ?
          </h1>
          <div className="flex gap-x-10 gap-y-10 xl:gap-x-32 xl:gap-y-5 flex-wrap justify-center mt-20">
            <div className="max-w-48 flex flex-col gap-2 items-center text-center leading-tight">
              <div className="rounded-full border">
                <img
                  src="/assets/images/best-channel.png"
                  alt="group"
                  className="w-24 h-24 p-5"
                />
              </div>
              <h3 className="text-lg font-[HouschkaPro-DemiBold] font-semibold leading-tight">
                Best Channel <br /> Partner
              </h3>
              <p>To remain and be the best channel partner for our clients.</p>
            </div>

            <div className="border border-gray-800 md:block hidden" />

            <div className="max-w-48 flex flex-col gap-2 items-center text-center leading-tight">
              <div className="rounded-full border">
                <img
                  src="/assets/images/solution.png"
                  alt="group"
                  className="w-24 h-24 p-5"
                />
              </div>
              <h3 className="text-lg font-[HouschkaPro-DemiBold] font-semibold leading-tight">
                Solution <br /> Consultants
              </h3>
              <p>
                To be superior i our knowledge, clinical expertise and customer
                centric approach to the highest standards of customers.
              </p>
            </div>

            <div className="border border-gray-800 hidden md:block" />

            <div className="max-w-48 flex flex-col gap-2 items-center text-center leading-tight">
              <div className="rounded-full border">
                <img
                  src="/assets/images/company.png"
                  alt="group"
                  className="w-24 h-24 p-5"
                />
              </div>
              <h3 className="text-lg font-[HouschkaPro-DemiBold] font-semibold leading-tight">
                Company Innovative <br /> Products
              </h3>
              <p>
                To bring the innovative and product with superior patient
                benefits for our customers
              </p>
            </div>

            <div className="max-w-48 flex flex-col gap-2 items-center text-center leading-tight">
              <div className="rounded-full border">
                <img
                  src="/assets/images/prefer.png"
                  alt="group"
                  className="w-24 h-24 p-5"
                />
              </div>
              <h3 className="text-lg font-[HouschkaPro-DemiBold] font-semibold leading-tight">
                Preferred Service <br /> Provider
              </h3>
              <p>
                To remain and be the preferred service providers for our
                customers
              </p>
            </div>

            <div className="border border-gray-800 hidden md:block" />

            <div className="max-w-48 flex flex-col gap-2 justify-center items-center text-center leading-tight">
              <div className="rounded-full border">
                <img
                  src="/assets/images/give.png"
                  alt="group"
                  className="w-24 h-24 p-5"
                />
              </div>
              <h3 className="text-lg font-[HouschkaPro-DemiBold] font-semibold leading-tight">
                Give back to <br /> Society
              </h3>
              <p>n all our endeavor, directly or indirectly, w</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
