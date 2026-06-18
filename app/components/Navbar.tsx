import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-4 border-b border-border">
          <Link href="/" className="inline-block">
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
              The Absurd Observer
            </h1>
            <p className="text-sm text-gray-500 mt-1 italic">
              &quot;All the news that&apos;s fit to fabricate&quot;
            </p>
          </Link>
        </div>
        <nav className="flex justify-center gap-6 py-2 text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/" className="hover:text-accent transition-colors">Science</Link>
          <Link href="/" className="hover:text-accent transition-colors">Culture</Link>
          <Link href="/" className="hover:text-accent transition-colors">Politics</Link>
          <Link href="/" className="hover:text-accent transition-colors">Lifestyle</Link>
        </nav>
      </div>
    </header>
  );
}
