export default function BenefitsSection() {
  return (
<section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Benefits of Working with Zurinty</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Conversion-first design</h3>
              <p className="mt-2">We map user journeys and craft interfaces that guide action.</p>
            </div>
            <div>
              <h3 className="font-semibold">Performance & SEO</h3>
              <p className="mt-2">Ship fast pages with clean semantics and technical SEO baked in.</p>
            </div>
            <div>
              <h3 className="font-semibold">Accessibility by default</h3>
              <p className="mt-2">Keyboard navigation, color contrast, and ARIA where appropriate.</p>
            </div>
            <div>
              <h3 className="font-semibold">Ongoing support</h3>
              <p className="mt-2">We partner post‑launch for iterations, analytics, and growth.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl border overflow-hidden">
            <img src="/assets/img/skyline.png" alt="Nairobi skyline" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  )
}
