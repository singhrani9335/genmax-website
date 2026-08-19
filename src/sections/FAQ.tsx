const faqs = [
  {
    question: "What services does GenMax IT Solution provide?",
    answer:
      "We provide web development, software development, digital marketing, SEO, UI/UX design and IT consulting services.",
  },
  {
    question: "Can you build a custom website?",
    answer:
      "Yes. We create custom, responsive and modern websites based on your business requirements and goals.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We provide website maintenance and technical support according to the project's requirements.",
  },
  {
    question: "How can I start a project?",
    answer:
      "You can contact our team through the contact section and share your project requirements with us.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The development time depends on the size, features and requirements of the project. After understanding your requirements, we can provide an estimated timeline.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Find answers to some of the most common questions about our
            services and development process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                <span>{faq.question}</span>

                <span className="text-xl font-normal text-blue-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-gray-100 pt-4 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}