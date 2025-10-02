import React from "react";
import bgImage from "../assets/membershipBG.jpg";
import videoThumbnail from "../assets/video.jpg";

const Membership = () => {
    return (
        <div className="mt-6">
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
                Power of Mentorship
            </h1>

            {/* Desktop/Tablet Version (with background) */}
            <section
                className="relative w-full h-[627px] bg-cover bg-center items-center hidden md:flex"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Overlay (only for desktop) */}
                <div className="absolute inset-0 hidden md:block bg-black/40"></div>

                {/* Content */}
                <div className="relative gap-35 w-full max-w-6xl mx-auto flex items-center justify-between px-6">
                    {/* Left: Video Thumbnail with Play Icon */}
                    <div  className="w-9/10 border  flex justify-center">
                        <div className="relative">
                            <img
                                src={videoThumbnail}
                                alt="Video Thumbnail"
                                className="w-[650px] h-[300px] rounded-xl shadow-xl cursor-pointer object-cover -ml-10"
                            />
                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/80 rounded-full p-4 hover:scale-110 transition-transform cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 text-gray-800"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className=" font-nunito  text-white w-1/2 space-y-6 px-2 text-center flex flex-col items-center ">
                        <p className="font-nunito  text-[26px] leading-[158%] tracking-[-0.02em] text-center">
                            See how our mentors simplify concepts and guide learners step by
                            step!
                        </p>
                        <hr className="border-gray-300/50 w-3/4 mx-auto" />
                        <p className="font-nunito  text-[26px] leading-[158%] tracking-[-0.02em] text-center">
                            Get a glimpse of how our mentors guide students toward success!
                        </p>
                    </div>

                </div>
            </section>

            {/* Mobile Version (without background) */}
            <section className="w-full flex flex-col items-center justify-center md:hidden py-8 px-4 bg-gray-900">
                {/* Video */}
                <div className="relative w-full max-w-md">
                    <img
                        src={videoThumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-[200px] sm:h-[250px] rounded-xl shadow-xl cursor-pointer object-cover"
                    />
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 rounded-full p-3 hover:scale-110 transition-transform cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-800"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-white text-center space-y-4 mt-6">
                    <p className="text-base sm:text-lg">
                        See how our mentors simplify concepts and guide learners step by
                        step!
                    </p>
                    <hr className="border-gray-300/50 w-3/4 mx-auto" />
                    <p className="text-base sm:text-lg">
                        Get a glimpse of how our mentors guide students toward success!
                    </p>
                </div>
            </section>

            {/* Book Button OUTSIDE background */}
            <div className="flex justify-center mt-10">
                <button className="px-8 py-5 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white rounded-2xl shadow hover:opacity-90 transition text-2xl ">
                    Book a Session
                </button>
            </div>

        </div>
    );
};

export default Membership;
