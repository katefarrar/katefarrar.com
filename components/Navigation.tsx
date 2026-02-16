import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-stretch justify-between">
          {/* Left - Name */}
          <Link
            href="/"
            className="font-notch text-[16px] tracking-wide hover:text-gray-600 transition-colors py-4"
          >
            Kate Farrar
          </Link>

          {/* Right - Navigation */}
          <div className="flex items-stretch gap-6">
            <div className="w-px bg-gray-900"></div>
            <div className="flex gap-6 text-[16px] py-4">
              <Link
                href="/work"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/brand-systems"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Brand Systems
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
      </div>
    </nav>
  );
}
