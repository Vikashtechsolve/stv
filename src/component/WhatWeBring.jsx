import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Monitor, Puzzle, FileText, Sparkles, ArrowRight } from 'lucide-react';

export default function WhatWeBring() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      icon: Users,
      title: '1:1 Mentorship',
      description: 'Get personal guidance from experienced mentors who help you identify your strengths, set clear goals, and create a learning roadmap. Whether you\'re preparing for interviews, switching domains, or improving core concepts — our mentors guide you every step of the way.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      icon: Monitor,
      title: 'Online Contests',
      description: 'Participate in live coding and skill-based contests to challenge yourself and grow with peers. Gain exposure to competitive problem-solving, build confidence, and track your progress through real-time leaderboards.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      icon: Puzzle,
      title: 'Live Doubt Solving',
      description: 'No more learning roadblocks! Join our live doubt-solving sessions and get instant solutions from mentors. Whether it\'s a programming concept, logic issue, or design question — we ensure you never get stuck while learning.',
      gradient: 'from-[#ED0331] to-[#87021C]',
    },
    {
      id: 4,
      icon: FileText,
      title: 'Resume Review',
      description: 'Get your resume professionally reviewed and customized as per your career goals. Our experts help you identify what recruiters look for and guide you with a structured roadmap to land your dream role — whether it\'s in tech, design, or business.',
      gradient: 'from-green-500 to-emerald-600',
    }
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
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
              What We Bring to You
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                variants={itemVariants}
              >
                <motion.div
                  className={`relative rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer h-full flex flex-col overflow-hidden ${
                    service.id === 3
                      ? 'bg-gradient-to-b from-[#ED0331] to-[#87021C] shadow-xl'
                      : `bg-gradient-to-b ${service.gradient} shadow-lg`
                  }`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                  
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <IconComponent 
                        size={32} 
                        className="text-white"
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-nunito font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={isHovered ? { x: "200%" } : { x: "-100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}