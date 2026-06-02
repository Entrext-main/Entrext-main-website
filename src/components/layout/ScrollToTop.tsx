"use client";

import { useEffect } from "react";

/**
 * On a fresh load/refresh, browsers restore the previous scroll position. For a
 * single-page marketing site that means a refresh lands you mid-page behind the
 * loader. We opt out of automatic restoration and jump to the top — unless the
 * URL carries a hash (e.g. /#faq), where the anchor target should win.
 */
export const ScrollToTop = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};
