import React from "react";

const StatsSection = () => {
  return (
    <div className=" w-[1200px] max-w-full mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Text Section */}
        <div className="order-2 md:order-1 flex flex-col justify-end">
          <div className="space-y-6 text-[#1B1718] text-xl md:text-2xl font-nunito">
            <p className="flex items-start">
              <span className="mr-3 text-red-600 text-2xl">›</span> Get Industry-focused Training Programs.
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-red-600 text-2xl">›</span> Real-world Projects & Case Studies.
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-red-600 text-2xl">›</span> Career support & Placement assistance.
            </p>
          </div>
        </div>

        {/* Right Side: Cards Section */}
        <div className="order-1 md:order-2 flex flex-col space-y-10 items-end w-full">
          
          {/* Mobile Layout (Grid 2x2 + 1 center) */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "95%", subtitle: "Students got clarity after Mentorship" },
                { title: "1K+", subtitle: "Live Doubts Solved " },
                { title: "90%", subtitle: "Interview Confidence Boost" },
                { title: "500+", subtitle: "Resumes Made Recruiter-Ready" },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg text-center p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-red-600">{card.title}</h2>
                  <p className="text-base md:text-lg mt-3 font-nunito">{card.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Last card centered */}
            <div className="flex justify-center mt-6">
              <div className="bg-white rounded-xl shadow-lg text-center p-8 w-[280px]">
                <h2 className="text-4xl md:text-5xl font-bold text-red-600">50+</h2>
                <p className="text-base md:text-lg mt-3 font-nunito">High-Impact Masterclasses Delivered</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap space-x-10 justify-end">
            {[
              { title: "95%", subtitle: "Students got clarity after Mentorship" },
              { title: "1K+", subtitle: "Live Doubts Solved" },
              { title: "90%", subtitle: "Interview Confidence Boost" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg text-center p-8 w-[280px]">
                <h2 className="text-4xl font-bold text-red-600">{card.title}</h2>
                <p className="text-lg mt-3 font-nunito">{card.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap md:flex-nowrap space-x-10 justify-end">
            {[
              { title: "500+", subtitle: "Resumes Made Recruiter Ready" },
              { title: "50+", subtitle: "High-Impact Masterclasses Delivered" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg text-center p-8 w-[280px]">
                <h2 className="text-4xl font-bold text-red-600">{card.title}</h2>
                <p className="text-lg mt-3 font-nunito">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width horizontal line */}
      <div className="border-t border-black w-full mt-10"></div>
    </div>
  );
};

export default StatsSection;
