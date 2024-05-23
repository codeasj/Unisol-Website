import React from "react";
import ContactUs from "../components/ContactUs";

function AboutUs2() {
  return (
    <>
      <div className="2xl:px-[93px] 2xl:py-[60px] px-5 lg:px-16 lg:pt-20 lg:pb-14 py-6">
        <div className="flex flex-col gap-10 md:gap-[62px]">
          <div className="">
            <h3 className="text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl font-bold leading-[62px] mb-1 md:mb-[20px] 2xl:mb-[30px]">
              Description
            </h3>
            <p className="font-medium text-xl md:leading-[48px] md:text-[28px] lg:text-2xl 2xl:text-[32px] text-justify">
              Welcome to UNISOL, where innovation meets precision in the realm
              of medical equipment and surgical solutions. Founded and directed
              by Vikram Khulsange, SurgiSol Healthcare Solutions Pvt Ltd
              embodies a legacy of excellence and dedication spanning over two
              decades.
            </p>
          </div>

          <div className="">
            <h3 className="text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl font-bold leading-[62px] mb-1 md:mb-[20px] 2xl:mb-[30px]">
              Our Vision
            </h3>
            <p className="font-medium text-xl md:leading-[48px] md:text-[28px] lg:text-2xl 2xl:text-[32px] text-justify">
              At UNISOL, we envision a world where cutting-edge technology
              converges seamlessly with compassionate care. Our mission is to
              redefine healthcare solutions through a commitment to innovation,
              reliability, and unwavering quality.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-[90px]  py-[70px] md:mt-[52px]">
          <div className="flex gap-10  2xl:gap-[137px] items-center flex-col-reverse md:flex-row">
            <img
              src="../assets/images/video.png"
              alt=""
              className="w-[400px] xl:w-[450px]   h-auto 2xl:w-auto"
            />
            <div>
              <h3 className="text-3xl xl:text-[40px] 2xl:text-[50px] font-bold leading-[50px] text-left mb-1 md:mb-[15px]">
                Our Distinctive Edge
              </h3>
              <p className="text-xl xl:text-[24px] 2xl:text-[25px] font-medium md:leading-[35px] 2xl:leading-[38px] text-justify">
                What sets UNISOL apart is our deep-seated understanding of the
                intricacies of the healthcare sector. We are not merely a
                provider of equipment and products; we are partners in your
                journey towards superior patient care. Our commitment to
                fostering lasting relationships and ensuring the highest
                standards of quality reflects in everything we do.
              </p>
            </div>
          </div>

          <div className="flex gap-10 2xl:gap-[137px] items-center flex-col-reverse md:flex-row-reverse">
            <img
              src="../assets/images/video.png"
              alt=""
              className="w-[400px] xl:w-[450px]  h-auto 2xl:w-auto"
            />
            <div>
              <h3 className="text-3xl xl:text-[40px] 2xl:text-[50px]  font-bold leading-[50px] text-left mb-1 md:mb-[15px]">
                Our Distinctive Edge
              </h3>
              <p className="text-xl xl:text-[24px] 2xl:text-[25px] font-medium  md:leading-[35px] 2xl:leading-[38px]  text-justify">
                What sets UNISOL apart is our deep-seated understanding of the
                intricacies of the healthcare sector. We are not merely a
                provider of equipment and products; we are partners in your
                journey towards superior patient care. Our commitment to
                fostering lasting relationships and ensuring the highest
                standards of quality reflects in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs
        logo={"/assets/svg/unisol-logo.svg"}
        img={"/assets/images/contact-us-pic.png"}
      />
    </>
  );
}

export default AboutUs2;
