export default function BenefitsWithJSL() {
  const bullets = [
    {
      title: 'Custom Web Design',
      body:
        'We create a custom web design that accurately represents your brand and resonates with your target audience, ensuring your website stands out in the competitive Nairobi market.',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      body:
        'Our websites are optimized for search engines, driving organic traffic to your site and improving your online visibility.',
    },
    {
      title: 'Mobile‑Friendly Design',
      body:
        'We ensure your website is mobile‑friendly, providing a seamless user experience across all devices—crucial in today’s mobile‑first world.',
    },
    {
      title: 'User‑Friendly Navigation',
      body:
        'Our designs prioritize ease of navigation, helping visitors find information quickly and take action.',
    },
    {
      title: 'Expert Web Designers',
      body:
        'Our team collaborates closely with you to build a site that meets your unique needs and goals, leveraging deep technical expertise and creative skills.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-600">
            Benefits of Working
            <br />
            With Zurinty Marketing
          </h2>

          <p className="mt-6 text-gray-700">
            At Zurinty Marketing, we understand the importance of having a professional website that accurately represents
            your brand and resonates with your target audience. Our team delivers a customized solution that meets your
            unique needs and goals.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-navy-900">
            Some of the benefits of working with Zurinty Marketing include:
          </h3>

          <ul className="mt-4 space-y-4">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <div>
                  <div className="font-semibold text-navy-900">{b.title}</div>
                  <p className="text-gray-700">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="/assets/img/portfolio/aviance/8.png"
                alt="Digital strategy showcase"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="/assets/img/portfolio/aviance/9.png"
                alt="Web development project"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
