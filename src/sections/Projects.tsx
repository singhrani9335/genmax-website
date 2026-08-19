const projects = [
  {
    title: "Business Website",
    category: "Web Development",
    description:
      "Modern and responsive website developed for a growing business.",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    description:
      "Digital marketing solution focused on improving online presence.",
  },
  {
    title: "Custom Software",
    category: "Software Development",
    description:
      "Business-focused software solution designed around specific requirements.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Explore some of the solutions we create for our clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-48 items-center justify-center bg-slate-100">
                <span className="text-4xl font-bold text-blue-600">G</span>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}