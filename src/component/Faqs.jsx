import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <motion.div
      className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden mb-3 transition-all duration-300 hover:shadow-xl border border-gray-200/60 hover:border-[#ED0331]/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      {/* Question */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer p-4 md:p-5 lg:p-6 font-nunito bg-gradient-to-r from-white/90 to-gray-50/50"
        whileHover={{ backgroundColor: "rgba(249, 249, 249, 0.9)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 rounded-full bg-[#ED0331]/10 flex items-center justify-center shrink-0">
            <span className="text-[#ED0331] font-bold text-sm">{index + 1}</span>
          </div>
          <div className="text-sm md:text-base lg:text-lg font-semibold text-black pr-4">
          {faq.question}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#ED0331]/10 flex items-center justify-center">
            <FiChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#ED0331]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Dropdown Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-200/60 pt-4 pb-4 md:pb-5 px-4 md:px-5 lg:px-6 bg-white/50">
              {faq.options.map((opt, idx) => (
                <motion.div
                  key={idx}
                  className="mb-2.5 last:mb-0 p-3 md:p-3.5 rounded-xl bg-gradient-to-r from-gray-50/80 to-gray-100/50 hover:from-gray-100/90 hover:to-gray-200/60 transition-all duration-200 font-nunito text-xs md:text-sm lg:text-base text-black leading-relaxed border-l-[3px] border-[#ED0331]/30 shadow-sm"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ x: 3 }}
                >
                  {opt}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const Faqs = ({ faqData }) => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
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

      {/* Frequently Asked Questions Title */}
      <motion.h2
        className="heading-section mb-6 md:mb-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Subtext with Animation */}
      <motion.div
        className="w-full max-w-5xl text-center mb-6 md:mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-base md:text-lg font-nunito font-semibold text-black">
          Have more Questions?
        </p>
      </motion.div>

      {/* FAQ Items with Stagger Animation */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-3 relative z-10">
        {faqData && faqData.length > 0 ? (
          faqData.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-black font-nunito text-lg md:text-xl">No FAQs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faqs;
