export default function StatementBand() {
  return (
    <section className="relative py-24 text-white overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img src="/assets/img/laptop.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-bold">Our Approach To Web Development</p>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
          At Zurinty, we understand that every business is unique, with its own set of goals, target audience, and online marketing needs.
        </h2>
        <p className="mt-6 text-emerald-100/80 text-lg max-w-3xl leading-relaxed">
          That’s why we take a tailored approach to web development, ensuring that our solutions are customized to meet the specific requirements of each client.
        </p>
      </div>
    </section>
  )
}
