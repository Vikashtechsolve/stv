import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, Calendar, Clock, Video, Sparkles, Loader2, User, MessageSquare, Upload, FileText, Award, Star } from "lucide-react";
import { useRazorpayPayment } from "../payment/useRazorpayPayment";
import LoadingOverlay from "../common/LoadingOverlay";
import MessageModal from "../common/MessageModal";
import MobileNumberInput from "../common/MobileNumberInput";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const MentorSessionForm = ({ mentor, onClose }) => {
  const navigate = useNavigate();
  const { handlePayment, loading } = useRazorpayPayment(baseUrl);
  const [modal, setModal] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1); // 1: form, 2: processing, 3: success

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    fullMobile: "",
    doubt: "",
    date: "",
    time: "",
    file: null,
  });

  const handleInput = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.fullMobile ||
      !formData.doubt ||
      !formData.date ||
      !formData.time
    )
      return "⚠️ Please fill all required fields.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email address.";
    if (formData.mobile.length < 10) return "Invalid mobile number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setModal({ message: error, type: "error" });
      return;
    }

    setStep(2); // Show processing step
    setIsSubmitting(true);

    const paymentResult = await handlePayment({
      amount: 1, //199,
      prefill: {
        userId: "6730b6d8e29f4b001f6f91d1",
        name: formData.name,
        email: formData.email,
        contact: formData.fullMobile,
      },
      description: `1:1 Mentorship with ${mentor.name}`,
    });

    if (!paymentResult.success) {
      setModal({
        message: paymentResult.error || "Payment failed.",
        type: "error",
      });
      setStep(1);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send confirmation email
      await fetch(`${baseUrl}/api/mail/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.fullMobile,
          query: "🎉 Registration successful for personal mentorship session",
          type: "mentorship",
          data: {
            doubt: formData.doubt,
            date: formData.date,
            time: formData.time,
            subject: mentor.subject,
            mentorName: mentor.name,
          },
        }),
      });

      // Save registration
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobile", formData.fullMobile);
      form.append("subject", mentor.subject);
      form.append("query", formData.doubt);
      form.append("date", formData.date);
      form.append("time", formData.time);
      form.append("mentorName", mentor.name);
      form.append("status", "pending");
      if (formData.file) form.append("file", formData.file);

      const res = await fetch(`${baseUrl}/api/mentorship/register`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      setIsSubmitting(false);
      setStep(3);
      setShowSuccess(true);

      setTimeout(() => {
        onClose();
        navigate("/");
      }, 4000);
    } catch (err) {
      console.error("❌ Registration Error:", err.message);
      setIsSubmitting(false);
      setStep(1);
      setModal({
        message: "Payment succeeded but booking failed. Please contact support.",
        type: "error",
      });
    }
  };

  return (
    <>
      {loading && <LoadingOverlay message="Processing your payment..." />}

      <AnimatePresence>
        {!showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/60 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-3xl" />

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-black transition-colors z-[10000] shadow-lg"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="relative z-10 p-6 md:p-10">
                {/* Header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-[#ED0331]" />
                    <h2 className="text-2xl md:text-3xl font-bold font-playfair heading-primary">
                      Book 1:1 Mentorship Session
                    </h2>
                    <Sparkles className="w-6 h-6 text-[#ED0331]" />
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-4" />
                  <p className="text-lg md:text-xl text-gray-700 font-nunito font-semibold mb-2">
                    Connect with <span className="heading-primary">{mentor.name}</span>
                  </p>
                  <p className="text-base text-gray-600 font-nunito">
                    Fill in your details to schedule your personalized mentorship session
                  </p>
                </motion.div>

                {/* Mentor Info Card */}
                <motion.div
                  className="bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-2xl p-5 mb-8 border-2 border-[#ED0331]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={mentor.img}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 font-playfair">{mentor.name}</h3>
                      <p className="text-sm text-gray-600 font-nunito">{mentor.role}</p>
                      <p className="text-sm font-semibold text-[#ED0331] mt-1">{mentor.subject}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-800">{mentor.rating}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Processing Step */}
                {step === 2 && (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-playfair heading-primary mb-2">
                      Processing Your Booking...
                    </h3>
                    <p className="text-gray-600 font-nunito">
                      Please wait while we confirm your mentorship session
                    </p>
                  </motion.div>
                )}

                {/* Form Step */}
                {step === 1 && (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <User className="w-4 h-4 text-[#ED0331]" />
                          <span>Full Name</span>
                          <span className="text-[#ED0331]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInput("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full bg-gray-50 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#ED0331]" />
                          <span>Email Address</span>
                          <span className="text-[#ED0331]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInput("email", e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-gray-50 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                        <span>Mobile Number</span>
                        <span className="text-[#ED0331]">*</span>
                      </label>
                      <MobileNumberInput
                        value={{ mobile: formData.mobile }}
                        onChange={(val) => {
                          handleInput("mobile", val.mobile);
                          handleInput("fullMobile", val.fullMobile);
                        }}
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#ED0331]" />
                          <span>Subject</span>
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={mentor.subject}
                          className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-not-allowed font-nunito"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <User className="w-4 h-4 text-[#ED0331]" />
                          <span>Mentor</span>
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={mentor.name}
                          className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-not-allowed font-nunito"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-[#ED0331]" />
                        <span>Your Query / Goal</span>
                        <span className="text-[#ED0331]">*</span>
                      </label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Describe what you want to learn or achieve..."
                        value={formData.doubt}
                        onChange={(e) => handleInput("doubt", e.target.value)}
                        className="w-full bg-gray-50 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito resize-none"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#ED0331]" />
                          <span>Schedule Date</span>
                          <span className="text-[#ED0331]">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInput("date", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-gray-50 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#ED0331]" />
                          <span>Preferred Time</span>
                          <span className="text-[#ED0331]">*</span>
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => handleInput("time", e.target.value)}
                          className="w-full bg-gray-50 text-gray-700 px-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <label className="text-gray-800 text-base font-semibold font-nunito mb-2 block flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#ED0331]" />
                        <span>Upload File (Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="block w-full text-sm text-gray-700 border-2 border-gray-200 rounded-xl bg-gray-50 p-3 focus:outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito"
                        />
                        {formData.file && (
                          <p className="mt-2 text-sm text-gray-600 font-nunito">
                            Selected: {formData.file.name}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting || loading}
                      className={`mt-4 flex justify-center items-center gap-3 btn-gradient-red text-white py-4 md:py-5 cursor-pointer rounded-xl font-bold font-nunito text-base md:text-lg transition-all shadow-xl relative overflow-hidden group ${
                        isSubmitting || loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
                      }`}
                      whileHover={!isSubmitting && !loading ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting && !loading ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      {isSubmitting || loading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="relative z-10">Processing...</span>
                        </>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Confirm & Book Session
                        </span>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MessageModal
        message={modal.message}
        type={modal.type}
        onClose={() => setModal({ message: "", type: "" })}
      />

      {/* Enhanced Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10001] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center relative overflow-hidden"
              initial={{ scale: 0.8, y: 50, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/5 to-[#87021C]/5" />
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#ED0331]/20 to-[#87021C]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">
                {/* Success Icon */}
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={3} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-green-300"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Success Message */}
                <motion.h3
                  className="text-3xl md:text-4xl font-bold font-playfair heading-primary mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Session Booked Successfully! 🎉
                </motion.h3>

                <motion.p
                  className="text-base md:text-lg font-nunito text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Congratulations! Your mentorship session with <span className="font-bold text-[#ED0331]">{mentor.name}</span> has been confirmed. A confirmation email with all the details has been sent to <span className="font-bold text-[#ED0331]">{formData.email}</span>.
                </motion.p>

                {/* Session Details */}
                <motion.div
                  className="bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-xl p-5 mb-6 border-2 border-[#ED0331]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5 text-[#ED0331]" />
                      <span className="text-sm font-semibold text-gray-800">{formData.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Clock className="w-5 h-5 text-[#ED0331]" />
                      <span className="text-sm font-semibold text-gray-800">{formData.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Video className="w-5 h-5 text-[#ED0331]" />
                      <span className="text-sm font-semibold text-gray-800">Online Session</span>
                    </div>
                  </div>
                </motion.div>

                {/* Loading indicator for redirect */}
                <motion.div
                  className="flex items-center justify-center gap-3 text-sm font-nunito text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="w-5 h-5 border-3 border-[#ED0331] border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Redirecting to home page...</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MentorSessionForm;
