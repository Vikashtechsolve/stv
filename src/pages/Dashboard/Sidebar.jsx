import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogOut, FiClipboard } from "react-icons/fi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user.role || "";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#ED0331] to-[#87021C] text-white flex flex-col shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center py-6 border-b border-white/20">
          <div className="flex flex-col items-center bg-white rounded-full px-4 py-2">
            <span className="text-3xl font-extrabold leading-none">
              <span className="text-black">V</span>
              <span className="text-red-600">T</span>
              <span className="text-black">S</span>
            </span>
            <p className="text-[10px] text-red-600 font-semibold mt-1 tracking-wide">
              VIKASH TECH SOLUTION
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => setIsOpen(false)}
          >
            <FiHome size={20} />
            <span>Home</span>
          </Link>

          {role === "admin" && (
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              onClick={() => setIsOpen(false)}
            >
              <FiClipboard size={20} />
              <span>Admin Dashboard</span>
            </Link>
          )}

          {role === "sales" && (
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              onClick={() => setIsOpen(false)}
            >
              <FiClipboard size={20} />
              <span>Sales Dashboard</span>
            </Link>
          )}

          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => setIsOpen(false)}
          >
            <FiUser size={20} />
            <span>Profile</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => setIsOpen(false)}
          >
            <FiSettings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Footer Section */}
        <div className="px-4 py-6 border-t border-white/20">
          <button
            className="flex items-center gap-3 px-4 py-2 w-full rounded-lg hover:bg-white/20 transition"
            onClick={handleLogout}
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Dark overlay when sidebar is open (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
