import React from "react";

import img1 from "../FullstackDeveloper/img/img1.jpg";
import img2 from "../FullstackDeveloper/img/img2.jpg";
import img3 from "../FullstackDeveloper/img/img3.jpg";

const WhyVTS = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Title */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#B11C20] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-4">
          Why VTS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          What makes{" "}
          <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
            VTS different
          </span>
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-16">

        {/* Images */}
        <div className="flex justify-center gap-3 sm:gap-5 lg:gap-6 w-full lg:w-auto">

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

          <div className="bg-white border border-slate-200 hover:border-red-200 hover:shadow-[0_18px_40px_-20px_rgba(177,28,32,0.35)] rounded-2xl p-5 sm:p-6 w-full transition">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#B11C20] to-[#87021C] flex items-center justify-center text-white font-bold mb-3">
              01
            </div>
            <h3 className="text-[#B11C20] font-semibold mb-1.5 text-base sm:text-lg">
              AI-Focused Learning
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              We bridge the gap between academics and industry with an AI-ready
              curriculum built for real-world generative AI development roles.
            </p>
          </div>

          <div className="bg-white border border-slate-200 hover:border-red-200 hover:shadow-[0_18px_40px_-20px_rgba(177,28,32,0.35)] rounded-2xl p-5 sm:p-6 w-full transition">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-bold mb-3">
              02
            </div>
            <h3 className="text-[#B11C20] font-semibold mb-1.5 text-base sm:text-lg">
              Expert-Led Training
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Learn directly from experienced AI professionals working with
              cutting-edge technologies like LLMs, RAG, and AI Agents.
            </p>
          </div>

          <div className="bg-white border border-slate-200 hover:border-red-200 hover:shadow-[0_18px_40px_-20px_rgba(177,28,32,0.35)] rounded-2xl p-5 sm:p-6 w-full transition">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#ED0331] to-[#B11C20] flex items-center justify-center text-white font-bold mb-3">
              03
            </div>
            <h3 className="text-[#B11C20] font-semibold mb-1.5 text-base sm:text-lg">
              Strong Career Support
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              From career mentoring to industry connections and portfolio
              building, we help you transition into high-demand AI roles.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyVTS;
