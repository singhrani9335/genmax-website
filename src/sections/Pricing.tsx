const plans = [
  {
    name: "Basic",
    price: "₹",
    description: "Suitable for small businesses and startups.",
    features: ["Responsive Website", "Basic SEO", "Contact Form"],
  },
  {
    name: "Professional",
    price: "₹₹",
    description: "For businesses looking for a complete digital presence.",
    features: ["Advanced Website", "SEO Support", "Business Features"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for growing organizations.",
    features: ["Custom Development", "Advanced Features", "Dedicated Support"],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Choose Your Plan
          </h2>

          <p className="mt-4 text-gray-600">
            Flexible solutions for different business requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                index === 1
                  ? "border-blue-600 shadow-xl"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-4 text-3xl font-bold text-blue-600">
                {plan.price}
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                {plan.description}
              </p>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-700">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 block rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}