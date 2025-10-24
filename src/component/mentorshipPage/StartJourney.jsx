import React from 'react';

// The main application component
const StartJourney = () => {
  return (
    <div className=" flex items-start justify-center p-4 sm:p-8 bg-[#e5e7eb] font-inter">
      <Banner />
    </div>
  );
};

// The Mentorship Banner component
const Banner = () => {
    // Define the custom color for the heading that matches the deep red/maroon in the image.
    const HEADING_COLOR = 'text-[#8B0000]';

    // Handler function for the button click
    const handleStartJourney = () => {
        console.log("Mentorship Journey Started!");
        // In a real application, this would navigate the user or open a modal.
    };

    return (
        <div className="w-full  py-16 px-4 sm:px-8 md:py-24 text-center">
            {/* Main Heading */}
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl red-gradient font-semibold mb-6 leading-tight ${HEADING_COLOR}`}>
                Clarity. Confidence. Career Growth — Starts Here
            </h1>

            {/* Subheading/Description */}
            <p className="text-base sm:text-xl font-nunito text-gray-700 mb-12 max-w-3xl mx-auto">
                Connect with a mentor who understands your goals and helps you reach them faster.
            </p>

            {/* Action Button */}
            <button
                onClick={handleStartJourney}
                className="
                    inline-flex items-center justify-center
                    px-8 py-3 sm:px-10 sm:py-4
                    text-base sm:text-lg font-semibold text-white
                    rounded-xl
                    bg-gradient-to-r from-violet-600 to-indigo-700
                    shadow-lg shadow-violet-500/50
                    hover:shadow-xl hover:shadow-violet-500/60
                    active:scale-[0.98]
                    transition transform duration-200 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-violet-300
                    cursor-pointer 
                "
                aria-label="Start your mentorship journey"
            >
                Start Mentorship Journey
                <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5l7 7-7 7M5 12h14" // Represents a forward arrow >>
                    />
                </svg>
            </button>
        </div>
    );
};

export default StartJourney;
