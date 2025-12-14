import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Ruler, UserCheck, Tag, Video, MessageSquare, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Industry-Verified Mentors",
    description: "Learn from mentors who work at top companies like Google, Microsoft, and Swiggy — verified professionals who know what it takes to grow.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 via-emerald-50 to-white",
    borderColor: "border-green-200",
  },
  {
    icon: Ruler,
    title: "Personalized Roadmaps",
    description: "Every learner gets a customized roadmap based on skills, goals, and timeline — no generic plans, only what you need.",
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-50 via-purple-50 to-white",
    borderColor: "border-indigo-200",
  },
  {
    icon: UserCheck,
    title: "1:1 Attention",
    description: "Get complete focus during every session — no group crowd, just you and your mentor working on your progress.",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 via-cyan-50 to-white",
    borderColor: "border-blue-200",
  },
  {
    icon: Tag,
    title: "Affordable & Transparent Pricing",
    description: "Quality mentorship shouldn't be expensive — our pricing is clear, fair, and accessible to students and professionals alike.",
    gradient: "from-teal-500 to-green-600",
    bgGradient: "from-teal-50 via-green-50 to-white",
    borderColor: "border-teal-200",
  },
  {
    icon: Video,
    title: "Session Recordings Available",
    description: "Missed something? Get access to recorded sessions so you can revise anytime, anywhere.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 via-pink-50 to-white",
    borderColor: "border-rose-200",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support via Chat",
    description: "Stay in touch with your mentor even after the session for continuous learning and career guidance.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 via-orange-50 to-white",
    borderColor: "border-amber-200",
  },
];

const FeatureCard = ({ icon: Icon, title, description, gradient, bgGradient, borderColor, index, isMobile }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: isMobile ? 0 : -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: index * (isMobile ? 0.06 : 0.12),
        duration: isMobile ? 0.4 : 0.6,
        type: "spring",
        stiffness: isMobile ? 150 : 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} hover:border-[#ED0331]/50 flex flex-col items-center text-center h-full relative overflow-hidden group`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={isMobile ? {} : { y: -15, scale: 1.03, rotateY: 5 }}
      style={{ perspective: isMobile ? "none" : "1000px" }}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full`} />

      {/* Enhanced Icon Container */}
      <motion.div
        className={`mb-6 w-20 h-20 p-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl relative z-10`}
        whileHover={isMobile ? {} : { rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="h-10 w-10 text-white" />
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-white/30"
          animate={isMobile ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ willChange: isMobile ? 'auto' : 'transform, opacity' }}
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 leading-snug font-playfair heading-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg font-nunito text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Enhanced Check Badge */}
      <motion.div
        className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#ED0331]/10 to-[#87021C]/10 rounded-full border-2 border-[#ED0331]/20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * (isMobile ? 0.06 : 0.12) + 0.2, type: "spring" }}
        whileHover={isMobile ? {} : { scale: 1.1 }}
      >
        <CheckCircle2 className="w-5 h-5 text-[#ED0331]" />
        <span className="text-sm font-bold text-[#ED0331]">Included</span>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8 font-inter relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-br from-red-200/15 to-pink-200/15 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
          animate={isMobile ? {} : {
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: isMobile ? 'auto' : 'transform' }}
        />
        {!isMobile && (
          <motion.div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform' }}
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <motion.header
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              animate={isMobile ? {} : { rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ willChange: isMobile ? 'auto' : 'transform' }}
            >
              <Sparkles className="w-8 h-8 text-[#ED0331]" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-gray-800 font-bold">
              Why Choose Us
            </h1>
            <motion.div
              animate={isMobile ? {} : { rotate: [360, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ willChange: isMobile ? 'auto' : 'transform' }}
            >
              <Sparkles className="w-8 h-8 text-[#ED0331]" />
            </motion.div>
          </div>
          <motion.div
            className="w-40 h-2 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          />
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-[#ED0331]" />
            <p className="text-xl sm:text-2xl font-nunito heading-primary font-semibold">
              We believe real growth comes from real connection.
            </p>
            <Zap className="w-6 h-6 text-[#ED0331]" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-nunito font-medium heading-primary">
            That's why every mentorship session is designed around you, not a pre-set syllabus
          </p>
        </motion.header>

        {/* Enhanced Feature Cards Grid */}
        <motion.section
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                bgGradient={feature.bgGradient}
                borderColor={feature.borderColor}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.section>

        {/* Optional space for visual centering */}
        <div className="py-12"></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
