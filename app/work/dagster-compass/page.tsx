import type { Metadata } from "next";
import Link from "next/link";
import { Lightbox } from "@/components/Lightbox";

export const metadata: Metadata = { title: "Compass" };

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
        <h2 className="text-2xl font-semibold">Act 1 — How Compass started</h2>
        <p className="text-gray-700 leading-relaxed">
          Compass began as a CEO experiment. Frustrated by how long it took to
          get answers to basic business questions, our CEO vibe coded a
          prototype over a weekend and started using it himself. He showed it to
          a data analyst, then the CTO and Head of Product. The reaction was
          immediate: this should exist.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The team knew that I enjoy working on 0 to 1 type projects, trying new
          tools, and experimenting in code. So they asked me to join the team.
          For the first few months, we were a team of five — the CEO, the CTO,
          our Head of Product, a Platform Engineer, and myself. We were meeting
          daily, all writing and reviewing code together, and using Compass
          ourselves as we built it. It was an incredible oppportunity to shape a
          product from the very beginning, and to work closely with our leaders
          in a way that blurred the lines between product, design, engineering,
          and even brand.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-1.png"
            alt="Compass Slack interface showing a user asking a business question and receiving an AI-generated answer with data visualization"
            className="w-full rounded-lg"
          />
        </figure>
        <p className="text-gray-700 leading-relaxed">
          When I joined, Compass was functional but a little hard to use. The
          chat experience worked great. But, the main problem was the data
          management — the place where users connected and configured their data
          sources. Alongside the team, I redesigned it from scratch — working
          directly in the code to move fast — clarifying the steps and making
          the structure legible. Onboarding was still happening in Slack at this
          point, but this was the moment it started to feel like an actual
          product, not just a Slack integration.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-2.png"
            alt="Compass data management interface showing configuration steps for connecting and managing data sources"
            className="w-full rounded-lg"
          />
        </figure>

        <p className="text-gray-700 leading-relaxed">
          This was also the first time I was using AI to write code I couldn't
          have written manually. By July 2025 I'd used Claude and ChatGPT
          extensively for design work, but Compass was where I crossed into
          using AI to push production-level code alongside our CEO and CTO. We
          were building an AI product while learning in real time what
          AI-assisted development actually meant. That context shaped everything
          about how we worked.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Act 2 — Learning what Slack could and couldn't do
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our CEO wanted Compass to be Slack-native and Slack only. The instinct
          made sense: that's where work happens, that's where the magic felt
          most natural. So we tried to make it work.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We used Slack Connect instead of building a full marketplace app,
          which let us move fast without going through Slack's approval process
          before we'd validated the idea. But Slack Connect introduced its own
          complexity. Every organization has different permissions for adding
          external apps and channels. What worked in one environment broke in
          another. We were creating ten to fifteen test Slack orgs a day trying
          to recreate the different configurations we were encountering.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-3.png"
            alt="Compass two-channel Slack setup showing separate channels for conversations and admin management"
            className="w-full rounded-lg"
          />
        </figure>

        <p className="text-gray-700 leading-relaxed">
          The governance model made it harder. The original design had two
          channels — one for chatting with Compass, one for admins to manage
          context and approve data requests via GitHub PRs. The idea was sound:
          keep humans in control of what Compass knew and how it responded. But
          in practice it meant users had to onboard in one channel, then move to
          another before they ever saw Compass work. The a-ha moment was buried
          too deep. And managing two channels felt like overhead nobody wanted.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The onboarding flow was also fragmented. Users were bouncing between a
          sign-up page, email, Slack, a data connection page, and back to Slack.
          The experience was confusing and disjointed.
        </p>
        <p className="text-gray-700 leading-relaxed">
          After months of testing we made two calls:
        </p>
        <p className="text-gray-700 leading-relaxed">
          Onboarding had to move out of Slack. The web was the right place for
          setup, data connection, and configuration. Slack was the right place
          for conversation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Admin and governance had to move out of Slack too. One linear flow —
          sign up, confirm email, connect data, then enter Slack — replaced the
          fragmented multi-surface experience. Context management and governance
          moved into a web UI with a proper audit trail and clear ownership.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-4.png"
            alt="Streamlined Compass onboarding flow showing linear progression from sign-up through data connection to Slack integration"
            className="w-full rounded-lg"
          />
        </figure>

        <p className="text-gray-700 leading-relaxed">
          The product got simpler. The constraints had forced better decisions.
          This allowed us to better focus on the different surface areas of
          Compass - Slack for conversation and the web for management. It also
          opened the door for a more robust product that wasn't confined to
          Slack.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From there things moved quickly. We shipped a full web-based admin UI
          — giving data teams a single place to manage connections, channels,
          users, governance, and billing. We launched to alpha users, iterated
          through beta, and hit GA in under six months. Compass debuted at #3 on
          Product Hunt.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-5.png"
            alt="Compass web-based admin interface showing management dashboard for connections, channels, users, and governance settings"
            className="w-full rounded-lg"
          />
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Act 3 — Seeing what the numbers were saying
        </h2>
        <p className="text-gray-700 leading-relaxed">
          After GA, we begin expanded the capabilities of Compass , with a
          playground for testing prompt accuracy and a full browser-based
          experience that made Compass accessible entirely outside of Slack.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Since the beginning, we had a hunch that Compass alongside the power
          of Dagster+ would add an immense amount of value for existing Dagster
          users. Our team had been working on a prototype to integrate Dagter+
          into Compass. But we weren't sure how it would be recieved. We had
          been treating Compass like a separate product with a very different
          audience. We thought it would be a hard sell to get existing users to
          adopt something new, even if it was better. We thought we'd have to
          convince them with marketing, sales, and education. We started beta
          testing the Dagter+ integration with a small group of users. Then
          something unexpected happened. Adoption was immediate. 18 out of 24
          teams activated Compass within 36 hours of being told about it. They
          didn't evaluate it. They didn't need convincing. They just turned it
          on.
        </p>
        <p className="text-gray-700 leading-relaxed">
          That was the moment it clicked.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We had spent months trying to figure out who Compass was for — sales
          leaders, RevOps teams, business users, data analysts. We kept
          expanding the target and diluting the message. Compass was for
          everyone, which meant it was for no one. Meanwhile the users who were
          actually adopting and staying were almost entirely existing Dagster+
          customers.
        </p>

        <figure className="space-y-2">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/A8E9LAu1sI8"
              title="Compass demo showing Dagster+ data integration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <figcaption className="text-xs text-gray-500 italic">
            Demo of Dagster+ data in Compass
          </figcaption>
        </figure>

        <p className="text-gray-700 leading-relaxed">
          The reason wasn't the product. It was trust. Dagster+ users already
          trusted the platform. They didn't need to evaluate whether Compass was
          safe or reliable — they assumed it was, because Dagster had already
          earned that. We were treating Compass like a brand new product with no
          credibility in the market, when we actually had years of trust already
          built.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Since the beginning of Compass, I had been working at the intersection
          of product, brand, and go-to-market. I brought a proposal to
          leadership: let's stop fragmenting the two products and lean into what
          was already working. Dagster is the platform. Compass expands the
          reach. Whatever the entry point — Dagster+, Compass, or open source —
          you're in the Dagster ecosystem.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-6.png"
            alt="Unified Dagster ecosystem diagram showing Compass as part of the integrated platform experience"
            className="w-full rounded-lg"
          />
        </figure>

        <p className="text-gray-700 leading-relaxed">
          On the Dagster+ side, we had been struggling to see how Compass fit
          into Dagter+. Should Compass power all AI features? Should it be in
          the Dagster+ product at all? The proposal reframed Compass not as a
          standalone analytics tool but as the conversational intelligence layer
          of the Dagster platform. Dagter+ is already intelligent - we didn't
          need a new product to add those capabilties. Compass would live inside
          Dagster+ as the conversational layer — not bolted on, not opt-in, just
          there — while also remaining available as a standalone product for
          teams that needed it outside the platform.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-7.png"
            alt="Compass integrated inside Dagster+ platform showing conversational intelligence layer"
            className="w-full rounded-lg"
          />
        </figure>

        <p className="text-gray-700 leading-relaxed">
          Leadership approved the direction. We've begun work on an updated
          brand system, the product architecture, and the go-to-market strategy
          all now reflect a single coherent story.
        </p>

        <figure className="space-y-3">
          <Lightbox
            src="/compass/compass-8.png"
            alt="Updated Compass brand system and product architecture reflecting unified platform positioning"
            className="w-full rounded-lg"
          />
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Reflection</h2>
        <p className="text-gray-700 leading-relaxed">
          Compass changed how I think about how teams can build products.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Not universally — context matters. But on a tiger team moving at this
          speed, the medium stopped mattering. I've always designed in code —
          that's not new. What changed was the ceiling. I was pushing
          production-level code I couldn't have written by hand. Our back-end
          engineers were building front-end prototypes alongside their
          architecture work. The distance between an idea and a working thing
          collapsed for everyone on the team, not just me. We moved faster
          together because the walls between roles got more permeable.
        </p>
        <p className="text-gray-700 leading-relaxed">
          What I learned is that the most valuable thing I brought wasn't a
          specific skillset. It was the clarity to figure out what the team
          needed and the range to go do it — whether that was systems thinking,
          brand strategy, or shipping a docs site in 24 hours.
        </p>
        <p className="text-gray-700 leading-relaxed">
          AI didn't replace design thinking. It let us act on it faster.
        </p>
      </section>

      <div className="pt-12 border-t border-gray-200">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
        >
          <span aria-hidden="true" className="text-xl">
            ←
          </span>
          <span className="text-base font-medium">Back to work</span>
        </Link>
      </div>
    </div>
  );
}
