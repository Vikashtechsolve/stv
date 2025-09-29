import React from "react";
import mainImage from "../assets/card.png"; // Adjust path as needed
import smallImage from "../assets/small.png"; // Adjust path as needed

const Hero = () => {
    return (
        <div className="mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20 p-6 md:p-8 mt-20 md:mt-40">
                {/* Left Side Text */}
                <div className="w-full md:flex-[1.2] text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-gray-900 leading-snug font-playfair">
                        Build Your <span className="text-red-600">Skills</span><br />
                        with Vikash Tech Solution.
                    </h1>

                    <p className="text-red-600 font-nunito font-semibold mt-4 text-sm sm:text-base">
                        From guidance to career outcomes,<br />
                        We’ve got you covered
                    </p>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
                        Learn from our expert mentors, gain hands-on project experience & take the right step toward a successful career!
                    </p>

                    <button
                        className="mt-6 sm:mt-8 md:mt-10 text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition text-sm sm:text-base"
                        style={{
                            background: "linear-gradient(90deg, #ED0331, #87021C)"
                        }}
                    >
                        Explore our Programs »
                    </button>
                </div>

                {/* Right Side Image with Overlays */}
                <div className="w-full md:flex-[1.5] flex justify-center items-center">
                    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                        {/* Main Image */}
                        <img
                            src={mainImage}
                            alt="Guidance Illustration"
                            className="w-full rounded-lg shadow-lg object-cover"
                        />

                        {/* Top-Left Text */}
                        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 text-white max-w-[75%]">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
                                Doubts fade when<br />guidance is <br /> strong!
                            </p>
                            <button className="mt-4 sm:mt-6 md:mt-8 bg-white text-gray-900 px-3 sm:px-5 py-2 sm:py-3 rounded-md font-medium shadow hover:bg-gray-200 transition text-xs sm:text-sm md:text-base">
                                Get 1:1 guidance →
                            </button>
                        </div>

                        {/* Bottom-Right Small Image */}
                        <img
                            src={smallImage}
                            alt="Extra Illustration"
                            className="absolute bottom-2 right-2 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
