import React from "react";
import check from "../../../assets/Check.png";

import pythonIcon from "./img/python.svg";
import openaiIcon from "./img/openai.svg";
import geminiIcon from "./img/gemini.svg";
import langchainIcon from "./img/langchain.svg";
import huggingfaceIcon from "./img/huggingface.svg";
import fastapiIcon from "./img/fastapi.svg";
import reactIcon from "../FullstackDeveloper/img/React.png";
import nodeIcon from "../FullstackDeveloper/img/JS.png";
import githubIcon from "../FullstackDeveloper/img/github.png";
import vectordbIcon from "./img/vectordb.svg";
import numpy from "./img/NumPy.svg";
import pandas from "./img/Pandas.svg";
import matplotlib from "./img/Matplotlib.svg";
import {
  GENAI_MODULE_SUMMARIES,
  GENAI_PORTFOLIO_PROJECTS,
  GENAI_LIVE_SCHEDULE,
} from "./genAiCurriculum";

const tools = [
  { src: pythonIcon, name: "Python" },
  { src: openaiIcon, name: "OpenAI" },
  { src: geminiIcon, name: "Google Gemini" },
  { src: langchainIcon, name: "LangChain" },
  { src: huggingfaceIcon, name: "Hugging Face" },
  { src: fastapiIcon, name: "FastAPI" },
  { src: reactIcon, name: "React" },
  { src: nodeIcon, name: "Node.js" },
  { src: githubIcon, name: "GitHub" },
  { src: vectordbIcon, name: "Vector Database" },
  { src: numpy, name: "NumPy" },
  { src: pandas, name: "Pandas" },
  { src: matplotlib, name: "Matplotlib" },
];

const FeatureList = ({ features }) => (
  <ul className="space-y-3 mb-8">
    {features.map((item, index) => (
      <li key={index} className="flex gap-3">
        <img src={check} alt="" className="h-4 mt-1 shrink-0" />
        <span className="text-gray-800 text-sm leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const WhatYouLearn = () => {
  return (
    <section className="bg-[#f5f2f1] py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-medium mb-3">
          What Will You{" "}
          <span className="text-[#B11C20] underline relative -top-3 underline-offset-4">
            Learn
          </span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Eight focused weeks — each closes with a shipped project you keep in your portfolio
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl mb-2">
            8-Week{" "}
            <span className="text-[#B11C20] font-medium">Learning Path</span>
          </h3>
          <p className="mb-6 text-sm text-gray-700 leading-relaxed">
            <span className="font-medium">
              {GENAI_LIVE_SCHEDULE.format} · {GENAI_LIVE_SCHEDULE.daysPerWeek} ·{" "}
              {GENAI_LIVE_SCHEDULE.hoursPerDay}
            </span>
            <br />
            <span className="text-gray-600">
              3-month program includes internship after the 8-week core curriculum
            </span>
          </p>
          <FeatureList features={GENAI_MODULE_SUMMARIES} />
        </div>

        <div>
          <h3 className="text-xl mb-6">
            Tools &{" "}
            <span className="text-[#B11C20] font-medium">Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-6 items-center mb-12">
            {tools.map((tool) => (
              <img
                key={tool.name}
                src={tool.src}
                alt={`${tool.name} logo`}
                title={tool.name}
                loading="lazy"
                decoding="async"
                className="h-10 object-contain"
              />
            ))}
          </div>

          <h3 className="text-xl mb-2">
            8 Portfolio{" "}
            <span className="text-[#B11C20] font-medium">Projects</span>
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            One deliverable every week — from CLI tools to a production capstone
          </p>

          <div className="space-y-3">
            {GENAI_PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.week}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    {project.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase text-[#B11C20] bg-red-50 px-2 py-0.5 rounded shrink-0">
                    Week {project.week}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
