import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnanyaImg from "../assets/anayasharma.png";

const masterClassData = {
  mainTitle: 'Why Choose Our “Master Class"',
  subTitle: "Meet Our Master Class Mentors",
  mentors: [
    { name: "Ananya Sharma", role: "Data Science Mentor, Ex-Amazon", image: AnanyaImg },
    { name: "Sagar Patel", role: "Web Development Lead, Ex-Google", image: AnanyaImg },
    { name: "Priya Singh", role: "UX/UI Designer, Ex-Microsoft", image: AnanyaImg },
  ],
  points: [
    { title: "Affordable Learning", description: "Affordable Learning: High-Value Masterclasses Starting at Just ₹49 " },
    { title: "Focused Learning", description: "Concept Clarity Guaranteed: Deep-dive into one core topic with hands-on, practical examples in 90 minutes." },
    { title: "Expert Mentors", description: "Learn directly from industry professionals and experienced teachers." },
    { title: "Practical Insights", description: "Gain real-world knowledge through hands-on exercises." },
    { title: "Flexible Schedule", description: "Attend classes at your convenience and pace." },
    { title: "Lifetime Access", description: "Future Proof Your Learning: Get Lifetime Access to recordings, mentor notes, and exclusive resources." },
  ],
};

const WhyChooseMasterClass = ({ data = masterClassData }) => {
  const { mainTitle, subTitle, mentors, points } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [mentors.length]);

  return (
    <div className="w-full py-12 px-4 bg-[#E2E2E2] flex flex-col items-center">
      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        {mainTitle}
      </h2>

      {/* Main Content Wrapper */}
      <div
        className="flex flex-col md:flex-row justify-center items-center md:items-start
                   gap-10 md:gap-16 w-full max-w-7xl mx-auto px-4 md:px-8"
      >
        {/* Mentor Card Section */}
        <div className="flex flex-col items-center text-center w-full md:w-[400px]">
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">
            {subTitle}
          </h3>

          <div className="relative w-[300px] h-[360px] md:w-[380px] md:h-[420px] rounded-2xl shadow-xl overflow-hidden bg-white flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={mentors[currentIndex].image}
                alt={mentors[currentIndex].name}
                className="object-cover w-full h-full"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute bottom-0 w-full h-24 bg-white/60 flex flex-col justify-center items-center gap-1">
              <span className="text-red-600 text-xl md:text-2xl font-playfair font-bold">
                {mentors[currentIndex].name}
              </span>
              <span className="text-gray-800 text-sm md:text-base font-semibold">
                {mentors[currentIndex].role}
              </span>
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="flex flex-col gap-6 w-full md:max-w-[500px]">
          {points.map((point, index) => (
            <div key={index}>
              <h4 className="text-red-600 text-xl md:text-2xl font-playfair font-semibold mb-1">
                {point.title}
              </h4>
              <p className="text-gray-600 font-nunito text-sm md:text-lg font-medium leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMasterClass;
