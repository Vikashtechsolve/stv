import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Users, Award, Clock, Zap, Target, TrendingUp } from "lucide-react";

const ContestBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: "Verified & Secure",
      description: "All contests are conducted on secure platforms with anti-cheating measures",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certificates and achievements recognized by top tech companies",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Participate from anywhere, anytime - contests scheduled for your convenience",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of learners, get mentorship, and grow together",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate results, detailed solutions, and performance analytics",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Contests designed to improve skills that matter in placements",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const keyFeatures = [
    "Free registration for all participants",
    "Digital certificates for every participant",
    "Real-time leaderboard tracking",
    "Detailed performance analytics",
    "Access to solutions and explanations",
    "Opportunity to network with top performers",
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
      className="relative w-full py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
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
            Why Participate in Our Contests?
          </h2>
          <p className="text-lg md:text-xl font-nunito text-gray-600 max-w-3xl mx-auto">
            Experience competitive programming and quizzes that prepare you for real-world challenges and career success
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-nunito text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base font-nunito text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Key Features List */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-100"
          variants={itemVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-8 heading-primary">
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg font-nunito text-gray-700">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContestBenefits;

