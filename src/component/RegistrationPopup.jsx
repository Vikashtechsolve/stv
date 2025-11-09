import React, { useState } from "react";
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
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[640px]">
          <button className="absolute right-5 top-5 text-2xl" onClick={onClose}>×</button>
          <h2 className="text-center text-2xl font-semibold mb-4 font-playfair ">
              Register for  {event.eventTitle} Masterclass
          </h2>
           <p className="text-center mb-6 text-black text-lg font-medium">
           Fill in your details below and reserve your seat
           </p>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-black text-lg font-medium">
                 Name <span className="text-[#ED0331]">*</span>
               </label>
                <input placeholder="Full Name"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none"
                value={formData.name} onChange={(e) => handleInput("name", e.target.value)} />

            </div>



            <div>
               <label className="text-black text-lg font-medium">
                 Email-Id <span className="text-[#ED0331]">*</span>
               </label>
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => handleInput("email", e.target.value)} 
                className="w-full bg-[#FAFBFC]  text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3]"/>
             </div>


            <div>
               <label className="text-black text-lg font-medium">
                 Mobile Number <span className="text-[#ED0331]">*</span>
               </label>
               <MobileNumberInput
                value={formData}
                onChange={(val) =>
                    handleInput("fullMobile", val.fullMobile) ||
                    handleInput("mobile", val.mobile)
                }
                />
             </div>

            <div>
               <label className="text-black text-lg font-medium">
                 Graduation Year <span className="text-[#ED0331]">*</span>
               </label>
                 <input placeholder="Graduation Year"
                    className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3]"
                    value={formData.graduationYear} onChange={(e) => handleInput("graduationYear", e.target.value)} />
             </div>

            <button
                type="submit"
                disabled={loading}
                className={`mt-4 flex justify-center items-center gap-2 bg-[#ED0331] text-white py-4 cursor-pointer rounded-xl font-medium hover:bg-[#c20228] ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={submit}
                >
                {loading ? (
                    <>
                    <div className="w-5 h-5 border-2 border-t-white border-white/40 rounded-full animate-spin"></div>
                    Processing...
                    </>
                ) : (
                    "Confirm your Registration"
                )}
            </button>

          </form>
        </div>
      </div>
      <MessageModal message={modal.message} type={modal.type} onClose={() => setModal({ message: "", type: "" })} />
    </>
  );
};

export default RegistrationPopup;



