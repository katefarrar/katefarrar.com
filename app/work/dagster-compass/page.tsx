export default function DagsterCompass() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-notch text-4xl font-medium tracking-tight">
          Compass
        </h1>
        <p className="text-xl text-gray-600">
          Designing conversational analytics without breaking trust or
          governance
        </p>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          Compass is a Slack-native analytics assistant that enables teams to
          ask real business questions in natural language and explore answers
          collaboratively—without dashboards, tickets, or SQL.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The core challenge was not "how to answer questions," but how to make
          conversational analytics{" "}
          <strong>reliable, governable, and safe to use at scale</strong>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold text-gray-900">Role</div>
          <div className="text-gray-600">Product Designer</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Product</div>
          <div className="text-gray-600">Dagster / Dagster+</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Audience</div>
          <div className="text-gray-600">
            Data teams and cross-functional business partners
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Compass hero
          <br />
          Slack screenshot showing a real question → result → follow-up
          <br />
          Should feel grounded and work-in-progress, not marketing
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Most organizations want data to be more accessible, but the tools they
          rely on are rigid.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dashboards answer predefined questions. Ad-hoc requests create queues
          and gatekeepers. Meanwhile, business context lives in Slack—separate
          from where answers are produced.
        </p>
        <p className="text-gray-700 leading-relaxed">As a result:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Analysts become bottlenecks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Business users hesitate to explore data</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Context gets lost between question, answer, and action</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Trust erodes when assumptions aren't visible</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The opportunity with Compass was to treat analytics as a{" "}
          <strong>conversation</strong>, not a report.
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Conceptual contrast
          <br />
          Dashboards & ticket queues vs conversational exploration in Slack
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What made this problem hard</h2>
        <p className="text-gray-700 leading-relaxed">
          Conversational analytics introduces difficult system questions
          quickly:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>How do you prevent confident but incorrect answers?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              How do you respect governance without recreating dashboards?
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>How do you preserve context across follow-ups?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              How do you make exploration feel safe for non-technical users?
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          The risk wasn't just a poor UX.
          <br />
          It was building a tool people <strong>wouldn't trust</strong>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core design principles</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              Meet users where work already happens
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Compass lives in Slack because that's where questions naturally
              arise. Designing inside an existing workflow reduced adoption
              friction—but required extreme care around clarity, tone, and
              interruption.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Conversation, not one-shot queries
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Compass supports follow-ups and refinement:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>"What about last quarter?"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>"Can you break that down by region?"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>"Why did that change?"</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This required treating context as a first-class design problem.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Governed answers by default
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Exploration only works if teams trust the results. Compass was
              designed to respect existing data definitions, sources, and access
              controls rather than bypass them.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Slack thread with initial question + follow-up
          <br />
          Emphasize continuity and shared context
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key design decisions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              1. Natural language as the interface—with guardrails
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Natural language lowers the barrier to entry, but increases
              ambiguity. Compass was intentionally designed to:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Ask clarifying questions when needed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Surface uncertainty instead of guessing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Favor correctness over speed in edge cases</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This reduced overconfidence and misuse.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Shared context over private answers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Answers appear in shared Slack threads rather than private
              dashboards. This makes assumptions visible, encourages alignment,
              and turns insights into team artifacts instead of one-off results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Clear boundaries between exploration and truth
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Compass supports exploration—not canonical reporting. We were
              deliberate about:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Not positioning Compass as a replacement for core BI</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>
                  Framing it as a tool for investigation and sense-making
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Keeping analysts and data teams in the loop</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This boundary was critical for long-term adoption.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Before / after
          <br />
          Before: analyst ticket or dashboard
          <br />
          After: shared Slack conversation
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Designing for trust</h2>
        <p className="text-gray-700 leading-relaxed">
          The most important design question wasn't "Can Compass answer this?"
          <br />
          It was "Should it?"
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Design choices prioritized:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Clear explanations over clever responses</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Predictable behavior over novelty</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Signals of confidence <em>and</em> uncertainty
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Trust was built by making the system's behavior legible, not by hiding
          complexity.
        </p>
      </section>

      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
          Response UI showing explanation or clarification
          <br />
          Optional example where Compass asks a follow-up question
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Impact</h2>
        <p className="text-gray-700 leading-relaxed">
          Compass changed how teams interacted with data by:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Reducing analyst interruption</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Shortening time from question to insight</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Making exploration collaborative rather than siloed</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              Encouraging shared understanding instead of private dashboards
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          More importantly, it demonstrated that conversational analytics can
          work{" "}
          <strong>without sacrificing governance or trust</strong>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Reflection</h2>
        <p className="text-gray-700 leading-relaxed">
          Compass reinforced a core belief in my work:
          <br />
          Good product design isn't about removing complexity—it's about
          deciding <strong>where complexity belongs</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          By treating conversation, context, and governance as equal design
          concerns, we built a system that helps teams explore data confidently
          without undermining the foundations they rely on.
        </p>
      </section>
    </div>
  );
}
