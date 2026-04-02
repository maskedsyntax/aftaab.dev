import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 pb-24 pt-8 sm:px-6 md:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} Aftaab Siddiqui
        </p>
        <div className="flex items-center gap-5 font-mono text-xs text-muted-foreground/70">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/projects" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
