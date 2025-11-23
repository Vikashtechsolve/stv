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

          <h3 className="font-playfair font-bold text-base heading-primary leading-tight tracking-wide pt-[10.67px] pb-4 uppercase">
            ABOUT VIKAS TECH SOLUTIONS
          </h3>
          <p className="text-base leading-6 font-nunito text-gray-600">
            We provide personalized mentorship, live doubt-solving, coding
            contests, and career guidance to help students and professionals
            achieve their goals.
          </p>
        </div>

        {/* EXPLORE SECTION */}
        <div>
        <h3 className="font-semibold text-base heading-primary font-playfair mb-4">EXPLORE</h3>
        <ul className="space-y-2 text-base font-nunito text-gray-600">

          {/* <li onClick={() => handleNavigate("home")} className="cursor-pointer">
            Home
          </li>

          <li onClick={() => handleNavigate("institutions")} className="cursor-pointer">
            Trusting by leading institutions
          </li> */}

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
          <h3 className="font-semibold text-base heading-primary font-playfair mb-4">CONTACT</h3>

          <div className="flex items-start gap-3 text-base font-nunito text-gray-600 mb-4">
            <FaMapMarkerAlt className="text-[#ED0331] mt-1 text-lg shrink-0" />
            <p className="leading-relaxed">
              Vikas Tech Solutions, <br />
              3rd Floor, ABC Tower, <br />
              Sector-15, Noida, Uttar Pradesh, India
            </p>
          </div>

          <div className="flex items-center gap-3 text-base font-nunito text-gray-600 mb-4">
            <FaEnvelope className="text-[#ED0331] text-lg shrink-0" />
            <p>support@vikastechsolutions.com</p>
          </div>

          <div className="flex items-center gap-3 text-base font-nunito text-gray-600">
            <FaPhoneAlt className="text-[#ED0331] text-lg shrink-0" />
            <p>+91 98765 43210</p>
          </div>
        </div>

        {/* SOCIAL SECTION */}
        <div>
          <h3 className="font-semibold text-base heading-primary font-playfair mb-4">GET IN TOUCH</h3>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <a target="_blank" href="https://www.youtube.com/@fixWithvikas"><FaYoutube className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61575266311355"><FaFacebookF className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://x.com/VikashDube9198"><FaTwitter className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.instagram.com/vikash_tech_solution/"><FaInstagram className="hover:text-red-600 cursor-pointer" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/vikash-tech-solution/"><FaLinkedinIn className="hover:text-red-600 cursor-pointer" /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-300 text-base font-nunito text-gray-600">
        <p className="text-[#ED0331] font-semibold mb-3 md:mb-0">VTS © 2025. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="/masterClass" className="hover:text-[#ED0331] transition-colors">Master Class</a>
          <a href="oneToOneMentoring" className="hover:text-[#ED0331] transition-colors">Mentorship</a>
          <a href="resume-review" className="hover:text-[#ED0331] transition-colors">Resume Review</a>
          <a href="doubt-solving" className="hover:text-[#ED0331] transition-colors">Live Doubt Solving</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
