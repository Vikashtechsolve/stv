import React, { useState, useRef, useEffect } from "react";
import AnanyaImg from "../assets/anayasharma.png";
import { ChevronDown } from "lucide-react";

// ---------------- DATA -----------------
const eventsData = [
  {
    category: "Mathematics Masterclass",
    topic: "Crack Algebra Concepts in Just 1 Hour",
    mentor: "Arjun Singh",
    date: "30th September, 2025",
    time: "5:00 PM - 6:00 PM",
    registered: 56,
    image: AnanyaImg,
    leftText: "Mastering Core Maths Fundamentals for Competitive Exams",
  },
  {
    category: "Physics Masterclass",
    topic: "Master Newton's Laws in 2 Hours",
    mentor: "Rahul Verma",
    date: "1st October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 42,
    image: AnanyaImg,
    leftText: "Understanding Newtonian Mechanics",
  },
  {
    category: "Chemistry Masterclass",
    topic: "Organic Chemistry Made Easy",
    mentor: "Priya Nair",
    date: "2nd October, 2025",
    time: "4:00 PM - 5:30 PM",
    registered: 47,
    image: AnanyaImg,
    leftText: "Organic Reactions Simplified",
  },
  {
    category: "Biology Masterclass",
    topic: "Human Anatomy Simplified",
    mentor: "Rohan Mehta",
    date: "3rd October, 2025",
    time: "3:00 PM - 4:30 PM",
    registered: 33,
    image: AnanyaImg,
    leftText: "Explore Human Anatomy Basics",
  },
  {
    category: "Computer Science Masterclass",
    topic: "Introduction to Python Programming",
    mentor: "Sneha Kapoor",
    date: "4th October, 2025",
    time: "5:00 PM - 6:30 PM",
    registered: 61,
    image: AnanyaImg,
    leftText: "Start Your Python Journey",
  },
  {
    category: "Statistics Masterclass",
    topic: "Probability Simplified",
    mentor: "Karan Malhotra",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Master Probability Concepts",
  },
];

