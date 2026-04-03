import type { FunPick } from "@/lib/fun-picks";
import { ReactionGame } from "./reaction-game";
import { StarScale } from "./star-scale";
import { OrbitLines } from "./orbit-lines";
import { DoorsNote } from "./doors-note";

export function FunExperienceBody({ pick }: { pick: FunPick }) {
  switch (pick.slug) {
    case "reaction":
      return <ReactionGame />;
    case "star-scale":
      return <StarScale />;
    case "orbit-lines":
      return <OrbitLines />;
    case "doors-note":
      return <DoorsNote />;
    default:
      return (
        <p className="text-sm text-muted-foreground">
          This experience is not wired up yet. Add a case in{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            fun-experience-body.tsx
          </code>{" "}
          for <code className="font-mono text-xs">{pick.slug}</code>.
        </p>
      );
  }
}
