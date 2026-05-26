import React, { useState } from "react";

import AakashImg from "./img/Aakash_kumar.jpg";
import ChiyaImg from "./img/Chiya_Pandey.jpg";
import KrishImg from "./img/Krish_shah.jpg";
import PriyaImg from "./img/Priya_yadav.jpg";
import SahilImg from "./img/Sahil_mehta.jpg";
import SumitImg from "./img/Sumit_patel.jpg";
import microsoft from "../FullstackDeveloper/img/mircosoft.png";
import Deloitte from "../FullstackDeveloper/img/deloitte.png";
import amazon from "../FullstackDeveloper/img/amazon.png";
import flipkart from "../FullstackDeveloper/img/flipkart.png";
import techstartup from "../FullstackDeveloper/img/techstartup.png";
import rocket from "../FullstackDeveloper/img/rocket.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Aakash Kumar",
    role: "AI Developer",
    company: "AI Startup",
    image: AakashImg,
    logo: rocket,
    text:
      "The Generative AI program gave me exactly the skills I needed. In just a few months, I went from knowing basic Python to building full AI applications. The hands-on projects and mentor support helped me land my first AI role.",
  },
  {
    id: 2,
    name: "Chiya Pandey",
    role: "Prompt Engineer",
    company: "Microsoft",
    image: ChiyaImg,
    logo: microsoft,
    text:
      "What stood out was the depth of the curriculum — from prompt engineering to AI agents. The capstone project became the highlight of my portfolio and helped me transition into a Prompt Engineer role.",
  },
  {
    id: 3,
    name: "Krish Shah",
    role: "LLM Developer",
    company: "Deloitte",
    image: KrishImg,
    logo: Deloitte,
    text:
      "I had no AI background before joining VTS. The structured learning path, live projects, and RAG module helped me understand real-world AI development. I secured an LLM Developer role within weeks of completing the program.",
  },
  {
    id: 4,
    name: "Priya Yadav",
    role: "AI Engineer",
    company: "Amazon",
    image: PriyaImg,
    logo: amazon,
    text:
      "The AI APIs and RAG modules were incredibly practical. Building a document Q&A system during the course became my strongest portfolio piece. Recruiters were impressed with the real-world project experience.",
  },
  {
    id: 5,
    name: "Sahil Mehta",
    role: "Full Stack AI Developer",
    company: "Flipkart",
    image: SahilImg,
    logo: flipkart,
    text:
      "The full-stack AI development module tied everything together. Learning to integrate AI with React and backend APIs gave me the confidence to build and deploy complete AI applications.",
  },
  {
    id: 6,
    name: "Sumit Patel",
    role: "AI Automation Engineer",
    company: "Tech Startup",
    image: SumitImg,
    logo: techstartup,
    text:
      "Starting as a beginner, I gained hands-on experience building AI agents and automation workflows. The mentorship and mock interviews prepared me well for the AI job market.",
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);

  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
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
    <section className="bg-[#fff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">

          Real{" "}
          <span className="text-red-700 underline underline-offset-4 relative sm:-top-1 lg:-top-3">
            Results
          </span>{" "}
          Real{" "}
          <span className="text-red-700 underline underline-offset-4 relative sm:-top-1 lg:-top-3">
            Careers
          </span>

        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
          See how VTS learners transformed their skills into high-paying AI roles
        </p>

      </div>


      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-6 lg:gap-8">

        {/* LEFT BUTTON */}
         <button
                  type="button"
                  onClick={prev}
                  className="cursor-pointer bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0"
                >
                   <ChevronLeft className="text-[#B11C20]" />
                  
                </button>


        {/* Cards */}
        <div
          className="
            grid flex-1 gap-4 sm:gap-6 lg:gap-8
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3
          "
        >

          {visibleCards.map((story) => (

            <div
              key={story.id}
              className="bg-[linear-gradient(to_bottom,#FBEAEB_20%,#FFF_80%)] rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition duration-300"
            >

              {/* Top */}
              <div className="flex justify-between items-center mb-4 sm:mb-5 lg:mb-6">

                <img
                  src={story.image}
                  alt={`${story.name}, ${story.role} at ${story.company} — VTS Generative AI graduate`}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 sm:w-32 sm:h-32 lg:w-32 rounded-xl object-cover"
                />

                <div className="text-right">

                  <div className="text-gray-500 text-xs sm:text-sm mb-1">
                    Placed at :
                  </div>

                  <img
                    src={story.logo}
                    alt={`${story.company} logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-5 md:h-28 ml-auto"
                  />

                </div>

              </div>


              {/* Text */}
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                "{story.text}"
              </p>


              {/* Name */}
              <div className="text-red-700 font-semibold text-sm sm:text-base">
                - {story.name}, {story.role}
              </div>

            </div>

          ))}

        </div>


        {/* RIGHT BUTTON */}
        <button
          type="button"
          onClick={next}
          className="cursor-pointer bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0"
        >
         <ChevronRight className="text-[#B11C20]"  />
        </button>

      </div>

    </section>
  );
}
