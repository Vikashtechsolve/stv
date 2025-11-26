import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Target, Zap, CheckCircle2, Sparkles, BookOpen, MessageSquare, Award, TrendingUp } from 'lucide-react';

const WhatIsMentorship = () => {
  const videoCallImageUrl = "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760434707/57049b741899d50e47496fd3bf0c5036d0f2a1b4_givpkg.jpg";

  const features = [
    { icon: Video, text: "Live Interactive Sessions", color: "from-red-500 to-pink-600" },
    { icon: Users, text: "Personalized Guidance", color: "from-blue-500 to-cyan-600" },
    { icon: Target, text: "Goal-Oriented Learning", color: "from-purple-500 to-indigo-600" },
    { icon: Zap, text: "Real-Time Feedback", color: "from-yellow-500 to-orange-600" },
  ];

  const benefits = [
    { icon: BookOpen, text: "Structured Learning Paths" },
    { icon: MessageSquare, text: "24/7 Support Access" },
    { icon: CheckCircle2, text: "Progress Tracking" },
  ];

  const stats = [
    { icon: TrendingUp, value: "10K+", label: "Students Mentored" },
    { icon: Award, value: "100+", label: "Expert Mentors" },
    { icon: Users, value: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-6 sm:p-10 md:py-24 font-sans overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Enhanced Main Title */}
        <motion.div
          className="text-center mb-16 pt-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-gray-800 tracking-tight">
              What is <span className="heading-primary font-bold">1:1 Mentorship</span>?
            </h1>
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
          </div>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Enhanced Text Content */}
          <motion.div
            className="order-2 font-nunito lg:order-1 space-y-6 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#ED0331]"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-xl md:text-2xl font-semibold mb-4">
                Our <span className="heading-primary font-bold">1:1 Mentorship Program</span> connects you directly with
                experienced mentors from top tech and educational backgrounds who understand your unique learning goals.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl">
                Whether you're a student struggling with complex topics, a graduate seeking the
                right career path, or a professional aiming for a successful transition, our mentors provide tailored support every step of the way.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl">
                With personalized guidance, real-world insights, and structured learning paths, you'll gain the clarity, confidence, and skills needed to grow faster and achieve your goals all through one-on-one interactive sessions designed just for you.
              </p>
            </motion.div>

            {/* Enhanced Feature Icons */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#ED0331]/30 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <motion.div
                      className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-md`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-bold text-gray-800 text-sm md:text-base text-center group-hover:text-[#ED0331] transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Additional Benefits */}
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ED0331]/10 to-[#87021C]/10 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                  >
                    <Icon className="w-4 h-4 text-[#ED0331]" />
                    <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Enhanced Image with Stats */}
          <motion.div
            className="order-1 lg:order-2 relative flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Image Section */}
            <div className="relative">
              {/* Multiple Decorative Backgrounds */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-3xl blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-3xl blur-2xl -z-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={videoCallImageUrl}
                  alt="Mentor and mentee on a video call session, demonstrating 1:1 interaction."
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '8/6' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760434707/57049b741899d50e47496fd3bf0c5036d0f2a1b4_givpkg.jpg";
                  }}
                />
                
                {/* Enhanced Overlay Badges */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl flex items-center gap-2 border-2 border-green-200"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <span className="font-bold text-gray-800">Live Session</span>
                </motion.div>

                {/* Bottom Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white px-5 py-2 rounded-full shadow-xl flex items-center gap-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="w-5 h-5" />
                  <span className="font-semibold text-sm">1:1 Personalized</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Cards Below Image */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-[#ED0331]/30 text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl font-bold heading-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 font-semibold">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMentorship;
