import React, { useState } from 'react';
import { CheckCircle, Users, Star } from 'lucide-react';

export default function MentorshipHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 mb-6 sm:mb-8">
            Personalized 1:1 Mentorship Tailored Just for You
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-red-600 font-semibold max-w-4xl mx-auto leading-relaxed">
            Get direct guidance from industry experts in Web Development, Data Science, AI/ML, DSA, and more
            <br className="hidden sm:block" />
            — one-on-one, focused entirely on your goals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Illustration - Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-80 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
              <svg viewBox="0 0 200 280" className="w-full h-full">
                {/* Head */}
                <circle cx="100" cy="50" r="28" fill="#c2956f"/>
                
                {/* Hair stripes */}
                <path d="M 72 35 Q 72 25 100 18 Q 128 25 128 35" fill="#2d2420" stroke="#3d3026" strokeWidth="1.5"/>
                <path d="M 75 32 Q 80 28 90 25" fill="none" stroke="#8b6f47" strokeWidth="1.5" opacity="0.6"/>
                <path d="M 100 22 Q 105 19 115 20" fill="none" stroke="#8b6f47" strokeWidth="1.5" opacity="0.6"/>
                <path d="M 120 28 Q 118 22 110 20" fill="none" stroke="#8b6f47" strokeWidth="1.5" opacity="0.6"/>
                
                {/* Face */}
                <circle cx="88" cy="50" r="3" fill="#000"/>
                <circle cx="112" cy="50" r="3" fill="#000"/>
                
                {/* Eyes shine */}
                <circle cx="89" cy="48" r="1.5" fill="#fff" opacity="0.8"/>
                <circle cx="113" cy="48" r="1.5" fill="#fff" opacity="0.8"/>
                
                {/* Nose */}
                <line x1="100" y1="50" x2="100" y2="62" stroke="#b8855c" strokeWidth="1"/>
                
                {/* Mouth */}
                <path d="M 90 65 Q 100 70 110 65" stroke="#8b5a3c" strokeWidth="1.5" fill="none"/>
                
                {/* Neck */}
                <rect x="92" y="75" width="16" height="10" fill="#c2956f"/>
                
                {/* Shirt - Yellow */}
                <rect x="70" y="85" width="60" height="60" rx="6" fill="#ffd966"/>
                
                {/* Shirt sleeves */}
                <ellipse cx="70" cy="110" rx="10" ry="30" fill="#c2956f"/>
                <ellipse cx="130" cy="110" rx="10" ry="30" fill="#c2956f"/>
                
                {/* Hand gesture - left */}
                <circle cx="60" cy="105" r="9" fill="#c2956f"/>
                <path d="M 60 90 L 58 75" stroke="#c2956f" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 58 75 L 55 65" stroke="#c2956f" strokeWidth="2" strokeLinecap="round"/>
                <path d="M 58 75 L 65 70" stroke="#c2956f" strokeWidth="2" strokeLinecap="round"/>
                <path d="M 58 75 L 60 62" stroke="#c2956f" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Keyboard/Laptop */}
                <rect x="65" y="150" width="70" height="6" rx="1" fill="#666"/>
                <line x1="68" y1="152" x2="68" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="73" y1="152" x2="73" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="78" y1="152" x2="78" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="83" y1="152" x2="83" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="88" y1="152" x2="88" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="93" y1="152" x2="93" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="98" y1="152" x2="98" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="103" y1="152" x2="103" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="108" y1="152" x2="108" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="113" y1="152" x2="113" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="118" y1="152" x2="118" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="123" y1="152" x2="123" y2="154" stroke="#999" strokeWidth="0.8"/>
                <line x1="128" y1="152" x2="128" y2="154" stroke="#999" strokeWidth="0.8"/>
                
                {/* Laptop base */}
                <rect x="60" y="155" width="80" height="8" fill="#444"/>
              </svg>
            </div>
          </div>

          {/* Stats Cards - Right Side */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            {/* 100+ Mentors Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 flex items-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </div>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                100+ Mentors
              </h3>
              <p className="text-gray-700 text-base sm:text-lg font-medium">
                Verified industry experts
              </p>
            </div>

            {/* 10K+ Students Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                10K+ Students
              </h3>
              <p className="text-gray-700 text-base sm:text-lg font-medium">
                Guided to Success
              </p>
            </div>

            {/* 4.9+ Rating Card - Span Full Width */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 sm:col-span-2">
              <div className="mb-4 flex items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                4.9+ Rating
              </h3>
              <p className="text-gray-700 text-base sm:text-lg font-medium">
                Based on Real Feedbacks
              </p>
            </div>

          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8 lg:pt-12">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`px-8 sm:px-10 py-4 sm:py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg sm:text-xl rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg ${
              isHovered ? 'shadow-2xl transform translate-y-[-2px]' : ''
            }`}
          >
            Book a Session Now
            <span className={`text-2xl transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
              »
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}