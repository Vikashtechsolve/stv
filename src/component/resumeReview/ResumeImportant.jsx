import React from "react";
import { motion } from "framer-motion";
import { Target, FileCheck, Search, UserCheck } from "lucide-react";

const ResumeImportant = () => {
  const features = [
    {
      icon: Target,
      title: "Highlight Your Strengths",
      description:
        "Bring your best forward! Our experts identify the achievements, skills, and experiences that will grab recruiters' attention and make your resume shine.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-white",
    },
    {
      icon: FileCheck,
      title: "Fix Resume Mistakes",
      description:
        "Eliminate errors that often cost opportunities. We'll polish your formatting, grammar, and layout so your resume looks professional and well-organized.",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-white",
    },
    {
      icon: Search,
      title: "ATS Optimization",
      description:
        "Most resumes never reach human eyes because they fail ATS checks. We ensure your resume is keyword-optimized and structured to pass Applicant Tracking Systems effortlessly.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-white",
    },
    {
      icon: UserCheck,
      title: "Personalized Guidance",
      description:
        "No automated bots — real mentors review your resume and share personalized suggestions through live or recorded feedback sessions, ensuring maximum career impact.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-section mb-4 md:mb-6">
            Why Resume Review is Important
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-nunito font-medium max-w-3xl mx-auto leading-relaxed">
            Your resume is your first impression — make sure it stands out. Our
            expert review ensures your resume is clear, impactful, and
            recruiter-ready.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-200"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-50`}
                />
                
                <div className="relative p-6 md:p-8 flex flex-col items-start text-left h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold font-playfair text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-nunito">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <IconComponent
                      className={`text-transparent bg-clip-text bg-gradient-to-br ${feature.gradient}`}
                      size={128}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeImportant;
