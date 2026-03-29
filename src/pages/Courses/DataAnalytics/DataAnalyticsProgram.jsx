import React, { useEffect, useState } from "react";
import boyImg from "../../../../public/boy1.png";
import girlImg from "../../../../public/girl2.png";
import DownloadButton from "../../../assets/download Button.png";

import WhyLearnSection from "./WhyLearnSection";
import WhyProgramWorks from "./WhyProgramWorks";
import WhatLearn from "./WhatLearn";
import DataAnalyticsAddmission from "./DataAnalyticsAddmission";
import CourseFees from "../FullstackDeveloper/CourseFees";
import Curriculum from "./DataAnalyticsCurriculum";
import DataChooseProgram from "./DataChoosesProgram";
import DataAnalyticsOutcomes from "./DataAnalyticsOutcomes";
import HiringPartners from "./hiringstories";
import DataSuccessStories from "./DataSuccessStories";
import FAQ from "../FullstackDeveloper/FAQ";
import Fees from "./Fees";

import Layout from "../../../component/Layout";
import CourseApplyModal from "../../../component/courses/CourseApplyModal";
import { DATA_ANALYTICS_BROCHURE } from "../../../constants/courseBrochures";

const DataAnalyticsProgram = () => {

  const images = [boyImg, girlImg];
  const [currentImage, setCurrentImage] = useState(0);
  const [applyOpen, setApplyOpen] = useState(false);
  const [applyProgram, setApplyProgram] = useState(null);

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
              Data Analytics <span className="text-[#B11C20]">Program</span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl text-sm sm:text-base">
              A structured, industry-aligned Data Analytics program designed to make you job-ready through hands-on projects, real-world case studies, practical tools training, and focused interview preparation guided by industry experts.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-row sm:flex-row sm:items-center gap-4 sm:gap-6">

              <button
                type="button"
                onClick={() => {
                  setApplyProgram(null);
                  setApplyOpen(true);
                }}
                className="cursor-pointer bg-[#B11C20] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-fit"
              >
                Apply Now
              </button>

              <span className="hidden sm:block border-l h-6"></span>

              <div className="text-gray-700">

                <p className="text-sm sm:text-base">
                  Batch Starting on{" "}
                  <span className="text-[#B11C20] font-semibold">
                    28th January, 2026
                  </span>
                </p>

                <a
                  href={DATA_ANALYTICS_BROCHURE.href}
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
                ["Topics Covered", "20+ Industry Tools"],
                ["Real Projects", "10-15 Data Projects"],
                ["Live Training", "80-120 Hours"],
                ["Career Support", "100% Placement Assistance"],
                ["Mentor Support", "1:1 Expert Guidance"],
                ["Placement Support", "1:1 Career Guidance"],
              ].map(([title, desc], i) => (

                <div
                  key={i}
                  className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
                >

                  <h4 className="font-serif text-xs sm:text-sm">
                    {title}
                  </h4>

                  <p className="text-[#B11C20] font-semibold text-xs sm:text-sm mt-1">
                    {desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center mt-10 md:mt-32">

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
            <p className="text-[#B11C20] text-lg font-semibold">3-4 Months</p>
            <p className="text-gray-500 text-sm">Course Duration</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">
              Training + Internship
            </p>
            <p className="text-gray-500 text-sm">Program Schedule</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">
              Online
            </p>
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

        <WhyLearnSection />
        <WhyProgramWorks
          onRegisterClick={() => {
            setApplyProgram(null);
            setApplyOpen(true);
          }}
        />
        <WhatLearn />
        <DataAnalyticsAddmission />
        <Fees />
        <Curriculum />
        <DataChooseProgram
          onApplyClick={(prog) => {
            setApplyProgram(prog);
            setApplyOpen(true);
          }}
        />
        <DataAnalyticsOutcomes />
        <HiringPartners />
        <DataSuccessStories />
        <FAQ />

      </section>

      <CourseApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        courseType="data_analytics"
        courseTitle="Data Analytics Program"
        defaultProgram={applyProgram}
      />
    </Layout>
  );
};

export default DataAnalyticsProgram;