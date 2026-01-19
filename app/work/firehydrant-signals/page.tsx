export default function FireHydrantSignals() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Signals
        </h1>
        <p className="text-xl text-gray-600">
          Alerting and on-call seamlessly incorporated into FireHydrant's
          incident management platform.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">Signals for FireHydrant</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Lead Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Team</div>
          <div className="text-gray-600">
            Head of Product, Technical Lead, Engineering Team, Senior Product
            Designer
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Timeframe</div>
          <div className="text-gray-600">Fall 2023 - Spring 2024</div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full border border-gray-200"
            src="https://www.youtube.com/embed/GdRIHOgRjEA"
            title="FireHydrant Signals Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The Goal</h2>
        <p className="text-gray-700 leading-relaxed">
          New product offering to add Alerting and On-Call functionality to the
          FireHydrant Incident Management platform.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          The problem with existing alerting tools
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Legacy alerting tools are misaligned with modern software
              practices
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Extremely expensive and have no material innovation for years
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Existing tools do nothing to help an on-call engineer triage an
              incident
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>No handoff into an integrated Incident Management tool</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Lack of policy enforcement for teams, schedules, and notifications
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Building a holistic user experience
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="From ring to retro - the complete user experience"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">User Personas</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="User personas for alerting and on-call"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Research</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Utilizing internal resources:
            </span>
            <span>
              Interviews and conversations with SME's on my team from Product,
              Engineering, CS, IT, and Marketing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              ChatGPT prompts:
            </span>
            <span>
              "Explain the different types of schedule rotations that PagerDuty
              allows users to configure."
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Competitive analysis:
            </span>
            <span>Deep dive into existing alerting + on-call tools.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Existing UX patterns:
            </span>
            <span>Looking outside of developer tools for inspiration.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Competitive analysis</h2>
        <p className="text-gray-700 leading-relaxed">
          How can we achieve feature parity while also improving the UX?
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Competitive analysis of existing alerting tools"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Existing UX patterns</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Restaurant industry</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Calendar apps</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Workflow builders</span>
          </li>
        </ul>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Inspiration from UX patterns outside developer tools"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Putting the pieces together</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Synthesizing research into design direction"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Breaking down complex technical problems
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Grocery Store Method:</strong> using common examples to
          simplify complex technical processes.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Original user story</h3>
            <p className="text-gray-700 leading-relaxed italic">
              "As a systems administrator, I want FireHydrant to automatically
              monitor CPU usage information for Kubernetes servers from DataDog
              and alert the relevant on-call engineer if thresholds are
              exceeded."
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Simplified user story</h3>
            <p className="text-gray-700 leading-relaxed italic">
              "As a store manager, I want the refrigerator system to
              automatically monitor stock levels and alert the relevant staff if
              supplies are below set thresholds."
            </p>
          </div>
        </div>

        <img
          src="https://via.placeholder.com/600x400"
          alt="Grocery store method visualization"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Defining the mental model</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Mental model for alerting system"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Event lifecycle</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Event lifecycle diagram"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Escalation Policies</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Escalation policies overview"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Alpha: escalation policies form
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Alpha version of escalation policies form"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Alpha: escalation policies view
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Alpha version of escalation policies list view"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Alpha feedback</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Assumption</h3>
            <p className="text-gray-700 leading-relaxed">
              Keep it simple. Display all escalation policy details in list
              view.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">User feedback</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Time between notifications is confusing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repeat / hand-off concepts aren't translating</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Hard to quickly scan escalation policy list</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Goal for Beta</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Clarity for intervals between notifications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Updated placeholder text for Repeat / hand-off</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Easier to scan list</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Notification intervals</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Notification intervals design"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Beta: Repeat / Hand off section
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Beta version of repeat and hand-off section"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Beta: Escalation Policy list view
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Beta version of escalation policy list"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Beta feedback</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Assumption</h3>
            <p className="text-gray-700 leading-relaxed">
              Developers can handle the complexity and are used to configuring
              things like this. Alert lifecycle is self explanatory.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Beta user feedback</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repeat / hand-off is STILL confusing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Need to visualize all these steps within the context of an
                  alert or incident
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Goal for GA</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Updated helper text for form</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Alert timeline</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          GA: Updated helper text in form
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="GA version with updated helper text"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          GA: Visualizing the alert lifecycle
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Alert lifecycle visualization - part 1"
          className="w-full border border-gray-200"
        />
        <img
          src="https://via.placeholder.com/600x400"
          alt="Alert lifecycle visualization - part 2"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Beta: Onboarding feedback</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Assumption</h3>
            <p className="text-gray-700 leading-relaxed">
              More flexibility / allow users to go at their own pace.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Beta user feedback</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Not sure where to start with getting set up</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Without a guided demo, it takes way too much time for the
                  users to understand the value
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">GA Goals</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Guided onboarding that demonstrates the value of the product
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Ability to test platform without configuring integrations or
                  inviting entire team to product
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Onboarding</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Onboarding overview"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Onboarding: Guided process</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Guided onboarding process"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Onboarding: Testing the platform
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Testing the platform without full setup"
          className="w-full border border-gray-200"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Measuring Success</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Sales</h3>
            <p className="text-gray-700 leading-relaxed">
              Quarter million in ARR closed in Beta.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Market fit</h3>
            <p className="text-gray-700 leading-relaxed">
              Two biggest competitors in the space launched similar offerings
              within weeks of the Signals release.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">User feedback</h3>
            <p className="text-gray-700 leading-relaxed">
              Overwhelmingly positive feedback from existing and new users
              during from Alpha through GA.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">User Feedback</h2>

        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "You fixed the most important piece by not tying alerts to incidents."
        </blockquote>

        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "This is going to save us so much money in user licenses."
        </blockquote>

        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 text-lg italic text-gray-700">
          "How soon can we switch to Signals?"
        </blockquote>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Reflections</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">See the whole picture.</h3>
            <p className="text-gray-700 leading-relaxed">
              You have to understand the complete problem if you're going to
              come up with a complete solution.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">You are here.</h3>
            <p className="text-gray-700 leading-relaxed">
              Don't get too far ahead of your team or your users. Validate while
              building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
