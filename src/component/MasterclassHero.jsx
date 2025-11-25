import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import masterclassImage from "../assets/masterclasshead.png";
import authfreemasterclass from "../assets/authfreemasterclass.png";

const images = [
  authfreemasterclass,
  "https://res.cloudinary.com/dc4gqqd35/image/upload/v1763878938/Gemini_Generated_Image_ip97hhip97hhip97_yx8jfs.png",
  masterclassImage,
  authfreemasterclass
];

const MasterClassHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleBannerClick = () => {
    if (location.pathname === "/masterClass") {
      const upcomingSection = document.getElementById("upcoming-events");
      if (upcomingSection) {
        upcomingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/masterClass");
      setTimeout(() => {
        const upcomingSection = document.getElementById("upcoming-events");
        if (upcomingSection) {
          upcomingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full flex flex-col items-center justify-start md:justify-center pt-6 pb-6 md:py-8 bg-[#E2E2E2] relative overflow-hidden min-h-[55vh] md:min-h-[90vh]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full max-w-5xl text-center mb-3 md:mb-6 relative z-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight font-playfair heading-primary mb-2 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Master any topic in only 2 hours — for free!
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg font-medium text-black font-nunito max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Affordable, focused, and live masterclasses designed for school students,
          B.Tech learners, and professionals.
        </motion.p>
      </motion.div>

      {/* Slider Section */}
      <div
        className="w-full flex flex-col justify-center items-center relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto px-3 md:px-0">
          
          {/* Previous Button (Desktop Only) */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 md:left-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hidden md:flex items-center justify-center group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-[#ED0331] transition-colors" />
          </motion.button>

          <motion.div 
            className="relative w-full md:max-w-[88%] lg:max-w-[85%] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" 
            onClick={handleBannerClick}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full flex justify-center items-center bg-black/5" // Added bg-black/5 to show container bounds if image varies
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.img
                  src={images[currentIndex]}
                  alt={`Masterclass slide ${currentIndex + 1}`}
                  // --- FIXES START HERE ---
                  // 1. Changed 'object-cover' to 'object-contain' so the whole image fits.
                  // 2. Removed 'aspect-video' so it doesn't force a crop on mobile.
                  // 3. Kept 'max-h' but allowed 'w-full' and 'h-auto' to control sizing naturally.
                  className="w-full h-auto object-contain rounded-xl md:rounded-2xl max-h-[65vh] md:max-h-[60vh]"
                  // --- FIXES END HERE ---
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Adjusted overlay to only show if needed, or remove entirely if images are clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl md:rounded-2xl pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Next Button (Desktop Only) */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hidden md:flex items-center justify-center group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next image"
          >
            <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-[#ED0331] transition-colors" />
          </motion.button>
        </div>

        {/* Indicator Dots */}
        <div className="mt-3 md:mt-6 flex gap-2 md:gap-3 z-20">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-6 md:w-8 bg-[#ED0331] shadow-lg"
                  : "w-2 md:w-2.5 bg-gray-400 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterClassHero;