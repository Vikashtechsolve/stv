import React, { useState } from "react";
import {
  Upload,
  ArrowRight,
  CheckCircle,
  Users,
  ClipboardCheck,
} from "lucide-react";
import ResumeReviewForm from "./ResumeReviewForm";

const ResumeReview = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="w-full bg-[#E2E2E2] py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        {/* Heading */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center lg:text-left">
          Get Your Resume Reviewed by <br />
          Industry Experts{" "}
          <span className="red-gradient font-extrabold">– in Just ₹149</span>
        </h1>

        {/* Description */}
        <p className="mt-6 red-gradient font-nunito font-medium text-center lg:text-left">
          “Your resume is your first impression! <br />
          Let experts refine it, highlight your skills, and guide you <br />
          toward your dream job”
        </p>

        {/* Upload + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition">
            <Upload size={18} /> Upload your Resume
          </button>

          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center cursor-pointer justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg px-6 py-3 shadow-md hover:scale-105 transition"
          >
            Book Live Review Session <ArrowRight size={18} />
          </button>

          {isFormOpen && (
            <ResumeReviewForm onClose={() => setIsFormOpen(false)} />
          )}
        </div>

        {/* Features Section */}
        <div className="w-full flex flex-col items-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
            <div className="bg-blue-50 p-5 rounded-xl shadow-sm w-[260px] text-center">
              <CheckCircle className="text-blue-700 mx-auto mb-2" size={24} />
              <h3 className="font-semibold text-lg">Fast Response</h3>
              <p className="text-sm text-gray-600 mt-2">
                Get your resume reviewed within hours.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-sm w-[260px] text-center">
              <Users className="text-blue-700 mx-auto mb-2" size={24} />
              <h3 className="font-semibold text-lg">Real Mentors</h3>
              <p className="text-sm text-gray-600 mt-2">
                Experts from top companies & universities.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-sm w-[260px] text-center">
              <ClipboardCheck
                className="text-blue-700 mx-auto mb-2"
                size={24}
              />
              <h3 className="font-semibold text-lg">Personalized Feedback</h3>
              <p className="text-sm text-gray-600 mt-2">
                Receive actionable suggestions tailored to your profile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://res.cloudinary.com/dc4gqqd35/image/upload/v1761277698/Recruitment_agent_analyzing_candidates_resumes_qssst5.png"
          alt="Resume Illustration"
          className="max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default ResumeReview;
