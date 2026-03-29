import React from "react";

const CourseFees = () => {
  return (
    <section className="bg-[#f5f2f1] py-14 md:py-20 px-4 md:px-6">

      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">

        <h2 className="text-2xl md:text-3xl font-medium">

          <span className="text-red-700 underline underline-offset-4">
            Course
          </span>

          <span className="ml-2 text-black">
            Fees Structure
          </span>

        </h2>

      </div>


      {/* Table Container */}
      <div className="max-w-5xl mx-auto p-[1.5px] rounded-2xl md:rounded-[28px] bg-[linear-gradient(180deg,#B11C20_0%,#FFFFFF_100%)]">

        <div className="bg-white rounded-2xl md:rounded-[28px] overflow-hidden shadow-[2px_2px_8px_0px_#F9DEDF]">

          {/* Header */}
          <div className="grid grid-cols-3 text-center border-b border-gray-300">

            <div className="p-3 md:p-6 border-r border-gray-300"></div>

            <div className="p-3 md:p-6 border-r border-gray-300 text-red-700 font-semibold text-xs md:text-lg">
              Mini Program
            </div>

            <div className="p-3 md:p-6 text-red-700 font-semibold text-xs md:text-lg">
              Macro Program
            </div>

          </div>


          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-3 md:p-6 border-r border-gray-300">

              <p className="font-medium text-xs md:text-base">
                Qualifier Test Fee
              </p>

              <p className="text-gray-500 text-[10px] md:text-sm mt-1">
                (Non-Refundable)
              </p>

            </div>

            <div className="p-3 md:p-6 border-r border-gray-300 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              Free
            </div>

            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              Free
            </div>

          </div>


          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-3 md:p-6 border-r border-gray-300">

              <p className="font-medium text-xs md:text-base">
                Secure Seat Fee
              </p>

              <p className="text-gray-500 text-[10px] md:text-sm mt-1">
                (Non-Refundable and will be added to program fees)
              </p>

            </div>

            <div className="p-3 md:p-6 border-r border-gray-300 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              ₹ 5,000
            </div>

            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              ₹ 5,000
            </div>

          </div>


          {/* Row 3 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-3 md:p-6 border-r border-gray-300">

              <p className="font-medium text-xs md:text-base">
                Program Fee
              </p>

              <p className="text-gray-500 text-[10px] md:text-sm mt-1">
                (Non-Refundable)
              </p>

            </div>

            <div className="p-3 md:p-6 border-r border-gray-300 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              ₹ 18,000
            </div>

            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif flex items-center justify-center">
              ₹ 35,000
            </div>

          </div>


          {/* Total Row */}
          <div className="grid grid-cols-3">

            <div className="p-3 md:p-6 border-r border-gray-300 font-medium text-sm md:text-lg flex items-center">
              Total
            </div>

            <div className="p-3 md:p-6 border-r border-gray-300 text-center text-base md:text-2xl font-serif font-semibold flex items-center justify-center">
              ₹ 23,000
            </div>

            <div className="p-3 md:p-6 text-center text-base md:text-2xl font-serif font-semibold flex items-center justify-center">
              ₹ 40,000
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CourseFees;
