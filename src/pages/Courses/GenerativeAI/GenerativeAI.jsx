import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Flame,
  Clock,
  CheckCircle2,
  Download,
  Cpu,
  Star,
} from "lucide-react";

import WhyVTS from "./WhyVTS";
import WhyChooseProgram from "./WhyChooseProgram";
import WhatYouLearn from "./WhatYouLearn";
import AdmissionProcess from "./AdmissionProcess";
import CourseFees from "./CourseFees";
import Curriculum from "./Curriculum";
import ChooseProgram from "./ChooseProgram";
import CareerOutcomes from "./CareerOutcomes";
import HiringPartners from "./HiringPartners";
import SuccessStories from "./SuccessStories";
import FAQ from "./FAQ";
import EnrollmentUrgency from "./EnrollmentUrgency";
import ExclusiveBenefits from "./ExclusiveBenefits";
import LiveAIDemo from "./LiveAIDemo";
import AIUseCases from "./AIUseCases";
import RelatedPrograms from "./RelatedPrograms";
import { faqData } from "./FAQ";
import Layout from "../../../component/Layout";
import GenAiEnrollmentModal from "../../../component/courses/GenAiEnrollmentModal";
import { GENAI_BROCHURE } from "../../../constants/courseBrochures";
import { GENAI_ENROLLMENT, GENAI_PROGRAM_STATS } from "./genAiCourseConfig";
import {
  GENAI_REGISTRATION_FEE,
  genAiFullPaymentAmount,
} from "../../../constants/genAiFees";

const HERO_BULLETS = [
  `Build ${GENAI_PROGRAM_STATS.projects} production-ready AI applications`,
  "Work with OpenAI, Gemini, LangChain & RAG",
  "1 guaranteed interview call + PPO opportunity",
];

const HERO_STATS = [
  { value: "3 Months", label: "2 mo. training + 1 mo. internship" },
  { value: `${GENAI_PROGRAM_STATS.weeks} Weeks`, label: "Structured cohort plan" },
  { value: String(GENAI_PROGRAM_STATS.projects), label: "Real AI projects" },
  { value: String(GENAI_PROGRAM_STATS.certificates), label: "Industry certificate" },
];

const HERO_BADGES = [
  { label: "OpenAI" },
  { label: "Gemini" },
  { label: "LangChain" },
  { label: "RAG" },
  { label: "AI Agents" },
  { label: "FastAPI" },
];

