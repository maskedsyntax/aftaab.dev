import Image from "next/image";

function UtterMark() {
  return (
    <svg viewBox="0 0 144 144" className="h-full w-full" role="img" aria-label="Utter logo">
      <rect width="144" height="144" rx="30" fill="#f9faf8" />
      <path
        d="M43 46v39c0 18 11 29 29 29s29-11 29-29V46"
        fill="none"
        stroke="#172437"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M72 30v22M58 35v12M86 35v12"
        fill="none"
        stroke="#04b7c8"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AiThumbnail({ id }: { id: string }) {
  if (id !== "voxflow" && id !== "utter") return null;

  const isVoxflow = id === "voxflow";

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#111a22] text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,185,202,0.13),transparent_48%)]"
      />
      <div className="relative flex flex-col items-center gap-4 lg:gap-6">
        <div className="h-24 w-24 overflow-hidden rounded-[23px] shadow-[0_18px_55px_rgba(0,0,0,0.25)] md:h-28 md:w-28 lg:h-36 lg:w-36 lg:rounded-[30px]">
          {isVoxflow ? (
            <Image
              src="/images/projects/logos/voxflow.png"
              alt="VoxFlow logo"
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          ) : (
            <UtterMark />
          )}
        </div>
        <div className="text-center">
          <div className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">
            {isVoxflow ? "VoxFlow" : "Utter"}
          </div>
          <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#8ca7b0] sm:text-xs">
            {isVoxflow ? "Voice to text" : "Text to voice"}
          </div>
        </div>
      </div>
    </div>
  );
}
