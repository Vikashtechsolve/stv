import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Star, Sparkles, ArrowRight, TrendingUp, Award, Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const MentorshipHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      icon: CheckCircle,
      value: "100+",
      label: "Mentors",
      sublabel: "Verified experts",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      borderColor: "border-green-200",
    },
    {
      icon: Users,
      value: "10K+",
      label: "Students",
      sublabel: "Guided to success",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      borderColor: "border-blue-200",
    },
    {
      icon: Star,
      value: "4.9+",
      label: "Rating",
      sublabel: "Real feedbacks",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600",
      borderColor: "border-yellow-200",
    },
  ];

  return (
    <section className="relative flex flex-col bg-gray-50 items-center justify-center text-center px-4 md:px-5 py-12 md:py-20 overflow-hidden min-h-[90vh]">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ED0331]/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced Heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#ED0331]" />
            </motion.div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Personalized{" "}
                <span className="relative inline-block">
                  <span className="heading-primary">1:1 Mentorship</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ED0331] to-[#87021C] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-3 font-nunito text-gray-700">
                Tailored Just for You
              </p>
            </div>
            <motion.div
              animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#ED0331]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Subheading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-nunito font-semibold heading-primary max-w-4xl mx-auto leading-relaxed mb-4">
            Get direct guidance from industry experts in{" "}
            <span className="relative inline-block group">
              <span className="font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                Web Development
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ED0331] to-[#87021C]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </span>
            ,{" "}
            <span className="font-bold">Data Science</span>,{" "}
            <span className="font-bold">AI/ML</span>,{" "}
            <span className="font-bold">DSA</span>, and more...
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Zap className="w-5 h-5 text-[#ED0331]" />
            <p className="text-base md:text-lg font-nunito heading-primary">
              One-on-one, focused entirely on your goals
            </p>
            <Zap className="w-5 h-5 text-[#ED0331]" />
          </div>
        </motion.div>

        {/* Main Layout with Enhanced Design */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-8 lg:gap-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left Side - Enhanced Illustration */}
          <motion.div
            className="flex justify-center w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ED0331] to-[#87021C] rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-4 border-[#ED0331]/20 rounded-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src="https://res.cloudinary.com/dc4gqqd35/image/upload/v1760421141/07c6f352f10c5ce0b7ba9e97833d723092b40455_kgxuio.png"
                alt="Mentorship illustration"
                className="relative w-[85%] md:w-[75%] max-w-lg z-10 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Enhanced Stats Cards */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Top Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {stats.slice(0, 2).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`${stat.bgColor} shadow-xl rounded-2xl py-6 px-5 flex flex-col items-center w-full border-2 ${stat.borderColor} hover:border-[#ED0331]/50 transition-all relative overflow-hidden group`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                    <motion.div
                      className={`${stat.iconBg} p-4 rounded-full mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white w-7 h-7" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold heading-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-800 font-bold text-sm md:text-base mb-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.sublabel}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Centered Card */}
            <motion.div
              className="bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 shadow-xl rounded-2xl py-6 px-5 flex flex-col items-center w-full sm:w-[75%] border-2 border-yellow-200 hover:border-yellow-400/50 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <motion.div
                className="bg-gradient-to-br from-yellow-500 to-amber-600 p-4 rounded-full mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Star className="text-white w-7 h-7 fill-white" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold heading-primary mb-2">
                {stats[2].value}
              </h3>
              <p className="text-gray-800 font-bold text-sm md:text-base mb-1">
                {stats[2].label}
              </p>
              <p className="text-gray-600 text-xs md:text-sm">{stats[2].sublabel}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.button
            className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold text-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #ED0331, #87021C)",
            }}
            onClick={() => handleNavigate("mentors-section")}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center gap-3">
              <Award className="w-5 h-5" />
              Book a Session Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          {[
            { icon: TrendingUp, text: "Trusted by 10K+ Students", color: "text-[#ED0331]" },
            { icon: CheckCircle, text: "100% Verified Mentors", color: "text-green-600" },
            { icon: Award, text: "Industry Experts", color: "text-blue-600" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-nunito font-semibold text-gray-700">{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MentorshipHero;
