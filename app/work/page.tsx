import Link from "next/link";

const caseStudies = [
  {
    slug: "dagster-compass",
    title: "Conversational Analytics with Compass",
    company: "Dagster",
    year: "2025",
    description: "Bringing AI-powered data analysis natively to Slack",
    tag: "WEB APP",
  },
  {
    slug: "dagster-alerting",
    title: "Integrated Alerting in Dagster+",
    company: "Dagster",
    year: "2024",
    description:
      "Designing alerts that are actionable, contextual, and trustworthy",
    tag: "WEB APP",
  },
  {
    slug: "firehydrant-signals",
    title: "Signals for FireHydrant",
    company: "FireHydrant",
    year: "2023",
    description:
      "Real-time alerting seamlessly integrated into incident response",
    tag: "WEB APP",
  },
];

const miscProjects = [
  {
    name: "Compass (Dagster)",
    description:
      "Branding & launch visuals for a Slack-native analytics product",
    url: "https://compass.dagster.io",
    tag: "BRANDING",
  },
  {
    name: "FireHydrant",
    description:
      "Product design system and marketing for an end to end Incident Management platform",
    url: "https://firehydrant.com",
    tag: "BRANDING",
  },
  {
    name: "Standby Coffee Techs",
    description:
      "Brand identity for a vintage-inspired coffee equipment service brand",
    url: "https://standbytechs.com",
    tag: "BRANDING",
  },
  {
    name: "Longmont Care Circle",
    description:
      "Brand and site for a community-oriented therapy and co-working space",
    url: "https://longmontcarecircle.com",
    tag: "BRANDING",
  },
  {
    name: "Dream Dog K9 Academy",
    description: "Brand identity for a dog training business",
    url: null,
    tag: "BRANDING",
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
            className="group block"
          >
            <article className="border-2 border-gray-900 hover:border-teal hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">

                <div
                  className={`aspect-[4/3] lg:aspect-auto bg-gray-50 overflow-hidden relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 group-hover:from-gray-100 group-hover:via-gray-200 group-hover:to-gray-300 transition-all duration-500" />

                  <div className="absolute top-6 left-6 px-4 py-2 bg-black text-white text-xs font-medium tracking-wider">
                    {project.tag}
                  </div>
                </div>

                <div
                  className={`p-12 lg:p-16 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="text-sm text-gray-400 tracking-wide">
                    {project.company} · {project.year}
                  </div>

                  <h2 className="font-notch text-3xl lg:text-4xl tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 text-gray-900 group-hover:text-teal transition-colors duration-300">
                    <span className="text-base font-medium">View case study</span>
                    <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
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
            Selected branding and marketing projects
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miscProjects.map((project) => (
            <article
              key={project.name}
              className="border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 bg-white group"
            >
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 group-hover:from-gray-100 group-hover:to-gray-300 transition-all duration-400" />
              </div>

              <div className="p-6 space-y-4">
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium tracking-wider">
                  {project.tag}
                </div>

                <h3 className="font-notch text-xl tracking-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {project.url && (
                  <div className="pt-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-teal transition-colors duration-200"
                    >
                      View site →
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
