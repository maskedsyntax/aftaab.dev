import MarkdownIt from "markdown-it";

/**
 * Full renderer: typographer, linkify, fenced code escaped by markdown-it (no highlight.js).
 * highlight.js was removed from the blog pipeline — it intermittently broke Turbopack/SSR for some posts.
 */
const mdFull = new MarkdownIt({
  html: false,
  xhtmlOut: true,
  breaks: false,
  linkify: true,
  typographer: true,
  quotes: "\u201C\u201D\u2018\u2019",
});

/** Minimal fallback if anything in the pipeline throws on odd input. */
const mdMinimal = new MarkdownIt({
  html: false,
  xhtmlOut: true,
  breaks: false,
  linkify: false,
  typographer: false,
});

export function renderBlogMarkdown(source: string): string {
  const text = typeof source === "string" ? source : String(source ?? "");
  try {
    return mdFull.render(text);
  } catch (first) {
    try {
      return mdMinimal.render(text);
    } catch (second) {
      console.error("[render-markdown] render failed:", first, second);
      throw first;
    }
  }
}
