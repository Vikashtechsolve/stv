import React from 'react';
import { motion } from 'framer-motion';
import { User, Search, Calendar, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const stepData = [
  {
    icon: User,
    title: "Register Yourself",
    description: "Sign up in just a few clicks and tell us your learning goals — whether you want to upskill, prepare for interviews, or gain conceptual clarity.",
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-700',
    cardBg: 'bg-gradient-to-br from-white via-purple-50/30 to-white',
    stepNumber: "01",
  },
  {
    icon: Search,
    title: "Choose Your Mentor & Topic",
    description: "Explore a list of verified mentors across domains like Web Development, Data Science, DSA, and more. Select one the best that fits your learning.",
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    cardBg: 'bg-gradient-to-br from-white via-blue-50/30 to-white',
    stepNumber: "02",
  },
  {
    icon: Calendar,
    title: "Schedule Your 1:1 Session",
    description: "Pick your preferred time slot, confirm your booking, and get instant access to session details. It's flexible, quick, and completely hassle-free.",
    iconBg: 'bg-gradient-to-br from-[#ED0331] to-[#87021C]',
    cardBg: 'bg-gradient-to-br from-white via-red-50/30 to-white',
    stepNumber: "03",
  },
  {
    icon: TrendingUp,
    title: "Learn, Apply & Progress",
    description: "Join your live session, interact directly with your mentor, get personalized feedback, and walk away with a clear roadmap, notes, and next-step guidance.",
    iconBg: 'bg-gradient-to-br from-green-500 to-green-700',
    cardBg: 'bg-gradient-to-br from-white via-green-50/30 to-white',
    stepNumber: "04",
  },
];

const StepCard = ({ icon: Icon, title, description, iconBg, cardBg, stepNumber, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center border-2 border-transparent hover:border-[#ED0331]/30 ${cardBg}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Step Number Badge */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
      >
        {stepNumber}
      </motion.div>

      {/* Icon Circle */}
      <motion.div
        className={`w-20 h-20 p-3 rounded-full flex items-center justify-center mb-6 text-white shadow-xl ${iconBg} relative`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-10 h-10 stroke-white" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-white/30"
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
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 font-playfair">
        {title}
      </h3>

      {/* Description */}
      <p className="text-md font-nunito text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Check Icon */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 + 0.1 }}
      >
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </motion.div>
    </motion.div>
  );
};

const MentorshipSteps = () => {
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
    <section className="py-16 px-4 sm:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"
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
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-gray-800 mb-4 tracking-tight">
            How 1:1 Mentorship Works
          </h2>
          <p className="text-xl md:text-2xl font-nunito heading-primary max-w-4xl mx-auto">
            Your journey from registration to real growth
            — simplified into four easy steps.
          </p>
        </motion.header>

        {/* Step Cards Grid Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-[#ED0331] to-green-500 opacity-20 rounded-full" />

          {stepData.map((step, index) => (
            <div key={index} className="relative">
              <StepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                iconBg={step.iconBg}
                cardBg={step.cardBg}
                stepNumber={step.stepNumber}
                index={index}
              />
              {/* Arrow between steps (desktop only) */}
              {index < stepData.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-20 -right-3 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <ArrowRight className="w-8 h-8 text-[#ED0331]" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSteps;
