import Link from "next/link";

const brandProjects = [
  {
    name: "Compass (Dagster)",
    description:
      "Branding & launch visuals for a Slack-native analytics product",
    details: [
      "Identity direction and visual system",
      "Marketing site visuals and illustrations",
      "Launch and announcement assets",
    ],
    url: "https://compass.dagster.io",
  },
  {
    name: "Standby Coffee Techs",
    description:
      "Brand identity for a vintage-inspired coffee equipment service brand",
    details: [
      "Logo and wordmark",
      "Color palette and typography",
      "Website design and merchandise concepts",
    ],
    url: "https://standbytechs.com",
  },
  {
    name: "Longmont Care Circle",
    description:
      "Brand and site for a community-oriented therapy and co-working space",
    details: [
      "Visual identity and symbol",
      "Website design",
      "Tone and accessibility considerations for a sensitive audience",
    ],
    url: "https://longmontcarecircle.com",
  },
  {
    name: "Dream Dog K9 Academy",
    description: "Brand identity for a dog training business",
    details: ["Logo and visual language", "Apparel and merchandise concepts"],
    url: null,
  },
];

export default function BrandSystems() {
  return (
    <div className="space-y-12">
      <h1 className="font-notch text-4xl font-medium tracking-tight">
        Brand Systems
      </h1>

      <div className="space-y-8">
        {brandProjects.map((project) => (
          <div
            key={project.name}
            className="p-6 border border-gray-200 space-y-4"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {project.name}
              </h2>
              <p className="text-gray-600 mt-1">{project.description}</p>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              {project.details.map((detail, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {project.url && (
              <div className="pt-2">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
                >
                  View site →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
