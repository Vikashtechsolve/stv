import React from "react";
import mentor from "../assets/mentor.jpg";
import solve from "../assets/solving.jpg";
import online from "../assets/online.jpg";
import resume from "../assets/resume.jpg";

// Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { title: "1:1 Mentorship", img: mentor },
  { title: "Doubt Solving", img: solve },
  { title: "Online Contests", img: online },
  { title: "Resume Review", img: resume },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute bottom-[-50px] right-1/2 translate-x-16 z-10 cursor-pointer"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ED0331] shadow-md">
      <span className="text-white text-lg">{">"}</span>
    </div>
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute bottom-[-50px] left-1/2 -translate-x-16 z-10 cursor-pointer"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 shadow-md">
      <span className="text-white text-lg">{"<"}</span>
    </div>
  </div>
);

const ShapeYourJourney = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-12 mt-6">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
        Shape Your Journey
      </h1>


      {/* Mobile Slider */}
      <div className="block md:hidden px-6 relative">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gray-500/70 py-3 text-center">
                  <h3 className="text-white text-lg font-medium">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group h-[450px]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gray-500/70 py-3 text-center">
              <h3 className="text-white text-lg font-medium">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShapeYourJourney;
