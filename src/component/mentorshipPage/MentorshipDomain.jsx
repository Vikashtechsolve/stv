import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

// Icon Components
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="m18 16 4-4-4-4"/>
    <path d="m6 8-4 4 4 4"/>
    <path d="m14.5 4-5 16"/>
  </svg>
);

const GemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M6 3h12l4 6-10 12L2 9z"/>
    <path d="M12 22 4 9h16z"/>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
);

const AILearningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 20a6 6 0 0 0 0-12V4"/>
    <path d="M8 7.5A4.5 4.5 0 0 1 12 3a4.5 4.5 0 0 1 4 4.5"/>
    <path d="M17 19h1a2 2 0 0 0 2-2v-2h-3"/>
    <path d="M7 19H6a2 2 0 0 1-2-2v-2h3"/>
    <path d="M8 13h8"/>
  </svg>
);

const ScienceMathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="15" x2="15" y2="15"/>
    <line x1="12" y1="12" x2="12" y2="18"/>
  </svg>
);

const CareerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const domains = [
  {
    icon: CodeIcon,
    title: "Web Development",
    description: "Kickstart your journey into the digital world by learning how modern websites and web apps are built. Under mentor guidance, you'll master front-end technologies like HTML, CSS, JavaScript, and React, while also exploring back-end tools such as Node.js and databases. Understand how to turn your ideas into fully functional, responsive, and user-friendly digital experiences.",
    cardBg: "bg-gradient-to-br from-blue-50 via-blue-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#768FFF] to-blue-700 shadow-xl shadow-blue-300/50',
    hoverColor: 'hover:shadow-blue-400/50',
    borderColor: 'border-blue-200',
  },
  {
    icon: GemIcon,
    title: "Data Structures & Algorithms (DSA)",
    description: "DSA: Crack the Interview Logic: Master Dynamic Programming & System Design basics with personalized feedback. Transform theoretical knowledge into the confident problem-solving ability needed to clear FAANG-level interviews.",
    cardBg: "bg-gradient-to-br from-purple-50 via-purple-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#70B99B] to-green-700 shadow-xl shadow-green-300/50',
    hoverColor: 'hover:shadow-green-400/50',
    borderColor: 'border-purple-200',
  },
  {
    icon: ChartIcon,
    title: "Data Science",
    description: "Step into the world of data and analytics where numbers tell stories. Learn Python, statistics, data visualization, and machine learning techniques to extract insights from large datasets. Mentors will guide you through real-life projects—from cleaning data to building predictive models—helping you understand how to make informed business or research decisions using data.",
    cardBg: "bg-gradient-to-br from-teal-50 via-teal-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#FF9B69] to-orange-700 shadow-xl shadow-orange-300/50',
    hoverColor: 'hover:shadow-orange-400/50',
    borderColor: 'border-teal-200',
  },
  {
    icon: AILearningIcon,
    title: "AI / Machine Learning",
    description: "Unlock the power of Artificial Intelligence and Machine Learning with hands-on mentorship from industry professionals. Learn the end-to-end process of building intelligent systems—from understanding algorithms and training models to deploying AI solutions. Our mentors simplify complex topics like neural networks, natural language processing, and deep learning so you can apply them confidently in real-world scenarios.",
    cardBg: "bg-gradient-to-br from-purple-50 via-indigo-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#4B6CF6] to-blue-700 shadow-xl shadow-blue-400/50',
    hoverColor: 'hover:shadow-blue-500/50',
    borderColor: 'border-purple-200',
  },
  {
    icon: ScienceMathIcon,
    title: "Science & Maths",
    description: "Enhance your academic foundation through personalized mentorship sessions designed for conceptual clarity. Whether it's mastering physics, chemistry, or mathematics, mentors guide you step-by-step to understand topics deeply rather than memorizing formulas. With visual explanations, interactive problem-solving, and regular practice sessions, you'll develop logical thinking and exam-ready confidence.",
    cardBg: "bg-gradient-to-br from-green-50 via-green-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#F2D05C] to-yellow-600 shadow-xl shadow-yellow-300/50',
    hoverColor: 'hover:shadow-yellow-400/50',
    borderColor: 'border-green-200',
  },
  {
    icon: CareerIcon,
    title: "Career Guidance",
    description: "Shape your career path with expert guidance tailored to your goals. Learn how to create a strong resume, craft impactful portfolios, and prepare confidently for interviews. Mentors help you identify your strengths, explore opportunities, and build a personalized career roadmap—whether you're starting fresh or looking for a switch. Each session is designed to boost your confidence, communication, and clarity about what comes next.",
    cardBg: "bg-gradient-to-br from-orange-50 via-orange-100/50 to-white",
    iconContainerClasses: 'bg-gradient-to-br from-[#B08968] to-amber-700 shadow-xl shadow-amber-300/50',
    hoverColor: 'hover:shadow-amber-400/50',
    borderColor: 'border-orange-200',
  },
];

const DomainCard = ({ icon: Icon, title, description, cardBg, iconContainerClasses, hoverColor, borderColor, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.12,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`p-8 rounded-3xl shadow-xl transition-all duration-300 h-full flex flex-col border-2 ${borderColor} hover:border-[#ED0331]/50 ${cardBg} ${hoverColor} relative overflow-hidden group`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* Icon Container */}
      <motion.div
        className={`w-20 h-20 p-4 rounded-2xl flex items-center justify-center mb-6 text-white ${iconContainerClasses} relative z-10`}
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="stroke-white" />
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-white/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 font-playfair">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow font-nunito mb-6">
        {description}
      </p>

      {/* Enhanced Learn More */}
      <motion.div
        className="flex items-center gap-2 text-[#ED0331] font-bold group-hover:gap-4 transition-all"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.3 }}
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-sm md:text-base">Explore Domain</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const MentorshipDomain = () => {
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
    <div className="min-h-screen bg-gray-50 font-inter py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gray-800 tracking-tight font-bold">
              Choose Your Mentorship Domain
            </h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.div
            className="w-40 h-2 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-[#ED0331]" />
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-nunito font-semibold">
              Find the area you want to master — learn directly from experts in your chosen field.
            </p>
            <Zap className="w-6 h-6 text-[#ED0331]" />
          </div>
        </motion.header>

        {/* Enhanced Cards Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {domains.map((domain, index) => (
            <DomainCard
              key={index}
              icon={domain.icon}
              title={domain.title}
              description={domain.description}
              cardBg={domain.cardBg}
              iconContainerClasses={domain.iconContainerClasses}
              hoverColor={domain.hoverColor}
              borderColor={domain.borderColor}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MentorshipDomain;
