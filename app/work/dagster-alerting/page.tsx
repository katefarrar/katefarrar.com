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
            Systems design, interaction design, cross-surface integration
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
          This work focused on redesigning alerting in Dagster+ as a cohesive
          product system — spanning policy creation, state modeling, in-product
          visibility, and external delivery through Slack and email.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          As adoption grew, alerting behavior became fragmented:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Policies were configured in isolation</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Alerts were triggered on individual signals rather than meaningful
              state changes
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Notifications lacked sufficient context to act</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Slack and email delivery were disconnected from product surfaces
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alert fatigue reduced trust in the system</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The issue wasn't whether alerts fired. <br />
          It was whether they represented something users actually cared about.
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Problem illustration
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
            <span>Reduces noise without hiding real issues</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Maintains consistency across product, Slack, and email</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Alerting needed to function as system behavior — not a standalone
          page.
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
              Alert policies were designed to clearly communicate:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>What is being monitored</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>When alerts fire</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Where notifications are delivered</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Who owns response</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Configuration needed to feel predictable and transparent —
              especially in high-stakes production environments. As targeting
              needs grew more complex, we expanded alert policies from selecting
              assets by name to supporting dynamic targeting through selection
              syntax and saved views. This allowed teams to define alert scope
              based on logical groupings and system behavior rather than static
              identifiers. The goal was flexibility without sacrificing
              predictability.
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
              Alerts were surfaced directly within relevant product surfaces —
              such as asset and run views — rather than being confined to a
              dedicated alerts page.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This reduced context switching and allowed users to:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>See current health state</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Review recent events</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Understand impact</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Act immediately</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Alerting became part of the operational workflow, not an
              interruption outside it.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Alert surfaced alongside asset or run details
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              From Events to Health Status
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As we expanded alerting across product and external channels, we
              noticed a recurring issue: even well-configured alerts were firing
              too frequently.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Teams were being notified about individual events — retries,
              partial failures, transient warnings — that didn't always reflect
              meaningful system degradation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              The system was working as designed, but the model of "alert on
              every signal" was flawed.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We introduced asset health status as a consolidated state model
              that aggregates signals into meaningful transitions. Alerts could
              now fire on state changes — Healthy → Degraded → Failed — rather
              than on isolated events.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This reduced noise while increasing confidence in what alerts
              represent.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Asset health status model or asset UI showing health state
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Cross-Surface Delivery: Slack and Email
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Slack and email notifications carried forward the same
              health-based model used in the product UI.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Each notification included:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Current health state</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Relevant event context</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Clear ownership</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Deep links back into Dagster+</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              By aligning delivery channels with the same underlying system
              model, we ensured consistency across surfaces.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Users no longer had to reconstruct state from fragments — the
              system spoke the same language everywhere.
            </p>
          </div>

          <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            Slack + Email alert screenshots
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Tradeoffs</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-900">Noise vs. Coverage</p>
            <p className="text-gray-700 leading-relaxed">
              Alerting on every signal increases coverage but erodes trust. We
              prioritized meaningful state changes over exhaustive event
              reporting.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Flexibility vs. Predictability
            </p>
            <p className="text-gray-700 leading-relaxed">
              Customization remained possible, but policy behavior had to stay
              understandable at a glance.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Visibility vs. Interruption
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alerts were surfaced where they clarified operational context —
              not where they distracted from it.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p className="text-gray-700 leading-relaxed">
          By consolidating signals into health status and aligning policy
          configuration with consistent cross-surface delivery, alerting in
          Dagster+ became:
        </p>
        <ul className="space-y-2 text-gray-700 mt-3">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Easier to configure</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Easier to interpret</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Easier to act on</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>More trustworthy over time</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Rather than adding more alerts, we focused on making alerts represent
          something meaningful.
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
            <span>State changes are more actionable than raw events</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Consistency across surfaces builds long-term trust</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Systems thinking reduces noise without sacrificing awareness
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
