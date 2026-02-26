import Link from "next/link";

const caseStudies = [
  {
    slug: "dagster-compass",
    title: "Compass",
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
    description: "Real-time incident detection and alerting",
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
    <div className="min-h-screen space-y-24">
      {/* Case Studies Section */}
      <section>
        <h1 className="font-notch text-4xl mb-12">Case Studies</h1>

        <div className="space-y-6">
          {caseStudies.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <div className="border border-gray-900 bg-white hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image area - half width */}
                  <div
                    className={`aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 group-hover:from-gray-100 group-hover:to-gray-300 transition-colors" />
                  </div>

                  {/* Content area - half width */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <h2 className="font-notch text-3xl md:text-4xl tracking-tight group-hover:underline">
                      {project.title}
                    </h2>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-sm text-gray-600">
                        View case study
                      </span>
                      <span className="text-gray-900">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Misc. Projects Section */}
      <section>
        <h2 className="font-notch text-3xl mb-10">Misc. Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miscProjects.map((project) => (
            <div
              key={project.name}
              className="border border-gray-900 bg-white hover:shadow-md transition-shadow"
            >
              {/* Smaller image area */}
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200" />
              </div>

              {/* Content area */}
              <div className="p-6 bg-white space-y-3">
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium tracking-wider">
                  {project.tag}
                </div>

                <h3 className="font-notch text-xl tracking-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {project.url && (
                  <div className="pt-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      View site →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
