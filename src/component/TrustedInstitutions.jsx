import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Inst1 from "../assets/light.png";
import Inst2 from "../assets/dehli.png";
import Inst3 from "../assets/amity.png";
import Inst4 from "../assets/lovely.png";
import Inst5 from "../assets/csj.png";
import Inst6 from "../assets/chitkara.png";

const institutions = [
  { name: "Institution 1", logo: Inst1 },
  { name: "Institution 2", logo: Inst2 },
  { name: "Amity University", logo: Inst3 },
  { name: "Institution 4", logo: Inst4 },
  { name: "Institution 5", logo: Inst5 },
  { name: "Chitkara University", logo: Inst6 },
];

const TrustedInstitutions = () => {
  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-12 mt-6">
      {/* Heading */}
      <h1 className="text-center text-5xl font-semibold font-playfair mb-20 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-[1.2]">
        Trusted by Leading Institutions
      </h1>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-24 px-6" // 🔑 px-6 ensures equal gap
            >
              <img
                src={inst.logo}
                alt={inst.name}
                className="max-h-full max-w-[120px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedInstitutions;
