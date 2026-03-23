export default function GlobalImpactBanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-navy-900">
      {/* Background image for texture */}
      <img
        src="/assets/img/skyline.png"
        alt="Background texture"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
      />
      
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left content */}
        <div className="text-white order-2 md:order-1">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">World Class Standards</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Innovative Design.
            <br />
            <span className="text-emerald-500">Global Excellence.</span>
          </h2>
          <p className="mt-8 text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Our portfolio showcases our ability to deliver high-end digital experiences that resonate on a global scale. We bring international design standards and cutting-edge technology to every project.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
             <div className="px-6 py-3 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 text-base font-bold text-emerald-400">UI/UX Excellence</div>
             <div className="px-6 py-3 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 text-base font-bold text-emerald-400">Enterprise Solutions</div>
             <div className="px-6 py-3 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 text-base font-bold text-emerald-400">Global Reach</div>
          </div>
        </div>

        {/* Right image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video md:aspect-square lg:aspect-video order-1 md:order-2 group">
          <img
            src="/assets/img/portfolio/trellis-macbook.png"
            alt="Global project showcase"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  )
}
