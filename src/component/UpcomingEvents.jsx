


// import React, { useState, useRef, useEffect } from "react";
// import AnanyaImg from "../assets/anayasharma.png"; // single image for all events
// import { ChevronDown } from 'lucide-react';
// import RazorpayPayment from "../utils/RazorpayPayment";

// // ✅ Dynamic events
// const eventsData = [
//   {
//     category: "Mathematics Masterclass",
//     topic: "Crack Algebra Concepts in Just 1 Hour",
//     mentor: "Arjun Singh",
//     date: "30th September, 2025",
//     time: "5:00 PM - 6:00 PM",
//     registered: 56,
//     image: AnanyaImg,
//     leftText: "Mastering Core Maths Fundamentals for Competitive Exams",
//   },
//   {
//     category: "Physics Masterclass",
//     topic: "Master Newton's Laws in 2 Hours",
//     mentor: "Rahul Verma",
//     date: "1st October, 2025",
//     time: "6:00 PM - 8:00 PM",
//     registered: 42,
//     image: AnanyaImg,
//     leftText: "Understanding Newtonian Mechanics",
//   },
//   {
//     category: "Chemistry Masterclass",
//     topic: "Organic Chemistry Made Easy",
//     mentor: "Priya Nair",
//     date: "2nd October, 2025",
//     time: "4:00 PM - 5:30 PM",
//     registered: 47,
//     image: AnanyaImg,
//     leftText: "Organic Reactions Simplified",
//   },
//   {
//     category: "Biology Masterclass",
//     topic: "Human Anatomy Simplified",
//     mentor: "Rohan Mehta",
//     date: "3rd October, 2025",
//     time: "3:00 PM - 4:30 PM",
//     registered: 33,
//     image: AnanyaImg,
//     leftText: "Explore Human Anatomy Basics",
//   },
//   {
//     category: "Computer Science Masterclass",
//     topic: "Introduction to Python Programming",
//     mentor: "Sneha Kapoor",
//     date: "4th October, 2025",
//     time: "5:00 PM - 6:30 PM",
//     registered: 61,
//     image: AnanyaImg,
//     leftText: "Start Your Python Journey",
//   },
//   {
//     category: "Statistics Masterclass",
//     topic: "Probability Simplified",
//     mentor: "Karan Malhotra",
//     date: "5th October, 2025",
//     time: "6:00 PM - 8:00 PM",
//     registered: 60,
//     image: AnanyaImg,
//     leftText: "Master Probability Concepts",
//   }
// ];

// const EventCard = ({ event, onRegister }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">

//       {/* Top Image Section */}
//       <div className="w-full h-52 bg-gray-200 relative">
//         {/* Top-left dynamic text */}
//         <div
//           className="absolute left-3 top-3 z-10"
//           style={{
//             color: "#1B1718",
//             fontSize: "22.14px",
//             fontFamily: "Playfair Display",
//             fontWeight: 700,
//             lineHeight: "31.36px",
//             wordWrap: "break-word",
//             maxWidth: "60%", // wrap long text
//           }}
//         >
//           {event.leftText}
//         </div>

//         {/* Event Image (slightly shifted right) */}
//         <img
//           src={event.image}
//           alt={event.topic}
//           className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-6 w-52 h-48 object-cover rounded-lg"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col gap-3  font-playfair">
//         {/* Category */}
//         <div className="text-center text-xl font-semibold underline bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
//           {event.category}
//         </div>

//         {/* Topic */}
//         <div
//           className="text-black font-semibold text-base text-center"
//           style={{ fontSize: "16.6px", lineHeight: "25.83px" }}
//         >
//           {event.topic}
//         </div>

//         {/* Mentor */}
//         <div
//           className="text-black text-left"
//           style={{
//             fontSize: "18.45px",
//             fontWeight: 500,
//             lineHeight: "25.83px",
//             fontFamily: "Playfair Display",
//             wordWrap: "break-word",
//           }}
//         >
//           Mentor: {event.mentor}
//         </div>

//         {/* Date & Time */}
//         <div
//           className="text-black text-left"
//           style={{
//             fontSize: "16.6px",
//             lineHeight: "25.83px",
//             fontFamily: "Playfair Display",
//             wordWrap: "break-word",
//             marginTop: "8px",
//           }}
//         >
//           <div>
//             <span className="font-semibold">Date: </span>
//             <span className="font-normal">{event.date}</span>
//           </div>
//           <div>
//             <span className="font-semibold">Time: </span>
//             <span className="font-normal">{event.time}</span>
//           </div>
//         </div>

//         {/* Registered Students & Button */}
//         <div className="  mt-3 flex justify-between gap-0 items-center">
//           <span
//             style={{

