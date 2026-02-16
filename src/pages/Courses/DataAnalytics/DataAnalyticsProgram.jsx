import React, { useEffect, useState } from "react";
import boyImg from "../../../../public/boy1.png";
import girlImg from "../../../../public/girl2.png";
import DownloadButton from "../../../assets/download Button.png"

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

const DataAnalyticsProgram = () => {
  const images = [boyImg, girlImg];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden ">
      {/* HERO SECTION */}
      {/* Desktop layout unchanged */}
      <div className="w-full bg-[linear-gradient(to_bottom,#FFF_20%,#FBEAEB_80%)] mx-auto px-6 md:px-18 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-32 md:pb-0">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
            ⭐ Career-Ready Program
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bol font-serif leading-tight">
            Data Analytics <span className="text-[#B11C20]">Program</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-600 max-w-xl text-sm sm:text-base">
            A structured, industry-aligned Data Analytics program designed to
            make you job-ready through hands-on projects, real-world case
            studies, practical tools training, and focused interview preparation
            guided by industry experts.
          </p>

          {/* Button section */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <button className="bg-[#B11C20] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-fit">
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

              <button className="text-[#B11C20] font-semibold hover:underline text-sm sm:text-base">
                <img src={DownloadButton} alt="Download Brochure" className="w-4 h-4 inline mr-1 -mt-1"/> Download Brochure
              </button>
            </div>
          </div>

          {/* FEATURE CARDS */}
          {/* Mobile = 2 cols, Desktop unchanged */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-6 lg:gap-x-30">
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
                className="bg-white lg:w-60 p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition "
              >
                <h4 className="text-center font-serif text-xs sm:text-sm md:text-base">
                  {title}
                </h4>

                <p className="text-[#B11C20] text-center font-semibold text-xs sm:text-sm mt-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center mt-16 md:mt-26">
          {/* circle */}
          {/* <div className="absolute right-0 md:-right-18 top-5 w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[580px] md:h-[580px] bg-[linear-gradient(to_bottom,#FFF_20%,#F5DADA_80%)] rounded-full z-0"></div> */}

          {/* image */}
          <img
            src={images[currentImage]}
            alt="Student"
            className="relative right-0 md:-right-20 z-10 w-[420px] sm:w-[500px] md:w-[600px] transition-opacity duration-700"
          />
        </div>

        {/* INFO STRIP */}
        <div
          className=" 
          md:absolute
          md:z-50
          md:bg-white
          md:w-3xl
          md:rounded-2xl
          md:shadow-md
          md:p-6
          md:flex
          md:flex-row
          md:gap-x-8
          md:mt-10
          text-center
          bg-white
          rounded-2xl
          shadow-md
          p-6 flex flex-col gap-6 mt-10 lg:mt-175

        "
        >
          <div>
            <p className="text-[#B11C20] text-lg font-semibold ">3-4 Months</p>
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
            <p className="text-[#B11C20] font-semibold text-lg">Online</p>
            <p className="text-gray-500 text-sm">Mode</p>
          </div>

          <div className="hidden md:block">|</div>

          <div>
            <p className="text-[#B11C20] font-semibold text-lg">
              Beginner to Advanced
            </p>
            <p className="text-gray-500  text-sm">Level</p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <WhyLearnSection />
      <WhyProgramWorks />
      <WhatLearn />
      <DataAnalyticsAddmission />
      <Fees/>
      <Curriculum />
      <DataChooseProgram />
      <DataAnalyticsOutcomes />
      <HiringPartners />
      <DataSuccessStories />
      <FAQ />
    </section>
  );
};

export default DataAnalyticsProgram;
