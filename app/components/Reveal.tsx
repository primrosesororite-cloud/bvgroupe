"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "fade" : fondu vers le haut · "clip" : rideau sur une image */
  variant?: "fade" | "clip";
};

export default function Reveal({ children, className = "", delay = 0, variant = "fade" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant === "clip" ? "reveal-clip" : "reveal"} ${className}`}
      style={{ ["--delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