//               color: "black",
//               fontSize: "14.76px",
//               fontFamily: "Playfair Display",
//               fontWeight: 600,
//               lineHeight: "25.83px",
//               wordWrap: "break-word",
//             }}
//           >
//             Registered:
//           </span>

//           <span
//             style={{

//               color: "red",
//               fontFamily: "Playfair Display",
//               fontSize: "14.76px",
//               fontWeight: 600,
//               lineHeight: "25.83px",
//               wordWrap: "break-word",
//             }}
//           >
//             {event.registered} Students
//           </span>

//           <button
//             onClick={() => onRegister(event)}
//             className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
//             style={{
//               cursor: "pointer",
//               hover: "opacity-90",
//               color: "white",
//               fontFamily: "Playfair Display",
//               fontSize: "19.06px",
//               lineHeight: "27.83px",
//               wordWrap: "break-word",
//             }}
//           >
//             Register Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// // ---------------------------
// // Mobile Number Input with Country Code Dropdown (Defined here for use)
// // ---------------------------
// const countries = [
//   { code: '+1', flag: '🇺🇸' },
//   { code: '+44', flag: '🇬🇧' },
//   { code: '+91', flag: '🇮🇳' },
//   { code: '+86', flag: '🇨🇳' },
//   { code: '+81', flag: '🇯🇵' },
//   { code: '+33', flag: '🇫🇷' },
//   { code: '+49', flag: '🇩🇪' },
//   { code: '+39', flag: '🇮🇹' },
//   { code: '+34', flag: '🇪🇸' },
//   { code: '+61', flag: '🇦🇺' },
//   { code: '+1', flag: '🇨🇦' },
// ];

// /**
//  * Custom Mobile Number Input with Country Code Dropdown for use within the form.
//  * The logic for state and handlers is simplified for form integration.
//  * In a real-world scenario, you would manage the mobile number state in the parent form.
//  */
// function MobileNumberInput({ initialCode = '+91', placeholder = "Enter your mobile number" }) {
//   const defaultCountry = countries.find(c => c.code === initialCode) || countries[2];
//   const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSelectCountry = (country) => {
//     setSelectedCountry(country);
//     setIsOpen(false);
//   };

//   // Note: For a real form, you'd pass onChange/value props to manage state externally.
//   // For this example, we keep internal state management simple.

