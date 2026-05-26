import React from "react";

import programImg from "../FullstackDeveloper/img/programImg.jpg";
import { GENAI_ENROLLMENT } from "./genAiCourseConfig";

const audiences = [
  "Students exploring AI and technology careers",
  "Developers looking to add AI skills to their toolkit",
  "Full Stack Engineers wanting to build AI-powered apps",
  "AI Enthusiasts eager to work with LLMs and agents",
  "Freelancers wanting to offer AI development services",
  "Working Professionals transitioning into AI roles",
];

const highlights = [
  "PPO opportunity for strong developers after course completion",
  "1 guaranteed interview call through VTS hiring support",
  "Beginner friendly curriculum with no prior AI experience needed",
  "Build 6+ real AI-powered applications",
  "Work with OpenAI, Gemini, LangChain, and Hugging Face",
  "Learn RAG, AI Agents, and full-stack AI development",
  "Two industry-recognized certificates for course completion and internship",
  "3 months: 2 months training program and 1 month internship",
];

export default function ChooseProgram({ onApplyClick }) {
  return (
    <section className="bg-[#fff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-medium">
          Who Should{" "}
          <span className="text-red-700 underline underline-offset-4 relative sm:-top-2">
            Join
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          No prior AI knowledge required — this program is designed for everyone
        </p>
      </div>

      {/* Top Right Section */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end gap-3 mt-4 text-center sm:text-right">
          <div className="text-sm flex items-center gap-2 justify-center sm:justify-end">
            <span>
              Next Batch Starting :
              <span className="text-red-600 font-medium ml-1">
                {GENAI_ENROLLMENT.batchStartDisplay}
              </span>
              <span className="text-amber-700 font-semibold ml-2">
                · Only {GENAI_ENROLLMENT.seatsLeft} seats left
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => onApplyClick?.()}
            className="cursor-pointer bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src={programImg}
            alt="VTS Generative AI program: who should join — students, developers, professionals"
            loading="lazy"
            decoding="async"
            className="rounded-2xl w-full h-[250px] sm:h-[320px] lg:h-[380px] object-cover"
          />
        </div>

        {/* Right Card */}
        <div className="bg-red-50 rounded-xl p-5 sm:p-6 relative">

          {/* Badge */}
          <div className="absolute -top-4 left-4 sm:left-6 bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded shadow text-sm sm:text-base">
            Open for All Levels
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-4">
            <span className="text-red-700">Generative AI</span>
            {" — Complete Program"}
          </h3>

          {/* Ideal For */}
          <div className="mb-4">
            <div className="text-red-700 font-medium mb-2 text-sm sm:text-base">
              Ideal For :
            </div>

            <ul className="space-y-2 text-sm sm:text-base">
              {audiences.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <div className="text-red-700 font-medium mb-2 text-sm sm:text-base">
              Program Highlights :
            </div>

            <ul className="space-y-2 text-sm sm:text-base">
              {highlights.map((item, i) => (
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
