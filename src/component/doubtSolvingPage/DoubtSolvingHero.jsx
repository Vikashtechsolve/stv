import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Video,
  Users,
  Clock,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Star,
  BookOpen,
  Target,
  Shield,
} from "lucide-react";

const DoubtSolvingHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, value: "500+", label: "Expert Mentors", color: "from-blue-500 to-blue-600" },
    { icon: MessageCircle, value: "10K+", label: "Doubts Solved", color: "from-green-500 to-green-600" },
    { icon: Clock, value: "24/7", label: "Available", color: "from-purple-500 to-purple-600" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "from-yellow-500 to-orange-600" },
  ];

  const benefits = [
    { icon: Zap, text: "Instant Response", desc: "Get answers within minutes" },
    { icon: Video, text: "Live Sessions", desc: "Interactive 1-on-1 video calls" },
    { icon: CheckCircle2, text: "Verified Experts", desc: "Industry professionals only" },
    { icon: Target, text: "Personalized", desc: "Tailored to your needs" },
  ];

  const features = [
    { icon: BookOpen, text: "Concept Explanation", color: "text-blue-600" },
    { icon: Shield, text: "Error Debugging", color: "text-red-600" },
    { icon: TrendingUp, text: "Skill Improvement", color: "text-green-600" },
    { icon: Award, text: "Certified Mentors", color: "text-purple-600" },
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
      className="relative w-full bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-12 overflow-hidden min-h-[90vh] flex items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <motion.div className="flex flex-col space-y-6" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-200 rounded-full px-4 py-2 w-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600 font-nunito">
                Live & Interactive Learning Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair heading-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Solve Your Doubts Instantly with Expert Mentors
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 font-nunito leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get personalized, real-time solutions to your toughest coding and conceptual
              doubts. Connect with industry experts in live 1-on-1 sessions and accelerate
              your learning journey with instant feedback and guidance.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} mx-auto mb-2 flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold font-playfair heading-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-nunito">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-bold text-gray-900 font-nunito mb-1">
                          {benefit.text}
                        </div>
                        <div className="text-xs text-gray-600 font-nunito">
                          {benefit.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Features Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <IconComponent className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700 font-nunito">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={() => handleNavigate("pricingplans")}
                className="group relative btn-gradient-red text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-nunito overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Your Session Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="group relative bg-white border-2 border-gray-300 text-gray-700 text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:border-red-400 transition-all duration-300 font-nunito w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Plans
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual Section - Clean Grid Layout */}
          <motion.div
            className="relative w-full"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Top Left - Main Image */}
              <motion.div
                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl bg-white p-4 md:p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src="https://res.cloudinary.com/dc4gqqd35/image/upload/v1761205222/Frame_748_akckfj.jpg"
                  alt="Live Doubt Solving"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl" />
              </motion.div>

              {/* Top Right - 15 Min Card */}
              <motion.div
                className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-green-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-playfair text-gray-900">15 Min</div>
                  <div className="text-xs md:text-sm text-gray-600 font-nunito">Quick Session</div>
                </div>
              </motion.div>

              {/* Bottom Right - Rating Card */}
              <motion.div
                className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-playfair text-gray-900">4.9/5</div>
                  <div className="text-xs md:text-sm text-gray-600 font-nunito">Rating</div>
                </div>
              </motion.div>

              {/* Bottom Left - 10K+ Solved */}
              <motion.div
                className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, x: 3 }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-playfair text-gray-900">10K+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-nunito">Solved</div>
                </div>
              </motion.div>

              {/* Bottom Center - 500+ Mentors */}
              <motion.div
                className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05, x: -3 }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-playfair text-gray-900">500+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-nunito">Mentors</div>
                </div>
              </motion.div>

              {/* Feature Cards Row */}
              <motion.div
                className="col-span-2 grid grid-cols-2 gap-4 md:gap-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Instant Help */}
                <motion.div
                  className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-red-200 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-bold font-playfair text-gray-900">Instant Help</div>
                      <div className="text-xs md:text-sm text-gray-600 font-nunito">Get answers within minutes</div>
                    </div>
                  </div>
                </motion.div>

                {/* Live Sessions */}
                <motion.div
                  className="bg-white rounded-xl p-4 md:p-5 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-bold font-playfair text-gray-900">Live Sessions</div>
                      <div className="text-xs md:text-sm text-gray-600 font-nunito">Interactive 1-on-1 video calls</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DoubtSolvingHero;
