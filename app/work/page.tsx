import Link from "next/link";

const workSections = [
  {
    company: "Dagster",
    projects: [
      { slug: "dagster-compass", title: "Compass" },
      { slug: "dagster-rbac", title: "RBAC" },
      { slug: "dagster-alerting", title: "Alerting" },
    ],
  },
  {
    company: "FireHydrant",
    projects: [
      { slug: "firehydrant-signals", title: "Signals" },
      {
        slug: "firehydrant-incident-declaration",
        title: "Incident Declaration",
      },
    ],
  },
  {
    company: "Elastic",
    projects: [
      {
        slug: "elastic-package-driven-observability",
        title: "Package-Driven Observability",
      },
    ],
  },
];

export default function Work() {
  return (
    <div className="space-y-12">
      <h1 className="font-notch text-4xl font-medium tracking-tight">Work</h1>

      {workSections.map((section) => (
        <section key={section.company} className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {section.company}
          </h2>
          <div className="space-y-3">
            {section.projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block p-6 border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <h3 className="text-lg font-medium">{project.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
