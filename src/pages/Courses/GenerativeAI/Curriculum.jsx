import React, { useState } from "react";
import { FileText, Rocket, Target } from "lucide-react";
import { GENAI_CURRICULUM_WEEKS, GENAI_LIVE_SCHEDULE } from "./genAiCurriculum";

const TYPE_BADGE = {
  mini: { label: "Mini project", className: "bg-blue-50 text-blue-800 border-blue-100" },
  major: { label: "Major build", className: "bg-amber-50 text-amber-900 border-amber-200" },
  capstone: { label: "Capstone", className: "bg-[#FBEAEB] text-[#B11C20] border-red-200" },
};

export default function Curriculum() {
  const [activeWeek, setActiveWeek] = useState(0);
  const current = GENAI_CURRICULUM_WEEKS[activeWeek];
  const badge = TYPE_BADGE[current.type];

  return (
    <section className="bg-white py-14 md:py-20 px-4 md:px-6">
      <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium">
          Course{" "}
          <span className="text-red-700 underline underline-offset-4">Curriculum</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          An 8-week mentor-led plan — from Python foundations to production GenAI systems.
          Live online · {GENAI_LIVE_SCHEDULE.daysPerWeek} · {GENAI_LIVE_SCHEDULE.hoursPerDay}.
        </p>
      </div>

      {/* Week timeline (desktop) */}
      <div className="max-w-6xl mx-auto mb-4 hidden md:flex gap-1">
        {GENAI_CURRICULUM_WEEKS.map((w, i) => (
          <button
            key={w.week}
            type="button"
            onClick={() => setActiveWeek(i)}
            className={`cursor-pointer flex-1 py-2 text-[11px] font-semibold rounded-lg transition ${
              activeWeek === i
                ? "bg-[#B11C20] text-white shadow"
                : "bg-red-50 text-[#B11C20] hover:bg-red-100"
            }`}
          >
            W{w.week}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto bg-red-50 p-4 md:p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Week list */}
          <div className="space-y-2 overflow-x-auto md:overflow-visible flex md:block gap-2 md:gap-0 pb-1 md:pb-0">
            {GENAI_CURRICULUM_WEEKS.map((week, index) => (
              <button
                key={week.week}
                type="button"
                onClick={() => setActiveWeek(index)}
                className={`cursor-pointer w-full text-left p-3 md:p-4 rounded-lg border-l-4 transition min-w-[240px] md:min-w-0 ${
                  activeWeek === index
                    ? "bg-white border-red-600 shadow"
                    : "border-transparent hover:bg-white/80 bg-white/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-sm text-[#B11C20]">Week {week.week}</span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${TYPE_BADGE[week.type].className}`}
                  >
                    {TYPE_BADGE[week.type].label}
                  </span>
                </div>
                <div className="text-gray-800 text-sm font-medium mt-1 leading-snug">
                  {week.title}
                </div>
                <div className="text-gray-500 text-xs mt-0.5 truncate">{week.project.name}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow h-full">
              {current.phaseLabel && (
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#B11C20] mb-2">
                  {current.phaseLabel}
                </p>
              )}

              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <FileText className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-700">
                      Week {current.week}: {current.title}
                    </h3>
                    <span
                      className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded border ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Topics covered
                </p>
                <ul className="space-y-2">
                  {current.topics.map((topic) => (
                    <li key={topic} className="flex gap-2 text-sm text-gray-800">
                      <span className="text-red-600 shrink-0">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {current.deliveryPlan && (
                <div className="mb-5 rounded-xl border border-amber-200/80 bg-amber-50/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-900 mb-3 flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5" />
                    Six-day delivery plan
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {current.deliveryPlan.map((day) => (
                      <div
                        key={day}
                        className="text-[11px] sm:text-xs bg-white border border-amber-100 rounded-lg px-2.5 py-2 text-gray-800 font-medium"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {current.capstoneOptions && (
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Capstone options
                  </p>
                  <ul className="space-y-1.5">
                    {current.capstoneOptions.map((opt) => (
                      <li
                        key={opt}
                        className={`text-sm ${
                          opt.includes("recommended")
                            ? "font-semibold text-[#B11C20]"
                            : "text-gray-700"
                        }`}
                      >
                        {opt.includes("recommended") ? "★ " : "· "}
                        {opt.replace(" (recommended)", "")}
                        {opt.includes("recommended") && (
                          <span className="ml-1 text-[10px] uppercase text-[#B11C20]">
                            recommended
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  {current.type === "capstone" ? "Recommended build" : "Weekly project"}
                </p>
                <p className="font-semibold text-gray-900">{current.project.name}</p>
                <ul className="mt-2 space-y-1.5">
                  {current.project.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-[#B11C20]">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 items-start rounded-lg bg-[#FBEAEB]/50 border border-red-100 px-3 py-2.5">
                <Target className="w-4 h-4 text-[#B11C20] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800 leading-relaxed">
                  <span className="font-semibold text-[#B11C20]">Outcome: </span>
                  {current.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
