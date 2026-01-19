interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="space-y-8">
      <h1 className="font-notch text-4xl font-medium tracking-tight">
        {slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <div className="prose prose-lg">
        <p>Case study content coming soon.</p>
      </div>
    </div>
  );
}
