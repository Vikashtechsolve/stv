import React from "react";
import AnanyaImg from "../assets/anayasharma.png";

const masterClassData = {
  mainTitle: "Why Choose Our “Master Class",
  subTitle: "Meet Our Master Class Mentors",
  mentor: {
    name: "Ananya Sharma",
    role: "Data Science Mentor, Ex-Amazon",
    image: AnanyaImg,
  },
  points: [
    { title: "Affordable Learning", description: "Start your journey with live masterclasses at affordable prices." },
    { title: "Focused Learning", description: "Deep dive into one topic with practical, easy-to-understand examples." },
    { title: "Expert Mentors", description: "Learn directly from industry professionals and experienced teachers." },
    { title: "Practical Insights", description: "Gain real-world knowledge through hands-on exercises." },
    { title: "Flexible Schedule", description: "Attend classes at your convenience and pace." },
    { title: "Lifetime Access", description: "Revisit class recordings and resources anytime." },
  ],
};

const WhyChooseMasterClass = ({ data = masterClassData }) => {
  const { mainTitle, subTitle, mentor, points } = data;

  return (
    <div className="   w-full bg-[#E2E2E2] py-12  sm:py-1 px-4 flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="font-playfair text-3xl md:text-5xl font-semibold text-center mb-10 bg-clip-text text-transparent"
        style={{
          background: "linear-gradient(90deg, #ED0331, #87021C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {mainTitle}
      </h2>
      

      <div className="  flex flex-col md:flex-row items-start justify-center gap-20 md:gap-30 sm:gap-10 w-full max-w-7xl">
        {/* Mentor Card */}
        <div className="flex flex-col items-center gap-6 w-full md:w-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center font-playfair">{subTitle}</h3>
          <div className="relative w-full max-w-sm md:max-w-[520px] aspect-[519/570] rounded-2xl overflow-hidden bg-gradient-to-b from-white to-gray-300 mt-5 md:mt-10">
            {/* Mentor Image */}
            <img
              src={mentor.image}
              alt={mentor.name}
              className="absolute left-1/2 transform -translate-x-1/2 top-10 w-[90%] max-w-[465px] h-auto"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 w-full h-24 bg-white/40 rounded-t-2xl flex flex-col justify-center items-center gap-1">
              <span className="text-red-600 text-xl md:text-2xl font-bold">{mentor.name}</span>
              <span className="text-gray-800 text-sm md:text-base font-semibold">{mentor.role}</span>
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="flex flex-col gap-6 w-full md:max-w-lg">
          {points.map((point, index) => (
            <div key={index}>
              <h4 className="text-red-600 text-xl md:text-2xl font-semibold mb-1 font-playfair">{point.title}</h4>
              <p className="text-gray-600 text-base md:text-xl font-medium font-nunito">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMasterClass;
