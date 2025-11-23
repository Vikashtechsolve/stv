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

    const paymentResult = await handlePayment({
      amount: event.amount || 1,
      prefill: {
        userId:event._id,
        name: formData.name,
        email: formData.email,
        contact: formData.fullMobile,
      },
      description: event.eventTitle,
    });

    if (!paymentResult.success) {
      setModal({ message: paymentResult.error || "Payment failed", type: "error" });
      return;
    }

  //  ✅ Payment success → Now do what you want
    try {
    // Example 1: Send confirmation email
      await fetch(`${baseUrl}/api/mail/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.fullMobile,
          query: "🎉 Registration successful for masterclass",
          type: "masterclass", // could also be "workshop" or "course"
          data: {
            meetUrl: event.meetingUrl,
            date: event.scheduleEventDate,
            time: event.scheduleEventTime,
            title: event.eventTitle,
          },
        }),
      });

      // Example 2: Save registration (optional)
    try {
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
            body: JSON.stringify(registrationFrom), // ❗ no extra { }
        });
    } catch (err) {
            console.error("❌ Registration API Error:", err.message);
            alert(`Error: ${err.message}`);
    }


      setModal({ message: "🎉 Payment & Registration successful!", type: "success" });
      setTimeout(() => {
        navigate("/")
      }, 2000);
    } catch (err) {
      setModal({ message: "Payment succeeded but post-actions failed.", type: "error" });
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
              disabled={loading}
              className={`mt-2 md:mt-4 flex justify-center items-center gap-2 btn-gradient-red text-white py-3 md:py-4 cursor-pointer rounded-xl font-bold font-nunito text-base md:text-lg hover:scale-105 transition-transform ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              onClick={submit}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                "Confirm your Registration"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      <MessageModal message={modal.message} type={modal.type} onClose={() => setModal({ message: "", type: "" })} />
    </>
  );
};

export default RegistrationPopup;



