import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

type Message = {
  id: number
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
}

const KNOWLEDGE_BASE: { keywords: string[], answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    answer: "Hello and welcome to Zurinty Marketing & Web Design! I'm your digital assistant. How can I help you grow your brand today?"
  },
  {
    keywords: ['service', 'offer', 'what do you do', 'provide'],
    answer: "We are a full-service agency offering Website Design & Development, SEO Strategy, Brand Development, Content Marketing, Digital Marketing, Photography & Video Production, Email Marketing, Paid Media & SEM, Data Analytics, PR, AI Automations, and Virtual Assistant services."
  },
  {
    keywords: ['portfolio', 'work', 'projects', 'clients', 'examples'],
    answer: "We've worked with a diverse range of clients across industries like Dental Care (AR-51), Law (Law Firm), Fitness (Gym), Real Estate (Coastal Realty Group), and Food & Beverage (Savanna Coffee Roasters). Our expertise covers Branding, Web Design, Video, and Commercial Real Estate."
  },
  {
    keywords: ['location', 'where', 'place', 'nairobi', 'kenya', 'office', 'address'],
    answer: "Our main office is located at Mombasa Reinsurance Plaza, Moi Avenue, Nairobi, Kenya. We also operate from Kilimani Business Center."
  },
  {
    keywords: ['contact', 'call', 'email', 'phone', 'reach', 'get in touch'],
    answer: "You can reach our team at +254743573360 or email us at DEV.WACHIR@GMAIL.COM. We'd love to discuss your next project!"
  },
  {
    keywords: ['price', 'cost', 'how much', 'quote', 'rate'],
    answer: "Because every business is unique, our pricing is customized to your specific needs. I recommend booking a free 30-minute consultation or requesting a quote through our contact page for accurate pricing."
  },
  {
    keywords: ['who are you', 'about', 'company', 'founder', 'ceo', 'wachira'],
    answer: "Zurinty Marketing & Web Design was founded by Wachira (CEO). We are a Nairobi-based creative agency focused on building high-performance digital experiences with integrity and transparency."
  },
  {
    keywords: ['website', 'design', 'development', 'coding', 'build', 'web'],
    answer: "We specialize in high-converting, mobile-friendly websites. Our services include UI/UX design, custom development, and full-scale redesigns for brands like TEMBEA and AR-51."
  },
  {
    keywords: ['seo', 'search engine', 'google', 'ranking', 'visibility'],
    answer: "Our SEO services include technical audits, on-page optimization, and content strategy to ensure your brand ranks high on search engines like Google and stays ahead of the competition."
  },
  {
    keywords: ['ai', 'automation', 'chatbots', 'whatsapp', 'bot'],
    answer: "We help businesses scale with AI-powered solutions, including custom WhatsApp agents, intelligent customer service chatbots, and workflow automation to save you time and money."
  },
  {
    keywords: ['branding', 'logo', 'identity', 'design system'],
    answer: "We build cohesive brand identities including logo design, brand systems, and messaging. Notable projects include Harvest Kitchen & Bar and Verda Organics."
  }
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the Zurinty Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const findAnswer = (query: string) => {
    const q = query.toLowerCase()
    const match = KNOWLEDGE_BASE.find(k => k.keywords.some(key => q.includes(key)))
    
    if (match) {
      return match.answer
    }
    return "That's a great question! For detailed information on that, it's best to speak with our team directly."
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])
    const currentInput = input
    setInput('')
    setIsTyping(true)

    // Simulate bot delay
    setTimeout(() => {
      const botResponse = findAnswer(currentInput)
      const botMsg: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMsg])
      
      // If the question was complex/unrecognized, add a contact prompt
      if (botResponse.includes("speak with our team directly")) {
        setMessages(prev => [...prev, {
          id: Date.now() + 2,
          text: "Would you like to visit our contact page or schedule a consultation?",
          sender: 'bot',
          timestamp: new Date()
        }])
      }
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all transform scale-100 opacity-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-navy-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-navy-900">Z</div>
              <div>
                <div className="font-bold text-sm">Zurinty Assistant</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Always Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.sender === 'user' 
                    ? 'bg-emerald-500 text-white rounded-br-none shadow-md' 
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                }`}>
                  {m.text}
                  {m.text.includes("contact page") && (
                    <div className="mt-3 space-y-2">
                      <NavLink 
                        to="/contact" 
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-navy-900 text-white py-2 rounded-lg hover:bg-navy-800 transition text-xs font-bold"
                      >
                        Go to Contact Page
                      </NavLink>
                      <NavLink 
                        to="/" 
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => {
                             window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                          }, 100);
                        }}
                        className="block text-center bg-emerald-50 text-emerald-700 py-2 rounded-lg hover:bg-emerald-100 transition text-xs font-bold border border-emerald-200"
                      >
                        Book Consultation
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
            <button 
              onClick={handleSend}
              className="bg-emerald-500 text-white p-2 rounded-xl hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 active:scale-95 group relative"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  )
}
