import { NavLink } from 'react-router-dom'

export default function ApproachSection() {
  return (
    <section className="relative section overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="absolute inset-0">
        <img src="/assets/img/skyline.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-brand-300">Our Approach To Web Development</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight max-w-4xl">
          We tailor strategy and execution to your business.
        </h2>
        <p className="mt-4 text-brand-300 max-w-3xl">
          We combine brand, UX, and engineering to deliver performant, accessible websites that convert.
        </p>
        <NavLink to="/portfolio" className="mt-6 inline-flex btn btn-outline-white px-4 py-2">See our work</NavLink>
      </div>
    </section>
  )
}
