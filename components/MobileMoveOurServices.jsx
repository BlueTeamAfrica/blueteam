"use client";

import { useEffect } from "react";

export default function MobileMoveOurServices() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 767;
    if (!isMobile) return;

    // Find the top and bottom "Our Services" sections
    const top = document.querySelector('[data-our-services="top"]');
    const bottom = document.querySelector('[data-our-services="bottom"]');

    // Remove bottom
    if (bottom && bottom.parentNode) {
      bottom.parentNode.removeChild(bottom);
    }

    // Move top to bottom
    if (top) {
      const container =
        document.querySelector("main") ||
        document.querySelector(".page-content") ||
        document.body;

      if (container) {
        container.appendChild(top);
      }
    }
  }, []);

  return null;
}
