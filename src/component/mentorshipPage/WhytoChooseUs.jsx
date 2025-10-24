import React from 'react';
import { Award, Ruler, UserCheck, Tag, Video, MessageSquare } from 'lucide-react';

// Data structure for the feature cards
const features = [
  {
    icon: Award, // Best approximation for the checkmark/badge icon
    title: "Industry-Verified Mentors",
    description: "Learn from mentors who work at top companies like Google, Microsoft, and Swiggy — verified professionals who know what it takes to grow.",
  },
  {
    icon: Ruler, // Best approximation for the roadmap/blueprint icon
    title: "Personalized Roadmaps",
    description: "Every learner gets a customized roadmap based on skills, goals, and timeline — no generic plans, only what you need.",
  },
  {
    icon: UserCheck, // Represents 1:1 attention
    title: "1:1 Attention",
    description: "Get complete focus during every session — no group crowd, just you and your mentor working on your progress.",
  },
  {
    icon: Tag, // Represents pricing/affordability
    title: "Affordable & Transparent Pricing",
    description: "Quality mentorship shouldn't be expensive — our pricing is clear, fair, and accessible to students and professionals alike.",
  },
  {
    icon: Video, // Represents recordings
    title: "Session Recordings Available",
    description: "Missed something? Get access to recorded sessions so you can revise anytime, anywhere.",
  },
  {
    icon: MessageSquare, // Represents chat support
    title: "Ongoing Support via Chat",
    description: "Stay in touch with your mentor even after the session for continuous learning and career guidance.",
  },
];

// Define a consistent array of colors for the icons
const iconStyles = [
    "text-green-600 bg-green-100", // Mentors (Verified/Award)
    "text-indigo-600 bg-indigo-100", // Roadmaps (Ruler)
    "text-blue-600 bg-blue-100", // Attention (UserCheck)
    "text-teal-600 bg-teal-100", // Pricing (Tag)
    "text-rose-600 bg-rose-100", // Recordings (Video)
    "text-amber-600 bg-amber-100", // Support (MessageSquare)
];

// Card Component
// Removed iconColor from props, it will now be determined by the index
const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <div className="bg-[#f8faff] p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border border-gray-100 flex flex-col items-center text-center">
    
    {/* Centered Icon Container with Color applied from iconStyles array */}
    <div className={`mb-4 w-fit p-3 rounded-xl ${iconStyles[index % iconStyles.length]} flex items-center justify-center`}>
      <Icon className="h-6 w-6" />
    </div>
    
    <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-snug">
      {title}
    </h3>
    <p className="text-lg font-nunito text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

// Main Application Component
const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#E2E2E2] flex flex-col items-center justify-center p-4 sm:p-8 font-inter">
      {/* Header Section */}
      <header className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-playfair text-gray-800   mb-4">
          Why Choose Us
        </h1>
        <p className="text-lg sm:text-xl font-nunito red-gradient text-gray-700 mb-1">
          We believe real growth comes from real connection.
        </p>
        <p className="text-xl sm:text-2xl font-nunito font-medium red-gradient">
          That's why every mentorship session is designed around you, not a pre-set syllabus
        </p>
      </header>

      {/* Feature Cards Grid */}
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index} // Pass the index to select the icon style
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      
      {/* Optional space for visual centering */}
      <div className="py-8"></div>
    </div>
  );
};

export default WhyChooseUs;
