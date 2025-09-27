import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    text: "The 1:1 mentorship sessions really cleared my doubts about career choices. My mentor gave me a clear roadmap that matched my goals, and it felt like having a guide who truly understands the challenges students face. I now feel more confident about my next steps and the direction my career is heading in.",
    name: "Priya Sharma",
    role: "B.Tech Student",
    image: "https://via.placeholder.com/300x350?text=Priya+Sharma", // replace with actual
  },
  {
    text: "I used the live doubt-solving feature, and it was extremely helpful in quickly resolving my queries. The mentors are very approachable and provide amazing guidance with real-world examples.",
    name: "Arjun Mehta",
    role: "Class 12, PCM",
    image: "https://via.placeholder.com/300x350?text=Arjun+Mehta", // replace with actual
  },
  {
    text: "Thanks to the career guidance and structured mentorship, I was able to crack my interviews with confidence. The resume review sessions were particularly helpful in highlighting my strengths.",
    name: "Sneha Patel",
    role: "MCA Graduate",
    image: "https://via.placeholder.com/300x350?text=Sneha+Patel", // replace with actual
  },
];

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-red-700 mb-2">
          Our Success Stories
        </h2>
        <p className="text-gray-600 mb-12">
          From doubt-solving to dream careers — here’s how our students transformed their journey!
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6 p-8">
              {/* Left Side (Quote) */}
              <div className="bg-white rounded-xl shadow-md p-6 md:w-1/2 text-left border border-gray-200">
                <span className="text-4xl text-red-600 font-bold">“</span>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.text}
                </p>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>

              {/* Right Side (Image) */}
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl object-cover w-full h-80"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;
