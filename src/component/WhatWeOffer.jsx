

import React from 'react'
import mentroship from '../assets/mentorship.jpg';
import AI from '../assets/Ai.jpg';
import { FiAward, FiUsers, FiTool, FiSun } from "react-icons/fi";

const WhatWeOffer = () => {
    return (
        <div className="py-2 mt-2"> {/* Reduced top margin */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-4 sm:mb-6 md:mb-8 lg:mb-10 heading-primary leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
                What We Offer
            </h1>

            {/* Reduced min-height and padding to bring cards closer */}
            <div className=" flex items-center justify-center py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    {/* Card 1 - Online Contests */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-white shadow rounded-2xl p-6 w-72 min-h-[300px] flex flex-col justify-between">
                            <div className="text-center">
                                <FiAward className="h-10 w-10 text-red-500 mx-auto mb-3" />
                                <h2 className="text-lg font-semibold font-playfair">Online Contests</h2>
                                <p className="text-sm text-red-600 mt-1 font-nunito">Learn by competing</p>
                                <p className="text-gray-600 text-sm mt-3 font-nunito">
                                    Participate in quizzes, coding rounds, and hackathons to test your
                                    skills.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <a href="#" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-nunito">
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <img src={mentroship} alt="Card Image" className="w-72 rounded-xl shadow" />
                    </div>

                    {/* Card 2 - 1:1 Mentorship */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-72 h-20 rounded-2xl shadow bg-gradient-to-b from-[#E2E2E2] to-pink-200"></div>
                        <div className="bg-white shadow rounded-2xl p-6 w-72 min-h-[300px] flex flex-col justify-between">
                            <div className="text-center">
                                <FiUsers className="h-10 w-10 text-red-500 mx-auto mb-3" />
                                <h2 className="text-lg font-semibold font-playfair">1:1 Mentorship</h2>
                                <p className="text-sm text-red-600 mt-1 font-nunito">
                                    Personal guidance from experts
                                </p>
                                <p className="text-gray-600 text-sm mt-3 font-nunito">
                                    Get tailored support on careers, projects, internships, or
                                    switching roles.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <a href="#" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-nunito">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Workshops */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-white shadow rounded-2xl p-6 w-72 min-h-[300px] flex flex-col justify-between">
                            <div className="text-center">
                                <FiTool className="h-10 w-10 text-red-500 mx-auto mb-3" />
                                <h2 className="text-lg font-semibold font-playfair">Workshops</h2>
                                <p className="text-sm text-red-600 mt-1 font-nunito">Hands-on learning</p>
                                <p className="text-gray-600 text-sm mt-3 font-nunito">
                                    Interactive sessions to master real-world skills with experts.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <a href="#" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-nunito">
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <img src={AI} alt="Card Image" className="w-72 rounded-xl shadow" />
                    </div>

                    {/* Card 4 - Hackathons */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-72 h-20 rounded-2xl shadow bg-gradient-to-b from-[#E2E2E2] to-pink-200"></div>
                        <div className="bg-white shadow rounded-2xl p-6 w-72 min-h-[300px] flex flex-col justify-between">
                            <div className="text-center">
                                <FiSun className="h-10 w-10 text-red-500 mx-auto mb-3" />
                                <h2 className="text-lg font-semibold font-playfair">Hackathons</h2>
                                <p className="text-sm text-red-600 mt-1 font-nunito">Build & Compete</p>
                                <p className="text-gray-600 text-sm mt-3 font-nunito">
                                    Team up and solve challenges while showcasing your creativity.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <a href="#" className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-nunito">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
