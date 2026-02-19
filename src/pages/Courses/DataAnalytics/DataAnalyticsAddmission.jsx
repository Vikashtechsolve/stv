import React from "react";

import admissionImg from "../FullstackDeveloper/img/addmisionImg.jpg";
import QualifierTest from "../../../assets/QualiferBlue.png";
import complete from "../../../assets/CareerBlue.png";
import Learning from "../../../assets/LearningBlue.png";


// import testIcon from "../FullstackDeveloper/img/CSS 3.png";
// import counsellingIcon from "../FullstackDeveloper/img/HTML.png";
// import learningIcon from "../FullstackDeveloper/img/JS.png";

const steps = [
  {
    title: "Qualifier Test",
    desc: "AA short assessment to evaluate your analytical thinking, basic mathematics, and problem-solving skills, ensuring you are ready for the program.",
    icon: QualifierTest,
  },
  {
    title: "Complete Counselling",
    desc: "A one-on-one counselling session to understand your career goals, assess program fit, and guide you toward the right learning path.",
    icon: complete,
  },
  {
    title: "Start Learning",
    desc: "Begin your intensive data analytics training—whether it’s a fast-track program or a comprehensive advanced program—designed to make you job-ready.",
    icon: Learning,
  },
];

const DataAnalyticsAddmission = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">

          {/* Admission + Process aligned exactly */}
          <div className="flex items-end gap-3">

            <span className="text-red-700 text-3xl font-medium relative -top-2">

              Admission

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-700"></span>

            </span>

            <span className="text-3xl font-medium text-black relative top-[3px]">
              Process
            </span>

          </div>

        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src={admissionImg}
              className="rounded-2xl shadow-md w-full h-[320px] object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8">

            {steps.map((step, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-xl
                p-6
                flex
                items-start
                gap-5
               shadow-[2px_2px_12px_0px_#E6F1FB]
                "
              >

                {/* Icon circle */}
                <div className="
                w-12
                h-12
                rounded-full
                bg-red-50
                flex
                items-center
                justify-center
                flex-shrink-0
                ">

                  <img src={step.icon} className="w-12 h-12" />

                </div>

                {/* Text */}
                <div>

                  <h3 className="text-lg font-semibold mb-1">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DataAnalyticsAddmission;