// ---------------- COMPONENTS -----------------
const EventCard = ({ event, onRegister }) => (
  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
    {/* Top */}
    <div className="w-full h-52 bg-gray-200 relative">
      <div
        className="absolute left-3 top-3 z-10"
        style={{
          color: "#1B1718",
          fontSize: "22.14px",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          lineHeight: "31.36px",
          wordWrap: "break-word",
          maxWidth: "60%",
        }}
      >
        {event.leftText}
      </div>
      <img
        src={event.image}
        alt={event.topic}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-6 w-52 h-48 object-cover rounded-lg"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col gap-3 font-playfair">
      <div className="text-center text-xl font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        {event.category}
      </div>

      <div
        className="text-black font-semibold text-base text-center"
        style={{ fontSize: "16.6px", lineHeight: "25.83px" }}
      >
        {event.topic}
      </div>

      <div
        className="text-black text-left"
        style={{
          fontSize: "18.45px",
          fontWeight: 500,
          lineHeight: "25.83px",
          fontFamily: "Playfair Display",
        }}
      >
        Mentor: {event.mentor}
      </div>

      <div
        className="text-black text-left"
        style={{
          fontSize: "16.6px",
          lineHeight: "25.83px",
          fontFamily: "Playfair Display",
          marginTop: "8px",
        }}
      >
        <div>
          <span className="font-semibold">Date: </span>
          {event.date}
        </div>
        <div>
          <span className="font-semibold">Time: </span>
          {event.time}
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <span
          style={{
            color: "black",
            fontSize: "14.76px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          Registered:
        </span>
        <span
          style={{
            color: "red",
            fontFamily: "Playfair Display",
            fontSize: "14.76px",
            fontWeight: 600,
          }}
        >
          {event.registered} Students
        </span>
        <button
          onClick={() => onRegister(event)}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
);

// ---------------- COUNTRY DROPDOWN -----------------
const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" },
  { code: "+86", flag: "🇨🇳" },
  { code: "+81", flag: "🇯🇵" },
  { code: "+33", flag: "🇫🇷" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+39", flag: "🇮🇹" },
  { code: "+34", flag: "🇪🇸" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+1", flag: "🇨🇦" },
];

function MobileNumberInput({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[2]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-3">
      <div className="relative w-24" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-4 border-2 border-[#ECF0F3] rounded-xl bg-[#FAFBFC] flex items-center justify-between"
        >
          <span className="flex items-center gap-2 text-lg">
            <span>{selectedCountry.flag}</span>
            <span>{selectedCountry.code}</span>
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            {countries.map((c, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setSelectedCountry(c);
                  setIsOpen(false);
                }}
                className="w-full px-3 py-3 text-left hover:bg-red-50 flex items-center gap-2"
              >
                <span className="text-lg">{c.flag}</span>
                <span>{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
        placeholder="Enter your mobile number"
        className="flex-1 w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}

// ---------------- MODAL -----------------
const MessageModal = ({ type, message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-[400px] text-center">
        <h3
          className={`text-2xl font-semibold mb-4 ${type === "success" ? "text-green-600" : "text-red-600"
            }`}
        >
          {type === "success" ? "✅ Success" : "❌ Error"}
        </h3>
        <p className="text-gray-800 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#ED0331] text-white px-6 py-3 rounded-xl hover:bg-[#c20228]"
        >
          OK
        </button>
      </div>
    </div>
  );
};

// ---------------- POPUP -----------------
const RegistrationPopup = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    graduationYear: "",
  });
  const [modal, setModal] = useState({ message: "", type: "" });

  const handleInput = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.graduationYear) {
      setModal({ message: "⚠️ Please fill all required fields.", type: "error" });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setModal({ message: "Invalid email address.", type: "error" });
      return false;
    }
    if (formData.mobile.length < 10) {
      setModal({ message: "Enter a valid 10-digit mobile number.", type: "error" });
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    // Create Razorpay order from backend
    try {
      //ENV
      const baseUrl = "https://vts-backend-ms7k.onrender.com";
      const masterClassAmount=49;


      const res = await fetch(`${baseUrl}/api/payments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "a1b2c3d4e5f6789012345678", amount: masterClassAmount }),
      });
      const data = await res.json();

      if (!data.orderId) throw new Error("Failed to create payment order");

      //Configure Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "VTS Masterclass",
        description: event.topic,
        order_id: data.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },

        handler: async function (response) {
          const verifyRes = await fetch(`${baseUrl}/api/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {

            //On successful payment

            //STORING DATA TO DB

            // ---------   NO APi -----------

            //SENDING GMAIL
            try {
              let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
              }
              //CLCL
              console.log(formData);
              let bodyContent = JSON.stringify({
                "name": formData.name,
                "email": formData.email,
                "phone": formData.mobile,
                "query": "🎉 Congratulations! Your Masterclass registration is successful. Our team will contact you soon with all the details — don’t worry, you’re all set!",
                "type": "general"
              }
              );

              let response = await fetch(`${baseUrl}/api/mail/send-mail`, {
                method: "POST",
                body: bodyContent,
                headers: headersList
              });

              let data = await response.text();
              console.log(data);

            } catch {
              setModal({
                message:
                  "Problem in sending mail",
                   type: "failed",
              });
            }
            setModal({
              message:
                "🎉 Registration successful! Confirmation mail has been sent.",
              type: "success",
            });
          } else {
            throw new Error("Payment verification failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () =>
        setModal({ message: "Payment failed. Try again.", type: "error" })
      );
      rzp.open();
    } catch (err) {
      setModal({ message: err.message || "Something went wrong", type: "error" });
    }
  };

  if (!event) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[640px] max-h-[85vh] overflow-y-auto">
          <button
            className="absolute right-5 top-5 text-gray-500 hover:text-black text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>

          <h2 className="text-center mb-2 text-black text-2xl font-semibold">
            Register for Your Masterclass
          </h2>
          <p className="text-center mb-6 text-black text-lg font-medium">
            Fill in your details below and reserve your seat
          </p>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-black text-lg font-medium">
                Name <span className="text-[#ED0331]">*</span>
              </label>
              <input
                value={formData.name}
                onChange={(e) => handleInput("name", e.target.value)}
                placeholder="Enter your Full Name"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none"
              />
            </div>

            <div>
              <label className="text-black text-lg font-medium">
                Email-Id <span className="text-[#ED0331]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInput("email", e.target.value)}
                placeholder="Enter your Email-Id"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3]"
              />
            </div>

            <div>
              <label className="text-black text-lg font-medium">
                Mobile Number <span className="text-[#ED0331]">*</span>
              </label>
              <MobileNumberInput
                value={formData.mobile}
                onChange={(val) => handleInput("mobile", val)}
              />
            </div>

            <div>
              <label className="text-black text-lg font-medium">
                Graduation Year <span className="text-[#ED0331]">*</span>
              </label>
              <input
                value={formData.graduationYear}
                onChange={(e) => handleInput("graduationYear", e.target.value)}
                placeholder="Year of Graduation"
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#ED0331] text-white py-4 rounded-xl font-medium hover:bg-[#c20228]"
              onClick={handlePayment}
            >
              Confirm your Registration
            </button>
          </form>
        </div>
      </div>

      <MessageModal
        message={modal.message}
        type={modal.type}
        onClose={() => setModal({ message: "", type: "" })}
      />
    </>
  );
};

// ---------------- MAIN -----------------
const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full py-20 px-6 bg-[#E2E2E2] flex flex-col items-center">
      <h2
        className="text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent"
        style={{
          fontSize: "48px",
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
        }}
      >
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData.map((event, index) => (
          <EventCard key={index} event={event} onRegister={setSelectedEvent} />
        ))}
      </div>

      {selectedEvent && (
        <RegistrationPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;
