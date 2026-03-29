import React from "react";

import img1 from "../FullstackDeveloper/img/img1.jpg";
import img2 from "../FullstackDeveloper/img/img2.jpg";
import img3 from "../FullstackDeveloper/img/img3.jpg";

const WhyVTS = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl font-normal mb-10 sm:mb-14 lg:mb-16">
        What makes{" "}
        <span className="text-red-700 text-3xl font-semibold border-b-2 border-red-700 pb-1 relative -top-2">
          VTS
        </span>{" "}
        Different
      </h2>

      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-16">

        {/* Images */}
        <div className="flex justify-center gap-3 sm:gap-5 lg:gap-6 w-full lg:w-auto">

          {/* Image 1 */}
          <img
            src={img1}
            alt=""
            className="
              w-[28%] sm:w-[150px] lg:w-[160px]
              h-[240px] sm:h-[320px] lg:h-[360px]
              object-cover
              rounded-[20px] lg:rounded-[25px]
              shadow-lg
            "
          />

          {/* Image 2 */}
          <img
            src={img2}
            alt=""
            className="
              w-[28%] sm:w-[150px] lg:w-[160px]
              h-[240px] sm:h-[320px] lg:h-[360px]
              object-cover
              rounded-[20px] lg:rounded-[25px]
              shadow-lg
              relative
              -top-3 sm:-top-5 lg:-top-6
            "
          />

          {/* Image 3 */}
          <img
            src={img3}
            alt=""
            className="
              w-[28%] sm:w-[150px] lg:w-[160px]
              h-[240px] sm:h-[320px] lg:h-[360px]
              object-cover
              rounded-[20px] lg:rounded-[25px]
              shadow-lg
              relative
              -top-1 sm:-top-2 lg:-top-3
            "
          />

        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full max-w-[520px]">

          {/* Card 1 */}
          <div className="bg-white shadow-[2px_2px_8px_0px_#00000040] rounded-xl  p-5 sm:p-6 w-full">
            <h3 className="text-red-700 font-semibold mb-2 text-base sm:text-lg">
              Industry-Focused Learning
            </h3>
            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              We bridge the gap between academics and industry with a job-ready
              full-stack curriculum built for real-world development roles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-[2px_2px_8px_0px_#00000040] p-5 sm:p-6 w-full">
            <h3 className="text-red-700 font-semibold mb-2 text-base sm:text-lg">
              Expert-Led Training
            </h3>
            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              Learn directly from experienced professionals working at top tech
              companies and building products at scale.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-[2px_2px_8px_0px_#00000040] p-5 sm:p-6 w-full">
            <h3 className="text-red-700 font-semibold mb-2 text-base sm:text-lg">
              Strong Placement Support
            </h3>
            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              From career mentoring to industry connections and alumni support,
              we help you move from learning to earning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyVTS;
