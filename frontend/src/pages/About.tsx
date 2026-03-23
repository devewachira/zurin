import { NavLink } from 'react-router-dom'
import CoreValues from '../components/CoreValues'
import ConsultationCard from '../components/ConsultationCard'

export default function About() {
  return (
    <section>
      {/* Hero */}
      <div className="relative text-white overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img src="/assets/img/skyline.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-navy-900/90" />
        </div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mb-8">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-white transition-colors group"
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
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-emerald-300/90">About</div>
            <h1 className="mt-4 font-bold">
              Welcome to <span className="text-brand-300">Zurinty Marketing</span>
            </h1>
            <p className="mt-6 text-white/90 max-w-2xl">
              We’re a creative marketing and web agency passionate about helping brands build better experiences online while keeping integrity, creativity, and transparency at the core of everything we do.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink to="/portfolio" className="btn btn-outline-white btn-pill px-6 py-3">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-primary btn-pill px-6 py-3">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-3 items-center">
          {/* Left Image (Swapped) */}
          <div className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-black/5">
              <div className="h-[400px] md:h-[520px] lg:h-[450px] w-full">
                <img 
                  src="/assets/img/eduu.jpeg" 
                  alt="About" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-500/40 via-emerald-500/10 to-transparent" />
            </div>
            <div className="mt-6 text-left">
              <div className="text-5xl font-bold italic text-gray-900/80">Njenga</div>
              <div className="text-sm text-gray-500">Kamau — Communication Expert</div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:text-left">
            <div className="uppercase tracking-widest text-brand-700/80 text-sm">About Us</div>
            <h2 className="mt-3 text-brand-700 font-extrabold leading-tight text-4xl md:text-5xl lg:text-4xl">
              <span className="block">Get to Know</span>
              <span className="block">Zurinty Marketing</span>
              <span className="block">& Web Design</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0">
              Our marketing agency offers a wide variety of services including website design, SEO strategy, content marketing and email marketing, and we are passionate about helping all businesses succeed and grow online.
            </p>
            <blockquote className="mt-8 border-l-4 border-brand-400 pl-4 text-gray-800 font-semibold text-left">
              “Everything about Zurinty — from our company culture to the way we work with our clients — is based on our 5 core values.”
            </blockquote>
          </div>

          {/* Right Image (Swapped) */}
          <div className="mt-8 md:mt-16 lg:mt-0 group">
            <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-black/5">
              <div className="h-[400px] md:h-[520px] lg:h-[450px] w-full">
                <img 
                  src="/assets/img/laptopp.jpg" 
                  alt="About" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-500/40 via-brand-500/10 to-transparent" />
            </div>
            <div className="mt-6 text-left">
              <div className="text-5xl font-bold italic text-gray-900/80">Wachira</div>
              <div className="text-sm text-gray-500">Mwangi— Programmer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core values with videos */}
      <CoreValues />

      {/* Extra content: consultation banner */}
      <ConsultationCard />
    </section>
  )
}
