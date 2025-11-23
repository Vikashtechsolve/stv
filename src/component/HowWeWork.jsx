import React from "react";
import { ImArrowRight } from "react-icons/im"; // ✅ Correct import

const steps = [
  {
    title: "Register Yourself",
    description: "Sign up → Get a personalized dashboard.",
  },
  {
    title: "Choose Your Path",
    description:
      "Pick one: Mentorship, Doubt Solving, Contests, Resume Review.",
  },
  {
    title: "Your Outcome",
    description: "Land your dream career.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-12 mt-6">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 heading-primary leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
        How We Work
      </h1>
      <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-nunito">
        Simple steps to learn, practise and land your dream job!
      </p>


      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3 h-full flex flex-col justify-center text-center min-h-[150px]">
              <h3 className="text-red-700 font-semibold text-lg mb-2 font-playfair">
                {step.title}
              </h3>
              <p className="text-[#A2A1A1] text-lg font-nunito">{step.description}</p>
            </div>

            {/* Arrows between steps (only on desktop) */}
            {index < steps.length - 1 && (
              <ImArrowRight className="text-gray-500 text-3xl hidden md:block self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;