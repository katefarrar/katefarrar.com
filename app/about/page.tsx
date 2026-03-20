import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-20">

      <header className="grid grid-cols-12 gap-8 pb-12 border-b border-gray-200">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-notch text-5xl lg:text-6xl tracking-tight mb-6">
            About
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Designing reliable systems for complex technical products
          </p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-x-12 gap-y-12">

        <div className="col-span-12 lg:col-span-7 space-y-7">

          <p className="text-lg leading-relaxed">
            I'm a Staff Product Designer at Dagster, where I design systems for data platforms and AI-driven tools. My work focuses on reliability, governance, and trust—the foundational qualities that make complex products work in production environments.
          </p>

          <p className="text-lg leading-relaxed">
            Before Dagster, I spent three years at FireHydrant designing alerting and incident management systems. Prior to that, I worked at Elastic building observability tools for technical teams.
          </p>

          <p className="text-lg leading-relaxed">
            I partner closely with engineering, product, and research teams to define product direction, navigate constraints, and design flexible systems that adapt as products grow. I care about thoughtful collaboration, inclusive teams, and building things people can rely on.
          </p>

          <p className="text-lg leading-relaxed">
            My approach prioritizes systems thinking over isolated features. I'm drawn to products where the design challenge isn't just "what should this look like," but "how should this behave predictably across hundreds of edge cases and integrate into existing workflows without breaking trust."
          </p>

          <div className="pt-8 border-t border-gray-200 mt-12">
            <h2 className="text-xl font-semibold mb-6">Currently exploring</h2>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>How AI changes data discovery and analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Design systems for governance at scale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Building trust into conversational interfaces</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-12 space-y-12">

          <div className="space-y-6 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Location</div>
              <div className="text-gray-600">Colorado</div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Experience</div>
              <div className="text-gray-600">10+ years in product design</div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Specialties</div>
              <div className="text-gray-600">
                Developer tools, data platforms, technical products, systems design, AI products
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/rosie-hugo.png"
                alt="Rosie and Hugo, two dogs"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              These are my dogs, Rosie and Hugo. They are, in fact, real live Muppets and provide crucial design feedback.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              I'm always happy to chat about design, technical products, or career opportunities.
            </p>
            <a
              href="mailto:kate.farrar@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-base font-medium"
            >
              Send me an email
              <span>→</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
