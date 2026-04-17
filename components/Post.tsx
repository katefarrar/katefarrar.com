import Link from "next/link";

export default function Post({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[65ch] space-y-10">
      <header className="space-y-4 pb-10 border-b border-gray-200">
        <h1 className="font-notch text-3xl tracking-tight">{title}</h1>
        <p className="text-sm text-gray-600">{date}</p>
      </header>

      <div className="space-y-5">{children}</div>

      <div className="pt-8 border-t border-gray-200">
        <Link
          href="/writing"
          className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors group"
        >
          <span aria-hidden="true" className="text-xl transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
          <span className="text-base font-medium">Back to writing</span>
        </Link>
      </div>
    </div>
  );
}
