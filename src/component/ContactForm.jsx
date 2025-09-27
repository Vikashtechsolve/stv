import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import formImg from "../assets/form.png";

const ContactForm = () => {
  return (
    <section className="py-12 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold font-playfair mb-12 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug">
          Have Questions? We’re Here to Help
        </h1>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Image */}
            <img
              src={formImg}
              alt="Support Illustration"
              className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%]"
            />

            {/* Text */}
            <p className="text-base sm:text-lg font-medium text-center mb-6 sm:mb-10">
              Let’s solve your doubts together!
            </p>

            {/* Chat Button */}
            <div className="self-center md:self-start">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md transition text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl" /> Chat with us
              </a>
            </div>
          </div>

          {/* Right Section (Form) */}
          <form className="space-y-6 sm:space-y-8 flex flex-col items-center justify-center w-full">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Enter your 10-digit mobile number"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows="4"
              placeholder="Type your Query Here..."
              className="w-full sm:w-[85%] px-4 py-3 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-[60%] sm:w-[40%] lg:w-[30%] bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
