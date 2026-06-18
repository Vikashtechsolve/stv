import React, { useState } from "react";
import faqImage from "../FullstackDeveloper/img/faq.png";
import {
  GENAI_COURSE_FEE,
  GENAI_REGISTRATION_FEE,
  GENAI_GST_RATE_PERCENT,
} from "../../../constants/genAiFees";
import { GENAI_PROGRAM_STATS } from "./genAiCourseConfig";

export const faqData = [
  {
    question: "Do I need AI experience to join this program?",
    answer:
      "No, this program is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts. All you need is basic computer skills and willingness to learn.",
  },
  {
    question: "Are real projects included in the program?",
    answer:
      `Yes, you'll build ${GENAI_PROGRAM_STATS.projects} real projects across the 8-week plan — including an AI Study Assistant CLI, Student Performance Predictor, Image Compression Tool, Text Summarizer, AI Content Generator, Enterprise PDF Chatbot, Multi-Agent Research Assistant, and a Document Intelligence capstone.`,
  },
  {
    question: "Is this program beginner friendly?",
    answer:
      "Absolutely. The program starts with Python basics and AI fundamentals before moving to advanced topics like LLMs, RAG, and AI Agents. No prior programming or AI experience is required.",
  },
  {
    question: "Are recorded sessions available?",
    answer:
      "Yes, all live sessions are recorded and made available for you to review anytime. The program includes both live online classes and recorded content for flexible learning.",
  },
  {
    question: "What are the payment options?",
    answer:
      `You can book your seat by paying the ₹${GENAI_REGISTRATION_FEE} registration fee now and pay the ₹${GENAI_COURSE_FEE.toLocaleString("en-IN")} course fee when you join the batch. Or pay the full ₹${GENAI_COURSE_FEE.toLocaleString("en-IN")} in one go with no registration fee and confirm your registration immediately. Listed fees are inclusive of ${GENAI_GST_RATE_PERCENT}% GST. All online payments are secured via Razorpay.`,
  },
  {
    question: "What is the program duration?",
    answer:
      "The program runs for 3 months in total: 2 months of structured training followed by 1 month of real world internship.",
  },
  {
    question: "What certificates will I receive?",
    answer:
      "You receive one industry-recognized certificate on successful program completion, validating your Generative AI skills and hands-on project experience.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "You'll work with Python, OpenAI, Google Gemini, LangChain, Hugging Face, FastAPI, React, Node.js, Vector Databases, and GitHub throughout the program.",
  },
  {
    question: "Is a PPO (Pre-Placement Offer) available after the course?",
    answer:
      "Yes. Developers who perform well during training and the internship may receive a Pre-Placement Offer (PPO) opportunity from hiring partners after completing the program.",
  },
  {
    question: "Will I get an interview opportunity?",
    answer:
      "Yes. Every learner receives 1 interview call arranged through VTS hiring support, giving you direct recruiter exposure along with your portfolio and certificates.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fff] py-20 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <h2 className="text-2xl lg:text-3xl font-medium mb-4">

            Frequently Asked{" "}
            <span className="text-red-700 underline underline-offset-4">
              Questions
            </span>

          </h2>

          <p className="text-gray-600 mb-8">
            Got questions? We've got clear answers
          </p>

          <img
            src={faqImage}
            alt="Frequently asked questions about the VTS Generative AI program"
            loading="lazy"
            decoding="async"
            className="w-40 lg:w-48 mx-auto lg:mx-0"
          />

        </div>


        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-4">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden"
            >

              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center p-4 cursor-pointer"
              >

                <div className="text-sm lg:text-base">
                  {item.question}
                </div>

                <div className="text-red-700 text-lg lg:text-xl">
                  {openIndex === index ? "−" : "+"}
                </div>

              </div>

              {openIndex === index && (

                <div className="px-4 pb-4 pt-0 text-gray-600 text-sm border-t border-gray-100">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}
