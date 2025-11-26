import React from 'react';
import { Code, Sigma, Key, Brain, Hash, Database, ArrowRight } from 'lucide-react';

// Map icon names (strings) to actual Lucide React components
const IconMap = {
  Code,
  Sigma,
  Key,
  Brain,
  Hash,
  Database,
};

// Data structure for the subject cards
const subjects = [
  { 
    icon: 'Code', 
    title: 'Web Development', 
    description: "Master your frontend and backend doubts with ease! Whether it's HTML, CSS, JavaScript, or React, our mentors guide you step-by-step through real examples and practical explanations to help you build confidently.", 
    color: 'text-indigo-600', 
    iconBg: 'bg-indigo-50' 
  },
  { 
    icon: 'Sigma', 
    title: 'Science & Maths', 
    description: "From formulas to complex numerical problems — get your concepts clarified instantly. Our mentors simplify each topic using visual methods and live examples, helping you truly understand rather than memorize.", 
    color: 'text-orange-600', 
    iconBg: 'bg-orange-50' 
  },
  { 
    icon: 'Key', 
    title: 'DSA (Data Structures & Algorithms)', 
    description: "Struggling with recursion, trees, or sorting? Learn logic building and step-by-step problem-solving strategies live with expert mentors to boost your confidence for interviews and exams.", 
    color: 'text-red-600', 
    iconBg: 'bg-red-50' 
  },
  { 
    icon: 'Brain', 
    title: 'AI & Data Science', 
    description: "Confused about machine learning, datasets, or AI models? Learn core AI & ML concepts in real-time — from algorithm logic to real-world applications — directly from experienced professionals.", 
    color: 'text-blue-600', 
    iconBg: 'bg-blue-50' 
  },
  { 
    icon: 'Hash', 
    title: 'Programming Languages', 
    description: "Get one-on-one coding help for Java, Python, C++, or JavaScript. Learn how to debug, write efficient code, and understand every concept clearly under expert guidance.", 
    color: 'text-purple-600', 
    iconBg: 'bg-purple-50' 
  },
  { 
    icon: 'Database', 
    title: 'CS Fundamentals', 
    description: "Build a strong base in Operating Systems, DBMS, and Computer Networks. Get real-world insights and conceptual clarity from industry mentors to strengthen your core CS knowledge.", 
    color: 'text-emerald-600', 
    iconBg: 'bg-emerald-50' 
  },
];

/**
 * A reusable card component for displaying subject details.
 */
const SubjectCard = ({ subject }) => {
  const IconComponent = IconMap[subject.icon];

  return (
    // Added items-center to the main card to center the icon block, description, and CTA
    <div className="flex flex-col p-6 h-full bg-[#ffffff] rounded-xl shadow-lg hover:shadow-xl  transition duration-300 border border-gray-100 items-center">
      {/* Icon and Title */}
      {/* Changed items-start to items-center to center the icon relative to the title */}
      <div className="flex flex-col items-center space-y-4 mb-4">
        {/* Icon Container */}
        <div className={`p-3 rounded-xl ${subject.iconBg} ${subject.color}`}>
          {IconComponent && <IconComponent size={24} />}
        </div>
        
        {/* Title */}
        <h3 className="font-playfair  text-xl font-semibold text-gray-900 leading-tight">
          {subject.title}
        </h3>
      </div>
      
      {/* Description */}
      {/* Added text-center to center the description text */}
      <p className="text-gray-600 font-nunito  mb-6 flex-grow text-center">
        {subject.description}
      </p>
      
      {/* Call to Action - Centered by the parent's items-center */}
      {/* <a 
        href="#" 
        className="flex items-center text-red-500 font-medium hover:text-red-600 transition duration-150 group"
        onClick={(e) => e.preventDefault()} // Prevent navigation in this demo
      >
        Book Now 
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </a> */}
    </div>
  );
};

/**
 * Main application component to display the entire guidance section.
 */
const SubjectDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50  py-10 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-playfair font-light text-gray-800 mb-3">
            Master Every Subject with Expert Guidance
          </h1>
          <p className="text-xl mt-4 red-gradient max-w-3xl mx-auto ">
            Web development, DSA, data science, or core subjects — we've got mentors ready to 
            <span className="text-gray-600"> solve your toughest doubts.</span>
          </p>
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
