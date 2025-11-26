import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { User, Mail, Phone, MessageSquare, Send, Sparkles } from "lucide-react";
import formImg from "../assets/form.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    type: "sales", // "sales" or "responses"
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, query, type } = formData;

    if (!name || !email || !phone || !query) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/mail/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, query, type }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("✅ Your query has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", query: "", type: "sales" });
      } else {
        alert(`❌ Failed to send query: ${data.error || data.message}`);
      }
    } catch (err) {
      console.error("Error sending query:", err);
      alert("❌ Failed to send query. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    {
      name: "name",
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="heading-section"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have Questions? We're Here to Help
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-nunito max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
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
              transition={{ duration: 0.6, delay: 0.7 }}
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
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="relative">
                <div className="absolute left-5 top-5 z-10">
                  <MessageSquare
                    className={`w-5 h-5 transition-all duration-300 ${
                      focusedField === "query" ? "text-[#ED0331] scale-110" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </div>
                <textarea
                  name="query"
                  rows="5"
                  placeholder="Type your Query Here..."
                  className="w-full pl-14 pr-5 py-4 rounded-xl border-2 bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:border-[#ED0331] focus:ring-4 focus:ring-red-100 focus:bg-white font-nunito shadow-lg hover:shadow-xl hover:border-gray-300 resize-none"
                  value={formData.query}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("query")}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === "query" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED0331] via-[#C50228] to-[#87021C] rounded-b-xl"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="hidden"
            >
              <option value="sales">Sales</option>
              <option value="responses">General</option>
            </select>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-semibold px-8 py-5 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(237,3,49,0.4)] transition-all duration-300 font-nunito text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={!loading ? { scale: 1.02, y: -3 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
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
    </motion.section>
  );
};

export default ContactForm;