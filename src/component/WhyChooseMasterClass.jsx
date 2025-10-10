import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnanyaImg from "../assets/anayasharma.png";

const masterClassData = {
  mainTitle: "Why Choose Our “Master Class",
  subTitle: "Meet Our Master Class Mentors",
  mentors: [
    {
      name: "Ananya Sharma",
      role: "Data Science Mentor, Ex-Amazon",
      image: AnanyaImg,
    },
    {
      name: "Ananya Sharma",
      role: "Data Science Mentor, Ex-Amazon",
      image: AnanyaImg,
    },
    {
      name: "Ananya Sharma",
      role: "Data Science Mentor, Ex-Amazon",
      image: AnanyaImg,
    },
  ],
  points: [
    { title: "Affordable Learning", description: "Start your journey with live masterclasses at affordable prices." },
    { title: "Focused Learning", description: "Deep dive into one topic with practical, easy-to-understand examples." },
    { title: "Expert Mentors", description: "Learn directly from industry professionals and experienced teachers." },
    { title: "Practical Insights", description: "Gain real-world knowledge through hands-on exercises." },
    { title: "Flexible Schedule", description: "Attend classes at your convenience and pace." },
    { title: "Lifetime Access", description: "Revisit class recordings and resources anytime." },
  ],
};

const WhyChooseMasterClass = ({ data = masterClassData }) => {
  const { mainTitle, subTitle, mentors, points } = data;
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
      setCurrentIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [mentors.length]);

  // Responsive size for card
  const cardSize = windowWidth >= 768
    ? { width: "520px", height: "570px" }
    : { width: "366.222px", height: "165.944px" };

  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center">
      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        {mainTitle}
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-7xl">
        {/* Mentor Card */}
        <div className="flex flex-col items-center gap-6 w-full md:w-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center">{subTitle}</h3>

          <div className="w-full flex justify-center items-center py-8">
            <div
              className="relative flex justify-center items-center rounded-2xl shadow-lg overflow-hidden bg-white"
              style={{
                width: cardSize.width,
                height: cardSize.height,
              }}
            >
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
              <div className="absolute bottom-0 w-full h-24 bg-white/40 flex flex-col justify-center items-center gap-1">
                <span className="text-red-600 text-xl md:text-2xl font-bold">{mentors[currentIndex].name}</span>
                <span className="text-gray-800 text-sm md:text-base font-semibold">{mentors[currentIndex].role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="flex flex-col gap-6 w-full md:max-w-lg">
          {points.map((point, index) => (
            <div key={index}>
              <h4 className="text-red-600 text-xl md:text-2xl font-semibold mb-1">{point.title}</h4>
              <p className="text-gray-600 text-base md:text-lg font-medium">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMasterClass;
