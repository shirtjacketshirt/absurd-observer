import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export function HeroArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block border-b-2 border-border pb-8 mb-8"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent mb-3">
        <span>Featured</span>
        <span>&middot;</span>
        <span>{article.category}</span>
        <span>&middot;</span>
        <span>{article.date}</span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl font-bold group-hover:text-accent transition-colors leading-tight">
        {article.title}
      </h2>
      <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-3xl">
        {article.excerpt}
      </p>
      <p className="text-sm text-gray-400 mt-3">By {article.author}</p>
    </Link>
  );
}
