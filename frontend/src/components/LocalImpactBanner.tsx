export default function LocalImpactBanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-emerald-700">
      {/* Background image with ~20% opacity for texture */}
      <img
        src="/assets/img/skyline.png"
        alt="Background texture"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-300/20 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 aspect-video md:aspect-square lg:aspect-video">
          <img
            src="/assets/img/portfolio/co3.png"
            alt="Portfolio showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Local Start.
            <br />
            <span className="text-emerald-300">National Impact.</span>
          </h2>
          <p className="mt-8 text-emerald-50/90 text-lg sm:text-xl leading-relaxed max-w-2xl">
            We collaborate with exceptional teams across the country. From design to UI and UX to online marketing, our
            distributed partnerships deliver results for diverse industries and markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
             <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 text-base font-bold">Strategic Design</div>
             <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 text-base font-bold">Custom Development</div>
             <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 text-base font-bold">Digital Marketing</div>
          </div>
        </div>
      </div>
    </section>
  )
}
