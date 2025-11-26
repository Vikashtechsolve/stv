import React from 'react';

// --- Icon Components (Inline SVGs) ---

// Icon for Web Development: Code Brackets
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
    </svg>
);

// Icon for DSA: Puzzle/Gear (using the 'Gem' shape as a stylized gear/puzzle piece)
const GemIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 3h12l4 6-10 12L2 9z"/>
        <path d="M12 22 4 9h16z"/>
    </svg>
);

// Icon for Data Science: Bar Chart
const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
    </svg>
);

// Icon for AI / Machine Learning: Brain/Network (using the 'Bot' shape with a brain emphasis)
const AILearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20a6 6 0 0 0 0-12V4"/>
        <path d="M8 7.5A4.5 4.5 0 0 1 12 3a4.5 4.5 0 0 1 4 4.5"/>
        <path d="M17 19h1a2 2 0 0 0 2-2v-2h-3"/>
        <path d="M7 19H6a2 2 0 0 1-2-2v-2h3"/>
        <path d="M8 13h8"/>
    </svg>
);

// Icon for Science & Maths: Document with Plus/Minus (stylized equation sheet)
const ScienceMathIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
        <line x1="12" y1="12" x2="12" y2="18"/>
    </svg>
);

// Icon for Career Guidance: Briefcase/Bag
const CareerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);


// --- Card Data ---

const domains = [
    // Existing Cards
    {
        icon: CodeIcon,
        title: "Web Development",
        description: "Kickstart your journey into the digital world by learning how modern websites and web apps are built. Under mentor guidance, you'll master front-end technologies like HTML, CSS, JavaScript, and React, while also exploring back-end tools such as Node.js and databases. Understand how to turn your ideas into fully functional, responsive, and user-friendly digital experiences.",
        cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
        iconContainerClasses: 'bg-[#768FFF] shadow-md shadow-blue-200/50',
    },
    {
        icon: GemIcon,
        title: "Data Structures & Algorithms (DSA)",
        description: "DSA: Crack the Interview Logic: Master Dynamic Programming & System Design basics with personalized feedback. Transform theoretical knowledge into the confident problem-solving ability needed to clear FAANG-level interviews.",
        cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
        iconContainerClasses: 'bg-[#70B99B] shadow-md shadow-green-200/50', // Green/Teal icon color
    },
    {
        icon: ChartIcon,
        title: "Data Science",
        description: "Step into the world of data and analytics where numbers tell stories. Learn Python, statistics, data visualization, and machine learning techniques to extract insights from large datasets. Mentors will guide you through real-life projects—from cleaning data to building predictive models—helping you understand how to make informed business or research decisions using data.",
        cardBg: "bg-gradient-to-br from-teal-50 to-teal-100",
        iconContainerClasses: 'bg-[#FF9B69] shadow-md shadow-orange-200/50', // Orange/Red icon color
    },
    
    // New Cards
    {
        icon: AILearningIcon,
        title: "AI / Machine Learning",
        description: "Unlock the power of Artificial Intelligence and Machine Learning with hands-on mentorship from industry professionals. Learn the end-to-end process of building intelligent systems—from understanding algorithms and training models to deploying AI solutions. Our mentors simplify complex topics like neural networks, natural language processing, and deep learning so you can apply them confidently in real-world scenarios.",
        cardBg: "bg-gradient-to-br from-purple-50 to-purple-100", // Similar to DSA card's background glow
        iconContainerClasses: 'bg-[#4B6CF6] shadow-md shadow-blue-300/50', // Blue Icon
    },
    {
        icon: ScienceMathIcon,
        title: "Science & Maths",
        description: "Enhance your academic foundation through personalized mentorship sessions designed for conceptual clarity. Whether it's mastering physics, chemistry, or mathematics, mentors guide you step-by-step to understand topics deeply rather than memorizing formulas. With visual explanations, interactive problem-solving, and regular practice sessions, you'll develop logical thinking and exam-ready confidence.",
        cardBg: "bg-gradient-to-br from-green-50 to-green-100",
        iconContainerClasses: 'bg-[#F2D05C] shadow-md shadow-yellow-300/50', // Yellow Icon
    },
    {
        icon: CareerIcon,
        title: "Career Guidance",
        description: "Shape your career path with expert guidance tailored to your goals. Learn how to create a strong resume, craft impactful portfolios, and prepare confidently for interviews. Mentors help you identify your strengths, explore opportunities, and build a personalized career roadmap—whether you're starting fresh or looking for a switch. Each session is designed to boost your confidence, communication, and clarity about what comes next.",
        cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
        iconContainerClasses: 'bg-[#B08968] shadow-md shadow-amber-300/50', // Brown/Tan Icon
    },
];

// --- DomainCard Component ---

const DomainCard = ({ icon: Icon, title, description, cardBg, iconContainerClasses }) => {
    // White icon stroke inside the colored background circle for all icons
    const iconStrokeColor = 'stroke-white'; 

    return (
        <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 h-full flex flex-col ${cardBg} border border-opacity-30 border-gray-200`}>
            {/* Icon Container */}
            <div className={`w-14 h-14 p-2 rounded-full flex items-center justify-center mb-6 text-white ${iconContainerClasses}`}>
                <Icon className={`w-8 h-8 ${iconStrokeColor}`} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {description}
            </p>
        </div>
    );
};

// --- Main App Component ---

const MentorshipDomain = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-12 lg:mb-16">
                    <h1 className="font-playfair text-3xl sm:text-4xl  text-gray-800 mb-4 tracking-tight">
                        Choose Your Mentorship Domain
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        <span className="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500 after:transform after:scale-x-100 after:origin-left">
                            Find the area you want to master
                        </span>
                        — learn directly from experts in your chosen field.
                    </p>
                </header>

                {/* Cards Grid Section: Responsive to show 3 cards per row on large screens, 2 on medium, 1 on small */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-25 gap-y-12">
                    {domains.map((domain, index) => (
                        <DomainCard
                            key={index}
                            icon={domain.icon}
                            title={domain.title}
                            description={domain.description}
                            cardBg={domain.cardBg}
                            iconContainerClasses={domain.iconContainerClasses}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentorshipDomain;
