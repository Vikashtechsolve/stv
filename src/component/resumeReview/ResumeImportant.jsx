import React from 'react';

// Simple SVG Icon components to simulate the look and feel
// Since external libraries like lucide-react or phosphor-icons cannot be imported,
// we use simple SVG paths with customizable colors.

const IconContainer = ({ colorClass, children }) => (
    <div className={`p-3 rounded-full inline-flex items-center justify-center ${colorClass} bg-opacity-10 mb-4`}>
        {children}
    </div>
);

// 1. Globe Icon (Highlight Your Strengths) - Teal/Blue
const GlobeIcon = ({ colorClass }) => (
    <IconContainer colorClass={colorClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${colorClass}`}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
            <path d="M2 12c.5 1.5 1 2.5 2 3.5s2 1.5 4 1.5c2 0 3.5-1 4.5-2.5 1-.8 1-2.5 1-4.5s0-3.5-1-4.5c-1-1.5-2.5-2.5-4.5-2.5c-2 0-3.5 1-4.5 2.5s-1 3-1 4.5Z" />
        </svg>
    </IconContainer>
);

// 2. File Check Icon (Fix Resume Mistakes) - Green
const FileCheckIcon = ({ colorClass }) => (
    <IconContainer colorClass={colorClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${colorClass}`}>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m9 15 2 2 4-4" />
        </svg>
    </IconContainer>
);

// 3. Search Chat Icon (ATS Optimization) - Orange/Yellow
const SearchChatIcon = ({ colorClass }) => (
    <IconContainer colorClass={colorClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${colorClass}`}>
            <path d="M14.5 20H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2.5" />
            <path d="M19 19H5a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5H20a.5.5 0 0 0 .5-.5V21a2 2 0 0 0-2-2Z" />
            <path d="M21 21l-4.3-4.3" />
            <circle cx="16" cy="16" r="3" />
        </svg>
    </IconContainer>
);

// 4. User Book Icon (Personalized Guidance) - Purple
const UserBookIcon = ({ colorClass }) => (
    <IconContainer colorClass={colorClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${colorClass}`}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <path d="M12 7h.01" />
            <path d="M12 12h.01" />
            <path d="M12 17h.01" />
        </svg>
    </IconContainer>
);

// The individual feature card component
const FeatureCard = ({ icon, title, description }) => (
    <div
        className="bg-gradient-to-b from-gray-50 to-blue-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
               flex flex-col items-center text-center h-full"
    >
        {icon}
        <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair ">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed font-nunito ">{description}</p>
    </div>
);

// Main Application Component
const ResumeImportant = () => {
    const features = [
        {
            title: "Highlight Your Strengths",
            description: "Bring your best forward! Our experts identify the achievements, skills, and experiences that will grab recruiters' attention and make your resume shine.",
            icon: <GlobeIcon colorClass="text-blue-600" />,
        },
        {
            title: "Fix Resume Mistakes",
            description: "Eliminate errors that often cost opportunities. We'll polish your formatting, grammar, and layout so your resume looks professional and well-organized.",
            icon: <FileCheckIcon colorClass="text-green-600" />,
        },
        {
            title: "ATS Optimization",
            description: "Most resumes never reach human eyes because they fail ATS checks. We ensure your resume is keyword-optimized and structured to pass Applicant Tracking Systems effortlessly.",
            icon: <SearchChatIcon colorClass="text-orange-500" />,
        },
        {
            title: "Personalized Guidance",
            description: "No automated bots — real mentors review your resume and share personalized suggestions through live or recorded feedback sessions, ensuring maximum career impact.",
            icon: <UserBookIcon colorClass="text-purple-600" />,
        },
    ];

    return (
        // Outer container with light gray background and Inter font (Tailwind default)
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="font-playfair text-3xl sm:text-4xl  text-gray-800  mb-4">
                        Why Resume Review is Important
                    </h1>
                    <p className="text-xl  red-gradient mt-4 font-medium font-nunito max-w-3xl mx-auto leading-relaxed">
                        Your resume is your first impression — make sure it stands out. Our expert review
                        ensures your resume is clear, impactful, and recruiter-ready.
                    </p>
                </header>

                {/* Feature Cards Grid (Responsive 2x2 layout) */}
                <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            style={{
                                background: 'linear-gradient(180deg, #F9FAFB 0%, #EFF6FF 100%)'
                            }}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
};

export default ResumeImportant;
