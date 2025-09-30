import React, { useState, useEffect } from "react";
import mainImage1 from "../assets/card.png";
import mainImage2 from "../assets/card.png";
import smallImage from "../assets/small.png";

const dynamicContent = [
  {
    word: "Skills",
    image: mainImage2,
    heading: "Master Your Skills",
    description: "Learn from our expert mentors and gain hands-on experience.",
    buttonText: "Get 1:1 guidance →",
  },
  {
    word: "Confidence",
    image: mainImage1,
    heading: "Build Confidence",
    description: "Solve doubts live and strengthen your knowledge.",
    buttonText: "Connect to Mentor →",
  },
  {
    word: "Career",
    image: mainImage1,
    heading: "Advance Your Career",
    description: "Unlock new skills and achieve your professional goals.",
    buttonText: "Level Up →",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Sequential loop: 0 → 1 → 2 → 0 → 1 → 2 ...
      setCurrentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-6 md:p-12 bg-gray-50">
      {/* Left Side Text */}
      <div className="flex-1 flex flex-col justify-center">
        <h1
          className="text-[52px] sm:text-[50px] md:text-[50px] font-semibold text-gray-900 leading-tight font-playfair"
          style={{ letterSpacing: "-1px" }}
        >
          Build Your{" "}
          {/* Smooth vertical swap animation */}
          <span className="relative inline-block overflow-hidden align-middle h-[60px]">
            <div
              className="transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 60}px)`,
              }}
            >
              {dynamicContent.map((item, i) => (
                <div
                  key={i}
                  className="h-[60px] flex items-center text-red-700 font-semibold"
                >
                  {item.word}
                </div>
              ))}
            </div>
          </span>
          <br />
          with Vikash Tech Solution.
        </h1>

        <p className="text-red-700 text-2xl sm:text-[28px] md:text-[32px] font-semibold mt-4">
          From guidance to career outcomes, <br />
          We’ve got you covered
        </p>

        <p className="text-gray-700 mt-4 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
          Learn from our expert mentors, gain hands-on project experience & take
          the right step toward a successful career!
        </p>

        <button
          className="mt-8 px-6 mb-4 py-2 rounded-[20px] w-80 h-20 font-semibold shadow text-white text-lg sm:text-xl md:text-2xl transition hover:opacity-90 self-start"
          style={{ background: "linear-gradient(90deg, #ED0331, #87021C)" }}
        >
          Explore our Programs »
        </button>
      </div>

      {/* Right Side Horizontal Slide */}
      <div className="flex-1 flex justify-center items-center overflow-hidden relative">
        <div
          className="flex transition-transform duration-[1500ms] ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${dynamicContent.length * 100}%`,
          }}
        >
          {dynamicContent.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 relative rounded-lg shadow-lg px-2"
            >
              {/* Main Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full object-cover rounded-lg"
              />

              {/* Overlay Text */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white max-w-[75%]">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-3">
                  {item.description}
                </p>
                <button className="bg-white text-gray-900 px-3 sm:px-5 py-1.5 sm:py-2 rounded-md font-medium shadow hover:bg-gray-200 transition text-xs sm:text-sm md:text-base">
                  {item.buttonText}
                </button>
              </div>

              {/* Bottom Right Small Image */}
              <img
                src={smallImage}
                alt="Extra Illustration"
                className="absolute bottom-2 right-2 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
