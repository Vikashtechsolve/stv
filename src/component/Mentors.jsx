//import React, { useState, useEffect, useRef } from 'react';

// import ankit from '../assets/ankit.png';
// import priya from '../assets/priya.png';
// import neha from '../assets/neha.png'
// import { motion } from "framer-motion";

// const mentors = [
//   { name: 'Priya Nair', role: 'Mathematics & Core CS', description: 'Provides personalized sessions...', image: 'priya' },
//   { name: 'Ankit Verma', role: 'Competitive Programming & Contests', description: 'Trains students in coding challenges...', image: 'priya' },
//   { name: 'Neha Sharma', role: 'Career & Resume Specialist', description: 'Helps learners with resume building...', image: 'neha' },
// ];
// const carouselItems = [...mentors, ...mentors]; // Total 6 cards
// const uniqueCardCount = mentors.length;
// const totalCards = carouselItems.length;




// const Mentors = () => {

//      const [centerIndex, setCenterIndex] = useState(1); 
//   const trackRef = useRef(null);
  
//   // The duration for one card to visually slide into the center position
//   // 40% of 10s (4s) is the slide time for 3 cards. 4s / 3 cards ≈ 1.33s
//   const CARD_SLIDE_DURATION_MS = 1333; 

//   useEffect(() => {
//     // Timer to update the centerIndex to follow the sliding animation
//     const slideInterval = setInterval(() => {
//       setCenterIndex(prevIndex => {
//         // Increment the index, wrapping around when it hits the last card
//         return (prevIndex + 1) % totalCards;
//       });
//     }, CARD_SLIDE_DURATION_MS);
    
//     return () => clearInterval(slideInterval);
//   }, []);







//   return (
//     <section className="py-12">
//       <div className=" mx-auto text-center">
//         {/* Section Title */}
//         <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair   mb-3 sm:mb-5 md:mb-7 lg:mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
//           Meet Our Mentors
//         </h1>
//         <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black  sm:mb-4 md:mb-6 lg:mb-8 font-nunito">
//           Experienced professionals guiding you every step of the way
//         </p>

//         <div className=" flex h-100 items-center justify-center ">
                  

//   <div className="border mt-15 flex justify-center w-full py-">
      
//       {/* 2. Fixed-width window to only show 3 cards */}
//       <div className="carousel-window overflow-hidden">
        
//         {/* 3. The sliding track (total width of all 6 cards) */}
//         <div 
//           ref={trackRef}
//           className="carousel-track flex justify-start items-center" 
//           // Total width: 6 cards * (320px width + 2*4px margin) = 6 * 328px = 1968px
//           style={{ width: `${totalCards * 328}px` }} 
//         >
//           {carouselItems.map((mentor, index) => (
//             <MentorCard 
//               key={index} 
//               mentor={mentor} 
//               // Set the center state
//               isCenter={index === centerIndex} 
//             />
//           ))}
//         </div>
//       </div>

//     </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mentors;


// const MentorCard = ({ mentor, isCenter }) => {
//     // Card styling logic from the previous answer
//     const scaleClass = isCenter ? 'scale-105' : 'scale-100 opacity-[0.89]';
//     const hSize = isCenter ? 'h-72' : 'h-64';
//     const pSize = isCenter ? 'p-6' : 'p-4';
//     const textH2 = isCenter ? 'text-2xl' : 'text-lg';
//     const textP = isCenter ? 'text-base' : 'text-sm';

    
  
//     return (
//       // w-[320px] and mx-4 give a total width of 328px per card
//       <div
//         className={`flex-shrink-0 w-[320px] mx-4 rounded-lg shadow-xl text-center transition-all duration-300 ease-in-out transform ${scaleClass} bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0]`}
//       >
//         {/* Card Content... */}
//         <img
//           src={mentor.image} // Replace with your image logic
//           alt={mentor.name}
//           className={`w-full ${hSize} object-cover rounded-t-lg`}
//         />
//         <div className={pSize}>
//           <h2 className={`font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent ${textH2}`}>
//             {mentor.name}
//           </h2>
//           <p className="font-playfair text-gray-900 text-md mt-1">
//             {mentor.role}
//           </p>
//           <p className={`text-gray-800 ${textP} mt-2 leading-relaxed`}>
//             {mentor.description}
//           </p>
//         </div>
//       </div>
//     );
// };
// //



import React, { useState, useEffect, useRef } from 'react';

