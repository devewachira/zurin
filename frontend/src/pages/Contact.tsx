import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Get a Free Consultation | Zurinty"
  }, [])
  const services = [
    'Website Design & Development',
    'Brand Development',
    'Search Engine Optimization',
    'Content Marketing',
    'Digital Marketing',
    'Photography & Video Production',
    'Email Marketing',
    'Paid Media & SEM',
    'Data Analytics',
    'Public Relations (PR)',
    'AI Automations',
    'Virtual Assistant',
  ] as const

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: Array.from(selected)
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
        setFormData({ firstName: '', lastName: '', email: '', phone: '' })
        setSelected(new Set())
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161b3d] to-[#1c214b] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-8">
            <NavLink
              to="/"
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
              Back to Home
            </NavLink>
          </div>
          <p className="text-emerald-400 font-semibold">Contact Us</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Have Questions About
            <br className="hidden md:block" />
            Any of Our Services?
          </h1>
          <p className="mt-6 max-w-3xl text-white/80">
            Want to chat about your marketing project? Get in touch with us today! Fill
            out the form below to request a free consultation, or give us a call.
          </p>
        </div>
      </section>

      {/* Video + Form */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Video */}
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-xl aspect-video">
            {/* Placeholder play icon */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-16 w-16 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white/90" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="h-12 rounded-md border border-gray-300 px-4"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="h-12 rounded-md border border-gray-300 px-4"
            placeholder="Last Name"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 rounded-md border border-gray-300 px-4"
            placeholder="Email"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-md border border-gray-300 px-4"
            placeholder="Phone"
          />

          {/* Services select */}
          <div className="md:col-span-2 mt-6">
            <p className="text-center text-xl font-semibold text-navy-900">Let Us Know What Services You’re Looking For!</p>
            <p className="mt-1 text-center text-sm text-gray-600">Select all that apply.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((label) => {
                const isOn = selected.has(label)
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggle(label)}
                    className={[
                      'rounded-xl px-4 py-6 text-center font-semibold shadow-sm transition',
                      'bg-gradient-to-b from-neutral-800 to-neutral-700 text-white',
                      'hover:from-neutral-700 hover:to-neutral-600 active:scale-[0.99]',
                      isOn ? 'ring-2 ring-emerald-400' : 'ring-1 ring-black/10',
                    ].join(' ')}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            <label className="mt-6 flex items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300" />
              <span>
                By checking this box, you confirm that you agree with our{' '}
                <a href="#" className="font-semibold text-emerald-600 hover:underline">privacy policy</a>.
              </span>
            </label>

            {status && (
              <div className={`mt-4 p-4 rounded-md text-center ${status.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white shadow hover:bg-emerald-600 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Started!'}
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Map */}
          <div className="w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
            <iframe
              title="Zurinty Nairobi Office"
              className="h-[450px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127640.7554559146!2d36.77274404018805!3d-1.3031124443903102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710100000000!5m2!1sen!2sus"
            />
          </div>

          {/* Copy + locations */}
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-500">No Matter Your
              <br /> Location, the Zurinty
              <br /> Team is Ready to Help
            </h2>
            <p className="mt-4 text-gray-600">
              If you have questions, comments, or want to learn more, reach out and we’ll
              get back with you quickly. We can’t wait to work with you.
            </p>

            {/* Primary contact details */}
            <ul className="mt-8 space-y-5 text-navy-900">
              <li className="flex items-start gap-3">
                <span className="text-2xl leading-none">📍</span>
                <span className="text-base">Mombasa Reinsurance Plaza Moi Avenue Box 90323-80100, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl leading-none">📞</span>
                <a href="tel:+254743573360" className="text-base font-semibold text-emerald-600 hover:underline">+254743573360</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl leading-none">✉️</span>
                <a href="mailto:DEV.WACHIR@GMAIL.COM" className="text-base font-semibold text-emerald-600 hover:underline">DEV.WACHIR@GMAIL.COM</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
