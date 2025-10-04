import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ankit from '../assets/ankit.png';
import priya from '../assets/priya.png';
import neha from '../assets/neha.png'

const mentors = [
  {
    id: 1,
    name: 'Priya Nair',
    title: 'Academic Mentor - Mathematics & Statistics',
    description: 'Guides students through complex concepts in math, physics, and core CS subjects, ensuring they grasp crystal-clear with step-by-step guidance.',
    image: priya
  },
  {
    id: 2,
    name: 'Ankit Verma',
    title: 'Mentor - Competitive Programming & Contests',
    description: 'Trains students in coding challenges, hackathons and contests, building problem-solving speed, accuracy, and confidence in competitive exams.',
    image: ankit
  },
  {
    id: 3,
    name: 'Neha Sharma',
    title: 'Career & Resume Specialist',
    description: 'Helps learners with resume building, LinkedIn optimization, and interview preparation, ensuring they stand out in the job market.',
    image: neha
  },
  {
    id: 4,
    name: 'Rahul Kumar',
    title: 'Full-Stack Development Mentor',
    description: 'Specializes in modern web technologies, guiding students through React, Node.js, and database design with real-world projects.',
    image: ankit
  },
  {
    id: 5,
    name: 'Sanjana Patel',
    title: 'UI/UX Design Mentor',
    description: 'Empowers students to create beautiful, user-centric designs with expertise in Figma, design systems, and modern UI principles.',
    image: neha
  },
  {
    id: 6,
    name: 'Sanjana Patel',
    title: 'UI/UX Design Mentor',
    description: 'Empowers students to create beautiful, user-centric designs with expertise in Figma, design systems, and modern UI principles.',
    image: priya
  },
  
];

function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState( 0 );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setDirection(1);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mentors.length);
        setIsAnimating(false);
      }, 800);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection(-1);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
        setIsAnimating(false);
      }, 800);
    }
  };

  const getVisibleMentors = () => {
    const prev = (currentIndex - 1 + mentors.length) % mentors.length;
    const next = (currentIndex + 1) % mentors.length;
    return [
      { ...mentors[prev], position: 'left' },
      { ...mentors[currentIndex], position: 'center' },
      { ...mentors[next], position: 'right' }
    ];
  };

  const visibleMentors = getVisibleMentors();

  return (
    <div className="min-h-screen  py-16 px-2">
      <style>{`
        @keyframes slideAndScaleLeft {
          0% {
            transform: translateX(0) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateX(-120%) scale(0.9);
            opacity: 0.6;
          }
        }

        @keyframes slideAndScaleCenter {
          0% {
            transform: translateX(0) scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: translateX(-120%) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes slideAndScaleRight {
          0% {
            transform: translateX(0) scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: translateX(-120%) scale(0.9);
            opacity: 0.6;
          }
        }

        @keyframes slideAndScaleLeftReverse {
          0% {
            transform: translateX(0) scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: translateX(120%) scale(0.9);
            opacity: 0.6;
          }
        }

        @keyframes slideAndScaleCenterReverse {
          0% {
            transform: translateX(0) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateX(120%) scale(0.9);
            opacity: 0.6;
          }
        }

        @keyframes slideAndScaleRightReverse {
          0% {
            transform: translateX(0) scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: translateX(120%) scale(1.1);
            opacity: 1;
          }
        }

        .animate-slide-left {
          animation: slideAndScaleLeft 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .animate-slide-center {
          animation: slideAndScaleCenter 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .animate-slide-right {
          animation: slideAndScaleRight 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .animate-slide-left-reverse {
          animation: slideAndScaleLeftReverse 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .animate-slide-center-reverse {
          animation: slideAndScaleCenterReverse 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .animate-slide-right-reverse {
          animation: slideAndScaleRightReverse 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold red-gradient mb-4">Meet Our Mentors</h1>
          <p className="text-3xl font-nunito text-gray-700">Experienced professionals guiding you every step of the way</p>
        </div>

        <div className="relative overflow-hidden px-20">
          <div className="flex items-center justify-center gap-8">
            {visibleMentors.map((mentor, index) => {
              const isCenter = mentor.position === 'center';

              let animationClass = '';
              if (isAnimating && direction === 1) {
                if (mentor.position === 'left') animationClass = 'animate-slide-left';
                else if (mentor.position === 'center') animationClass = 'animate-slide-center';
                else if (mentor.position === 'right') animationClass = 'animate-slide-right';
              } else if (isAnimating && direction === -1) {
                if (mentor.position === 'left') animationClass = 'animate-slide-left-reverse';
                else if (mentor.position === 'center') animationClass = 'animate-slide-center-reverse';
                else if (mentor.position === 'right') animationClass = 'animate-slide-right-reverse';
              }

              return (
                <div
                  key={`${mentor.id}-${mentor.position}`}
                  className={`
                    transition-all duration-700 ease-out flex-shrink-0 
                    ${isCenter ? 'scale-110 z-20    shadow-sm  ' : 'scale-90 z-10 opacity-60'}
                    ${animationClass}
                  `}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-80">
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-playfair font-bold red-gradient font-nunito mb-2">{mentor.name}</h3>
                      <p className="text-sm font-playfair  font-semibold text-gray-800 mb-3">{mentor.title}</p>
                      <p className=" text-gray-600 font-nunito leading-relaxed">{mentor.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed z-30"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed z-30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {mentors.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  const diff = index - currentIndex;
                  setDirection(diff > 0 ? 1 : -1);
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 800);
                }
              }}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === currentIndex ? 'w-8 bg-red-700' : 'w-2 bg-gray-300 hover:bg-gray-400'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
