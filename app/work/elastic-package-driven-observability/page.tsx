import type { Metadata } from "next";

export const metadata: Metadata = { title: "Package Driven Observability" };

export default function ElasticPackageDrivenObservability() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Package Driven Observability
        </h1>
        <p className="text-xl text-gray-600">
          Delivering holistic platform value during onboarding with
          integration-specific, ready-to-use features.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">Elastic Observability</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Lead Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Team</div>
          <div className="text-gray-600">
            Technical Lead, 3 Senior Engineers
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Timeframe</div>
          <div className="text-gray-600">2022</div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          In early 2022, my Technical Lead and I were tasked with finding a way
          to drive more users to the Observability platform during onboarding. I
          lead the project alongside an Engineering Technical Lead. We worked
          across the Observability organization as well as with the Elastic UI
          design system team to establish cohesion throughout the product. The
          following case study shows the end to end product design effort which
          resulted in a Saved Views feature being implemented in the
          Observability Logs solution.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Project overview"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Research Phase</h2>
        <p className="text-gray-700 leading-relaxed">
          Five hour-long user interviews were conducted with internal users,
          external users, and Solutions Architects using Zoom and Dovetail for
          synthesis.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Key Findings</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                Users need contextual data visualization without complex
                Dashboard setup
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Onboarding experience lacks coherence</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Different roles require different functionality</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>User expertise ranges widely</span>
            </li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Research insights"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Workshop</h2>
        <p className="text-gray-700 leading-relaxed">
          Facilitated session exploring four focus areas: user empathy, problem
          definition, solution ideation, and technical constraints. The central
          question: "How might we provide a way for users to see the data they
          are ingesting in context without having to set up Dashboards or
          complex filters?"
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Design workshop"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Development Phases</h2>
        <ol className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">1.</span>
            <span>Nginx Logs views</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">2.</span>
            <span>Index selection & data views with search</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">3.</span>
            <span>Metrics expansion</span>
          </li>
        </ol>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Development phases"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Stakeholder Response</h2>
        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "How soon can we get this functionality across Observability?"
          <footer className="text-sm text-gray-600 not-italic mt-2">
            — Product Lead
          </footer>
        </blockquote>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Final implementation"
          className="w-full border border-gray-200"
        />
      </section>
    </div>
  );
}
