import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useRazorpayPayment } from "../payment/useRazorpayPayment";
import LoadingOverlay from "../common/LoadingOverlay";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Loader2, XCircle, Sparkles, Clock, Mail, Phone, Calendar, FileText, ArrowRight } from "lucide-react";
import MobileNumberInput from "../common/MobileNumberInput";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const DoubtSessionForm = ({ plan, onClose }) => {
  const navigate = useNavigate();

  const { handlePayment, loading, setLoading } = useRazorpayPayment(baseUrl);
  const [modal, setModal] = useState({ message: "", type: "", show: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitStep, setSubmitStep] = useState(""); // Track submission steps

  const defaultCountryCode = "+91";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: defaultCountryCode,
    fullMobile: "",
    subject: "",
    doubt: "",
    date: "",
    time: "",
    file: null,
  });

  const handleInput = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleMobileChange = (val) => {
    setFormData((prev) => ({
      ...prev,
      mobile: val?.mobile || "",
      countryCode: val?.countryCode || prev.countryCode,
      fullMobile: val?.fullMobile || "",
    }));
  };

  const handleFileChange = (e) =>
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));

  const validateDateTime = () => {
    if (!formData.date || !formData.time)
      return "Please select date & time.";

    const today = new Date();
    const selectedDate = new Date(formData.date);
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);

    if (selectedDate < new Date(today.toDateString()))
      return "You cannot choose a past date.";

    const todayDate = today.toISOString().split("T")[0];
    if (formData.date === todayDate) {
      const nowTime = today.getHours() * 60 + today.getMinutes();
      const selectedTime =
        Number(formData.time.split(":")[0]) * 60 +
        Number(formData.time.split(":")[1]);

      if (selectedTime <= nowTime)
        return "Please choose a future time.";
    }

    return null;
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.fullMobile)
      return "Please fill all required fields.";

    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email.";

    if (!/^\+\d{1,4}\d{10,15}$/.test(formData.fullMobile))
      return "Invalid mobile number with country code.";

    return validateDateTime();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setModal({ message: error, type: "error", show: true });
      setTimeout(() => setModal({ message: "", type: "", show: false }), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStep("validating");

    // Small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubmitStep("processing_payment");

    // Payment
    const paymentResult = await handlePayment({
      amount: 1,
      prefill: {
        userId: "6730b6d8e29f4b001f6f91d1",
        name: formData.name,
        email: formData.email,
        contact: formData.fullMobile,
      },
      description: plan.description,
    });

    if (!paymentResult.success) {
      setLoading(false);
      setIsSubmitting(false);
      setSubmitStep("");
      setModal({
        message: paymentResult.error || "Payment Cancelled",
        type: "error",
        show: true,
      });
      setTimeout(() => setModal({ message: "", type: "", show: false }), 4000);
      return;
    }

    try {
      setSubmitStep("sending_email");
      // Send Email
      await fetch(`${baseUrl}/api/mail/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.fullMobile,
          query: "🎉 Registration successful for personal doubt solving session",
          type: "doubtsolving",
          data: {
            doubt: formData.doubt,
            date: formData.date,
            time: formData.time,
            plan: plan.title,
            subject: formData.subject,
          },
        }),
      });

      setSubmitStep("saving_data");
      // Save Data
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobile", formData.fullMobile);
      form.append("subject", formData.subject);
      form.append("doubt", formData.doubt);
      form.append("date", formData.date);
      form.append("time", formData.time);
      form.append("plan", plan.title);
      form.append("status", "pending");
      form.append("mentorName", "");
      if (formData.file) form.append("file", formData.file);

      const saveRes = await fetch(`${baseUrl}/api/doubts`, {
        method: "POST",
        body: form,
      });

      const saveData = await saveRes.json();

      if (!saveRes.ok) throw new Error(saveData.message);

      setSubmitStep("success");
      setIsSubmitting(false);
      setSuccess(true);

      // Auto close and redirect after 4 seconds
      setTimeout(() => {
        setSuccess(false);
        onClose();
        navigate("/");
      }, 4000);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStep("");
      setModal({
        message: err.message || "Payment succeeded but saving failed.",
        type: "error",
        show: true,
      });
      setTimeout(() => setModal({ message: "", type: "", show: false }), 4000);
    }
  };

  const getLoadingMessage = () => {
    switch (submitStep) {
      case "validating":
        return "Validating your information...";
      case "processing_payment":
        return "Processing your payment...";
      case "sending_email":
        return "Sending confirmation email...";
      case "saving_data":
        return "Saving your session details...";
      default:
        return "Processing your request...";
    }
  };

  return (
    <>
      {(loading || isSubmitting) && (
        <LoadingOverlay message={getLoadingMessage()} />
      )}

      <AnimatePresence>
        {!success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/50 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative overflow-hidden max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Header */}
              <div className="bg-gradient-to-r from-[#ED0331] to-[#87021C] h-3"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                disabled={isSubmitting || loading}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-600 transition-colors bg-white rounded-full p-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IoClose size={24} />
              </button>

              {/* Form Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center gap-2 mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Sparkles className="w-7 h-7 text-[#ED0331]" />
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair heading-primary">
                      Book Your 1:1 Doubt Solving Session
                    </h2>
                    <Sparkles className="w-7 h-7 text-[#ED0331]" />
                  </motion.div>
                  <p className="text-gray-600 font-nunito text-lg">
                    Fill in the details below to connect with the right mentor
                  </p>
                  
                  {/* Selected Plan Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-full px-6 py-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="font-semibold text-red-600 font-nunito">
                      {plan.title} - ₹{plan.price}
                    </span>
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                        <span>Name</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInput("name", e.target.value)}
                          required
                          disabled={isSubmitting || loading}
                          placeholder="Enter your Full Name"
                          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 pl-12 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                        <span>Email-Id</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInput("email", e.target.value)}
                          required
                          disabled={isSubmitting || loading}
                          placeholder="Enter your Email-Id"
                          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 pl-12 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <span>Mobile Number</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200 transition-all">
                      <MobileNumberInput
                        value={{
                          mobile: formData.mobile,
                          countryCode: formData.countryCode,
                        }}
                        onChange={handleMobileChange}
                        disabled={isSubmitting || loading}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gray-600" />
                      <span>Select Subject</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInput("subject", e.target.value)}
                      required
                      disabled={isSubmitting || loading}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select your Subject</option>
                      <option>Data Structures</option>
                      <option>Algorithms</option>
                      <option>Java</option>
                      <option>React</option>
                      <option>Node.js</option>
                    </select>
                  </div>

                  {/* Doubt */}
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2 font-nunito">
                      Write about Doubt <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.doubt}
                      onChange={(e) => handleInput("doubt", e.target.value)}
                      required
                      disabled={isSubmitting || loading}
                      placeholder="Explain your doubt in detail..."
                      rows="4"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all resize-none font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <span>Schedule Date</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInput("date", e.target.value)}
                        required
                        disabled={isSubmitting || loading}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-800 mb-2 font-nunito flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span>Time</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInput("time", e.target.value)}
                        required
                        disabled={isSubmitting || loading}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2 font-nunito">
                      Upload File (Optional)
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      disabled={isSubmitting || loading}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || loading}
                    className={`w-full btn-gradient-red text-white py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all font-nunito flex items-center justify-center gap-3 relative overflow-hidden group ${
                      isSubmitting || loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    whileHover={!isSubmitting && !loading ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && !loading ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting || loading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>{getLoadingMessage()}</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Your Registration</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={isSubmitting || loading ? { x: ["-100%", "100%"] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                </form>

                {/* Error Modal */}
                <AnimatePresence>
                  {modal.show && modal.type === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      className="fixed bottom-6 right-6 bg-white border-2 border-red-200 rounded-xl p-5 shadow-2xl z-50 max-w-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-red-600 mb-1 font-nunito">Error</h4>
                          <p className="text-red-700 text-sm font-nunito leading-relaxed">{modal.message}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Success Modal - Enhanced */}
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/60 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#ED0331] to-[#87021C]"></div>
              
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative z-10 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <CheckCircle className="w-14 h-14 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-green-300"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* Success Message */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 text-3xl md:text-4xl font-bold font-playfair heading-primary mb-4"
              >
                Registration Successful! 🎉
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 text-gray-600 font-nunito mb-2 text-lg leading-relaxed"
              >
                Your payment has been processed and your session has been booked successfully.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 text-gray-500 font-nunito mb-6 text-base"
              >
                You will receive a confirmation email shortly with all the details.
              </motion.p>

              {/* Redirecting Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 flex items-center justify-center gap-2 text-sm text-gray-500 font-nunito"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Redirecting to home page...</span>
              </motion.div>

              {/* Confetti Effect */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-br from-red-400 to-pink-400 rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    opacity: 1,
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                    y: `${50 + (Math.random() - 0.5) * 200}%`,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.7 + i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DoubtSessionForm;
