import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingOverlay from "../component/common/LoadingOverlay";
import MessageModal from "../component/common/MessageModal";
import MobileNumberInput from "../component/common/MobileNumberInput";
import { useRazorpayPayment } from "../component/payment/useRazorpayPayment";
import { useNavigate } from 'react-router-dom'
const RegistrationPopup = ({ event, onClose, baseUrl }) => {
   const navigate = useNavigate()

  const { handlePayment, loading } = useRazorpayPayment(baseUrl);
  const [modal, setModal] = useState({ message: "", type: "" });
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    fullMobile: "",
    graduationYear: "",
  });

  const handleInput = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.fullMobile || !formData.graduationYear)
      return "⚠️ Please fill all required fields.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email.";
    if (formData.mobile.length < 10) return "Invalid mobile number.";
    return null;
  };

  const submit = async () => {
    const error = validateForm();
    if (error) {
      setModal({ message: error, type: "error" });
      return;
    }

    // ============================================
    // PAYMENT CODE - COMMENTED (TO BE UNCOMMENTED LATER)
    // ============================================
    // const paymentResult = await handlePayment({
    //   amount: event.amount || 1,
    //   prefill: {
    //     userId:event._id,
    //     name: formData.name,
    //     email: formData.email,
    //     contact: formData.fullMobile,
    //   },
    //   description: event.eventTitle,
    // });

    // if (!paymentResult.success) {
    //   setModal({ message: paymentResult.error || "Payment failed", type: "error" });
    //   return;
    // }
    // ============================================

    setIsRegistering(true);

    try {
      // Send confirmation email
      await fetch(`${baseUrl}/api/mail/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.fullMobile,
          query: "🎉 Registration successful for masterclass",
          type: "masterclass",
          data: {
            meetUrl: event.meetingUrl,
            date: event.scheduleEventDate,
            time: event.scheduleEventTime,
            title: event.eventTitle,
          },
        }),
      });

      // Save registration
      const registrationFrom = {
        masterclassId: event._id,
        name: formData.name,
        email: formData.email,
        mobile: formData.fullMobile,
        graduationYear: formData.graduationYear,
      };

      const res = await fetch(`${baseUrl}/api/masterclass/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationFrom),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      setIsRegistering(false);
      setShowSuccess(true);

      // Close popup and redirect after 2 seconds
      setTimeout(() => {
        onClose();
        navigate("/");
      }, 4000);

    } catch (err) {
      console.error("❌ Registration Error:", err.message);
      setIsRegistering(false);
      setModal({ message: "Registration failed. Please try again.", type: "error" });
    }
  };

  if (!event) return null;

  return (
    <>
      {loading && <LoadingOverlay message="Processing your payment..." />}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-[640px] max-h-[85vh] md:max-h-[90vh] overflow-y-auto mt-12 md:mt-0"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            className="absolute right-4 top-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-gray-600 hover:text-black transition-colors z-[10000] shadow-lg"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close"
          >
            ×
          </motion.button>
          <motion.h2 
            className="text-center text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-playfair heading-primary pr-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Register for {event.eventTitle} Masterclass
          </motion.h2>
          <motion.p 
            className="text-center mb-5 md:mb-6 text-black text-base md:text-lg font-medium font-nunito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Fill in your details below and reserve your seat
          </motion.p>

          <motion.form 
            className="flex flex-col gap-4 md:gap-5" 
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-black text-base md:text-lg font-medium font-nunito mb-2 block">
                Name <span className="text-[#ED0331]">*</span>
              </label>
              <input 
                placeholder="Full Name"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-3 md:py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito text-sm md:text-base"
                value={formData.name} 
                onChange={(e) => handleInput("name", e.target.value)} 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="text-black text-base md:text-lg font-medium font-nunito mb-2 block">
                Email-Id <span className="text-[#ED0331]">*</span>
              </label>
              <input 
                type="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={(e) => handleInput("email", e.target.value)} 
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-3 md:py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito text-sm md:text-base"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="text-black text-base md:text-lg font-medium font-nunito mb-2 block">
                Mobile Number <span className="text-[#ED0331]">*</span>
              </label>
              <MobileNumberInput
                value={formData}
                onChange={(val) =>
                    handleInput("fullMobile", val.fullMobile) ||
                    handleInput("mobile", val.mobile)
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="text-black text-base md:text-lg font-medium font-nunito mb-2 block">
                Graduation Year <span className="text-[#ED0331]">*</span>
              </label>
              <input 
                placeholder="Graduation Year"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-3 md:py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:border-[#ED0331] focus:ring-2 focus:ring-[#ED0331]/20 transition-all font-nunito text-sm md:text-base"
                value={formData.graduationYear} 
                onChange={(e) => handleInput("graduationYear", e.target.value)} 
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isRegistering || loading}
              className={`mt-2 md:mt-4 flex justify-center items-center gap-2 btn-gradient-red text-white py-3 md:py-4 cursor-pointer rounded-xl font-bold font-nunito text-base md:text-lg transition-all ${
                isRegistering || loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
              }`}
              onClick={submit}
              whileHover={!isRegistering && !loading ? { scale: 1.02 } : {}}
              whileTap={!isRegistering && !loading ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {isRegistering ? (
                <>
                  <motion.div 
                    className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Registering...</span>
                </>
              ) : (
                "Confirm your Registration"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      <MessageModal message={modal.message} type={modal.type} onClose={() => setModal({ message: "", type: "" })} />
      
      {/* Success Modal with Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10001] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center relative"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Success Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <motion.svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              {/* Success Message */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-playfair heading-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Registration Successful!
              </motion.h3>
              
              <motion.p
                className="text-base md:text-lg font-nunito text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                You have successfully registered for the masterclass. A confirmation email has been sent to your email address.
              </motion.p>

              {/* Loading indicator for redirect */}
              <motion.div
                className="flex items-center justify-center gap-2 text-sm font-nunito text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="w-4 h-4 border-2 border-[#ED0331] border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>Redirecting to home...</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegistrationPopup;



