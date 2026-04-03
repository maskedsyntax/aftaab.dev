export function DoorsNote() {
  return (
    <div className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 p-6 shadow-sm dark:border-amber-900/40 dark:from-amber-950/50 dark:via-orange-950/40 dark:to-rose-950/50">
      <article className="prose prose-neutral dark:prose-invert max-w-none prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-amber-950 dark:prose-p:text-amber-50/95">
        <p>
          Some doors tell you exactly how they want to be used: a flat plate says
          <em> push</em>, a vertical bar says <em> pull</em>. When the signal lies—
          a handle that looks pull-only but must be pushed—you get a Norman door:
          the right affordance, the wrong mapping.
        </p>
        <p>
          Good interfaces do the same thing honest controls do: they match what
          you expect before you think about it. Bad ones look fine in a screenshot
          and waste your day in the real world.
        </p>
        <p className="text-amber-800/90 not-prose text-sm dark:text-amber-200/80">
          (Inspired by Don Norman’s framing—this page is a short in-site note, not
          a substitute for the book.)
        </p>
      </article>
    </div>
  );
}
