
import React, { useState, useRef, useEffect } from "react";
import AnanyaImg from "../assets/anayasharma.png";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { date } from "yup";


const baseUrl = import.meta.env.VITE_APP_API_URL;

// ---------------- LOADER -----------------
const LoadingOverlay = ({ message }) => (
  <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-[9999] backdrop-blur-sm">
    <div className="w-16 h-16 border-4 border-t-[#ED0331] border-white rounded-full animate-spin mb-6"></div>
    <p className="text-white text-lg font-medium">{message || "Processing..."}</p>
  </div>
);

// ---------------- COMPONENTS -----------------
const EventCard = ({ event, onRegister }) => {
  const imageUrl = `${baseUrl}/${event.bannerImage}`;

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
      <div className="w-full h-52 bg-gray-200 relative">
        <img
          src={imageUrl}
          alt={event.eventTitle}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-6 w-52 h-48 object-cover rounded-lg"
        />
      </div>

      <div className="p-5 flex flex-col gap-3 font-playfair">
        <div className="text-center text-xl font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          {event.eventTitle}
        </div>

        <div
          className="text-black font-semibold text-base text-center"
          style={{ fontSize: "16.6px", lineHeight: "25.83px" }}
        >
          {event.eventSubtitle}
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
          Mentor: {event.mentorName}
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
            {event.scheduleEventDate}
          </div>
          <div>
            <span className="font-semibold">Time: </span>
            {event.scheduleEventTime} PM
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

          {event.registered === undefined ? (
            <span className="text-gray-500 italic">Loading...</span>
          ) : (
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
          )}

          <button
            onClick={() => onRegister(event)}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity duration-300"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};



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
            className={`text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
          className={`text-2xl font-semibold mb-4 ${
            type === "success" ? "text-green-600" : "text-red-600"
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
  const [loading, setLoading] = useState(false);

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
  setLoading(true);

  try {
    
    const masterClassAmount = 1;

    const res = await fetch(`${baseUrl}/api/payments/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "a1b2c3d4e5f6789012345678",
        amount: masterClassAmount,
      }),
    });

    const data = await res.json();
    if (!data.orderId) throw new Error("Failed to create payment order");

    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      name: "VTS Masterclass",
      description: event.eventTitle, // ✅ updated field
      order_id: data.orderId,

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },

      handler: async function (response) {
        try {
          const verifyRes = await fetch(`${baseUrl}/api/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (!verifyData.success)
            throw new Error("Payment verification failed");

          // ✅ Step 1: Send confirmation email
          try {
            await fetch(`${baseUrl}/api/mail/send-mail`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
                query:
                  "🎉 Congratulations! Your Masterclass registration is successful.",
                type: "masterclass",
                data:{
                  meetUrl: event.meetingUrl,
                  date:event.scheduleEventDate,
                  time:event.scheduleEventTime,
                  title:event.eventTitle,
                }
              }), 
            });
          } catch {
            console.warn("Email sending failed but continuing...");
          }

          // ✅ Step 2: Store registration in DB
          const registrationData={
                  masterclassId: event._id, 
                  name: formData.name,
                  email: formData.email,
                  mobile: formData.mobile,
                  graduationYear: formData.graduationYear,
                }
                console.log(registrationData);
          try {
            await fetch(
              `${baseUrl}/api/masterclass/register`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registrationData),
              }
            );
          } catch {
            console.warn("Failed to store in DB but payment worked!");
          }

          setModal({
            message:
              "🎉 Registration successful! Confirmation mail has been sent.",
            type: "success",
          });
        } catch (err) {
          setModal({ message: err.message, type: "error" });
        } finally {
          setLoading(false);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => {
      setModal({ message: "Payment failed. Try again.", type: "error" });
      setLoading(false);
    });
    rzp.open();
  } catch (err) {
    setModal({
      message: err.message || "Something went wrong",
      type: "error",
    });
    setLoading(false);
  }
};


  if (!event) return null;

  return (
    <>
      {loading && <LoadingOverlay message="Processing your registration..." />}

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
              disabled={loading}
              className={`mt-4 flex justify-center items-center gap-2 bg-[#ED0331] text-white py-4 cursor-pointer rounded-xl font-medium hover:bg-[#c20228] ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              onClick={handlePayment}
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
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch masterclass main data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/masterclass/`);
        if (res.data.success && Array.isArray(res.data.data)) {
          setEventsData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Fetch student registration count for each masterclass
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const promises = eventsData.map(event =>
          axios.get(`${baseUrl}/api/masterclass/${event._id}/students/count`)
        );

        const results = await Promise.all(promises);

        const updatedEvents = eventsData.map((event, index) => ({
          ...event,
          registered: results[index]?.data?.totalRegisteredStudents ?? 0,
        }));

        setEventsData(updatedEvents);
      } catch (error) {
        console.error("Error fetching student counts:", error);
      }
    };

    if (eventsData.length > 0) fetchCounts();
  }, [eventsData.length]); // Only runs once after data load

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

      {loading ? (
        <p className="text-lg font-medium">Loading events...</p>
      ) : eventsData.length === 0 ? (
        <p className="text-lg font-medium">No upcoming events available ✅</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {eventsData.map(event => (
            <EventCard key={event._id} event={event} onRegister={setSelectedEvent} />
          ))}
        </div>
      )}

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

