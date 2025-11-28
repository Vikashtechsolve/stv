import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Award, TrendingUp, Clock, Target } from "lucide-react";

const ContestStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCountUp = (target, duration = 1200, isInView) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) {
        setCount(0);
        return;
      }
      
      let targetNum = 0;
      if (target.includes('K+')) {
        targetNum = parseFloat(target) * 1000;
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

  const count5K = useCountUp("5K", 1200, isInView);
  const count500 = useCountUp("500", 1200, isInView);
  const count50 = useCountUp("50", 1200, isInView);
  const count95 = useCountUp("95", 1200, isInView);

  const stats = [
    {
      icon: Users,
      value: count5K,
      suffix: "+",
      label: "Active Participants",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Join thousands competing for excellence",
    },
    {
      icon: Trophy,
      value: count500,
      suffix: "+",
      label: "Winners Rewarded",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      description: "Celebrating achievements and success",
    },
    {
      icon: Award,
      value: count50,
      suffix: "+",
      label: "Contests Conducted",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      description: "Regular competitions to test your skills",
    },
    {
      icon: TrendingUp,
      value: count95,
      suffix: "%",
      label: "Success Rate",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      description: "Participants see career growth",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Skill Validation",
      description: "Get certified proof of your coding and problem-solving abilities",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Clock,
      title: "Real-time Competition",
      description: "Compete in live contests with instant leaderboard updates",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Award,
      title: "Recruiter Recognition",
      description: "Top performers get visibility with leading tech companies",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Build a competitive profile that stands out in placements",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-white overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold heading-primary mb-4">
            Why Thousands Trust Our Contests
          </h2>
          <p className="text-lg md:text-xl font-nunito text-gray-600 max-w-2xl mx-auto">
            Join a community of ambitious learners competing for excellence and recognition
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className={`${stat.bgColor} rounded-2xl p-6 md:p-8 shadow-lg border-2 border-transparent hover:border-gray-200 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold font-playfair heading-primary mb-2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1 + 0.2,
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold font-nunito text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm md:text-base font-nunito text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className={`${benefit.bgColor} rounded-xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className={`w-12 h-12 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold font-nunito text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm font-nunito text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContestStats;