//   return (
//     <div className="flex gap-3">
//       {/* Country Code Dropdown */}
//       <div className="relative w-24" ref={dropdownRef}>
//         <button
//           type="button" // Important for preventing form submission
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full px-3 py-4 border-2 border-[#ECF0F3] rounded-xl bg-[#FAFBFC] flex items-center justify-between outline-none focus:ring-2 focus:ring-red-500 transition-colors"
//         >
//           <span className="flex items-center gap-2 text-lg">
//             <span>{selectedCountry.flag}</span>
//             <span className="font-medium text-base">{selectedCountry.code}</span>
//           </span>
//           <ChevronDown
//             size={18}
//             className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''
//               }`}
//           />
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
//             {countries.map((country, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => handleSelectCountry(country)}
//                 className="w-full px-3 py-3 text-left hover:bg-red-50 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0"
//               >
//                 <span className="text-lg">{country.flag}</span>
//                 <span className="font-medium">{country.code}</span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Mobile Number Input */}
//       <input
//         type="tel"
//         value={mobileNumber}
//         onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
//         placeholder={placeholder}
//         className="flex-1 w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
//         style={{
//           fontSize: "16px",
//           fontFamily: "Poppins",
//           fontWeight: 400,
//         }}
//       />
//     </div>
//   );
// }


// // ---------------------------
// // Registration Popup (Centered + Animated)
// // ---------------------------
// const RegistrationPopup = ({ event, onClose }) => {

//   const onSuccess = (res) => {
//    alert("✅ Payment successful! ID: " + res.razorpay_payment_id);
//   };

//   const onFailure = (err) => {
//     alert("❌ Payment failed! " + (err.description || err.error || err));
//   };



//   if (!event) return null;

//   const formFields = [
//     { label: "Name", placeholder: "Enter your Full Name", type: "text" },
//     { label: "Email-Id", placeholder: "Enter your Email-Id", type: "email" },
//     { label: "Mobile Number", placeholder: "Enter your mobile number", type: "mobile" }, // Use 'mobile' type
//     { label: "Graduation Year", placeholder: "Year of Graduation", type: "text" },
//   ];

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
//       <div
//         className="relative bg-white rounded-3xl shadow-2xl p-8 w-[640px] max-h-[85vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-fadeIn"
//         style={{
//           border: "1px solid #E0E0E0",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//         }}
//       >
//         <button
//           className="absolute right-5 top-5 text-gray-500 hover:text-black text-2xl font-bold"
//           onClick={onClose}
//         >
//           ×
//         </button>

//         {/* Header */}
//         <h2
//           className="text-center mb-2"
//           style={{
//             color: "black",
//             fontSize: "24px",
//             fontFamily: "Poppins",
//             fontWeight: 600,
//           }}
//         >
//           Register for Your Masterclass
//         </h2>
//         <p
//           className="text-center mb-6"
//           style={{
//             color: "black",
//             fontSize: "18px",
//             fontFamily: "Poppins",
//             fontWeight: 500,
//           }}
//         >
//           Fill in your details below and reserve your seat for the live session
//         </p>

//         <form className="flex flex-col gap-5">
//           {formFields.map((field, idx) => (
//             <div key={idx} className="flex flex-col gap-2">
//               <label
//                 style={{
//                   color: "black",
//                   fontSize: "20px",
//                   fontFamily: "Poppins",
//                   fontWeight: 500,
//                 }}
//               >
//                 {field.label} <span className="text-[#ED0331]">*</span>
//               </label>

//               {field.type === 'mobile' ? (
//                 // ✅ RENDER CUSTOM MOBILE INPUT
//                 <MobileNumberInput placeholder={field.placeholder} />
//               ) : (
//                 // RENDER REGULAR INPUT
//                 <input
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
//                   style={{
//                     fontSize: "16px",
//                     fontFamily: "Poppins",
//                     fontWeight: 400,
//                   }}
//                 />
//               )}
//             </div>
//           ))}


//           <RazorpayPayment amount={19} userId={"ffhrif"} buttonText="proceed to Pay 19" onSuccess={onSuccess} onFailure={onFailure} buttonStyle={{
//             marginTop: '1rem',          // mt-4
//             backgroundColor: '#ED0331', // bg-[#ED0331]
//             color: 'white',             // text-white
//             padding: '1rem 0',          // py-4
//             borderRadius: '0.75rem',    // rounded-xl
//             fontWeight: 500,            // font-medium
//             transition: 'all 0.2s',

//           }} />
//         </form>
//       </div>
//     </div>
//   );
// };




// const UpcomingEvents = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   return (
//     <div className="w-full py-20 px-6 bg-[#E2E2E2] flex flex-col items-center">
//       {/* Header */}
//       <h2
//         className="text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent"
//         style={{
//           fontSize: "48px",
//           fontFamily: "Playfair Display, serif",
//           fontWeight: 600,
//           lineHeight: "64.05px",
//           textAlign: "center",
//           marginBottom: "40px",
//           wordWrap: "break-word",
//           background: "linear-gradient(90deg, #ED0331, #87021C)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Upcoming Events
//       </h2>


//       {/* Event Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
//         {eventsData.map((event, index) => (
//           // Note: added index as key since event.id was missing
//           <EventCard key={index} event={event} onRegister={setSelectedEvent} />
//         ))}
//       </div>

//       {/* Registration Popup */}
//       {selectedEvent && (
//         <RegistrationPopup
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;













import React, { useState, useRef, useEffect } from "react";
import AnanyaImg from "../assets/anayasharma.png"; // single image for all events
import { ChevronDown } from 'lucide-react';
// import RazorpayPayment from "../utils/RazorpayPayment";

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
    time: "6:00 PM - 8:00 PM",
    registered: 60,
    image: AnanyaImg,
    leftText: "Master Probability Concepts",
  }
];

