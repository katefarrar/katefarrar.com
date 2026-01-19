import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-notch text-gray-900 hover:text-gray-600 transition-colors"
          >
            Kate Farrar
          </Link>
          <div className="flex gap-8">
            <Link
              href="/work"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
