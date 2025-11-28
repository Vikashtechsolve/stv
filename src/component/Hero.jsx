import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import image1 from "../assets/card1.png";
import image2 from "../assets/card2.png";
import image3 from "../assets/card3.png";
import image4 from "../assets/card4.png";

const dynamicContent = [
  { word: "Skills", image: image1 },
  { word: "Confidence", image: image2 },
  { word: "Career", image: image3 },
  { word: "Success", image: image4 },
];

const featureCards = [
  {
    title: "Expert Mentors",
    description: "Learn from industry professionals with years of experience",
    icon: "👨‍🏫",
  },
  {
    title: "Live Sessions",
    description: "Interactive live classes for real-time learning",
    icon: "🎥",
  },
  {
    title: "Career Support",
    description: "Get guidance for placements and career growth",
    icon: "🚀",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordHeight, setWordHeight] = useState(48);
  const wordRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (wordRef.current) {
        setWordHeight(wordRef.current.offsetHeight);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleNavigate = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    // CHANGE 1: Changed 'min-h-screen' to 'h-auto'. 
    // CHANGE 2: Removed 'pt-xx' entirely (or set to pt-0).
    <div className="w-full h-auto flex flex-col bg-gray-50 pt-0 pb-10">
      
      {/* Main Hero Content */}
      {/* CHANGE 3: Removed 'justify-center'. Added 'mt-4' for minimal breathing room if needed. */}
      <div className="flex-1 flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-12 py-8 gap-6 md:gap-12">
        
        {/* Left Side Text */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl w-full space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight font-playfair">
            Build Your{" "}
            <span className="relative inline-block overflow-hidden align-middle h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px]">
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(-${currentIndex * wordHeight}px)`,
                }}
              >
                {dynamicContent.map((item, i) => (
                  <div
                    key={i}
                    ref={i === 0 ? wordRef : null}
                    className="h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px] flex items-center text-red-700 font-semibold font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    {item.word}
                  </div>
                ))}
              </div>
            </span>
            <br />
            <span className="text-gray-900">with Vikash Tech Solution.</span>
          </h1>

          <p className="text-red-700 text-lg sm:text-xl md:text-2xl font-semibold font-nunito leading-tight">
            Your end-to-end career partner<br />
            to land your dream job
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed font-nunito">
            Learn from our expert mentors, gain hands-on project experience & take
            the right step toward a successful career!
          </p>

          <motion.button
            className="mt-2 px-6 md:px-8 py-2.5 md:py-3 cursor-pointer rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl self-start btn-gradient-red font-nunito transition-all duration-300"
            onClick={() => handleNavigate("shapeYourJourney")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore our Programs »
          </motion.button>
        </div>

        {/* Right Side Animated Image */}
        <div className="flex-1 flex justify-center items-center relative w-full max-w-xl lg:max-w-2xl">
          <div className="relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  src={dynamicContent[currentIndex].image}
                  alt={dynamicContent[currentIndex].word}
                  className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-contain rounded-xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Three Cards */}
      <div className="w-full px-4 md:px-8 lg:px-12 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 md:p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl">{card.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-playfair mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-nunito leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;