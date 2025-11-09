import React from "react";
import AnanyaImg from "../assets/anayasharma.png"; // single image for all events
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const PastEventCard = ({ event }) => {
   const imageUrl = `${baseUrl}${event.bannerImage}`;
  return (
    <div className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden mx-auto mb-10 
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Top Background */}
      <div className="w-full h-52 bg-gray-200 relative">
        <img
          src={imageUrl}
          alt={event.eventTitle}
        />
      </div>

      {/* Bottom Content */}
      <div className="p-5 relative font-playfair">
        {/* Event Title */}
        <div className="text-center text-lg font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          {event.eventTitle}
        </div>

        {/* Topic Covered */}
        <div className="text-black text-center font-semibold mb-2" style={{ fontSize: "15.73px", lineHeight: "24.47px" }}>
          Topic Covered : {event.eventSubtitle}
        </div>

        {/* Mentor */}
        <div className="text-black font-medium mb-2" style={{ fontSize: "17.48px", lineHeight: "24.47px" }}>
          Mentor : {event.mentorName}
        </div>

        {/* Date & Duration */}
        <div className="flex gap-2 mb-2">
          <div className="text-black font-medium" style={{ fontSize: "15.73px" }}>
            Date:
          </div>
          <div className="text-black/70 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.scheduleEventDate}
          </div>
        </div>
        <div className="flex gap-2 mb-2">
          <div className="text-black font-medium" style={{ fontSize: "15.73px" }}>
            Time:
          </div>
          <div className="text-black/70 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.scheduleEventTime} PM
          </div>
        </div>

        {/* Attended by */}
        <div className="flex gap-2 items-center mb-4">
          <div className="text-black font-medium" style={{ fontSize: "13.98px" }}>
            Attended by:
          </div>
          <div className="text-red-600 font-semibold" style={{ fontSize: "13.98px" }}>
            {event.registered} Students
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

  const [eventsData, setEventsData] = useState([]);
 

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
        {eventsData.map((event) => (
          event.status === "completed" && <PastEventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEventsPage;
