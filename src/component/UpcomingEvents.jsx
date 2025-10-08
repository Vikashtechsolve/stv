import React, { useState } from "react";
import AnanyaImg from "../assets/anayasharma.png";

// ---------------------------
// Events Data
// ---------------------------
const eventsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    category: "Statistics Masterclass",
    topic: "Probability Simplified",
    mentor: "Karan Malhotra",
    date: "5th October, 2025",
    time: "2:00 PM - 3:30 PM",
    registered: 28,
    image: AnanyaImg,
    leftText: "Master Probability Concepts",
  },
];

// ---------------------------
// Individual Event Card
// ---------------------------
const EventCard = ({ event, onRegister }) => (
  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
    <div className="w-full h-52 bg-gray-200 relative">
      <div
        className="absolute left-3 top-3 z-10"
        style={{
          color: "#1B1718",
          fontSize: "22.14px",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          lineHeight: "31.36px",
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

    <div className="p-5 flex flex-col gap-3 font-playfair">
      <div className="text-center text-lg font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
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
        className="text-black text-left mt-2"
        style={{
          fontSize: "16.6px",
          lineHeight: "25.83px",
          fontFamily: "Playfair Display",
        }}
      >
        <div>
          <span className="font-semibold">Date: </span>
          <span className="font-normal">{event.date}</span>
        </div>
        <div>
          <span className="font-semibold">Time: </span>
          <span className="font-normal">{event.time}</span>
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
          className="bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          style={{
            fontFamily: "Playfair Display",
            fontSize: "19.06px",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
);

// ---------------------------
// Registration Popup (Centered + Animated)
// ---------------------------
const RegistrationPopup = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-8 w-[640px] max-h-[85vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-fadeIn"
        style={{
          border: "1px solid #E0E0E0",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute right-5 top-5 text-gray-500 hover:text-black text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        {/* Header */}
        <h2
          className="text-center mb-2"
          style={{
            color: "black",
            fontSize: "24px",
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          Register for Your Masterclass
        </h2>
        <p
          className="text-center mb-6"
          style={{
            color: "black",
            fontSize: "18px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Fill in your details below and reserve your seat for the live session
        </p>

        {/* Input Fields */}
        <form className="flex flex-col gap-5">
          {[
            { label: "Name", placeholder: "Enter your Full Name" },
            { label: "Email-Id", placeholder: "Enter your Email-Id" },
            { label: "Mobile Number", placeholder: "Enter your mobile number" },
            { label: "Graduation Year", placeholder: "Year of Graduation" },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                {field.label} <span className="text-[#ED0331]">*</span>
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
                style={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="button"
            className="mt-4 bg-[#ED0331] text-white py-4 rounded-xl font-medium hover:bg-[#c20228] transition-all"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            Confirm your Registration
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------------------
// Main Component
// ---------------------------
const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full py-20 px-6 bg-white flex flex-col items-center relative">
      <h2
        style={{
          fontSize: "48px",
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
          lineHeight: "64.05px",
          textAlign: "center",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #ED0331, #87021C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} onRegister={setSelectedEvent} />
        ))}
      </div>

      {/* Centered Popup */}
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
