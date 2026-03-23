import { useMemo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PORTFOLIO_ITEMS as allItems, type Category, ALL_CATEGORIES } from '../data/portfolio'

export default function Portfolio() {
  const [active, setActive] = useState<Set<Category>>(new Set())
  const [limit, setLimit] = useState(12)

  useEffect(() => {
    document.title = "Our Portfolio | Zurinty Digital Marketing & Web Design"
  }, [])

  const filtered = useMemo(() => {
    if (active.size === 0) return allItems
    return allItems.filter((i) => active.has(i.category))
  }, [active])

  const visible = filtered.slice(0, limit)
  const canShowMore = limit < filtered.length

  const toggle = (c: Category) => {
    const n = new Set(active)
    if (n.has(c)) n.delete(c)
    else n.add(c)
    setActive(n)
    // reset limit when filters change
    setLimit(12)
  }

  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(52,211,153,0.15),transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-brand-300 font-semibold">Our Work</p>
          <h1 className="mt-4 max-w-5xl font-extrabold">
            Zurinty Marketing Is Your One-Stop
            <br /> Shop for All Your Marketing
            <br /> and Design Needs. <span className="text-brand-400">And We’ve
            <br /> Got the Receipts to Prove It.</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {ALL_CATEGORIES.map((c) => {
              const on = active.has(c)
              return (
                <button
                  key={c}
                  onClick={() => toggle(c)}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold transition border ${
                    on
                      ? 'bg-brand-500 text-white border-brand-500 shadow'
                      : 'bg-transparent text-brand-500 border-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {c}
                </button>
              )
            })}
            <button
              onClick={() => setActive(new Set())}
              className="px-8 py-2.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-500 hover:border-gray-400"
            >
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((item, idx) => {
              const Card = item.link ? 'a' : NavLink
              const cardProps = item.link
                ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: `/portfolio/${item.slug}` }
              return (
                <Card
                  key={item.id}
                  {...(cardProps as any)}
                  className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow-card focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      loading={idx < 11 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="absolute inset-0 bg-brand-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold text-center px-4">{item.title}</h3>
                  </div>
                </Card>
              )
            })}
          </div>

          {canShowMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setLimit((n) => Math.min(n + 12, filtered.length))}
                className="btn btn-secondary px-6 py-3 rounded-full hover:shadow"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 sm:p-14 bg-gradient-to-br from-brand-500 to-emerald-400 text-white shadow-card">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop')] bg-cover" />
            <div className="relative">
              <p className="text-white/90 font-semibold mb-2">Ready To Get Started?</p>
              <h2 className="font-extrabold max-w-3xl">
                Wether You’re Looking for Web Design, Branding, Photo, or Video, our
                <br /> Creative Team Would Love to Work With You.
              </h2>
              <p className="mt-4 max-w-3xl text-white/90">
                If you’re ready to get started on your next big creative project, get in touch with us today. Give us a call at 0743-573-360 to learn more or fill out the contact form below. We look forward to hearing from you!
              </p>
              <div className="mt-6">
                <NavLink to="/contact" className="btn btn-primary px-6 py-3">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
