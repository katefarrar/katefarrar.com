import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Case Studies" };

const caseStudies = [
  {
    slug: "dagster-compass",
    title: "Compass",
    company: "Dagster",
    year: "2025 — present",
    description: "From vibe coded prototype to platform integration",
    image: "/compass-card.png",
    imageAlt: "Compass interface showing Slack integration with Dagster data platform",
    objectPosition: "object-top",
  },
  {
    slug: "dagster-alerting",
    title: "Dagster Alerting",
    company: "Dagster",
    year: "2024 — 2025",
    description:
      "Designing alerts that are actionable, contextual, and trustworthy",
    image: "/alerting-card.png",
    imageAlt: "Dagster+ alerting interface showing alert configuration and monitoring dashboard",
    objectPosition: "object-center",
  },
  {
    slug: "firehydrant-signals",
    title: "Signals",
    company: "FireHydrant",
    year: "2023 — 2024",
    description:
      "Alerting and on-call, rethought as part of incident management",
    image: "/signals-card.png",
    imageAlt: "FireHydrant Signals interface showing alert routing and incident management workflow",
    objectPosition: "object-top",
  },
];

const miscProjects = [
  {
    name: "Standby Coffee Techs",
    description:
      "Brand identity and e-commerce site for a vintage-inspired coffee service brand",
    url: "https://standbytechs.com",
    image: "/standby-logo.png",
    imageAlt: "Standby Coffee Techs logo featuring vintage-style coffee service branding",
  },
  {
    name: "Longmont Care Circle",
    description:
      "Branding and site for a community-oriented event and co-working space",
    url: "https://longmontcarecircle.com",
    image: "/lcc-logo.png",
    imageAlt: "Longmont Care Circle logo and branding",
  },
];

export default function Work() {
  return (
    <div className="space-y-20">
      <header className="pb-12 border-b border-gray-200 space-y-3">
        <h1 className="font-notch text-5xl lg:text-6xl tracking-tight">
          Case Studies
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Systems-level product design for complex technical platforms
        </p>
      </header>

      <div className="space-y-32">
        {caseStudies.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block cursor-pointer"
            aria-label={`View ${project.title} case study`}
          >
            <article className={`pt-8 ${index > 0 ? "border-t border-gray-200" : ""}`}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-5 flex flex-col justify-top space-y-6">
                  <div className="text-sm text-gray-500">
                    {project.company} · {project.year}
                  </div>

                  <h2 className="font-notch text-3xl lg:text-4xl tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-lg text-gray-800 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2 text-gray-900">
                    <span className="text-base font-medium">
                      View case study
                    </span>
                    <span aria-hidden="true" className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  {project.image ? (
                    <div className="aspect-[5/4] relative overflow-hidden bg-gray-100 border border-gray-200 rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        fill
                        className={`object-cover ${project.objectPosition || "object-top"}`}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[5/4] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 border border-gray-200" />
                  )}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {miscProjects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
              aria-label={`Visit ${project.name} website`}
            >
              <article className="border border-gray-300 rounded transition-all duration-300 bg-white overflow-hidden h-full">
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.name}
                      fill
                      className="object-contain p-16"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-500" />
                  )}
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
                    <span aria-hidden="true" className="text-base transform group-hover:translate-x-2 transition-transform duration-300">
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
