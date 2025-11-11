import React, { useState } from "react";
import { FaPuzzlePiece, FaLightbulb, FaUserTie } from "react-icons/fa";
import DoubtSessionForm from "./DoubtSessionForm"
const baseUrl = import.meta.env.VITE_APP_API_URL;

const plans = [
  {
    id: 1,
    title: "Quick Doubt",
    description: "15-Minute session for small queries.",
    price: "29",
    icon: <FaPuzzlePiece size={24} />,
  },
  {
    id: 2,
    title: "Deep Learning",
    description: "45-minute detailed explanation + notes.",
    price: "59",
    icon: <FaLightbulb size={24} />,
  },
  {
    id: 3,
    title: "Premium Mentor",
    description: "Session with senior mentor + roadmap.",
    price: "99",
    icon: <FaUserTie size={24} />,
  },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="bg-[#E2E2E2] py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-playfair font-light text-gray-800 mb-2">
        Choose Your Perfect Plan
      </h2>
      <p className="text-xl mt-5 red-gradient mb-13">
        Get started with a plan that fits your learning goals.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="w-full max-w-sm rounded-2xl shadow-md bg-[#FAFAFA] flex flex-col items-center py-10 transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-b from-[#ED0331] to-[#87021C] text-white p-4 rounded-full shadow-md mb-4">
              {plan.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold font-playfair mb-2">
              {plan.title}
            </h3>
            <p className="text-gray-700 font-nunito mb-6 px-6 text-sm md:text-base">
              {plan.description}
            </p>

            <div className="bg-[#0D2764] font-nunito text-white w-full py-3 font-medium text-lg">
              At Just ₹{plan.price}
            </div>

            <button
              onClick={() => setSelectedPlan(plan)}
              className="mt-7 border-2 cursor-pointer border-red-200 font-nunito px-6 py-3 rounded-xl hover:bg-gradient-to-r from-[#ED0331] to-[#87021C] hover:text-white transition duration-200"
            >
              Book Session Now →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <DoubtSessionForm
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          baseUrl={baseUrl}
        />
      )}
    </section>
  );
};

export default PricingPlans;
