export default function DagsterAlerting() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Alerting
        </h1>
        <p className="text-xl text-gray-600">
          Enhancing Observability Through Effective Alerts in Dagster+
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
          <div className="font-semibold text-gray-900">Company</div>
          <div className="text-gray-600">Dagster Labs</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Timeframe</div>
          <div className="text-gray-600">Early 2025</div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full border border-gray-200"
            src="https://www.youtube.com/embed/ZraHQgjjU3o?start=361"
            title="Dagster+ Alerting Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problem Statement</h2>
        <p className="text-gray-700 leading-relaxed">
          Teams managing data platforms routinely encounter pipeline failures —
          it's not a question of if but when. Traditional observability tooling
          is often:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Fragmented and hard to configure</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Noisy or too broad</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Disconnected from developers' workflows</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Hard to trust and maintain</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Data engineers need meaningful, reliable, and actionable alerts to
          catch pipeline issues before stakeholders notice.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">User Research Insights</h2>
        <p className="text-gray-700 leading-relaxed">
          The project team identified core user pain points through qualitative
          feedback and product telemetry:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alerts that are too general lead to alert fatigue</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Lack of configuration granularity leads users to ignore or disable
              alerts
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Users want to manage alerts both via UI and source-controlled
              configs
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Users need context — not just a notification — to understand and
              act on failures quickly
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          These insights shaped a set of design principles centered on clarity,
          flexibility, trust, and contextual relevance.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Principles</h2>
        <p className="text-gray-700 leading-relaxed">
          Four guiding principles governed the alerting UX improvements:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              1. Simple, Flexible Configuration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Alerts should target only the failures users care about. Configs
              must avoid noise and focus attention on meaningful issues.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Clear & Actionable Notifications
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Notices should communicate what failed, why it failed, and how to
              fix it — with options for custom runbooks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Reliable & Trustworthy Alerts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users must trust that alerts will fire when configured — and be
              notified when an alert fails to be delivered.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">4. Context Everywhere</h3>
            <p className="text-gray-700 leading-relaxed">
              Alerts should appear not just in notification channels (Slack,
              email, PagerDuty) but throughout the product where relevant.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">UX Solutions</h2>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Configurable Alerts Interface
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The alerting experience now supports:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Fine-grained targeting (jobs, assets, locations)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Flaky failure filters (ignore known intermittent issues)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              UI + YAML config options (UI for quick tweaks; code for CI/CD
              workflows)
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This design respects both visual control and infrastructure-as-code
          workflows, accommodating different team preferences.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Configurable alerts interface"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Clear & Actionable Alerts</h2>
        <p className="text-gray-700 leading-relaxed">
          Alert messages were redesigned to include:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Failure details</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Stack trace</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Custom runbook links/instructions</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This reduces cognitive load during high-pressure troubleshooting.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Clear and actionable alert notifications"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Feedback & Trust Mechanisms</h2>
        <p className="text-gray-700 leading-relaxed">To build confidence:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Users can test alert configurations before activating them
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              If the delivery channel (e.g., Slack) is broken, the UI shows
              failed alert attempts
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This addresses the classic UX blind spot where users never know if
          their notification setup actually works.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Alert testing and trust mechanisms"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contextual Alert Surfacing</h2>
        <p className="text-gray-700 leading-relaxed">
          Instead of siloing alerts in external tools, the UX surfaces alert
          states throughout the Dagster UI so users can:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>See alert status inline with pipeline views</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Act on problems without context switching</span>
          </li>
        </ul>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Contextual alert surfacing in Dagster UI"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Outcomes</h2>
        <p className="text-gray-700 leading-relaxed">
          The UX improvements aim to deliver:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                  UX Metric
                </th>
                <th className="text-left py-3 font-semibold text-gray-900">
                  Expected Impact
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Alert relevance</td>
                <td className="py-3">Reduced noise and alert fatigue</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Response time</td>
                <td className="py-3">Faster incident resolution</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">User trust</td>
                <td className="py-3">More reliable observability experience</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Developer efficiency</td>
                <td className="py-3">
                  Fewer context switches and dual tooling
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          The new alerting system is positioned as a foundational upgrade to
          Dagster+ observability, with future plans to expand to SLA monitoring,
          health trends, and cost insights.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What's Next</h2>
        <p className="text-gray-700 leading-relaxed">
          The team plans further investments in observability UX:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Asset freshness SLAs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Platform health trends</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Cost monitoring across pipelines</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          These indicate a roadmap where observability becomes both proactive
          and predictive, not just reactive.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          This project reframed alerting from a technical notification system
          into a human-centered, context-rich observability experience —
          critical for data teams who depend on fast, reliable feedback loops.
          The combination of fine-tuned configuration, improved messaging, trust
          signals, and product-wide context marks a solid UX investment for
          operational tooling.
        </p>
      </section>
    </div>
  );
}
