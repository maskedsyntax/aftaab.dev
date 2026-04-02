export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}
