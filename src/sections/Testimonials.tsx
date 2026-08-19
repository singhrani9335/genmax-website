const testimonials = [
  {
    name: "Happy Client",
    role: "Business Owner",
    message:
      "The team understood our requirements and delivered a professional digital solution.",
  },
  {
    name: "Business Client",
    role: "Founder",
    message:
      "Great communication, reliable service and a smooth development experience.",
  },
  {
    name: "Satisfied Client",
    role: "Company Owner",
    message:
      "GenMax helped us improve our digital presence with a modern solution.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Feedback from businesses we have worked with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="text-xl text-blue-600">
                ★★★★★
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                “{testimonial.message}”
              </p>

              <div className="mt-7">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}