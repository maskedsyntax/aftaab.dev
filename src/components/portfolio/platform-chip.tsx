import { cn } from "@/lib/utils";

const PLATFORM_STYLES: Record<string, { bg: string; text: string }> = {
  iOS:           { bg: "bg-[#007AFF]/10",     text: "text-[#007AFF]" },
  iPadOS:        { bg: "bg-[#007AFF]/10",     text: "text-[#007AFF]" },
  "Apple Watch": { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  macOS:         { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  Linux:         { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  Windows:       { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  Android:       { bg: "bg-[#3DDC84]/10",     text: "text-[#34A853] dark:text-[#3DDC84]" },
};

export function PlatformChip({ label }: { label: string }) {
  const style = PLATFORM_STYLES[label] ?? {
    bg: "bg-muted/60",
    text: "text-muted-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-1.5 py-px font-mono text-[8.5px] font-medium",
        style.bg,
        style.text,
      )}
    >
      {label}
    </span>
  );
}
