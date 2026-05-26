import React from "react";
import {
  Stethoscope,
  Banknote,
  ShoppingBag,
  GraduationCap,
  Film,
  Briefcase,
  ScanSearch,
  Bot,
} from "lucide-react";

const cases = [
  {
    icon: Bot,
    title: "Smart Chatbots",
    desc: "Replace static FAQs with AI assistants that understand context, memory, and intent.",
    accent: "from-[#B11C20] to-[#87021C]",
  },
  {
    icon: ScanSearch,
    title: "Document Q&A",
    desc: "Talk to PDFs, contracts and knowledge bases using RAG and vector databases.",
    accent: "from-rose-500 to-rose-700",
  },
  {
    icon: Stethoscope,
    title: "Healthcare AI",
    desc: "Summarize medical reports, suggest diagnoses, and assist doctors in real time.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: Banknote,
    title: "Finance Automation",
    desc: "Detect fraud, draft reports, and run AI agents that analyse markets autonomously.",
    accent: "from-amber-500 to-orange-600",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Generate product descriptions, personalize recommendations, and power AI search.",
    accent: "from-pink-500 to-rose-600",
  },
  {
    icon: GraduationCap,
    title: "EdTech Tutors",
    desc: "Build AI tutors that adapt explanations, generate quizzes, and grade answers.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: Film,
    title: "Content Studios",
    desc: "Create marketing copy, scripts, captions and creative briefs in seconds.",
    accent: "from-[#ED0331] to-[#B11C20]",
  },
  {
    icon: Briefcase,
    title: "Workflow Agents",
    desc: "Build autonomous AI agents that book meetings, send emails and run reports.",
    accent: "from-slate-700 to-slate-900",
  },
];

export default function AIUseCases() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#B11C20] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-4">
            Generative AI in the real world
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Where{" "}
            <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
              Gen AI is shipping
            </span>{" "}
            today
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Companies across every industry are racing to build AI features.
            These are the exact use cases you will learn to design, build and
            deploy during the program.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-red-200 hover:shadow-[0_18px_40px_-20px_rgba(177,28,32,0.35)] transition"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-linear-to-br ${c.accent} flex items-center justify-center text-white shadow-sm mb-4`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                  {c.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>

                <div
                  className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-linear-to-br ${c.accent} opacity-0 group-hover:opacity-10 blur-2xl transition`}
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
