export default function DagsterRBAC() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Custom RBAC
        </h1>
        <p className="text-xl text-gray-600">
          Custom Role-Based Access Control in Dagster+
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
          <div className="font-semibold text-gray-900">Audience</div>
          <div className="text-gray-600">
            Data platform teams building and running pipelines that require
            secure, fine-grained permissions
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full border border-gray-200"
            src="https://www.youtube.com/embed/7emyTeLZFcc"
            title="Dagster+ RBAC Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problem Space</h2>
        <p className="text-gray-700 leading-relaxed">
          As organizations scale how they use Dagster+, managing who can do what
          across a data platform becomes critical. Without flexible access
          control, teams face:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Too broad permissions (e.g., viewers can't be constrained beyond
              defaults)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Security risk from overly permissive roles</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Lack of alignment with organizational policy</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Difficulty modeling real team structures and duties</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Enterprise use cases (e.g., compliance, audit, regulated environments)
          require a way to define precise, meaningful access boundaries within
          the orchestration UI and workflows.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Objective</h2>
        <p className="text-gray-700 leading-relaxed">
          Design and deliver an RBAC system that enables:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">1.</span>
            <span>Defined, shareable access rules aligned with team roles</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">2.</span>
            <span>
              Custom roles beyond the built-in Viewer/Editor/Admin hierarchy
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">3.</span>
            <span>Easy creation and editing inside the UI</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">4.</span>
            <span>
              Transparency and control across deployments and code locations
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Ultimately, the UX must make security configuration accessible without
          overwhelming users with complexity.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Who Are the Users?</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                  User Type
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                  Goals
                </th>
                <th className="text-left py-3 font-semibold text-gray-900">
                  Pain Points
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Org Admin</td>
                <td className="py-3 pr-4">Define global security policies</td>
                <td className="py-3">Needs clarity and control across teams</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Team Lead</td>
                <td className="py-3 pr-4">
                  Assign access that matches team responsibilities
                </td>
                <td className="py-3">
                  Wants roles that map to real job functions
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Developer/Viewer</td>
                <td className="py-3 pr-4">
                  Do their work without unnecessary barriers
                </td>
                <td className="py-3">Confusing or poorly scoped permissions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">UX Challenges</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              1. Balancing simplicity and control
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users want granular permissions but not at the cost of
              overwhelming configuration screens.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Bridging role hierarchy with custom needs
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Must honor a logical role hierarchy (Org Admin → Admin → Editor →
              Viewer) while permitting bespoke roles suited to business
              operations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Making the system discoverable and manageable
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users need feedback when roles are applied, overridden, or
              conflict across teams and code locations.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Solution</h2>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Hierarchical Role Model + Custom Roles
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Dagster+ defines a clear role hierarchy:
        </p>
        <ul className="space-y-2 text-gray-700">
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
            <span>Launcher (Pro only)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Viewer</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Users can create custom roles by:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">1.</span>
            <span>Navigating to Organization Settings → Roles</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">2.</span>
            <span>Clicking "Create new role"</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">3.</span>
            <span>Naming, describing, and selecting permissions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">4.</span>
            <span>Choosing where the role applies (org or deployment)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">5.</span>
            <span>Basing off an existing role for ease</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This maintains consistent logic while offering customization.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Custom role creation interface"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">UI Interaction Flow</h2>
        <p className="text-gray-700 leading-relaxed">
          The workflow focuses on:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">1. Role Creation UI</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Friendly form with name, icon, description</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Checkbox list of permissions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Base role selector</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              This aligns with UX heuristics for progressive disclosure —
              starting from a known template and refining.
            </p>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Role creation form"
              className="w-full border border-gray-200 mt-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">2. Role Assignment UI</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Assign roles at deployment and — if on Pro plan — at code
                  location levels
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Overrides can grant more permissive access without removing
                  deploy-wide defaults
                </span>
              </li>
            </ul>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Role assignment interface"
              className="w-full border border-gray-200 mt-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Consistent Naming & Descriptions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Each permission and role includes clear terms and UI labels
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Reduces cognitive load when mapping features to business needs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Design Decisions & Rationale</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                  Decision
                </th>
                <th className="text-left py-3 font-semibold text-gray-900">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">
                  Hierarchical roles with custom extensions
                </td>
                <td className="py-3">
                  Preserves simplicity while accommodating complexity
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">UI-first role creation + editing</td>
                <td className="py-3">
                  Reduces reliance on code only (good for non-dev admins)
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">
                  Per-deployment & code-location roles
                </td>
                <td className="py-3">
                  Enables context-specific permissions for larger organizations
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Use of icons and descriptions</td>
                <td className="py-3">
                  Helps visually differentiate roles and supports faster
                  cognitive recognition
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          These choices balance flexibility and usability, helping ensure teams
          of varying sizes can adopt RBAC without a steep learning curve.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Outcomes & UX Benefits</h2>
        <p className="text-gray-700 leading-relaxed">
          The UX improvements aim to deliver:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              <strong>Higher precision in access controls</strong> — fewer
              unnecessary privileges
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              <strong>Reduced risk of accidental escalation</strong> — explicit
              role assignments
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              <strong>Faster role setup workflows</strong> — templated base
              roles simplify creation
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              <strong>Clearer visibility into who can do what</strong> —
              consistent UI feedback loops
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key UX Learnings</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              1. Start from Familiar Patterns
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users understand classic roles; extending these to custom roles
              lowers learning friction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">2. Context Matters</h3>
            <p className="text-gray-700 leading-relaxed">
              Providing both deployment-wide and code location-specific
              permissions gives flexibility without overcomplication.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">3. Feedback Builds Trust</h3>
            <p className="text-gray-700 leading-relaxed">
              Immediate visual confirmation of role application and overrides
              prevents confusion in complex org structures.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Dagster+'s Custom RBAC feature takes a robust security requirement and
          surfaces it in an approachable yet powerful UX. The system:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Blends standard roles and customizability</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Supports team and deployment complexity</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Provides clear UI guidance and control</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This UX strategy aligns with real organizational needs — from
          centralized compliance to distributed team autonomy.
        </p>
      </section>
    </div>
  );
}
