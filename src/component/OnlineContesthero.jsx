import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Award, Medal, Sparkles, Users, Clock, Target, Zap } from "lucide-react";
import onlinecontest from "../assets/onlinecontest.jpg";
import ArrowIcon from "../assets/Arrow.svg";
import Fprice from "../assets/Firstprice.gif";
import trofe from "../assets/trofe.gif";

const rewards = [
  {
    place: "1st Place",
    amount: "₹25000 + Certificate",
    description: "Crown yourself as the top performer and earn bragging rights!",
    img: Fprice,
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    place: "2nd Place",
    amount: "₹15000 + Certificate",
    description: "Show your skills and claim the runner-up prize!",
    img: trofe,
    gradient: "from-gray-300 to-gray-500",
    bgGradient: "from-gray-50 to-slate-50",
  },
  {
    place: "3rd Place",
    amount: "₹10000 + Certificate",
    description: "Earn recognition and a reward for your efforts!",
    img: trofe,
    gradient: "from-orange-300 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
  },
];

export default function OnlineContestHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePreRegister = () => {
    const formSection = document.getElementById("contest-registration");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    <motion.div
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-10 md:py-16 space-y-12 md:space-y-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Page Title */}
        <motion.h1
          className="text-center text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight w-full mb-4"
          variants={itemVariants}
        >
          Vikash Tech Online Contest Arena
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          variants={itemVariants}
        >
          <Sparkles className="w-5 h-5 text-red-600" />
          <p className="text-center text-xl md:text-2xl font-playfair font-semibold heading-primary">
            Compete, Learn, and Win!
          </p>
          <Sparkles className="w-5 h-5 text-red-600" />
        </motion.div>

        {/* Page Subtitle with Gradient */}
        <motion.p
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-nunito font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
          variants={itemVariants}
        >
          Ready to Prove It? Challenge your skills in Coding & Quizzes to earn recognition from top recruiters and build your competitive profile.
        </motion.p>

        {/* Hero Section Card */}
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-12"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-90" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 text-white z-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold font-nunito">Limited Early Bird Slots</span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get Ready to Compete
                <br />
                <span className="text-yellow-300">The Battle is Coming!</span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl font-nunito font-medium leading-relaxed text-white/95"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Pre-register now for our high-stakes Coding & Quiz Contests (Open to Class 7-12 & B.Tech). Limited slots for early birds!
              </motion.p>

              <motion.button
                onClick={handlePreRegister}
                className="group relative bg-white text-blue-600 text-lg font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-nunito overflow-hidden flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Pre-Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </div>

            {/* Right Image */}
            <motion.div
              className="flex-1 max-w-lg lg:max-w-xl"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.img
                  src={onlinecontest}
                  alt="Online Contest"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl border-2 border-yellow-400 hidden md:block"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Rewards Section */}
        <motion.div
          className="w-full mt-16 md:mt-20"
          variants={itemVariants}
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-black mb-4">
              Exciting Rewards for Top Performers
            </h2>
            <p className="text-xl md:text-2xl font-nunito font-semibold heading-primary">
              Win rewards that boost your resume and your confidence!
            </p>
          </motion.div>

          {/* Rewards Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-br ${reward.bgGradient} rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col items-center text-center gap-6 relative overflow-hidden`}>
                  {/* Decorative Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reward.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Image + Place */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <img
                        src={reward.img}
                        alt={reward.place}
                        className="h-20 w-auto object-contain"
                      />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">
                      {reward.place}
                    </h3>
                  </div>

                  {/* Amount */}
                  <div className={`relative z-10 text-3xl md:text-4xl font-bold font-nunito bg-gradient-to-r ${reward.gradient} bg-clip-text text-transparent`}>
                    {reward.amount}
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-base md:text-lg font-nunito text-gray-700 leading-relaxed">
                    {reward.description}
                  </p>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
