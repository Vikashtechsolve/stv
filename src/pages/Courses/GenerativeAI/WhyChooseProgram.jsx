import React from "react";
import genAiCertificate from "./img/genAiCertificate.png";
import { GENAI_BROCHURE } from "../../../constants/courseBrochures";

const features = [
  {
    title: "Practical Learning",
    desc: "Every concept is backed by hands-on implementation — build real AI applications, not just learn theory. You'll work with LLMs, APIs, and AI agents from day one.",
  },
  {
    title: "Live Mentorship",
    desc: "Get guidance from experienced AI professionals through live sessions, real-time doubt solving, and personalized feedback on your projects.",
  },
  {
    title: "Industry Projects",
    desc: "Work on production-grade AI projects including chatbots, document Q&A systems, and AI assistants that you can showcase to recruiters.",
  },
  {
    title: "Career Guidance",
    desc: "From resume building and mock interviews to job referrals — we help you prepare for and land roles in the rapidly growing AI industry.",
  },
  {
    title: "Portfolio Building",
    desc: "Build a strong portfolio of AI projects on GitHub that demonstrates your ability to design, develop, and deploy generative AI applications.",
  },
  {
    title: "Certificate",
    desc: "Earn an industry-recognized certificate upon completion that validates your skills in Generative AI development and modern AI technologies.",
  },
];

const WhyChooseProgram = ({ onRegisterClick }) => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(244,203,204,0.3)_100%)] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-6 sm:gap-10 mb-12 sm:mb-16">

        {/* Certificate */}
        <div className="">
          <img
            src={genAiCertificate}
            alt="certificate"
            className="
              w-[220px]
              sm:w-[260px]
              lg:w-[230px]
              object-contain
            "
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-md">

          <h2 className="text-2xl sm:text-3xl font-medium mb-3">
            Why Choose{" "}
            <span className="text-[#B11C20] underline underline-offset-4 relative -top-2">
              This Program ?
            </span>
          </h2>

          <p className="text-gray-900 mb-6 text-sm sm:text-base">
            A career-focused Generative AI program built to take you from beginner to AI-ready professional.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            <button
              type="button"
              onClick={() => onRegisterClick?.()}
              className="cursor-pointer bg-[#B11C20] text-white px-6 py-3 rounded-2xl font-normal hover:bg-red-800 transition w-full sm:w-auto"
            >
              Register Now
            </button>

            <a
              href={GENAI_BROCHURE.href}
              download={GENAI_BROCHURE.downloadAs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center cursor-pointer border border-red-700 text-red-700 px-6 py-3 rounded-2xl font-medium hover:bg-red-50 transition w-full sm:w-auto text-center"
            >
              Download Brochure
            </a>

          </div>

        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              border border-gray-300
              rounded-[30px] sm:rounded-full
              px-5 sm:px-6
              py-5 sm:py-6
              flex
              items-start
              gap-4
              shadow-sm
            "
          >

            {/* Check Icon */}
            <div className="mt-1 flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-[#2250A9] flex items-center justify-center text-white text-sm">
                ✓
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                {item.title}
              </h3>

              <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseProgram;
