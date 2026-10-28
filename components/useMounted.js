"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// false during prerender/hydration, true once running in the browser.
// Swiper reads the current time while rendering, which Cache Components
// does not allow during prerender, so carousels render a static frame until mounted.
export default function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
