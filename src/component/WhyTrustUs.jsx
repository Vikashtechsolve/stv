import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import trust from "../assets/trust.png";
import diff from "../assets/diff.png";
import career from "../assets/career.png";
import growth from "../assets/growth.png";
import { FiShield, FiZap, FiTrendingUp, FiHeart } from "react-icons/fi";

const CardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      img: trust,
      icon: FiShield,
      alt: "Trust & Credibility",
      title: "Trust & Credibility",
      desc: "Verified Industry Experts: Learn from a network of certified mentors (5,000+ successful sessions, 95% satisfaction). Our process is transparent and built on trust. We ensure expert guidance, our transparent process, and clear pricing make learning safe and reliable.",
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      img: diff,
      icon: FiZap,
      alt: "What makes us Different",
      title: "What makes us Different",
      desc: "We combine 1:1 mentorship with instant doubt-solving and skill contests to create a complete ecosystem designed for high-ROI career growth",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
    {
      img: career,
      icon: FiTrendingUp,
      alt: "Focused on Career Growth",
      title: "Focused on Career Growth",
      desc: "We provide clear roadmaps for every learner—whether school students, BTech aspirants, or professionals. Through resume reviews, mock interviews, and structured 30–60–90 day plans, we ensure measurable career growth.",
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      img: growth,
      icon: FiHeart,
      alt: "We care about your Growth",
      title: "We care about your Growth",
      desc: "Our mentors offer genuine care beyond sessions with WhatsApp and email support. Learners also join peer communities where valuable feedback and connections make growth a shared journey.",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
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
          className="absolute top-10 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"
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
          className="text-center mb-10 md:mb-12"
          variants={cardVariants}
        >
          <motion.h1
            className="heading-section mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Why Learners Trust Us?
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-900 font-nunito font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover what makes us the trusted choice for thousands of learners
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                className="group relative"
                variants={cardVariants}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Section with Icon Overlay */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Icon Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Gradient Overlay on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-playfair heading-primary mb-4">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 font-nunito text-base leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CardsSection;
