import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCheck, Presentation, Users, ThumbsUp, Sparkles, TrendingUp } from 'lucide-react';

const useCountUp = (target, duration = 2000, isInView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    
    let targetNum = 0;
    if (target.includes('%')) {
      targetNum = parseInt(target);
    } else if (target.includes('K+') || target.includes('+')) {
      const numStr = target.replace(/[K+]/g, '');
      targetNum = numStr.includes('K') ? parseInt(numStr) * 1000 : parseInt(numStr);
      if (target.includes('K+')) targetNum = parseInt(target) * 1000;
      else if (target.includes('+')) targetNum = parseInt(target);
    } else {
      targetNum = parseInt(target) || 0;
    }

    if (targetNum === 0) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(progress * targetNum);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNum);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return count;
};

const MilestoneCard = ({ icon: Icon, number, label, index, isInView }) => {
  const count = useCountUp(number, 1500, isInView);
  
  const formatNumber = (num, original) => {
    if (original.includes('%')) return `${num}%`;
    if (original.includes('K+')) {
      if (num >= 1000) return `10K+`;
      return `${Math.floor(num / 1000)}K+`;
    }
    if (original.includes('+')) return `${num}+`;
    return num.toString();
  };

  return (
    <motion.div
      className="group relative rounded-3xl bg-white shadow-xl hover:shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-500 border-2 border-gray-200/50 overflow-hidden h-full w-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <motion.div
        className="mb-6 relative z-10"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#ED0331] to-[#87021C] shadow-lg">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Number */}
      <motion.h3
        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-nunito text-[#ED0331] mb-3 relative z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.1 + 0.3,
        }}
      >
        {formatNumber(count, number)}
      </motion.h3>

      {/* Label */}
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl text-center font-semibold font-nunito relative z-10">
        {label}
      </p>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED0331]/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#87021C]/5 to-transparent rounded-tr-full"></div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-[#ED0331] opacity-0 pointer-events-none"
        whileHover={{
          opacity: 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Milestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      icon: UserCheck,
      number: "10000+",
      label: "Learners Impacted"
    },
    {
      icon: Presentation,
      number: "100+",
      label: "Successful Master Classes"
    },
    {
      icon: Users,
      number: "200+",
      label: "Industry Collaborations"
    },
    {
      icon: ThumbsUp,
      number: "95",
      label: "Positive Feedback"
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="heading-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Milestones That Define Us
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-nunito font-semibold text-[#ED0331] px-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "Key achievements that showcase our journey and impact."
          </motion.p>
        </motion.div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}