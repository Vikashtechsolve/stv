import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Quote } from "lucide-react";

function getCardsPerView() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

export default function CourseSuccessStoriesCarousel({
  stories,
  subtitle,
  cardGradient = "bg-[linear-gradient(to_bottom,#FBEAEB_20%,#FFF_80%)]",
  heading,
  accentBorder = "border-red-50/80",
  footerBorder = "border-red-100/80",
}) {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index + cardsPerView < stories.length) {
      setIndex(index + cardsPerView);
    }
  };

  const prev = () => {
    if (index - cardsPerView >= 0) {
      setIndex(index - cardsPerView);
    }
  };

  const visibleCards = stories.slice(index, index + cardsPerView);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          {heading ?? (
            <>
              Real{" "}
              <span className="text-red-700 underline underline-offset-4 relative sm:-top-1 lg:-top-3">
                Results
              </span>{" "}
              Real{" "}
              <span className="text-red-700 underline underline-offset-4 relative sm:-top-1 lg:-top-3">
                Careers
              </span>
            </>
          )}
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex items-stretch gap-3 sm:gap-6 lg:gap-8">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="cursor-pointer self-center bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="text-[#B11C20]" />
        </button>

        <div className="grid flex-1 gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleCards.map((story) => (
            <article
              key={story.id}
              className={`${cardGradient} rounded-2xl p-5 sm:p-6 lg:p-7 shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full border ${accentBorder}`}
            >
              <Quote
                className="w-8 h-8 text-[#B11C20]/25 mb-3 shrink-0"
                aria-hidden
              />

              <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed flex-1">
                &ldquo;{story.text}&rdquo;
              </p>

              <div className={`mt-5 pt-4 border-t ${footerBorder} space-y-2`}>
                <div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">
                    {story.name}
                  </p>
                  <p className="text-[#B11C20] text-xs sm:text-sm font-medium mt-0.5">
                    {story.role}
                  </p>
                </div>

                <div className="inline-flex items-start gap-1.5 text-gray-600 text-xs sm:text-sm bg-white/70 rounded-lg px-2.5 py-1.5">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
                  <span className="leading-snug">{story.qualification}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index + cardsPerView >= stories.length}
          className="cursor-pointer self-center bg-white shadow-md rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:shadow-lg transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Next testimonials"
        >
          <ChevronRight className="text-[#B11C20]" />
        </button>
      </div>
    </section>
  );
}
