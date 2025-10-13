import React, { useState } from 'react';
import { Users, Monitor, Puzzle, FileText } from 'lucide-react';

export default function WhatWeBring() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Users,
      title: '1:1 Mentorship',
      description: 'Get personal guidance from experienced mentors who help you identify your strengths, set clear goals, and create a learning roadmap. Whether you\'re preparing for interviews, switching domains, or improving core concepts — our mentors guide you every step of the way.'
    },
    {
      id: 2,
      icon: Monitor,
      title: 'Online Contests',
      description: 'Participate in live coding and skill-based contests to challenge yourself and grow with peers. Gain exposure to competitive problem-solving, build confidence, and track your progress through real-time leaderboards.'
    },
    {
      id: 3,
      icon: Puzzle,
      title: 'Live Doubt Solving',
      description: 'No more learning roadblocks! Join our live doubt-solving sessions and get instant solutions from mentors. Whether it\'s a programming concept, logic issue, or design question — we ensure you never get stuck while learning.'
    },
    {
      id: 4,
      icon: FileText,
      title: 'Resume Review',
      description: 'Get your resume professionally reviewed and customized as per your career goals. Our experts help you identify what recruiters look for and guide you with a structured roadmap to land your dream role — whether it\'s in tech, design, or business.'
    }
  ];

  return (
    <section className="w-full  py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10  md:mb-14 lg:mb-16 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-2">
            What We Bring to You
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl p-6 md:p-7 lg:p-8 transition-all duration-300 cursor-pointer ${
                //   hoveredCard === service.id
                //     ? 'bg-red-700 shadow-2xl transform -translate-y-2'
                //    : 'bg-gradient-to-b from-[#ED0331] to-[#87021C] shadow-lg hover:shadow-xl'
                     'bg-gradient-to-b from-[#ED0331] to-[#87021C] shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Icon */}
                <div className="mb-5 md:mb-6">
                  <IconComponent 
                    size={40} 
                    className="text-white stroke-1.5"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 md:mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-md md:text-base text-gray-100  leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}