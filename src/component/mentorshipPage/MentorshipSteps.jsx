import React from 'react';

// --- Icon Components (Inline SVGs) ---
const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const TrendUpIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);


const stepData = [
    {
        icon: UserIcon,
        title: "Register Yourself",
        description: "Sign up in just a few clicks and tell us your learning goals — whether you want to upskill, prepare for interviews, or gain conceptual clarity.",
        iconBg: 'bg-purple-500',
        cardBg: 'bg-gradient-to-br from-white to-purple-50',
    },
    {
        icon: SearchIcon,
        title: "Choose Your Mentor & Topic",
        description: "Explore a list of verified mentors across domains like Web Development, Data Science, DSA, and more. Select one the best that fits your learning.",
        iconBg: 'bg-purple-600',
        cardBg: 'bg-gradient-to-br from-white to-purple-50',
    },
    {
        icon: CalendarIcon,
        title: "Schedule Your 1:1 Session",
        description: "Pick your preferred time slot, confirm your booking, and get instant access to session details. It's flexible, quick, and completely hassle-free.",
        iconBg: 'bg-purple-700',
        cardBg: 'bg-gradient-to-br from-white to-purple-50',
    },
    {
        icon: TrendUpIcon,
        title: "Learn, Apply & Progress",
        description: "Join your live session, interact directly with your mentor, get personalized feedback, and walk away with a clear roadmap, notes, and next-step guidance.",
        iconBg: 'bg-purple-800',
        cardBg: 'bg-gradient-to-br from-white to-purple-50',
    },
];

// Reusable Step Card Component
const StepCard = ({ icon: Icon, title, description, iconBg, cardBg }) => {
    return (
        <div className={`p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center ${cardBg} border border-opacity-30 border-gray-200`}>
            {/* Icon Circle */}
            <div className={`w-16 h-16 p-3 rounded-full flex items-center justify-center mb-6 text-white ${iconBg} shadow-xl`}>
                <Icon className="w-8 h-8 stroke-white" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {title}
            </h3>

            {/* Description */}
            <p className="text-md font-nunito text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const MentorshipSteps = () => (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl font-playfair text-gray-800 mb-4 tracking-tight">
                    How 1:1 Mentorship Works
                </h2>
                <p className="text-2xl font-nunito red-gradient max-w-4xl mx-auto">
                    
                        Your journey from registration to real growth
                    — simplified into four easy steps.
                </p>
            </header>

            {/* Step Cards Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stepData.map((step, index) => (
                    <StepCard
                        key={index}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        iconBg={step.iconBg}
                        cardBg={step.cardBg}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default MentorshipSteps;