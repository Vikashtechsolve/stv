import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // <-- Import your logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile dropdown control

  const links = [
    { name: "About Us", href: "/about" },
    {
      name: "Our Program",
      dropdown: [
        { name: "Program 1", href: "/program-1" },
        { name: "Program 2", href: "/program-2" },
        { name: "Program 3", href: "/program-3" },
      ],
    },
    {
      name: "Our Product",
      dropdown: [
        { name: "Product 1", href: "/product-1" },
        { name: "Product 2", href: "/product-2" },
        { name: "Product 3", href: "/product-3" },
      ],
    },
    { name: "Learning Path", href: "/learning" },
    { name: "Blogs", href: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-3 py-2 md:px-6 md:py-3">
        {/* ================= MOBILE NAVBAR ================= */}
        <div className="md:hidden flex items-center justify-between w-full bg-black rounded-full px-4 py-2 relative">
          {/* Logo (mobile, bigger without affecting nav height) */}
          <div className="relative h-12 w-32 flex items-center justify-center overflow-visible bg-[#E2E2E2] rounded-full">
            <img
              src={logo}
              alt="VTS Logo"
              className="h-16 w-auto"
            />
          </div>


          {/* Hamburger Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white z-10">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden md:flex items-center justify-between w-full relative">
          {/* Logo (desktop, oversized but navbar stays compact) */}
          {/* Desktop Logo */}
          {/* Desktop Logo */}
          <div
            className={`relative h-16 w-48 flex items-center justify-center overflow-visible rounded-full transition-colors duration-500
    ${scrolled ? "bg-[#E2E2E2]" : "bg-transparent"}`}
          >
            <img
              src={logo}
              alt="VTS Logo"
              className="h-60 w-auto" // large logo
            />
          </div>



          {/* Desktop Menu */}
          <div className="flex items-center justify-end px-8 py-3 w-[75%] ml-auto rounded-l-full bg-black">
            <div className="flex space-x-10 text-base font-medium text-white mr-6">
              {links.map((link) => (
                <div key={link.name} className="relative group">
                  {!link.dropdown ? (
                    <Link to={link.href} className="hover:text-red-500">
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <button className="flex items-center hover:text-red-500">
                        {link.name}
                        <FiChevronDown className="ml-1" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg py-2 w-44">
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

            {/* Buttons */}
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700"
              >
                Contact Us
              </Link>
              <Link
                to="/login"
                className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col items-start space-y-4 
               bg-black text-white mx-auto my-4 px-6 py-6 
               rounded-2xl shadow-lg transition-all duration-500 ease-in-out 
               w-80 max-w-full"
        >
          {links.map((link) =>
            !link.dropdown ? (
              <Link
                key={link.name}
                to={link.href}
                className="block hover:text-red-500 w-full"
              >
                {link.name}
              </Link>
            ) : (
              <div key={link.name} className="w-full">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full hover:text-red-500"
                >
                  {link.name}
                  <FiChevronDown
                    className={`ml-2 transform transition-transform ${openDropdown === link.name ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openDropdown === link.name ? "max-h-40" : "max-h-0"
                    }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block hover:text-red-500 w-full"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Buttons (Mobile) */}
          <Link
            to="/contact"
            className="w-full text-center bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="w-full text-center bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
