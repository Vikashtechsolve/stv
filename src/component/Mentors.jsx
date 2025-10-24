import React, { useEffect, useRef, useState } from "react";

const MentorsSmoothCarousel = () => {
  const mentors = [
    {
      name: "Venkatesh reddy",
      role: "Java Full Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Venkatesh__ihttlr.jpg",
      description:
        "Passionate Java Full Stack Developer delivering end-to-end web applications with clean architecture, modern UI, and proven real-world impact.",
    },
    {
      name: "Abhinav Verma",
      role: "Advanced DSA Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759831230/Abhinav_kilenc.jpg",
      description:
        "Passionate Data Structures & Algorithms Trainer helping students master advanced concepts, optimize solutions, and crack top-tier tech interviews with confidence.",
    },
    {
      name: "Pavan Sharma",
      role: "Expert AI/ML developer and mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832519/pavan_ooikbo.jpg",
      description:
        "Expert AI/ML developer and mentor, skilled in building intelligent solutions and guiding learners to master machine learning and AI technologies.",
    },
     {
      name: "Ashish Vaghamshi",
      role: "Full Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
      description:
        "Dynamic Full Stack Developer building powerful, responsive, and user-centric web applications that deliver real business value.",
    },
     {
      name: "Masood Raza",
      role: "Data Analyst / Data Science Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png",
      description:
        "Skilled Data Analyst proficient in Python, R, SQL, Power BI, and Linux, specializing in data visualization, analytics, and transforming raw data into actionable insights.",
    },
    {
      name: "Vevek Naydo",
      role: "Mobile Application Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Vivek_m6sgzw.jpg",
      description:
        "Innovative Mobile App Developer passionate about crafting responsive, secure, and feature-rich mobile solutions that bring ideas to life.",
    },
    {
      name: "Tanishq Gupta",
      role: "AWS Trainer & Cloud Solutions Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832522/Tanishq_dh9wr3.jpg",
      description:
        "Experienced AWS trainer, empowering learners to master cloud computing and implement scalable, secure cloud solutions.",
    },
    {
      name: "Amol Sutar",
      role: "Database Solutions Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832492/Amol_ykm4vw.jpg",
      description:
        "Skilled DBMS trainer, guiding learners to design, manage, and optimize robust database systems efficiently.",
    },
    {
      name: "Tasin Khan",
      role: "MERN Stack Developer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840861/Tasin_iyd0me.jpg",
      description:
        "Proficient MERN stack developer, building dynamic web applications and mentoring learners to master full-stack development with MongoDB, Express, React, and Node.js.",
    },
    {
      name: "Mayur Kumar",
      role: "DSA Mentor & Problem-Solving Coach",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg",
      description:
        "Expert DSA mentor, helping learners master data structures and algorithms to excel in coding interviews and competitive programming.",
    },
    {
      name: "Kishor Mohite",
      role: "Database Mentor & Trainer",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841721/Kishor_rdehwa.jpg",
      description:
        "Practical database mentor with real-world experience, guiding learners to design, manage, and optimize databases effectively.",
    },
     {
      name: "Abhishek singh",
      role: "Advanced Excel, Power BI & SQL Mentor",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg",
      description:
        "Experienced mentor guiding learners to master Excel, Power BI, and SQL for data analysis and real-world business insights.",
    },
  ];

  // repeat mentors MANY times to avoid empty space
  const sliderMentors = Array(20).fill(mentors).flat();

  const sliderRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let position = 0;
    const speed = 2.0;

    const step = () => {
      position += speed;
      const slider = sliderRef.current;
      if (slider) {
        const totalWidth = slider.scrollWidth / 2; // half width is enough for reset
        if (position >= totalWidth) {
          position = 0; // reset instantly for seamless loop
        }
        setScrollPosition(position);
      }
      requestAnimationFrame(step);
    };
    step();
  }, []);

  const cardWidth = 280;
  const cardHeight = 500;
  const gap = 150;

  return (
    <section className="w-full h-screen  flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-5xl font-bold font-playfair mb-10 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
        Meet Our Mentors
      </h1>

      <div className="relative w-full h-4/5 overflow-hidden flex justify-center items-center">
        <div
          ref={sliderRef}
          className="flex items-center absolute top-0 left-0 h-full"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {sliderMentors.map((mentor, idx) => {
            const cardCenter =
              idx * (cardWidth + gap) - scrollPosition + cardWidth / 2;
            const screenCenter = window.innerWidth / 2;
            const distance = Math.abs(screenCenter - cardCenter);
            const scale = Math.max(0.9, 1.5 - distance / 800); // zoom center

            return (
              <div
                key={idx}
                className="flex-shrink-0 rounded-lg shadow-lg bg-gradient-to-b from-[#E2E2E2] to-[#C0C0C0] text-center transition-transform duration-300"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginRight: `${gap}px`,
                  transform: `scale(${scale})`,
                }}
              >
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 overflow-visible">
                  <h2 className="text-lg font-playfair font-bold bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
                    {mentor.name}
                  </h2>
                  <p className="text-gray-700 italic text-sm mt-1">
                    {mentor.role}
                  </p>
                  <p className="text-gray-800 text-sm mt-2 leading-relaxed">
                    {mentor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MentorsSmoothCarousel;
