import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import VideoModal from './VideoModal'

interface ValueItem {
  title: string
  description: string
  videoTitle: string
  videoSrc?: string
}

const VALUES: ValueItem[] = [
  {
    title: 'Authenticity',
    description:
      "When you work with us, you can rest assured that every step of the process will be met with the utmost authenticity. We're true to our brand and our values, and we're also committed to bringing that same authenticity to your own brand.",
    videoTitle: 'Authenticity',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Positivity',
    description:
      "A positive attitude can go a long way, and we think it's one of the most important aspects of any working business relationship. Positivity is often a catalyst for creativity, and we are dedicated to maintaining a positive, happy working environment.",
    videoTitle: 'Positivity',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Transparency',
    description:
      'Communication is so huge when it comes to marketing, whether that be our communication with you — our client — or the way in which your brand communicates with your target audience. We aim to bring clarity to all aspects of the communication funnel.',
    videoTitle: 'Transparency',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Creativity',
    description:
      "Marketing is all about creativity, and we are passionate about finding new ways to bring extra creative flair to all of our projects. We are committed to doing everything with excellence and we won't stop until your project is perfect.",
    videoTitle: 'Creativity',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Integrity',
    description:
      'We are committed to bringing you the best possible results and strive to do everything with complete integrity and honesty. That’s one of the reasons why we love to work so closely with our clients during every step of our process.',
    videoTitle: 'Integrity',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
]

export default function CoreValues() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<ValueItem | null>(null)

  const onOpen = (item: ValueItem) => {
    setCurrent(item)
    setOpen(true)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-column layout replicating reference: first row 3 values; second row 2 values + CTA */}
        <div className="grid gap-12 lg:grid-cols-3">
          {VALUES.slice(0, 3).map((item) => (
            <ValueCard key={item.title} item={item} onOpen={() => onOpen(item)} />
          ))}

          {VALUES.slice(3, 5).map((item) => (
            <ValueCard key={item.title} item={item} onOpen={() => onOpen(item)} />
          ))}

          {/* CTA on the right column */}
          <aside className="card p-6 bg-gradient-to-br from-brand-500 to-emerald-600 text-white self-start">
            <h3 className="text-2xl font-bold tracking-tight">Get Ahead of the Competition</h3>
            <p className="mt-3 text-white/90">with Digital Marketing Experts You Can Trust.</p>
            <p className="mt-4 text-sm text-white/80">We have your back and are here for you in whatever capacity is necessary for you and your business.</p>
            <NavLink to="/contact" className="mt-6 inline-flex btn btn-outline-white btn-pill px-5 py-3">Schedule a Meeting</NavLink>
          </aside>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} title={current?.videoTitle} src={current?.videoSrc} />
    </section>
  )
}

function ValueCard({ item, onOpen }: { item: ValueItem; onOpen: () => void }) {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-gray-900">{item.title}</h4>
      <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">{item.description}</p>
      <button onClick={onOpen} className="mt-6 inline-flex items-center gap-3 group text-navy-900 font-semibold">
        <span className="relative inline-flex items-center justify-center h-11 w-11 rounded-full border-2 border-brand-300 group-hover:border-brand-500 transition">
          <span className="absolute inset-0 rounded-full bg-brand-500/10 group-hover:bg-brand-500/20" />
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-brand-600">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span>Watch “{item.videoTitle}” Video</span>
      </button>
    </div>
  )
}
