"use client";

import { useEffect, useRef } from "react";

export default function MobileMoveOurServices() {
  const stateRef = useRef({
    moved: false,
    topOriginalParent: null,
    topOriginalNextSibling: null,
    bottomRemoved: false,
    bottomNode: null,
    bottomOriginalParent: null,
    bottomOriginalNextSibling: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const MOBILE_MAX = 767;

    // Find the top "Our Services" section
    const top = document.querySelector('[data-our-services="top"]');
    
    // Find bottom "Our Services" section if it exists (optional)
    const bottom = document.querySelector('[data-our-services="bottom"]');

    // Find the Rwanda section to insert services after it
    const rwandaSection = document.querySelector('[data-rwanda-section]');

    function moveAfterRwanda() {
      if (!top || stateRef.current.moved || !rwandaSection || !rwandaSection.parentNode) return;

      // Save original position
      stateRef.current.topOriginalParent = top.parentNode;
      stateRef.current.topOriginalNextSibling = top.nextSibling;

      // Remove bottom if it exists
      if (bottom && bottom.parentNode) {
        stateRef.current.bottomRemoved = true;
        stateRef.current.bottomNode = bottom;
        stateRef.current.bottomOriginalParent = bottom.parentNode;
        stateRef.current.bottomOriginalNextSibling = bottom.nextSibling;
        bottom.parentNode.removeChild(bottom);
      }

      // Insert services section after Rwanda section
      // Insert after the Rwanda section
      if (rwandaSection.nextSibling) {
        rwandaSection.parentNode.insertBefore(top, rwandaSection.nextSibling);
      } else {
        rwandaSection.parentNode.appendChild(top);
      }
      // Set moved flag only after successful move (prevents duplicate attempts on resize)
      stateRef.current.moved = true;
    }

    function revertToTop() {
      if (!stateRef.current.moved || !top) return;

      // Restore top to original position
      if (stateRef.current.topOriginalParent) {
        try {
          if (stateRef.current.topOriginalNextSibling) {
            stateRef.current.topOriginalParent.insertBefore(
              top,
              stateRef.current.topOriginalNextSibling
            );
          } else {
            stateRef.current.topOriginalParent.appendChild(top);
          }
        } catch (e) {
          // Fallback: do nothing
        }
      }

      // Restore bottom if it was removed
      if (stateRef.current.bottomRemoved && stateRef.current.bottomNode && stateRef.current.bottomOriginalParent) {
        try {
          const bottomNode = stateRef.current.bottomNode;
          if (stateRef.current.bottomOriginalNextSibling) {
            stateRef.current.bottomOriginalParent.insertBefore(
              bottomNode,
              stateRef.current.bottomOriginalNextSibling
            );
          } else {
            stateRef.current.bottomOriginalParent.appendChild(bottomNode);
          }
        } catch (e) {
          // Fallback: do nothing
        }
      }

      // Reset state
      stateRef.current.moved = false;
      stateRef.current.topOriginalParent = null;
      stateRef.current.topOriginalNextSibling = null;
      stateRef.current.bottomRemoved = false;
      stateRef.current.bottomNode = null;
      stateRef.current.bottomOriginalParent = null;
      stateRef.current.bottomOriginalNextSibling = null;
    }

    function handleResize() {
      const isMobile = window.innerWidth <= MOBILE_MAX;
      
      if (isMobile) {
        moveAfterRwanda();
      } else {
        revertToTop();
      }
    }

    // Initial run
    handleResize();

    // Add resize listener with debounce
    let resizeTimeout = null;
    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    }

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      // Revert on unmount to restore original state
      revertToTop();
    };
  }, []);

  return null;
}
