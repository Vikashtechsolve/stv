import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Rocket, Target, Zap } from 'lucide-react';

const StartJourney = () => {
  const handleStartJourney = () => {
    const mentorsSection = document.getElementById('mentors-section');
    if (mentorsSection) {
      mentorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Target, text: "Clear Goals" },
    { icon: Zap, text: "Fast Growth" },
    { icon: Rocket, text: "Career Success" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex items-start justify-center p-4 sm:p-8 bg-gray-50 font-inter relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#87021C]/20 to-[#ED0331]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-5xl py-16 px-4 sm:px-8 md:py-24 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#ED0331] animate-pulse" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl heading-primary font-semibold leading-tight">
              Clarity. Confidence. Career Growth — Starts Here
            </h1>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#ED0331] animate-pulse" />
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-nunito text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Connect with a mentor who understands your goals and helps you reach them faster.
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-3 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm">{feature.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleStartJourney}
            className="
              group relative inline-flex items-center justify-center
              px-8 py-4 sm:px-12 sm:py-5
              text-lg sm:text-xl font-semibold text-white
              rounded-2xl
              shadow-2xl
              overflow-hidden
              focus:outline-none focus:ring-4 focus:ring-[#ED0331]/30
              cursor-pointer
            "
            style={{
              background: "linear-gradient(90deg, #ED0331, #87021C)",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative z-10 flex items-center gap-3">
              Start Mentorship Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-gray-600"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <span className="text-[#ED0331] font-bold">✓</span>
            <span className="font-nunito">100% Verified Mentors</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <span className="text-[#ED0331] font-bold">✓</span>
            <span className="font-nunito">10K+ Students Guided</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <span className="text-[#ED0331] font-bold">✓</span>
            <span className="font-nunito">4.9+ Rating</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartJourney;
