import React from "react";
import { CheckCircle, Users, Star } from "lucide-react";

const MentorshipHero = () => {
  return (
    <section className="flex flex-col bg-[#E2E2E2] items-center justify-center vksbg text-center px-4 md:px-5 py-16">
      {/* Heading */}
      <h1 className="text-3xl font-playfair md:text-4xl font-serif font-bold text-black mb-4">
        Personalized 1:1 Mentorship Tailored Just for You
      </h1>

      {/* Subheading */}
      <p className="red-gradient text-lg md:text-2xl max-w-[80%] leading-relaxed">
        Get direct guidance from industry experts in{" "}
        <b>Web Development</b>, <b>Data Science</b>, <b>AI/ML</b>, <b>DSA</b>, and more ..
      </p>
      <p className="mt-3 red-gradient text-lg md:text-2xl max-w-[80%] leading-relaxed">
        one-on-one, focused entirely on your goals.
      </p>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-12 w-full max-w-6xl">
        {/* Left Side - Illustration */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dc4gqqd35/image/upload/v1760421141/07c6f352f10c5ce0b7ba9e97833d723092b40455_kgxuio.png"
            alt="Mentorship illustration"
            className="w-[80%] md:w-[70%] max-w-lg"
          />
        </div>

        {/* Right Side - Cards */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* Top Two Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex flex-col items-center w-full">
              <CheckCircle className="text-green-500 w-10 h-10 mb-2" />
              <h3 className="text-2xl font-semibold text-red-600">100+ Mentors</h3>
              <p className="text-gray-600 text-sm mt-1">Verified industry experts</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex flex-col items-center w-full">
              <Users className="text-blue-600 w-10 h-10 mb-2" />
              <h3 className="text-2xl font-semibold text-red-600">10K+ Students</h3>
              <p className="text-gray-600 text-sm mt-1">Guided to Success</p>
            </div>
          </div>

          {/* Bottom Centered Card */}
          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex flex-col items-center mt-6 w-full sm:w-[60%]">
            <Star className="text-yellow-500 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-semibold text-red-600">4.9+ Rating</h3>
            <p className="text-gray-600 text-sm mt-1">Based on Real Feedbacks</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-12 bg-gradient-to-r from-[#E70021] to-[#9B0014] text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
        Book a Session Now →
      </button>
    </section>
  );
};

export default MentorshipHero;



//          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex flex-col items-center mt-6 w-[85%] sm:w-[60%]">
