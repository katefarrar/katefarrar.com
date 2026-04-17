import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Post from "@/components/Post";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-notch text-3xl lg:text-4xl tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-notch text-2xl lg:text-3xl tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-notch text-xl tracking-tight">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed text-gray-800">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? "#"} className="underline underline-offset-2 hover:text-gray-600 transition-colors">
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed text-gray-800">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 space-y-2 text-base leading-relaxed text-gray-800">{children}</ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gray-300 pl-5 text-gray-600 italic">{children}</blockquote>
    ),
    hr: () => <hr className="border-gray-200" />,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    Post,
    ShareButton,
    ...components,
  };
}
