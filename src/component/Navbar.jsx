import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const timeoutRef = useRef(null);
  const navRefs = useRef({});

  const links = [
    {
      name: "Our Products",
      dropdown: [
        { 
          name: "Master Class", 
          description: "Join expert-led sessions covering trending topics, real-world case studies, and practical learning", 
          href: "/masterClass" // Match the Route path
        },

        { name: "Mentorship", description: "Get personalized career guidance and skill development with direct mentor support.", href: "/mentorship" },
        { name: "Online Contests", description: "Participate in coding, quizzes, and competitions to test and showcase your abilities.", href: "/online-contests" },
        { name: "Resume Review & Road Map", description: "Improve your resume and receive a step-by-step roadmap to achieve your career goals.", href: "/resume-review" },
        { name: "Live Doubt Solving", description: "Ask questions anytime and clear concepts instantly with live mentor support.", href: "/live-doubt-solving" },
      ],
    },
    {
      name: "Our Programs",
      dropdown: [
        { name: "LMS Portal", description: "Access learning materials and assessments anytime on our comprehensive LMS.", href: "/lms-portal" },
        { name: "Interview Portal", description: "Experience seamless online tests, interviews, and candidate evaluation.", href: "/interview-portal" },
        { name: "Manpower Management", description: "Manage workforce tasks, attendance, and allocation effectively.", href: "/manpower-management" },
      ],
    },
    { name: "About us", href: "/aboutus" },
    { name: "Blogs", href: "/blog" },
  ];

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
          <button
            onClick={() => toggleMobileDropdown("Our Products")}
            className="ml-3 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center text-base"
          >
            Our Products
            <span
              className={`ml-1 transform transition-transform duration-300 ${
                mobileDropdownOpen === "Our Products" ? "rotate-90" : "rotate-0"
              }`}
            >
              &gt;&gt;
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white ml-3 z-10"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex items-center justify-between w-full relative z-[1000]">
        <div className="relative h-12 w-60 flex items-center justify-center">
          <img src={logo} alt="VTS Logo" className="h-45 w-auto" />
        </div>

        <div
          className="flex items-center justify-end px-10 py-2 w-[75%] bg-black"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
            minHeight: "65px",
            marginLeft: "-100px", // moved navbar more left
          }}
        >


          <div className="flex space-x-10 text-[17px] font-medium text-white mr-6 tracking-wide">
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

                    {openDropdown === link.name &&
                      createPortal(
                        <div
                          className="absolute bg-white text-black rounded-lg shadow-lg py-3 px-5 z-[2000] transition-all duration-300"
                          style={{
                            top: dropdownPosition.top,
                            left: dropdownPosition.left,
                            width: "25vw",
                            maxWidth: "450px",
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
                                <span className="font-semibold text-black text-[16px] leading-tight">
                                  {item.name}
                                </span>
                                <span className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-[14px] leading-snug">
                                  {item.description}
                                </span>
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

          <div className="flex space-x-4 bg-black px-2 py-2 rounded-lg">
            <Link
              to="contactUs"
              className="text-center border-2 border-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-[15px]"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-center border-2 border-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-[15px]"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
