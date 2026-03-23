import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function PublicRelations() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyItems = [
    'Media Relations & Strategic Press Outreach',
    'Press Releases & Compelling Story Development',
    'Brand Messaging & Market Positioning',
    'Crisis Communication & Reputation Management',
    'Event Planning & Public Engagement',
    'Thought Leadership & Executive Visibility',
    'Social Media Public Relations Campaigns',
    'Influencer Relations & Strategic Partnerships',
    'Awards & Recognition Strategies',
    'Integrated Communications & Custom PR Solutions'
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/dr2.png" alt="Background" className="w-full h-full object-cover" />
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
              Public Relations
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Zurinty builds mutually beneficial relationships between organizations and their publics through strategic communication. We design tailored strategies that align brand goals with audience needs. Our process ensures meaningful engagement and long-term value for both sides.

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
              The Saying “Content Is King” Couldn’t Be More True in Public Relations
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
               In today’s media landscape, people don’t respond to overt selling—they respond to stories they trust. Strategic PR content helps your organization build credibility, strengthen relationships, and communicate value before asking for anything in return. Public relations is no longer just press releases; it’s about crafting narratives that resonate and position your brand as an authority.
              </p>
              <p>
               Old-school tactics like mass emailing or generic advertising are now just background noise. To stand out, you need consistent, meaningful content designed to engage, educate, and influence. Press articles, thought leadership pieces, case studies, and social insights all work together to shape perception and build lasting trust.
              </p>
              <p>
                By combining storytelling with data-driven insights, PR allows your brand to amplify its voice across media, social platforms, and internal communications. The goal isn’t just visibility—it’s influence: shaping how your audiences think, feel, and act toward your organization.

Effective PR transforms every communication into an opportunity to connect, inspire, and build loyalty. When your audience values your message, you don’t have to chase attention—it comes to you organically.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[480px] mx-auto lg:ml-auto">
              <img src="/assets/img/portfolio/01.png" alt="Team creating content" className="w-full h-full object-cover aspect-[3/4]" />
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
                <img src="/assets/img/portfolio/10.png" alt="Content workshop" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                IN, Zurinty Marketing & Web Design
              </h3>
              <p className="mt-6 text-gray-700">
               We anticipate, analyze and interpreting public opinion, attitudes and issues that might impact, for good or ill, the operations and plans of brands. We Research on a continuing basis, programs of action and communication to achieve the informed public understanding necessary to the success of a brand’s aims. We eventually Plan and implement the brand’s efforts to influence through conversations and storytelling techniques using earned media and owned media. Glass house PR helps companies articulate and deliver a winning corporate story to these key stake holder groups.
              </p>
              <div className="mt-8">
                <div className="text-lg font-bold text-navy-900">Our Public Relations & Strategic Communications Services:</div>
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
          <div className="text-base md:text-lg font-semibold text-gray-900 mb-4">Learn more</div>
          <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-normal text-emerald-600 mb-6">
           Public Relations That Shapes Perception
          </h3>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl leading-loose">
            Public relations is more than gaining attention—it is about shaping how your brand is seen, understood, and remembered. In a fast-moving media landscape, perception defines credibility, and credibility drives influence. Our approach to public relations is rooted in strategy, clarity, and purpose.
          </p>
          <p>
We work closely with brands to develop clear messaging and a strong narrative that aligns with their values, goals, and audience expectations. Through strategic media placement, targeted press outreach, and compelling storytelling, we ensure your brand appears in the right conversations, at the right time, and in the right platforms.
          </p>
          <p>
Beyond visibility, we focus on reputation-building and trust. From brand positioning and executive thought leadership to crisis communication and reputation management, we help safeguard and strengthen your public image. Every PR initiative is designed to reinforce authority, foster authentic connections, and support long-term brand growth.
          </p>
          <p>
            Our public relations strategies are not one-size-fits-all. They are tailored, data-informed, and built to evolve with your brand—delivering lasting impact, measurable credibility, and sustained influence in your industry.
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
               African Public Relations
                <br />
                + Global Narrative Building
              </h2>
              <p className="mt-8 text-white/85">
               As Africa continues to experience rapid urbanization, digital transformation, 
               and economic growth, public relations plays a critical role in shaping how the continent 
               is seen on the global stage. 
              </p>
              <p className="mt-4 text-white/85">
                PR practitioners are uniquely positioned to amplify Africa’s 
               voice by crafting narratives that reflect resilience, creativity, and opportunity. 
               
              </p>
              <p className="mt-4 text-white/85">
                By leveraging technology, data-driven insights, and ethical communication, 
               PR serves as a bridge between governments, businesses, and communities—driving meaningful 
               action, inspiring change, and building lasting trust across borders.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-10 bg-gradient-to-br from-emerald-500 to-teal-600 w-44 h-40 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/img/portfolio/1.png"
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
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Media Relations = Brand Credibility</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Media relations is a core element of effective public relations. It allows brands to establish credibility, 
                shape public perception, and build trust through third-party validation. By securing strategic media coverage and managing brand narratives, 
                PR positions businesses as authoritative voices within their industry while delivering timely, relevant, and impactful messages to the public.
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
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Media Relations + Storytelling = Influence</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
               Strong media relations combined with compelling storytelling allows brands to shape public perception and amplify their message. By pitching relevant stories to the right outlets and crafting narratives that resonate, PR practitioners can increase visibility, build credibility, 
               and position a brand as an authoritative voice in its industry. The more strategic and consistent your media engagement, the greater your influence over time.
              </p>
              <NavLink to="/services/seo-strategy" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                More About Media Relations
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
                src="/assets/img/portfolio/2.png"
                alt="Typing on laptop"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-emerald-500 font-semibold">Copywriting</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Crisis Communication


              <br />
              Protect Your Brand
            </h2>
            <p className="mt-6 text-gray-700">
              Crisis communication is about being prepared, staying transparent, and managing public perception during challenging situations. 
              With the right strategy, your brand can navigate uncertainty, maintain trust, and even emerge stronger.
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
                    'Crisis Response Planning & Protocols',
                    'Issue Anticipation & Scenario Planning',
                    'Reputation Risk Assessment & Audits',
                    'Media Statements, Press Briefings & Interviews',
                    '24/7 Crisis Monitoring & Intelligence',
                    'Legal & PR Alignment Support,'
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
                    'Social Media Monitoring & Crisis Management',
                    'Stakeholder & Community Communication',
                    'Internal Communication During Crises',
                    'Regulatory & Government Communication Support',
                    'Spokesperson & Executive Media Training',
                    'Crisis Training & Simulation Exercises',
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
              src="/assets/img/portfolio/3.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
               Strengthen Your Public Image
                <br />
                With a Strategic Public Relations 
                <br className="hidden sm:block" />
               Approach.
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
               Whether you need a comprehensive public relations strategy or targeted support for media engagement, crisis communication, or stakeholder relations, our team is ready to support your next initiative.

We work closely with organisations to develop clear, credible communication frameworks that build trust, protect reputation, and enhance public perception across all key audiences.Give us a call at 254743573360 or fill out the form below to get started right away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ (short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
  q: 'What public relations services do you offer?',
  a: 'We provide strategic PR support including media relations, reputation management, crisis communication, stakeholder engagement, and corporate communications.'
},
{
  q: 'How do you measure public relations success?',
  a: 'We evaluate media coverage quality, message accuracy, audience reach, sentiment analysis, stakeholder response, and reputation impact over time.'
},
{
  q: 'Do you work with organisations across different industries?',
  a: 'Yes. We support corporates, government institutions, NGOs, startups, and public figures across multiple sectors and African markets.'
},
{
  q: 'Can you manage crisis communication for our organisation?',
  a: 'Absolutely. We develop crisis response plans, manage media and public messaging, monitor sentiment, and support post-crisis reputation recovery.'
},
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
