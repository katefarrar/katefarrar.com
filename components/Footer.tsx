import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            © 2026 Kate Farrar. All rights reserved
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/katefarrar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/katefarrar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:kate.farrar@gmail.com"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
