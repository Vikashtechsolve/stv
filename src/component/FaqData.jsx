import React, { useState } from "react";
import dropdownArrow from "/Users/mustakimshaikh/Downloads/New_Version/VTS_UI/src/assets/dropdownarrow.png";

// FAQ data with dropdown options
const faqData = [
  {
    question: "What is the duration of each masterclass?",
    options: ["60 minutes", "90 minutes", "120 minutes"],
  },
  {
    question: "How much does it cost to join a masterclass?",
    options: ["Free", "$49", "$99"],
  },
  {
    question: "Will I get recordings or notes after the class?",
    options: ["Yes, recordings provided", "Yes, notes included"],
  },
  {
    question: "Who are the mentors?",
    options: ["Ankit Verma", "Priya Sharma", "Rohan Mehta"],
  },
  {
    question: "How do I register?",
    options: ["Online registration link", "Contact support"],
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "100%", maxWidth: "1260px", display: "flex", flexDirection: "column" }}>
      {/* Question Row with underline */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "12px 16px",
          fontSize: "26px",
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 600,
          lineHeight: "57.6px",
          color: "black",
          borderBottom: "2px solid #BCBCBC", // Light black underline for the question
        }}
      >
        <div style={{ flex: 1 }}>{faq.question}</div>
        <img
          src={dropdownArrow}
          alt="Arrow"
          style={{
            width: "25px",
            height: "20px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </div>

      {/* Dropdown Array */}
      {isOpen && (
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "16px" }}>
          {faq.options.map((opt, idx) => (
            <div
              key={idx}
              style={{
                width: "100%",
                padding: "8px 0",
                borderBottom: "1px solid #BCBCBC", // lighter underline for dropdown items
                fontSize: "22px",
                fontFamily: "Nunito Sans, sans-serif",
                color: "#1B1718",
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FAQFullScreen = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
        backgroundColor: "#f0f0f0", // light gray background
      }}
    >
      {/* Frequently Asked Questions Title */}
      <h2
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
        Frequently Asked Questions
      </h2>

      {/* Top Left Subtext */}
      <div
        style={{
          width: "100%",
          maxWidth: "1260px",
          textAlign: "left",
          fontSize: "40px",
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 500,
          lineHeight: "46px",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Have more Questions?
      </div>

      {/* FAQ Items */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
        {faqData.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQFullScreen;
