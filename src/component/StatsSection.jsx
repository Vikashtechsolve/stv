import React from "react";

const StatsSection = () => {
  return (
    <div className="p-8 w-[1100px] max-w-full mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: Text Section */}
        <div className="order-2 md:order-1 flex flex-col justify-end">
          <div className="space-y-4 text-[#1B1718] text-lg">
            <p className="flex items-start">
              <span className="mr-2">›</span> Get Industry-focused Training Programs.
            </p>
            <p className="flex items-start">
              <span className="mr-2">›</span> Real-world Projects & Case Studies.
            </p>
            <p className="flex items-start">
              <span className="mr-2">›</span> Career support & Placement assistance.
            </p>
          </div>
        </div>

        {/* Right Side: Cards Section */}
        <div className="order-1 md:order-2 flex flex-col space-y-8 items-end w-full">
          
          {/* Mobile Layout (Grid 2x2 + 1 center) */}
          <div className="md:hidden">
            {/* First 4 cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow text-center p-6">
                <h2 className="text-3xl font-bold text-red-600">95%</h2>
                <p className="text-sm mt-2">
                  Students got clarity after <br /> Mentorship
                </p>
              </div>

              <div className="bg-white rounded-lg shadow text-center p-6">
                <h2 className="text-3xl font-bold text-red-600">1K+</h2>
                <p className="text-sm mt-2">
                  Doubts Solved <br /> Live
                </p>
              </div>

              <div className="bg-white rounded-lg shadow text-center p-6">
                <h2 className="text-3xl font-bold text-red-600">80%</h2>
                <p className="text-sm mt-2">
                  Interview Confidence <br /> Boosted
                </p>
              </div>

              <div className="bg-white rounded-lg shadow text-center p-6">
                <h2 className="text-3xl font-bold text-red-600">500+</h2>
                <p className="text-sm mt-2">
                  Resume Reviewed & <br /> Improved
                </p>
              </div>
            </div>

            {/* Last card centered */}
            <div className="flex justify-center mt-4">
              <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
                <h2 className="text-3xl font-bold text-red-600">500+</h2>
                <p className="text-sm mt-2">
                  Resume Reviewed & <br /> Improved
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap space-x-8 justify-end">
            <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
              <h2 className="text-3xl font-bold text-red-600">95%</h2>
              <p className="text-sm mt-2">
                Students got clarity after <br /> Mentorship
              </p>
            </div>

            <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
              <h2 className="text-3xl font-bold text-red-600">1K+</h2>
              <p className="text-sm mt-2">
                Doubts Solved <br /> Live
              </p>
            </div>

            <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
              <h2 className="text-3xl font-bold text-red-600">80%</h2>
              <p className="text-sm mt-2">
                Interview Confidence <br /> Boosted
              </p>
            </div>
          </div>

          <div className="hidden md:flex flex-wrap md:flex-nowrap space-x-8 justify-end">
            <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
              <h2 className="text-3xl font-bold text-red-600">500+</h2>
              <p className="text-sm mt-2">
                Resume Reviewed & <br /> Improved
              </p>
            </div>

            <div className="bg-white rounded-lg shadow text-center p-6 w-[250px]">
              <h2 className="text-3xl font-bold text-red-600">500+</h2>
              <p className="text-sm mt-2">
                Resume Reviewed & <br /> Improved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width horizontal line */}
      <div className="border-t border-black w-full mt-8"></div>
    </div>
  );
};

export default StatsSection;
