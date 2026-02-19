import React, { useState } from "react";

import programImg from "../FullstackDeveloper/img/programImg.jpg";
import designArrow from "../../../assets/design arrow.png";

const programData = {
  mini: {
    badge: "Best For Beginners",
    title: " - Data Analytics",
    duration:
      "3 Months ( 2 months of structured training + 1 month of real-world internship )",
    ideal: "Students, Freshers & Beginners",
    highlights: [
      "80 hours of intensive training focused on job-ready analytics skills",
      "3–4 real-world analytics projects with measurable business impact",
      "205+ interview-focused problems solved (SQL, Python & DSA)",
      "100% job-oriented curriculum aligned with industry requirement",
      "1-month real-world analytics internship with live datasets",
      "Industry-recognized Certificate of Completion in Data Analytic",
      "Lifetime access to the learning community for continuous support",
      "Placement assistance including resume building & mock interviews",
    ],
  },

  macro: {
    badge: "Best For Advanced",
    title: " - Data Analytics",
    duration: "4 Months ( 3 months of structured training + 1 month of industry internship )",
    ideal: "Working Professional, Experienced Analyst & Career Switchers",
    highlights: [
      "120 hours of intensive training covering advanced analytics and machine learning",
      "5–7 real-world analytics projects with measurable business impact",
      "300+ interview-focused problems solved (SQL, Python & DSA)",
      "100% job-oriented curriculum aligned with mid-level analytics roles",
      "1-month industry internship with live business datasets",
      "Industry-recognized Certificate of Completion in Advanced Data Analytics",
      "Lifetime access to the analytics community for continuous learning",
      "Placement assistance including resume building & mock interviews",
    ],
  },
};

export default function DataChooseProgram() {
  const [program, setProgram] = useState("mini");
  const data = programData[program];

  return (
    <section className="bg-[#fff] py-14 md:py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-medium">
          Choose your{" "}
          <span className="text-red-700 underline underline-offset-4 relative md:-top-3">
            Program
          </span>
        </h2>
      </div>

      {/* Top Right Section */}
      {/* Desktop unchanged */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-end items-center md:items-end gap-4 mb-6 relative">
        {/* Toggle */}
        <div className="bg-gray-200 rounded-lg p-1 flex ">
          <button
            onClick={() => setProgram("mini")}
            className={`px-4 md:px-5 py-2 rounded-lg text-sm md:text-base ${
              program === "mini"
                ? "bg-white shadow font-medium text-red-700"
                : "text-gray-600"
            }`}
          >
            Mini Program
          </button>

          <button
            onClick={() => setProgram("macro")}
            className={`px-4 md:px-5 py-2 rounded-lg text-sm md:text-base ${
              program === "macro"
                ? "bg-white shadow font-medium text-red-700"
                : "text-gray-600"
            }`}
          >
            Macro Program
          </button>
        </div>

        {/* Batch text */}
        <div
          className="

          text-sm
          md:relative md:-right-60 md:-mt-22
          text-center md:text-left

        "
        >
          Batch Starting on :
          <span className="text-red-600 font-medium ml-1">
            20th January, 2026
          </span>
          <img
            src={designArrow}
            alt="logo"
            className="h-8 md:h-10 mx-auto md:mx-0"
          />
        </div>

        {/* Apply button */}
        <div
          className="

          md:flex md:justify-end md:items-end md:relative md:-right-20 md:-mt-10

        "
        >
          <button className="bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 transition">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      {/* Desktop unchanged */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
        {/* Image */}
        <div>
          <img
            src={programImg}
            className="rounded-2xl w-full h-[240px] sm:h-[300px] md:h-[380px] object-cover"
          />
        </div>

        {/* Card */}
        <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(230,241,251,0.6)_100%)] rounded-xl p-4 md:p-6 relative shadow-[2px_2px_12px_0px_#00000040] ">
          {/* Badge */}
          <div className="absolute -top-4 left-4 md:left-6 bg-red-700 text-white px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded shadow">
            {data.badge}
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold mb-4 mt-4">
            <span className="text-red-700">
              {program === "mini" ? "Mini Program" : "Macro Program"}
            </span>

            {/* {" – Full Stack MERN Development"} */}
            {data.title}
          </h3>

          {/* Details */}
          <div className="space-y-2 mb-4 text-sm md:text-base">
            <div>
              <span className="text-red-700 font-medium">Duration –</span>{" "}
              {data.duration}
            </div>

            <div>
              <span className="text-red-700 font-medium">Ideal For –</span>{" "}
              {data.ideal}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="text-red-700 font-medium mb-2 text-sm md:text-base">
              Program Highlights :
            </div>

            <ul className="space-y-2 text-sm md:text-base">
              {data.highlights.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
