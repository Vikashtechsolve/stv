import React from "react";
import { FaUserGraduate, FaHeadphones, FaStar } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { PiUsersThreeBold } from "react-icons/pi";

const features = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-blue-700 text-2xl" />,
    title: "100+ Expert Mentors from IITs & Top Industries",
    description:
      "Learn directly from India’s best minds. Our mentors are experienced professionals and IIT graduates who simplify tough concepts and guide you step-by-step toward mastery.",
  },
  {
    id: 2,
    icon: <FiTag className="text-gray-700 text-2xl" />,
    title: "Affordable Pricing — Starting at Just ₹29",
    description:
      "Get premium 1:1 learning support at pocket-friendly rates. We believe every student deserves quality mentorship without worrying about high costs.",
  },
  {
    id: 3,
    icon: <BsFileEarmarkTextFill className="text-green-600 text-2xl" />,
    title: "Session Notes & Concept Recap",
    description:
      "After every live session, receive well-structured notes and a concept summary — making it easier to revise and retain what you’ve learned.",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-red-600 text-2xl" />,
    title: "24×7 Student Support",
    description:
      "Have a question or need help? Our support team is available round the clock to ensure a seamless experience and quick resolution for all your queries.",
  },
  {
    id: 5,
    icon: <PiUsersThreeBold className="text-blue-800 text-2xl" />,
    title: "Instant Mentor Matching",
    description:
      "No waiting time! The moment you raise a doubt, we instantly connect you with the best available mentor who specializes in your subject or topic.",
  },
  {
    id: 6,
    icon: <FaStar className="text-yellow-500 text-2xl" />,
    title: "Average Student Rating",
    description:
      "Trusted by thousands of learners nationwide. Our students love the clarity, guidance, and support they receive in every 1:1 session.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#E2E2E2] py-16 px-4 md:px-8 lg:px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-playfair mb-12">
        Why Choose Us
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-[#f8faff] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-playfair text-red-700 mb-3 font-serif">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 font-nunito  text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
