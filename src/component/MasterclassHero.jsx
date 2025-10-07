import React from "react";
import masterclassImage from "../assets/masterclasshead.png";

const MasterClassPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white">
      {/* Text Section */}
      <div className="text-center max-w-7xl mb-12">
        {/* Heading */}
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
          Learn Any Topic in Just 1 Hour – Starting at ₹9!
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: "black",
            fontSize: "26px",
            fontFamily: "Nunito Sans, sans-serif",
            fontWeight: 600,
            lineHeight: "42px",
            wordWrap: "break-word",
            marginTop: "18px",
          }}
        >
          Affordable, focused, and live masterclasses designed for school
          students, B.Tech learners, and professionals.
        </p>
      </div>

      {/* Image Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          height: "auto",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={masterclassImage}
          alt="Masterclass"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "24px",
          }}
        />
      </div>
    </div>
  );
};

export default MasterClassPage;
