import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+81", flag: "🇯🇵" },
  { code: "+49", flag: "🇩🇪" },
];

const MobileNumberInput = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[2]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNumberChange = (e) => {
    const rawNumber = e.target.value.replace(/\D/g, "");
    const fullNumber = `${selectedCountry.code}${rawNumber}`;
    onChange({ fullMobile: fullNumber, mobile: rawNumber });
  };

  return (
    <div className="flex gap-3">
      <div className="relative w-24" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-4 border-2 border-[#ECF0F3] rounded-xl bg-[#FAFBFC] flex items-center justify-between"
        >
          <span className="flex items-center gap-2 text-lg">
            <span>{selectedCountry.flag}</span>
            <span>{selectedCountry.code}</span>
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
            {countries.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelectedCountry(c);
                  setIsOpen(false);
                }}
                className="w-full px-3 py-3 hover:bg-red-50 flex items-center gap-2"
              >
                <span>{c.flag}</span> <span>{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <input
        type="tel"
        value={value.mobile || ""}
        onChange={handleNumberChange}
        placeholder="Enter your mobile number"
        className="flex-1 w-full bg-[#FAFBFC] text-gray-700 px-4 py-4 rounded-xl border-2 border-[#ECF0F3]"
      />
    </div>
  );
};

export default MobileNumberInput;
