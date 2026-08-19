export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              About GenMax
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your Trusted Technology Partner
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              GenMax IT Solution is focused on providing modern and reliable
              technology solutions for businesses. We combine technology,
              creativity and business understanding to build digital solutions
              that help businesses grow.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From websites and software development to digital marketing and
              SEO, we help businesses build a strong and effective digital
              presence.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Work With Us
            </a>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-600">100+</p>
              <p className="mt-2 font-medium text-gray-700">
                Projects
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-600">50+</p>
              <p className="mt-2 font-medium text-gray-700">
                Happy Clients
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="mt-2 font-medium text-gray-700">
                Services
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="mt-2 font-medium text-gray-700">
                Support
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}