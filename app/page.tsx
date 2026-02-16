export default function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center space-y-16">
      {/* Headline */}
      <div className="space-y-8">
        <h1 className="font-notch text-7xl md:text-7xl leading-[0.95] tracking-tight">
          Designing products for clarity, trust, and scale
        </h1>

        <div className="pt-4 max-w-2xl">
          <p className="text-xl leading-relaxed">
            Hello, I'm Kate. I work on complex product systems for data and
            AI-driven tools. I'm currently a Staff Product Designer at Dagster.
          </p>

          <a
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 mt-8 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-lg"
          >
            View Case Studies
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
