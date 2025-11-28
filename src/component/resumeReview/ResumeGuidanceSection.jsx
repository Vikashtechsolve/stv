import React, { useState } from "react";
import { motion } from "framer-motion";
import { Video, FileText, User, Workflow, Mail, ArrowRight } from "lucide-react";
import ResumeReviewForm from "./ResumeReviewForm";

const ResumeGuidanceSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Video,
      title: "30–40 Minute Live Session",
      description: "with Expert",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: FileText,
      title: "Detailed Resume Review",
      description: "by Industry Mentor",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: User,
      title: "Personalized Improvement Tips",
      description: "to strengthen your profile",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Workflow,
      title: "Skill & Career Roadmap PDF",
      description: "for future planning",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Follow-up Support via Email",
      description: "to clear your next doubts",
      gradient: "from-orange-500 to-orange-600",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-12 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"
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
          {/* Heading */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section mb-4 md:mb-6">
              All This for Just ₹149
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 font-nunito font-medium max-w-3xl mx-auto">
              Get complete career-ready resume guidance — all in one affordable
              session.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="flex flex-col items-center gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
              {features.slice(0, 3).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-red-200"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="text-white" size={32} />
                    </motion.div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 font-playfair text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-nunito text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
              {features.slice(3).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index + 3}
                    variants={cardVariants}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-red-200"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="text-white" size={32} />
                    </motion.div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 font-playfair text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-nunito text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12 md:mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsFormOpen(true)}
              className="btn-gradient-red text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl font-nunito flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && <ResumeReviewForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

export default ResumeGuidanceSection;
