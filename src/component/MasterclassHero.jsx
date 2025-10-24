import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import masterclassImage from "../assets/masterclasshead.png";

const images = [masterclassImage, masterclassImage, masterclassImage];

const MasterClassPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 bg-[#E2E2E2]">
      {/* Text Section */}
      <div className="w-[95%] md:w-[90%] lg:w-[80%] text-center mb-8">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mt-4"
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
      <div className="w-full flex justify-center items-center py-6">
        <div className="relative flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="
                rounded-2xl object-cover shadow-lg
                w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
                max-w-[1200px] h-auto
              "
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Optional bottom spacing */}
      <div className="h-2 md:h-6" />
    </div>
  );
};

export default MasterClassPage;
