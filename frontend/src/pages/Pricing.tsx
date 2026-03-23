import { NavLink } from 'react-router-dom'

export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$2,500+', desc: 'Best for landing pages and MVPs', features: ['1-3 pages', 'Design + build', 'Basic SEO'] },
    { name: 'Growth', price: '$6,500+', desc: 'Marketing sites and small products', features: ['4-8 pages', 'Components', 'Analytics + SEO'] },
    { name: 'Scale', price: 'Custom', desc: 'Larger sites and product work', features: ['>8 pages', 'Design system', 'Performance & A/B'] },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
        <p className="mt-4 text-gray-600">Simple, transparent options. Fixed-price or retainer.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="p-6 rounded-2xl border bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-blue-700 font-semibold">{t.price}</div>
            </div>
            <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <NavLink to="/contact" className="mt-6 btn btn-primary px-4 py-2 text-sm">Get started</NavLink>
          </div>
        ))}
      </div>
      <div className="mt-12 overflow-hidden rounded-2xl border bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12">
        <h2 className="text-xl font-semibold">Not sure what fits?</h2>
        <p className="mt-2 text-gray-700">Tell us your goals and we’ll recommend a plan.</p>
        <NavLink to="/contact" className="mt-4 btn btn-primary px-4 py-2 text-sm">Talk to us</NavLink>
      </div>
    </section>
  )
}
