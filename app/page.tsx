import articles from "@/data/articles.json";
import { HeroArticle } from "./components/HeroArticle";
import { ArticleCard } from "./components/ArticleCard";

export default function Home() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 lg:border-r lg:border-border lg:pr-8">
          {featured && <HeroArticle article={featured} />}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">
              Latest Stories
            </h3>
            <div className="space-y-6">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
        <aside className="lg:col-span-4">
          <div className="border border-border p-6 bg-gray-50">
            <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">
              About
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The Absurd Observer is your trusted source for news that definitely
              didn&apos;t happen. We report, you decide how hard to laugh.
            </p>
          </div>
          <div className="border border-border p-6 bg-gray-50 mt-4">
            <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">
              Most Read
            </h3>
            <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700">
              {articles.slice(0, 5).map((a) => (
                <li key={a.slug}>
                  <a href={`/articles/${a.slug}`} className="hover:text-accent transition-colors">
                    {a.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
