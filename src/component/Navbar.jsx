import React, { useState, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Learning Paths", href: "/learning" },
    {
      name: "Master Class",
      dropdown: [
        { name: "Program 1", href: "/program-1" },
        { name: "Program 2", href: "/program-2" },
        { name: "Program 3", href: "/program-3" },
      ],
    },
    {
      name: "Skill Battels",
      dropdown: [
        { name: "Product 1", href: "/product-1" },
        { name: "Product 2", href: "/product-2" },
        { name: "Product 3", href: "/product-3" },
      ],
    },
    { name: "Carreer Outcomes", href: "/CareerOutcomes" },
  ];

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 500);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full z-50">
      <div className="flex items-center justify-between px-3 py-5 md:px-6 md:py-5">
        {/* ================= MOBILE NAVBAR ================= */}
        <div className="md:hidden flex items-center justify-between w-full bg-black rounded-full px-4 py-3 relative">
          <div className="relative h-20 w-44 flex items-center justify-center overflow-visible bg-[#E2E2E2] rounded-full">
            <img src={logo} alt="VTS Logo" className="h-45 w-auto" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white z-10">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden md:flex items-center justify-between w-full relative">
          <div className="relative h-32 w-72 flex items-center justify-center overflow-visible rounded-full">
            <img src={logo} alt="VTS Logo" className="h-45 w-auto" />
          </div>

          <div className="flex items-center justify-end px-8 py-5 w-[80%] ml-auto rounded-l-full bg-black">
            <div className="flex space-x-10 text-xl font-medium text-white mr-6">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
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
                        {link.name}
                        <FiChevronDown className="ml-1" />
                      </button>
                      <div
                        className={`absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 w-44 transition-all duration-300 z-50 ${
                          openDropdown === link.name ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 hover:bg-red-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700"
              >
                Contact Us
              </Link>
              <Link
                to="/login"
                className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 bg-black text-white mx-auto my-4 px-6 py-6 rounded-2xl shadow-lg transition-all duration-500 ease-in-out w-80 max-w-full">
          {links.map((link) =>
            !link.dropdown ? (
              <Link
                key={link.name}
                to={link.href}
                className="block text-lg border-b-2 border-transparent hover:border-red-500 w-full transition-all duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <div key={link.name} className="w-full">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full text-lg border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
                >
                  {link.name}
                  <FiChevronDown
                    className={`ml-2 transform transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                    openDropdown === link.name ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-lg border-b-2 border-transparent hover:border-red-500 w-full transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}

          <Link
            to="/contact"
            className="w-full text-center bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="w-full text-center bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
