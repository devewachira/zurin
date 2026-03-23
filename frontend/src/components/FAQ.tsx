import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export type FAQItem = { q: string; a: string }

const DEFAULTS: FAQItem[] = [
  { 
    q: 'What Does the Website Design Process Consist of and How Long Does it Take?', 
    a: 'Our process is designed for smooth delivery. We start with a discovery phase to understand your goals, followed by strategic design, development, and rigorous testing. Because all projects are customized, duration varies with scope, feedback, and approvals. Generally, projects take a few weeks to a few months.' 
  },
  { 
    q: 'What are some popular platforms for building websites?', 
    a: 'WordPress, Shopify, and Webflow are common choices. We specialize in custom development to ensure maximum performance, but we help you select the platform that best fits your business goals, required integrations, and budget.' 
  },
  { 
    q: 'How can I incorporate my brand identity into my website design?', 
    a: 'We use consistent colors and typography, place your logo strategically, and ensure imagery matches your brand voice. By highlighting your unique story and keeping styles consistent site-wide, we create a cohesive digital presence that resonates with your audience.' 
  },
]

export default function FAQ({ items = DEFAULTS }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            Common Inquiries
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Everything you need to know about our web design and development process.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i 
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/5' 
                  : 'border-gray-100 hover:border-emerald-200 hover:bg-gray-50/50'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === i ? 'text-emerald-600' : 'text-navy-900 group-hover:text-emerald-600'
                }`}>
                  {item.q}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-emerald-500' : 'text-gray-400'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
           <h3 className="text-xl font-bold text-navy-900 mb-2">Still have more questions?</h3>
           <p className="text-gray-500 mb-6 text-lg">We're here to help you build the perfect digital presence.</p>
           <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-emerald-600 font-black hover:text-emerald-700 text-lg group"
           >
             Contact Our Support Team
             <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </div>
    </section>
  )
}
