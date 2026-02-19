import React from "react";
import certificate from "../FullstackDeveloper/img/certificate.png";
import BlueCheck from "../../../assets/blueWhiteCheck.png"

const features = [
  {
    title: "Career-Focused, Structured Learning",
    desc: "A well-defined learning path designed to make you job-ready — from analytics fundamentals to advanced concepts, with structured timelines and outcomes.",
  },
  {
    title: "Industry-Recognized Certificate",
    desc: "Earn a Certificate of Completion that validates your expertise in Python, SQL, data visualization, statistics, and analytics concepts, meeting industry standards.",
  },
  {
    title: "Real-World Projects & Live Experience",
    desc: "Work on multiple real business analytics projects using live datasets, including hands-on exposure through internships and capstone projects to build a strong portfolio.",
  },
  {
    title: "Comprehensive Interview Preparation",
    desc: "Practice hundreds of interview-focused problems covering SQL, Python, Pandas, DSA, Machine Learning, and analytics case questions, aligned with real hiring patterns.",
  },
  {
    title: "Business & Decision-Oriented Analytics",
    desc: "Learn how to analyze sales performance, customer behavior, marketing effectiveness, product metrics, and predictive insights using industry-relevant tools and frameworks.",
  },
  {
    title: "Expert Mentorship & Career Support",
    desc: "Get guidance from experienced data analysts from top product companies, consulting firms, and e-commerce domains, along with placement and job-readiness support.",
  },
];

const WhyProgramWorks = () => {
  return (

    <section className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(230,241,251,0.6)_100%)] py-14 md:py-20 px-4 md:px-6">


      {/* TOP SECTION */}
      {/* DESKTOP LAYOUT UNCHANGED */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 mb-12 md:mb-16">


        {/* TEXT (same position as desktop) */}
        <div className="text-center md:text-left order-2 md:order-1">

          <h2 className="text-2xl md:text-3xl font-medium mb-3">

            Why This{" "}
            <span className="text-[#B11C20] underline relative md:-top-3 underline-offset-4">
              Program Works ?
            </span>

          </h2>

          <p className="text-gray-900 mb-6 text-sm md:text-base">

            From fundamentals to advanced analytics — learn, practice, and get hired.

          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button className="bg-[#B11C20] text-white px-6 py-3 rounded-2xl font-normal hover:bg-red-800 transition">

              Register Now

            </button>

            <button className="border border-red-700 text-red-700 px-6 py-3 rounded-2xl font-medium hover:bg-red-50 transition">

              Download Brochure

            </button>

          </div>

        </div>



        {/* CERTIFICATE IMAGE (same position desktop right) */}
        <div className="border-red-700 p-2 order-1 md:order-2">

          <img
            src={certificate}
            alt="certificate"
            className="w-[180px] sm:w-[220px] md:w-[230px]"
          />

        </div>


      </div>



      {/* FEATURES GRID */}
      {/* Desktop unchanged */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {features.map((item, index) => (

          <div
            key={index}
            className=" px-4 py-5 md:py-6 flex items-start gap-4 "
          >

            {/* Check */}
            <div className="mt-1 ">

              <div className=" ">

                <img src={BlueCheck} alt="Check" className="h-5 w-8" />

              </div>

            </div>


            {/* Text */}
            <div>

              <h3 className="font-semibold text-base md:text-lg mb-1">

                {item.title}

              </h3>

              <p className="text-gray-900 text-sm leading-relaxed">

                {item.desc}

              </p>

            </div>

          </div>

        ))}

      </div>


    </section>

  );
};

export default WhyProgramWorks;
