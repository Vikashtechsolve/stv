import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Open mobile dropdown
  const [openDropdown, setOpenDropdown] = useState(null); // Desktop dropdown
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const timeoutRef = useRef(null);
  const navRefs = useRef({});

  const links = [
    {
      name: "Our Products",
      dropdown: [
        {
          name: "Master Class",
          description:
            "Join expert-led sessions covering trending topics, real-world case studies, and practical learning",
          href: "/masterClass",
        },
        {
          name: "Mentorship",
          description:
            "Get personalized career guidance and skill development with direct mentor support.",
          href: "/mentorship",
        },
        {
          name: "Online Contests",
          description:
            "Participate in coding, quizzes, and competitions to test and showcase your abilities.",
          href: "/online-contests",
        },
        {
          name: "Resume Review & Road Map",
          description:
            "Improve your resume and receive a step-by-step roadmap to achieve your career goals.",
          href: "/resume-review",
        },
        {
          name: "Live Doubt Solving",
          description:
            "Ask questions anytime and clear concepts instantly with live mentor support.",
          href: "/live-doubt-solving",
        },
      ],
    },
    {
      name: "Our Programs",
      dropdown: [
        {
          name: "LMS Portal",
          description:
            "We provide a comprehensive online learning platform where users can access courses, training materials, and assessments anytime, anywhere.",
          href: "/lms-portal",
        },
        {
          name: "Interview Portal",
          description:
            "Our platform offers a seamless recruitment experience with online test scheduling, video interviews, and candidate evaluation.",
          href: "/interview-portal",
        },
        {
          name: "Manpower Management",
          description:
            "We help businesses manage their workforce effectively by tracking employee allocation, attendance, and tasks.",
          href: "/manpower-management",
        },
      ],
    },
    { name: "About us", href: "/aboutus" },
    { name: "Blogs", href: "/blog" },
  ];

  // Desktop hover dropdown
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const rect = navRefs.current[name]?.getBoundingClientRect();
    if (rect)
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  // Toggle mobile dropdowns (only one open at a time)
  const toggleMobileDropdown = (name) => {
    if (mobileDropdownOpen === name) setMobileDropdownOpen(null);
    else setMobileDropdownOpen(name);
  };

  return (
    <nav className="sticky top-0 left-0 z-[1000] w-full">
      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex items-center justify-between w-full bg-black px-4 py-3 relative z-[1000] rounded-full">
        <div className="relative h-16 w-44 flex items-center justify-center bg-[#E2E2E2] rounded-full">
          <img src={logo} alt="VTS Logo" className="h-30 w-auto" />
        </div>

        <div className="flex items-center">
          {/* Our Products button */}
          {/* <button
            onClick={() => toggleMobileDropdown("Our Products")}
            className="ml-3 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
          >
            Our Products
          </button> */}
          {/* Our Products button */}
        <button
  onClick={() => toggleMobileDropdown("Our Products")}
  className="ml-3 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center"
>
  Our Products
  <span
    className={`ml-1 text-sm transform transition-transform duration-300 ${
      mobileDropdownOpen === "Our Products" ? "rotate-90" : "rotate-0"
    }`}
  >
    &gt;&gt;
  </span>
</button>




          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white ml-3 z-10"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile "Our Products" dropdown */}
      {mobileDropdownOpen === "Our Products" && (
        <div className="md:hidden bg-white text-black w-full px-4 py-3 transition-all duration-300">
          {links.find((l) => l.name === "Our Products").dropdown.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block w-full mb-2 last:mb-0 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="font-semibold">{item.name}</span>
              <span className="block text-gray-700 text-sm mt-1">{item.description}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile hamburger menu (other links only) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 bg-black text-white mx-auto px-4 py-4 rounded-xl shadow-lg transition-all duration-500 ease-in-out w-full max-w-full">
          {links
            .filter((l) => l.name !== "Our Products")
            .map((link) =>
              !link.dropdown ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-lg font-semibold border-b-2 border-transparent hover:border-red-500 w-full transition-all duration-300 px-3 py-3 rounded-md"
                >
                  {link.name}
                </Link>
              ) : (
                <div key={link.name} className="w-full">
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="flex items-center justify-between w-full text-lg font-semibold border-b-2 border-transparent hover:border-red-500 transition-all duration-300 px-3 py-3 rounded-md"
                  >
                    {link.name}
                    <FiChevronDown
                      className={`ml-2 transform transition-transform duration-300 ${
                        mobileDropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`pl-3 mt-2 space-y-3 overflow-hidden transition-all duration-300 ${
                      mobileDropdownOpen === link.name ? "max-h-[80vh]" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block w-full bg-white hover:bg-gray-100 rounded-md px-3 py-3 transition-all duration-300 text-black"
                      >
                        <span className="font-semibold">{item.name}</span>
                        <span className="block text-gray-700 text-sm mt-1">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}

          <Link
            to="/contact"
            className="w-full text-center bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="w-full text-center bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      )}

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex items-center justify-between w-full relative z-[1000]">
        <div className="relative h-12 w-60 flex items-center justify-center">
          <img src={logo} alt="VTS Logo" className="h-45 w-auto" />
        </div>

        <div
          className="flex items-center justify-end px-6 py-2 w-[80%] ml-auto bg-black"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)",
            minHeight: "60px",
          }}
        >
          <div className="flex space-x-12 text-lg font-medium text-white mr-6">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative"
                ref={(el) => (navRefs.current[link.name] = el)}
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {!link.dropdown ? (
                  <Link
                    to={link.href}
                    className="border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center border-b-2 border-transparent hover:border-red-500 transition-all duration-300">
                      {link.name} <FiChevronDown className="ml-1" />
                    </button>

                    {/* Desktop dropdown */}
                    {openDropdown === link.name &&
                      createPortal(
                        <div
                          className="absolute bg-white text-black rounded-lg shadow-lg py-3 px-5 z-[2000] transition-all duration-300"
                          style={{
                            top: dropdownPosition.top,
                            left: dropdownPosition.left,
                            width: "50vw",
                            maxWidth: "600px",
                            minWidth: "280px",
                          }}
                          onMouseEnter={() => setOpenDropdown(link.name)}
                          onMouseLeave={() => handleMouseLeave()}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block mb-2 last:mb-0 hover:bg-gray-50 transition-all duration-300 rounded-md px-2 py-2"
                            >
                              <div className="flex flex-col">
                                <span className="font-semibold text-black text-lg">{item.name}</span>
                                <span className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-sm">{item.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>,
                        document.body
                      )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CONTACT & LOGIN */}
          <div className="flex space-x-4 bg-black px-2 py-2 rounded-lg">
            <Link
              to="/contactUs"
              className="text-center border-2 border-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-[15px]"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-center border-2 border-white bg-transparent text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;