const mentors = [
  { name: 'Priya Nair', role: 'Mathematics & Core CS', description: 'Provides personalized sessions...', image: 'priya' },
  { name: 'Ankit Verma', role: 'Competitive Programming & Contests', description: 'Trains students in coding challenges...', image: 'priya' },
  { name: 'Neha Sharma', role: 'Career & Resume Specialist', description: 'Helps learners with resume building...', image: 'neha' },
];
const carouselItems = [...mentors, ...mentors]; 
const totalCards = carouselItems.length;

// Card dimensions (320px width + 2*4px margin)
const CARD_WIDTH_WITH_MARGIN = 328; 

// 1. UPDATED: Time for one card to slide (2 seconds transition)
const SLIDE_DURATION_MS = 2000; 
// 2. UPDATED: Pause after 3 cards slide (3 seconds pause)
const PAUSE_DURATION_MS = 3000; 

// --- MentorCard Component (Styling remains the same) ---
const MentorCard = ({ mentor, isCenter }) => {
    const scaleClass = isCenter ? 'scale-105' : 'scale-100 opacity-[0.89]';
    const hSize = isCenter ? 'h-72' : 'h-64';
    const pSize = isCenter ? 'p-6' : 'p-4';
    const textH2 = isCenter ? 'text-2xl' : 'text-lg';
    const textP = isCenter ? 'text-base' : 'text-sm';
  
    return (
      <div
        className={`flex-shrink-0 w-[320px] mx-4 rounded-lg shadow-xl text-center transition-all duration-300 ease-in-out transform ${scaleClass} bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0]`}
      >
        <img
          src={mentor.image} // Use your image logic
          alt={mentor.name}
          className={`w-full ${hSize} object-cover rounded-t-lg`}
        />
        <div className={pSize}>
          <h2 className={`font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent ${textH2}`}>
            {mentor.name}
          </h2>
          <p className="font-playfair text-gray-900 text-md mt-1">
            {mentor.role}
          </p>
          <p className={`text-gray-800 ${textP} mt-2 leading-relaxed`}>
            {mentor.description}
          </p>
        </div>
      </div>
    );
};

// --- MentorsCarousel Component ---
const Mentors = () => {
  const [slideOffset, setSlideOffset] = useState(0); 
  const [centerIndex, setCenterIndex] = useState(1); 
  const [isSliding, setIsSliding] = useState(true); 

  useEffect(() => {
    let slideTimer;

    const startSlide = () => {
      // Set the timeout to the SLIDE_DURATION_MS (2000ms)
      slideTimer = setTimeout(() => {
        
        // Check if 3 cards have been slid (i.e., we are at the end of the first set)
        if (slideOffset <= -(CARD_WIDTH_WITH_MARGIN * 3)) {
          
          // Trigger the 3-second pause and then the loop jump
          clearTimeout(slideTimer); // Stop the slide timer
          
          setTimeout(() => {
            // A. Instantly remove the transition for the loop jump
            setIsSliding(false); 
            // B. Reset the track position to 0 (the jump back)
            setSlideOffset(0); 
            // C. Reset the center index to the second card of the first set (index 1)
            setCenterIndex(1); 
            
            // D. After a small delay (50ms) to allow transition reset to apply, re-enable sliding and start the next slide
            setTimeout(() => {
              setIsSliding(true);
              startSlide();
            }, 50); 
            
          }, PAUSE_DURATION_MS); // PAUSE (3000ms)
          
        } else {
            // Continue sliding: Update position and center index
            setSlideOffset(prevOffset => prevOffset - CARD_WIDTH_WITH_MARGIN);
            setCenterIndex(prevIndex => (prevIndex + 1) % totalCards);
            startSlide();
        }
      }, SLIDE_DURATION_MS); // SLIDE (2000ms)
    };

    // Initial start
    startSlide();

    // Cleanup on unmount
    return () => clearTimeout(slideTimer);
  }, [slideOffset]); 

  
  // Dynamically set the transition duration based on the constant
  const transitionDuration = isSliding ? `transition-transform duration-[${SLIDE_DURATION_MS}ms] ease-in-out` : '';
  const trackClasses = `flex justify-start items-center ${transitionDuration}`;
  
  return (
    <div className="border mt-15 flex justify-center w-full py-">
      
      {/* Fixed-width window to only show 3 cards */}
      <div 
        className="overflow-hidden" 
        style={{ width: `${CARD_WIDTH_WITH_MARGIN * 3}px`}}
      >
        
        {/* The sliding track */}
        <div 
          className={trackClasses}
          style={{ 
            width: `${totalCards * CARD_WIDTH_WITH_MARGIN}px`,
            transform: `translateX(${slideOffset}px)`,
          }} 
        >
          {carouselItems.map((mentor, index) => (
            <MentorCard 
              key={index} 
              mentor={mentor} 
              isCenter={index === centerIndex} 
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Mentors;