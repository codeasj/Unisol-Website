import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

export default function HospitailtyCarousel() {
  const [playingIndex, setPlayingIndex] = useState(0);

  const videos = [
    "https://youtu.be/QFaFIcGhPoM?si=4KSbayCrFZ3rKGbb",
    "https://youtu.be/9hb_0TZ_MVI?si=Bj_GxQu_iUGzK3Li",
    "https://youtu.be/9VIiLJL0H4Y?si=cEUK7SH-YjCa-C0n",
    "https://youtu.be/Y2hgEGPzTZY?si=CvCanxMAc5n0LRhB",
    "https://youtu.be/Cla1WwguArA?si=qGV8I9gBm3_GgeKx",
    "https://youtu.be/lnV34uLEzis?si=wYln-Y8miQFoVmaG",
    "https://youtu.be/oecI26cWqzk?si=QAhnDqBRZT511jJO",
  ];

  const isMobile = useMediaQuery({
    query: "(min-width: 280px) and ( max-width: 768px)",
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
     centerMode: isMobile ? false :true,
    focusOnSelect: true,
    beforeChange: (current, next) => setPlayingIndex(next),
  };

  

  return (
    <div className="video-carousel-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`duration-500 ${
              index === playingIndex ? "scale-100" : "scale-75"
            }`}
          >
            <ReactPlayer
              url={video}
              playing={index === playingIndex}
              controls
              light
              width="100%"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
