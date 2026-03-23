import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    slug: "dagster-compass",
    title: "Compass",
    company: "Dagster",
    year: "2025 — present",
    description: "From vibe coded prototype to platform integration",
    image: "/compass-card.png",
    imageAlt:
      "Compass interface showing Slack integration with Dagster data platform",
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
    imageAlt:
      "Dagster+ alerting interface showing alert configuration and monitoring dashboard",
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
    imageAlt:
      "FireHydrant Signals interface showing alert routing and incident management workflow",
    objectPosition: "object-top",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="flex items-center -mx-6">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h1 className="font-notch text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8">
            Designing for <span className="inline-block">clarity,</span>{" "}
            <span className="inline-block">trust,</span> and{" "}
            <span className="inline-block">scale</span>
          </h1>

          <div className="max-w-xl space-y-6">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-600">
              Staff Product Designer building complex systems for data platforms
              and technical tools
            </p>

            {/* <div className="pt-4">
              <a
                href="/work"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium tracking-tight"
              >
                View case studies
                <span className="text-xl">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="-mx-6">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="border-t border-gray-200 pt-12 space-y-20">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block cursor-pointer"
                aria-label={`View ${project.title} case study`}
              >
                <article className="pb-20 border-b border-gray-200 last:border-0 last:pb-0">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-5 flex flex-col justify-top space-y-6">
                      <div className="text-sm text-gray-500">
                        {project.company} · {project.year}
                      </div>

                      <h2 className="font-notch text-3xl lg:text-4xl tracking-tight leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-3 pt-2 text-gray-900">
                        <span className="text-base font-medium">
                          View case study
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-xl transform group-hover:translate-x-2 transition-transform duration-300"
                        >
                          →
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      {project.image ? (
                        <div className="aspect-[5/4] relative overflow-hidden bg-gray-100 border border-gray-200">
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
        </div>
      </div>
    </div>
  );
}
