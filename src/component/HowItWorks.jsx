import React, { useState } from "react";

// Import your SVGs
import OneIcon from "../assets/one.svg";
import TwoIcon from "../assets/two.svg";
import ThreeIcon from "../assets/three.svg";
import FourIcon from "../assets/four.svg";
import DropdownIcon from "../assets/dropdown.svg"; 

const categories = ["Coding", "Aptitude", "Quiz", "All"];

// FAQ data
const faqData = [
  {
    question: "Is registration free?",
    answer:
      "Yes! Registration is completely free for all participants. You only need to sign up once.",
  },
  {
    question: "Can I participate multiple times?",
    answer:
      "Each participant can register once per contest cycle, but you can join future contests anytime!",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Absolutely! Every participant receives a digital certificate after successfully completing the contest.",
  },
];

const steps = [
  {
    icon: OneIcon,
    title: "Register Yourself",
    description:
      "Fill in your basic details, choose your contest category, and get access to your personal dashboard for updates and schedules.",
  },
  {
    icon: TwoIcon,
    title: "Participate Live",
    description:
      "Join the live contest at the scheduled time directly from your dashboard. Compete in coding or quiz challenges in real-time!",
  },
  {
    icon: ThreeIcon,
    title: "Earn Points & Track Leaderboard",
    description:
      "Answer questions, gain points, and see your rank climb on the live leaderboard as you compete with other participants.",
  },
  {
    icon: FourIcon,
    title: "Get Certificates & Rewards",
    description:
      "Receive a digital participation certificate and win exciting prizes and verified achievement badges for top performance.",
  },
];

export default function LaunchPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-16 space-y-20"
      style={{ background: "#FFFFFF" }}
    >
      {/* How It Works */}
      <section className="flex flex-col items-center w-full space-y-10">
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "32px",
            fontFamily: "Playfair Display",
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "0.32px",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "40px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 260px",
                maxWidth: "300px",
                background:
                  "linear-gradient(180deg, #EEF4FF 0%, #F7F3FF 100%)",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <img
                src={step.icon}
                alt={`Step ${index + 1}`}
                style={{ width: "64px", height: "64px", objectFit: "contain" }}
              />

              <h3
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Lato",
                  fontWeight: 500,
                  lineHeight: "28px",
                  letterSpacing: "0.18px",
                  marginTop: "12px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#707070",
                  fontSize: "14px",
                  fontFamily: "Lato",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.14px",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

     {/* Launch Form Section */}
<section
  style={{
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  }}
>
  <h2
    style={{
      color: "black",
      fontSize: "32px",
      fontFamily: "Playfair Display",
      fontWeight: 500,
      lineHeight: "36px",
      letterSpacing: "0.32px",
    }}
  >
    Be the First to Know When We Launch!
  </h2>

  <p
    style={{
      background: "linear-gradient(90deg, #ED0331 0%, #87021C 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "22px",
      fontFamily: "Nunito Sans",
      fontWeight: 500,
      lineHeight: "36px",
    }}
  >
    DON'T MISS THE LAUNCH! Register now to get exclusive early access, a bonus preparation challenge, and special rewards reserved only for the first 1000 participants.
  </p>

  {/* Form */}
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "100%",
    }}
  >
    {/* Name */}
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          color: "black",
          fontSize: "24px",
          fontFamily: "Lato",
        }}
      >
        Name
        <span
          style={{
            color: "#ED0331",
            fontSize: "16px",
            fontFamily: "Poppins",
          }}
        >
          *
        </span>
      </label>
      <input
        type="text"
        placeholder="Enter your Full Name"
        style={{
          width: "100%",
          height: "64px",
          background: "#EEEEEE",
          boxShadow: "2px 2px 12px rgba(0,0,0,0.25)",
          borderRadius: "12px",
          border: "none",
          padding: "0 24px",
          fontSize: "18px",
          fontFamily: "Lato",
          color: "#989C9E",
          marginTop: "8px",
        }}
      />
    </div>

    {/* Email */}
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          color: "black",
          fontSize: "24px",
          fontFamily: "Lato",
        }}
      >
        E-mail
        <span
          style={{
            color: "#ED0331",
            fontSize: "16px",
            fontFamily: "Poppins",
          }}
        >
          *
        </span>
      </label>
      <input
        type="email"
        placeholder="Enter your E-mail"
        style={{
          width: "100%",
          height: "64px",
          background: "#EEEEEE",
          boxShadow: "2px 2px 12px rgba(0,0,0,0.25)",
          borderRadius: "12px",
          border: "none",
          padding: "0 24px",
          fontSize: "18px",
          fontFamily: "Lato",
          color: "#989C9E",
          marginTop: "8px",
        }}
      />
    </div>

    {/* Category Dropdown */}
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          color: "black",
          fontSize: "24px",
          fontFamily: "Lato",
        }}
      >
        Category
        <span
          style={{
            color: "#ED0331",
            fontSize: "16px",
            fontFamily: "Poppins",
          }}
        >
          *
        </span>
      </label>

      <select
        style={{
          width: "100%",
          height: "64px",
          background: "#EEEEEE",
          boxShadow: "2px 2px 12px rgba(0,0,0,0.25)",
          borderRadius: "12px",
          border: "none",
          padding: "0 24px",
          fontSize: "18px",
          fontFamily: "Lato",
          color: "#989C9E",
          marginTop: "8px",
          appearance: "none",
          backgroundImage: `url(${DropdownIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
          backgroundSize: "16px 16px",
          cursor: "pointer",
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>

    {/* Centered Register Button */}
    <button
      type="submit"
      style={{
        width: "200px",
        maxWidth: "80%",
        margin: "0 auto",
        padding: "12px 16px",
        background: "linear-gradient(90deg, #ED0331 0%, #87021C 100%)",
        borderRadius: "12px",
        color: "white",
        fontSize: "20px",
        fontFamily: "Lato",
        fontWeight: 400,
        border: "none",
        cursor: "pointer",
        boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.25)",
        display: "block",
      }}
    >
      Pre Register →
    </button>
  </form>
</section>


      {/* FAQ Section */}
      <section
        style={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <h2
          style={{
            color: "black",
            fontSize: "32px",
            fontFamily: "Playfair Display",
            fontWeight: 500,
            lineHeight: "28px",
            letterSpacing: "0.32px",
            marginBottom: "30px",
          }}
        >
          FAQ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                padding: "16px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: "22px",
                    fontFamily: "Nunito Sans",
                    fontWeight: 400,
                    lineHeight: "32px",
                  }}
                >
                  {item.question}
                </div>

                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  style={{
                    width: "20px",
                    height: "20px",
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              {openIndex === index && (
                <div
                  style={{
                    marginTop: "10px",
                    color: "#555",
                    fontSize: "18px",
                    fontFamily: "Lato",
                    lineHeight: "28px",
                    textAlign: "left",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
