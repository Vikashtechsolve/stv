import React from 'react';

// Mock data for the testimonials, based on the image content
const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    title: "Web Development Student",
    quote: "I had been struggling with React props and state management for days. My mentor explained it live with real examples—now I can debug and build components confidently!",
    rating: 5,
    // Using placeholder images for the avatars
    avatarUrl: "https://placehold.co/100x100/f0f8ff/4a5568?text=Riya",
  },
  {
    id: 2,
    name: "Neha Singh",
    title: "DSA Learner",
    quote: "Recursion and binary trees used to scare me, but the 1:1 session made everything so simple. My mentor also shared practice questions to strengthen my logic.",
    rating: 5,
    avatarUrl: "https://placehold.co/100x100/f0f8ff/4a5568?text=Neha",
  },
  {
    id: 3,
    name: "Kritika Joshi",
    title: "Programming Languages",
    quote: "My Python loops and OOPs concepts were a mess. In just one 30-min session, I understood how everything connects. It's so much better than watching random YouTube videos!",
    rating: 4,
    avatarUrl: "https://placehold.co/100x100/f0f8ff/4a5568?text=Kritika",
  },
];

// Helper component to render the stars
const StarRating = ({ count }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${i < count ? 'text-yellow-500' : 'text-gray-300'} inline-block`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
  return <div className="mt-4">{stars}</div>;
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full transition duration-300 hover:shadow-2xl">
    {/* Avatar */}
    <div className="relative w-24 h-24 mb-6">
      <img
        src={testimonial.avatarUrl}
        alt={`${testimonial.name}'s avatar`}
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
        // Fallback for image loading issues
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/e0e0e0/555?text=User"; }}
      />
    </div>

    {/* Quote */}
    <p className="text-gray-700 text-sm md:text-base italic mb-4 flex-grow">
      "{testimonial.quote}"
    </p>

    {/* Rating */}
    <StarRating count={testimonial.rating} />

    {/* Name and Title */}
    <div className="mt-4 pt-4 border-t border-gray-100 w-full">
      <p className="text-base md:text-lg font-semibold text-red-600">
        {testimonial.name}
      </p>
      <p className="text-xs md:text-sm text-gray-500 mt-0.5">
        {testimonial.title}
      </p>
    </div>
  </div>
);


// Main App Component
const StudentTestimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Student Testimonials
        </h1>
        {/* Subheader 1 - Red Text */}
        <p className="text-lg sm:text-xl font-medium text-red-600 mb-2">
          Every doubt solved here turns into a success story.
        </p>
        {/* Subheader 2 - Red Text, slightly smaller */}
        <p className="text-base sm:text-lg text-red-600 max-w-2xl mx-auto leading-relaxed">
          Students share how Live Doubt Solving sessions helped them understand faster, build confidence, and truly learn — not just memorize.
        </p>
      </header>

      {/* Testimonials Grid Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentTestimonials;
