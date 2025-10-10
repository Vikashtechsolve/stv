import React, { useState } from "react";
import AnanyaImg from "../assets/anayasharma.png";

// ---------------------------
// Events Data
// ---------------------------
const eventsData = [
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },
  {
    id: 1,
    category: "Data Structures & Algorithms Masterclass",
    topic: "Crack Coding Interviews with Data Structures & Algorithms",
    mentor: "Rahul Mehta",
    date: "5th October, 2025",
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Unlock 2 Hours of Live Coding",
  },

];

// ---------------------------
// Event Card
// ---------------------------
const EventCard = ({ event, onRegister }) => (
  <div className="relative bg-white rounded-[20px] shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
    {/* Top Banner */}
    <div className="relative w-full h-48 bg-[#EDEDED]">
      <div
        className="absolute left-3 top-3 max-w-[60%] text-[#1B1718]"
        style={{
          fontSize: "19.8px",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          lineHeight: "28px",
        }}
      >
        {event.topic}
      </div>
      <img
        src={event.image}
        alt={event.topic}
        className="absolute right-4 top-6 w-40 h-44 object-cover rounded-lg"
      />
    </div>

    {/* Event Details */}
    <div className="p-5">
      <div
        className="text-center underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent mb-2"
        style={{
          fontFamily: "Playfair Display",
          fontSize: "16.1px",
          fontWeight: 600,
        }}
      >
        {event.category}
      </div>

      <div
        className="text-center text-black mb-2"
        style={{
          fontSize: "14.8px",
          fontFamily: "Playfair Display",
          fontWeight: 600,
          lineHeight: "23px",
        }}
      >
        Topic : {event.topic}
      </div>

      <div
        className="flex flex-col items-start gap-1 mt-2 text-black"
        style={{
          fontSize: "16.5px",
          fontFamily: "Playfair Display",
          fontWeight: 500,
          lineHeight: "35px",
        }}
      >
        Mentor : {event.mentor}
      </div>

      <div
        className="flex flex-col items-start gap-1 mt-2 text-black"
        style={{ fontFamily: "Playfair Display" }}
      >
        <div className="flex items-center gap-1">
          <span className="font-medium text-[14.8px]">Date:</span>
          <span className="font-normal text-[13.2px]">{event.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-[14.8px]">Time:</span>
          <span className="font-normal text-[13.2px]">{event.time}</span>
        </div>
      </div>

      {/* Unlock Section */}
<div className="mt-4 flex justify-end px-2">
  <div
    className="bg-gray-200 rounded-lg px-3 py-2 flex justify-center items-center text-center"
    style={{
      color: "#ED0331",
      fontFamily: "Playfair Display, serif",
      fontSize: "11.5px",
      fontWeight: 600,
      lineHeight: "16.5px",
    }}
  >
    {event.leftText}
  </div>
</div>


      {/* Divider */}
      <hr className="my-3 border-[#E0E0E0]" />

      {/* Footer Row */}
      <div className="flex justify-between items-center">
        <span
          style={{
            color: "#1B1718",
            fontSize: "13.2px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          Registered:
        </span>
        <span
          style={{
            color: "rgba(0,0,0,0.6)",
            fontSize: "13.2px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          {event.registered} Students
        </span>
        <button
          onClick={() => onRegister(event)}
          className="bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:opacity-90 transition"
          style={{
            fontFamily: "Nunito Sans",
            fontSize: "17px",
            fontWeight: 600,
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
);

// ---------------------------
// Registration Popup (Responsive)
// ---------------------------
const RegistrationPopup = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 sm:px-6">
      <div
        className="
          relative bg-white rounded-3xl shadow-2xl 
          p-6 sm:p-8 
          w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[640px]
          max-h-[90vh] overflow-y-auto
          transition-all duration-300
        "
      >
        <button
          className="absolute right-5 top-5 text-gray-500 hover:text-black text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2">
          Register for Your Masterclass
        </h2>
        <p className="text-center text-base sm:text-lg mb-6">
          Fill in your details below and reserve your seat for the live session
        </p>

        <form className="flex flex-col gap-5">
          {[
            { label: "Name", placeholder: "Enter your Full Name" },
            { label: "Email-Id", placeholder: "Enter your Email-Id" },
            { label: "Mobile Number", placeholder: "Enter your mobile number" },
            { label: "Graduation Year", placeholder: "Year of Graduation" },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-base sm:text-lg font-medium text-black">
                {field.label} <span className="text-[#ED0331]">*</span>
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="bg-[#FAFBFC] text-gray-700 px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
              />
            </div>
          ))}

          <button
            type="button"
            className="mt-4 bg-[#ED0331] text-white py-3 sm:py-4 rounded-xl font-medium hover:bg-[#c20228] text-base sm:text-lg"
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
    <div className="w-full py-20 px-6 bg-white flex flex-col items-center">
      <h2
        className="text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent"
        style={{
          fontSize: "48px",
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
          lineHeight: "64px",
        }}
      >
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} onRegister={setSelectedEvent} />
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
