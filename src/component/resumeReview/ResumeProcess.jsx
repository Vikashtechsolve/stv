import React from "react";
import { motion } from "framer-motion";
import { Upload, UserCheck, Video, FileText, ArrowRight } from "lucide-react";

const ResumeProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Resume",
      description:
        "Submit your resume through our secure portal. Just drag and drop your file — it's safe, fast, and confidential.",
      icon: Upload,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      number: "2",
      title: "Expert Assigned",
      description:
        "Our experienced mentor reviews your resume carefully and schedules a personalized feedback session just for you.",
      icon: UserCheck,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      number: "3",
      title: "Live 1:1 Session",
      description:
        "Join a live interactive session with your assigned expert to understand your resume's strengths, weaknesses, and improvement areas.",
      icon: Video,
      gradient: "from-red-500 to-red-600",
    },
    {
      number: "4",
      title: "Receive Updated Plan",
      description:
        "After the session, you'll receive an updated resume improvement plan and a skill roadmap PDF to guide your next steps.",
      icon: FileText,
      gradient: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section mb-4 md:mb-6">
            How Our Resume Review Process Works
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Connecting Arrow (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 z-0">
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                    >
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 flex flex-col items-center text-center h-full transition-all duration-300 border-2 border-transparent hover:border-red-200 group-hover:scale-105">
                  {/* Number Badge */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-xl mb-6 relative z-10`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <IconComponent
                      className={`text-transparent bg-clip-text bg-gradient-to-br ${step.gradient}`}
                      size={24}
                    />
                  </motion.div>

                  {/* Text */}
                  <h3 className="font-bold text-lg md:text-xl mb-3 font-playfair text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-nunito">
                    {step.description}
                  </p>

                  {/* Decorative Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeProcess;
