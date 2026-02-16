import React, { useState } from "react";

import programImg from "../FullstackDeveloper/img/programImg.jpg";
import designArrow from "../../../assets/design arrow.png";

const programData = {
  mini: {
    badge: "Best For Beginners",
    title: "Mini Program – Full Stack MERN Development",
    duration: "3 Months ( 2 Months Training + 1 Month Internship )",
    ideal: "Beginners & Career Switchers",
    highlights: [
      "Fast-track, beginner-friendly curriculum focused on core full-stack skills",
      "Learn Frontend, Backend & Database using the MERN stack",
      "Hands-on learning with real-world mini & capstone projects",
      "Strong foundation in DSA & problem-solving",
      "Solve 130–150+ coding challenges",
      "Build production-ready web applications",
      "Focus on interview preparation & coding confidence",
      "Get ready for Junior Full Stack Developer roles in just 3 months",
    ],
  },

  macro: {
    badge: "Best For Advanced",
    title: "Macro Program – Full Stack MERN Development",
    duration: "6 Months ( Advanced Training + Paid Internship )",
    ideal: "Serious learners & career builders",
    highlights: [
      "Advanced frontend with React & Redux",
      "Backend scalability and architecture",
      "Real-world enterprise projects",
      "Cloud deployment & DevOps",
      "Solve 250+ coding challenges",
      "Interview preparation with mock interviews",
      "Paid internship opportunity",
    ],
  },
};

export default function ChooseProgram() {
  const [program, setProgram] = useState("mini");
  const data = programData[program];

  return (
    <section className="bg-[#fff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-medium">
          Choose your{" "}
          <span className="text-red-700 underline underline-offset-4 relative sm:-top-2">
            Program
          </span>
        </h2>
      </div>

      {/* Top Right Section */}
      <div className="max-w-6xl mx-auto mb-6">

        {/* Toggle */}
        <div className="flex justify-center sm:justify-end">
          <div className="bg-gray-200 rounded-lg p-1 flex w-full sm:w-auto">

            <button
              onClick={() => setProgram("mini")}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base transition ${
                program === "mini"
                  ? "bg-white shadow font-medium text-red-700"
                  : "text-gray-600"
              }`}
            >
              Mini Program
            </button>

            <button
              onClick={() => setProgram("macro")}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base transition ${
                program === "macro"
                  ? "bg-white shadow font-medium text-red-700"
                  : "text-gray-600"
              }`}
            >
              Macro Program
            </button>

          </div>
        </div>

        {/* Batch text + Apply button */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end gap-3 mt-4 text-center sm:text-right">

          <div className="text-sm flex items-center gap-2 justify-center sm:justify-end">
            <span>
              Batch Starting on :
              <span className="text-red-600 font-medium ml-1">
                20th January, 2026
              </span>
            </span>

            <img
              src={designArrow}
              alt="arrow"
              className="h-8 hidden sm:block"
            />
          </div>

          <button className="bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 transition">
            Apply Now
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src={programImg}
            alt="program"
            className="rounded-2xl w-full h-[250px] sm:h-[320px] lg:h-[380px] object-cover"
          />
        </div>

        {/* Right Card */}
        <div className="bg-red-50 rounded-xl p-5 sm:p-6 relative">

          {/* Badge */}
          <div className="absolute -top-4 left-4 sm:left-6 bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded shadow text-sm sm:text-base">
            {data.badge}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-4">
            <span className="text-red-700">
              {program === "mini" ? "Mini Program" : "Macro Program"}
            </span>
            {" – Full Stack MERN Development"}
          </h3>

          {/* Details */}
          <div className="space-y-2 mb-4 text-sm sm:text-base">

            <div>
              <span className="text-red-700 font-medium">
                Duration –
              </span>{" "}
              {data.duration}
            </div>

            <div>
              <span className="text-red-700 font-medium">
                Ideal For –
              </span>{" "}
              {data.ideal}
            </div>

          </div>

          {/* Highlights */}
          <div>

            <div className="text-red-700 font-medium mb-2 text-sm sm:text-base">
              Program Highlights :
            </div>

            <ul className="space-y-2 text-sm sm:text-base">

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
