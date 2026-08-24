"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-8",
  "slide-right": "opacity-0 translate-x-8",
  "scale-in": "opacity-0 scale-95",
};

const visibleClasses: Record<AnimationType, string> = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-in": "opacity-100",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
  "scale-in": "opacity-100 scale-100",
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${animationClasses[animation]}
        ${isVisible ? visibleClasses[animation] : ""}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
