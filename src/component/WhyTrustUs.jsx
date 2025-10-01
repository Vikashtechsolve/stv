// import React from "react";
// import trust from "../assets/trust.png";
// import diff from "../assets/diff.png";
// import career from "../assets/career.png";
// import growth from "../assets/growth.png";

import React from "react";
import trust from "../assets/trust.png";
import diff from "../assets/diff.png";
import career from "../assets/career.png";
import growth from "../assets/growth.png";

const CardsSection = () => {
  const cards = [
    {
      img: trust,
      alt: "Trust & Credibility",
      title: "Trust & Credibility",
      desc: `At Vikas Tech Solutions, trust is our foundation. With certified mentors,
        5,000+ successful sessions, and a 95% satisfaction rate, we ensure expert guidance.
        Our transparent process, safe policies, and clear pricing make learning safe and reliable.`,
    },
    {
      img: diff,
      alt: "What makes us Different",
      title: "What makes us Different",
      desc: `At Vikas Tech Solutions, learners enjoy personalized 1:1 mentorship, instant doubt-solving,
        and career-focused guidance. With skill-based contests and flexible, affordable plans,
        we make quality learning engaging and accessible.`,
    },
    {
      img: career,
      alt: "Focused on Career Growth",
      title: "Focused on Career Growth",
      desc: `We provide clear roadmaps for every learner—whether school students, BTech aspirants,
        or professionals. Through resume reviews, mock interviews, and structured 30–60–90 day plans,
        we ensure measurable career growth.`,
    },
    {
      img: growth,
      alt: "We care about your Growth",
      title: "We care about your Growth",
      desc: `Our mentors offer genuine care beyond sessions with WhatsApp and email support.
        Learners also join peer communities where valuable feedback and connections
        make growth a shared journey.`,
    },
  ];

  return (
    <section className="py-12 mt-6">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
        Why Learners Trust Us?
      </h1>
      <div className="flex items-center justify-center min-h-screen">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#F0F0F0] to-[#C2C2C2] shadow-lg rounded-md overflow-hidden max-w-sm mx-auto"
            >
              <div className="text-center">
                {/* Image Section */}
                <div className="h-[200px] flex items-center justify-center">
                  <img src={card.img} alt={card.alt} className="w-[150px]" />
                </div>

                {/* Title Section */}
                <div className="bg-[#BDBDBD66] py-2">
                  <h2 className="font-playfair text-2xl font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                    {card.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-black font-nunito text-sm leading-relaxed px-4 py-4">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
