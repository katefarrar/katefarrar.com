import Link from "next/link";

const caseStudies = [
  {
    slug: "dagster-compass",
    title: "Compass",
    company: "Dagster",
    year: "2025 — present",
    description: "From vibe coded prototype to platform integration",
  },
  {
    slug: "dagster-alerting",
    title: "Dagster Alerting",
    company: "Dagster",
    year: "2024 — 2025",
    description:
      "Designing alerts that are actionable, contextual, and trustworthy",
  },
  {
    slug: "firehydrant-signals",
    title: "Signals",
    company: "FireHydrant",
    year: "2023 — 2024",
    description:
      "Alerting and on-call, rethought as part of incident management",
  },
];

const miscProjects = [
  {
    name: "Compass",
    description:
      "Branding, web, and marketing for a new Dagster product offering",
    url: "https://compass.dagster.io",
  },
  {
    name: "Standby Coffee Techs",
    description:
      "Brand identity and e-commerce site for a vintage-inspired coffee service brand",
    url: "https://standbytechs.com",
  },
  {
    name: "Longmont Care Circle",
    description:
      "Branding and site for a community-oriented event and co-working space",
    url: "https://longmontcarecircle.com",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen space-y-32">
      <header className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-notch text-5xl lg:text-6xl tracking-tight mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Systems-level product design for complex technical platforms
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {caseStudies.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block cursor-pointer"
          >
            <article className="border-2 border-gray-900 transition-all duration-300 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div
                  className={`aspect-[4/3] lg:aspect-auto bg-gray-50 overflow-hidden relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 transition-all duration-500" />
                  c{" "}
                </div>

                <div
                  className={`p-12 lg:p-16 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="text-sm text-gray-500 tracking-wide">
                    {project.company} · {project.year}
                  </div>

                  <h2 className="font-notch text-3xl lg:text-4xl tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 text-gray-900 transition-colors duration-300">
                    <span className="text-base font-medium">
                      View case study
                    </span>
                    <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <section className="pt-20 border-t border-gray-200">
        <header className="mb-12">
          <h2 className="font-notch text-3xl mb-4">Additional Work</h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Selected branding and front-end projects
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miscProjects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <article className="border-2 border-gray-900 transition-all duration-300 bg-white overflow-hidden h-full">
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-notch text-xl tracking-tight">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-gray-900 transition-colors duration-300">
                    <span className="text-sm font-medium">View site</span>
                    <span className="text-base transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
