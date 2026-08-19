const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites for businesses.",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions built around your business requirements.",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing strategies to increase your online visibility.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean and user-friendly interfaces designed for better experiences.",
  },
  {
    title: "SEO Services",
    description:
      "Search engine optimization to improve your website visibility.",
  },
  {
    title: "IT Consulting",
    description:
      "Technology consulting to help businesses make better digital decisions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600">
            Powerful technology solutions designed to help your business
            succeed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
                +
              </div>

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}