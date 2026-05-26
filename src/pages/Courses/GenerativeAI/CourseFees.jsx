import React from "react";
import {
  GENAI_COURSE_FEE,
  GENAI_REGISTRATION_FEE,
  genAiFullPaymentAmount,
  GENAI_FULL_PAY_DISCOUNT_PERCENT,
} from "../../../constants/genAiFees";

function formatInr(n) {
  return `₹ ${n.toLocaleString("en-IN")}`;
}

export default function CourseFees({ onEnrollClick }) {
  const fullPay = genAiFullPaymentAmount();
  const savings = GENAI_COURSE_FEE - fullPay;

  return (
    <section className="bg-[#f5f2f1] py-14 md:py-20 px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">
          <span className="text-red-700 underline underline-offset-4">Course</span>
          <span className="ml-2 text-black">Fees Structure</span>
        </h2>
        <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
          Book your seat with a small registration fee, or pay in full now and save{" "}
          {GENAI_FULL_PAY_DISCOUNT_PERCENT}% on the course fee.
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl md:rounded-[28px] bg-[linear-gradient(180deg,#B11C20_0%,#FFFFFF_100%)]">
        <div className="bg-white rounded-2xl md:rounded-[28px] overflow-hidden shadow-[2px_2px_8px_0px_#F9DEDF]">
          <div className="grid grid-cols-2 text-center border-b border-gray-300">
            <div className="p-3 md:p-6 border-r border-gray-300" />
            <div className="p-3 md:p-6 text-red-700 font-semibold text-xs md:text-lg">
              Generative AI Program
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-300">
            <div className="p-3 md:p-6 border-r border-gray-300">
              <p className="font-medium text-xs md:text-base">Registration Fee</p>
              <p className="text-gray-500 text-[10px] md:text-sm mt-1">(Non-Refundable)</p>
            </div>
            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              {formatInr(GENAI_REGISTRATION_FEE)}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-300">
            <div className="p-3 md:p-6 border-r border-gray-300">
              <p className="font-medium text-xs md:text-base">Course Fee</p>
              <p className="text-gray-500 text-[10px] md:text-sm mt-1">(Non-Refundable)</p>
            </div>
            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              {formatInr(GENAI_COURSE_FEE)}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-300 bg-amber-50/50">
            <div className="p-3 md:p-6 border-r border-gray-300">
              <p className="font-medium text-xs md:text-base">Pay in full today</p>
              <p className="text-gray-500 text-[10px] md:text-sm mt-1">
                {GENAI_FULL_PAY_DISCOUNT_PERCENT}% off course fee
              </p>
            </div>
            <div className="p-3 md:p-6 text-center">
              <p className="text-base md:text-2xl font-serif font-semibold text-[#B11C20]">
                {formatInr(fullPay)}
              </p>
              <p className="text-[10px] md:text-xs text-green-700 font-medium mt-1">
                Save {formatInr(savings)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="p-3 md:p-6 border-r border-gray-300 font-medium text-sm md:text-lg flex items-center">
              Reference total
            </div>
            <div className="p-3 md:p-6 text-center text-base md:text-xl font-serif text-gray-500 flex items-center justify-center">
              {formatInr(GENAI_REGISTRATION_FEE + GENAI_COURSE_FEE)}
            </div>
          </div>
        </div>
      </div>

      {onEnrollClick && (
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => onEnrollClick()}
            className="cursor-pointer bg-white border-2 border-[#B11C20] text-[#B11C20] px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
          >
            Book seat · {formatInr(GENAI_REGISTRATION_FEE)}
          </button>
          <button
            type="button"
            onClick={() => onEnrollClick()}
            className="cursor-pointer bg-[#B11C20] text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition shadow-md"
          >
            Pay in full · {formatInr(fullPay)}
          </button>
        </div>
      )}
    </section>
  );
}
