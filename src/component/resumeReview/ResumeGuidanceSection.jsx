import React from "react";
import { Video, FileText, User, Workflow, Mail, Upload } from "lucide-react";

const ResumeGuidanceSection = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: "30–40 Minute Live Session",
      desc: "with Expert",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Detailed Resume Review",
      desc: "by Industry Mentor",
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Personalized Improvement Tips",
      desc: "to strengthen your profile",
    },
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: "Skill & Career Roadmap PDF",
      desc: "for future planning",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Follow-up Support via Email",
      desc: "to clear your next doubts",
    },
  ];

  return (
    <section className="bg-[#E2E2E2] py-16 px-6 md:px-16 lg:px-24 text-center">
      {/* Heading */}
      <h2 className="font-playfair text-3xl sm:text-4xl  text-gray-800  mb-2">
        All This for Just ₹149
      </h2>
      <p className="mb-12 text-xl  red-gradient mt-4 font-medium font-nunito ">
        Get complete career-ready resume guidance — all in one affordable session.
      </p>

      {/* Features Grid */}
      <div className="flex flex-col items-center gap-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
          {features.slice(0, 3).map((f, i) => (
            <div
              key={i}
              className="w-full max-w-[420px] h-[220px] bg-gradient-to-b from-gray-50 to-blue-50 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className="bg-gradient-to-b from-[#ED0331] to-[#87021C] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-base md:text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row (Centered 2 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {features.slice(3).map((f, i) => (
            <div
              key={i}
              className="w-full max-w-[420px] h-[220px] bg-gradient-to-b from-gray-50 to-blue-50 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className="bg-gradient-to-b from-[#ED0331] to-[#87021C] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-base md:text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-14 flex flex-col items-center gap-4">
        <button className="flex items-center gap-2 px-6 py-4 border border-gray-500 rounded-lg text-sm hover:bg-gray-100 transition-all">
          <Upload className="w-4 h-4" /> Upload your Resume
        </button>

        <button className="bg-[#c20228] text-white px-7 py-3 rounded-lg font-medium hover:bg-[#a10122] transition-all">
          Book Your Session →
        </button>
      </div>
    </section>
  );
};

export default ResumeGuidanceSection;
