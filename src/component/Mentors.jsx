import React from "react";
import ankit from '../assets/ankit.png';
import priya from '../assets/priya.png';
import neha from '../assets/neha.png'


const Mentors = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
          Meet Our Mentors
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-nunito">
          Experienced professionals guiding you every step of the way
        </p>

        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Card 1 (Left - Shorter + Opacity) */}
            <div className="rounded-lg shadow-md max-w-xs text-center border border-gray-200 opacity-[0.89] mt-6 mb-6 bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0]">
              <img
                src={priya}
                alt="Priya Nair"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                  Priya Nair
                </h2>
                <p className="text-gray-700 italic text-sm mt-1">
                  Mentor - Mathematics & Core CS
                </p>
                <p className="text-gray-800 text-sm mt-2 leading-relaxed">
                  Provides personalized sessions for solving math problems and core CS
                  subjects, making concepts crystal clear with step-by-step guidance.
                </p>
              </div>
            </div>

            {/* Card 2 (Middle - Tallest Highlighted with Ankit Info) */}
            <div className="rounded-lg shadow-xl max-w-xs text-center  transform scale-105 mt-0 mb-0 bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0]">
              <img
                src={ankit}
                alt="Ankit Verma"
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                  Ankit Verma
                </h2>
                <p className="text-gray-700 italic text-base mt-2">
                  Mentor - Competitive Programming & Contests
                </p>
                <p className="text-gray-800 text-base mt-4 leading-relaxed">
                  Trains students in coding challenges, hackathons and contests,
                  building speed, accuracy, and confidence in competitive exams.
                </p>
              </div>
            </div>

            {/* Card 3 (Right - Shorter + Opacity) */}
            <div className="rounded-lg shadow-md max-w-xs text-center border border-gray-200 opacity-[0.89] mt-6 mb-6 bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0]">
              <img
                src={neha}
                alt="Rahul Sharma"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                  Neha Sharma
                </h2>
                <p className="text-gray-700 italic text-sm mt-1">
                  Career & Resume Specialist
                </p>
                <p className="text-gray-800 text-sm mt-2 leading-relaxed">
                  Helps learners with resume building, LinkedIn optimization, and interview preparation, ensuring they stand out in the job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
