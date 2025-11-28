import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Empowering = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleExplore = () => {
    navigate("/", { state: { scrollTo: "offer" } });
  };

  const stats = [
    { icon: Target, number: "10K+", label: "Learners" },
    { icon: TrendingUp, number: "95%", label: "Satisfaction" },
    { icon: Award, number: "5000+", label: "Sessions" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4 md:p-8 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering Growth Through Practical Learning!
            </motion.h1>
          </div>

          <motion.p
            className="text-xl md:text-2xl font-nunito font-semibold text-[#ED0331] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Vikash Tech Solutions, we redefine learning by bringing real-world experience into the classroom.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-nunito text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From interactive masterclasses to personalized mentorship, we help learners and professionals gain the skills that truly matter.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200/50 text-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-6 h-6 text-[#ED0331] mx-auto mb-2" />
                  <p className="text-2xl font-bold font-nunito text-gray-900">{stat.number}</p>
                  <p className="text-xs font-nunito text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.button
            onClick={handleExplore}
            className="group bg-gradient-to-r from-[#ED0331] to-[#87021C] hover:from-[#87021C] hover:to-[#ED0331] text-white py-4 px-8 rounded-full w-fit text-lg md:text-xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl font-nunito font-semibold relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore our Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            {/* Decorative Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-3xl blur-2xl transform scale-110"></div>
            <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 p-4 md:p-6 rounded-3xl shadow-2xl">
              {/* Image container */}
              <motion.div
                className="bg-gray-800 rounded-2xl overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Team celebrating success"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 