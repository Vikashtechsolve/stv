import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  { title: "1:1 Mentorship", img: mentor, path: "/oneToOneMentoring" },
  { title: "Doubt Solving", img: solve, path: "/doubt-solving" },
  { title: "Online Contests", img: online, path: "/online-contests" },
  { title: "Resume Review", img: resume, path: "/resume-review" },
];

const ServiceOverlay = ({ title }) => {
  return (
    <>
      {title === "1:1 Mentorship" && (
        <div className="text-white space-y-4 text-base">
          <p className="font-nunito">Book a Slot</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Join a live video session</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Get a personalized career roadmap</p>
        </div>
      )}
      {title === "Doubt Solving" && (
        <div className="text-white space-y-4 text-base">
          <p className="font-nunito">Post your Question</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Book live session</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Get it Explained</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Receive practice notes to strengthen concepts</p>
        </div>
      )}
      {title === "Online Contests" && (
        <div className="text-white space-y-4 text-base">
          <p className="font-nunito">Register</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Participate in live coding/MCQ tests</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Earn rewards & recognition</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Track your progress on the leaderboard</p>
        </div>
      )}
      {title === "Resume Review" && (
        <div className="text-white space-y-4 text-base">
          <p className="font-nunito">Upload your resume</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Get an expert review & analysis</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Receive detailed feedback</p>
          <FaArrowDownLong className="mx-auto text-xl" />
          <p className="font-nunito">Get a step-by-step roadmap for your career journey</p>
        </div>
      )}
    </>
  );
};

const ShapeYourJourney = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h1
        className="text-center heading-section mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        variants={itemVariants}
      >
        Shape Your Journey
      </motion.h1>

      {/* Mobile Slider */}
      <div className="block md:hidden relative">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg h-[450px] cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
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
                  <h3 className="text-white text-2xl font-bold mb-4 font-playfair">
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
                  <h3 className="text-white text-lg font-medium font-playfair">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
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
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group h-[450px] cursor-pointer"
            onClick={() => handleServiceClick(service.path)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
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
              <h3 className="text-white text-lg font-medium font-playfair">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ShapeYourJourney;
