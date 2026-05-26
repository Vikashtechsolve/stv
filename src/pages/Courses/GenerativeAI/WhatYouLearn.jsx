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

const modules = [
  "Introduction to Generative AI — fundamentals, industry applications, and the AI ecosystem",
  "Python for AI — Python basics, APIs, OOP, and data handling",
  "Prompt Engineering — prompt design, few-shot, chain-of-thought, and optimization",
  "Large Language Models — tokens, embeddings, context windows, and model selection",
  "AI APIs — OpenAI, Gemini, Hugging Face integration",
  "RAG — vector databases, semantic search, and knowledge systems",
  "AI Agents — agent architecture, tool calling, and workflow automation",
  "Full Stack AI Development — React integration, backend APIs, and authentication",
  "Deployment — cloud deployment, monitoring, optimization, and scaling",
];

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

const projects = [
  { name: "AI Resume Analyzer", desc: "Build an AI-powered tool that analyzes resumes and provides feedback" },
  { name: "AI Chatbot Assistant", desc: "Create an intelligent chatbot using LLMs and prompt engineering" },
  { name: "Document Q&A Platform", desc: "Build a RAG-based system for document question answering" },
  { name: "AI Content Generator", desc: "Develop a content generation tool using multiple AI APIs" },
  { name: "AI Research Assistant", desc: "Create an AI agent that automates research workflows" },
  { name: "Final Capstone Project", desc: "Build a complete full-stack AI application from scratch" },
];

const FeatureList = ({ features }) => (
  <ul className="space-y-4 mb-8">
    {features.map((item, index) => (
      <li key={index} className="flex gap-3">
        <img src={check} alt="Check" className="h-4 mt-1" />
        <span className="text-gray-800">{item}</span>
      </li>
    ))}
  </ul>
);

const WhatYouLearn = () => {
  return (
    <section className="bg-[#f5f2f1] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-medium mb-3">
          What Will You{" "}
          <span className="text-[#B11C20] underline relative -top-3 underline-offset-4">
            Learn
          </span>
        </h2>

        <p className="text-gray-700">
          Master Generative AI skills with hands-on learning and real-world tools
        </p>
      </div>

      {/* Modules + Tools */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Modules Overview */}
        <div>
          <h3 className="text-xl mb-2">
            Generative AI{" "}
            <span className="text-[#B11C20] font-medium">
              Complete Program
            </span>
          </h3>

          <p className="mb-6">
            <span className="font-medium">3 Months | 2 Months Training + 1 Month Internship | Online + Recorded Sessions</span>
          </p>

          <FeatureList features={modules} />
        </div>

        {/* Tools & Projects */}
        <div>
          <h3 className="text-xl mb-6">
            Tools &{" "}
            <span className="text-[#B11C20] font-medium">
              Technologies
            </span>
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

          <h3 className="text-xl mb-6">
            Hands-On{" "}
            <span className="text-[#B11C20] font-medium">
              Projects
            </span>
          </h3>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-sm sm:text-base mb-1">
                  {project.name}
                </h4>
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
