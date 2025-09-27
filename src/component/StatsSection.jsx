import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "95%",
      text: "Students got clarity after Mentorship",
    },
    {
      value: "1K+",
      text: "Doubts Solved Live",
    },
    {
      value: "80%",
      text: "Interview Confidence Boosted",
    },
  ];

  const stats2 = [
    {
      value: "500+",
      text: "Resume Reviewed & Improved",
    },
    {
      value: "500+",
      text: "Resume Reviewed & Improved",
    },

  ];

  const points = [
    "Get Industry-focused Training Programs.",
    "Real-world Projects & Case Studies.",
    "Career support & Placement assistance.",
  ];

  return (
    <div className="py-8 px-4 -mr-6">
      <div className="flex justify-end">
        <div className="flex flex-col md:flex-row gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-red-100 rounded-xl px-6 py-6 w-55 text-center"
            >
              <h2 className="text-5xl font-bold text-red-500 font-nunito">{stat.value}</h2>
              <p className="text-black font-semibold text-sm mt-2 font-nunito">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mt-6 p-6 rounded-lg">
        {/* Left Side - Bullet Points */}
        <div className="space-y-3 text-black text-base md:text-xl lg:text-2xl font-nunito">
          {points.map((point, index) => (
            <p key={index} className="flex items-start">
              <span className="text-black mr-2">›</span>
              {point}
            </p>
          ))}
        </div>


        {/* Right Side - Stats */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
          {stats2.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-red-100 rounded-xl px-6 py-6 w-55 text-center"
            >
              <h2 className="text-5xl font-bold text-red-500 font-nunito">{stat.value}</h2>
              <p className="text-black font-semibold text-sm mt-2 font-nunito">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
