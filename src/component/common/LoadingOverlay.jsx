import React from "react";

const LoadingOverlay = ({ message }) => (
  <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-[9999] backdrop-blur-sm">
    <div className="w-16 h-16 border-4 border-t-[#ED0331] border-white rounded-full animate-spin mb-6"></div>
    <p className="text-white text-lg font-medium">{message || "Processing..."}</p>
  </div>
);

export default LoadingOverlay;
