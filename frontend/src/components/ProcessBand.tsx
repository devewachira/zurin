export default function ProcessBand() {
  const steps = [
    { t: 'Discovery', d: 'Goals, audience, content, success metrics' },
    { t: 'Design', d: 'Wireframes, visual system, components' },
    { t: 'Build & Launch', d: 'Accessible, performant implementation' },
  ]
  return (
    <section className="py-16 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">We follow a proven web development process</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{s.t}</div>
              <div className="mt-2 text-white/80">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}