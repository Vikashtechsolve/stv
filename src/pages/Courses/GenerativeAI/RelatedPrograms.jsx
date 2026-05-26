import React from "react";
import { Link } from "react-router-dom";
import { Code2, LineChart, ArrowUpRight } from "lucide-react";

const programs = [
  {
    title: "Full Stack Developer",
    desc: "Build production web apps with React, Node.js, MongoDB and deployment.",
    href: "/fullstack-developer",
    icon: Code2,
    tag: "Career-Ready",
    duration: "6 Months",
  },
  {
    title: "Data Analytics Program",
    desc: "Master SQL, Python, Power BI and analytics for data-driven roles.",
    href: "/data-analytics",
    icon: LineChart,
    tag: "Job Focused",
    duration: "4 Months",
  },
];

export default function RelatedPrograms() {
  return (
    <section
      aria-label="Related VTS programs"
      className="bg-white py-14 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#B11C20] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-4">
            More from VTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Explore other{" "}
            <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
              career programs
            </span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Not sure if Generative AI is right for you? Check out our other
            mentor-led, project-driven programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                to={p.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:border-red-200 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.18)] transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#B11C20] to-[#87021C] flex items-center justify-center text-white shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B11C20] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1.5">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-slate-500">
                    {p.duration} · Online · Mentor-led
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#B11C20] group-hover:translate-x-0.5 transition">
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
