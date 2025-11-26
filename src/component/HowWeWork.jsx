import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiUserPlus, FiTarget, FiBookOpen, FiCheckCircle, FiArrowRight, FiPlay } from "react-icons/fi";

const steps = [
  {
    step: "01",
    icon: FiUserPlus,
    title: "Register Yourself",
    description: "Sign up and create your account",
    details: [
      "Quick and easy registration process",
      "Get instant access to your personalized dashboard",
      "Set up your profile and preferences",
    ],
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
  },
  {
    step: "02",
    icon: FiTarget,
    title: "Choose Your Path",
    description: "Select the service that fits your needs",
    details: [
      "1:1 Mentorship for personalized guidance",
      "Live Doubt Solving for instant help",
      "Online Contests to test your skills",
      "Resume Review for career advancement",
    ],
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
  {
    step: "03",
    icon: FiBookOpen,
    title: "Learn & Practice",
    description: "Engage with expert-led sessions",
    details: [
      "Attend live interactive classes",
      "Access recorded sessions anytime",
      "Practice with hands-on exercises",
      "Get feedback and improve continuously",
    ],
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
  },
  {
    step: "04",
    icon: FiCheckCircle,
    title: "Your Outcome",
    description: "Achieve your career goals",
    details: [
      "Land your dream job or internship",
      "Build a strong professional network",
      "Gain industry-recognized skills",
      "Transform your career trajectory",
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const arrowVariants = {
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
    <motion.section
      ref={ref}
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
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
          className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
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
          className="text-center mb-10 md:mb-16"
          variants={containerVariants}
        >
          <motion.h1
            className="heading-section mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-8 font-nunito font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple steps to learn, practise and land your dream job!
          </motion.p>
        </motion.div>

        {/* Steps - Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={index}>
                <motion.div
                  className="flex-1 max-w-xs"
                  variants={cardVariants}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold font-nunito text-sm">
                          {step.step}
                        </span>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2 heading-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-nunito mb-4 font-medium">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-xs md:text-sm font-nunito text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + idx * 0.05 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} mt-2 shrink-0`} />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Effect Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl`}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex-shrink-0"
                    variants={arrowVariants}
                  >
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FiArrowRight className="w-8 h-8 text-red-600" />
                    </motion.div>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Steps - Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -left-4 top-6 z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", delay: index * 0.2 }}
                  >
                    <span className="text-white font-bold font-nunito text-sm">
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6 ml-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ x: 4 }}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2 heading-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-nunito mb-4 font-medium">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-xs md:text-sm font-nunito text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + idx * 0.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} mt-2 shrink-0`} />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      className="w-0.5 h-8 bg-gradient-to-b from-red-600 to-purple-600"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default HowWeWork;
