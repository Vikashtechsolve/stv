import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, ClipboardCheck, Sparkles, Star, Clock, Award } from "lucide-react";
import ResumeReviewForm from "./ResumeReviewForm";

const ResumeHero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { icon: Users, value: "500+", label: "Reviews Done", color: "from-blue-500 to-cyan-600" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "from-yellow-500 to-orange-600" },
    { icon: Clock, value: "<24hrs", label: "Turnaround", color: "from-green-500 to-emerald-600" },
    { icon: Award, value: "100%", label: "Satisfaction", color: "from-purple-500 to-pink-600" },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Fast Response",
      description: "Get your resume reviewed within hours.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Real Mentors",
      description: "Experts from top companies & universities.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: ClipboardCheck,
      title: "Personalized Feedback",
      description: "Receive actionable suggestions tailored to your profile.",
      color: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-6 sm:py-8 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-start text-left space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit"
              variants={itemVariants}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED0331]" />
              <span className="text-xs sm:text-sm font-semibold text-[#ED0331] font-nunito">
                Professional Resume Review Service
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Get Your Resume Reviewed by{" "}
              <span className="heading-primary block mt-1 sm:mt-2">
                Industry Experts – in Just ₹149
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 font-nunito leading-relaxed"
              variants={itemVariants}
            >
              "Your resume is your first impression! Let experts refine it,
              highlight your skills, and guide you toward your dream job"
            </motion.p>

            {/* Stats Grid - Compact and Beautiful */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full"
              variants={itemVariants}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-md border border-gray-100 text-center hover:shadow-lg hover:border-red-200 transition-all"
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${stat.color} mx-auto mb-1.5 sm:mb-2 flex items-center justify-center`}
                    >
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-bold font-playfair heading-primary mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 font-nunito leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="w-full"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsFormOpen(true)}
                className="group relative btn-gradient-red text-white text-sm sm:text-base md:text-lg font-semibold px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-nunito overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Live Review Session
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              {isFormOpen && (
                <ResumeReviewForm onClose={() => setIsFormOpen(false)} />
              )}
            </motion.div>

            {/* Features Section - Horizontal Compact Layout */}
            <motion.div
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3"
              variants={itemVariants}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200"
                    whileHover={{ scale: 1.03, y: -3 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2 sm:mb-3 flex-shrink-0`}
                    >
                      <IconComponent className="text-white w-4 h-4 sm:w-5 sm:h-6 md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-1.5 font-playfair text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-nunito leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Section - Illustration */}
          <motion.div
            className="relative w-full flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Floating Sparkles with Background */}
              <motion.div
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 shadow-xl"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#ED0331]" />
              </motion.div>
              <motion.div
                className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-3 shadow-xl"
                animate={{
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />
              </motion.div>

              <motion.img
                src="https://res.cloudinary.com/dc4gqqd35/image/upload/v1761277698/Recruitment_agent_analyzing_candidates_resumes_qssst5.png"
                alt="Resume Illustration"
                className="w-full h-auto max-w-full relative z-10 drop-shadow-2xl rounded-xl sm:rounded-2xl"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ResumeHero;