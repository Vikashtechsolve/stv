import React from "react";
import { Briefcase, PhoneCall } from "lucide-react";
import genAiCertificate from "./img/genAiCertificate.png";
import { GENAI_BROCHURE } from "../../../constants/courseBrochures";

const exclusiveHighlights = [
  {
    icon: Briefcase,
    title: "PPO for Top Developers",
    desc: "Excel in training and internship to unlock Pre-Placement Offer opportunities after course completion.",
  },
  {
    icon: PhoneCall,
    title: "1 Interview Call Included",
    desc: "Get a dedicated interview call arranged through VTS so you connect with real hiring opportunities.",
  },
];

const features = [
  {
    title: "Practical Learning",
    desc: "Every concept is backed by hands-on implementation. Build real AI applications, not just theory. You will work with LLMs, APIs, and AI agents from day one.",
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
    desc: "From resume building and mock interviews to job referrals, we help you prepare for and land roles in the rapidly growing AI industry.",
  },
  {
    title: "Portfolio Building",
    desc: "Build a strong portfolio of AI projects on GitHub that demonstrates your ability to design, develop, and deploy generative AI applications.",
  },
  {
    title: "Dual Certificates",
    desc: "Get two industry recognized certificates: one for course completion and one for your internship. Together they showcase your Generative AI skills and real-world experience.",
  },
];

const WhyChooseProgram = ({ onRegisterClick }) => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(244,203,204,0.3)_100%)] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">

            <h2 className="text-2xl sm:text-3xl font-medium mb-3">
              Why Choose{" "}
              <span className="text-[#B11C20] underline underline-offset-4 relative -top-2">
                This Program ?
              </span>
            </h2>

            <p className="text-gray-900 mb-6 text-sm sm:text-base leading-relaxed">
              A 3 month career-focused Generative AI program with 2 months of training and 1 month internship, built to take you from beginner to AI-ready professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

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

          {/* Certificate showcase */}
          <div className="w-full lg:flex-[1.25] order-1 lg:order-2">
            <p className="text-center text-xs sm:text-sm font-medium text-[#B11C20] uppercase tracking-wide mb-3">
              Your Certificates
            </p>

            <div className="relative mx-auto w-full max-w-[min(100%,560px)] lg:max-w-none">
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-[28px] bg-gradient-to-br from-[#FBEAEB] via-white to-[#F9DEDF] opacity-90"
                aria-hidden
              />

              <div className="relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-[0_16px_48px_rgba(177,28,32,0.12)] border border-red-100">
                <img
                  src={genAiCertificate}
                  alt="VTS Generative AI course completion certificate sample"
                  className="w-full h-auto rounded-lg sm:rounded-xl object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
                <span className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium bg-white text-[#B11C20] rounded-full border border-red-200 shadow-sm">
                  Course Completion
                </span>
                <span className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium bg-white text-[#B11C20] rounded-full border border-red-200 shadow-sm">
                  Internship
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Exclusive highlights */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {exclusiveHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border-2 border-[#B11C20] bg-[linear-gradient(135deg,#fff_0%,#FBEAEB_100%)] p-5 sm:p-6 shadow-md"
            >
              <div className="absolute top-0 right-0 bg-[#B11C20] text-white text-[10px] sm:text-xs font-bold uppercase px-3 py-1 rounded-bl-xl">
                VTS Exclusive
              </div>
              <div className="flex items-start gap-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-[#B11C20] flex items-center justify-center text-white shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
