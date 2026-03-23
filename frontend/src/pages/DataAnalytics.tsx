import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function DataAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyItems = [
    'Data Collection & Integration',
    'Data Cleaning & Preparation',
    'Data Analysis & Insights',
    'Dashboards & Visualization',
    'Predictive & Advanced Analytics',
   
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/2.png" alt="Background" className="w-full h-full object-cover" />
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
              Data Analytics
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Collect, analyze, and share impact data - faster, cheaper, and better.
              Zurinty’s AI-powered WhatsApp platform makes it easy for organizations and portfolios to capture real voices from the field and turn them into insights.
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
              Turn Your Data Into Decisions That Matter
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Your business already generates data. We help you make sense of it, uncover hidden insights, and turn numbers into clear, actionable strategies.
              </p>
              <p>
               Our data analytics service transforms raw data into dashboards, reports, and insights that help you grow smarter and faster—without needing a full in-house analytics team.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[480px] mx-auto lg:ml-auto">
              <img src="/assets/img/portfolio/3.png" alt="Team creating content" className="w-full h-full object-cover aspect-[3/4]" />
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
                <img src="/assets/img/portfolio/4.png" alt="Content workshop" className="w-full h-full object-cover aspect-[3/4]" />
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
                <div className="text-lg font-bold text-navy-900">What We Do:</div>
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
            Tools & Technologies
          </h3>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl leading-loose">
            We leverage a modern, enterprise-grade analytics stack to deliver scalable and high-performance solutions. Our expertise includes SQL, Python, and R for advanced data processing, statistical analysis, and modeling; Power BI, Tableau, and Looker for dynamic, insight-driven dashboards; Excel and Google Sheets for rapid analysis and stakeholder collaboration; and cloud-based data platforms to support secure, scalable, and future-ready analytics infrastructures.

If you want, I can also tailor this to sound more enterprise, startup-focused, or AI/ML-heavy depending on who you’re selling to.
          </p>
        </div>
      </div>

      {/* Blogging split section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 font-semibold">Data</div>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Data Analytics That Drives 
                <br />
                + Measurable Business Impact
              </h2>
              <p className="mt-8 text-white/85">
               Data analytics is more than reporting numbers—it’s about uncovering insights that directly influence growth, efficiency, and profitability. We help organizations transform complex datasets into clear intelligence that supports confident, strategic decision-making at every level of the business.
              </p>
              <p className="mt-4 text-white/85">
               Our analytics solutions are designed to scale with your data, integrate seamlessly with existing systems, and deliver insights that are timely, accurate, and actionable.
              </p>
              <p className="mt-4 text-white/85">
                We analyze operational, financial, marketing, and product data to identify performance gaps, optimization opportunities, and growth levers. Our insights help teams track KPIs, measure ROI, and align execution with business objectives.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-10 bg-gradient-to-br from-emerald-500 to-teal-600 w-44 h-40 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/img/portfolio/co1.png"
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
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Analytics Content = Industry Authority</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
               Publishing data-driven content is a powerful way to position your business as a trusted authority in analytics. By sharing insights, trends, case studies, and practical guidance, you demonstrate expertise while helping your audience better understand their data and make informed decisions.

Explore our analytics articles, insights, and best practices to see how data can drive real business impact.
              </p>
              <NavLink to="/blog" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Visit Our Insights Hub
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Analytics Content + SEO = Sustainable Growth</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From an SEO perspective, consistently publishing high-quality, analytics-focused content helps improve visibility in search engines over time. Educational articles built around relevant keywords—such as data analytics, business intelligence, dashboards, and predictive insights—attract qualified traffic and establish long-term search authority.

Simply put: the more valuable, relevant analytics content you publish, the stronger your online presence becomes.
              </p>
              <NavLink to="/services/seo-strategy" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Learn More About Our SEO & Data Strategy
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
                src="/assets/img/portfolio/co2.png"
                alt="Typing on laptop"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-emerald-500 font-semibold">Analytics Storytelling</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Data-Driven Messaging 
              <br />
             That Converts
            </h2>
            <p className="mt-6 text-gray-700">
              There’s more to data analytics than dashboards and numbers. The true value of analytics lies in how insights are communicated. Clear, compelling analytics storytelling transforms complex data into narratives that inform, persuade, and drive action.
            </p>
            <p className="mt-4 text-gray-700">
              Your insights deserve more than charts—they need context, clarity, and strategic messaging. We help you translate data into meaningful stories that align with your brand voice and speak directly to decision-makers.
            </p>

            <div className="mt-10">
              <div className="text-xl font-extrabold text-navy-900">
                Analytics Content & Communication We Support
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    'Executive summaries and insight reports',
                    'Data storytelling and narrative development',
                    'Dashboard annotations and insight explanations',
                    'Analytics blogs and thought leadership articles',
                    'Case studies and performance reports',
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
                    'White papers and research publications',
                    'Investor and stakeholder analytics presentations',
                    'Product and growth analytics documentation',
                    'Marketing and campaign performance insights',
                    'AI and predictive analytics explainers',
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
              src="/assets/img/portfolio/dr1.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Accelerate Your Business Decisions
                <br />
                With a Powerful Data Analytics Strategy
                <br className="hidden sm:block" />
                
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
                Whether you’re looking for a full-scale analytics strategy or want to focus on dashboards, reporting, and actionable insights, our team is ready to support your next data initiative. From data foundations to advanced analytics, we help you turn information into impact.

📞 Give us a call at +254743573360 or fill out the form below to start building a smarter, data-driven organization today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ (short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: 'What types of data do you collect and analyze?', a: 'We collect quantitative and qualitative data from sources like web analytics, CRM systems, social media, and sales platforms. Our analysis focuses on trends, patterns, and anomalies that impact business performance. We also integrate third-party and market data when relevant to provide a complete picture.' },
            { q: 'How do you measure results or success from your analytics?', a: 'We measure results using KPIs aligned with your business goals, such as conversion rates, engagement metrics, or revenue impact. Success is tracked through dashboards, regular reporting, and comparative analysis over time. We also identify actionable insights to continuously optimize performance.' },
            { q: 'Can you tailor insights to match our business objectives or KPIs?', a: 'Yes, we customize analytics to align directly with your specific goals, ensuring insights are actionable and relevant. We focus on metrics that influence decision-making and business outcomes. Reports and dashboards are designed to communicate these insights clearly to all stakeholders.' },
            { q: 'Do you provide analytics strategy only, or do you also execute data collection and reporting?', a: 'We offer both: full strategy development and hands-on execution, including data collection, integration, analysis, and reporting. You can choose a strategy-only engagement if you prefer to handle execution internally. Our goal is to ensure insights are practical, accurate, and actionable for your team.' },
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