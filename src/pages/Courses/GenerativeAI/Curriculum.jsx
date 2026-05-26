import React, { useState } from "react";
import { FileText } from "lucide-react";

const curriculumData = [
  {
    title: "Module 1",
    subtitle: "Introduction to Generative AI",
    summary:
      "This module introduces the fundamentals of Generative AI and helps you understand how it differs from traditional AI. You'll explore industry applications, the AI ecosystem, and how generative models are reshaping software development.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "AI fundamentals and core concepts",
          "Traditional AI vs Generative AI",
          "Industry applications of Generative AI",
          "Overview of the modern AI ecosystem",
          "Understanding how AI models generate content",
          "Setting up your AI development environment",
        ],
      },
    ],
  },

  {
    title: "Module 2",
    subtitle: "Python for AI",
    summary:
      "This module builds the Python programming foundation essential for AI development. You'll learn Python basics, work with APIs, understand object-oriented programming, and handle data — all in the context of building AI applications.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Python fundamentals and syntax for AI development",
          "Working with APIs and HTTP requests",
          "Object-Oriented Programming (OOP) in Python",
          "Data handling with JSON, CSV, and structured formats",
          "Python libraries for AI: requests, json, os",
          "Writing clean, reusable Python code for AI projects",
        ],
      },
    ],
  },

  {
    title: "Module 3",
    subtitle: "Prompt Engineering",
    summary:
      "This module teaches you the art and science of crafting effective prompts. You'll learn prompt design patterns, few-shot and chain-of-thought techniques, and how to optimize prompts for consistent, high-quality AI outputs.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Prompt design fundamentals and best practices",
          "Zero-shot, few-shot, and multi-shot prompting",
          "Chain-of-thought and step-by-step reasoning",
          "Prompt optimization and iteration strategies",
          "System prompts and role-based prompting",
          "Handling edge cases and improving output quality",
        ],
      },
    ],
  },

  {
    title: "Module 4",
    subtitle: "Large Language Models",
    summary:
      "This module dives deep into how Large Language Models work. You'll understand tokens, embeddings, context windows, and how to select the right model for different use cases in your AI applications.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "How LLMs work: architecture and training overview",
          "Understanding tokens, tokenization, and costs",
          "Embeddings and vector representations",
          "Context windows and their impact on output",
          "Model selection: GPT, Gemini, Llama, and others",
          "Fine-tuning concepts and when to use them",
        ],
      },
    ],
  },

  {
    title: "Module 5",
    subtitle: "AI APIs & Integration",
    summary:
      "This module focuses on integrating AI capabilities into applications using popular AI APIs. You'll work with OpenAI, Google Gemini, and Hugging Face to build real AI features in your projects.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "OpenAI API: Chat Completions, embeddings, and function calling",
          "Google Gemini API: multimodal capabilities and integration",
          "Hugging Face: models, inference API, and transformers",
          "API authentication, rate limiting, and error handling",
          "Building reusable AI service layers",
          "Cost optimization and API usage best practices",
        ],
      },
    ],
  },

  {
    title: "Module 6",
    subtitle: "Retrieval Augmented Generation (RAG)",
    summary:
      "This module teaches you how to build knowledge-powered AI systems using RAG. You'll work with vector databases, implement semantic search, and create AI applications that answer questions from custom documents and data.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "RAG architecture and design patterns",
          "Vector databases: Pinecone, ChromaDB, and FAISS",
          "Semantic search and similarity matching",
          "Document chunking and embedding strategies",
          "Building knowledge base systems",
          "Optimizing RAG pipelines for accuracy and speed",
        ],
      },
    ],
  },

  {
    title: "Module 7",
    subtitle: "AI Agents & Automation",
    summary:
      "This module explores the cutting-edge field of AI agents. You'll learn agent architecture, tool calling patterns, and how to build autonomous AI workflows that can reason, plan, and execute complex tasks.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "AI agent architecture and design principles",
          "Tool calling and function integration",
          "Multi-step reasoning and planning",
          "Workflow automation with AI agents",
          "Building autonomous task execution pipelines",
          "Agent memory, state management, and error recovery",
        ],
      },
    ],
  },

  {
    title: "Module 8",
    subtitle: "Full Stack AI Development",
    summary:
      "This module brings together frontend, backend, and AI to build complete AI-powered applications. You'll learn how to integrate AI services with React frontends, build backend APIs, and implement authentication for your AI apps.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "React integration with AI backends",
          "Building AI-powered backend APIs with FastAPI/Node.js",
          "Streaming responses and real-time AI interactions",
          "User authentication and API key management",
          "Building chat interfaces and AI dashboards",
          "End-to-end full-stack AI application architecture",
        ],
      },
    ],
  },

  {
    title: "Module 9",
    subtitle: "Deployment & Production",
    summary:
      "This final module focuses on deploying AI applications to production. You'll learn cloud deployment strategies, monitoring, optimization techniques, and how to scale AI applications for real-world usage.",
    content: [
      {
        heading: "Topics Covered",
        text: [
          "Cloud deployment on AWS, GCP, or Vercel",
          "Containerization with Docker for AI apps",
          "Monitoring AI application performance and costs",
          "Optimization: caching, batching, and rate limiting",
          "Scaling strategies for production AI systems",
          "Security best practices for AI applications",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [activeModule, setActiveModule] = useState(0);
  const current = curriculumData[activeModule];

  return (
    <section className="bg-[#fff] py-14 md:py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium">
          Course{" "}
          <span className="text-red-700 underline underline-offset-4">
            Curriculum
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          A 3 month program with 2 months of training and 1 month internship,
          designed to build strong Generative AI skills step by step
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto bg-red-50 p-4 md:p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* LEFT MODULE LIST */}
          <div className="space-y-2 overflow-x-auto md:overflow-visible flex md:block gap-2 md:gap-0">
            {curriculumData.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(index)}
                className={`
                  cursor-pointer
                  p-3 md:p-4
                  rounded-lg
                  border-l-4
                  transition
                  min-w-[220px] md:min-w-0
                  ${
                    activeModule === index
                      ? "bg-white border-red-600 shadow"
                      : "border-transparent hover:bg-white"
                  }
                `}
              >
                <div className="font-medium text-sm">{module.title}</div>
                <div className="text-gray-500 text-sm">{module.subtitle}</div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl p-6 shadow">
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded">
                  <FileText className="text-red-600 w-5 h-5" />
                </div>

                <h3 className="text-lg font-semibold text-red-600">
                  {current.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-900 text-sm mb-8">{current.summary}</p>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {current.content.map((item, i) => (
                  <div key={i}>
                    <div className="font-medium text-xl"> {item.heading} :</div>
                    {current.content.map((section, j) => (
                      <div key={j} className="mt-4">
                        <h2 className="font-medium text-red-700">
                          {current.subtitle}
                        </h2>

                        <ul className="mt-2 space-y-2">
                          {(Array.isArray(section.text)
                            ? section.text
                            : [section.text]
                          ).map((text, index) => (
                            <li key={index} className="flex gap-2 text-sm">
                              <span className="text-red-600">•</span>
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="text-gray-600 mt-8 text-sm ml-3">
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
