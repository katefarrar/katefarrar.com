import Link from "next/link";
import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";

export default function FireHydrantSignals() {
  return (
    <div className="space-y-20">
      <header className="grid grid-cols-12 gap-x-8 gap-y-12 pb-12 border-b border-gray-200">

        <div className="col-span-12 lg:col-span-8 space-y-8">
          <h1 className="font-notch text-5xl lg:text-6xl tracking-tight leading-tight">
            Signals for FireHydrant
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Alerting and on-call, rethought as part of incident management
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            Signals is FireHydrant's alerting and on-call product, designed to
            help teams respond faster and more consistently by tightly integrating
            alerts into the incident lifecycle—from first notification to
            resolution and retro.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8 grid grid-cols-2 lg:grid-cols-1 gap-6 text-sm">
          <div>
            <div className="font-semibold text-gray-900 mb-1">Role</div>
            <div className="text-gray-600">Lead Product Designer</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-1">Product</div>
            <div className="text-gray-600">FireHydrant</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-1">Audience</div>
            <div className="text-gray-600">Incident Management teams</div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="font-semibold text-gray-900 mb-1">Outcome</div>
            <div className="text-gray-600">
              Launched GA; $250k ARR closed during beta; rapid competitive
              response from incumbents
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <figure className="space-y-3">
          <Image
            src="/signals-1.png"
            alt="Signals alert timeline composite showing chronological event flow from signal trigger through escalation and mobile push notification delivery"
            width={1200}
            height={675}
            className="w-full rounded-lg"
          />
          <figcaption className="text-xs text-gray-500 italic">
            Alert timeline composite showing the chronological event flow — from signal trigger through escalation and notification — alongside real-time mobile push delivery
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Most alerting tools are built as standalone systems. They notify
          people, but they don't help teams understand what's happening,
          coordinate a response, or transition cleanly into incident management.
        </p>
        <p className="text-gray-700 leading-relaxed">As a result:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Alerts lack context</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>
              On-call engineers spend time triaging instead of responding
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Incidents fracture across tools</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Escalation rules are powerful but hard to reason about</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          We saw an opportunity to design alerting not as a separate product,
          but as the <strong>first step in incident response</strong>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Designing for the full incident lifecycle
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The core design principle was end-to-end continuity: alerts shouldn't
          end at notification—they should flow naturally into investigation,
          resolution, and learning.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Internally, we described this as designing{" "}
          <strong>"from ring to retro."</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">Signals was built to:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Trigger alerts with clear ownership</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Escalate predictably over time</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Transition smoothly into incidents</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Preserve context for post-incident review</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <figure className="space-y-3">
          <Lightbox
            src="/signals-2.png"
            alt="Incident lifecycle diagram showing progression from Signal to Alert to Incident to Resolution and Retro with Signals handling detection and alerting"
            className="w-full rounded-lg"
          />
          <figcaption className="text-xs text-gray-500 italic">
            The full incident lifecycle — Signals owns detection and alerting, handing off seamlessly into FireHydrant's incident management workflow
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key system decisions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              Decoupling alerts from incidents
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Alerts and incidents serve different purposes. Alerts demand
              immediate attention; incidents represent coordinated response.
              Tying them too tightly increases noise and cost.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We designed alerts to{" "}
              <strong>optionally connect to incidents</strong>, rather than
              forcing a one-to-one relationship. This reduced unnecessary
              incidents while preserving escalation and auditability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Treating escalation as a time-based system
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Escalation policies aren't just lists of people — they're
              timelines. We treated time as a first-class concept, making it
              explicit when actions happen and why.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Optimizing for predictability over raw flexibility
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Existing tools optimize for configurability. We optimized for{" "}
              <strong>understandability</strong>, even when that meant
              constraining options.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Deep dive: Escalation policies
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Escalation policies were the most complex and highest-risk part of
          Signals. They combine time, ownership, repetition, and hand-offs—and
          small misunderstandings have real operational impact.
        </p>

        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold">
              Alpha: exposing everything
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our initial assumption was that experienced engineers could handle
              the full complexity. Policies were fully visible and configurable,
              but users struggled to understand:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Time gaps between notifications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>When repetition started</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>When responsibility changed hands</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <figure className="space-y-3">
          <Lightbox
            src="/signals-3.png"
            alt="Alpha escalation policy form showing time-based steps and hand-offs that are difficult to reason about at a glance"
            className="w-full rounded-lg"
          />
          <figcaption className="text-xs text-gray-500 italic">
            Alpha escalation policy design — time-based steps and hand-offs visible but difficult to reason about at a glance
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Beta: making time explicit</h3>
          <p className="text-gray-700 leading-relaxed">
            User feedback showed that{" "}
            <strong>time was the missing dimension</strong>. We redesigned
            escalation policies to visualize actions along a timeline,
            clarifying order, delays, repeats, and hand-offs.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">GA: clarity over cleverness</h3>
          <p className="text-gray-700 leading-relaxed">
            Final designs prioritized:
          </p>
          <ul className="space-y-2 text-gray-700 mt-4">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Clear language</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Explicit intervals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Scan-friendly policy summaries</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                Helper text that explained <em>why</em>, not just <em>what</em>
              </span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            The result was a system that felt powerful without being opaque.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <figure className="space-y-3">
          <Lightbox
            src="/signals-4.png"
            alt="GA escalation policy showing scannable summary view with clear ownership, timing, and repeat behavior at every step"
            className="w-full rounded-lg"
          />
          <figcaption className="text-xs text-gray-500 italic">
            GA escalation policy — scannable summary view with clear ownership, timing, and repeat behavior at every step
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Visualizing alert context in real time
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Even with better configuration, users still needed to understand what
          was happening <em>during</em> an alert.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We introduced an alert timeline that shows:
        </p>
        <ul className="space-y-2 text-gray-700 mt-4">
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>When the signal triggered</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Who was notified and how</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>Status changes over time</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400 mt-1">•</span>
            <span>When alerts connected to incidents</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          This reduced guesswork and improved confidence during high-stress
          moments.
        </p>
      </section>

      <section className="space-y-6">
        <figure className="space-y-3">
          <Lightbox
            src="/signals-5.png"
            alt="Full alert timeline showing complete lifecycle from signal trigger through escalation, notification, and incident connection"
            className="w-full rounded-lg"
          />
          <figcaption className="text-xs text-gray-500 italic">
            Full alert timeline showing the complete lifecycle from signal trigger through escalation, notification, and incident connection
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Impact</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">Revenue:</span>
            <span>$250k ARR closed during beta</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">Adoption:</span>
            <span>Strong uptake from existing customers</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Market response:
            </span>
            <span>
              Major competitors launched similar offerings shortly after GA
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-gray-900">
              Customer feedback:
            </span>
            <span>
              Consistently highlighted clarity, cost savings, and ease of
              adoption
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Reflection</h2>
        <p className="text-gray-700 leading-relaxed">
          Designing Signals reinforced the importance of seeing the{" "}
          <em>entire system</em>, not just individual features. The most
          meaningful improvements came from understanding where users lost
          confidence—and reshaping the product to restore it.
        </p>
        <p className="text-gray-700 leading-relaxed">
          At this scale, good design isn't about adding capability. It's about
          making complex systems feel trustworthy under pressure.
        </p>
      </section>

      <div className="pt-12 border-t border-gray-200">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
        >
          <span aria-hidden="true" className="text-xl">←</span>
          <span className="text-base font-medium">Back to work</span>
        </Link>
      </div>
    </div>
  );
}
