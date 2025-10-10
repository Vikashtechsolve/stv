function AboutVTS() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-playfair text-center mb-12 md:mb-16">
          What is VTS?
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="font-nunito space-y-6 md:space-y-8">
            {/* First Paragraph */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At Vikash Tech Solutions (VTS), we're on a mission to make learning simple, affordable, and impactful. We bridge the gap between traditional education and real-world skills by offering practical programs like Masterclasses, 1:1 Mentorship, Online Contests, Resume Reviews, and Live Doubt Solving Sessions.
            </p>

            {/* Second Paragraph */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              With 5,000+ successful sessions and 95% learner satisfaction, we've built a trusted ecosystem of students, mentors, and professionals who grow together through live classes, personalized mentorship, and skill-building challenges.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team mentoring and collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { AboutVTS };