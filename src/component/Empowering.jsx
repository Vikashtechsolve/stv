import { ArrowRight } from 'lucide-react';

export const Empowering = () => { 
    
    return(
         <div className="min-h-screen  bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-playfair md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Empowering Growth Through Practical Learning!
          </h1>
          
          <p className="text-lg md:text-2xl font-nunito red-gradient mb-4 md:mb-6 leading-relaxed font-medium">
            At Vikash Tech Solutions, we redefine learning by bringing real-world experience into the classroom.
          </p>
          
          <p className="text-lg md:text-2xl font-nunito red-gradient font-playfair mb-8 md:mb-12 leading-relaxed font-medium">
            From interactive masterclasses to personalized mentorship, we help learners and professionals gain the skills that truly matter.
          </p>
          
          <button className="bg-gradient-to-r from-[#ED0331] to-[#87021C] hover:bg-red-700 text-white  py-4 px-8 rounded-full w-fit text-xl transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
            Explore our Programs
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md md:max-w-full">
            {/* Yellow border frame */}
            <div className="bg-yellow-100 p-4 md:p-6 rounded-2xl shadow-2xl">
              {/* Image container with dark background */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Team celebrating success"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    )
 } 