import React from "react";

import img1 from "../../../assets/dataDriven.jpg";
import img2 from "../../../assets/Expert.jpg";
import img3 from "../../../assets/strongIndustry.jpg";

const WhyLearnSection = () => {
  return (
    <section className="bg-white py-14 md:py-20 px-4 md:px-6">

      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-normal mb-10 md:mb-16 mt-10 md:mt-18">
        Why Learn{" "}
        <span className="text-red-700 text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 border-red-700 pb-1 relative md:-top-3">
          Data Analytics
        </span>{" "}
        at VTS
      </h2>


      {/* Container */}
      {/* Desktop layout unchanged */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">


        {/* Left Images */}
        {/* Mobile = horizontal scroll */}
        {/* Desktop = same vertical look */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0">

          <img
            src={img1}
            alt=""
            className="
              min-w-[120px] h-[260px]
              sm:min-w-[140px] sm:h-[300px]
              md:w-[160px] md:h-[360px]
              object-cover rounded-[20px] md:rounded-[25px] shadow-lg
            "
          />

          <img
            src={img2}
            alt=""
            className="
              min-w-[120px] h-[260px]
              sm:min-w-[140px] sm:h-[300px]
              md:w-[160px] md:h-[360px]
              object-cover rounded-[20px] md:rounded-[25px] shadow-lg
              md:relative md:-top-6
            "
          />

          <img
            src={img3}
            alt=""
            className="
              min-w-[120px] h-[260px]
              sm:min-w-[140px] sm:h-[300px]
              md:w-[160px] md:h-[360px]
              object-cover rounded-[20px] md:rounded-[25px] shadow-lg
              md:relative md:-top-3
            "
          />

        </div>



        {/* Right Cards */}
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[520px]">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full md:w-xl">

            <h3 className="text-red-700 font-semibold mb-2 text-sm sm:text-base">
              Data Driven Learning Ecosystem
            </h3>

            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              VTS focuses on turning beginners into job-ready data analysts through industry-aligned curriculum, real-world datasets, and hands-on experience with enterprise-level analytics tools.
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full md:w-xl">

            <h3 className="text-red-700 font-semibold mb-2 text-sm sm:text-base">
              Expert-Led, Industry-Focused Training
            </h3>

            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              Learn directly from experienced data analysts and data scientists working at top companies, solving real business problems and sharing practical insights from the field.
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full md:w-xl">

            <h3 className="text-red-700 font-semibold mb-2 text-sm sm:text-base">
              Strong Industry & Hiring Network
            </h3>

            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              With partnerships across e-commerce, fintech, healthcare, and consulting domains, VTS connects learners to opportunities at India’s leading data-driven organizations.
            </p>

          </div>

        </div>


      </div>

    </section>
  );
};

export default WhyLearnSection;
