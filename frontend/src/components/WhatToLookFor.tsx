export default function WhatToLookFor() {
  const items: { title: string; body: string }[] = [
    {
      title: 'Customer Service',
      body:
        'Look for a web design company that offers excellent customer service, including ongoing support and maintenance to keep your website up‑to‑date and functional.',
    },
    {
      title: 'Custom Web Design',
      body:
        "A custom design that reflects your brand’s identity and values helps establish a strong online presence. Seek a partner that tailors solutions to your specific needs.",
    },
    {
      title: 'User Experience (UX)',
      body:
        'A good web design should prioritize user experience. Your site should be intuitive, user‑friendly, and optimized for search engines.',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      body:
        'An SEO‑optimized website improves visibility and drives more traffic. Choose a team that offers comprehensive SEO services.',
    },
    {
      title: 'Reviews and Testimonials',
      body:
        'Check online reviews and case studies to learn from other clients’ experiences. Positive feedback is a strong indicator of reliability and quality.',
    },
    {
      title: 'Internet Marketing Services',
      body:
        'Complementary services like content, social media, and paid acquisition help promote your site and reach your audience.',
    },
    {
      title: 'Experience and Expertise',
      body:
        'Find a company with proven experience designing for businesses like yours. Review portfolios to ensure they match your industry and goals.',
    },
    {
      title: 'E‑commerce Solutions',
      body:
        'If you sell online, ensure they can implement carts, payments, and secure checkout—optimized for conversion and performance.',
    },
    {
      title: 'Performance & Accessibility',
      body:
        'Fast load times and accessible interfaces are essential for SEO and usability. Expect Lighthouse‑driven performance and WCAG best practices.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-600">What To Look for in a Nairobi Web Design Company</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Choosing the right partner is a critical decision that can significantly impact your business’s online success.
          Here are key factors to consider when selecting a web design partner:
        </p>

        <div className="mt-10 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
