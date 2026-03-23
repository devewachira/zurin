import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src="/assets/img/skyline.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/80" />
      </div>
      <div className="relative container py-28 sm:py-36">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-brand-300">Digital Marketing & Web Design in Nairobi, Kenya</p>
          <h1 className="mt-4 font-extrabold">
            Crafting Marketing &
            <br /> Web Development
            <br /> Solutions That Work.
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Nairobi, Kenya based digital marketing and web development that does what it’s supposed to.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <NavLink to="/contact" className="btn btn-primary px-6 py-3">Hire Us!</NavLink>
            <NavLink to="/portfolio" className="btn btn-outline-white px-6 py-3">Our Work</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
