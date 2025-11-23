
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

// Import different images for the right-side slider
import image1 from "../assets/card1.png";
import image2 from "../assets/card2.png";
import image3 from "../assets/card3.png";
import image4 from "../assets/card4.png";
import smallImage from "../assets/small.png";

const dynamicContent = [
  {
    word: "Skills",
    image: image1,
    heading: "",
    description: "",
    buttonText: "",
  },
  {
    word: "Confidence",
    image: image2,
    heading: "",
    description: "",
    buttonText: "",
  },
  {
    word: "Career",
    image: image3,
    heading: "",
    description: "",
    buttonText: "",
  },
  {
    word: "Success",
    image: image4,
    heading: "",
    description: "",
    buttonText: "",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 2500); // rotates every 2.5s
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
      <div className="w-full flex flex-col md:flex-row p-4 md:p-12 bg-gray-1 gap-4 md:gap-0">

      {/* Left Side Text */}
      <div className="flex-1 flex flex-col justify-center">
        <h1
          className="text-[52px] sm:text-[50px] md:text-[50px] font-semibold text-gray-900 leading-tight font-playfair"
          style={{ letterSpacing: "-1px" }}
        >
          Build Your{" "}
          <span className="relative inline-block overflow-hidden align-middle h-[60px]">
            <div
              className="transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 60}px)`,
              }}
            >
              {dynamicContent.map((item, i) => (
                <div
                  key={i}
                  className="h-[60px] flex items-center text-red-700 font-semibold font-playfair text-[52px] sm:text-[50px] md:text-[50px]"
                >
                  {item.word}
                </div>
              ))}
            </div>
          </span>
          <br />
          with Vikash Tech Solution.
        </h1>

        <p className="text-red-700 text-2xl sm:text-[28px] md:text-[32px] font-semibold mt-2 md:mt-4 font-nunito">
          Your end-to-end career partner<br />
          to land your dream job
        </p>

        <p className="text-gray-700 mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-nunito">
          Learn from our expert mentors, gain hands-on project experience & take
          the right step toward a successful career!
        </p>

        <button
          className="mt-4 md:mt-8 px-6 mb-2 md:mb-4 cursor-pointer py-2 rounded-[20px] w-80 h-20 font-semibold shadow text-white text-lg sm:text-xl md:text-2xl transition hover:opacity-90 self-start btn-gradient-red font-nunito"
          onClick={() => handleNavigate("shapeYourJourney")}
        >
          Explore our Programs »
        </button>
      </div>

      {/* Right Side Animated Image with Overlay */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-full"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Main Image */}
              <img
                src={dynamicContent[currentIndex].image}
                alt={dynamicContent[currentIndex].heading}
                className="w-full object-cover rounded-lg shadow-lg"
              />

              {/* Overlay Text */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white max-w-[75%]">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-playfair">
                  {dynamicContent[currentIndex].heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-3 font-nunito">
                  {dynamicContent[currentIndex].description}
                </p>
                {/* <button className="bg-white text-gray-900 px-3 sm:px-5 py-1.5 sm:py-2 rounded-md font-medium shadow hover:bg-gray-200 transition text-xs sm:text-sm md:text-base">
                  {dynamicContent[currentIndex].buttonText}
                </button> */}
              </div>

              {/* Bottom Right Small Image */}
              {/* <img
                src={smallImage}
                alt="Extra Illustration"
                className="absolute bottom-2 right-2 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover"
              /> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
