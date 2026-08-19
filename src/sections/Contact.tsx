export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mt-4 text-gray-600">
            Have a project in mind? Send us your requirements.
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-2xl space-y-5 rounded-2xl bg-white p-8 shadow-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <textarea
            placeholder="Tell us about your project"
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}