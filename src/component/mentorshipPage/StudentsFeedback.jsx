import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    text: "The mentor was so patient and guided me with a clear Web Development roadmap. Every minute was valuable — worth every rupee I spent!",
    name: "Amit Kumar — 3rd Year B.Tech Student",
  },
  {
    id: 2,
    text: "I struggled with DSA for months, but after just two mentorship sessions, I finally cracked my coding interviews. The mentor explained logic in the simplest way possible!",
    name: "Ritika Sharma — Placed at Amazon",
  },
  {
    id: 3,
    text: "Thanks to my mentor’s personalized DSA roadmap, I cleared both technical and HR rounds easily. The feedback sessions were a game changer.",
    name: "Rajesh Tiwari — Placed at TCS",
  },
  {
    id: 4,
    text: "My mentor helped me understand how to structure projects professionally. I now feel confident applying for internships!",
    name: "Sneha Patel — 2nd Year CSE Student",
  },
  {
    id: 5,
    text: "Before mentorship, I was lost with DSA topics. Now I solve problems daily and cleared my first coding round!",
    name: "Arjun Verma — Placed at Infosys",
  },
  {
    id: 6,
    text: "The roadmap and consistent feedback completely transformed my coding habits. I’m much more confident now!",
    name: "Kavya Singh — Final Year Student",
  },
];

const StudentsFeedback = () => {
  const [index, setIndex] = useState(1); // middle card initially second one

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const getVisibleCards = () => {
    const total = feedbacks.length;
    const left = (index - 1 + total) % total;
    const right = (index + 1) % total;
    return [left, index, right];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-playfair text-gray-800  mb-5">
        Students Feedback
      </h2>
      <p className="red-gradient text-2xl font-nunito  mb-8">
        Real experiences. Real success stories. Hear what our learners say after
        joining 1:1 Mentorship.
      </p>

      {/* Card Carousel */}
      <div className="relative flex justify-center items-center gap-6 overflow-hidden min-h-[360px]">
        {visibleCards.map((cardIndex) => {
          const fb = feedbacks[cardIndex];
          const isCenter = cardIndex === index;

          return (
            <motion.div
              key={fb.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{
                opacity: 1,
                scale: isCenter ? 1.05 : 0.9,
                y: isCenter ? 0 : 20,
                backgroundColor: isCenter ? "#fff" : "#1a1a2e",
                color: isCenter ? "#000" : "#fff",
                zIndex: isCenter ? 2 : 1,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-[300px] md:w-[350px] rounded-xl shadow-lg p-8"
              
            >
              <div className="flex justify-center mb-3 text-yellow-500">
                {"★★★★★"}
              </div>
              <p className="text-base leading-relaxed mb-6">{fb.text}</p>
              <p
                className={`font-semibold ${
                  isCenter ? "text-red-600" : "text-gray-300"
                }`}
              >
                {fb.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform p-3 rounded-full shadow-md"
        >
          <ArrowLeft className="text-white" size={24} />
        </button>

        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform p-3 rounded-full shadow-md"
        >
          <ArrowRight className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default StudentsFeedback;
