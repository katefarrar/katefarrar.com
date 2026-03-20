export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center -mx-6">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">

          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-notch text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8">
              Designing systems for{' '}
              <span className="inline-block">clarity,</span>{' '}
              <span className="inline-block">trust,</span> and{' '}
              <span className="inline-block">scale</span>
            </h1>

            <div className="max-w-xl space-y-6">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-600">
                Staff Product Designer building complex systems for data platforms and technical tools
              </p>

              <div className="pt-4">
                <a
                  href="/work"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black bg-black text-white hover:bg-teal hover:border-teal hover:text-black transition-all duration-300 text-lg font-medium tracking-tight"
                >
                  View case studies
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8 space-y-6 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Current</div>
              <div className="text-gray-600">Dagster</div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Previously</div>
              <div className="text-gray-600">FireHydrant, Elastic</div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Focus</div>
              <div className="text-gray-600">
                Data platforms, developer tools, incident management, AI products
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
