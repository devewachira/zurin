import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ContentMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyItems = [
    'Blogging',
    'Email Marketing',
    'E-book Creation',
    'Online Courses',
    'Webinars',
    'Videography',
    'Social Media Posts',
    'Podcasts',
    'Infographics',
    'And More!'
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/1.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#141a2a]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-white transition-colors group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </NavLink>
          </div>
          <div className="max-w-3xl">
            <div className="text-emerald-400 font-semibold">Essential Services</div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Content Marketing
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Having a content marketing strategy in place is critical. Great content informs, builds trust, and drives
              conversions—whether that’s blog posts, emails, social posts, videos, or downloadable guides.
            </p>
            <div className="mt-8 flex gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Content Is King */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              The Saying “Content Is King” Couldn’t Be More True
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                In today’s world, people don’t like being sold to—but they love learning from brands they trust. Strategic
                content helps you cut through the noise and reach your audience with value first.
              </p>
              <p>
                Old-school tactics like cold calls and generic advertising are the new white noise. To stand out, you need
                something different—consistent, helpful content designed to attract, educate, and convert.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[480px] mx-auto lg:ml-auto">
              <img src="/assets/img/portfolio/2.png" alt="Team creating content" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </div>

      {/* Enter JSL Marketing & Web Design */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute -top-6 right-28 bg-emerald-500 w-24 h-24 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[520px]">
                <img src="/assets/img/portfolio/3.png" alt="Content workshop" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                Enter, Zurinty Marketing & Web Design
              </h3>
              <p className="mt-6 text-gray-700">
                We handle the heavy lifting for your content strategy so you can focus on running your business. We’ll learn
                your goals, study your audience, and build a plan that aligns with your brand voice and growth targets.
              </p>
              <div className="mt-8">
                <div className="text-lg font-bold text-navy-900">Your Personal Content Marketing Strategy Might Include:</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {strategyItems.map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="font-semibold text-gray-900">{i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Heavy Hitters */}
      <div className="py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="text-base md:text-lg font-semibold text-gray-900 mb-4">The Heavy Hitters</div>
          <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-normal text-emerald-600 mb-6">
            Blogging and Copywriting
          </h3>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl leading-loose">
            Consistent, strategic blogging paired with compelling copy is the backbone of effective content marketing.
            It strengthens SEO, builds authority, and nurtures leads at every stage of the funnel.
          </p>
        </div>
      </div>

      {/* Blogging split section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 font-semibold">Blogging</div>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Strategic Blogging
                <br />
                + Content Creation
              </h2>
              <p className="mt-8 text-white/85">
                Through our blogging services at Zurinty Marketing and Web Design, we’ll help you develop SEO‑targeted blog posts
                that will really work for your business. We can write just one blog, but it’s usually best to keep the ball
                rolling once you’ve started.
              </p>
              <p className="mt-4 text-white/85">
                In fact, many of our clients choose to have us continually produce high‑quality content on a regular basis,
                which is great for their readers (and Google, too).
              </p>
              <p className="mt-4 text-white/85">
                Our talented team of writers has written for companies in many different industries, and chances are good that
                we’ve written for your industry as well.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-10 bg-gradient-to-br from-emerald-500 to-teal-600 w-44 h-40 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/img/portfolio/4.png"
                  alt="Blogging collaboration"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogging cards */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-x-0 top-0 h-72 bg-[#141a2a]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Blogging = Niche Authority</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Blogging is a crucial part of growing your business online. It’s a way that you can begin to establish yourself
                as a trustworthy authority within your niche, all while providing your customers and readers with relevant and
                useful information.
              </p>
              <NavLink to="/blog" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Visit Our Blog!
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Blogging + SEO = Success</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From an SEO standpoint, blogging about a relevant topic in an educational way—while using targeted keywords—can
                help you pull up in Google and other search engines over time. Basically, the more useful, relevant content
                you can have on your website, the better.
              </p>
              <NavLink to="/services/seo-strategy" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                More About SEO
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Copywriting split + checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 left-24 bg-emerald-500 w-28 h-28 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img
                src="/assets/img/portfolio/co1.png"
                alt="Typing on laptop"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-emerald-500 font-semibold">Copywriting</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Compelling Copywriting
              <br />
              for the Win
            </h2>
            <p className="mt-6 text-gray-700">
              There’s more to a brand than just the visual side. You need words to paint a picture just as much as you need a
              logo and a website. Your content will help set your brand’s tone of voice and personality.
            </p>
            <p className="mt-4 text-gray-700">
              The written word is extremely powerful. We can help you harness that power and put it to use in your business
              today through our highly effective copywriting services!
            </p>

            <div className="mt-10">
              <div className="text-xl font-extrabold text-navy-900">
                Some Copywriting Areas We Can Help You with Include:
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    'Long and Short Bios',
                    'Pamphlets and Brochures',
                    'Blog Posts and Articles',
                    'Social Media Copywriting',
                    'Press Releases',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="font-semibold text-gray-900">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    'Product Descriptions',
                    'White Papers',
                    'Print Newsletters and Ads',
                    'PPC Advertising Campaigns',
                    'Book Blurbs & Descriptions',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="font-semibold text-gray-900">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            {/* Background image */}
            <img
              src="/assets/img/portfolio/co2.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Jump Start Your Marketing Efforts
                <br />
                With an Effective Content Marketing
                <br className="hidden sm:block" />
                Strategy.
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
                Whether you’re looking for a full content strategy, or want to focus on blogging and/or copywriting, our team
                would love to help on your next big project. Give us a call at 855.944.1201 or fill out the form below to get
                started right away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ (short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: 'What types of content do you create?', a: 'Blogs, emails, ebooks, landing pages, social posts, scripts, and more—always built on strategy.' },
            { q: 'How do you measure results?', a: 'We track traffic, rankings, engagement, and assisted conversions with dashboards tied to your goals.' },
            { q: 'Can you match our brand voice?', a: 'Yes. We develop tone guidelines and provide samples/edits until it’s perfect.' },
            { q: 'Do you provide content strategy only?', a: 'We can deliver strategy, production, or full-service retainer based on your needs.' },
          ].map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="bg-gray-100 hover:bg-gray-200 rounded-2xl p-6 text-left transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-bold text-navy-900 text-lg pr-4">{faq.q}</h4>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {openFaq === idx ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    )}
                  </svg>
                </div>
              </div>
              {openFaq === idx && (
                <p className="mt-4 text-gray-700">{faq.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}