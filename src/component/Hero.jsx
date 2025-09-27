import React from 'react'

const Hero = () => {
    return (
        <div className="mt-12 w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center p-3 rounded-lg">
                {/* Left Section */}
                <div>
                    <h2 className="text-[48px] font-bold mb-4 font-playfair">
                        Build Your <span className="text-red-500">Skills</span> <br />
                        with Vikas Tech Solutions.
                    </h2>

                    <p className="text-red-600 text-[30px] font-semibold mb-4 font-nunito">
                        From guidance to career outcomes, <br /> We’ve got you covered
                    </p>
                    <p className="text-[#1B1718] mb-6 font-nunito font-semibold text-[22px]">
                        Learn from our expert mentors, gain hands-on project experience & take the right step toward a successful career!
                    </p>
                    <button className="bg-red-600 text-white px-5 py-3 rounded-lg shadow hover:bg-red-700 transition font-playfair">
                        Explore our Programs &gt;
                    </button>
                </div>

                {/* Right Section (Exact Card Layout) */}
                <div
                    className="text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center font-playfair"
                    style={{
                        width: "640px",
                        height: "350px",
                        marginRight: "349.95px",
                        background: "linear-gradient(135deg, #0D2764, #456FD2)",
                    }}
                >
                    <p className="text-lg font-semibold mb-4 text-center">
                        Doubts fade when <br /> guidance is strong!
                    </p>
                    <button className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                        Get 1:1 guidance &gt;
                    </button>

                    {/* Illustration */}
                    <div className="mt-6 flex items-end space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-10 bg-blue-500 rounded-sm"></div>
                        <div className="w-6 h-14 bg-yellow-400 rounded-sm"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                👨‍🎓
                            </div>
                            <span className="text-sm mt-2">Climb Up</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
