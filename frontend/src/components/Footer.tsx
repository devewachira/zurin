import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError(null)
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your connection.')
      console.error('Subscription error:', err);
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-[#0b1b2a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <NavLink to="/" className="flex items-center gap-2 mb-6">
              <img src="/assets/img/portfolio/logo/1.png" alt="Zurinty logo" className="h-14 w-auto object-contain" />
            </NavLink>
            <p className="text-gray-400 text-lg leading-relaxed">
              Based in Nairobi, Kenya, we're a full-service creative agency dedicated to helping brands stand out in the digital landscape through innovative design and strategic marketing.
            </p>
            <div className="mt-8 flex gap-4">
              {[
                { name: 'Facebook', href: '#facebook', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                )},
                { name: 'Twitter', href: '#twitter', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )},
                { name: 'Instagram', href: '#instagram', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                )},
                { name: 'TikTok', href: '#tiktok', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                )},
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500 hover:border-emerald-500 text-gray-400 hover:text-navy-900 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />
            
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <img src="/assets/img/mail.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold">Join Our Newsletter</h3>
            </div>
            <p className="text-gray-400 mb-6">Get the latest insights on design, marketing, and business growth delivered straight to your inbox.</p>
            
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-36 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-navy-900 font-bold px-6 rounded-full transition-colors duration-300 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Subscribing...</span>
                  </>
                ) : subscribed ? (
                  'Subscribed!'
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-emerald-400 text-sm font-medium animate-pulse flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thanks for subscribing! Check your inbox soon.
              </p>
            )}
            {error && (
              <p className="mt-3 text-red-400 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12">
          <div className="col-span-1">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><NavLink to="/services/website-design" className="hover:text-white transition-colors">Website Design</NavLink></li>
              <li><NavLink to="/services/brand-development" className="hover:text-white transition-colors">Branding</NavLink></li>
              <li><NavLink to="/services/seo-strategy" className="hover:text-white transition-colors">SEO Strategy</NavLink></li>
              <li><NavLink to="/services/photography-video" className="hover:text-white transition-colors">Video Production</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">All Services</NavLink></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><NavLink to="/about" className="hover:text-white transition-colors">Our Story</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-white transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Careers</NavLink></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:pl-10">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">📍</span>
                <span>Nairobi, Kenya<br />Kilimani Business Center</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">📞</span>
                <a href="tel:0743573360" className="hover:text-white transition-colors">0743-573-360</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">✉️</span>
                <a href="mailto:hello@zurinty.com" className="hover:text-white transition-colors">hello@zurinty.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Zurinty Marketing. All rights reserved. 
            <span className="hidden md:inline mx-2">|</span>
            Crafted with precision in Nairobi.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-emerald-500 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Credits</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
