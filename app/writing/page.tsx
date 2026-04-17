import Link from "next/link";

const posts = [
  {
    slug: "2026-04-17-re-claude-design",
    title: "Re: Claude Design",
    date: "April 17, 2026",
  },
  {
    slug: "2026-03-18-ai-doesnt-replace-design-thinking",
    title: "AI doesn't replace design thinking, it lets us act on it faster",
    date: "March 18, 2026",
  },
  {
    slug: "2026-03-08-ai-is-fun",
    title: "AI tools are fun",
    date: "March 8, 2026",
  },
  {
    slug: "2026-03-04-more-access-doesnt-dilute-creativity",
    title: "More access to creative tools doesn't dilute creativity",
    date: "March 4, 2026",
  },
];

export default function WritingPage() {
  return (
    <div className="max-w-[720px] space-y-16">
      <div className="pb-12 border-b border-gray-200 space-y-3">
        <h1 className="font-notch text-5xl lg:text-6xl tracking-tight">Writing</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Occasional thoughts on design, tools, and AI</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="pb-8 border-b border-gray-200 last:border-0">
            <Link href={`/writing/${post.slug}`} className="group block space-y-1">
              <p className="text-sm text-gray-500">{post.date}</p>
              <div className="flex items-center gap-3 text-gray-900">
                <h2 className="font-notch text-xl tracking-tight group-hover:text-gray-500 transition-colors">
                  {post.title}
                </h2>
                <span aria-hidden="true" className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
