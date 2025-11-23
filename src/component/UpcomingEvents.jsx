import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import RegistrationPopup from "../component/RegistrationPopup";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const EventCard = ({ event, onRegister, baseUrl }) => {
  const imageUrl = `${event.bannerImage}`;

  // Format date from YYYY-MM-DD → DD Month YYYY (compact)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = parseInt(month) - 1;
    return `${parseInt(day)} ${monthNames[monthIndex]} ${year}`;
  };

  return (
    <motion.div
      className="relative bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-sm mx-auto cursor-pointer group border border-gray-200/50 hover:border-[#ED0331]/40 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -6 }}
    >
      {/* Image Section with Enhanced Gradient Overlay */}
      <div className="w-full h-60 bg-gray-200 relative overflow-hidden group/image">
        <motion.img
          src={imageUrl}
          alt={event.eventTitle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/10 group-hover:from-black/80 transition-all duration-300" />
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        {/* Event Title Over Image */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair mb-2 drop-shadow-2xl line-clamp-2 leading-tight group-hover:drop-shadow-2xl transition-all">
            {event.eventTitle}
          </h3>
        </div>

        {/* Status Badge with Enhanced Style */}
        <motion.div 
          className="absolute top-3 right-3 bg-[#ED0331] text-white px-3 py-1 rounded-full text-xs font-semibold font-nunito shadow-xl backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Upcoming
          </span>
        </motion.div>
      </div>

      {/* Content Section - Enhanced Styling */}
      <div className="p-4 md:p-5 flex flex-col gap-3 bg-white relative">
        {/* Subtle Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ED0331]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Event Subtitle */}
        <div className="pb-2 border-b border-gray-200/80">
          <p className="text-sm font-semibold font-nunito text-gray-700 leading-tight line-clamp-2">
            {event.eventSubtitle}
          </p>
        </div>

        {/* Mentor Info */}
        <div className="flex items-center gap-3 pb-2 border-b border-gray-200/80">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-bold font-nunito text-sm shadow-md ring-1 ring-gray-300/50 group-hover:ring-[#ED0331]/20 transition-all">
            {event.mentorName?.charAt(0) || "M"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 font-nunito font-medium">Mentor</p>
            <p className="text-sm md:text-base font-semibold font-nunito text-black truncate">
              {event.mentorName}
            </p>
          </div>
        </div>

        {/* Date & Time Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2.5 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow group-hover:border-gray-300">
            <p className="text-xs text-gray-500 font-nunito mb-1">📅 Date</p>
            <p className="text-xs font-semibold font-nunito text-black leading-tight">
              {formatDate(event.scheduleEventDate)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2.5 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow group-hover:border-gray-300">
            <p className="text-xs text-gray-500 font-nunito mb-1">🕐 Time</p>
            <p className="text-xs font-semibold font-nunito text-black">
              {event.scheduleEventTime} PM
            </p>
          </div>
        </div>

        {/* Registered Count & Button */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200/80">
          <div className="flex items-center gap-2">
            {event.registered !== undefined && event.registered !== null ? (
              <>
                <div className="w-2 h-2 rounded-full bg-[#ED0331] shadow-sm ring-2 ring-[#ED0331]/20"></div>
                <span className="text-xs font-semibold font-nunito text-black">
                  <span className="text-[#ED0331] font-bold">{event.registered}</span>{" "}
                  <span className="text-gray-600">registered</span>
                </span>
              </>
            ) : (
              <span className="text-xs text-gray-400 font-nunito">Loading...</span>
            )}
          </div>

          <motion.button
            onClick={() => onRegister(event)}
            className="btn-gradient-red px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold font-nunito whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now →
          </motion.button>
        </div>
      </div>
    </motion.div>
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
        const scheduledEvents = eventsData.filter((e) => e.status === "scheduled" && e._id);
        
        if (scheduledEvents.length === 0) {
          setLoadingCounts(false);
          return;
        }

        const promises = scheduledEvents.map((event) =>
          axios.get(`${baseUrl}/api/masterclass/${event._id}/students/count`).catch(() => {
            return { data: { totalRegisteredStudents: 0 } };
          })
        );

        const results = await Promise.all(promises);

        setEventsData((prevEvents) => {
          return prevEvents.map((event) => {
            if (event.status === "scheduled" && event._id) {
              const eventIndex = scheduledEvents.findIndex((e) => e._id === event._id);
              if (eventIndex !== -1) {
                return {
                  ...event,
                  registered: results[eventIndex]?.data?.totalRegisteredStudents ?? 0,
                };
              }
            }
            return event;
          });
        });
      } catch (error) {
        console.error("Error fetching student counts:", error);
        setEventsData((prevEvents) =>
          prevEvents.map((event) => ({
            ...event,
            registered: event.status === "scheduled" ? 0 : event.registered,
          }))
        );
      } finally {
        setLoadingCounts(false);
      }
    };

    fetchCounts();
  }, [eventsData.length]);

  // ------------------------------

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#E2E2E2] flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Section Title */}
      <motion.h2
        className="heading-section mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Upcoming Events
      </motion.h2>

      {/* Events Grid with Stagger Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl relative z-10">
        {loadingEvents ? (
          <div className="col-span-full text-center py-12">
            <div className="text-black font-nunito text-lg">Loading events...</div>
          </div>
        ) : eventsData.filter((e) => e.status === "scheduled").length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-black font-nunito text-lg md:text-xl">No upcoming events at the moment. Check back soon!</p>
          </div>
        ) : (
          eventsData
            .filter((e) => e.status === "scheduled")
            .map((event, index) => (
              <EventCard
                key={event._id}
                event={event}
                baseUrl={baseUrl}
                onRegister={setSelectedEvent}
              />
            ))
        )}
      </div>

      {selectedEvent && (
        <RegistrationPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          baseUrl={baseUrl}
        />
      )}
    </section>
  );
};

export default UpcomingEvents;