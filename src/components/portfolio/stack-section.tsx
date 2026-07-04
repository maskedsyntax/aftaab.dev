import type { IconType } from "react-icons";
import {
  SiBun,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiFramer,
  SiGo,
  SiJetpackcompose,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRust,
  SiShadcnui,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
} from "react-icons/si";
import { Palette } from "lucide-react";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { Badge } from "@/components/ui/badge";
import { stackCategories, stackNote } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const STACK_ICONS: Record<string, IconType> = {
  Figma: SiFigma,
  "Framer Motion": SiFramer,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Svelte: SiSvelte,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn UI": SiShadcnui,
  Flutter: SiFlutter,
  Swift: SiSwift,
  SwiftUI: SiSwift,
  "React Native": SiReact,
  "Kotlin Multiplatform": SiKotlin,
  "Jetpack Compose": SiJetpackcompose,
  Expo: SiExpo,
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

/** Lucide fallback for tokens that don't have a brand mark */
const STACK_LUCIDE: Record<string, IconType> = {
  "Design tokens": Palette as unknown as IconType,
};

/** Brand-tinted icons (Simple Icons–adjacent hues) so pills are scannable on light and dark. */
const STACK_ICON_COLORS: Record<string, string> = {
  Figma: "text-[#F24E1E]",
  "Framer Motion": "text-[#BB4B96]",
  "Design tokens": "text-warm",
  React: "text-[#61DAFB]",
  "Next.js": "text-[#0070F3]",
  Svelte: "text-[#FF3E00]",
  "Tailwind CSS": "text-[#38BDF8]",
  "Shadcn UI": "text-[#A855F7]",
  Flutter: "text-[#60CAF6]",
  "React Native": "text-[#61DAFB]",
  Swift: "text-[#F05138]",
  SwiftUI: "text-[#F05138]",
  "Kotlin Multiplatform": "text-[#7F52FF]",
  "Jetpack Compose": "text-[#4285F4]",
  Expo: "text-[#111111] dark:text-[#F5F5F5]",
  Flask: "text-[#1a1a1a] dark:text-[#E8E8E8]",
  FastAPI: "text-[#009688]",
  Django: "text-[#44B78B]",
  Express: "text-[#555555] dark:text-[#B8B8B8]",
  Fastify: "text-[#111111] dark:text-[#F5F5F5]",
  Go: "text-[#00ADD8]",
  "C++": "text-[#00599C]",
  Python: "text-[#3776AB]",
  Rust: "text-[#DEA584]",
  Bun: "text-[#f97316]",
  "Node.js": "text-[#339933]",
  Docker: "text-[#2496ED]",
};

function StackBadge({ name }: { name: string }) {
  const Icon = STACK_ICONS[name] ?? STACK_LUCIDE[name];
  const iconColor = STACK_ICON_COLORS[name];
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-1.5 border border-border/60 bg-muted/40 font-mono text-[11px] font-normal text-foreground/90 shadow-none",
        "transition-colors hover:bg-muted/70"
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            "h-3.5 w-3.5 shrink-0",
            iconColor ?? "text-muted-foreground"
          )}
          aria-hidden
        />
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
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="bg-card/90 p-5 md:p-6 dark:bg-card/80"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] tabular-nums text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {cat.name}
                </h3>
              </div>
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
