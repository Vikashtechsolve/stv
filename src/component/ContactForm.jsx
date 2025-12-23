import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { User, Mail, Phone, MessageSquare, Send, Sparkles, X, CheckCircle2, PartyPopper } from "lucide-react";
import axios from "axios";
import formImg from "../assets/form.png";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;

    if (!fullName || !email || !phone || !message) {
      setError("⚠️ Please fill in all fields!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${baseUrl}/api/contact`, {
        fullName,
        email,
        phone,
        message,
      });

      if (res.status === 200 || res.status === 201) {
        setShowSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error("Error sending query:", err);
      setError(err.response?.data?.message || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Enter your Full Name",
      icon: User,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email Address",
      icon: Mail,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter your 10-digit mobile number",
      icon: Phone,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-100/10 to-pink-100/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="heading-section"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Have Questions? We're Here to Help
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-nunito max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Get in touch with us and let's solve your doubts together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Illustration */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-8"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
              transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-200/40 via-pink-200/30 to-purple-200/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-red-200/30 rounded-full blur-2xl"></div>
              
              <motion.img
                src={formImg}
                alt="Support Illustration"
                className="w-full max-w-md relative z-10 drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div
              className="text-center space-y-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-[#ED0331]" />
                  <p className="text-lg md:text-xl font-semibold text-gray-800 font-nunito">
                    Let's solve your doubts together!
                  </p>
                </div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">
                  Our team is ready to assist you with any questions or concerns
                </p>
              </div>
              
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-nunito group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg">Chat with us on WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            className="space-y-6 w-full"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            {/* Input Fields */}
            {inputFields.map((field, index) => {
              const IconComponent = field.icon;
              const isFocused = focusedField === field.name;
              
              return (
                <motion.div
                  key={field.name}
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                >
                  <div className="relative">
                    {/* Icon */}
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                      <IconComponent
                        className={`w-5 h-5 transition-all duration-300 ${
                          isFocused ? "text-[#ED0331] scale-110" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                    </div>
                    
                    {/* Input */}
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full pl-14 pr-5 py-4 rounded-xl border-2 bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:border-[#ED0331] focus:ring-4 focus:ring-red-100 focus:bg-white font-nunito shadow-lg hover:shadow-xl hover:border-gray-300"
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                    />
                    
                    {/* Animated Border Bottom */}
                    {isFocused && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED0331] via-[#C50228] to-[#87021C] rounded-b-xl"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Textarea */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute left-5 top-5 z-10">
                  <MessageSquare
                    className={`w-5 h-5 transition-all duration-300 ${
                      focusedField === "message" ? "text-[#ED0331] scale-110" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your Message Here..."
                  className="w-full pl-14 pr-5 py-4 rounded-xl border-2 bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:border-[#ED0331] focus:ring-4 focus:ring-red-100 focus:bg-white font-nunito shadow-lg hover:shadow-xl hover:border-gray-300 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === "message" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED0331] via-[#C50228] to-[#87021C] rounded-b-xl"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-50 border-2 border-red-200"
              >
                <p className="text-red-700 font-semibold font-nunito">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-semibold px-8 py-5 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(237,3,49,0.4)] transition-all duration-300 font-nunito text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={!loading ? { scale: 1.02, y: -3 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Query
                  </>
                )}
              </span>
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-2xl" />

              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="relative z-10 text-center">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                {/* Confetti Animation */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <PartyPopper className="w-16 h-16 text-yellow-400" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold font-playfair heading-primary mb-4"
                >
                  Thank You for Contacting Us!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 text-lg font-nunito mb-6 leading-relaxed"
                >
                  We will reach you soon!
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="w-24 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
                />

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => setShowSuccess(false)}
                  className="w-full btn-gradient-red text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all font-nunito text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ContactForm;