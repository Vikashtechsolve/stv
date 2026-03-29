import React from "react";

const outcomes = {

  mini: {
    title: "Mini Program",
    ribbon: "Job-Ready Entry",

    roles: [
      "Junior Data Analyst",
      "Business Analyst",
      "Data Analytics(Entry-Level)",
      "Marketing Analyst",
      "Operations Analyst",
      "SQL developer",
    ],

    salary: "₹ 3.5 – 7 LPA",
    note: "( Fresher / Entry-Level Roles )",
  },


  macro: {
    title: "Macro Program",
    ribbon: "Industry-Ready Expert",

    roles: [
      "Senior Data Analyst",
      "Business Analyst ",
      "Data Analytics",
      "Marketing Analyst",
      "Operations Analyst",
      "SQL Developer",
    ],

    salary1: "₹ 8 – 15 LPA",
    salary2: "₹ 15 – 25 LPA",

    note1: "( Mid-Level Roles )",
    note2: "( Senior-Level Roles 2–3 Year Experience )",
  },

};


export default function DataAnalyticsOutcomes() {

  return (
    <section className="bg-[#fff] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-3xl font-medium">

          Career{" "}
          <span className="text-red-700 underline underline-offset-4">
            Outcomes
          </span>

        </h2>

        <p className="text-gray-600 mt-2">
          Where this program can take you — roles, responsibilities, and salary growth
        </p>

      </div>


      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">


        {/* MINI CARD */}
        <div>

          <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#E6F1FB_100%)] rounded-xl p-8 relative overflow-hidden shadow-sm">

            {/* Ribbon */}
            <div className="absolute right-[-60px] top-[40px] rotate-45 bg-blue-100 text-blue-700 px-20 py-1 text-sm">

              {outcomes.mini.ribbon}

            </div>


            <h3 className="text-xl font-semibold text-red-700 mb-6 text-center">
              {outcomes.mini.title}
            </h3>


            <h4 className="text-red-700 font-medium mb-4">
              Job Roles You'll Be Ready For :
            </h4>


            <ul className="space-y-3">

              {outcomes.mini.roles.map((role, i) => (

                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{role}</span>
                </li>

              ))}

            </ul>

          </div>


          {/* Salary Box */}
          <div className="bg-white border border-red-200 font-serif mt-6 rounded-xl p-4 shadow-sm">

            Expected Salary Range –{" "}
            <span className="text-red-700 font-semibold">
              {outcomes.mini.salary}
            </span>

            <div className="text-red-600 text-sm mt-1">
              {outcomes.mini.note}
            </div>

          </div>

        </div>



        {/* MACRO CARD */}
        <div>

          <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#E6F1FB_100%)] rounded-xl p-8 relative overflow-hidden shadow-sm">


            {/* Ribbon */}
            <div className="absolute right-[-80px] top-[40px] rotate-45 bg-blue-100 text-blue-700 px-20 py-1 text-sm">

              {outcomes.macro.ribbon}

            </div>


            <h3 className="text-xl font-semibold text-red-700 mb-6 text-center">
              {outcomes.macro.title}
            </h3>


            <h4 className="text-red-700 font-medium mb-4">
              Job Roles You'll Be Ready For :
            </h4>


            <ul className="space-y-3">

              {outcomes.macro.roles.map((role, i) => (

                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{role}</span>
                </li>

              ))}

            </ul>

          </div>


          {/* Salary Box */}
          <div className="bg-white border border-red-200 font-serif mt-6 rounded-xl p-4 shadow-sm">

            Expected Salary Range –{" "}

            <span className="text-red-700 font-semibold mr-4">
              {outcomes.macro.salary1}
            </span>

            <span className="text-red-700 font-semibold">
              {outcomes.macro.salary2}
            </span>


            <div className="text-red-600 text-sm mt-1">

              {outcomes.macro.note1} &nbsp;&nbsp;
              {outcomes.macro.note2}

            </div>

          </div>

        </div>


      </div>

    </section>
  );
}
