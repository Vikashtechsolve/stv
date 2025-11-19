import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useRazorpayPayment } from "../payment/useRazorpayPayment";
import LoadingOverlay from "../common/LoadingOverlay";
import MessageModal from "../common/MessageModal";
import MobileNumberInput from "../common/MobileNumberInput";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const DoubtSessionForm = ({ plan, onClose }) => {
  const navigate = useNavigate();

  const { handlePayment, loading, setLoading } = useRazorpayPayment(baseUrl);
  const [modal, setModal] = useState({ message: "", type: "" });

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

  // ✅ FIXED — PERFECT PAST DATE + TIME VALIDATION
  const validateDateTime = () => {
    if (!formData.date || !formData.time)
      return "Please select date & time.";

    const today = new Date();
    const selectedDate = new Date(formData.date);
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);

    // Check past dates
    if (selectedDate < new Date(today.toDateString()))
      return "⛔ You cannot choose a past date.";

    // If today, check past time
    const todayDate = today.toISOString().split("T")[0];
    if (formData.date === todayDate) {
      const nowTime = today.getHours() * 60 + today.getMinutes();
      const selectedTime =
        Number(formData.time.split(":")[0]) * 60 +
        Number(formData.time.split(":")[1]);

      if (selectedTime <= nowTime)
        return "⛔ Please choose a future time.";
    }

    return null;
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.fullMobile)
      return "⚠️ Please fill all required fields.";

    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email.";

    if (!/^\+\d{1,4}\d{10,15}$/.test(formData.fullMobile))
      return "Invalid mobile number with country code.";

    return validateDateTime();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setModal({ message: error, type: "error" });
      return;
    }

    // ⭐ PAYMENT ⭐
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

    // ⛔ FIXED — STOP OVERLAY + SHOW POPUP WHEN CANCELED
    if (!paymentResult.success) {
      setLoading(false);

      setModal({
        message: paymentResult.error || "❌ Payment Cancelled",
        type: "error",
      });
      return;
    }

    try {
      // 📩 SEND EMAIL
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

      // 📤 SAVE DATA
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

      setModal({
        message: "🎉 Payment & Registration successful!",
        type: "success",
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setModal({
        message: err.message || "Payment succeeded but saving failed.",
        type: "error",
      });
    }
  };

  return (
    <>
      {loading && <LoadingOverlay message="Processing your payment..." />}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-white/30 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-lg rounded-2xl border border-gray-200 shadow-2xl relative p-6 sm:p-10 overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#ED0331] transition"
            >
              <IoClose size={28} />
            </button>

            {/* UI same */}
            <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-center mb-2">
              Book Your 1:1 Doubt Solving Session
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in the details below to connect with the right mentor
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left font-nunito">
              <div>
                <label className="font-medium text-gray-800">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInput("name", e.target.value)}
                  required
                  placeholder="Enter your Full Name"
                  className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="font-medium text-gray-800">Email-Id *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                  required
                  placeholder="Enter your Email-Id"
                  className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="font-medium text-gray-800">Mobile Number *</label>
                <MobileNumberInput
                  value={{
                    mobile: formData.mobile,
                    countryCode: formData.countryCode,
                  }}
                  onChange={handleMobileChange}
                />
              </div>

              <div>
                <label className="font-medium text-gray-800">Select Subject *</label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInput("subject", e.target.value)}
                  required
                  className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                >
                  <option value="">Select your Subject</option>
                  <option>Data Structures</option>
                  <option>Algorithms</option>
                  <option>Java</option>
                  <option>React</option>
                  <option>Node.js</option>
                </select>
              </div>

              <div>
                <label className="font-medium text-gray-800">Write about Doubt *</label>
                <textarea
                  value={formData.doubt}
                  onChange={(e) => handleInput("doubt", e.target.value)}
                  required
                  placeholder="Explain your doubt in detail"
                  rows="4"
                  className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="font-medium text-gray-800">Schedule Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInput("date", e.target.value)}
                    required
                    className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                  />
                </div>

                <div className="flex-1">
                  <label className="font-medium text-gray-800">Time *</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInput("time", e.target.value)}
                    required
                    className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-gray-800">Selected Plan *</label>
                <input
                  type="text"
                  value={`${plan.title} (${plan.price})`}
                  readOnly
                  className="w-full border bg-gray-100 rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="font-medium text-gray-800">Upload File (Optional)</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg p-2 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-4 bg-[#ED0331] text-white py-4 rounded-xl font-medium hover:bg-[#c20228] ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : "Confirm your Registration"}
              </button>
            </form>

            <MessageModal
              message={modal.message}
              type={modal.type}
              onClose={() => setModal({ message: "", type: "" })}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default DoubtSessionForm;
