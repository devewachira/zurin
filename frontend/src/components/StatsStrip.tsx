export default function StatsStrip() {
  const stats = [
    { k: '95+', v: 'Lighthouse scores across core pages' },
    { k: '25%', v: 'Average SEO visibility improvement' },
    { k: '3–6 wks', v: 'Typical marketing site timeline' },
    { k: '10x', v: 'Avg. ROI from CRO improvements' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.k} className="rounded-2xl border bg-white p-6">
            <div className="text-3xl font-bold text-brand-700">{s.k}</div>
            <div className="mt-1 text-gray-600">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}