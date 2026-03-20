import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";

export default function DagsterCompass() {
  return (
    <div className="space-y-20">
      <header className="grid grid-cols-12 gap-x-8 gap-y-12 pb-12 border-b border-gray-200">

        <div className="col-span-12 lg:col-span-8 space-y-8">
          <h1 className="font-notch text-5xl lg:text-6xl tracking-tight leading-tight">
            Compass
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
            From vibe coded prototype to platform integration
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8 grid grid-cols-2 lg:grid-cols-1 gap-6 text-sm">
          <div>
            <div className="font-semibold text-gray-900 mb-1">Role</div>
            <div className="text-gray-600">Lead Product Designer</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-1">Product</div>
            <div className="text-gray-600">Dagster / Dagster+</div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="font-semibold text-gray-900 mb-1">Audience</div>
            <div className="text-gray-600">
              Data teams and cross-functional business partners
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <Lightbox
          src="/compass-1.png"
          alt="Compass hero - Slack screenshot showing a real question, result, and follow-up"
          className="w-full rounded-lg"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Act 1 — How Compass started</h2>
        <p className="text-gray-700 leading-relaxed">
          Compass began as a CEO experiment. Frustrated by how long it took to get answers to basic business questions, our CEO vibe coded a prototype over a weekend and started using it himself. He showed it to a data analyst, then the CTO and Head of Product. The reaction was immediate: this should exist.
        </p>
        <p className="text-gray-700 leading-relaxed">
          They needed a designer. I was the most senior designer at the company and known for working across whatever the product needed. They put me on it.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When I joined, Compass was functional but hard to use. The core problem was the data management experience — the place where users connected and configured their data sources. The steps were unclear and the order was wrong. I redesigned it from scratch — working directly with Claude to move fast — clarifying the steps and making the structure legible. Onboarding was still happening in Slack at this point, but this was the moment it started to feel like an actual product, not just a Slack integration.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This was also the first time I was shipping code I couldn't have written by hand. By July 2025 I'd used Claude and ChatGPT extensively for design work, but Compass was where I crossed into using AI to push production-level code alongside our CEO and CTO. We were building an AI product while learning in real time what AI-assisted development actually meant. That context shaped everything about how we worked.
        </p>
      </section>

      <section className="space-y-6">
        <Lightbox
          src="/compass-2.png"
          alt="Conceptual contrast - dashboards and ticket queues versus conversational exploration in Slack"
          className="w-full rounded-lg"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Act 2 — Learning what Slack could and couldn't do</h2>
        <p className="text-gray-700 leading-relaxed">
          Our CEO wanted Compass to be Slack-native — Slack only. The instinct made sense: that's where work happens, that's where the magic felt most natural. So we tried to make it work.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We used Slack Connect instead of building a full marketplace app, which let us move fast without going through Slack's approval process before we'd validated the idea. But Slack Connect introduced its own complexity. Every organization has different permissions for adding external apps and channels. What worked in one environment broke in another. We were creating ten to fifteen test Slack orgs a day trying to understand the failure modes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The governance model made it harder. The original design had two channels — one for chatting with Compass, one for admins to manage context and approve data requests via GitHub PRs. The idea was sound: keep humans in control of what Compass knew and how it responded. But in practice it meant users had to onboard in one channel, then move to another before they ever saw Compass work. The a-ha moment was buried too deep. And managing two channels felt like overhead nobody wanted.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The onboarding flow made it worse. Users were bouncing between a sign-up page, email, Slack, a data connection page, and back to Slack — where a new channel had been created while they weren't looking. It was fragmented and hard to reason about.
        </p>
        <p className="text-gray-700 leading-relaxed">
          After months of testing we made two calls:
        </p>
        <p className="text-gray-700 leading-relaxed">
          Onboarding had to move out of Slack. The web was the right place for setup, data connection, and configuration. Slack was the right place for conversation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Admin and governance had to move out of Slack too. One linear flow — sign up, confirm email, connect data, then enter Slack — replaced the fragmented multi-surface experience. Context management and governance moved into a web UI with a proper audit trail and clear ownership.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The product got simpler. The constraints had forced better decisions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From there the product moved quickly. We shipped a full web-based admin UI — giving data teams a single place to manage connections, channels, users, governance, and billing, with a playground for testing prompt accuracy and a full browser-based experience that made Compass accessible entirely outside of Slack. We launched to alpha users, iterated through beta, and hit GA in under six months. Compass debuted at #3 on Product Hunt.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Act 3 — Seeing what the numbers were saying</h2>
        <p className="text-gray-700 leading-relaxed">
          When we rolled out the Compass integration for Dagster+ users, something unexpected happened. Adoption was immediate. 18 out of 24 teams activated Compass within 36 hours of being told about it. They didn't evaluate it. They didn't need convincing. They just turned it on.
        </p>
        <p className="text-gray-700 leading-relaxed">
          That was the moment it clicked.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We had spent months trying to figure out who Compass was for — sales leaders, RevOps teams, business users, data analysts. We kept expanding the target and diluting the message. Compass was for everyone, which meant it was for no one. Meanwhile the users who were actually adopting and staying were almost entirely existing Dagster+ customers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The reason wasn't the product. It was trust. Dagster+ users already trusted the platform. They didn't need to evaluate whether Compass was safe or reliable — they assumed it was, because Dagster had already earned that. We were treating Compass like a brand new product with no credibility in the market, when we actually had years of trust already built.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I had been sitting at the intersection of product, brand, and go-to-market long enough to see the whole picture. I brought a proposal to leadership: stop fragmenting the two products and lean into what was already working. Dagster is the platform. Compass expands the reach. Whatever the entry point — Dagster+, Compass, or open source — you're in the Dagster ecosystem.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The proposal reframed Compass not as a standalone analytics tool but as the conversational intelligence layer of the Dagster platform. Compass would live inside Dagster+ as a native interface — not bolted on, not opt-in, just there — while also remaining available as a standalone product for teams that needed it outside the platform.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Leadership approved the direction. The brand system, the product architecture, and the go-to-market strategy all now reflect a single coherent story.
        </p>
      </section>

      <section className="space-y-6">
        <Lightbox
          src="/compass-3.png"
          alt="Slack thread with initial question and follow-up, emphasizing continuity and shared context"
          className="w-full rounded-lg"
        />
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
                <span>
                  Not positioning Compass as a replacement for core BI
                </span>
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

        <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dFbQv7SGVck"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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
        <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/A8E9LAu1sI8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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
          work <strong>without sacrificing governance or trust</strong>.
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
