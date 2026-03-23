type Testimonial = { quote: string; author: string; role: string }

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'They moved fast without sacrificing quality. Our marketing site finally reflects our brand and converts.',
    author: 'Sarah K.',
    role: 'VP Marketing, Acme Inc.',
  },
  {
    quote:
      'The new frontend is blazing fast and accessible. The team was a pleasure to work with.',
    author: 'James P.',
    role: 'Head of Product, Nova',
  },
  {
    quote:
      'Clear process, excellent communication, and real results. Highly recommended.',
    author: 'Lina G.',
    role: 'Founder, Finch Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">What clients say</h2>
        <p className="mt-2 text-gray-600">Partnerships that deliver impact.</p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li key={t.author} className="p-6 rounded-2xl border bg-white shadow-sm">
            <p className="text-gray-800">“{t.quote}”</p>
            <div className="mt-4 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{t.author}</span> · {t.role}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
