import React from "react";

export default function ContactUs({ logo, img }) {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/images/contact-us-bg-dark.png")',
      }}
      className="h-max bg-cover"
    >
      <div className="flex   lg:gap-10  py-7 lg:p-10 flex-col md:flex-row justify-between">
        <div className="flex-1 flex flex-col justify-center gap-8 text-white ml-10 mr-10 md:mr-0 lg:pl-24">
          <div className="flex flex-col gap-2">
            <div className=" w-28 rounded-md bg-white flex justify-center items-center">
              <img src={logo} alt="logo" className="w-24 h-12 md:p-1" />
            </div>

            <h1 className="text-4xl font-bold">Contact Us</h1>

            <div>
              <p>
                <span className="text-gray-500">Call us Directly: </span>
                <span className="font-semibold">+91 987 456 3210</span>
              </p>

              <p>
                <span className="text-gray-500">Contact Email: </span>
                <span className="font-semibold">surgisol@gmail.com</span>
              </p>
            </div>
          </div>

          <input
            type="text"
            className="p-3 w-full md:w-[70%] border rounded-[10px] border-gray-600 bg-transparent outline-none"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="p-3 w-full md:w-[70%] border rounded-[10px] border-gray-600 bg-transparent outline-none"
            placeholder="Email Address"
          />

          <input
            type="text"
            className="p-3 w-full md:w-[70%] border rounded-[10px] border-gray-600 bg-transparent outline-none"
            placeholder="Phone"
          />

          <textarea
            name=""
            id=""
            className="p-3 h-[100px] w-full md:w-[70%] border rounded-[10px] border-gray-600 bg-transparent outline-none"
            placeholder="Write a Message"
          ></textarea>

          <div className="flex w-full md:w-[70%] justify-center">
            <button className="w-32 p-3 rounded-md font-medium bg-primary ">
              Submit
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:flex">
          <div>
            <img src={img} alt="logo" className="w-[100%] h-[570px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
