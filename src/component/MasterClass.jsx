import React from 'react'
import masterImg from '../assets/masterclass.jpg';
import { useNavigate } from "react-router-dom";

const MasterClass = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-12">
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-12 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
                Master Class – Learn a Topic in Just 1 Hour!
            </h1>

            {/* Subtitle */}
            <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-nunito">
                Quick, affordable, and interactive classes starting at{" "}
                <span className="bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                    just ₹9.
                </span>
            </p>

            {/* Image + Button Section */}
            <div className="w-full flex justify-center overflow-hidden mb-8">
            <div className="text-center flex flex-col items-center" style={{ width: "1200px" }}>
                {/* Master Class Image */}
                <img
                src={masterImg}
                alt="Master Class"
                className="w-full h-[500px] sm:h-[650px] md:h-[700px] lg:h-[750px] object-cover rounded-lg shadow-lg"
                />

                {/* Button below image */}
                <div className="flex mt-6">
               
                </div>
            </div>

            </div>

            {/* Center Text Section */}
            <div className="w-full px-4 sm:px-6 py-6">
                <p
                    className="text-center font-bold leading-relaxed bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px" }}
                >
                    Quick, interactive, and affordable — our live Master Classes help you
                    master one topic in just 60 minutes. Perfect for students and
                    professionals who want focused learning without extra cost.
                </p>
                </div>


           

            {/* CTA Button */}
            <div className="flex justify-center pb-6 sm:pb-8">
                <button className="cursor-pointer text-white text-[16px] sm:text-[18px] md:text-[20px] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow bg-gradient-to-r from-[#ED0331] to-[#87021C] hover:opacity-90 transition" onClick={() => navigate("/masterClass")}>
                     Master Class Only ₹9 
                </button>
            </div>
        </div>
    )
}

export default MasterClass