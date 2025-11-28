import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Users, BookOpen, Target, TrendingUp, Award } from 'lucide-react';

function AboutVTS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Users, text: "5,000+ Successful Sessions" },
    { icon: TrendingUp, text: "95% Learner Satisfaction" },
    { icon: BookOpen, text: "Expert Mentors from Top Companies" },
    { icon: Target, text: "Real-World Skill Building" },
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
      className="relative min-h-screen py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="heading-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What is VTS?
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="font-nunito space-y-8"
            variants={itemVariants}
          >
            {/* First Paragraph */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200/50"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At <span className="font-semibold text-[#ED0331]">Vikash Tech Solutions (VTS)</span>, we're on a mission to make learning simple, affordable, and impactful. We bridge the gap between traditional education and real-world skills by offering practical programs like Masterclasses, 1:1 Mentorship, Online Contests, Resume Reviews, and Live Doubt Solving Sessions.
              </p>
            </motion.div>

            {/* Second Paragraph */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-red-100/50"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With <span className="font-bold text-[#ED0331]">5,000+ successful sessions</span> and <span className="font-bold text-[#ED0331]">95% learner satisfaction</span>, we've built a trusted ecosystem of students, mentors, and professionals who grow together through live classes, personalized mentorship, and skill-building challenges.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-200/50 flex items-center gap-3"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#ED0331] to-[#87021C]">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-nunito font-semibold text-gray-800">{highlight.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-3xl blur-2xl transform scale-110"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <motion.img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Team mentoring and collaboration"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export { AboutVTS };