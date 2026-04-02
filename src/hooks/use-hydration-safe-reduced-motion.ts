"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Framer's `useReducedMotion()` is `null` on the server but a boolean after the
 * client reads `matchMedia`, so motion `initial` props can disagree and React
 * emits hydration warnings. This matches server + first client paint, then
 * applies the real preference after mount.
 */
export function useHydrationSafeReducedMotion(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const prefersReduced = useReducedMotion();
  if (!mounted) return false;
  return prefersReduced === true;
}
