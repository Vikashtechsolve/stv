import React, { useState } from "react";

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
import { ChevronLeft,ChevronRight } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Junior Full Stack Developer",
    company: "rocket",
    image: Riya,
    logo: rocket,
    text:
      "The Mini Program was exactly what I needed to start my tech career. In just 3 months, I went from basic HTML and CSS to building full-stack MERN projects. The hands-on practice and DSA sessions helped me crack my first interview with confidence.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Frontend Developer",
    company: "Microsoft",
    image: Rohit,
    logo: microsoft,
    text:
      "I had zero backend knowledge before joining VTS. The structured learning, live projects, and internship experience helped me understand real-world development. I secured a Frontend Developer role within weeks of completing the program.",
  },
  {
    id: 3,
    name: "Chiya Pandey",
    role: "Software Engineer (MERN)",
    company: "Deloitte",
    image: Chiya,
    logo: Deloitte,
    text:
      "What stood out for me was the advanced curriculum and mentorship. From scalable backend systems to real-time features, everything was covered in detail. I moved from a fresher role to a mid-level MERN developer position.",
  },
  {
    id: 4,
    name: "Amit Singh",
    role: "Backend Developer",
    company: "Amazon",
    image: Amit,
    logo: amazon,
    text:
      "The dashboards I built using Tableau and Power BI during the course became my strongest portfolio assets. Recruiters were impressed with the real-world project experience.",
  },
  {
    id: 5,
    name: "Priya Gupta",
    role: "Full Stack Developer",
    company: "Google",
    image: Priya,
    logo: flipkart,
    text:
      "The business-focused analytics approach helped me understand metrics like churn, LTV, and funnels. The internship experience gave me real exposure to how analytics works in companies.",
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "Frontend Engineer",
    company: "Netflix",
    image: Karan,
    logo: techstartup,
    text:
      "Starting as a beginner, I gained hands-on experience through projects and internship work. The mentorship and mock interviews prepared me well for real hiring processes.",
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);

  // responsive cards per view
  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 768) return 2; // tablet
    return 1; // mobile
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
          See how VTS learners transformed their skills into high-paying tech roles
        </p>

      </div>


      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-6 lg:gap-8">

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
                  className="w-20 h-20 sm:w-32 sm:h-32 lg:w-32 rounded-xl object-cover"
                  alt={story.name}
                />

                <div className="text-right">

                  <div className="text-gray-500 text-xs sm:text-sm mb-1">
                    Placed at :
                  </div>

                  <img
                    src={story.logo}
                    className= "h-5 md:h-28 ml-auto"
                    alt={story.company}
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
          onClick={next}
          className="bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0"
        >
         <ChevronRight className="text-[#B11C20]"  />
        </button>

      </div>

    </section>
  );
}
