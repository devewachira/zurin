import { NavLink } from 'react-router-dom'

export default function TestimonialPair() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <div className="text-sm uppercase tracking-widest text-green-600 mb-4">Testimonials</div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-green-600 mb-6">
  Nairobi Web Design Clients Are Awesome, and They Think We're Pretty Cool, Too.
</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A great client relationship is what turns a good project into an unforgettable one. 
              We've been lucky enough to work with some of the most driven, creative, and 
              passionate businesses in Nairobi, and that collaboration is the secret sauce behind 
              every website we build.
            </p>
            <NavLink 
              to="/testimonials" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              See More Nairobi Reviews
            </NavLink>
          </div>
          
          {/* Right side - Testimonial Card */}
          <div className="bg-[#0f1630] rounded-2xl p-12 text-white shadow-xl">
            <div className="text-7xl text-green-500 mb-6">“</div>
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              We are extremely pleased with the knowledge and professionalism of the entire Zurinty Marketing group.
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We needed a new website and they delivered. From initial meeting to final design, the entire 
              process was seamless. Easy to communicate with and they worked with our timeline. I highly 
              recommend them to anyone needing marketing services.
            </p>
            <div className="text-base text-gray-400">
              — Imperial Construction
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
