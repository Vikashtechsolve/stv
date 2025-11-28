import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Tag, FileText, Headphones, Users, Star, Sparkles } from "lucide-react";

const features = [
  {
    id: 1,
    icon: GraduationCap,
    title: "100+ Expert Mentors from IITs & Top Industries",
    description:
      "Learn directly from India's best minds. Our mentors are experienced professionals and IIT graduates who simplify tough concepts and guide you step-by-step toward mastery.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    id: 2,
    icon: Tag,
    title: "Affordable Pricing — Starting at Just ₹29",
    description:
      "Get premium 1:1 learning support at pocket-friendly rates. We believe every student deserves quality mentorship without worrying about high costs.",
    gradient: "from-[#ED0331] to-[#87021C]",
    bgGradient: "from-red-50 to-pink-50",
  },
  {
    id: 3,
    icon: FileText,
    title: "Session Notes & Concept Recap",
    description:
      "After every live session, receive well-structured notes and a concept summary — making it easier to revise and retain what you've learned.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24×7 Student Support",
    description:
      "Have a question or need help? Our support team is available round the clock to ensure a seamless experience and quick resolution for all your queries.",
    gradient: "from-[#ED0331] to-[#87021C]",
    bgGradient: "from-red-50 to-pink-50",
  },
  {
    id: 5,
    icon: Users,
    title: "Instant Mentor Matching",
    description:
      "No waiting time! The moment you raise a doubt, we instantly connect you with the best available mentor who specializes in your subject or topic.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    id: 6,
    icon: Star,
    title: "Average Student Rating",
    description:
      "Trusted by thousands of learners nationwide. Our students love the clarity, guidance, and support they receive in every 1:1 session.",
    gradient: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-50",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h2
              className="heading-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Us
            </motion.h2>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-500 border border-gray-200/50 overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-playfair font-semibold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-nunito text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${item.gradient} opacity-0 pointer-events-none`}
                  whileHover={{
                    opacity: 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
