import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const timeoutRef = useRef(null);
  const navRefs = useRef({});

  const links = [
    {
      name: "Our Products",
      dropdown: [
        { name: "Program 1", description: "Short description 1", href: "/program-1" },
        { name: "Program 2", description: "Short description 2", href: "/program-2" },
        { name: "Program 3", description: "Short description 3", href: "/program-3" },
      ],
    },
    {
      name: "Our Programs",
      dropdown: [
        { name: "Product 1", description: "Short description A", href: "/product-1" },
        { name: "Product 2", description: "Short description B", href: "/product-2" },
        { name: "Product 3", description: "Short description C", href: "/product-3" },
      ],
    },
    { name: "About us", href: "/aboutus" },
    { name: "Blogs", href: "/blog" },
  ];

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const rect = navRefs.current[name]?.getBoundingClientRect();
    if (rect) {
      setDropdownPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full sticky top-0 z-[1000]">
      <div className="flex items-center justify-between px-3 py-2 md:px-6 md:py-2">
        {/* MOBILE NAVBAR */}
        <div className="md:hidden flex items-center justify-between w-full bg-black rounded-full px-4 py-3 relative z-[1000]">
          <div className="relative h-16 w-44 flex items-center justify-center bg-[#E2E2E2] rounded-full">
            <img src={logo} alt="VTS Logo" className="h-55 w-auto" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white z-10">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

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
            <div className="flex space-x-16 text-lg font-medium text-white mr-6">
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
                        {link.name}
                        <FiChevronDown className="ml-1" />
                      </button>

                      {/* Dropdown floating on page */}
                      {openDropdown === link.name &&
                        createPortal(
                          <div
                            className="absolute bg-white text-black rounded-lg shadow-lg py-2 w-60 z-[2000] transition-all duration-300"
                            style={{
                              top: dropdownPosition.top,
                              left: dropdownPosition.left,
                            }}
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={() => handleMouseLeave()}
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block px-4 py-2 hover:bg-red-100 transition-all duration-300"
                              >
                                <div className="flex flex-col">
                                  <span className="font-semibold text-black">{item.name}</span>
                                  <span className="text-gray-600 hover:text-red-600 transition-colors duration-300">
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

            {/* CONTACT & LOGIN */}
            <div className="flex space-x-4 bg-black px-2 py-2 rounded-lg">
              <Link
                to="/contact"
                className="text-center border-2 border-white bg-transparent text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300"
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
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 bg-black text-white mx-auto my-4 px-6 py-4 rounded-xl shadow-lg transition-all duration-500 ease-in-out w-80 max-w-full">
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
                    openDropdown === link.name ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-lg border-b-2 border-transparent hover:border-red-500 w-full transition-all duration-300"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-black">{item.name}</span>
                        <span className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                          {item.description}
                        </span>
                      </div>
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
