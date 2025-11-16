import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
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
            !formData.mobile ||
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

        const paymentResult = await handlePayment({
            amount:1,// 199,
            prefill: {
                userId: "6730b6d8e29f4b001f6f91d1",
                name: formData.name,
                email: formData.email,
                contact: formData.mobile,
            },
            description: `1:1 Mentorship with ${mentor.name}`,
        });

        if (!paymentResult.success) {
            setModal({
                message: paymentResult.error || "Payment failed.",
                type: "error",
            });
            return;
        }

        try {
            // Example 1: Send confirmation email
            await fetch(`${baseUrl}/api/mail/send-mail`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.mobile,
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

            // Example 2: Save booking to database
            const form = new FormData();
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("mobile", formData.mobile);
            form.append("subject", mentor.subject);
            form.append("query", formData.doubt);
            form.append("date", formData.date);
            form.append("time", formData.time);
            form.append("mentorName", mentor.name);
            form.append("status", "pending");
            if (formData.file) form.append("file", formData.file);

            await fetch(`${baseUrl}/api/mentorship/register`, {
                method: "POST",
                body: form,
            });

            setModal({
                message: "🎉 Mentorship session booked successfully!",
                type: "success",
            });
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            setModal({
                message: "Payment succeeded but booking failed.",
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
                        {/* ❌ Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-[#ED0331] transition"
                        >
                            <IoClose size={28} />
                        </button>

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-center mb-2">
                            1:1 Mentorship Session
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                            Fill in your details to connect with <b>{mentor.name}</b>
                        </p>

                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 text-left font-nunito"
                        >
                            {/* Name */}
                            <div>
                                <label className="font-medium text-gray-800">Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => handleInput("name", e.target.value)}
                                    placeholder="Enter your Full Name"
                                    className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="font-medium text-gray-800">Email-Id *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleInput("email", e.target.value)}
                                    placeholder="Enter your Email"
                                    className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="font-medium text-gray-800">
                                    Mobile Number *
                                </label>
                                <MobileNumberInput
                                    value={formData}
                                    onChange={(val) =>
                                        handleInput("mobile", val.mobile) ||
                                        handleInput("fullMobile", val.fullMobile)
                                    }
                                />
                            </div>

                            {/* Topic */}
                            <div>
                                <label className="font-medium text-gray-800">Topic *</label>
                                <input
                                    type="text"
                                    readOnly
                                    required
                                    value={mentor.subject}
                                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-1 cursor-not-allowed"
                                />
                            </div>

                            {/* Mentor */}
                            <div>
                                <label className="font-medium text-gray-800">Mentor *</label>
                                <input
                                    type="text"
                                    readOnly
                                    required
                                    value={mentor.name}
                                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-1 cursor-not-allowed"
                                />
                            </div>

                            {/* Query */}
                            <div>
                                <label className="font-medium text-gray-800">Your Query *</label>
                                <textarea
                                    rows="4"
                                    required
                                    placeholder="Describe your goal or query"
                                    value={formData.doubt}
                                    onChange={(e) => handleInput("doubt", e.target.value)}
                                    className="w-full bg-[#FAFBFC] border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                />
                            </div>

                            {/* Date & Time */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="font-medium text-gray-800">
                                        Schedule Date *
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => handleInput("date", e.target.value)}
                                        className="w-full border bg-[#FAFBFC] border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="font-medium text-gray-800">Time *</label>
                                    <input
                                        type="time"
                                        required
                                        value={formData.time}
                                        onChange={(e) => handleInput("time", e.target.value)}
                                        className="w-full border bg-[#FAFBFC] border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                    />
                                </div>
                            </div>

                            {/* File Upload (Optional) */}
                            <div>
                                <label className="font-medium text-gray-800">
                                    Upload File (Optional)
                                </label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="block w-full text-gray-700 border border-gray-300 rounded-lg bg-[#FAFBFC] p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`mt-4 flex justify-center items-center gap-2 bg-[#ED0331] text-white py-4 cursor-pointer rounded-xl font-medium hover:bg-[#c20228] ${loading ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    "Confirm Your Session"
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* ✅ Message Modal */}
                    <MessageModal
                        message={modal.message}
                        type={modal.type}
                        onClose={() => setModal({ message: "", type: "" })}
                    />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default MentorSessionForm;
