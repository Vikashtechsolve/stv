import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  User, 
  GraduationCap, 
  Calendar, 
  Phone, 
  BookOpen, 
  Briefcase, 
  MapPin, 
  DollarSign,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Zap,
  Target,
  ArrowRight,
  FileText,
  Clock,
  Building2,
  X,
  PartyPopper
} from "lucide-react";
import joinImg from "../../assets/form.png";

// ✅ Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  qualification: yup.string().required("Qualification is required"),
  passingYear: yup.string().required("Passing Year is required"),
  contactNo: yup
    .string()
    .matches(/^[0-9]{7,15}$/, "Enter valid contact number")
    .required("Contact number is required"),
  subject: yup.string().required("Subject is required"),
  resume: yup
    .mixed()
    .required("Resume is required")
    .test("fileSize", "File too large (max 10MB)", (v) => v?.[0]?.size <= 10 * 1024 * 1024),
  teachingExperience: yup.number().required().min(0),
  developmentExperience: yup.number().required().min(0),
  totalExperience: yup.number().required().min(0),
  workLookingFor: yup.array().min(1, "Select at least one option"),
  mode: yup.array().min(1, "Select at least one mode"),
  location: yup.string().required("Location is required"),
  payoutExpectations: yup.number().required().min(0, "Payout is required"),
});

