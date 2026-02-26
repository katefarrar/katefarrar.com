import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="font-notch text-4xl tracking-tight">About</h1>
      <div className="prose prose-lg">
        <p className="text-body mb-3">
          I&apos;m a Staff Product Designer working on complex product systems
          for data and AI-driven tools. I partner closely with engineering,
          product, and research to define direction, navigate constraints, and
          design flexible systems that adapt as products grow. I value
          thoughtful collaboration, inclusive teams, and building products
          people can rely on.
        </p>
        <p className="text-body mb-3">
          These are my dogs, Rosie and Hugo. They are, in fact, real live
          Muppets.
        </p>
        <Image
          src="/rosie-hugo.png"
          alt="Rosie and Hugo, two dogs"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <h3 className="text-lg">
          Want to connect?{" "}
          <a href="mailto:kate.farrar@gmail.com">Send me an email.</a>
        </h3>
      </div>
    </div>
  );
}
