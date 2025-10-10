import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import masterclassImage from "../assets/masterclasshead.png";

const images = [masterclassImage, masterclassImage, masterclassImage];

const MasterClassPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Determine image size based on window width
  const imageSize = windowWidth >= 768
    ? { width: "1180px", height: "534.688px" }
    : { width: "366.222px", height: "165.944px" };

  return (
    <div className=" w-full flex flex-col items-center py-12 sm:py:3 justify-center px-4 bg-[#E2E2E2]">
      {/* Text Section */}
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mt-4 sm:mt-1 text-center  mb-8 px-2">
        {/* Heading */}
        <h1
          className=" text-2xl  sm:text-3xl md:text-4xl mt-7 font-semibold leading-snug"
          style={{
            fontFamily: "Playfair Display, serif",
            background: "linear-gradient(90deg, #ED0331, #87021C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Learn Any Topic in Just 1 Hour – Starting at ₹9!
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-800">
          Affordable, focused, and live masterclasses designed for school students,
          B.Tech learners, and professionals.
        </p>
      </div>

      {/* Image Slider Section */}
      <div className="w-full flex justify-center items-center py-8">
        <div className="relative flex justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="rounded-2xl object-cover flex-shrink-0"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                width: imageSize.width,
                height: imageSize.height,
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Optional bottom spacing */}
      <div className="h-1 md:h-7" />
    </div>
  );
};

export default MasterClassPage;
