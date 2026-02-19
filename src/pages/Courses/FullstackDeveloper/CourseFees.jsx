import React from "react";

const CourseFees = () => {
  return (
    <section className="bg-[#f5f2f1] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-3xl font-medium">

          <span className="text-red-700 relative -top-3">

            Course

            {/* underline */}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-700"></span>

          </span>

          <span className="ml-2 text-black">
            Fees Structure
          </span>

        </h2>

      </div>


      {/* Table Container */}
      <div className="max-w-5xl mx-auto p-[1.5px] rounded-[28px] bg-[linear-gradient(180deg,#B11C20_0%,#FFFFFF_100%)]">

        <div className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-[2px_2px_8px_0px_#F9DEDF]
        ">

          {/* Header */}
          <div className="grid grid-cols-3 text-center border-b border-gray-300">

            <div className="p-6 border-r border-gray-300 "></div>

            <div className="p-6 border-r border-gray-300 text-red-700 font-semibold text-lg">
              Mini Program
            </div>

            <div className="p-6  text-red-700 font-semibold text-lg">
              Macro Program
            </div>

          </div>


          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-6 border-r border-gray-300">

              <p className="font-medium">
                Qualifier Test Fee
              </p>

              <p className="text-gray-500 text-sm mt-1">
                (Non-Refundable)
              </p>

            </div>

            <div className="p-6 border-r border-gray-300 text-center text-2xl font-serif">
              Free
            </div>

            <div className="p-6 text-center text-2xl font-serif">
              Free
            </div>

          </div>


          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-6 border-r border-gray-300">

              <p className="font-medium">
                Secure Seat Fee
              </p>

              <p className="text-gray-500 text-sm mt-1">
                (Non-Refundable and will be added to program fees)
              </p>

            </div>

            <div className="p-6 border-r border-gray-300 text-center text-2xl font-serif">
              ₹ 5,000
            </div>

            <div className="p-6 text-center text-2xl font-serif">
              ₹ 5,000
            </div>

          </div>


          {/* Row 3 */}
          <div className="grid grid-cols-3 border-b border-gray-300">

            <div className="p-6 border-r border-gray-300">

              <p className="font-medium">
                Program Fee
              </p>

              <p className="text-gray-500 text-sm mt-1">
                (Non-Refundable)
              </p>

            </div>

            <div className="p-6 border-r border-gray-300 text-center text-2xl font-serif">
              ₹ 18,000
            </div>

            <div className="p-6 text-center text-2xl font-serif">
              ₹ 35,000
            </div>

          </div>


          {/* Total Row */}
          <div className="grid grid-cols-3">

            <div className="p-6 border-r border-gray-300 font-medium text-lg">
              Total
            </div>

            <div className="p-6 border-r border-gray-300 text-center text-2xl font-serif font-semibold">
              ₹ 23,000
            </div>

            <div className="p-6 text-center text-2xl font-serif font-semibold">
              ₹ 40,000
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CourseFees;
