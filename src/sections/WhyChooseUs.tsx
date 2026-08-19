const reasons = [
  {
    title: "Experienced Team",
    description:
      "Our team combines technical knowledge with practical business understanding.",
  },
  {
    title: "Quality Solutions",
    description:
      "We focus on building reliable, scalable and user-friendly digital solutions.",
  },
  {
    title: "Client Focused",
    description:
      "Every project is planned around the client's goals and requirements.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We follow an organized development process to deliver projects efficiently.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Why Businesses Choose GenMax
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We combine technology, creativity and reliability to deliver
            solutions that create real business value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}