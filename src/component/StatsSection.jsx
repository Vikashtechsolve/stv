import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Counter animation hook
  const useCountUp = (target, duration = 2000, isInView) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) {
        setCount(0);
        return;
      }
      
      // Extract number from target string
      let targetNum = 0;
      if (target.includes('%')) {
        targetNum = parseInt(target);
      } else if (target.includes('K+')) {
        targetNum = parseInt(target) * 1000;
      } else if (target.includes('+')) {
        targetNum = parseInt(target);
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

  const count95 = useCountUp("95", 2000, isInView);
  const count1K = useCountUp("1000", 2000, isInView);
  const count80 = useCountUp("80", 2000, isInView);
  const count500 = useCountUp("500", 2000, isInView);
  const count50 = useCountUp("50", 2000, isInView);

  const formatStat = (num, type) => {
    if (type === 'percentage') return `${num}%`;
    if (type === 'thousand') {
      if (num >= 1000) return `1K+`;
      return `${num}+`;
    }
    // Default fallback adds a plus sign
    return `${num}+`;
  };

  const topStats = [
    { number: count95, format: 'percentage', description: "Students got clarity after Mentorship" },
    { number: count1K, format: 'thousand', description: "Doubts Solved Live" },
    { number: count80, format: 'percentage', description: "Interview Confidence Boosted" },
  ];

  const bottomStats = [
    { number: count500, format: 'plus', description: "Resume Reviewed & Improved" },
    { number: count50, format: 'plus', description: "High-Impact Masterclasses Delivered" },
  ];

  const features = [
    "Get Industry-focused Training Programs.",
    "Real-world Projects & Case Studies.",
    "Career support & Placement assistance.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 bg-gray-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Top Section - Three Stats Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-12">
        {topStats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md border-2 border-pink-200 hover:border-pink-300 text-center p-6 md:p-8 flex-1 max-w-sm mx-auto md:mx-0 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5, shadow: "lg" }}
          >
            <motion.div
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-nunito mb-3 text-red-600 leading-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: idx * 0.1 + 0.3,
              }}
            >
              {formatStat(stat.number, stat.format)}
            </motion.div>
            <p className="text-sm md:text-base lg:text-lg font-nunito text-gray-900 font-semibold leading-tight">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
        {/* Left Side - Features */}
        <motion.div
          className="flex flex-col justify-end space-y-5 md:space-y-6"
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-start"
              variants={featureVariants}
            >
              <span className="mr-3 text-red-600 text-2xl md:text-3xl font-bold mt-1">›</span>
              <p className="text-lg md:text-xl lg:text-2xl font-nunito text-gray-900 font-semibold leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Two Bottom Stats Cards */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-end"
          variants={containerVariants}
        >
          {bottomStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md border-2 border-pink-200 hover:border-pink-300 text-center p-6 md:p-8 flex-1 max-w-xs mx-auto md:mx-0 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, shadow: "lg" }}
            >
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-nunito mb-3 text-red-600 leading-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: (idx + 3) * 0.1 + 0.5,
                }}
              >
                {formatStat(stat.number, stat.format)}
              </motion.div>
              <p className="text-sm md:text-base lg:text-lg font-nunito text-gray-900 font-semibold leading-tight">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider Line */}
      <motion.div
        className="border-t-2 border-gray-300 w-full mt-10 md:mt-12"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  );
};

export default StatsSection;