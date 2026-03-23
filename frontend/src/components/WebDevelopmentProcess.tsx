export default function WebDevelopmentProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by working closely with you to understand your business goals, target audience, and unique needs. This foundational step ensures that our web development strategy aligns perfectly with your objectives.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team of expert web designers will create a custom web design that accurately represents your brand and resonates with your target audience. We focus on creating visually appealing and user-friendly designs that enhance the user experience.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our team of expert web developers brings your website to life using the latest technologies and best practices. We ensure that your website is not only visually stunning but also highly functional and optimized for performance.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'We thoroughly test your website to ensure it is functioning properly and meets your unique needs and goals. This includes checking for responsiveness, usability, and performance across different devices and browsers.'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Once everything is perfect, we launch your website and provide ongoing support and maintenance to ensure it continues to drive real results for your business. Our commitment to your success doesn\'t end at launch; we are here to support you every step of the way.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" aria-hidden="true" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
            Web Development Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-5xl">
            A proven methodology that ensures your website is delivered on time, within budget, and exceeds expectations.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl font-bold border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
