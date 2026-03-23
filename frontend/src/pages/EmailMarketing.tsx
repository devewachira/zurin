import { NavLink } from 'react-router-dom'

export default function EmailMarketing() {
  const campaigns = [
    'Welcome Sequences',
    'E‑Mail Follow‑Up Sequences',
    'Promotions for Product Releases',
    'Promotions for Upcoming Events',
    'E‑Blasts About Company or Industry News',
    'Advertisements for Sales or Promotions',
    'Weekly or Monthly Company Newsletters',
    'And So Much More!'
  ] as const

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/dr1.png" alt="Background" className="w-full h-full object-cover" />
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
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Email Marketing</h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              With an average ROI of 4,300%, email marketing is pretty much a no‑brainer when it comes to building out your overall
              marketing strategy. Whether you’re nurturing subscribers with a welcome sequence, promoting a product release, or
              keeping customers engaged with a monthly newsletter — we’ll help you create the perfect email campaign tailored to
              your company.
            </p>
            <div className="mt-8 flex gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Strategies That Work */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Email Marketing
              <br />
              Strategies That Work
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Maybe you’ve heard of email marketing, but you’re just not sure where to start. Or maybe you’ve already built up a
                healthy list, but you haven’t yet capitalized on the benefits that come with consistent, value‑driven email.
              </p>
              <p>
                Either way, you need a strategy and a plan you can actually keep up with. That’s where we come in — we’ll help you
                craft campaigns that your audience looks forward to opening.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 right-24 bg-emerald-500 w-24 h-24 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[520px] lg:ml-auto">
              <img src="/assets/img/portfolio/dr2.png" alt="Team planning email marketing" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </div>

      {/* Common Campaigns */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image left */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 left-24 bg-[#1b1f3a]/90 w-24 h-24 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[520px]">
              <img src="/assets/img/portfolio/01.png" alt="Email campaign examples" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>

          {/* List right */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Some Common Campaigns
              <br />
              That We Offer Include:
            </h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {campaigns.map((item) => (
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

      {/* Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              The Zurinty Email Marketing
              <br />Process
            </h3>
            <p className="mt-6 text-gray-700">
              Sequences, newsletters, and promos are great ways to let your subscribers know what’s new so they can take
              advantage of your latest products and services. We keep your brand top‑of‑mind and build trust with helpful,
              consistent communication — so when it’s time to buy, you’ll be the first one they call.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-emerald-500 w-28 h-28 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[520px] lg:ml-auto">
              <img src="/assets/img/portfolio/10.png" alt="Team reviewing email metrics" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            <img
              src="/assets/img/portfolio/1.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Are You Ready to Get the Most Out of Your Marketing Budget
                <br />While Still Making a Large Impact With Your Audience?
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
                If you’re interested in getting started with your own email marketing campaign, fill out the contact form and we’ll
                be in touch ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}