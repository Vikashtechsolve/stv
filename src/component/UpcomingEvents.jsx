import React, { useState, useEffect } from "react";
import axios from "axios";
import RegistrationPopup from "../component/RegistrationPopup";

const baseUrl = import.meta.env.VITE_APP_API_URL;


const EventCard = ({ event, onRegister,baseUrl }) => {
  const imageUrl = `${baseUrl}${event.bannerImage}`;

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">
      <div className="w-full h-52 bg-gray-200 relative">
        <img
          src={imageUrl}
          alt={event.eventTitle}
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
    <div className="w-full py-20 px-6 bg-[#E2E2E2] flex  flex-col items-center">
      <h2 className="text-5xl font-semibold font-playfair   bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent mb-15">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData
          .filter((e) => e.status === "scheduled")
          .map((event) => (
            <EventCard key={event._id} event={event} baseUrl={baseUrl} onRegister={setSelectedEvent} />
          ))}
      </div>

      {selectedEvent && (
        <RegistrationPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} baseUrl={baseUrl} />
      )}
    </div>
  );
};

export default UpcomingEvents;
