import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Import your SVGs
import OneIcon from "../assets/one.svg";
import TwoIcon from "../assets/two.svg";
import ThreeIcon from "../assets/three.svg";
import FourIcon from "../assets/four.svg";
import DropdownIcon from "../assets/dropdown.svg";

const categories = ["Coding", "Aptitude", "Quiz", "All"];

// FAQ data
const faqData = [
  {
    question: "Is registration free?",
    answer:
      "Yes! Registration is completely free for all participants. You only need to sign up once.",
  },
  {
    question: "Can I participate multiple times?",
    answer:
      "Each participant can register once per contest cycle, but you can join future contests anytime!",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Absolutely! Every participant receives a digital certificate after successfully completing the contest.",
  },
  {
    question: "What happens if I miss the contest?",
    answer:
      "Don't worry! We conduct regular contests. You can participate in the next scheduled contest. Make sure to register early to secure your spot.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Winners are selected based on accuracy and speed. The leaderboard is updated in real-time, and top performers are announced after the contest ends.",
  },
  {
    question: "Can I see solutions after the contest?",
    answer:
      "Yes! All participants get access to detailed solutions and explanations after the contest ends to help you learn and improve.",
  },
];

const steps = [
  {
    icon: OneIcon,
    title: "Register Yourself",
    description:
      "Fill in your basic details, choose your contest category, and get access to your personal dashboard for updates and schedules.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: TwoIcon,
    title: "Participate Live",
    description:
      "Join the live contest at the scheduled time directly from your dashboard. Compete in coding or quiz challenges in real-time!",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: ThreeIcon,
    title: "Earn Points & Track Leaderboard",
    description:
      "Answer questions, gain points, and see your rank climb on the live leaderboard as you compete with other participants.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FourIcon,
    title: "Get Certificates & Rewards",
    description:
      "Receive a digital participation certificate and win exciting prizes and verified achievement badges for top performance.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for pre-registering! We'll notify you when the contest launches.");
    setFormData({ name: "", email: "", category: "" });
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
      className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-16 md:py-20 space-y-20 bg-white relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* How It Works Section */}
        <motion.section
          className="flex flex-col items-center w-full space-y-12 mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold heading-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl font-nunito text-gray-600 max-w-2xl mx-auto">
              Get started in four simple steps and begin your journey to success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`${step.bgColor} rounded-2xl p-6 md:p-8 shadow-lg border-2 border-transparent hover:border-gray-200 transition-all duration-300 text-center relative overflow-hidden group`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Decorative Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={step.icon}
                      alt={`Step ${index + 1}`}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold font-nunito text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base font-nunito text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number Badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Registration Form Section */}
        <motion.section
          id="contest-registration"
          className="w-full max-w-2xl mx-auto mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold heading-primary mb-4">
              Be the First to Know When We Launch!
            </h2>
            <p className="text-lg md:text-xl font-nunito font-semibold heading-primary">
              DON'T MISS THE LAUNCH! Register now to get exclusive early access, a bonus preparation challenge, and special rewards reserved only for the first 1000 participants.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-gray-100 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-gray-900 text-lg md:text-xl font-semibold font-nunito mb-2">
                Name
                <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full h-14 md:h-16 bg-gray-50 border-2 border-gray-200 rounded-xl px-6 text-lg font-nunito text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-gray-900 text-lg md:text-xl font-semibold font-nunito mb-2">
                E-mail
                <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full h-14 md:h-16 bg-gray-50 border-2 border-gray-200 rounded-xl px-6 text-lg font-nunito text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="flex items-center gap-2 text-gray-900 text-lg md:text-xl font-semibold font-nunito mb-2">
                Category
                <span className="text-red-600 text-base">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full h-14 md:h-16 bg-gray-50 border-2 border-gray-200 rounded-xl px-6 text-lg font-nunito text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url(${DropdownIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  backgroundSize: "20px 20px",
                }}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full btn-gradient-red text-white py-4 md:py-5 rounded-xl font-bold font-nunito text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Pre Register</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.form>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="w-full max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold heading-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg font-nunito text-gray-600">
              Got questions? We've got answers!
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-red-200 cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg md:text-xl font-semibold font-nunito text-gray-900 pr-4">
                    {item.question}
                  </div>
                  <motion.img
                    src={DropdownIcon}
                    alt="dropdown"
                    className="w-6 h-6 flex-shrink-0"
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 text-base md:text-lg font-nunito text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
