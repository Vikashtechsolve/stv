import React from "react";
import masterclassImage from "../assets/masterclasshead.png";

const MasterClassPage = () => {
  return (
    <div className=" w-full flex flex-col items-center py-12 sm:py:3 justify-center px-4 bg-[#E2E2E2]">
      {/* Text Section */}
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mt-4 sm:mt-1 text-center  mb-8 px-2">
        {/* Heading */}
        <h1
          className=" text-2xl  sm:text-3xl md:text-4xl mt-7 font-semibold leading-snug"
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
        <p className="mt-4 font-nunito text-base sm:text-xl md:text-3xl font-medium text-black">
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
      <div className="h-1 md:h-7" />
    </div>
  );
};

export default MasterClassPage;
