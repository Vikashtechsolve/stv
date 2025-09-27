import React from "react";
import mentor from "../assets/mentor.jpg";
import solve from '../assets/solving.jpg'
import online from '../assets/online.jpg'
import resume from '../assets/resume.jpg'

const services = [
  {
    title: "1:1 Mentorship",
    img: mentor, // Local import works only like this
  },
  {
    title: "Doubt Solving",
    img: solve,
  },
  {
    title: "Online Contests",
    img: online,
  },
  {
    title: "Resume Review",
    img: resume,
  },
];

const ShapeYourJourney = () => {
  return (
    <section className="py-12 mt-6">
      {/* Heading */}
         <h1 className="text-center text-5xl font-semibold font-playfair mb-15 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-[1.2] overflow-visible">
        Shape Your Journey
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group h-[450px]"
          >

            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gray-500/70 py-3 text-center">
              <h3 className="text-white text-lg font-medium">
                {service.title}
              </h3>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
};

export default ShapeYourJourney;
