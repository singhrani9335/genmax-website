export default function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600">
            IT Solutions & Digital Services
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            We Build Digital
            <span className="block text-blue-600">
              Solutions That Grow
            </span>
            Your Business
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            GenMax IT Solution provides modern web development, software
            solutions, digital marketing, SEO and technology services.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-semibold text-white hover:bg-blue-700"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-center font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-blue-600 shadow-2xl sm:h-96 sm:w-96">
            <div className="text-center text-white">
              <div className="text-7xl font-bold">G</div>
              <p className="mt-3 text-lg font-semibold">
                GenMax IT Solution
              </p>
              <p className="mt-1 text-sm text-blue-100">
                Technology • Innovation • Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}