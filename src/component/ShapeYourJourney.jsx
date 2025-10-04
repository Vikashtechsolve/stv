import React, { useState, useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mentor from "../assets/mentor.jpg";
import solve from "../assets/solving.jpg";
import online from "../assets/online.jpg";
import resume from "../assets/resume.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { title: "1:1 Mentorship", img: mentor },
  { title: "Doubt Solving", img: solve },
  { title: "Online Contests", img: online },
  { title: "Resume Review", img: resume },
];

const ServiceOverlay = ({ title }) => {
  return (
    <>
      {title === "1:1 Mentorship" && (
        <div className="text-white space-y-4 text-base">
          <p>Book a Slot</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Join a live video session</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Get a personalized career roadmap</p>
        </div>
      )}
      {title === "Doubt Solving" && (
        <div className="text-white space-y-4 text-base">
          <p>Post your Question</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Book live session</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Get it Explained</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Receive practice notes to strengthen concepts</p>
        </div>
      )}
      {title === "Online Contests" && (
        <div className="text-white space-y-4 text-base">
          <p>Register</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Participate in live coding/MCQ tests</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Earn rewards & recognition</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Track your progress on the leaderboard</p>
        </div>
      )}
      {title === "Resume Review" && (
        <div className="text-white space-y-4 text-base">
          <p>Upload your resume</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Get an expert review & analysis</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Receive detailed feedback</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p>Get a step-by-step roadmap for your career journey</p>
        </div>
      )}
    </>
  );
};

const ShapeYourJourney = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false, // disable default arrows
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-12 mt-6">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        Shape Your Journey
      </h1>

      {/* Mobile Slider */}
      <div className="block md:hidden px-6 relative">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div
                className="relative rounded-lg overflow-hidden shadow-lg h-[450px] cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {/* Background Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition duration-500"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-[#ED0331] to-[#87021C] transition duration-500 flex flex-col justify-center items-center text-center p-6 ${
                    activeIndex === index ? "opacity-95" : "opacity-0"
                  }`}
                >
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <ServiceOverlay title={service.title} />
                </div>

                {/* Default bottom bar */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gray-500/70 py-3 text-center transition duration-500 ${
                    activeIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white text-lg font-medium">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* External Prev/Next buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 shadow-md"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ED0331] text-white shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>
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

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ED0331] to-[#87021C] opacity-0 group-hover:opacity-95 transition duration-500 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-white text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <ServiceOverlay title={service.title} />
            </div>

            {/* Default bottom bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gray-500/70 py-3 text-center group-hover:opacity-0 transition duration-500">
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
