import Image from "next/image";
import { appleApps } from "@/lib/portfolio-data";

/**
 * Every app icon drifting across under the hero. Decorative — the same apps
 * are listed, with names, right below — so the whole strip is aria-hidden.
 */
export function AppIconMarquee() {
  const row = [...appleApps, ...appleApps];

  return (
    <div
      aria-hidden
      className="icon-marquee relative -mx-5 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:-mx-6"
    >
      <div className="icon-marquee-track flex w-max gap-5 md:gap-7">
        {row.map((app, i) => (
          <Image
            key={`${app.id}-${i}`}
            src={app.iconPath}
            alt=""
            width={72}
            height={72}
            sizes="72px"
            className="h-14 w-14 shrink-0 rounded-[15px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 md:h-[72px] md:w-[72px] md:rounded-[18px]"
          />
        ))}
      </div>
    </div>
  );
}
