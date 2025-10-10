import React from 'react';

const TeamMember = ({ name, role, description, bgColor, imagePlaceholder }) => (
  <div className="flex flex-col bg-[#e5e5e5] rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl max-w-sm mx-auto w-full">
    <div className={`${bgColor} h-48 sm:h-52 lg:h-56 w-full flex items-center justify-center overflow-hidden`}>
      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm object-cover">
        <img src={imagePlaceholder} alt={name} />
      </div>
    </div>
    <div className="p-5 lg:p-6 flex-grow">
      <h3 className="text-lg sm:text-xl font-bold font-playfair  text-black mb-1 text-center tracking-wide">
        {name}
      </h3>
      <p className="text-sm sm:text-md red-gradient font-semibold mt-3 mb-3 text-center tracking-wider">
        {role}
      </p>
      <p className="text-gray-600 text-sm sm:text-md leading-relaxed text-center">
        {description}
      </p>
    </div>
  </div>
);

export default function OurTeam() {
  const team = [
    {
      name: "VIKAS DUBEY",
      role: "FOUNDER & TECH MENTOR",
      description: "Vikash Dubey is the visionary behind Vikas Tech Solutions, dedicated to transforming the way students and professionals learn. With deep expertise in full-stack development and product architecture.",
      bgColor: "bg-gray-200",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116012/WhatsApp_Image_2025-10-10_at_21.00.46_s5xkzu.jpg"
    },
    {
      name: "AMIT VAGHAMSHI",
      role: "Software Developer / Tech Mentor",
      description: "A passionate tech mentor with deep expertise in software development and coding fundamentals. He guides learners through hands-on projects, real-world problem-solving, and industry-relevant practices to help them grow into confident developers.",
      bgColor: "bg-gray-100",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116272/IMG_20231210_134514_zyphpu.jpg"
    },
    {
      name: "SWATI SHARMA",
      role: "Program Manager",
      description: "A results-driven Program Manager skilled in leading cross-functional teams and ensuring seamless project execution from start to finish.  Known for aligning business goals with technology to drive measurable impact and growth.",
      bgColor: "bg-gray-50",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842668/swatee_ulkfwf.jpg"
    },
    {
      name: "Jiya Kapoor",
      role: "UI/UX Developer",
      description: "A passionate UI/UX Developer dedicated to crafting intuitive, user-centered digital experiences. Skilled in transforming complex ideas into visually stunning and easy-to-use interfaces. ",
      bgColor: "bg-blue-50",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760115261/1000022510_oetw7k.jpg"
    },
    {
      name: "Mustakim Shaikh",
      role: "Senior Software Developer",
      description: "A Senior Software Developer with strong expertise in designing scalable and efficient systems. Skilled in writing high-quality code. Passionate about adopting best practices and driving innovation in software development.",
      bgColor: "bg-gray-900",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116792/IMG_8245_vkhaxe.jpg"
    },
    {
      name: "VIKRAM DESAI",
      role: "TECH MENTOR",
      description: "Provides mentorship on coding best practices, debugging techniques, and industry-ready skills, supporting students in preparing for competitive coding, interviews, and advanced projects.",
      bgColor: "bg-gray-200",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Venkatesh__ihttlr.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 italic">
            " A team of professionals dedicated to your growth "
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}