import { notFound } from "next/navigation";
import Link from "next/link";
import articles from "@/data/articles.json";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split("\n\n");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-sm text-accent hover:underline mb-6 inline-block uppercase tracking-widest"
      >
        &larr; Back to Home
      </Link>

      <article>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent mb-4">
          <span>{article.category}</span>
          <span>&middot;</span>
          <span>{article.date}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-gray-600 text-lg italic mb-6 border-b border-border pb-6">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>By <strong>{article.author}</strong></span>
          <span>&middot;</span>
          <span>{article.date}</span>
        </div>

        <div className="text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-accent hover:underline uppercase tracking-widest"
        >
          &larr; Back to all stories
        </Link>
      </div>
    </div>
  );
}
