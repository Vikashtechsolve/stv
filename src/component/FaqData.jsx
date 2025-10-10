import React, { useState ,useRef,useEffect} from "react";
import dropdownArrow from './../assets/dropdownarrow.png'

// FAQ data with dropdown options
const faqData = [
  {
    question: "How do I register?",
    options: ["Click the Register/Join button on the Masterclass card, complete the quick payment, and you will receive confirmation with the joining link."],
  },
  {
    question: "Who can join these Masterclasses?",
    options: ["Anyone who wants to improve their skills, whether you are a beginner, student, or working professional. All you need is a phone/laptop and an internet connection."],
  },
  {
    question: "What is the duration of each masterclass?",
    options: ["Most Masterclasses last between 90 to 120 minutes, depending on the topic."],
  },
  
  {
    question: "Will I get recordings or notes after the class?",
    options: ["Yes, recordings will be available for registered students for a limited time after the session."],
  },
  {
    question: "Do I need any special software to join?",
    options: ["No, you can join directly through a Zoom meeting link. No complicated setup is required."],
  },
  {
    question: "Can I interact with the mentor during the session?",
    options: ["Yes! Masterclasses are interactive. You can ask questions during Q&A and get your doubts cleared directly by the mentor."],
  },
  {
    question: "Is there any refund policy?",
    options: ["Since Masterclasses are low-cost and easily accessible, we do not provide refunds once registered. However, you will still get access to session recordings if you cannot attend live."],
  },
];

const FAQItem = ({ faq }) => {
 const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1260px",
        borderRadius: "8px",
        padding: "8px 16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        fontFamily: "Nunito Sans, sans-serif",
      }}
    >
      {/* Question */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "8px 0",
          fontSize: "26px",
          fontWeight: 500,
          color: "black",
        }}
      >
        <div style={{ flex: 1 }}>{faq.question}</div>
        <img
          src={dropdownArrow}
          alt="Arrow"
          style={{
            width: "25px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Dropdown */}
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
          borderTop: isOpen ? "2px solid #BCBCBC" : "none",
          marginTop: isOpen ? "8px" : "0",
        }}
      >
        {faq.options.map((opt, idx) => (
          <div
            key={idx}
            style={{
              padding: "10px",
              fontSize: "22px",
              background: "linear-gradient(90deg, #ED0331, #87021C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {opt}
          </div>
        ))}
      </div>
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
        backgroundColor: "#E2E2E2", // light gray background
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
