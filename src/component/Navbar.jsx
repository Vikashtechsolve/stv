import React from "react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between fixed top-0 left-0 w-full z-50 mb-3">
            {/* Logo Section with Gray Background */}
            <div className="flex items-center px-8 py-4">
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-extrabold leading-none">
                        <span className="text-black">V</span>
                        <span className="text-red-600">T</span>
                        <span className="text-black">S</span>
                    </span>
                    <p className="text-sm text-red-600 font-semibold mt-1 tracking-wide">
                        VIKASH TECH SOLUTION
                    </p>
                </div>
            </div>

            {/* Menu Section with Black Half Circle Background */}
            <div className="bg-black rounded-l-full flex items-center justify-end px-6 py-3 w-[70%] ml-auto">
                {/* 🔥 `ml-auto` pushes this whole capsule to the right */}

                {/* Menu Items */}
                <div className="flex space-x-20 text-lg font-medium text-white mr-6">
                    <a href="#" className="hover:text-red-500">Learning Paths</a>
                    <a href="#" className="hover:text-red-500">Skill Battles</a>
                    <a href="#" className="hover:text-red-500">Career Outcomes</a>
                    <a href="#" className="hover:text-red-500 mr-6">Discover</a>
                </div>


                {/* Join Us Button */}
                <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
