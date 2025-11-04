import React from 'react';
import { FileQuestion, Video, NotebookText, ClipboardList, PlayCircle, CalendarCheck, CheckCircle } from 'lucide-react';

// Data for the three steps
const stepsData = [
  {
    id: 1,
    title: 'Post your Doubts & Get Instant Match',
    mainIcon: FileQuestion,
    description: 'Upload your question, screenshot, or describe your doubt in detail.',
    secondaryIcon: ClipboardList,
    secondaryText: 'Explain your problem clearly — and our system will instantly match you with the right mentor.',
  },
  {
    id: 2,
    title: 'Live 1:1 Video Solution (Real-Time Clarity)',
    mainIcon: Video,
    description: 'Join a 1:1 video session with an expert who specializes in your subject.',
    secondaryIcon: PlayCircle,
    secondaryText: 'Get real-time explanations, on-screen solutions, and practice questions to strengthen your understanding.',
  },
  {
    id: 3,
    title: 'Receive Personalized Roadmap & Notes',
    mainIcon: NotebookText,
    description: 'After your session, receive personalized notes, suggested resources, and a roadmap for mastering the topic.',
    secondaryIcon: CalendarCheck,
    secondaryText: 'We help you truly understand the concept — not just fix the doubt.',
  },
];

// Reusable Card Component
const StepCard = ({ step }) => {
  const MainIconComponent = step.mainIcon;
  const SecondaryIconComponent = step.secondaryIcon;

  return (
    <div className="bg-[#f8faff] p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
      
      {/* Main Icon and Title */}
      <div className="flex flex-col items-start mb-6">
        <div className="p-3 mb-4 rounded-full bg-indigo-50 border-2 border-indigo-200">
          <MainIconComponent className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-nunito font-semibold text-gray-900 mb-2">
          {step.title}
        </h3>
      </div>

      {/* Primary Description */}
      <p className="text-gray-600 font-nunito mb-6 flex-grow">
        {step.description}
      </p>

      {/* Secondary Feature/Bullet */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex font-nunito items-start text-sm text-gray-700">
          <SecondaryIconComponent className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
          <p>
            {step.secondaryText}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const HowItWorks = () => {
  return (
    <div className=" bg-[#E2E2E2]  flex items-center justify-center sm:p-8 font-inter">
      <div className="max-w-6xl w-full">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-playfair font-light text-gray-800 tracking-tight mb-2">
            How It Works
          </h1>
          <p className="text-xl  red-gradient mt-4 font-medium font-nunito">
            Get Your Doubts Solved in Just 3 Simple Steps
          </p>
        </header>

        {/* Steps Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

     

      </div>
    </div>
  );
};

export default HowItWorks;
