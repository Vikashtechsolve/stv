import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileQuestion, Video, NotebookText, ClipboardList, PlayCircle, CalendarCheck, ArrowRight } from 'lucide-react';

// Data for the three steps
const stepsData = [
  {
    id: 1,
    title: 'Post your Doubts & Get Instant Match',
    mainIcon: FileQuestion,
    description: 'Upload your question, screenshot, or describe your doubt in detail.',
    secondaryIcon: ClipboardList,
    secondaryText: 'Explain your problem clearly — and our system will instantly match you with the right mentor.',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 2,
    title: 'Live 1:1 Video Solution (Real-Time Clarity)',
    mainIcon: Video,
    description: 'Join a 1:1 video session with an expert who specializes in your subject.',
    secondaryIcon: PlayCircle,
    secondaryText: 'Get real-time explanations, on-screen solutions, and practice questions to strengthen your understanding.',
    gradient: 'from-[#ED0331] to-[#87021C]',
    bgGradient: 'from-red-50 to-pink-50',
  },
  {
    id: 3,
    title: 'Receive Personalized Roadmap & Notes',
    mainIcon: NotebookText,
    description: 'After your session, receive personalized notes, suggested resources, and a roadmap for mastering the topic.',
    secondaryIcon: CalendarCheck,
    secondaryText: 'We help you truly understand the concept — not just fix the doubt.',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
  },
];

// Reusable Card Component
const StepCard = ({ step, index, isInView }) => {
  const MainIconComponent = step.mainIcon;
  const SecondaryIconComponent = step.secondaryIcon;

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-200/50"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Step Number Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold font-nunito text-lg">{step.id}</span>
        </div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        {/* Main Icon and Title */}
        <div className="flex flex-col items-start mb-6">
          <motion.div
            className={`p-4 mb-4 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MainIconComponent className="h-8 w-8 text-white" />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-playfair font-semibold text-gray-900 mb-2 leading-tight">
            {step.title}
          </h3>
        </div>

        {/* Primary Description */}
        <p className="text-gray-600 font-nunito mb-6 flex-grow text-base leading-relaxed">
          {step.description}
        </p>

        {/* Secondary Feature/Bullet */}
        <div className="pt-4 border-t border-gray-200/50 mt-auto">
          <div className="flex font-nunito items-start text-sm text-gray-700 bg-gray-50/50 rounded-xl p-4">
            <SecondaryIconComponent className={`w-5 h-5 text-[#ED0331] mr-3 mt-1 flex-shrink-0`} />
            <p className="leading-relaxed">
              {step.secondaryText}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${step.gradient} opacity-0 pointer-events-none`}
        animate={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Main App Component
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
        {/* Header Section */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="heading-section mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How It Works
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-nunito font-semibold text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get Your Doubts Solved in Just 3 Simple Steps
          </motion.p>
        </motion.header>

        {/* Steps Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stepsData.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
