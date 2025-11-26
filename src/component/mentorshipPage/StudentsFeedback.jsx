import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, Sparkles, Quote } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    text: "The mentor was so patient and guided me with a clear Web Development roadmap. Every minute was valuable — worth every rupee I spent!",
    name: "Amit Kumar",
    role: "3rd Year B.Tech Student",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "I struggled with DSA for months, but after just two mentorship sessions, I finally cracked my coding interviews. The mentor explained logic in the simplest way possible!",
    name: "Ritika Sharma",
    role: "Placed at Amazon",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "Thanks to my mentor's personalized DSA roadmap, I cleared both technical and HR rounds easily. The feedback sessions were a game changer.",
    name: "Rajesh Tiwari",
    role: "Placed at TCS",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 4,
    text: "My mentor helped me understand how to structure projects professionally. I now feel confident applying for internships!",
    name: "Sneha Patel",
    role: "2nd Year CSE Student",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 5,
    text: "Before mentorship, I was lost with DSA topics. Now I solve problems daily and cleared my first coding round!",
    name: "Arjun Verma",
    role: "Placed at Infosys",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 6,
    text: "The roadmap and consistent feedback completely transformed my coding habits. I'm much more confident now!",
    name: "Kavya Singh",
    role: "Final Year Student",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const StudentsFeedback = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % feedbacks.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIndex((prev) => (prev + 1) % feedbacks.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, index]);

  const getVisibleCards = () => {
    const total = feedbacks.length;
    const prev = (index - 1 + total) % total;
    const next = (index + 1) % total;
    return [prev, index, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#ED0331]/5 to-[#87021C]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#ED0331]" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-gray-800 font-bold">
              What Our Students Say
            </h2>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#ED0331]" />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.p
            className="text-base md:text-lg text-gray-600 font-nunito max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Real experiences from students who transformed their careers
          </motion.p>
        </motion.div>

        {/* Mobile: Single Card View */}
        <div className="md:hidden relative min-h-[320px] flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-sm mx-auto"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Decorative Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ED0331]/8 to-[#87021C]/8 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  {/* Quote Icon with Animation */}
                  <motion.div
                    className="mb-4 text-[#ED0331] flex justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>

                  {/* Rating Stars with Stagger Animation */}
                  <div className="flex justify-center gap-0.5 mb-4">
                    {[...Array(feedbacks[index].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-base text-gray-700 leading-relaxed mb-6 font-nunito text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{feedbacks[index].text}"
                  </motion.p>

                  {/* User Info */}
                  <motion.div
                    className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={feedbacks[index].avatar}
                        alt={feedbacks[index].name}
                        className="w-12 h-12 rounded-full border-2 border-[#ED0331]/20 object-cover shadow-md"
                      />
                      <motion.div
                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    <div className="text-left">
                      <h4 className="text-base font-bold text-gray-900 font-playfair">
                        {feedbacks[index].name}
                      </h4>
                      <p className="text-xs text-gray-600 font-nunito">
                        {feedbacks[index].role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: Three Card View */}
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-6 relative min-h-[380px] mb-6">
          {visibleCards.map((cardIndex, positionIndex) => {
            const fb = feedbacks[cardIndex];
            const isCenter = cardIndex === index;
            const position = positionIndex === 1 ? "center" : positionIndex === 0 ? "left" : "right";

            return (
              <motion.div
                key={`${fb.id}-${cardIndex}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: position === "left" ? -150 : position === "right" ? 150 : 0,
                  y: position === "center" ? 0 : 20,
                  rotateY: position === "left" ? -20 : position === "right" ? 20 : 0,
                }}
                animate={{
                  opacity: isCenter ? 1 : 0.6,
                  scale: isCenter ? 1 : 0.85,
                  x: position === "left" ? -120 : position === "right" ? 120 : 0,
                  y: position === "center" ? 0 : 15,
                  rotateY: position === "left" ? -10 : position === "right" ? 10 : 0,
                  zIndex: isCenter ? 3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileHover={isCenter ? { scale: 1.05, y: -8 } : { scale: 0.9 }}
                className={`w-[280px] lg:w-[320px] rounded-2xl shadow-xl p-6 ${
                  isCenter
                    ? "bg-white border-2 border-[#ED0331]/40"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200"
                } relative overflow-hidden`}
              >
                {/* Animated Background Decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl ${
                    isCenter ? "bg-[#ED0331]/15" : "bg-gray-200/30"
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    className={`mb-3 flex justify-center ${
                      isCenter ? "text-[#ED0331]" : "text-gray-400"
                    }`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Quote className="w-7 h-7 lg:w-8 lg:h-8" />
                  </motion.div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-0.5 mb-3">
                    {[...Array(fb.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star
                          className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${
                            isCenter ? "text-yellow-500 fill-yellow-500" : "text-yellow-400 fill-yellow-400"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    className={`text-sm lg:text-base leading-relaxed mb-5 font-nunito text-center ${
                      isCenter ? "text-gray-800" : "text-gray-600"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{fb.text}"
                  </motion.p>

                  {/* User Info */}
                  <motion.div
                    className="flex items-center justify-center gap-2.5 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={fb.avatar}
                        alt={fb.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#ED0331]/20 object-cover shadow-md"
                      />
                      <motion.div
                        className="absolute -bottom-0.5 -right-0.5 w-3 h-3 lg:w-3.5 lg:h-3.5 bg-green-500 rounded-full border-2 border-white"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    <div className="text-left">
                      <h4 className={`text-sm lg:text-base font-bold font-playfair ${
                        isCenter ? "text-gray-900" : "text-gray-700"
                      }`}>
                        {fb.name}
                      </h4>
                      <p className="text-xs text-gray-600 font-nunito">
                        {fb.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <motion.button
            onClick={handlePrev}
            disabled={isAnimating}
            className="bg-white hover:bg-gray-50 text-[#ED0331] p-2.5 md:p-3 rounded-full shadow-lg border-2 border-[#ED0331]/20 hover:border-[#ED0331] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            whileHover={!isAnimating ? { scale: 1.15, x: -3 } : {}}
            whileTap={!isAnimating ? { scale: 0.9 } : {}}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ED0331]/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <ArrowLeft size={20} className="relative z-10 md:w-6 md:h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {feedbacks.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setIndex(i);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                disabled={isAnimating}
                className={`rounded-full transition-all ${
                  i === index
                    ? "bg-gradient-to-r from-[#ED0331] to-[#87021C] w-8 h-2 shadow-md"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                } disabled:cursor-not-allowed`}
                whileHover={!isAnimating ? { scale: 1.3, y: -2 } : {}}
                whileTap={!isAnimating ? { scale: 0.9 } : {}}
                animate={i === index ? {
                  boxShadow: [
                    "0 0 0 0px rgba(237, 3, 49, 0.4)",
                    "0 0 0 4px rgba(237, 3, 49, 0)",
                  ],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            disabled={isAnimating}
            className="bg-white hover:bg-gray-50 text-[#ED0331] p-2.5 md:p-3 rounded-full shadow-lg border-2 border-[#ED0331]/20 hover:border-[#ED0331] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            whileHover={!isAnimating ? { scale: 1.15, x: 3 } : {}}
            whileTap={!isAnimating ? { scale: 0.9 } : {}}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ED0331]/10"
              initial={{ x: "100%" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            />
            <ArrowRight size={20} className="relative z-10 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default StudentsFeedback;
