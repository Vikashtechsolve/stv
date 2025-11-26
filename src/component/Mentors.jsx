import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Mentors = () => {
  const mentors = [
    {
      name: "Venkatesh reddy",
      role: "Java Full Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Venkatesh__ihttlr.jpg",
      description:
        "Passionate Java Full Stack Developer delivering end-to-end web applications with clean architecture, modern UI, and proven real-world impact.",
    },
    {
      name: "Abhinav Verma",
      role: "Advanced DSA Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759831230/Abhinav_kilenc.jpg",
      description:
        "Passionate Data Structures & Algorithms Trainer helping students master advanced concepts, optimize solutions, and crack top-tier tech interviews with confidence.",
    },
    {
      name: "Pavan Sharma",
      role: "Expert AI/ML developer and mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832519/pavan_ooikbo.jpg",
      description:
        "Expert AI/ML developer and mentor, skilled in building intelligent solutions and guiding learners to master machine learning and AI technologies.",
    },
     {
      name: "Ashish Vaghamshi",
      role: "Full Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
      description:
        "Dynamic Full Stack Developer building powerful, responsive, and user-centric web applications that deliver real business value.",
    },
     {
      name: "Masood Raza",
      role: "Data Analyst / Data Science Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png",
      description:
        "Skilled Data Analyst proficient in Python, R, SQL, Power BI, and Linux, specializing in data visualization, analytics, and transforming raw data into actionable insights.",
    },
    {
      name: "Vevek Naydo",
      role: "Mobile Application Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Vivek_m6sgzw.jpg",
      description:
        "Innovative Mobile App Developer passionate about crafting responsive, secure, and feature-rich mobile solutions that bring ideas to life.",
    },
    {
      name: "Tanishq Gupta",
      role: "AWS Trainer & Cloud Solutions Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832522/Tanishq_dh9wr3.jpg",
      description:
        "Experienced AWS trainer, empowering learners to master cloud computing and implement scalable, secure cloud solutions.",
    },
    {
      name: "Amol Sutar",
      role: "Database Solutions Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832492/Amol_ykm4vw.jpg",
      description:
        "Skilled DBMS trainer, guiding learners to design, manage, and optimize robust database systems efficiently.",
    },
    {
      name: "Tasin Khan",
      role: "MERN Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840861/Tasin_iyd0me.jpg",
      description:
        "Proficient MERN stack developer, building dynamic web applications and mentoring learners to master full-stack development with MongoDB, Express, React, and Node.js.",
    },
    {
      name: "Mayur Kumar",
      role: "DSA Mentor & Problem-Solving Coach",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg",
      description:
        "Expert DSA mentor, helping learners master data structures and algorithms to excel in coding interviews and competitive programming.",
    },
    {
      name: "Kishor Mohite",
      role: "Database Mentor & Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841721/Kishor_rdehwa.jpg",
      description:
        "Practical database mentor with real-world experience, guiding learners to design, manage, and optimize databases effectively.",
    },
     {
      name: "Abhishek singh",
      role: "Advanced Excel, Power BI & SQL Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg",
      description:
        "Experienced mentor guiding learners to master Excel, Power BI, and SQL for data analysis and real-world business insights.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef(null);

  // Get visible cards count based on screen size
  const getVisibleCardsCount = () => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 768) return 3; // Mobile: 3 cards (center + 1 each side)
    return 5; // Desktop: 5 cards (center + 2 each side)
  };

  const [visibleCardsCount, setVisibleCardsCount] = useState(getVisibleCardsCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCardsCount(getVisibleCardsCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Get cards to display (duplicate for infinite effect)
  const getVisibleCards = () => {
    const cards = [];
    const sideCount = Math.floor(visibleCardsCount / 2);
    for (let i = -sideCount; i <= sideCount; i++) {
      let index = currentIndex + i;
      // Handle wrapping
      while (index < 0) index += mentors.length;
      while (index >= mentors.length) index -= mentors.length;
      cards.push({ ...mentors[index], displayIndex: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  const nextMentor = () => {
    setCurrentIndex((prev) => (prev + 1) % mentors.length);
  };

  const prevMentor = () => {
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  const goToMentor = (index) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  // Auto-scroll functionality
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (!isHovered) {
        nextMentor();
      }
    }, 3500); // Auto-slide every 3.5 seconds
  };

  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [isHovered, currentIndex]);

  // Calculate 3D dome transform for each card
  const getCardTransform = (position) => {
    const isMobile = visibleCardsCount === 3;
    const angle = position * (isMobile ? 35 : 25); // Larger angle on mobile for more spacing
    const radius = isMobile ? 300 : 400; // Closer radius on mobile
    
    // Calculate 3D position
    const translateZ = Math.cos((angle * Math.PI) / 180) * radius - radius;
    const translateX = Math.sin((angle * Math.PI) / 180) * radius;
    const rotateY = -angle;
    
    // Scale: center is 1.0, sides get smaller
    const scale = position === 0 ? 1.0 : Math.max(0.65, 1 - Math.abs(position) * 0.18);
    
    // Opacity: center is full, sides fade
    const opacity = position === 0 ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.2);
    
    return {
      translateX,
      translateZ,
      rotateY,
      scale,
      opacity,
      zIndex: 10 - Math.abs(position),
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-section mb-4 md:mb-6">
        Meet Our Mentors
      </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-nunito font-medium max-w-3xl mx-auto">
            Learn from industry experts who bring real-world experience and
            passion to guide your journey to success.
          </p>
        </motion.div>

        {/* 3D Dome Carousel Container */}
        <div className="relative h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-visible">
          {/* 3D Scene */}
          <div
            className="relative w-full h-full"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                }}
                exit={{ opacity: 0.3 }}
                transition={{
                  opacity: { duration: 0.4 },
                  rotateY: {
                    type: "spring",
                    stiffness: 180,
                    damping: 25,
                    mass: 1,
                  },
                }}
              >
                {visibleCards.map((mentor, idx) => {
                const position = mentor.displayIndex;
                const { translateX, translateZ, rotateY, scale, opacity, zIndex } =
                  getCardTransform(position);
                const isCenter = position === 0;

            return (
                  <motion.div
                    key={`${mentor.name}-${currentIndex}-${position}-${idx}`}
                    className="absolute"
                    style={{
                      width: isCenter 
                        ? (visibleCardsCount === 3 ? "320px" : "380px")
                        : (visibleCardsCount === 3 ? "260px" : "300px"),
                      maxWidth: "95vw",
                      transformStyle: "preserve-3d",
                      zIndex,
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.7,
                      x: translateX + (position > 0 ? 100 : position < 0 ? -100 : 0),
                      z: translateZ - 150,
                      rotateY: rotateY + (position > 0 ? 30 : position < 0 ? -30 : 0),
                    }}
                    animate={{
                      opacity,
                      scale,
                      x: translateX,
                      z: translateZ,
                      rotateY: rotateY,
                      y: isCenter ? -20 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.75,
                      x: translateX + (position > 0 ? -80 : position < 0 ? 80 : 0),
                      z: translateZ - 120,
                      transition: {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 22,
                      mass: 0.9,
                      duration: 1,
                    }}
                  >
                    <div className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden h-full transition-all duration-300">
                      {/* Film Strip Effect - Top and Bottom Borders */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-20" />
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-20" />
                      
                      {/* Perforations (Film Strip Holes) */}
                      <div className="absolute top-1 left-2 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute top-1 left-8 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute top-1 right-2 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute top-1 right-8 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute bottom-1 left-2 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute bottom-1 left-8 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute bottom-1 right-2 w-1 h-1 bg-gray-900 rounded-full z-30" />
                      <div className="absolute bottom-1 right-8 w-1 h-1 bg-gray-900 rounded-full z-30" />

                      {/* Image Section */}
                      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mt-2">
                        <motion.img
                  src={mentor.img}
                  alt={mentor.name}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: isCenter ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                        />
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                            isCenter ? "opacity-100" : "opacity-70"
                          }`}
                        />
                        
                        {/* Role Badge */}
                        <motion.div
                          className="absolute bottom-4 left-4 right-4"
                          animate={{
                            y: isCenter ? 0 : 10,
                            opacity: isCenter ? 1 : 0.7,
                          }}
                        >
                          <div className={`bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold font-nunito inline-block ${
                            isCenter ? "scale-100" : "scale-90"
                          } transition-transform duration-300`}>
                            {mentor.role}
                          </div>
                        </motion.div>

                        {/* Center Card Glow Effect */}
                        {isCenter && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"
                            animate={{
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </div>

                      {/* Content Section */}
                      <div className={`p-5 md:p-6 bg-white mb-2 transition-all duration-300 ${
                        !isCenter && "opacity-80"
                      }`}>
                        <motion.h3
                          className={`text-xl md:text-2xl font-bold font-playfair heading-primary mb-3 ${
                            isCenter ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                          }`}
                        >
                    {mentor.name}
                        </motion.h3>
                        <p className={`text-gray-700 leading-relaxed font-nunito ${
                          isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"
                        } line-clamp-3`}>
                    {mentor.description}
                  </p>
                </div>

                      {/* Glow Border on Center Card */}
                      {isCenter && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-4 border-red-400/50 pointer-events-none"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(237, 3, 49, 0.3)",
                              "0 0 40px rgba(237, 3, 49, 0.5)",
                              "0 0 20px rgba(237, 3, 49, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
              </div>
                  </motion.div>
            );
          })}
            </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => {
              prevMentor();
              resetAutoScroll();
            }}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 md:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer z-40 group"
            whileHover={{ scale: 1.2, x: -8, backgroundColor: "#fee2e2" }}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Previous mentor"
          >
            <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </motion.button>

          <motion.button
            onClick={() => {
              nextMentor();
              resetAutoScroll();
            }}
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 md:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer z-40 group"
            whileHover={{ scale: 1.2, x: 8, backgroundColor: "#fee2e2" }}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Next mentor"
          >
            <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </motion.button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {mentors.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToMentor(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-red-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to mentor ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Mentors;
