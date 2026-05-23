import React from "react";

const roles = [
  "Generative AI Developer",
  "AI Engineer",
  "Prompt Engineer",
  "LLM Developer",
  "AI Automation Engineer",
  "Full Stack AI Developer",
];

export default function CareerOutcomes() {

  return (
    <section className="bg-[#fff] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-3xl font-medium">

          Career{" "}
          <span className="text-red-700 underline underline-offset-4 relative -top-3">
            Outcomes
          </span>

        </h2>

        <p className="text-gray-600 mt-2">
          Where this program can take you — roles and opportunities in the AI industry
        </p>

      </div>


      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ROLES CARD */}
        <div>

          <div className="bg-[linear-gradient(to_bottom,#FFF_20%,#FBEAEB_80%)] rounded-xl p-8 relative overflow-hidden shadow-sm">

            {/* Ribbon */}
            <div className="absolute right-[-60px] top-[40px] rotate-45 bg-blue-100 text-blue-700 px-20 py-1 text-sm">
              High-Demand Roles
            </div>

            <h3 className="text-xl font-semibold text-red-700 mb-6 text-center">
              AI Career Roles
            </h3>

            <h4 className="text-red-700 font-medium mb-4">
              Job Roles You'll Be Ready For :
            </h4>

            <ul className="space-y-3">

              {roles.map((role, i) => (

                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{role}</span>
                </li>

              ))}

            </ul>

          </div>

          {/* Salary Box */}
          <div className="bg-white border border-red-200 mt-6 font-serif rounded-xl p-4 shadow-sm">

            Expected Salary Range –{" "}
            <span className="text-red-700">
              ₹ 6 – 15 LPA
            </span>

            <span className="text-red-700 ml-4">
              ₹ 15 – 30 LPA
            </span>

            <div className="text-red-600 text-sm mt-1">
              ( Entry-Level Roles ) &nbsp;&nbsp;
              ( Senior-Level Roles 2–3 Year Experience )
            </div>

          </div>

        </div>


        {/* GROWTH CARD */}
        <div>

          <div className="bg-[linear-gradient(to_bottom,#FFF_20%,#FBEAEB_80%)] rounded-xl p-8 relative overflow-hidden shadow-sm">

            {/* Ribbon */}
            <div className="absolute right-[-80px] top-[40px] rotate-45 bg-blue-100 text-blue-700 px-20 py-1 text-sm">
              Industry-Ready Expert
            </div>

            <h3 className="text-xl font-semibold text-red-700 mb-6 text-center">
              Growth Path
            </h3>

            <h4 className="text-red-700 font-medium mb-4">
              Industries Hiring AI Talent :
            </h4>

            <ul className="space-y-3">

              {[
                "Technology & SaaS Companies",
                "Healthcare & Biotech",
                "Finance & Banking",
                "E-commerce & Retail",
                "Education & EdTech",
                "Media & Content Platforms",
                "Startups & AI-First Companies",
              ].map((industry, i) => (

                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{industry}</span>
                </li>

              ))}

            </ul>

          </div>

          {/* Info Box */}
          <div className="bg-white border border-red-200 mt-6 rounded-xl font-serif p-4 shadow-sm">

            AI is one of the{" "}
            <span className="text-red-700 font-semibold">
              fastest-growing career fields
            </span>{" "}
            globally — demand for GenAI talent is surging across all industries.

          </div>

        </div>

      </div>

    </section>
  );
}
