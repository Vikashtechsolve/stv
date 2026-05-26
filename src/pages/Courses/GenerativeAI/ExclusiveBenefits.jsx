import React from "react";
import { motion } from "framer-motion";
import { Briefcase, PhoneCall, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    badge: "Exclusive",
    title: "PPO Opportunity",
    highlight: "Pre-Placement Offer for top performers",
    desc: "Strong developers who excel during training and internship get a real chance to receive a Pre-Placement Offer (PPO) from hiring partners after completing the course.",
    accent: "from-[#B11C20] to-[#87021C]",
  },
  {
    icon: PhoneCall,
    badge: "Guaranteed",
    title: "1 Interview Call",
    highlight: "Direct interview opportunity included",
    desc: "Every learner gets 1 dedicated interview call arranged through VTS hiring support, so you get real exposure to recruiters beyond just learning.",
    accent: "from-[#2250A9] to-[#1a3d7a]",
  },
];

export default function ExclusiveBenefits({ onApplyClick }) {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#B11C20] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-4">
            <Sparkles className="w-4 h-4" />
            Only at VTS Generative AI
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Exclusive{" "}
            <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
              Career Benefits
            </span>
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Benefits you will not find in typical online courses. Built to turn
            skilled learners into hired AI developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-px rounded-2xl sm:rounded-3xl bg-linear-to-br ${item.accent} opacity-90`}
                />

                <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.accent} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.75} />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#B11C20] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[#B11C20] font-semibold text-sm sm:text-base mb-3">
                    {item.highlight}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 p-5 sm:p-6 rounded-2xl bg-[linear-gradient(90deg,#FBEAEB_0%,#fff_50%,#FBEAEB_100%)] border border-red-100"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#B11C20] to-[#87021C] flex items-center justify-center text-white shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-800">
              <span className="font-semibold text-[#B11C20]">
                Perform well in projects and internship
              </span>{" "}
              to maximize your PPO and placement chances.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onApplyClick?.()}
            className="cursor-pointer shrink-0 bg-[#B11C20] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-red-800 transition text-sm sm:text-base"
          >
            Apply for Next Batch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
