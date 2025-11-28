import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  User, Mail, Phone, MessageSquare, Send, Sparkles, MapPin, Clock, 
  Linkedin, Instagram, Youtube, ArrowRight, CheckCircle 
} from "lucide-react";
import womenmentor from "../assets/womenmentor.png";
import vtsImage from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const journeyRef = useRef(null);
  const socialRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  const isSocialInView = useInView(socialRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", query: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const inputFields = [
    { name: "name", type: "text", placeholder: "Enter your Full Name", icon: User },
    { name: "email", type: "email", placeholder: "Enter your Email Address", icon: Mail },
    { name: "phone", type: "tel", placeholder: "Enter your 10-digit mobile number", icon: Phone },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@vikastechsolutions.com", link: "mailto:contact@vikastechsolutions.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", link: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "India", link: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", link: null },
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", image: linkedinIcon, color: "from-blue-600 to-blue-700", link: "https://linkedin.com" },
    { icon: Instagram, name: "Instagram", image: instagramIcon, color: "from-pink-500 to-purple-600", link: "https://instagram.com" },
    { icon: Youtube, name: "YouTube", image: null, color: "from-red-600 to-red-700", link: "https://youtube.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* === HERO SECTION === */}
      <motion.section
        ref={heroRef}
        className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background Decorative Elements */}
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
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#ED0331]" />
              <motion.h1
                className="heading-section"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Get in Touch with Us
              </motion.h1>
              <Sparkles className="w-8 h-8 text-[#ED0331]" />
            </div>
            <motion.p
              className="text-xl md:text-2xl font-nunito font-semibold text-[#ED0331] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* === MAIN CONTACT FORM SECTION === */}
      <motion.section
        ref={formRef}
        className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isFormInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* LEFT SIDE - Contact Info & Image */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              <motion.h2
                className="heading-section text-left mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Have Questions? We're Here to Help
              </motion.h2>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link || undefined}
                      className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl p-4 border border-gray-200/50 transition-all duration-300 ${
                        info.link ? "cursor-pointer" : "cursor-default"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#ED0331] to-[#87021C]">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-nunito text-gray-500 mb-1">{info.label}</p>
                          <p className="text-sm font-nunito font-semibold text-gray-900">{info.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Image Section */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isFormInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-2xl blur-2xl -z-10 transform scale-110"></div>
                <img
                  src={womenmentor}
                  alt="Support"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-nunito group w-full justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-lg">Chat with us on WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* RIGHT SIDE - Form */}
            <motion.form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              {inputFields.map((field, index) => {
                const IconComponent = field.icon;
                const isFocused = focusedField === field.name;
                
                return (
                  <motion.div
                    key={field.name}
                    className="relative group"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                        <IconComponent
                          className={`w-5 h-5 transition-all duration-300 ${
                            isFocused ? "text-[#ED0331] scale-110" : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        />
                      </div>
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
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.4, delay: 0.5 }}
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

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-semibold px-8 py-5 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(237,3,49,0.4)] transition-all duration-300 font-nunito text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={!loading ? { scale: 1.02, y: -3 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : loading ? (
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* === JOURNEY SECTION === */}
      <motion.section
        ref={journeyRef}
        className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        animate={isJourneyInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Your Journey with VTS Starts Here
            </motion.h2>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-gray-200/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex-1 space-y-6">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-nunito">
                At Vikas Tech Solutions, we believe every conversation is the start of a
                solution. Whether you're a student seeking mentorship, an institute looking
                for collaboration, or a learner with questions about our programs — our team
                is always ready to assist you.
              </p>
              <p className="text-gray-900 text-lg md:text-xl leading-relaxed font-semibold font-nunito">
                We value your time and make sure every message is answered with care. Reach
                out, and let's take the next step toward your growth together.
              </p>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isJourneyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-2xl blur-2xl"></div>
              <img
                src={vtsImage}
                alt="VTS"
                className="relative w-[250px] h-[170px] md:w-[300px] md:h-[200px] rounded-2xl object-contain shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* === FOLLOW US SECTION === */}
      <motion.section
        ref={socialRef}
        className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50"
        initial="hidden"
        animate={isSocialInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isSocialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Follow us on
            </motion.h2>
          </motion.div>

          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 flex flex-col items-center gap-4 transition-all duration-300 border border-gray-200/50 min-w-[200px]"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isSocialInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${social.color} shadow-lg`}>
                    {social.image ? (
                      <img
                        src={social.image}
                        alt={social.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-nunito font-semibold text-gray-900">{social.name}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#ED0331] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ED0331]/30 transition-all duration-300"></div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;