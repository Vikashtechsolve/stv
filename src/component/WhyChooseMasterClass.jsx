import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnanyaImg from "../assets/anayasharma.png";

const vivek="https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840361/Vivek_m6sgzw.jpg";
const abhinav="https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840861/Tasin_iyd0me.jpg";
const pavan="https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832519/pavan_ooikbo.jpg";

const masterClassData = {
  mainTitle: 'Why Choose Our “Master Class"',
  subTitle: "Meet Our Master Class Mentors",

  mentors: [
    { name: "Vevek Sharma", role: "Data Science Mentor, Ex-Amazon", image: vivek },
    { name: "Abhinav Jadeja", role: "Web Development Lead, Ex-Google", image: abhinav },
    { name: "Pavan Dubey", role: "UX/UI Designer, Ex-Microsoft", image: pavan },
  ],
  points: [
    { title: "Affordable Learning", description: "Affordable Learning: High-Value Masterclasses Starting at Just ₹0" },
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
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [mentors.length, isHovered]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#E2E2E2] flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Title with Animation */}
      <motion.h2
        className="heading-section mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {mainTitle}
      </motion.h2>

      {/* Main Content Wrapper */}
      <div
        className="flex flex-col md:flex-row justify-center items-start
                   gap-10 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        {/* Mentor Card Section */}
        <motion.div
          className="flex flex-col items-center text-center w-full md:w-[420px] lg:w-[480px] flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-6 text-black">
            {subTitle}
          </h3>

          <div
            className="relative w-full max-w-[420px] h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-white flex justify-center items-center transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={mentors[currentIndex].image}
                alt={mentors[currentIndex].name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>

            {/* Overlay with Animation */}
            <motion.div
              className="absolute bottom-0 w-full h-24 bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-1"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="text-[#ED0331] text-xl md:text-2xl font-playfair font-bold"
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {mentors[currentIndex].name}
              </motion.span>
              <motion.span
                className="text-black text-sm md:text-base font-semibold font-nunito"
                key={`${currentIndex}-role`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {mentors[currentIndex].role}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Points Section with Stagger Animation - Grid Layout */}
        <motion.div
          className="flex-1 w-full md:max-w-[580px] lg:max-w-[620px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 h-full items-start">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/80 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ borderColor: "#ED0331", borderWidth: "2px" }}
              >
                <h4 className="text-[#ED0331] text-base md:text-lg lg:text-xl font-playfair font-semibold mb-2">
                  {point.title}
                </h4>
                <p className="text-black font-nunito text-xs md:text-sm lg:text-base font-medium leading-relaxed flex-grow">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMasterClass;
