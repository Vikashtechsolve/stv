import React from "react";

const MessageModal = ({ type, message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-[400px] text-center">
        <h3
          className={`text-2xl font-semibold mb-4 ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {type === "success" ? "✅ Success" : "❌ Error"}
        </h3>
        <p className="text-gray-800 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#ED0331] text-white px-6 py-3 rounded-xl hover:bg-[#c20228]"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
