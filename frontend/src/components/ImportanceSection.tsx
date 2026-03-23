import { NavLink } from 'react-router-dom'

export default function ImportanceSection() {
  return (
<section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            The Importance of Web
            <span className="block text-brand-600">Design in Nairobi, Kenya</span>
          </h2>
          <p className="mt-4 text-gray-600">
            In Nairobi, Kenya, where the competition is fierce, having a professional website can be a key differentiator
            for businesses. It can help them stand out from the crowd, establish their brand identity, and communicate
            their unique value proposition. By investing in a high‑quality web design, businesses in Nairobi can improve
            their online visibility, drive more traffic to their website, and ultimately, achieve their business goals.
          </p>
          <p className="mt-4 text-gray-600">
            In today’s digital age, having a well‑designed website is crucial for businesses in Nairobi, Kenya. A professional
            website serves as a virtual storefront, reflecting your brand’s identity, values, and credibility. Effective
            web design is essential for attracting and retaining visitors, converting leads into customers, and driving
            business growth. A website that is visually appealing, user‑friendly, and optimized for search engines helps
            you stay ahead of the competition.
          </p>
        </div>
        <div className="relative z-0 md:ml-[-40px] mb-[-120px] md:mb-[-200px]">
          <img src="/assets/img/laptop.jpg" alt="Web design work" className="w-full rounded-2xl border object-cover object-center h-[380px] sm:h-[440px] md:h-[560px] lg:h-[620px] shadow-card" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 mt-8 md:mt-10 w-full rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-brand-600 to-emerald-400">
            <div className="grid md:grid-cols-[1fr_auto] items-center gap-6 p-8">
              <div className="text-white">
                <div className="text-xl font-semibold">A good web design can improve the user experience, making it easier for visitors to navigate and find the information they need.</div>
                <p className="mt-2 text-white/90 text-sm max-w-3xl">This, in turn, can lead to increased engagement, higher conversion rates, and ultimately, more sales. Moreover, a well‑designed website can help businesses build trust and credibility with their target audience, which is essential for establishing a strong brand reputation.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <NavLink to="/contact" className="btn btn-pill bg-white text-navy-900 hover:opacity-90">Hire Us!</NavLink>
                <NavLink to="/portfolio" className="btn btn-pill btn-outline-white">Our Work</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
