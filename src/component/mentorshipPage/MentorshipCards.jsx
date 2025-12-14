import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_SIZE = "w-14 h-14";

// Icon Components
const RoadmapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z" />
    <path d="M12 21a2 2 0 0 0 2-2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2z" />
    <line x1="12" y1="12" x2="12" y2="17" />
    <line x1="12" y1="7" x2="12" y2="9" />
  </svg>
);

const BrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a2 2 0 0 0-2 2v2M12 1a2 2 0 0 1 2 2v2M4 10h16M2 12c.7-.7 1.5-1.1 2.5-1.1h15c1 0 1.8.4 2.5 1.1M12 22a2 2 0 0 0 2-2v-2M12 22a2 2 0 0 1-2-2v-2M18 18c1.7 0 3-.5 3-2s-1.3-2-3-2M6 18c-1.7 0-3-.5-3-2s1.3-2 3-2" />
  </svg>
);

const VideoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const WrenchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-3.76 3.76a2 2 0 0 1-2.83 0l-2.83-2.83a2 2 0 0 1 0-2.83l3.76-3.76a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const TagIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const features = [
  {
    icon: RoadmapIcon,
    title: 'Personalized Career Roadmap',
    description: 'Get a customized learning and career plan designed just for you. Your mentor helps you identify strengths, fix weak areas, and map out the right steps toward your career goals.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    cardBg: 'bg-gradient-to-br from-blue-50 via-white to-blue-50/50',
    borderColor: 'border-blue-200',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: BrainIcon,
    title: 'Topic-Focused Guidance',
    description: 'Learn directly from experts on the subjects you want to master — from Data Structures and Algorithms to Web Development, AI, and interview preparation. Get focused guidance on what truly matters to you.',
    iconColor: 'text-red-600',
    iconBg: 'bg-gradient-to-br from-red-500 to-red-700',
    cardBg: 'bg-gradient-to-br from-red-50 via-white to-red-50/50',
    borderColor: 'border-red-200',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    icon: VideoIcon,
    title: 'Live, Interactive Sessions',
    description: 'Engage in one-on-one live sessions where mentors explain, discuss, and guide you in real time. No pre-recorded content — just direct learning and personalized feedback.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-700',
    cardBg: 'bg-gradient-to-br from-purple-50 via-white to-purple-50/50',
    borderColor: 'border-purple-200',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: WrenchIcon,
    title: 'Doubt Solving + Resources',
    description: 'Never get stuck again! Ask your doubts instantly and access exclusive practice materials, exercises, and projects shared by your mentor to strengthen your skills.',
    iconColor: 'text-orange-600',
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-700',
    cardBg: 'bg-gradient-to-br from-orange-50 via-white to-orange-50/50',
    borderColor: 'border-orange-200',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: TagIcon,
    title: 'Affordable Pricing',
    description: 'Quality mentorship doesn\'t have to be expensive. We offer flexible, budget-friendly plans so every learner — from student to professional — can access expert mentorship.',
    iconColor: 'text-gray-700',
    iconBg: 'bg-gradient-to-br from-gray-500 to-gray-700',
    cardBg: 'bg-gradient-to-br from-gray-50 via-white to-gray-50/50',
    borderColor: 'border-gray-200',
    gradient: 'from-gray-500 to-slate-600',
  },
];

const FeatureCard = ({ feature, isBottomRow, index, isMobile }) => {
  const IconComponent = feature.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * (isMobile ? 0.08 : 0.15),
        duration: isMobile ? 0.4 : 0.6,
        type: "spring",
        stiffness: isMobile ? 150 : 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className={`
        p-8 md:p-10 ${feature.cardBg}
        rounded-3xl shadow-xl border-2 ${feature.borderColor}
        hover:shadow-2xl hover:border-[#ED0331]/50 transition-all duration-300
        flex flex-col items-center text-center h-full relative overflow-hidden group
        ${isBottomRow ? 'lg:mx-0 xl:mx-10' : ''}
      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      whileHover={isMobile ? {} : { y: -12, scale: 1.03 }}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${feature.gradient} opacity-10 rounded-bl-full`} />

      {/* Enhanced Icon Section */}
      <motion.div
        className={`
          w-24 h-24 p-4 mb-6
          ${feature.iconBg} rounded-2xl
          flex items-center justify-center shadow-2xl relative z-10
        `}
        whileHover={isMobile ? {} : { rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.8 }}
      >
        <IconComponent className={`text-white ${ICON_SIZE}`} />
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-white/30"
          animate={isMobile ? {} : {
            scale: [1, 1.15, 1],
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
      <h3 className="
        text-xl md:text-2xl font-bold mb-4 font-playfair
        heading-primary tracking-tight
      ">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg font-nunito text-gray-600 leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Check Badge */}
      <motion.div
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ED0331]/10 to-[#87021C]/10 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * (isMobile ? 0.08 : 0.15) + 0.2 }}
      >
        <CheckCircle2 className="w-5 h-5 text-[#ED0331]" />
        <span className="text-sm font-bold text-[#ED0331]">Included</span>
      </motion.div>
    </motion.div>
  );
};

const MentorshipCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const topRowFeatures = features.slice(0, 3);
  const bottomRowFeatures = features.slice(3);

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
    <div className="min-h-screen bg-gray-50 font-inter p-6 md:p-12 lg:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
          animate={isMobile ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: isMobile ? 'auto' : 'transform' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair heading-primary font-bold">
              What You Get
            </h2>
            <motion.div
              animate={isMobile ? {} : { rotate: [360, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ willChange: isMobile ? 'auto' : 'transform' }}
            >
              <Sparkles className="w-8 h-8 text-[#ED0331]" />
            </motion.div>
          </div>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          />
          <p className="text-xl md:text-2xl text-gray-600 font-nunito max-w-3xl mx-auto font-semibold">
            Everything you need for personalized growth and career success
          </p>
        </motion.div>

        {/* Mobile/Tablet Layout */}
        <motion.div
          className="
            grid gap-8 mb-8
            grid-cols-1
            md:grid-cols-2
            lg:hidden
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isMobile={isMobile} />
          ))}
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        >
          {/* Row 1: Three equal columns */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {topRowFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} isMobile={isMobile} />
            ))}
          </div>

          {/* Row 2: Two centered columns */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 w-full xl:max-w-[70%] 2xl:max-w-[60%]">
              {bottomRowFeatures.map((feature, index) => (
                <FeatureCard key={index + 3} feature={feature} isBottomRow={true} index={index + 3} isMobile={isMobile} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorshipCards;
