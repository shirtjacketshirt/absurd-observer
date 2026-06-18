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

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block border-b border-border pb-6 last:border-b-0"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent mb-2">
        <span>{article.category}</span>
        <span>&middot;</span>
        <span>{article.date}</span>
      </div>
      <h2 className="font-serif text-xl font-bold group-hover:text-accent transition-colors leading-tight">
        {article.title}
      </h2>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {article.excerpt}
      </p>
      <p className="text-xs text-gray-400 mt-2">By {article.author}</p>
    </Link>
  );
}
