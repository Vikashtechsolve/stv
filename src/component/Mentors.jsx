import React from "react";
import ankit from "../assets/mentor1.png";

const mentors = [
  {
    name: "Priya Nair",
    title: "Academic Mentor - Mathematics @ Core Solutions",
    description:
      "Provides personalized sessions for solving math problems, and core CS subjects, making concepts crystal clear with step-by-step guidance.",
    image:
      "https://via.placeholder.com/150x150.png?text=Priya+Nair", // replace with actual image
  },
  {
    name: "Ankit Verma",
    title: "Mentor - Competitive Programming & Contests",
    description:
      "Trains students in coding challenges, hackathons and contests, building speed, accuracy, and confidence in competitive exams.",
    image: ankit,
  },
  {
    name: "Neha Sharma",
    title: "Career & Resume Specialist",
    description:
      "Helps learners with resume building, LinkedIn optimization, and interview preparation, ensuring they stand out in the market.",
    image:
      "https://via.placeholder.com/150x150.png?text=Neha+Sharma", // replace with actual image
  },
];

const Mentors = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
   <h1 className="text-center text-5xl font-semibold font-playfair mb-5 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-[1.2] overflow-visible">
          Meet Our Mentors
        </h1>
        <p className="text-center text-2xl text-black mb-20 font-nunito">
          Experienced professionals guiding you every step of the way
        </p>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`bg-[#F7F7F7] rounded-2xl shadow-md border border-gray-200 flex flex-col items-center text-center transition hover:shadow-lg ${
                index === 1
                  ? "py-10 px-6 h-[500px] -mt-12" // middle: taller + lifted
                  : "py-8 px-6 h-[380px] mt-6" // side: shorter + slightly lower
              }`}
            >
              {/* Image Styling */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className={`object-cover mb-4 ${
                  index === 1
                    ? "w-44 h-44 rounded-lg border-4 border-gray-300 shadow-md"
                    : "w-28 h-28 rounded-full border-4 border-gray-300"
                }`}
              />

              {/* Name */}
              <h3
                className={`${
                  index === 1
                    ? "text-2xl font-bold text-[#C6002A] mb-2"
                    : "text-lg font-semibold text-[#C6002A] mb-2"
                }`}
              >
                {mentor.name}
              </h3>

              {/* Title */}
              <p
                className={`italic ${
                  index === 1
                    ? "text-gray-700 text-sm mb-3"
                    : "text-gray-600 text-sm mb-3"
                }`}
              >
                {mentor.title}
              </p>

              {/* Description */}
              <p
                className={`${
                  index === 1
                    ? "text-gray-700 text-sm leading-relaxed"
                    : "text-gray-600 text-sm leading-relaxed"
                }`}
              >
                {mentor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
