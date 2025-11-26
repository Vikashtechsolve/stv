import React from "react";

const ResumeProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Resume",
      desc: "Submit your resume through our secure portal. Just drag and drop your file — it’s safe, fast, and confidential.",
    },
    {
      number: "2",
      title: "Expert Assigned",
      desc: "Our experienced mentor reviews your resume carefully and schedules a personalized feedback session just for you.",
    },
    {
      number: "3",
      title: "Live 1:1 Session",
      desc: "Join a live interactive session with your assigned expert to understand your resume’s strengths, weaknesses, and improvement areas.",
    },
    {
      number: "4",
      title: "Receive Updated Plan",
      desc: "After the session, you’ll receive an updated resume improvement plan and a skill roadmap PDF to guide your next steps.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24 text-center">
      {/* Heading */}
      <h2 className="font-playfair text-3xl sm:text-4xl  text-gray-800  mb-12">
        How Our Resume Review Process Works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {steps.map((s, i) => (
          <div
            key={i}
            className="w-full max-w-[320px] h-[230px] bg-gradient-to-b from-[#EEF4FF] to-[#F7F3FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            {/* Number Badge */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b from-[#4b6ef5] to-[#8b5cf6] text-white font-semibold text-lg shadow-md mb-4">
              {s.number}
            </div>

            {/* Text */}
            <h3 className="font-semibold text-base md:text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeProcess;
