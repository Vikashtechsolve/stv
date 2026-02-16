import React, { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';

import Riya from "../FullstackDeveloper/img/RiyaSharma.png";
import Rohit from "../FullstackDeveloper/img/RohitVerma.png";
import Chiya from "../FullstackDeveloper/img/Chiya.png";
import Amit from "../FullstackDeveloper/img/Amit.png";
import Priya from "../FullstackDeveloper/img/Priya.png";
import Karan from "../FullstackDeveloper/img/karan.png";
import microsoft from "../FullstackDeveloper/img/mircosoft.png"
import Deloitte from "../FullstackDeveloper/img/deloitte.png"
import amazon from "../FullstackDeveloper/img/amazon.png"
import flipkart from "../FullstackDeveloper/img/flipkart.png"
import techstartup from "../FullstackDeveloper/img/techstartup.png"
import rocket from "../FullstackDeveloper/img/rocket.png"
import { ChevronLeft } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Junior Full Stack Developer",
    company: "rocket",
    image: Riya,
    logo: rocket,
    text: "The Mini Program was exactly what I needed to start my tech career. In just 3 months, I went from basic HTML and CSS to building full-stack MERN projects.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Frontend Developer",
    company: "Microsoft",
    image: Rohit,
    logo: microsoft,
    text: "I had zero backend knowledge before joining VTS. The structured learning and internship helped me secure a frontend role quickly.",
  },
  {
    id: 3,
    name: "Chiya Pandey",
    role: "Software Engineer (MERN)",
    company: "Deloitte",
    image: Chiya,
    logo: Deloitte,
    text: "What stood out for me was the advanced curriculum and mentorship. I moved from fresher to mid-level MERN developer.",
  },
  {
    id: 4,
    name: "Amit Singh",
    role: "Backend Developer",
    company: "Amazon",
    image: Amit,
    logo: amazon,
    text: "The dashboards and real-world projects became my strongest portfolio assets.",
  },
  {
    id: 5,
    name: "Priya Gupta",
    role: "Full Stack Developer",
    company: "Flipkart",
    image: Priya,
    logo: flipkart,
    text: "The internship experience gave me real exposure to analytics and development.",
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "Frontend Engineer",
    company: "Netflix",
    image: Karan,
    logo: techstartup,
    text: "Mentorship and mock interviews prepared me well for real hiring processes.",
  },
];

export default function DataSuccessStories() {
  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // desktop unchanged
    if (window.innerWidth >= 768) return 2; // tablet
    return 1; // mobile
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index + cardsPerView < stories.length) {
      setIndex(index + cardsPerView);
    }
  };

  const prev = () => {
    if (index - cardsPerView >= 0) {
      setIndex(index - cardsPerView);
    }
  };

  const visibleCards = stories.slice(index, index + cardsPerView);

  return (
    <section className="bg-[#fff] py-14 md:py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-medium">
          Learner{" "}
          <span className="text-red-700 underline underline-offset-4 relative md:-top-3">
            Success Stories
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-lg">
          See how VTS learners transformed their skills into high-paying tech
          roles
        </p>
      </div>

      {/* Main Layout */}
      
      <div className="max-w-7xl mx-auto flex items-center gap-3 md:gap-8">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0"
        >
           <ChevronLeft className="text-[#B11C20]" />
          
        </button>

        {/* Cards */}
        <div
          className="
          grid flex-1 gap-4 md:gap-8
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        
        "
        >
          {visibleCards.map((story) => (
            <div
              key={story.id}
              className="bg-[linear-gradient(180deg,#E6F1FB_0%,#FFFFFF_100%)] rounded-2xl p-4 md:p-8 shadow-md hover:shadow-lg transition"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <img
                  src={story.image}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-xl object-cover"
                  alt={story.name}
                />

                <div className="text-right">
                  <div className="text-gray-500 text-xs md:text-sm mb-1">
                    Placed at :
                  </div>

                  <img
                    src={story.logo}
                    className="h-5 md:h-28 ml-auto"
                    alt={story.company}
                  />
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                "{story.text}"
              </p>

              {/* Name */}
              <div className="text-red-700 font-semibold text-sm md:text-base">
                - {story.name}, {story.role}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0"
        >
         <ChevronRight className="text-[#B11C20]"  />
        </button>
      </div>
    </section>
  );
}
