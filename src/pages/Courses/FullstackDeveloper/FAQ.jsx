import React, { useState } from "react";
import faqImage from "../FullstackDeveloper/img/faq.png";

const faqData = {
  overview: [
    {
      question: "What’s the difference between the Mini and Macro programs?",
      answer:
        "Mini program is fast-track for beginners. Macro program is advanced with deeper training, paid internship, and expert-level preparation.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "No prior experience is required. The Mini Program starts from basics and gradually builds full-stack skills.",
    },
    {
      question: "What is the class schedule?",
      answer:
        "Classes are held 5 days a week, 2 hours per day, with additional practice and project work.",
    },
    {
      question: "Is placement guaranteed?",
      answer:
        "We provide strong placement assistance, resume building, mock interviews, and referrals to hiring partners.",
    },
    {
      question: "Can I switch between the Mini and Macro programs?",
      answer:
        "Yes, you can upgrade to Macro program after completing Mini program.",
    },
  ],

  mini: [
    {
      question: "What will I learn in Mini Program?",
      answer:
        "You will learn frontend, backend, MongoDB, MERN stack, and interview preparation.",
    },
  ],

  macro: [
    {
      question: "What extra is included in Macro Program?",
      answer:
        "Macro includes advanced MERN, system design, paid internship, and expert-level preparation.",
    },
  ],
};

export default function FAQ() {

  const [activeTab, setActiveTab] = useState("overview");
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fff] py-20 px-6">

      {/* DESKTOP layout unchanged */}
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">


          {/* TABS */}
          <div className="
            flex flex-row lg:flex-col
            gap-3 lg:gap-4
            overflow-x-auto lg:overflow-visible
          ">

            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 lg:px-6 py-2 lg:py-3 rounded-lg font-serif whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-red-700 text-white"
                  : "bg-red-100 text-red-700"
              }`}
            >
              Program Overview
            </button>

            <button
              onClick={() => setActiveTab("mini")}
              className={`px-5 lg:px-6 py-2 lg:py-3 rounded-lg font-serif whitespace-nowrap ${
                activeTab === "mini"
                  ? "bg-red-700 text-white"
                  : "bg-red-100 text-red-700"
              }`}
            >
              Mini Program
            </button>

            <button
              onClick={() => setActiveTab("macro")}
              className={`px-5 lg:px-6 py-2 lg:py-3 rounded-lg font-serif whitespace-nowrap ${
                activeTab === "macro"
                  ? "bg-red-700 text-white"
                  : "bg-red-100 text-red-700"
              }`}
            >
              Macro Program
            </button>

          </div>



          {/* FAQ LIST */}
          <div className="flex-1 space-y-4">

            {faqData[activeTab].map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden"
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

                  <div className="px-4 pb-4 text-gray-600 text-sm">

                    {item.answer}

                  </div>

                )}

              </div>

            ))}

          </div>


        </div>


      </div>

    </section>
  );
}
