import React from 'react'
import masterImg from '../assets/masterclass.jpg';

const MasterClass = () => {
    return (
        <div className="py-12 mt-6">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-12 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
                Master Class – Learn a Topic in Just 1 Hour!
            </h1>

            <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-nunito">
                Quick, affordable, and interactive classes starting at{" "}
                <span className="bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                    just ₹9.
                </span>
            </p>


            <div className="max-w-4xl mx-auto overflow-hidden mt-6 md:mt-10">
                {/* Image + Button Section */}
                <div className="w-full">
                    {/* Image */}
                    <img
                        src={masterImg}
                        alt="Master Class"
                        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-md"
                    />

                    {/* Button aligned with image right */}
                    <div className="flex justify-center md:justify-end mt-4 px-4">
                        <button className="bg-[#ED0331] text-white text-[16px] sm:text-[18px] md:text-[21px] w-[180px] sm:w-[200px] md:w-[220px] h-[50px] sm:h-[55px] md:h-[60px] rounded-md shadow hover:bg-red-700 transition">
                            Master Class Only ₹9
                        </button>
                    </div>
                </div>

                {/* Center Text Section */}
                <div className="px-4 sm:px-6 py-6">
                    <p className="text-center font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                        Quick, interactive, and affordable — our live Master Classes help you
                        master one topic in just 60 minutes. Perfect for students and
                        professionals who want focused learning without extra cost.
                    </p>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-8 py-6 md:py-8">
                    {/* What's Included */}
                    <div className="p-4 sm:p-6 rounded-lg shadow-md bg-gradient-to-b from-[#E2E2E2] to-[#AEAEAE] text-center">
                        <h3 className="text-md sm:text-lg font-bold mb-3 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                            What's Included:
                        </h3>
                        <ul className="space-y-2 text-gray-800 font-medium inline-block text-left list-disc text-sm sm:text-base">
                            <li>Expert-led live session</li>
                            <li>One focused topic per class</li>
                            <li>Notes & resources shared</li>
                            <li>Certificate of participation</li>
                        </ul>
                    </div>

                    {/* Topics to be Covered */}
                    <div className="p-4 sm:p-6 rounded-lg shadow-md bg-gradient-to-b from-[#E2E2E2] to-[#AEAEAE] text-center">
                        <h3 className="text-md sm:text-lg font-bold mb-3 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                            Topics to be Covered:
                        </h3>
                        <ul className="space-y-2 text-gray-800 font-medium inline-block text-left list-disc text-sm sm:text-base">
                            <li>Mastering Arrays in Coding</li>
                            <li>Choosing the Right Career Path</li>
                            <li>Resume Building in 60 Minutes</li>
                            <li>Algebra Made Easy</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center pb-6 sm:pb-8">
                    <button className="text-white text-[16px] sm:text-[18px] md:text-[20px] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow bg-gradient-to-r from-[#ED0331] to-[#87021C] hover:opacity-90 transition">
                        Book Your Master Class <br className="hidden sm:block" /> Now
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MasterClass