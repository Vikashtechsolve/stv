import React, { useEffect, useRef, useState } from "react";
import priya from "../assets/priya.png";
import ankit from "../assets/ankit.png";
import neha from "../assets/neha.png";

const MentorsSmoothCarousel = () => {
  const mentors = [
    {
      name: "Priya Nair",
      role: "Mathematics & Core CS",
      img: priya,
      description:
        "Provides personalized sessions for solving math problems and core CS subjects, making concepts crystal clear with step-by-step guidance.",
    },
    {
      name: "Ankit Verma",
      role: "Competitive Programming & Contests",
      img: ankit,
      description:
        "Trains students in coding challenges, hackathons and contests, building speed, accuracy, and confidence in competitive exams.",
    },
    {
      name: "Neha Sharma",
      role: "Career & Resume Specialist",
      img: neha,
      description:
        "Helps learners with resume building, LinkedIn optimization, and interview preparation, ensuring they stand out in the job market.",
    },
  ];

  // repeat mentors MANY times to avoid empty space
  const sliderMentors = Array(20).fill(mentors).flat();

  const sliderRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let position = 0;

    const speed = 2.0;

    const step = () => {
      position += speed;
      const slider = sliderRef.current;
      if (slider) {
        const totalWidth = slider.scrollWidth / 2; // half width is enough for reset
        if (position >= totalWidth) {
          position = 0; // reset instantly for seamless loop
        }
        setScrollPosition(position);
      }
      requestAnimationFrame(step);
    };
    step();
  }, []);

  const cardWidth = 280;
  const cardHeight = 500;
  const gap = 150;

  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        Meet Our Mentors
      </h1>

      <div className="relative w-full h-4/5 overflow-hidden flex justify-center items-center">
        <div
          ref={sliderRef}
          className="flex items-center absolute top-0 left-0 h-full"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {sliderMentors.map((mentor, idx) => {
            const cardCenter =
              idx * (cardWidth + gap) - scrollPosition + cardWidth / 2;
            const screenCenter = window.innerWidth / 2;
            const distance = Math.abs(screenCenter - cardCenter);
            const scale = Math.max(0.9, 1.5 - distance / 800); // zoom center

            return (
              <div
                key={idx}
                className="flex-shrink-0 rounded-lg shadow-lg bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0] text-center transition-transform duration-300"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginRight: `${gap}px`,
                  transform: `scale(${scale})`,
                }}
              >
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 overflow-visible">
                  <h2 className="text-lg font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                    {mentor.name}
                  </h2>
                  <p className="text-gray-700 italic text-sm mt-1">
                    {mentor.role}
                  </p>
                  <p className="text-gray-800 text-sm mt-2 leading-relaxed">
                    {mentor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MentorsSmoothCarousel;
