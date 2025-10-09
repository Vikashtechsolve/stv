import React from "react";
import AnanyaImg from "../assets/anayasharma.png"; // single image for all events

// ✅ Dynamic events
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
    time: "2:00 PM - 3:30 PM",
    registered: 28,
    image: AnanyaImg,
    leftText: "Master Probability Concepts",
  }
];

const EventCard = ({ event }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
      
      {/* Top Image Section */}
      <div className="w-full h-52 bg-gray-200 relative">
        {/* Top-left dynamic text */}
        <div
          className="absolute left-3 top-3 z-10"
          style={{
            color: "#1B1718",
            fontSize: "22.14px",
            fontFamily: "Playfair Display",
            fontWeight: 700,
            lineHeight: "31.36px",
            wordWrap: "break-word",
            maxWidth: "60%", // wrap long text
          }}
        >
          {event.leftText}
        </div>

        {/* Event Image (slightly shifted right) */}
        <img
          src={event.image}
          alt={event.topic}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-6 w-52 h-48 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3  font-playfair">
        {/* Category */}
        <div className="text-center text-xl font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          {event.category}
        </div>

        {/* Topic */}
        <div
          className="text-black font-semibold text-base text-center"
          style={{ fontSize: "16.6px", lineHeight: "25.83px" }}
        >
          {event.topic}
        </div>

        {/* Mentor */}
        <div
          className="text-black text-left"
          style={{
            fontSize: "18.45px",
            fontWeight: 500,
            lineHeight: "25.83px",
            fontFamily: "Playfair Display",
            wordWrap: "break-word",
          }}
        >
          Mentor: {event.mentor}
        </div>

        {/* Date & Time */}
        <div
          className="text-black text-left"
          style={{
            fontSize: "16.6px",
            lineHeight: "25.83px",
            fontFamily: "Playfair Display",
            wordWrap: "break-word",
            marginTop: "8px",
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

        {/* Registered Students & Button */}
        <div className="  mt-3 flex justify-between gap-0 items-center">
          <span
            style={{
              
              color: "black",
              fontSize: "14.76px",
              fontFamily: "Playfair Display",
              fontWeight: 600,
              lineHeight: "25.83px",
              wordWrap: "break-word",
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
              lineHeight: "25.83px",
              wordWrap: "break-word",
            }}
          >
            {event.registered} Students
          </span>

          <button
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "19.06px",
              lineHeight: "27.83px",
              wordWrap: "break-word",
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="w-full py-20 px-6 bg-[#E2E2E2] flex flex-col items-center">
      {/* Header */}
      <h2
        style={{
          fontSize: "48px",
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
          lineHeight: "64.05px",
          textAlign: "center",
          marginBottom: "40px",
          wordWrap: "break-word",
          background: "linear-gradient(90deg, #ED0331, #87021C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Upcoming Events
      </h2>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