const GenerativeAI = () => {
  const [applyOpen, setApplyOpen] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  const heroLines = [
    { prompt: "Build a chatbot that knows my docs", tag: "RAG" },
    { prompt: "Generate React code from a screenshot", tag: "Multimodal" },
    { prompt: "Summarize a 50-page contract in 5 bullets", tag: "Summarize" },
    { prompt: "Create an AI agent that books my meetings", tag: "Agents" },
  ];

  useEffect(() => {
    const id = setInterval(
      () => setActiveLine((p) => (p + 1) % heroLines.length),
      3200
    );
    return () => clearInterval(id);
  }, [heroLines.length]);

  const fullPay = genAiFullPaymentAmount();
  const pageUrl = "https://www.vikashtechsolution.com/generative-ai";
  const siteUrl = "https://www.vikashtechsolution.com";
  const ogImage = "https://www.vikashtechsolution.com/genai-og.png";
  const logoUrl =
    "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759848700/vks_fav_icon_2_rjzspg.svg";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Vikash Tech Solution",
    alternateName: "VTS",
    url: siteUrl,
    logo: logoUrl,
    description:
      "Vikash Tech Solution (VTS) is a tech learning platform offering industry-led programs in Generative AI, Full Stack Development, and modern software engineering.",
    sameAs: [
      "https://www.instagram.com/vikash_tech_solution/",
      "https://www.linkedin.com/in/vikash-tech-solution/",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Generative AI Program",
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Generative AI Program",
    description:
      "3-month Generative AI program by Vikash Tech Solution: 8 weeks live mentor-led training + 1 month internship. Build 8 portfolio projects — LLMs, Prompt Engineering, RAG, AI Agents, and Full-Stack AI with OpenAI, Gemini, LangChain and Hugging Face.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Vikash Tech Solution",
      url: siteUrl,
      sameAs: siteUrl,
    },
    image: ogImage,
    url: pageUrl,
    educationalLevel: "Beginner to Advanced",
    inLanguage: "en",
    timeRequired: "P3M",
    courseMode: "Online",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        startDate: "2026-07-01",
        courseWorkload: "P3M",
        location: {
          "@type": "VirtualLocation",
          url: pageUrl,
        },
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Seat booking",
        price: GENAI_REGISTRATION_FEE,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: "Full payment (no registration fee)",
        price: fullPay,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "240",
    },
  };

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>
          Generative AI Course Online (3 Months) | LLMs, RAG, AI Agents | VTS
        </title>
        <meta
          name="description"
          content="Join VTS Generative AI program: 3 months of live mentor-led training (2 months + 1 month internship). Build real AI apps with LLMs, Prompt Engineering, RAG, AI Agents, OpenAI, Gemini, LangChain. PPO opportunity + 1 interview call. Book your seat from ₹99."
        />
        <meta
          name="keywords"
          content="Generative AI course, GenAI training, LLM course, RAG, AI Agents, Prompt Engineering, AI internship India, OpenAI course, Gemini, LangChain, Hugging Face, Vikash Tech Solution, online AI bootcamp, Generative AI certification, AI developer course"
        />
        <meta name="author" content="Vikash Tech Solution" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#B11C20" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vikash Tech Solution" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:title"
          content="Generative AI Program (3 Months) — Build Real AI Apps | VTS"
        />
        <meta
          property="og:description"
          content="Learn LLMs, RAG, AI Agents and Full-Stack AI development. 2 months training + 1 month internship. PPO opportunity for top performers. Book your seat from ₹99."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="VTS Generative AI Program" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vikashtechsol" />
        <meta
          name="twitter:title"
          content="Generative AI Program — Build Real AI Apps | VTS"
        />
        <meta
          name="twitter:description"
          content="3-month Generative AI program: LLMs, RAG, AI Agents, Full-Stack AI. Book your seat from ₹99."
        />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <article className="relative w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section
          aria-label="Generative AI program overview"
          className="relative bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_70%,#f5f5f5_100%)] overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            }}
          />
          <div
            aria-hidden
            className="absolute top-[-140px] right-[-120px] w-[380px] h-[380px] rounded-full bg-[#B11C20]/6 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-[-180px] left-[-140px] w-[400px] h-[400px] rounded-full bg-slate-300/25 blur-3xl"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-[#B11C20] text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Career-Ready Program
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                  <Flame className="w-3.5 h-3.5" />
                  Only {GENAI_ENROLLMENT.seatsLeft} seats left
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-slate-900">
                Master{" "}
                <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
                  Generative AI
                </span>
                <br />
                & ship real AI apps.
              </h1>

              <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                A 3-month mentor-led program to take you from zero to building
                production-grade AI products with{" "}
                <span className="font-semibold text-slate-800">
                  LLMs, RAG, AI Agents
                </span>{" "}
                and full-stack integrations.
              </p>

              <ul className="mt-6 space-y-2.5">
                {HERO_BULLETS.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setApplyOpen(true)}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#B11C20] hover:bg-[#9a181c] text-white px-6 py-3 rounded-xl font-semibold shadow-[0_6px_18px_-8px_rgba(15,23,42,0.35)] transition"
                >
                  Apply Now · ₹{GENAI_REGISTRATION_FEE}
                </button>

                <a
                  href={GENAI_BROCHURE.href}
                  download={GENAI_BROCHURE.downloadAs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 px-5 py-3 rounded-xl font-semibold transition"
                >
                  <Download className="w-4 h-4" />
                  Brochure
                </a>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Next batch{" "}
                  <span className="text-slate-800 font-semibold">
                    {GENAI_ENROLLMENT.batchStartDisplay}
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {HERO_BADGES.map((b) => (
                  <span
                    key={b.label}
                    className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: AI Console Preview */}
            <div
              className="relative"
              role="img"
              aria-label="Animated preview of Generative AI prompts a learner can build during the program"
            >
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-linear-to-br from-slate-300/40 via-slate-200/30 to-[#B11C20]/10 blur-2xl opacity-60"
              />

              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    vts-genai · console
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                    LIVE
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono">$ ai run prompt</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-[13px] sm:text-sm min-h-[200px]">
                    {heroLines.map((line, i) => (
                      <div
                        key={line.prompt}
                        className={[
                          "flex items-start gap-2 transition-all",
                          i === activeLine
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-70",
                        ].join(" ")}
                      >
                        <span className="text-rose-400 select-none">
                          {">"}
                        </span>
                        <span className="text-slate-200 flex-1">
                          {line.prompt}
                          {i === activeLine && (
                            <span className="inline-block w-1.5 h-4 align-middle bg-emerald-400 ml-1 animate-pulse" />
                          )}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-300 shrink-0">
                          {line.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {[
                      "POST /api/chat",
                      "embeddings.create()",
                      "vectorStore.search()",
                      "agent.run()",
                    ].map((s) => (
                      <div
                        key={s}
                        className="font-mono text-[11px] text-slate-300 bg-slate-800/70 border border-slate-700 rounded-lg px-2.5 py-1.5 truncate"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <div className="inline-flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-semibold text-slate-700">4.8 / 5</span>
                  <span className="text-slate-400">· 240+ learners</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("live-ai-demo");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="cursor-pointer text-[#B11C20] font-semibold hover:underline"
                >
                  Try live demo ↓
                </button>
              </div>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 -mt-2 pb-10 sm:pb-14">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.18)] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="px-5 py-4 text-center">
                  <p className="text-lg sm:text-xl font-bold text-slate-900">
                    {s.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New unique GenAI sections */}
        <LiveAIDemo />
        <AIUseCases />

        <EnrollmentUrgency onApplyClick={() => setApplyOpen(true)} />

        {/* Other Sections */}
        <WhyVTS />
        <ExclusiveBenefits onApplyClick={() => setApplyOpen(true)} />
        <WhyChooseProgram onRegisterClick={() => setApplyOpen(true)} />
        <WhatYouLearn />
        <AdmissionProcess />
        <CourseFees onEnrollClick={() => setApplyOpen(true)} />
        <Curriculum />
        <ChooseProgram onApplyClick={() => setApplyOpen(true)} />
        <CareerOutcomes />
        <HiringPartners />
        <SuccessStories />
        <FAQ />
        <RelatedPrograms />
      </article>

      <GenAiEnrollmentModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        courseTitle="Master Generative AI & Build Real AI Applications"
      />
    </Layout>
  );
};

export default GenerativeAI;
