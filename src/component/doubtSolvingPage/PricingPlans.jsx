import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lightbulb, User, Sparkles, Check, ArrowRight } from "lucide-react";
import DoubtSessionForm from "./DoubtSessionForm";
const baseUrl = import.meta.env.VITE_APP_API_URL;

const plans = [
  {
    id: 1,
    title: "Quick Doubt",
    description: "15-Minute session for small queries.",
    price: "29",
    icon: Zap,
    features: ["15-minute session", "Instant doubt resolution", "Quick answers"],
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-indigo-50",
    popular: false,
  },
  {
    id: 2,
    title: "Deep Learning",
    description: "45-minute detailed explanation + notes.",
    price: "59",
    icon: Lightbulb,
    features: [
      "45-minute session",
      "Detailed explanation",
      "Session notes",
      "Concept recap",
    ],
    gradient: "from-[#ED0331] to-[#87021C]",
    bgGradient: "from-red-50 to-pink-50",
    popular: true,
  },
  {
    id: 3,
    title: "Premium Mentor",
    description: "Session with senior mentor + roadmap.",
    price: "99",
    icon: User,
    features: [
      "Extended session",
      "Senior mentor",
      "Personalized roadmap",
      "Priority support",
      "Follow-up session",
    ],
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-pink-50",
    popular: false,
  },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <motion.section
      ref={ref}
      className="relative bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"
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
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
            <h2 className="heading-section">
              Choose Your Perfect Plan
            </h2>
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-nunito font-medium max-w-2xl mx-auto">
            Get started with a plan that fits your learning goals.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`group relative w-full rounded-2xl shadow-lg hover:shadow-2xl bg-white flex flex-col overflow-hidden border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-red-400 scale-105 md:scale-110"
                    : "border-gray-200 hover:border-red-200"
                }`}
                whileHover={{ y: plan.popular ? -12 : -8, scale: plan.popular ? 1.12 : 1.05 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white px-6 py-1.5 rounded-b-xl text-sm font-bold font-nunito shadow-lg z-10">
                    Most Popular
                  </div>
                )}

                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 w-full flex flex-col items-center py-6 md:py-8 px-6">
                  {/* Icon */}
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-xl mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-2 text-center">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-nunito mb-6 text-center text-sm md:text-base">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="w-full mb-6">
                    <div className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white w-full py-4 font-bold text-3xl text-center font-nunito shadow-lg rounded-xl">
                      ₹{plan.price}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="w-full mb-6 space-y-3 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm font-nunito text-gray-700"
                      >
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full border-2 cursor-pointer font-nunito px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white border-transparent shadow-lg"
                        : "border-[#ED0331] text-[#ED0331] hover:bg-gradient-to-r hover:from-[#ED0331] hover:to-[#87021C] hover:text-white hover:border-transparent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Session Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {!plan.popular && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#ED0331] to-[#87021C]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                </div>

                {/* Hover Border Effect */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-red-400 opacity-0 pointer-events-none"
                    whileHover={{
                      opacity: 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <DoubtSessionForm
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          baseUrl={baseUrl}
        />
      )}
    </motion.section>
  );
};

export default PricingPlans;
