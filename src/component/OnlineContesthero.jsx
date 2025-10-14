import React from "react";
import onlinecontest from "../assets/onlinecontest.jpg";
import ArrowIcon from "../assets/Arrow.svg"; // your SVG arrow
import Fprice from "../assets/Firstprice.gif"; // your trophy GIF
import trofe from "../assets/trofe.gif"; // your trophy image
// Dynamic rewards array

const rewards = [
  {
    place: "1st Place",
    amount: "₹25000 + Certificate",
    description: "Crown yourself as the top performer and earn bragging rights!",
    img: Fprice, // corrected
  },
  {
    place: "2nd Place",
    amount: "₹15000 + Certificate",
    description: "Show your skills and claim the runner-up prize!",
    img: trofe,
  },
  {
    place: "3rd Place",
    amount: "₹10000 + Certificate",
    description: "Earn recognition and a reward for your efforts!",
    img: trofe,
  },
];

export default function HeroSectionPage() {
  return (
    <div className="w-full flex flex-col items-start justify-center px-4 md:px-10 py-10 space-y-8">

      {/* Page Title */}
      <h1 className="text-center text-black text-3xl sm:text-4xl md:text-[36px] font-playfair font-semibold tracking-[0.36px] w-full">
        Vikash Tech Online Contest Arena – Compete, Learn, and Win!
      </h1>

      {/* Page Subtitle with Gradient */}
      <p
        style={{
          background: "linear-gradient(90deg, #ED0331, #87021C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "24px",
          fontFamily: "Lato",
          fontWeight: 500,
          lineHeight: "40px",
          letterSpacing: "0.24px",
          wordWrap: "break-word",
          textAlign: "center",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        A platform where students showcase their talent, sharpen their skills,
        and win exciting prizes!
      </p>

      {/* Hero Section Card */}
      <div
        style={{
          width: "100%",
          minHeight: "10vh",
          position: "relative",
          background: "linear-gradient(90deg, #0052D4 0%, #6FB1FC 50%, #4364F7 100%)",
          overflow: "hidden",
          borderRadius: "6px",
          padding: "70px 50px",
          marginTop: "40px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flex: "1 1 60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* Heading (centered) */}
            <h1
              style={{
                color: "#FDFDFD",
                fontSize: "32px",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                lineHeight: "42px",
                letterSpacing: "0.32px",
                wordWrap: "break-word",
                whiteSpace: "normal",
                textAlign: "center",
                width: "100%",
              }}
            >
              Get Ready to Compete <br /> Coming Soon!
            </h1>

            {/* Description (left aligned) */}
            <p
              style={{
                color: "white",
                fontSize: "22px",
                fontFamily: "Lato",
                fontWeight: 600,
                lineHeight: "36px",
                letterSpacing: "0.2px",
                textAlign: "left",
              }}
            >
              Join our upcoming Coding & Quiz Contests for Class 7–12 and B.Tech
              students. Challenge your skills, climb the leaderboard, and win
              exciting prizes!
            </p>

            {/* Pre-Register Button (left aligned) */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                background: "#F8FAFF",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: 400,
                  lineHeight: "36px",
                }}
              >
                Pre-Register Now
              </span>

              {/* Two Arrows */}
              <img src={ArrowIcon} alt="Arrow" style={{ width: "16px", height: "16px" }} />
            </div>
          </div>

          {/* Right Image */}
          <img
            style={{
              flex: "1 1 35%",
              maxWidth: "420px",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
            }}
            src={onlinecontest}
            alt="Online Contest"
          />
        </div>
      </div>

      {/* ------------------- Rewards Section ------------------- */}

      {/* Centered Title */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "black",
          fontSize: "32px",
          fontFamily: "Playfair Display",
          fontWeight: 600,
          lineHeight: "52px",
          letterSpacing: "0.32px",
          wordWrap: "break-word",
          marginTop: "60px",
        }}
      >
        Exciting Rewards for Top Performers
      </div>

      {/* Centered Subtitle */}
      <p
        style={{
          background: "linear-gradient(90deg, #ED0331, #87021C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "100%",
          textAlign: "center",
          fontSize: "32px",
          fontFamily: "Nunito Sans",
          fontWeight: 500,
          lineHeight: "42px",
          wordWrap: "break-word",
          marginTop: "20px",
        }}
      >
        Win rewards that boost your resume and your confidence!
      </p>

    {/* Rewards Cards */}
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
  {rewards.map((reward, index) => (
    <div
      key={index}
      style={{
        flex: "1 1 400px", // increased base width
        maxWidth: "400px", // increased max width
        background: "#1E1E2F",
        borderRadius: "12px",
        outline: "2px #BADDF8 solid",
        outlineOffset: "-2px",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Image + Place */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <img
          src={reward.img}
          alt={reward.place}
          style={{ height: "80px", width: "108px" }}
        />
        <div
          style={{
            textAlign: "center",
            color: "#F8F8F8",
            fontSize: "22px",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {reward.place}
        </div>
      </div>

      {/* Amount */}
      <div
        style={{
          color: "#BADDF8",
          fontSize: "32px",
          fontFamily: "Lato",
          fontWeight: 500,
          wordWrap: "break-word",
        }}
      >
        {reward.amount}
      </div>

      {/* Description */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "18px",
          fontFamily: "Lato",
          fontWeight: 500,
          lineHeight: "28px",
          wordWrap: "break-word",
        }}
      >
        {reward.description}
      </div>
    </div>
        ))}
      </div>
    </div>
  );
}
