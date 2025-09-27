import React from "react";
import trust from "../assets/trust.png";
import diff from "../assets/diff.png";
import career from "../assets/career.png";
import growth from "../assets/growth.png";

const trustData = [
  {
    title: "Trust & Credibility",
    description:
      "At Vikas Tech Solutions, trust is our foundation. With certified mentors, 5,000+ successful sessions, and a 95% satisfaction rate, we ensure expert guidance. Our transparent process, secure data policies, and clear pricing make learning safe and reliable.",
    image: trust,
  },
  {
    title: "What makes us Different",
    description:
      "At Vikas Tech Solutions, learners enjoy personalized 1:1 mentorship, instant doubt-solving, and career-focused guidance. With skill-based contests and flexible, affordable plans, we make quality learning engaging and accessible.",
    image: diff,
  },
  {
    title: "Focused on Career Growth",
    description:
      "We provide clear roadmaps for every learner—whether school students, BTech aspirants, or professionals. Through resume reviews, mock interviews, and structured 30–60–90 day plans, we ensure measurable career growth.",
    image: career,
  },
  {
    title: "We care about your Growth",
    description:
      "Our mentors offer genuine care beyond sessions with WhatsApp and email support. Learners also gain access to a supportive community, where feedback and connections make growth a shared journey.",
    image: growth,
  },
];

const WhyTrustUs = () => {
  return (
    <section className="py-12 mt-6">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Section Heading */}
        <h1 className="text-center text-5xl font-semibold font-playfair mb-12 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          Why Learners Trust Us?
        </h1>

        {/* Grid Section */}
        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {trustData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-md h-[460px] rounded-2xl shadow-md 
         bg-gradient-to-r from-[#E2E2E2] to-[#C2C2C2] 
         border border-gray-300 hover:shadow-xl 
         transition flex flex-col overflow-hidden mx-auto"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 mx-auto mt-6 mb-2 object-contain"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                {item.title}
              </h3>
              {/* Description */}
              <div className="bg-[#F7F7F7] text-gray-800 p-5 flex-grow flex items-center justify-center rounded-b-2xl">
                <p className="text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUs;
