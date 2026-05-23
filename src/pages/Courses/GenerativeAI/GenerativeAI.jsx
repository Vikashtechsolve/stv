import React, { useEffect, useState } from "react";
import boyImg from "../../../../public/boy1.png";
import girlImg from "../../../../public/girl2.png";
import DownloadButton from "../../../assets/download Button.png";

import WhyVTS from "./WhyVTS";
import WhyChooseProgram from "./WhyChooseProgram";
import WhatYouLearn from "./WhatYouLearn";
import AdmissionProcess from "./AdmissionProcess";
import CourseFees from "./CourseFees";
import Curriculum from "./Curriculum";
import ChooseProgram from "./ChooseProgram";
import CareerOutcomes from "./CareerOutcomes";
import HiringPartners from "./HiringPartners";
import SuccessStories from "./SuccessStories";
import FAQ from "./FAQ";
import Layout from "../../../component/Layout";
import CourseApplyModal from "../../../component/courses/CourseApplyModal";
import { GENAI_BROCHURE } from "../../../constants/courseBrochures";

const GenerativeAI = () => {
  const images = [boyImg, girlImg];
  const [currentImage, setCurrentImage] = useState(0);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section className="relative w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <div className="w-full bg-[linear-gradient(to_bottom,#FFF_20%,#FBEAEB_80%)] mx-auto mt-2 px-6 md:px-12 lg:px-18 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-8 md:pb-36 lg:h-screen">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
              ⭐ Career-Ready Program
            </span>

            <h1 className="mt-6 text-3xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight">
              Master Generative AI &{" "}
              <span className="text-[#B11C20]">Build Real AI Applications</span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl text-sm sm:text-base">
              Learn Generative AI from Basics to Advanced and build
              production-ready AI applications using modern AI technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-row sm:flex-row sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setApplyOpen(true)}
                className="cursor-pointer bg-[#B11C20] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-fit"
              >
                Apply Now
              </button>

              <span className="hidden sm:block border-l h-6"></span>

              <div className="text-gray-700">
                <p className="text-sm sm:text-base">
                  Next Batch Starting{" "}
                  <span className="text-[#B11C20] font-semibold">Soon</span>
                </p>

                <a
                  href={GENAI_BROCHURE.href}
                  download={GENAI_BROCHURE.downloadAs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-[#B11C20] font-semibold hover:underline text-sm sm:text-base inline-flex items-center gap-1"
                >
                  <img
                    src={DownloadButton}
                    alt=""
                    className="w-4 h-4"
                    aria-hidden
                  />
                  Download Brochure
                </a>
              </div>
            </div>

            {/* FEATURE CARDS */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
              {[
                ["Beginner Friendly", "No Prior AI Experience Needed"],
                ["Industry Curriculum", "100% Industry-Aligned Modules"],
                ["Real Projects", "6+ AI-Powered Applications"],
                ["Mentor Support", "Live Expert-Led Sessions"],
                ["Certificate", "Industry-Recognized Certification"],
                ["12–16 Weeks", "Flexible Online Learning"],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
                >
                  <h4 className="font-serif text-xs sm:text-sm ">{title}</h4>

                  <p className="text-[#B11C20] font-semibold text-xs sm:text-sm mt-1">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:mt-32">
            <img
              src={images[currentImage]}
              alt="Student"
              className="relative z-10 w-[300px] sm:w-[420px] md:w-[520px] lg:w-[600px] transition-opacity duration-700"
            />
          </div>
        </div>

        {/* INFO STRIP */}
        <div className="relative -mt-6 md:mt-0 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 md:bottom-12 w-[92%] max-w-3xl bg-white rounded-2xl shadow-md p-5 grid grid-cols-2 md:flex md:flex-row items-center gap-6 text-center">
          <div>
            <p className="text-[#B11C20] text-lg font-semibold">12–16 Weeks</p>
            <p className="text-gray-500 text-sm">Course Duration</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">
              Training + Projects
            </p>
            <p className="text-gray-500 text-sm">Program Schedule</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">Online</p>
            <p className="text-gray-500 text-sm">Mode</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">
              Beginner to Advanced
            </p>
            <p className="text-gray-500 text-sm">Level</p>
          </div>
        </div>

        {/* Other Sections */}
        <WhyVTS />
        <WhyChooseProgram onRegisterClick={() => setApplyOpen(true)} />
        <WhatYouLearn />
        <AdmissionProcess />
        <CourseFees />
        <Curriculum />
        <ChooseProgram onApplyClick={() => setApplyOpen(true)} />
        <CareerOutcomes />
        <HiringPartners />
        <SuccessStories />
        <FAQ />
      </section>

      <CourseApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        courseType="generative_ai"
        courseTitle="Master Generative AI & Build Real AI Applications"
        defaultProgram="standard"
      />
    </Layout>
  );
};

export default GenerativeAI;
