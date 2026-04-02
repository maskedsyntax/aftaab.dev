import { ImageResponse } from "next/og";
import { OgBrandImage } from "@/lib/og-brand";

export const runtime = "edge";

export const alt = "Aftaab Siddiqui — Systems, tools, and products";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgBrandImage />, {
    ...size,
  });
}
