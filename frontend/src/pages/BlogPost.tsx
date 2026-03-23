import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BLOG_POSTS, getPostBySlug } from '../data/blog'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { setShow(true); io.disconnect(); break }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  )
}

export default function BlogPost() {
  const { slug = '' } = useParams()
  const post = useMemo(() => getPostBySlug(slug), [slug])

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Zurinty Blog`
    }
  }, [post])

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NavLink to="/blog" className="text-sm text-emerald-700">← Back to blog</NavLink>
        <h1 className="mt-6 text-3xl font-bold">Post not found</h1>
      </section>
    )
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0f1630] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="text-emerald-400 font-semibold">{post.date}</div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Featured image */}
      <div className="-mt-8 sm:-mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-600"><NavLink to="/blog" className="hover:text-gray-900">← Back to blog</NavLink></nav>
        <article className="prose prose-lg prose-emerald max-w-none mt-6">
          {post.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-emerald-600 font-extrabold">{s.heading}</h2>
              {s.body.map((p, idx) => (
                <p key={idx} className="text-gray-700">{p}</p>
              ))}
              {s.image && (
                <Reveal className="my-8">
                  <figure className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={s.image} alt={s.imageAlt ?? s.heading} className="w-full h-full object-cover" />
                  </figure>
                </Reveal>
              )}
            </div>
          ))}
        </article>

        {/* Subtle CTA */}
        <Reveal className="mt-12">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-brand-500 to-emerald-400 text-white shadow-card">
            <div className="font-semibold text-white/90">Ready to talk shop?</div>
            <p className="mt-1 text-white/90">Contact our team for a free consultation—let’s plan your next win.</p>
            <NavLink to="/contact" className="inline-flex mt-4 px-5 py-2 rounded-full bg-white text-navy-900 font-semibold hover:bg-white/90">Contact Us</NavLink>
          </div>
        </Reveal>
      </div>

      {/* Related posts */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold">Related articles</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <NavLink key={p.slug} to={`/blog/${p.slug}`} className="group block rounded-2xl overflow-hidden bg-white shadow-card">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-gray-600">{p.date}</div>
                  <div className="mt-1 font-semibold text-navy-900">{p.title}</div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
