import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Mail, Phone, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ServicesMegaMenu from './ServicesMegaMenu'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
)

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-semibold transition flex items-center gap-1 ${
    isActive ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700 hover:bg-emerald-500/10 hover:text-emerald-600'
  }`

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll() // Initialize on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on navigation
  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
            : 'bg-white py-4'
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="relative h-10 sm:h-12 w-auto overflow-hidden">
                <img 
                  src="/assets/img/1.png" 
                  alt="Zurinty logo" 
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <NavLink to="/services" className={navLinkClass}>
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </NavLink>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ServicesMegaMenu onClose={() => setIsServicesOpen(false)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink to="/portfolio" className={navLinkClass}>
                Portfolio
              </NavLink>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end gap-0.5 border-r border-gray-200 pr-6">
                <a href="mailto:hello@zurinty.com" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-emerald-600 transition">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  hello@zurinty.com
                </a>
                <a href="tel:+254743573360" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-emerald-600 transition">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  +254 743 573 360
                </a>
              </div>
              <div className="flex items-center gap-4">
                <NavLink to="/contact" className="group relative overflow-hidden btn-primary rounded-full px-6 py-2.5 text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all">
                  <span className="relative z-10 flex items-center gap-2">
                    Get started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </NavLink>

                {/* Social Icons */}
                <div className="flex items-center gap-3 ml-2">
                  {[
                    { Icon: Facebook, href: '#facebook', label: 'Facebook' },
                    { Icon: Instagram, href: '#instagram', label: 'Instagram' },
                    { Icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
                    { Icon: Twitter, href: '#twitter', label: 'Twitter' },
                    { Icon: TikTokIcon, href: '#tiktok', label: 'TikTok' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                      aria-label={label}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] bg-navy-900/60 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[10001] w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <NavLink to="/" onClick={closeMenu}>
                    <img src="/assets/img/1.png" alt="Zurinty logo" className="h-10 w-auto object-contain" />
                  </NavLink>
                  <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-emerald-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                  <NavLink 
                    to="/" 
                    onClick={closeMenu}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl text-base font-bold transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Home
                  </NavLink>
                  
                  <div>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition ${isServicesOpen ? 'text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      Our Services
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50 rounded-xl mt-1"
                        >
                          <div className="py-2 px-4 space-y-1">
                            {[
                              { title: 'Website Design', to: '/services/website-design' },
                              { title: 'Brand Development', to: '/services/brand-development' },
                              { title: 'SEO Strategy', to: '/services/seo-strategy' },
                              { title: 'Digital Marketing', to: '/services/digital-marketing' },
                              { title: 'All Services', to: '/services' },
                            ].map((s) => (
                              <NavLink
                                key={s.to}
                                to={s.to}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600"
                              >
                                {s.title}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <NavLink 
                    to="/portfolio" 
                    onClick={closeMenu}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl text-base font-bold transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Portfolio
                  </NavLink>
                  <NavLink 
                    to="/blog" 
                    onClick={closeMenu}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl text-base font-bold transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Blog
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    onClick={closeMenu}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl text-base font-bold transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    onClick={closeMenu}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl text-base font-bold transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Contact
                  </NavLink>
                </nav>

                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div className="flex flex-col gap-3">
                    <a href="mailto:hello@zurinty.com" className="flex items-center gap-3 text-sm font-bold text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Mail className="w-4 h-4" />
                      </div>
                      hello@zurinty.com
                    </a>
                    <a href="tel:+254743573360" className="flex items-center gap-3 text-sm font-bold text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Phone className="w-4 h-4" />
                      </div>
                      +254 743 573 360
                    </a>
                  </div>
                  
                  {/* Mobile Social Icons */}
                  <div className="flex items-center gap-4">
                    {[
                      { Icon: Facebook, href: '#facebook', label: 'Facebook' },
                      { Icon: Instagram, href: '#instagram', label: 'Instagram' },
                      { Icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
                      { Icon: Twitter, href: '#twitter', label: 'Twitter' },
                      { Icon: TikTokIcon, href: '#tiktok', label: 'TikTok' },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>

                  <NavLink 
                    to="/contact" 
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20"
                  >
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
