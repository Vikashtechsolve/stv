import React from 'react';
import { UserCheck, Presentation, Users, ThumbsUp } from 'lucide-react';

const MilestoneCard = ({ icon: Icon, number, label }) => (
  <div className="rounded-3xl bg-gradient-to-b from-[#EDEDED] to-[#DEDEDE] shadow-md p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full w-full">
    <div className="mb-4">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" strokeWidth={1.5} />
    </div>
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
      {number}
    </h3>
    <p className="text-gray-500 text-sm sm:text-base lg:text-lg text-center font-medium">
      {label}
    </p>
  </div>
);

export default function Milestones() {
  const milestones = [
    {
      icon: UserCheck,
      number: "10,000+",
      label: "Learners Impacted"
    },
    {
      icon: Presentation,
      number: "100+",
      label: "Successful Master Classes"
    },
    {
      icon: Users,
      number: "200+",
      label: "Industry Collaborations"
    },
    {
      icon: ThumbsUp,
      number: "95%",
      label: "Positive Feedback"
    }
  ];

  return (
    <div className="min-h-screen  py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl font-playfair sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
            Milestones That Define <span className="font-serif">Us</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-nunito red-gradient font-medium px-4">
            "Key achievements that showcase our journey and impact."
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="w-full">
              <MilestoneCard {...milestone} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}