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
import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-[#E2E2E2] text-gray-800 py-10 px-6 md:px-16 mt-0 pt-50">
      <div className=" grid md:grid-cols-4 gap-10 border-b border-t pt-18 border-gray-300 pb-10 ">
        
        {/* ABOUT SECTION */}
        <div className="-mt-62">
          <div className="flex items-start space-x-3">
            <div className="w-60 -mb-15 -ml-12 flex items-end justify-center overflow-hidden">
              <img 
                src={logo}
                alt="VTS Logo"
                className="w-auto object-contain "
              />
            </div>
          </div>

          <h3 className=" font-playfair font-bold text-md red-gradient leading-[21.33px] tracking-[0.02em] gap-[7.11px] pt-[10.67px] pb-6 uppercase">
            ABOUT VIKAS TECH SOLUTIONS
          </h3>
          <p className="text-md leading-6 .font-nunito text-gray-600">
            We provide personalized mentorship, live doubt-solving, coding
            contests, and career guidance to help students and professionals
            achieve their goals.
          </p>
        </div>

        {/* EXPLORE SECTION */}
        <div>
        <h3 className="font-semibold text-2xl red-gradient font-playfair">EXPLORE</h3>
        <ul className="space-y-2 text-xl font-nunito text-[#A2A1A1] mt-4">

          <li onClick={() => handleNavigate("home")} className="cursor-pointer">
            Home
          </li>

          <li onClick={() => handleNavigate("institutions")} className="cursor-pointer">
            Trusting by leading institutions
          </li>

          <li onClick={() => handleNavigate("offer")} className="cursor-pointer">
            What we offer
          </li>

          <li onClick={() => handleNavigate("howWeWork")} className="cursor-pointer">
            How we work
          </li>

          <li onClick={() => handleNavigate("successStories")} className="cursor-pointer">
            Our Success Stories
          </li>

          <li onClick={() => handleNavigate("whyTrustUs")} className="cursor-pointer">
            Why learners trust us?
          </li>

          <li onClick={() => handleNavigate("mentors")} className="cursor-pointer">
            Meet our Mentors
          </li>

          <li onClick={() => handleNavigate("contact")} className="cursor-pointer">
            Submit Query
          </li>

          <li>
            <Link className="hover:underline" to="/privacy-policy">
              Privacy Policy
            </Link>
          </li>

        </ul>
      </div>


        {/* CONTACT SECTION */}
        <div>
          <h3 className="font-semibold text-2xl red-gradient font-playfair">CONTACT</h3>
          <div className="space-y-2 text-xl font-nunito text-[#A2A1A1] mt-4"></div>

          <div className="flex items-start space-y-1 text-xl font-nunito text-[#A2A1A1] mt-4">
            <FaMapMarkerAlt className="text-red-600 mr-3 text-xl" />
            <p>
              Vikas Tech Solutions, <br />
              3rd Floor, ABC Tower, <br />
              Sector-15, Noida, Uttar Pradesh, India
            </p>
          </div>

          <div className="flex items-center space-x-2 mb-3 pace-y-2 text-xl font-nunito text-[#A2A1A1] mt-4">
            <FaEnvelope className="text-red-600" />
            <p>support@vikastechsolutions.com</p>
          </div>

          <div className="flex items-center space-x-2 mb-3 pace-y-2 text-xl font-nunito text-[#A2A1A1] mt-4">
            <FaPhoneAlt className="text-red-600" />
            <p>+91 98765 43210</p>
          </div>
        </div>

        {/* SOCIAL SECTION */}
        <div>
          <h3 className="font-semibold text-2xl red-gradient font-playfair">GET IN TOUCH</h3>
          <div className="flex space-x-4 text-gray-600 text-lg mt-3">
            <a target="_blank" href="https://www.youtube.com/@fixWithvikas"><FaYoutube className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61575266311355"><FaFacebookF className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://x.com/VikashDube9198"><FaTwitter className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.instagram.com/vikash_tech_solution/"><FaInstagram className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/vikash-tech-solution/"><FaLinkedinIn className="hover:text-red-600 cursor-pointer" /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600">
        <p className="text-red-600 font-semibold">VTS © 2025. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-red-600">Learning Paths</a>
          <a href="#" className="hover:text-red-600">Skill Battles</a>
          <a href="#" className="hover:text-red-600">Career Outcomes</a>
          <a href="#" className="hover:text-red-600">Discover</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
