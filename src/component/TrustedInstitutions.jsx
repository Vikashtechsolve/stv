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
 const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,   // ✅ show 2 logos
        slidesToScroll: 2, // ✅ move 2 at a time
      },
    },
  ],
};


  return (
    <section className="py-12 mt-6">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
        Trusted by Leading Institutions
      </h1>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <div className="p-6 rounded-lg flex justify-center items-center">
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="h-20 sm:h-24 md:h-28 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedInstitutions;
