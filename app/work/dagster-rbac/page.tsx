import type { Metadata } from "next";

export const metadata: Metadata = { title: "Custom RBAC for Dagster+" };

export default function DagsterRBAC() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl tracking-tight">
          Custom RBAC for Dagster+
        </h1>
        <p className="text-xl text-gray-600">
          Designing flexible access control without sacrificing clarity or
          safety
        </p>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          As organizations scale their use of Dagster+, access control becomes a
          platform concern—not just a security feature. Custom RBAC enables
          teams to define precise, meaningful permissions that align with real
          organizational structures while remaining understandable and safe to
          operate.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Lead Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">Dagster+</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Audience</div>
          <div className="text-gray-600">
            Data platform teams operating at enterprise scale
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Primary challenge</div>
          <div className="text-gray-600">
            Balancing fine-grained control with usability in a system where
            mistakes carry real operational risk
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          RBAC overview
          <br />
          High-level screenshot or diagram showing roles, scopes, and
          assignments
          <br />
          Avoid showing a raw form as the hero
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Why RBAC is hard in data platforms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Role-based access control in data platforms is uniquely complex.
          Permissions must account for:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Shared infrastructure across teams</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Multiple deployments and environments</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Code locations with different ownership and risk profiles
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Overlapping responsibilities between platform teams and developers
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Overly simple models break down quickly. Overly flexible models become
          impossible to reason about. The design challenge is enabling scale{" "}
          <strong>
            without turning access control into a source of confusion or failure
          </strong>
          .
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Platform scope diagram
          <br />
          Organization → Deployment → Code location
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The core design problem</h2>
        <p className="text-gray-700 leading-relaxed">
          We needed to satisfy three competing constraints at once:
        </p>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold">1. Hierarchy is essential</h3>
            <p className="text-gray-700 leading-relaxed">
              Organizations need a clear permission ladder for governance and
              safety.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Reality isn't hierarchical
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Real teams don't map cleanly to Viewer / Editor / Admin roles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Understanding builds trust
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users must be able to answer: <em>Who can do what—and why?</em>
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          Any solution that optimized for only one of these constraints would
          fail at scale.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key system decisions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              1. Preserve a strict role hierarchy—with controlled extension
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dagster+ maintains a clear top-down role hierarchy:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Organization Admin</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Admin</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Editor</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Launcher (Pro)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Viewer</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Custom roles extend from these known baselines rather than
              replacing them. This preserves predictable inheritance and
              prevents unsafe configurations while still enabling customization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The result: flexibility without violating organizational
              guardrails.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Role hierarchy diagram
          <br />
          Show baseline roles with custom roles branching from them
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">
            2. Make permission scope explicit instead of implicit
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Permissions can apply at multiple levels:
          </p>
          <ul className="space-y-2 text-gray-700 mt-4">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Organization-wide</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Per deployment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Per code location (Pro)</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Rather than flattening these scopes, we made them explicit in the
            UI. Overrides layer on top of defaults instead of silently replacing
            them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This reduced accidental privilege escalation and made effective
            permissions easier to reason about.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Role assignment UI
          <br />
          Highlight visible scope and override indicators
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">
            3. Design for configuration by non-security experts
          </h3>
          <p className="text-gray-700 leading-relaxed">
            RBAC systems are often configured via code or IAM dashboards. We
            intentionally designed a <strong>UI-first experience</strong> so
            platform admins and team leads could:
          </p>
          <ul className="space-y-2 text-gray-700 mt-4">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Create and edit roles without writing config</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Understand the impact of changes immediately</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Audit and adjust permissions over time</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Security configuration became approachable without sacrificing
            power.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Custom role creation UI
          <br />
          Show role creation with base role selection and permissions
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Where complexity shows up—and how we handled it
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The hardest UX challenges emerged around:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Inheritance chains</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Overlapping scopes</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Understanding effective permissions</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Instead of hiding this complexity, the design focused on:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Clear naming and descriptions for every role and permission
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Immediate visual feedback when roles are applied or overridden
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Consistent patterns across creation, assignment, and review
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Users could always answer: <em>Why does this person have access?</em>
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Effective permissions or override state
          <br />
          Optional: show how overrides are surfaced
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Impact</h2>
        <p className="text-gray-700 leading-relaxed">
          Custom RBAC enabled Dagster+ to support:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Enterprise security and compliance requirements</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>More realistic team models without brittle workarounds</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Safer scaling of platform access across large organizations
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most importantly, it increased confidence that access control could
          evolve alongside the organization—without becoming fragile or opaque.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key learnings</h2>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Familiar structures reduce risk.</strong> Extending known
              roles lowers learning friction and prevents unsafe configurations.
            </p>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Scope clarity beats raw flexibility.</strong> Users trust
              systems they can reason about.
            </p>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed">
              <strong>
                Security UX is about preventing mistakes, not empowering edge
                cases.
              </strong>
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          Custom RBAC reinforced that good platform design isn't about
          maximizing options—it's about making the right decisions feel obvious
          and safe.
        </p>
      </section>
    </div>
  );
}
