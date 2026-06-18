export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="font-serif text-xl font-bold">The Absurd Observer</p>
          <p className="text-sm text-gray-500 mt-2 italic">
            Established 2026 &middot; Reporting the unreal since yesterday
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs uppercase tracking-widest text-gray-400">
            <span>About</span>
            <span>Contact</span>
            <span>Subscribe</span>
            <span>Careers</span>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} The Absurd Observer. No rights reserved. All stories are fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
