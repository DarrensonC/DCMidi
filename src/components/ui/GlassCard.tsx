import * as React from "react";
import { cn } from "@/lib/utils";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  innerClassName?: string;
};

export function GlassCard({
  className,
  innerClassName,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] bg-[linear-gradient(180deg,rgba(232,62,45,0.35),rgba(255,255,255,0.08),rgba(255,106,61,0.22))] p-px shadow-[var(--shadow-premium)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "rounded-[calc(var(--radius-xl)-1px)] border border-border bg-surface backdrop-blur-xl",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}


