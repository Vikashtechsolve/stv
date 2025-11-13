import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const  hero ="https://res.cloudinary.com/dc4gqqd35/image/upload/v1761205222/Frame_748_akckfj.jpg"

const images = [hero, hero, hero];

const DoubtSolvingHero = () => {
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

  const handleNavigate = (sectionId) => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" w-full flex flex-col items-center py-10 px-4 bg-[#E2E2E2]">

      {/* Image Slider Section */}
      <div className="w-full flex justify-center items-center py-6">
        <div className="relative flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="
                rounded-2xl object-contain  
                w-[95%] sm:w-[90%] md:w-[95%] lg:w-[90%] 
                max-w-[1200px] md:h-[60vh] 
              "
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </div>

      <button onClick={() => handleNavigate("pricingplans")} className="mt-12 bg-gradient-to-r cursor-pointer from-[#E70021] to-[#9B0014] text-white text-xl font-semibold px-8 py-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
        Connect with a Mentor Now →
      </button>
    </div>
  );
};

export default DoubtSolvingHero;
