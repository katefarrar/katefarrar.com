import type { Metadata } from "next";

export const metadata: Metadata = { title: "Incident Declaration" };

export default function FireHydrantIncidentDeclaration() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Incident Declaration
        </h1>
        <p className="text-xl text-gray-600">
          Re-imagining the Incident Declaration experience in the web UI to
          provide a streamlined and improved experience.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">FireHydrant</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Lead Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Team</div>
          <div className="text-gray-600">Head of Product, Technical Lead</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Timeframe</div>
          <div className="text-gray-600">Dec 2022 - Feb 2023</div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The Problems</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Experience</h3>
          <p className="text-gray-700 leading-relaxed">
            One of the main value points of the product FireHydrant product is
            the ability to declare an incident in seconds. Early on, the
            majority of FireHydarnt's customers relied on our Slack app, but the
            ones that used the FireHydrant web UI had a feature limited
            experience. Additionally, if Slack experienced a disruption in
            service that meant teams needed a reliable web UI experience for
            incident declaration.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Business</h3>
          <p className="text-gray-700 leading-relaxed">
            As FireHydarnt's product offerings expanded, our team begin to
            observe that Enterprise companies were less likely to use Slack as
            their internal chat tool. This meant that they had to rely solely on
            the web UI for incident declaration. The poor user experience and
            lack of feature parity with Slack meant that improving the web UI
            was a top priority for the product.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Audit of current web experience
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Current incident declaration form experience on the web"
          className="w-full border border-gray-200"
        />
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Unclear path for users.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Required v. not required sections.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Help text is inconsistent and confusing.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Form is long and not conducive for taking quick action.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Challenges</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Improve experience without removing features or complexity
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Feature parity with current Slack experience</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Ability to choose an incident type</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Optimize user flow, IA, & layout</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Create a resolved incident</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Create reusable patterns for all forms that will be used across
              the product
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Research</h2>
        <p className="text-gray-700 leading-relaxed">
          Beginning with user interviews with customers and conversations with
          our Custom Success team, I created user personas to identify the key
          pain points that our users were experiencing. These also provided us
          with clear goals to validate our solutions against as we began to
          build.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="User personas based on role"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Gamedays</h2>
        <p className="text-gray-700 leading-relaxed">
          I participated in "Gamedays" alongside our engineering team which were
          simulated incidents walking through the entire incident declaration
          process. This allowed me to gain empathy for users and observe my
          teammates going through the incident declaration process.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Information Architecture</h2>
        <p className="text-gray-700 leading-relaxed">
          In order to identify the best way to display information in the form,
          I extracted out the different content blocks and identified their
          hierarchy.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Form content blocks"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Early Concepts + Prototypes</h2>
        <p className="text-gray-700 leading-relaxed">
          For early concepts, I made the decision to focus on lo-fidelity mock
          ups in order to center the user flow and journey. This allowed us to
          not be distracted by UI or visual elements and to move quickly with
          layouts and prototypes.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="First iteration of form content and wireframes"
          className="w-full border border-gray-200"
        />
        <img
          src="https://via.placeholder.com/600x400"
          alt="Second iteration form with user flow diagram"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Final Direction</h2>
        <p className="text-gray-700 leading-relaxed">
          After three rounds of iterations with the team, we settled on an
          experience that relied on modular content blocks. This solution
          allowed us to keep cognitive load low for the user, while also giving
          them the option to add additional complexity if they had that
          information.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Modular form content"
          className="w-full border border-gray-200"
        />
        <img
          src="https://via.placeholder.com/600x400"
          alt="Final user flow"
          className="w-full border border-gray-200"
        />
        <p className="text-gray-700 leading-relaxed">
          We also planned to redesign from of the UI and form components with
          this effort, but we wanted to first validate this concept before we
          moved on any further. We put together a very, rough lo-fi clickable
          prototype and did internal testing with users from all different parts
          of the company. The overall feedback was extremely positive.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Lo-fidelity clickable prototype for internal testing"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">User Testing</h2>
        <p className="text-gray-700 leading-relaxed">
          The next step was to translate the design into high fidelity
          prototypes with an improved UI that we could test with customers.
          Alongside our Head of Product, I conducted four user interview
          sessions with existing customers where they walked through the
          prototype with us and gave their feedback.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Active Incident Form (Left) | Resolved Incident Form (Right)"
          className="w-full border border-gray-200"
        />
        <img
          src="https://via.placeholder.com/600x400"
          alt="Incident Form in drawer"
          className="w-full border border-gray-200"
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">What worked</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Modularity + simplicity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Incident types</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">What didn't</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Drawer is confusing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Resolved incidents needs more thought + education</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">What needs improvement</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                Incident types need more explanation to work out of the box
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Admin experience around required fields</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Phased Rollout</h2>
        <p className="text-gray-700 leading-relaxed">
          Based on user feedback we decided to stick with the existing single
          page form view instead of a drawer. We opted for a phased rollout
          because we felt confident that this was going to be a huge improvement
          for users and wanted to be able to iterate quickly on this work and
          get this out to our users as soon as possible.
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-gray-700 leading-relaxed">
          "How can we phase out this work in order to bring more value to users
          quickly?
        </blockquote>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">Phase 1:</span>
            <span>Modular incident declaration form</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">Phase 2:</span>
            <span>Updated incident type form</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">Phase 3:</span>
            <span>Assign teams during incident declaration</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Release</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Product announcement post on FireHydrant's blog"
          className="w-full border border-gray-200"
        />
        <img
          src="https://via.placeholder.com/600x400"
          alt="Desktop Incident Form (Left) | Mobile Responsive Incident Form (Right)"
          className="w-full border border-gray-200"
        />

        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "We love how the form defaults to only required fields. It helps keeps
          cognitive load low."
          <footer className="text-sm text-gray-600 not-italic mt-2">
            — Engineering Leader at MLB
          </footer>
        </blockquote>

        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "Wow, this is a level up. When can we roll this out to all of our
          team?."
          <footer className="text-sm text-gray-600 not-italic mt-2">
            — Engineering Leader at Cruise
          </footer>
        </blockquote>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Updated UI</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Updated UI"
          className="w-full border border-gray-200"
        />
      </section>
    </div>
  );
}
