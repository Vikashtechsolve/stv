import React from "react";
import { FiMenu } from "react-icons/fi";

const Topbar = ({ setIsOpen }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user.username || "User";

  return (
    <div className="w-full bg-white shadow flex justify-between items-center px-4 py-3">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Menu Icon (Mobile only) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={22} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800">
          Welcome, <span className="text-[#ED0331]">{userName}</span>
        </h2>
      </div>

      {/* Right Side - Profile */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#ED0331] to-[#87021C] flex items-center justify-center text-white font-bold">
          {userName.charAt(0).toUpperCase()}
        </div>
        <span className="font-medium text-gray-800">{userName}</span>
      </div>
    </div>
  );
};

export default Topbar;
