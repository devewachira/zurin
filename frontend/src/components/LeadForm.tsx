import { useState } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    services: [] as string[]
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.company, // Reusing company field for 'phone' or similar if needed by backend model
          services: formData.services,
          message: formData.message
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '', services: [] })
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your connection.')
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mt-16">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold tracking-tight text-center">Take the First Step To Partner With The Last Nairobi Marketing Agency You’ll Ever Need</h3>
        
        {success ? (
          <div className="mt-8 p-6 bg-emerald-50 text-emerald-700 rounded-xl text-center border border-emerald-100">
            <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
            <p>Thank you for reaching out. We'll be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                required
                className="border rounded px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                placeholder="First name"
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
              />
              <input 
                required
                className="border rounded px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                placeholder="Last name"
                value={formData.lastName}
                onChange={e => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                required
                type="email" 
                className="border rounded px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                placeholder="Email address"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
              <input 
                className="border rounded px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                placeholder="Company / Phone"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-2">
              {['Website', 'Branding', 'SEO', 'Content', 'Ecommerce', 'Other'].map((t) => (
                <button 
                  key={t} 
                  type="button" 
                  onClick={() => toggleService(t)}
                  className={`px-3 py-2 rounded border text-sm transition-colors ${
                    formData.services.includes(t) 
                      ? 'bg-emerald-500 text-white border-emerald-500' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <textarea 
              className="border rounded px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
              rows={5} 
              placeholder="Tell us about your goals"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
            
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            
            <div className="text-center">
              <button 
                disabled={loading}
                className={`bg-[#0b1b2a] text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-500 transition-all duration-300 ${loading ? 'opacity-50' : ''}`}
                type="submit"
              >
                {loading ? 'Sending...' : 'Get in touch'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