const JoinUsForm = () => {
  const [message, setMessage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const resumeFile = watch("resume");

  // Update selected file when file changes
  React.useEffect(() => {
    if (resumeFile && resumeFile[0]) {
      setSelectedFile(resumeFile[0]);
    }
  }, [resumeFile]);

  // 📅 Passing Year dropdown (current year - last 50 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  // 🧩 Submit handler
  const onSubmit = async (data) => {
    setMessage(null);
    setShowSuccess(false);
    try {
      const formData = new FormData();
      
      // Append all fields according to backend format
      formData.append("name", data.name);
      formData.append("qualification", data.qualification);
      formData.append("passingYear", String(data.passingYear));
      formData.append("contactNo", data.contactNo);
      formData.append("subject", data.subject);
      formData.append("teachingExperience", String(data.teachingExperience));
      formData.append("developmentExperience", String(data.developmentExperience));
      formData.append("totalExperience", String(data.totalExperience));
      formData.append("workLookingFor", JSON.stringify(data.workLookingFor));
      formData.append("mode", JSON.stringify(data.mode));
      formData.append("location", data.location);
      formData.append("payoutExpectations", String(data.payoutExpectations));
      formData.append("resume", data.resume[0]);

      const res = await axios.post("/api/joinus", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowSuccess(true);
      reset();
      setSelectedFile(null);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Submission failed. Try again.",
      });
    }
  };

  const benefits = [
    { icon: Award, text: "Competitive Compensation", color: "from-yellow-500 to-amber-600" },
    { icon: Users, text: "Impact 10K+ Students", color: "from-blue-500 to-cyan-600" },
    { icon: Zap, text: "Flexible Schedule", color: "from-purple-500 to-indigo-600" },
    { icon: Target, text: "Career Growth", color: "from-green-500 to-emerald-600" },
  ];

  const whyJoin = [
    { icon: Building2, title: "Reputed Organization", desc: "Join a trusted name in tech education" },
    { icon: Users, title: "Supportive Community", desc: "Work with passionate educators" },
    { icon: Award, title: "Recognition & Rewards", desc: "Get recognized for your contributions" },
    { icon: Clock, title: "Work-Life Balance", desc: "Flexible hours that fit your schedule" },
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="bg-gray-50 text-gray-800 py-12 md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair heading-primary">
              Join as a Trainer
            </h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.div
            className="w-32 h-2 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-xl md:text-2xl font-nunito text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Help shape the next generation of developers! Share your expertise and make a lasting impact on students' careers.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#ED0331]/30 transition-all text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800 font-nunito">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Enhanced Image & Why Join Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-3xl blur-2xl" />
              <img 
                src={joinImg} 
                alt="Join Us" 
                className="relative w-full rounded-2xl shadow-2xl border-4 border-white" 
              />
            </motion.div>

            {/* Why Join Us Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-playfair heading-primary mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-[#ED0331]" />
                Why Join VTS?
              </h2>
              <div className="space-y-4">
                {whyJoin.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-2 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 font-nunito">{item.title}</h3>
                        <p className="text-sm text-gray-600 font-nunito">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#ED0331]/5 to-[#87021C]/5 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <User className="w-5 h-5 text-[#ED0331]" />
                    Full Name *
                  </label>
                  <input 
                    {...register("name")} 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito" 
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.name?.message}</p>
                </motion.div>

                {/* Qualification */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <GraduationCap className="w-5 h-5 text-[#ED0331]" />
                    Qualification *
                  </label>
                  <input
                    {...register("qualification")}
                    placeholder="e.g., B.Tech, M.Tech, BCA, MCA"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito"
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.qualification?.message}</p>
                </motion.div>

                {/* Passing Year */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <Calendar className="w-5 h-5 text-[#ED0331]" />
                    Passing Year *
                  </label>
                  <select 
                    {...register("passingYear")} 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito" 
                    defaultValue=""
                  >
                    <option value="" disabled>Select Passing Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.passingYear?.message}</p>
                </motion.div>

                {/* Contact Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <Phone className="w-5 h-5 text-[#ED0331]" />
                    Contact Number *
                  </label>
                  <input
                    {...register("contactNo")}
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito"
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.contactNo?.message}</p>
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <BookOpen className="w-5 h-5 text-[#ED0331]" />
                    Subject *
                  </label>
                  <input 
                    {...register("subject")} 
                    placeholder="e.g., Java, React, DSA, Spring Boot" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito" 
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.subject?.message}</p>
                </motion.div>

                {/* Resume Upload */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <FileText className="w-5 h-5 text-[#ED0331]" />
                    Resume *
                  </label>
                  <label className="w-full border-2 border-dashed border-gray-300 rounded-xl py-6 flex flex-col items-center cursor-pointer hover:border-[#ED0331] hover:bg-[#ED0331]/5 transition-all group">
                    <Upload className="text-4xl text-[#ED0331] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600 font-medium font-nunito">
                      {selectedFile ? selectedFile.name : "Upload Resume (PDF/DOC) *"}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 font-nunito">Max 10MB</span>
                    <input type="file" {...register("resume")} className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.resume?.message}</p>
                </motion.div>

                {/* Experience Fields */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {["teachingExperience", "developmentExperience", "totalExperience"].map((f, idx) => (
                    <div key={f}>
                      <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm font-nunito">
                        <Briefcase className="w-4 h-4 text-[#ED0331]" />
                        {f.replace(/([A-Z])/g, " $1").trim()} *
                      </label>
                      <input
                        type="number"
                        {...register(f)}
                        placeholder="Years"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito"
                      />
                      <p className="text-sm text-red-600 mt-1 font-nunito">{errors[f]?.message}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Work Looking For */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3 font-nunito">
                    <Clock className="w-5 h-5 text-[#ED0331]" />
                    Work Looking For *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["Part-Time Trainer", "Full-Time Trainer"].map((v) => (
                      <label 
                        key={v} 
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#ED0331] hover:bg-[#ED0331]/5 transition-all group"
                      >
                        <input 
                          type="checkbox" 
                          value={v} 
                          {...register("workLookingFor")} 
                          className="w-4 h-4 text-[#ED0331] focus:ring-[#ED0331] rounded"
                        />
                        <span className="font-nunito text-gray-700 group-hover:text-[#ED0331] transition-colors">{v}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.workLookingFor?.message}</p>
                </motion.div>

                {/* Mode */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3 font-nunito">
                    <Building2 className="w-5 h-5 text-[#ED0331]" />
                    Mode *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["Online Mode", "Offline Mode"].map((v) => (
                      <label 
                        key={v} 
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#ED0331] hover:bg-[#ED0331]/5 transition-all group"
                      >
                        <input 
                          type="checkbox" 
                          value={v} 
                          {...register("mode")} 
                          className="w-4 h-4 text-[#ED0331] focus:ring-[#ED0331] rounded"
                        />
                        <span className="font-nunito text-gray-700 group-hover:text-[#ED0331] transition-colors">{v}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.mode?.message}</p>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <MapPin className="w-5 h-5 text-[#ED0331]" />
                    Location *
                  </label>
                  <input 
                    {...register("location")} 
                    placeholder="Enter your location" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito" 
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.location?.message}</p>
                </motion.div>

                {/* Payout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 font-nunito">
                    <DollarSign className="w-5 h-5 text-[#ED0331]" />
                    Payout Expectations (per hour) *
                  </label>
                  <input
                    type="number"
                    {...register("payoutExpectations")}
                    placeholder="Enter expected payout"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#ED0331]/20 focus:border-[#ED0331] outline-none transition-all font-nunito"
                  />
                  <p className="text-sm text-red-600 mt-1 font-nunito">{errors.payoutExpectations?.message}</p>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient-red text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group font-nunito text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Error Message */}
                <AnimatePresence>
                  {message && message.type === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border-2 border-red-200"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-white text-sm font-bold">!</span>
                        </motion.div>
                        <p className="font-semibold font-nunito text-red-700">
                          {message.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
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
                  Application Submitted!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 text-lg font-nunito mb-6 leading-relaxed"
                >
                  Your response has been successfully saved. We'll reach out to you shortly!
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
    </section>
  );
};

export default JoinUsForm;
