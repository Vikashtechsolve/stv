import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 mt-6">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-300 pb-10">
        {/* ABOUT SECTION */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-2xl font-extrabold text-black">VTS</span>
            <span className="text-red-600 text-sm font-semibold">
              VIKAS TECH SOLUTIONS
            </span>
          </div>
          <h3 className="text-red-600 font-semibold text-sm mb-3">
            ABOUT VIKAS TECH SOLUTIONS
          </h3>
          <p className="text-sm leading-6 text-gray-600">
            We provide personalized mentorship, live doubt-solving, coding
            contests, and career guidance to help students and professionals
            achieve their goals.
          </p>
        </div>

        {/* EXPLORE SECTION */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3">EXPLORE</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>Trusting by leading institutions</li>
            <li>What we offer</li>
            <li>How we work</li>
            <li>Our Success Stories</li>
            <li>Why learners trust us?</li>
            <li>Meet our Mentors</li>
            <li>Power of Mentorship</li>
            <li>Submit Query</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3">CONTACT</h3>
          <div className="flex items-start space-x-2 mb-3 text-sm text-gray-600">
            <FaMapMarkerAlt className="text-red-600 mt-1" />
            <p>
              Vikas Tech Solutions, <br />
              3rd Floor, ABC Tower, <br />
              Sector-15, Noida, Uttar Pradesh, India
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
            <FaEnvelope className="text-red-600" />
            <p>support@vikastechsolutions.com</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FaPhoneAlt className="text-red-600" />
            <p>+91 98765 43210</p>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3">GET IN TOUCH</h3>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaFacebookF className="hover:text-red-600 cursor-pointer" />
            <FaTwitter className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600">
        <p className="text-red-600 font-semibold">
          VTS © 2025. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-red-600">
            Learning Paths
          </a>
          <a href="#" className="hover:text-red-600">
            Skill Battles
          </a>
          <a href="#" className="hover:text-red-600">
            Career Outcomes
          </a>
          <a href="#" className="hover:text-red-600">
            Discover
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
