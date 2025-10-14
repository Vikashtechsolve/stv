import React from 'react';

// Tailwind is assumed to be available
const ICON_SIZE = "w-12 h-12";

// --- Icon Definitions (Lucide-inspired SVGs for Coloring) ---
// Icon 1: Personalized Career Roadmap (Blue) - Flow/Process icon
const RoadmapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z" />
    <path d="M12 21a2 2 0 0 0 2-2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2z" />
    <line x1="12" y1="12" x2="12" y2="17" />
    <line x1="12" y1="7" x2="12" y2="9" />
  </svg>
);

// Icon 2: Topic-Focused Guidance (Red) - Brain icon
const BrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a2 2 0 0 0-2 2v2M12 1a2 2 0 0 1 2 2v2M4 10h16M2 12c.7-.7 1.5-1.1 2.5-1.1h15c1 0 1.8.4 2.5 1.1M12 22a2 2 0 0 0 2-2v-2M12 22a2 2 0 0 1-2-2v-2M18 18c1.7 0 3-.5 3-2s-1.3-2-3-2M6 18c-1.7 0-3-.5-3-2s1.3-2 3-2" />
  </svg>
);

// Icon 3: Live, Interactive Sessions (Red) - Video/Record icon
const VideoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

// Icon 4: Doubt Solving + Practical Resources (Red) - Pen/Wrench icon
const WrenchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-3.76 3.76a2 2 0 0 1-2.83 0l-2.83-2.83a2 2 0 0 1 0-2.83l3.76-3.76a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

// Icon 5: Affordable Pricing for Everyone (Black) - Tag/Badge icon
const TagIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// --- Feature Data Array ---
const features = [
  {
    icon: RoadmapIcon,
    title: 'Personalized Career Roadmap',
    description: 'Get a customized learning and career plan designed just for you. Your mentor helps you identify strengths, fix weak areas, and map out the right steps toward your career goals.',
    iconColor: 'text-blue-700',
  },
  {
    icon: BrainIcon,
    title: 'Topic-Focused Guidance (Tech, Academic & Career)',
    description: 'Learn directly from experts on the subjects you want to master — from Data Structures and Algorithms to Web Development, AI, and interview preparation. Get focused guidance on what truly matters to you.',
    iconColor: 'text-red-700',
  },
  {
    icon: VideoIcon,
    title: 'Live, Interactive Sessions',
    description: 'Engage in one-on-one live sessions where mentors explain, discuss, and guide you in real time. No pre-recorded content — just direct learning and personalized feedback.',
    iconColor: 'text-red-700',
  },
  {
    icon: WrenchIcon,
    title: 'Doubt Solving + Practical Resources',
    description: 'Never get stuck again! Ask your doubts instantly and access exclusive practice materials, exercises, and projects shared by your mentor to strengthen your skills.',
    iconColor: 'text-red-700',
  },
  {
    icon: TagIcon,
    title: 'Affordable Pricing for Everyone',
    description: 'Quality mentorship doesn’t have to be expensive. We offer flexible, budget-friendly plans so every learner — from student to professional — can access expert mentorship.',
    iconColor: 'text-gray-900',
  },
];

// --- FeatureCard Component ---
const FeatureCard = ({ feature, isBottomRow }) => {
  const IconComponent = feature.icon;

  return (
    <div className={`
      p-6 md:p-8 bg-[#f2f2f2]
      rounded-xl shadow-lg border border-gray-100
      hover:shadow-2xl transition-shadow duration-300
      flex flex-col items-center text-center
      ${isBottomRow ? 'lg:mx-0 xl:mx-10' : ''}
    `}>
      {/* Icon Section - Styled to match the image's aesthetic */}
      <div className="
        w-20 h-20 p-2 mb-4
        bg-[#f2f2f2] rounded-full
        flex items-center justify-center
      ">
        <IconComponent className={`${feature.iconColor} ${ICON_SIZE}`} />
      </div>

      {/* Title */}
      <h3 className="
        text-xl font-semibold mb-3 font-playfair
        red-gradient tracking-tight
      ">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-md font-nunito text-gray-500 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

// --- Main App Component ---
const MentorshipCards = () => {
  // Split features into two visual rows for desktop view
  const topRowFeatures = features.slice(0, 3);
  const bottomRowFeatures = features.slice(3);

  return (
    // Set up the overall canvas style
    <div className="min-h-screen bg-[#E2E2E2] font-inter p-6 md:p-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/*
          RESPONSIVE LAYOUT IMPLEMENTATION:
          
          MOBILE/TABLET (default up to lg): Simple grid flow, 1 or 2 columns.
        */}
        <div className="
          grid gap-8 mb-8
          grid-cols-1 // Mobile: 1 column
          md:grid-cols-2 // Tablet: 2 columns
          lg:hidden // Hide this simple flow on desktop (lg and up)
        ">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        
        {/*
          DESKTOP LAYOUT (lg and up): Enforces the 3-card, 2-card centered structure.
        */}
        <div className="hidden lg:block">
          
          {/* Row 1: Three equal columns */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {topRowFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* Row 2: Two centered columns */}
          <div className="flex justify-center">
            {/*
              We use a nested grid here to ensure the two cards are side-by-side
              and then center the entire block using the outer 'flex justify-center'.
              The 'max-w-[70%]' or similar helps prevent the two cards from stretching
              to the full width of the container, maintaining the centered, contained look.
            */}
            <div className="grid grid-cols-2 gap-8 w-full xl:max-w-[70%] 2xl:max-w-[60%]">
              {bottomRowFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} isBottomRow={true} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MentorshipCards;
