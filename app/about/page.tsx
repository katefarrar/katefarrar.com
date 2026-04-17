import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <div className="space-y-20">
      <header className="pb-12 border-b border-gray-200 space-y-3">
        <h1 className="font-notch text-5xl lg:text-6xl tracking-tight">
          About
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Designing reliable systems for complex technical products
        </p>
      </header>

      <div className="grid grid-cols-12 gap-x-0 lg:gap-x-12 gap-y-12">
        <div className="col-span-12 lg:col-span-7 space-y-7">
          <p className="text-lg leading-relaxed">
            I'm a product designer who's always enjoyed designing in code. I
            started my career doing creative and design work, spent a few years
            as a front-end developer, and came back to design with a different
            way of thinking about how products get built.
          </p>

          <p className="text-lg leading-relaxed">
            For most of my career I've focused on complex technical products —
            developer tools, data platforms, observability, incident management.
            The kind of software where the design challenge isn't what it looks
            like, it's how it behaves when something breaks.
          </p>

          <p className="text-lg leading-relaxed">
            I partner closely with engineering, product, and research teams to
            define product direction, navigate constraints, and design flexible
            systems that adapt as products grow. I care about thoughtful
            collaboration, inclusive teams, and building things people can rely
            on.
          </p>

          <p className="text-lg leading-relaxed">
            Currently at Dagster. Previously at FireHydrant, Elastic, Bonusly,
            &yet, and CauseLabs.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-12 space-y-12">
          <div className="space-y-6 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Experience</div>
              <div className="text-gray-600">20+ years in design and tech</div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">
                Specialties
              </div>
              <div className="text-gray-600">
                Developer tools, data platforms, technical products, systems
                design, AI products
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/kf-about.jpg"
                alt="Portrait of Kate Farrar"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              I'm always happy to chat.
            </p>
            <a
              href="mailto:kate.farrar@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-base font-medium"
            >
              Send me an email
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
