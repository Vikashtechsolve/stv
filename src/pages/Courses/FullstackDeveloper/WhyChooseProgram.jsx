import React from "react";
import certificate from "../FullstackDeveloper/img/certificate.png";

const features = [
  {
    title: "Job-Focused Curriculum",
    desc: "Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from full-stack developers — not outdated theory.",
  },
  {
    title: "Structure Growth Path",
    desc: "Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.",
  },
  {
    title: "Industry-Experienced Mentor",
    desc: "Learn directly from working professionals with real-world experience in building and scaling applications, not just academic instructors.",
  },
  {
    title: "Internship Experience Included",
    desc: "Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.",
  },
  {
    title: "Hands-On, Project-Driven Learning",
    desc: "Every concept is backed by practical implementation, real-world projects, and portfolio-ready applications that showcase your skills to recruiters.",
  },
  {
    title: "Career Support & Placement Assistance",
    desc: "From resume building and mock interviews to job referrals and hiring support — we help you transition from learner to professional.",
  },
];

const WhyChooseProgram = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(244,203,204,0.3)_100%)] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-6 sm:gap-10 mb-12 sm:mb-16">

        {/* Certificate */}
        <div className="">
          <img
            src={certificate}
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
            A career-focused full-stack program built to take you from learning to hiring-ready.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            <button className="bg-[#B11C20] text-white px-6 py-3 rounded-2xl font-normal hover:bg-red-800 transition w-full sm:w-auto">
              Register Now
            </button>

            <button className="border border-red-700 text-red-700 px-6 py-3 rounded-2xl font-medium hover:bg-red-50 transition w-full sm:w-auto">
              Download Brochure
            </button>

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
