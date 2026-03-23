import { NavLink } from 'react-router-dom'

export default function ServicesThreeStep() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-emerald-600 max-w-5xl">
          Working with Zurinty Is Easy, Efficient, and Exciting — And It All Starts with Our Proven Three‑Step Process:
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <div className="text-emerald-600 font-semibold">Step One</div>
              <h3 className="mt-2 text-2xl font-bold text-navy-900">Evaluate Your Brand</h3>
              <p className="mt-3 text-gray-700 max-w-xl">
                First, we get together with you and discuss your brand. In order to create a successful marketing campaign,
                website, or content, we need to get to know each other! This way you can have the utmost confidence in us and
                the rest of your project!
              </p>
            </div>
            <div>
              <div className="text-emerald-600 font-semibold">Step Three</div>
              <h3 className="mt-2 text-2xl font-bold text-navy-900">Customize Your Solution</h3>
              <p className="mt-3 text-gray-700 max-w-xl">
                After identifying your needs and checking in with you, we’ll start work on the solution! This could be new branding,
                a modern website, or upgraded SEO. Whatever it is, we are dedicated to implementing it so you see results!
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-emerald-600 font-semibold">Step Two</div>
              <h3 className="mt-2 text-2xl font-bold text-navy-900">Identify Your Needs</h3>
              <p className="mt-3 text-gray-700 max-w-xl">
                After our initial meeting, we’ll deep dive into your website, copy, or marketing to figure out what is going on and
                where things can improve. This lets us come up with the best solutions possible for your brand and your business!
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 shadow-xl">
              <h4 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                It’s simple, effective,
                <br />
                and customized just
                <br />
                for you.
              </h4>
              <p className="mt-4 text-white/90">
                Once these three steps are completed, it’s go time for us here at Zurinty! You can sit back, relax, and know that your
                brand is in good hands as we work tirelessly to bring you the best possible solution.
              </p>
              <NavLink to="/contact" className="mt-6 inline-flex items-center btn btn-outline-white btn-pill">
                Schedule A Meeting!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
