import { NavLink } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function PartnerExpectSection() {
  const points = [
    "A custom web design that captures your brand's essence and appeals to your target audience",
    "A website optimized for search engines, ensuring higher visibility and better rankings",
    "A comprehensive web development strategy that supports your digital marketing objectives",
    "Ongoing support and maintenance to keep your website performing at its best"
  ]

  return (
    <section className="py-20 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 aspect-[4/3]">
              <img 
                src="/assets/img/laptop.jpg" 
                alt="Team collaboration meeting" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6 w-fit uppercase tracking-wider">
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-navy-900 mb-8 leading-tight">
              When Partnering With Zurinty Marketing, <span className="text-emerald-600">You Can Expect:</span>
            </h2>
            
            <ul className="space-y-5 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
               <p className="text-gray-600 leading-relaxed italic text-lg">
                 "At Zurinty Marketing, we're passionate about helping businesses thrive in the digital landscape. Our proven digital marketing solutions are tailored to drive real results, from increasing website traffic to generating leads and driving sales."
               </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-16 sm:mt-24">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 sm:p-12 overflow-hidden shadow-xl shadow-emerald-900/20">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="max-w-3xl text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                  Ready to learn more about our web development services?
                </h3>
                <p className="text-emerald-50/90 text-lg">
                  Enhance your online marketing game today with our expert team.
                </p>
              </div>
              <NavLink 
                to="/contact" 
                className="group flex-shrink-0 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
