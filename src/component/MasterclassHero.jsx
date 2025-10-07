import React from "react";
import masterclassImage from "../assets/masterclasshead.png";

const MasterClassPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      {/* Text Section */}
      <div className="text-center max-w-4xl mb-8 px-2">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug"
          style={{
            fontFamily: "Playfair Display, serif",
            background: "linear-gradient(90deg, #ED0331, #87021C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Learn Any Topic in Just 1 Hour – Starting at ₹9!
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-800">
          Affordable, focused, and live masterclasses designed for school students,
          B.Tech learners, and professionals.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <img
          src={masterclassImage}
          alt="Masterclass"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Optional bottom spacing */}
      <div className="h-8 md:h-12" />
    </div>
  );
};

export default MasterClassPage;
