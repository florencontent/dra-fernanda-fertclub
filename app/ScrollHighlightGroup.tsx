"use client";

import { useEffect, useRef } from "react";

export default function ScrollHighlightGroup({
  children,
  className,
  itemSelector,
  rootMargin = "-42% 0px -42% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  itemSelector: string;
  rootMargin?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = Array.from(container.querySelectorAll<HTMLElement>(itemSelector));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { root: null, rootMargin, threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [itemSelector, rootMargin]);

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}
