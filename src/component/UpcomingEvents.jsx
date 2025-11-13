import React, { useState, useEffect } from "react";
import axios from "axios";
import RegistrationPopup from "../component/RegistrationPopup";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const EventCard = ({ event, onRegister, baseUrl }) => {
  const imageUrl = `${baseUrl}${event.bannerImage}`;

  // Format date from YYYY-MM-DD → DD-MM-YYYY
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">

      <div className="w-full h-52 bg-gray-200 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={event.eventTitle}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-3 font-playfair">
        <div className="text-center text-xl font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          {event.eventTitle}
        </div>

        <div className="text-black font-semibold text-base text-center">
          {event.eventSubtitle}
        </div>

        <div className="text-black text-left text-lg font-semibold">
          Mentor: {event.mentorName}
        </div>

        {/* DATE + TIME */}
        <div className="text-black text-left mt-2 text-[16px] leading-[25px] font-playfair">
          <div>
            <span className="font-semibold">Date: </span>
            {formatDate(event.scheduleEventDate)}
          </div>
          <div>
            <span className="font-semibold">Time: </span>
            {event.scheduleEventTime} PM
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-[15px] font-semibold">Registered:</span>

          {event.registered === undefined ? (
            <span className="text-gray-500 italic">Loading...</span>
          ) : (
            <span className="text-red-600 font-semibold text-[15px]">
              {event.registered} Students
            </span>
          )}

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
};

const UpcomingEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingCounts, setLoadingCounts] = useState(true);

  // ------------------------------
  // 1️⃣ Fetch Masterclass Events
  // ------------------------------
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
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  // ------------------------------
  // 2️⃣ Fetch Registration Count After Events Loaded
  // ------------------------------
  useEffect(() => {
    if (eventsData.length === 0) return;

    const fetchCounts = async () => {
      try {
        const promises = eventsData.map((event) =>
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
      } finally {
        setLoadingCounts(false);
      }
    };

    fetchCounts();
  }, [loadingEvents]); // Runs only when main events finish loading

  // ------------------------------

  return (
    <div className="w-full py-20 px-6 bg-[#E2E2E2] flex flex-col items-center">

      <h2 className="text-5xl font-semibold font-playfair bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent mb-15">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {eventsData
          .filter((e) => e.status === "scheduled")
          .map((event) => (
            <EventCard
              key={event._id}
              event={event}
              baseUrl={baseUrl}
              onRegister={setSelectedEvent}
            />
          ))}
      </div>

      {selectedEvent && (
        <RegistrationPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          baseUrl={baseUrl}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;