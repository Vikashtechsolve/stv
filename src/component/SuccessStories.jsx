import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import vector from "../assets/Vector.svg";

const testimonials = [
  {
    text: "The 1:1 mentorship sessions really cleared my doubts about career choices. My mentor gave me a clear roadmap that matched my goals, and it felt like having a guide who truly understands the challenges students face. I now feel more confident about my next steps and the direction my career is heading in.",
    name: "Priya Sharma",
    role: "(B.Tech Student)",
    img: p1,
  },
  {
    text: "I used the live doubt solving feature during exam prep and it was a lifesaver. The mentors not only answered my questions but also explained concepts in depth, which made everything so much clearer. The practice notes after each session helped me revise quickly and saved me hours of confusion, ultimately improving my scores.",
    name: "Arjun Mehta",
    role: "(Class 12, PCM)",
    img: p2,
  },
  {
    text: "The resume review service was a game-changer for me. I got detailed feedback with AI plus human suggestions that made my resume stand out in the job market. The reviewers highlighted mistakes I never noticed and rewrote my key points in a stronger way. Thanks to this, I cracked my first internship interview easily.",
    name: "Neha Verma",
    role: "(Engineering Student)",
    img: p3,
  },
  {
    text: "The platform has given me exactly what I needed — personal guidance and real growth. The mentors explain concepts so clearly and the doubt-solving sessions save a lot of time. I enjoy participating in the coding contests, which keep me motivated to practice regularly. The resume review session was the best part — it made my profile industry-ready and boosted my confidence.",
    name: "Rahul Singh",
    role: "(MBA Student)",
    img: p4,
  },
  {
    text: "The one-on-one mentorship really changed the way I studied. Earlier, I used to get stuck for hours, but now my doubts are solved instantly through the live doubt-solving sessions. The coding contests have boosted my confidence and improved my problem-solving speed. The resume review was also super helpful — it gave my CV a professional touch that will help me in placements.",
    name: "Sneha Kapoor",
    role: "(College Student)",
    img: p5,
  },
];

const SuccessStories = () => {
  const viewportRef = useRef(null);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(1); // start at 2nd card
  const gap = 28; // px
  const autoScrollRef = useRef(null);

  // Calculate card widths + positioning
  const calcSizesAndCenter = () => {
    const viewport = viewportRef.current;
    const carousel = carouselRef.current;
    if (!viewport || !carousel) return;

    const vw = viewport.clientWidth;
    const isMobile = vw < 820;

    let cardW;
    if (isMobile) {
      cardW = Math.max(320, vw - 48);
    } else {
      cardW = Math.max(420, Math.min(920, Math.floor(vw * 0.65)));
    }

    // Set widths dynamically
    const cards = carousel.querySelectorAll(".card");
    cards.forEach((c) => (c.style.width = cardW + "px"));
    carousel.style.gap = gap + "px";

    centerCard(index, cardW, vw);
  };

  // Center the active card
  const centerCard = (idx, cardW, vw) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const fullStep = cardW + gap;
    const offset = idx * fullStep;
    const centerLeft = (vw - cardW) / 2;
    const translateX = offset - centerLeft;

    carousel.style.transform = `translateX(-${translateX}px)`;
    carousel.style.transition = "transform 0.6s ease"; // smooth
  };

  // Navigation
  const nextCard = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevCard = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto scroll
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(nextCard, 4000);
  };
  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  // Watch index changes → recalc center
  useEffect(() => {
    calcSizesAndCenter();
    resetAutoScroll();
  }, [index]);

  // Initial + resize handling
  useEffect(() => {
    calcSizesAndCenter();
    startAutoScroll();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calcSizesAndCenter, 80);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoScrollRef.current);
    };
  }, []);

  return (
    <section className="py-12 mt-6">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
        Our Success Stories
      </h1>
      <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-nunito">
        From doubt-solving to dream careers — here’s how our students
        transformed their journey!
      </p>

      <div
        id="viewport"
        ref={viewportRef}
        className="relative w-full max-w-6xl mx-auto overflow-hidden"
      >
        {/* Carousel */}
        <div
          id="carousel"
          ref={carouselRef}
          className="flex items-stretch transition-transform duration-500 ease-in-out"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              // className="card flex-none bg-white rounded-2xl shadow h-auto overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
             className={`card flex-none bg-white h-auto overflow-hidden flex flex-col md:flex-row items-center md:items-stretch transition-all duration-500 ease-out rounded-2xl ${
    i === index 
      ? "scale-105 shadow-xl z-10" 
      : "scale-95 opacity-80"
  }`}
  style={{
    transformOrigin: "center",
  }}
            >
              {/* Text Content (Desktop left, Mobile below image) */}
              <div className="order-2 md:order-1 px-6 py-6 md:px-10 md:py-8 w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                <img src={vector} className="w-7 mb-10 " alt="not found" />
                <p className="text-gray-700 mb-6 text-base  leading-relaxed">
                  {t.text}
                </p>
                <h3 className="text-2xl font-nunito  font-semibold">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>

              {/* Image (Mobile top, Desktop right) */}
              <div className="order-1 md:order-2 w-full md:w-1/3 flex justify-center md:block">
                <img
                  src={t.img}
                  alt={t.name}
                //  className="w-32 h-32 md:w-full md:h-full object-cover rounded-full md:rounded-none mt-6 md:mt-0"
                className={`w-32 h-32 md:w-full md:h-full object-cover rounded-full md:rounded-none mt-6 md:mt-0 transition-all duration-500 ${
    i === index ? "scale-105" : "scale-100"
  }`}
                />
              </div>
            </div>

          ))}
        </div>

        {/* Nav Buttons */}
        <button
          onClick={() => {
            prevCard();
            resetAutoScroll();
          }}
          aria-label="previous"
          id="prev"
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-8 bg-white shadow rounded-full p-2"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={() => {
            nextCard();
            resetAutoScroll();
          }}
          aria-label="next"
          id="next"
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-8 bg-white shadow rounded-full p-2"
        >
          <FiChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;