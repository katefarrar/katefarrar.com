export default function DagsterAlerting() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl tracking-tight">
          Integrated Alerting in Dagster+
        </h1>
        <p className="text-xl text-gray-600">
          Designing alerts that are actionable, contextual, and trustworthy
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">Dagster+</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Scope</div>
          <div className="text-gray-600">
            Systems design, interaction design, cross-product integration
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Audience</div>
          <div className="text-gray-600">
            Data platform teams operating production pipelines
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Alerting is one of the most trust-sensitive capabilities in a data
          platform. When alerts lack context or interrupt users at the wrong
          time, they quickly become noise. When they fail, the cost is missed
          incidents and lost confidence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This work focused on designing alerting in Dagster+ as a{" "}
          <strong>cross-product system</strong>—spanning policy creation,
          in-product context, and Slack-based workflows—rather than a single
          destination or feature.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          As usage grew, alerting behavior became fragmented:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alert policies were configured in isolation</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alerts surfaced outside of users' primary workflows</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Slack notifications lacked sufficient context to act</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Noise reduced trust and caused alerts to be ignored</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The issue wasn't delivery—it was{" "}
          <strong>continuity across the system</strong>.
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Conceptual diagram
          <br />
          Fragmented vs. integrated alerting
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Objective</h2>
        <p className="text-gray-700 leading-relaxed">
          Design an alerting system that:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Treats alerts as part of everyday workflows</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Preserves context from configuration through action</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Balances visibility with interruption</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Integrates cleanly with tools like Slack</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Alerting needed to function as a <strong>system behavior</strong>, not
          a standalone page.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Solution</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Alert Policies as First-Class Concepts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Alert policies were designed to clearly communicate intent—what is
              monitored, when alerts fire, and where they are delivered—making
              configuration predictable and maintainable.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Alert policy creation UI
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Alerts Embedded in Product Context
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Instead of funneling alerts into a single alerts view, alerts were
              surfaced within relevant product surfaces such as assets and runs.
              This reduced context switching and made alerts actionable within
              ongoing work.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Alert surfaced alongside asset or run details
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Context-Preserving Slack Integration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Slack alerts carry forward meaningful context and deep links back
              into the product, supporting quick assessment without forcing
              users to reconstruct system state.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Slack alert with context and deep link
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Tradeoffs</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Noise vs. coverage:
            </span>
            <span>Fewer, higher-quality alerts over exhaustive monitoring</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Interruption vs. visibility:
            </span>
            <span>Alerts appear where they clarify, not distract</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Flexibility vs. predictability:
            </span>
            <span>Customization without obscuring behavior</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          These tradeoffs were surfaced intentionally to prevent alert fatigue.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p className="text-gray-700 leading-relaxed">
          By treating alerting as a cohesive product system, Dagster+ reduced
          fragmentation between configuration, runtime context, and response
          workflows. Alerts became easier to understand, easier to act on, and
          easier to trust.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alerting is fundamentally about human attention</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Context turns notifications into decisions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Cross-surface consistency builds long-term trust</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