const EventCard = ({ event, onRegister }) => {
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
            onClick={() => onRegister(event)}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            style={{
              cursor: "pointer",
              hover: "opacity-90",
              color: "white",
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


// ---------------------------
// Mobile Number Input with Country Code Dropdown (Defined here for use)
// ---------------------------
const countries = [
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+91', flag: '🇮🇳' },
  { code: '+86', flag: '🇨🇳' },
  { code: '+81', flag: '🇯🇵' },
  { code: '+33', flag: '🇫🇷' },
  { code: '+49', flag: '🇩🇪' },
  { code: '+39', flag: '🇮🇹' },
  { code: '+34', flag: '🇪🇸' },
  { code: '+61', flag: '🇦🇺' },
  { code: '+1', flag: '🇨🇦' },
];

/**
 * Custom Mobile Number Input with Country Code Dropdown for use within the form.
 * The logic for state and handlers is simplified for form integration.
 * In a real-world scenario, you would manage the mobile number state in the parent form.
 */
function MobileNumberInput({ initialCode = '+91', placeholder = "Enter your mobile number" }) {
  const defaultCountry = countries.find(c => c.code === initialCode) || countries[2];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // Note: For a real form, you'd pass onChange/value props to manage state externally.
  // For this example, we keep internal state management simple.

  return (
    <div className="flex gap-3">
      {/* Country Code Dropdown */}
      <div className="relative w-24" ref={dropdownRef}>
        <button
          type="button" // Important for preventing form submission
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-4 border-2 border-[#ECF0F3] rounded-xl bg-[#FAFBFC] flex items-center justify-between outline-none focus:ring-2 focus:ring-red-500 transition-colors"
        >
          <span className="flex items-center gap-2 text-lg">
            <span>{selectedCountry.flag}</span>
            <span className="font-medium text-base">{selectedCountry.code}</span>
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            {countries.map((country, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectCountry(country)}
                className="w-full px-3 py-3 text-left hover:bg-red-50 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="font-medium">{country.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Number Input */}
      <input
        type="tel"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
        placeholder={placeholder}
        className="flex-1 w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
        style={{
          fontSize: "16px",
          fontFamily: "Poppins",
          fontWeight: 400,
        }}
      />
    </div>
  );
}


// ---------------------------
// Registration Popup (Centered + Animated)
// ---------------------------
const RegistrationPopup = ({ event, onClose }) => {



  const handleSuccess = (res) => {
    console.log("Payment successful:", res);
    alert("✅ Payment successful! ID: " + res.razorpay_payment_id);
  };

  const handleFailure = (err) => {
    console.error("Payment failed:", err);
    alert("❌ Payment failed: " + (err.description || err.error || err));
  };

  const handlePayment = async () => {

    const inputs = document.querySelectorAll("form input[required]");
    for (let input of inputs) {
      if (!input.value.trim()) {
        //alert(`⚠️ Please fill ${input.placeholder} before proceeding.`);
        input.focus();
        return;
      }
    }

    // Here you can dynamically decide the amount
    const amount = 19; // Example: 19 INR
    const userId = Math.floor(Math.random() * 100000000);
    console.log(userId);
    const baseUrl = "https://vts-backend-ms7k.onrender.com/payments";

    try {
      // Step 1: Create order
      const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, amount }),
      });
      const data = await res.json();

      if (data.error) {
        handleFailure({ error: data.error });
        return;
      }

      if (!data.orderId) {
        handleSuccess({ message: "Free plan activated successfully!" });
        return;
      }

      // Step 2: Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "VTS Test Store",
        description: "Masterclass Registration",
        order_id: data.orderId,
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#ED0331" },

        handler: async function (response) {
          // Step 3: Verify payment
          const verifyRes = await fetch(`${baseUrl}/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            handleSuccess(response);
          } else {
            handleFailure({ error: "Payment verification failed" });
          }
        },

        modal: {
          ondismiss: function () {
            handleFailure({ error: "Payment popup closed by user" });
          },
        },
      };

      // Step 4: Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        handleFailure(response.error);
      });
    } catch (err) {
      console.error("Error:", err);
      handleFailure(err);
    }
  };

  if (!event) return null;

  const formFields = [
    { label: "Name", placeholder: "Enter your Full Name", type: "text" },
    { label: "Email-Id", placeholder: "Enter your Email-Id", type: "email" },
    { label: "Mobile Number", placeholder: "Enter your mobile number", type: "mobile" },
    { label: "Graduation Year", placeholder: "Year of Graduation", type: "text" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[640px] max-h-[85vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-fadeIn">
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
          Fill in your details below and reserve your seat for the live session
        </p>

        <form className="flex flex-col gap-5">
          {formFields.map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-black text-lg font-medium">
                {field.label} <span className="text-[#ED0331]">*</span>
              </label>

              {field.type === "mobile" ? (
                <MobileNumberInput required={true} placeholder={field.placeholder} />
              ) : (
                <input
                  
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3] outline-none focus:ring-2 focus:ring-red-500"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 bg-[#ED0331] text-white py-4 rounded-xl font-medium hover:bg-[#c20228] transition-all"
            onClick={(e) => {
              e.preventDefault(); // stop form reload
              const inputs = document.querySelectorAll("form input");
              for (let input of inputs) {
                if (!input.value.trim()) {
                  
                  input.focus();
                  return;
                }
              }
              handlePayment();
            }}
          >
            Confirm your Registration
          </button>
        </form>
      </div>
    </div>
  );
};


const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full py-20 px-6 bg-[#E2E2E2] flex flex-col items-center">
      {/* Header */}
      <h2
        className="text-center mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent"
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
          // Note: added index as key since event.id was missing
          <EventCard key={index} event={event} onRegister={setSelectedEvent} />
        ))}
      </div>

      {/* Registration Popup */}
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










