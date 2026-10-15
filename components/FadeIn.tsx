"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
}

/**
 * Wraps children in a div that fades upward when scrolled into view.
 * Respects `prefers-reduced-motion` (see globals.css).
 */
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
