
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import MentorSessionForm from "./MentorSessionForm";

const mentorsData = [
  {
    name: "Arjun Singh",
    role: "Frontend Engineer, Google",
    expertise: "React, Next.js, and UI Systems",
    experience: "7+ years",
    rating: 4.9,
    category: "Web Development",
    subject: "React.js",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Shreya Patel",
    role: "Full Stack Developer, Microsoft",
    expertise: "MERN Stack, REST APIs",
    experience: "6+ years",
    rating: 4.8,
    category: "Web Development",
    subject: "Full Stack Development",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Kavya Sharma",
    role: "SDE II, Adobe",
    expertise: "C++, Java, System Design",
    experience: "6+ years",
    rating: 4.9,
    category: "Data Structures",
    subject: "System Design",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rohan Gupta",
    role: "Software Engineer, Amazon",
    expertise: "DSA, Competitive Programming",
    experience: "5+ years",
    rating: 4.9,
    category: "Data Structures",
    subject: "DSA",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Meera Jain",
    role: "Machine Learning Engineer, Zomato",
    expertise: "Statistics, Deep Learning, NLP",
    experience: "5+ years",
    rating: 4.8,
    category: "AI/Machine Learning",
    subject: "Deep Learning",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Nisha Bansal",
    role: "Research Scientist, IIT Delhi",
    expertise: "Deep Learning, Generative AI",
    experience: "6+ years",
    rating: 4.8,
    category: "AI/Machine Learning",
    subject: "Generative AI",
    img: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const categories = [
  "All",
  "Web Development",
  "Data Structures",
  "Data Science",
  "AI/Machine Learning",
  "Career",
  "Others",
];

const MentorSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const scrollRef = useRef(null);

  const filteredMentors =
    selectedCategory === "All"
      ? mentorsData
      : mentorsData.filter((m) => m.category === selectedCategory);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <section className="px-4 md:px-10 py-10 bg-[#E2E2E2] text-center">
      {/* Headings */}
      <h2 className="font-playfair text-3xl sm:text-4xl mb-7">Meet Our Mentors</h2>
      <p className="red-gradient font-nunito text-lg md:text-xl mb-2">
        Learn directly from professionals working at Google, Microsoft, and top startups.
      </p>
      <p className="text-lg md:text-xl font-nunito red-gradient mb-10">
        Our mentors are not just teachers — they are guides who've walked the same path you're on.
      </p>

      {/* Category Bar */}
      <div className="relative flex items-center hide-scrollbar justify-center mb-8">
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-black text-white p-2 rounded-full hover:bg-gray-800 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <div ref={scrollRef} className="flex gap-3 overflow-x-auto hide-scrollbar mx-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-[#f2f2f2] hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredMentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-[#f2f2f2] shadow-md rounded-xl p-6 w-[90%] sm:w-[280px] md:w-[300px] lg:w-[320px] transition-transform hover:scale-[1.03] text-left"
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-28 h-28 object-cover rounded-full mb-4 mx-auto md:mx-0"
            />
            <h3 className="text-lg font-playfair font-semibold">{mentor.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{mentor.role}</p>

            <p className="text-sm mb-1 font-nunito">
              <span className="font-semibold text-red-700">Expertise:</span>{" "}
              {mentor.expertise}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold text-red-700">Experience:</span>{" "}
              {mentor.experience}
            </p>

            <div className="flex items-center mt-1 mb-2">
              <span className="text-sm text-red-700 font-semibold mr-1">Rating:</span>
              <span className="text-sm font-medium">{mentor.rating}</span>
              <Star size={16} className="text-yellow-400 fill-yellow-400 ml-1" />
            </div>

            <button
              onClick={() => setSelectedMentor(mentor)}
              className="bg-gradient-to-b from-[#ED0331] to-[#87021C] text-white px-4 py-2 rounded-xl mt-2 hover:opacity-90 cursor-pointer font-nunito transition-all duration-300 shadow-md"
            >
              Book Session
            </button>
          </div>
        ))}
      </div>

      {/* Open Modal */}
      {selectedMentor && (
        <MentorSessionForm
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      )}
    </section>
  );
};

export default MentorSection;

