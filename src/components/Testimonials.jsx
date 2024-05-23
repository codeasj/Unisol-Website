import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";

export default function Testimonials() {
  const testimonialData = [
    {
      id: 1,
      text: "I've been in the healthcare field for years, and finding a partner like UNISOL has been a game-changer. Their commitment to innovation and quality aligns perfectly with our mission of providing exceptional patient care. What sets UNISOL apart is their deep understanding of the healthcare sector; they aren't just suppliers, they're collaborators dedicated to improving lives",
      author: "Cameron Williamson",
      src: "/assets/images/testi-img.png",
    },

    {
      id: 2,
      text: "At the heart of our mission lies the commitment to deliver essential products to the healing hands that tirelessly work towards the well-being of others. Whether it's medical supplies, therapeutic tools, or wellness essentials, our goal is to ensure these vital items reach the dedicated professionals and caregivers who make a profound difference in people's lives.",
      author: "Tom Cruise",
      src: "/assets/images/tom.jpg",
    },

    {
      id: 3,
      text: "We understand the significance of timely, reliable deliveries in supporting those on the front lines of healthcare and wellness. With precision and care, we strive to facilitate seamless distribution, enabling practitioners to focus on what truly matters - delivering compassionate care and aiding in the process of healing",
      author: "Selena Gomez",
      src: "/assets/images/selena.jpg",
    },

    {
      id: 4,
      text: "Vikram Khulsange is the Founder and Director at SurgiSol Healthcare Solutions Pvt Ltd and is instrumental in the genesis evolution of the organization He has rich experience in Telecom, Advertising Healthcare business With over 22 years of exposure to the healthcare business, he enjoys goodwill and trust of some of the biggest KOLs and is well resourced with insights into Medical Diagnostic, Surgical devices Pharmaceuticals business",
      author: "Taylor Swift",
      src: "/assets/images/taylor.jpg",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[50%] left-2.5 z-10 translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <img
        src="/assets/images/leftArrow.png"
        alt="arrow"
        className="w-8 md:w-16"
      />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[50%] right-2.5 z-10 translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <img
        src="/assets/images/rightArrow.png"
        alt="arrow"
        className="w-8 md:w-16"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div
      style={{ backgroundImage: 'url("/assets/images/testi-bg.png")' }}
      className="w-full h-[600px] md:h-[450px] bg-contain relative z-10 bg-[#f9f9f9]"
    >
      <div className="absolute z-20 w-full h-full">
        <h1 className="text-xl font-bold text-center p-5 underline underline-offset-8 decoration-primary decoration-2">
          Testimonials
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-full md:px-20 my-5">
            <Slider {...settings}>
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="text-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={testimonial?.src}
                      alt="testimonial-image"
                      className="w-24 h-24 rounded-full"
                    />
                  </div>

                  <p className="px-9 md:px-28 text-lg my-5">
                    {testimonial.text}
                  </p>

                  <div className="flex justify-center items-center gap-3">
                    <p className="font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <div className="text-green-500 text-xl flex gap-1.5">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
