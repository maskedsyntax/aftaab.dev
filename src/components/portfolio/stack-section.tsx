import type { IconType } from "react-icons";
import {
  SiBun,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFlask,
  SiFlutter,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRust,
  SiShadcnui,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { Badge } from "@/components/ui/badge";
import { stackCategories, stackNote } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const STACK_ICONS: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Svelte: SiSvelte,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn UI": SiShadcnui,
  Flutter: SiFlutter,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  Django: SiDjango,
  Express: SiExpress,
  Fastify: SiFastify,
  Go: SiGo,
  "C++": SiCplusplus,
  Python: SiPython,
  Rust: SiRust,
  Bun: SiBun,
  "Node.js": SiNodedotjs,
  Docker: SiDocker,
};

function StackBadge({ name }: { name: string }) {
  const Icon = STACK_ICONS[name];
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-1.5 border border-border/60 bg-muted/40 font-mono text-[11px] font-normal text-foreground/90 shadow-none",
        "transition-colors hover:bg-muted/70"
      )}
    >
      {Icon ? (
        <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
      ) : null}
      {name}
    </Badge>
  );
}

export function StackSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader title="Stack" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {stackCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-card/90 p-5 md:p-6 dark:bg-card/80"
            >
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {cat.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <StackBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground md:text-sm">
        {stackNote}
      </p>
    </SectionReveal>
  );
}
