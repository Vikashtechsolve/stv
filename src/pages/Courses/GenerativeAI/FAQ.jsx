import React, { useState } from "react";
import faqImage from "../FullstackDeveloper/img/faq.png";

const faqData = [
  {
    question: "Do I need AI experience to join this program?",
    answer:
      "No, this program is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts. All you need is basic computer skills and willingness to learn.",
  },
  {
    question: "Are real projects included in the program?",
    answer:
      "Yes, you'll build 6+ real AI projects including an AI Chatbot, Document Q&A Platform, AI Content Generator, AI Resume Analyzer, AI Research Assistant, and a Final Capstone Project.",
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
    question: "Is a certificate included upon completion?",
    answer:
      "Yes, you'll receive an industry-recognized certificate upon successfully completing the program that validates your Generative AI development skills.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "You'll work with Python, OpenAI, Google Gemini, LangChain, Hugging Face, FastAPI, React, Node.js, Vector Databases, and GitHub throughout the program.",
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
