import React from 'react';
import { Star } from 'lucide-react'; // Changed the import from StarFill to Star (to resolve the compilation error)

// Dummy mentor data based on the image content
const MENTORS = [
  {
    name: 'Shreya Patel',
    title: 'Full Stack Developer',
    company: 'Microsoft',
    rating: 5,
    expertise: 'MERN Stack, REST APIs',
    experience: '7+ years',
    // Updated placeholder size for better image fitting
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg', 
    altText: 'Shreya Patel, older woman',
  },
  {
    name: 'Kavya Sharma',
    title: 'SDE II',
    company: 'Adobe',
    rating: 4,
    expertise: 'C++, Java, System Design',
    experience: '6+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg',
    altText: 'Kavya Sharma, young woman with red hair',
  },
  {
    name: 'Arjun Mehta',
    title: 'Frontend Dev (React, JS)',
    company: null,
    rating: 4,
    expertise: 'React, JavaScript',
    experience: '5+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759831230/Abhinav_kilenc.jpg',
    altText: 'Arjun Mehta, man with beard',
  },
  {
    name: 'Meera Jain',
    title: 'Frontend Dev (React, JS)',
    company: null,
    rating: 4,
    expertise: 'React, JavaScript',
    experience: '7+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832519/pavan_ooikbo.jpg',
    altText: 'Meera Jain, older blonde woman',
  },
  {
    name: 'Shreya Patel',
    title: 'Full Stack Developer',
    company: 'Microsoft',
    rating: 5,
    expertise: 'MERN Stack, REST APIs',
    experience: '7+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg',
    altText: 'Shreya Patel, young woman in black top',
  },
  {
    name: 'Ravi Gupta',
    title: 'SDE II',
    company: 'Adobe',
    rating: 5,
    expertise: 'C++, Java, System Design',
    experience: '6+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg',
    altText: 'Ravi Gupta, man in suit',
  },
  {
    name: 'Harshita Jian',
    title: 'Frontend Dev (React, JS)',
    company: null,
    rating: 4,
    expertise: 'React, JavaScript',
    experience: '5+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg',
    altText: 'Harshita Jian, woman in headscarf',
  },
  {
    name: 'Aditya Roy',
    title: 'Frontend Dev (React, JS)',
    company: null,
    rating: 4,
    expertise: 'React, JavaScript',
    experience: '7+ years',
    imageUrl: 'https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png',
    altText: 'Aditya Roy, man with grey hair',
  },
];

/**
 * Renders a star rating component.
 * @param {number} rating - The rating value (out of 5).
 */
const StarRating = ({ rating }) => {
  const maxRating = 5;
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    stars.push(
      <Star
        key={i}
        size={16}
        // Control the fill and color based on the rating
        className={isFilled ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 fill-transparent'}
      />
    );
  }
  return <div className="flex justify-center my-2">{stars}</div>;
};

/**
 * Renders a single mentor card.
 * @param {object} mentor - Mentor data object.
 */
const MentorCard = ({ mentor }) => {
  return (
    // Removed padding from the card to allow the image to sit flush with edges
    <div className="bg-[#ffffff] rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden text-center border border-gray-100">
      
      {/* Mentor Image Area (Flush with card edges) */}
      <div className="h-48 overflow-hidden">
        <img
            // Use the main image URL for the top photo
            src={mentor.imageUrl}
            alt={mentor.altText}
            // w-full h-full ensures it fills the container
            // object-cover maintains aspect ratio and covers the area, resolving the fitting issue
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x400/D1D5DB/111827?text=${mentor.name.split(' ').map(n => n[0]).join('')}`}} // Fallback to a better sized image
        />
      </div>
      
      {/* Mentor Details (Padded content area) */}
      <div className="pt-4 pb-6 px-6"> 
        <h3 className="text-xl font-semibold text-gray-800 font-playfair  mt-2 ">{mentor.name}</h3>
        <p className="text-sm mt-1  font-playfair text-gray-600">
          {mentor.title}
          {mentor.company && <span className="font-medium">, {mentor.company}</span>}
        </p>

        <StarRating rating={mentor.rating} />

        {/* Expertise Section */}
        <div className="mt-4 border-t font-nunito border-gray-100 pt-4 w-full">
          <p className="text-sm font-medium text-gray-800">Expertise: <span className="text-red-600 font-normal">{mentor.expertise}</span></p>
          <p className="text-sm font-medium text-gray-800 mt-1">Experience: <span className="text-red-600 font-normal">{mentor.experience}</span></p>
        </div>
      </div>
    </div>
  );
};

/**
 * Main application component for the Mentor Directory.
 */
const Mentors    = () => {
  return (
    // Outer container with a light background and padding
    <div className="bg-[#E2E2E2] min-h-screen py-12 sm:py-20  font-sans">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        
        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl font-playfair font-light text-gray-800  mb-4 tracking-tight">
            Meet Our Mentors
          </h1>
          <p className="text-xl mt-4 red-gradient max-w-3xl mx-auto">
            Guiding You Every Step of the Way — <span className="font-medium text-red-600">Learn from the Best Minds in the Industry.</span>
          </p>
        </header>

        {/* Mentors Grid - Fully Responsive */}
        <div className="grid grid-cols-1 gap-8 
                      sm:grid-cols-2 
                      lg:grid-cols-4">
          {MENTORS.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;







//https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg