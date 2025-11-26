import React from 'react';

// Main component that replicates the 1:1 Mentorship Program section
const WhatIsMentorship = () => {
  // Placeholder image URL - replace with your actual asset if needed
  const videoCallImageUrl = "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760434707/57049b741899d50e47496fd3bf0c5036d0f2a1b4_givpkg.jpg";

  return (
    <div className="bg-gray-50  flex flex-col items-center justify-center p-6 sm:p-10 font-sans">
      
      {/* Container for the entire section content */}
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-3xl sm:text-4xl font-playfair text-gray-800  tracking-tight">
            What is <span className="font-bold">1:1 Mentorship</span>?
          </h1>
        </div>
        
        {/* Content Grid (Text and Image) */}
        {/* Stacks on mobile, uses 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 font-nunito  lg:order-1 space-y-8 text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
            
            <p>
              Our <span className="font-semibold text-red-600">1:1 Mentorship Program</span> connects you directly with
              experienced mentors from top tech and educational backgrounds who understand your unique learning goals. 
              Whether you're a student struggling with complex topics, a graduate seeking the
              right career path, or a professional aiming for a successful transition, our mentors provide tailored support every step of the way.
            </p>
            
            <p>
             With personalized guidance, real-world insights, and structured learning paths, you’ll gain the clarity, confidence, and skills needed to grow faster and achieve your goals all through one-on-one interactive sessions designed just for you.
            </p>
          </div>
          
          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 shadow-2xl rounded-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            {/* The image is contained within a div for easy styling and aspect ratio control. 
                Using object-cover ensures it fills the container without distortion. */}
            <img 
              src={videoCallImageUrl}
              alt="Mentor and mentee on a video call session, demonstrating 1:1 interaction."
              className="w-full h-full object-cover"
              style={{ aspectRatio: '8/6' }} // Custom aspect ratio to match the original image's look
              onError={(e) => {
                // Fallback if placeholder image fails to load
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760434707/57049b741899d50e47496fd3bf0c5036d0f2a1b4_givpkg.jpg";
              }}
            />
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

// Export the component for use in an application root
export default WhatIsMentorship;
