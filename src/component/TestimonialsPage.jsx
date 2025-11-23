import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay } from "react-icons/fi";

const TestimonialsPage = ({ videoUrl, title, testimonialImg }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => setIsPlaying(true);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#E2E2E2] flex flex-col items-center relative overflow-hidden z-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
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

      {/* Header with Animation */}
      <motion.h2
        className="heading-section mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h2>



      {/* Video Container with Enhanced Animation & Effects */}
      <motion.div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ boxShadow: "0 25px 50px rgba(237, 3, 49, 0.2)" }}
      >
        {/* Decorative Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-[#ED0331]/30"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="video"
              className="relative w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <video
                src={videoUrl}
                className="w-full max-h-[500px] md:max-h-[600px] object-cover rounded-3xl"
                controls
                autoPlay
              />
              {/* Video Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-3 text-white">
                <p className="text-sm font-nunito font-medium">Student Testimonial Video</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="thumbnail"
              className="relative w-full cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handlePlayClick}
            >
              {/* Local Image Placeholder */}
              <motion.img
                src={testimonialImg}
                alt="Video placeholder"
                className="w-full max-h-[500px] md:max-h-[600px] object-cover rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl pointer-events-none" />
              
              {/* Animated Pulse Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              {/* Centered Play Button with Enhanced Animation */}
              <motion.button
                role="button"
                aria-label="Play video"
                onClick={handlePlayClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#ED0331] to-[#87021C] hover:from-[#FF0A42] hover:to-[#ED0331] backdrop-blur-sm flex justify-center items-center cursor-pointer shadow-2xl group z-10"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                
                {/* Triangle Play Icon */}
                <motion.div
                  className="relative z-10 w-0 h-0 border-l-[28px] md:border-l-[32px] border-t-[16px] md:border-t-[18px] border-b-[16px] md:border-b-[18px] border-l-white border-t-transparent border-b-transparent ml-1"
                  whileHover={{ x: 3 }}
                />
              </motion.button>

              {/* Play Text */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-sm md:text-base font-nunito font-semibold drop-shadow-lg">
                  Click to Play Testimonial
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;
