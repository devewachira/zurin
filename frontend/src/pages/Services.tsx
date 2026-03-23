import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import ServicesThreeStep from '../components/ServicesThreeStep'
import ServicesArsenal from '../components/ServicesArsenal'

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Website Design, SEO, Branding & Digital Marketing"
  }, [])
  return (
    <section>
      {/* Full-bleed hero */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            src="/assets/img/portfolio/dr2.png"
            alt="Nairobi skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#141a2a]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-white transition-colors group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </NavLink>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              We Are a <span className="text-emerald-400">Full-Service</span>, Professional.
              <br />
              Digital Marketing and Web Design.
              <br />
              Agency.
            </h1>
            <p className="mt-6 text-white/85 max-w-3xl">
              You shouldn’t have to work with 4 different companies just to get the services, experience, and results you want. Instead, Zurinty can create a custom and comprehensive plan for your business’ unique needs. Maybe you need it all, or maybe you only need a little help – whether you want paid media, content marketing, and social media management, or branding, logo, and web design – whatever your goals, we can help you reach them!
            </p>
            <div className="mt-8 flex items-center gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Hire Us!</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Three‑step process section */}
      <ServicesThreeStep />

      {/* Services arsenal section */}
      <ServicesArsenal />

      
    </section>
  )
}
