import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 pb-24 pt-8 sm:px-6 md:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} Aftaab Siddiqui
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground/70">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/apps" className="hover:text-foreground">
            Apps
          </Link>
          <Link href="/blog" className="hover:text-foreground">
            Writing
          </Link>
          <Link href="/projects" className="hover:text-foreground">
            Work
          </Link>
          <a
            href="https://ko-fi.com/aftaabsiddiqui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Ko-fi
          </a>
        </div>
      </div>
    </footer>
  );
}
