import React from "react";
import AnanyaImg from "../assets/anayasharma.png"; // single image for all events

const pastEventsData = [
  {
    title: "Competitive Programming Expert Masterclass",
    leftText: "Level Up in Competitive Programming & Contests",
    topic: "Level Up in Competitive Programming & Contests",
    mentor: "Ankit Verma",
    date: "28th September, 2025",
    duration: "60 minutes",
    attendedBy: "50+ Students",
    image: AnanyaImg,
  },
  {
    title: "Data Structures & Algorithms Masterclass",
    leftText: "Master DSA for Interviews",
    topic: "Comprehensive DSA Concepts",
    mentor: "Priya Sharma",
    date: "20th August, 2025",
    duration: "90 minutes",
    attendedBy: "75+ Students",
    image: AnanyaImg,
  },
  {
    title: "Machine Learning Fundamentals",
    leftText: "Introduction to ML Concepts",
    topic: "Basic ML Algorithms Explained",
    mentor: "Rohan Mehta",
    date: "15th July, 2025",
    duration: "120 minutes",
    attendedBy: "60+ Students",
    image: AnanyaImg,
  },
   {
    title: "Competitive Programming Expert Masterclass",
    leftText: "Level Up in Competitive Programming & Contests",
    topic: "Level Up in Competitive Programming & Contests",
    mentor: "Ankit Verma",
    date: "28th September, 2025",
    duration: "60 minutes",
    attendedBy: "50+ Students",
    image: AnanyaImg,
  },
  {
    title: "Data Structures & Algorithms Masterclass",
    leftText: "Master DSA for Interviews",
    topic: "Comprehensive DSA Concepts",
    mentor: "Priya Sharma",
    date: "20th August, 2025",
    duration: "90 minutes",
    attendedBy: "75+ Students",
    image: AnanyaImg,
  },
  {
    title: "Machine Learning Fundamentals",
    leftText: "Introduction to ML Concepts",
    topic: "Basic ML Algorithms Explained",
    mentor: "Rohan Mehta",
    date: "15th July, 2025",
    duration: "120 minutes",
    attendedBy: "60+ Students",
    image: AnanyaImg,
  },
];

const PastEventCard = ({ event }) => {
  return (
    <div className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden mx-auto mb-10 
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Top Background */}
      <div className="w-full h-52 bg-gray-200 relative">
        {/* Top-left title */}
        <div
          className="absolute left-3 top-3 text-[#1B1718] font-playfair font-bold"
          style={{ fontSize: "20.97px", lineHeight: "29.71px", maxWidth: "60%" }}
        >
          {event.leftText}
        </div>

        {/* Event Image */}
        <img
          src={event.image}
          alt={event.topic}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 w-48 h-44 object-cover rounded-lg"
        />
      </div>

      {/* Bottom Content */}
      <div className="p-5 relative font-playfair">
        {/* Event Title */}
        <div className="text-center text-lg font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          {event.title}
        </div>

        {/* Topic Covered */}
        <div className="text-black text-center font-semibold mb-2" style={{ fontSize: "15.73px", lineHeight: "24.47px" }}>
          Topic Covered : {event.topic}
        </div>

        {/* Mentor */}
        <div className="text-black font-medium mb-2" style={{ fontSize: "17.48px", lineHeight: "24.47px" }}>
          Mentor : {event.mentor}
        </div>

        {/* Date & Duration */}
        <div className="flex gap-2 mb-2">
          <div className="text-black font-medium" style={{ fontSize: "15.73px" }}>
            Date:
          </div>
          <div className="text-black/70 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.date}
          </div>
        </div>
        <div className="flex gap-2 mb-2">
          <div className="text-black font-medium" style={{ fontSize: "15.73px" }}>
            Duration:
          </div>
          <div className="text-black/70 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.duration}
          </div>
        </div>

        {/* Attended by */}
        <div className="flex gap-2 items-center mb-4">
          <div className="text-black font-medium" style={{ fontSize: "13.98px" }}>
            Attended by:
          </div>
          <div className="text-red-600 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.attendedBy}
          </div>
        </div>

        {/* Watch Now Button */}
        <div className=" w-full flex justify-center">
          <button className="bg-gray-200 border w-[70%] border-gray-400 rounded-xl px-6 py-2 font-playfair font-medium text-black text-base hover:bg-gray-300 transition">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

const PastEventsPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#E2E2E2] py-20 px-6 flex flex-col items-center">
      {/* Page Header */}
      <h1
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
        Past Events
      </h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {pastEventsData.map((event, index) => (
          <PastEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEventsPage;
