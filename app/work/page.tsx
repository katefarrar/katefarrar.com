import Link from "next/link";

const projects = [
  {
    slug: "dagster-compass",
    title: "Compass",
    company: "Dagster",
    year: "2025",
    description: "AI-powered data catalog for modern data teams",
  },
  {
    slug: "dagster-alerting",
    title: "Integrated Alerting in Dagster+",
    company: "Dagster",
    year: "2024",
    description:
      "Designing alerts that are actionable, contextual, and trustworthy",
  },
  {
    slug: "firehydrant-signals",
    title: "Signals for FireHydrant",
    company: "FireHydrant",
    year: "2023",
    description: "Real-time incident detection and alerting",
  },
  // {
  //   title: "Status Pages",
  //   company: "FireHydrant",
  //   year: "2023",
  //   description: "Real-time incident detection and alerting",
  // },
  // {
  //   title: "Incident Declaration",
  //   company: "FireHydrant",
  //   year: "2022-2023",
  //   description: "Real-time incident detection and alerting",
  // },
  // {
  //   title: "Incident Declaration",
  //   company: "FireHydrant",
  //   year: "2022-2023",
  //   description: "Real-time incident detection and alerting",
  // },
];

export default function Work() {
  return (
    <div className="min-h-screen">
      <h1 className="font-notch text-4xl mb-16">Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group"
          >
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gray-100 border border-gray-900 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 group-hover:from-gray-100 group-hover:to-gray-300 transition-colors" />
            </div>

            {/* Project info */}
            <div className="space-y-2">
              <div className="flex items-baseline justify-between text-sm text-gray-600">
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="font-notch text-xl group-hover:underline">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
