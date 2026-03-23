import { NavLink } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { BLOG_POSTS as ALL_POSTS } from '../data/blog'

// Content modeled after the screenshots provided

const ArrowCta = () => (
  <span className="ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full border border-emerald-400 text-emerald-500 group-hover:bg-emerald-50">
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  </span>
)

export default function Blog() {
  const [limit, setLimit] = useState(9)
  const featured = ALL_POSTS[0]
  const rest = useMemo(() => ALL_POSTS.slice(1), [])
  const visible = rest.slice(0, limit)
  const canShowMore = limit < rest.length

  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-white py-20 sm:py-24 bg-[#0f1630]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Our Blog</h1>

          {/* Featured */}
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Featured image with small thumbs */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover aspect-[4/3]" />
            </div>

            {/* Featured text */}
            <div className="flex flex-col justify-center">
              <div className="text-emerald-400 font-semibold">{featured.date}</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">{featured.title}</h2>
              <p className="mt-5 text-white/85 max-w-xl">{featured.excerpt}</p>
              <NavLink
                to={`/blog/${featured.slug}`}
                className="group mt-6 inline-flex items-center text-emerald-400 font-semibold"
              >
                Read More <ArrowCta />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, idx) => (
            <article key={p.slug} className="group">
              <NavLink to={`/blog/${p.slug}`} className="block rounded-2xl overflow-hidden shadow-card bg-white">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={idx < 6 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-600 font-semibold">{p.date}</div>
                  <h3 className="mt-2 text-2xl font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-gray-700">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center text-emerald-600 font-semibold">
                    Read More <ArrowCta />
                  </div>
                </div>
              </NavLink>
            </article>
          ))}
        </div>

        {canShowMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setLimit((n) => Math.min(n + 6, rest.length))}
              className="px-8 py-3 rounded-full bg-navy-900 text-white hover:bg-navy-800 shadow-card"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
