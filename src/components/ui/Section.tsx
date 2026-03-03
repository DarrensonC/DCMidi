import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "header" | "footer" | "div" | "main";
};

export function Section({ as = "section", className, ...props }: SectionProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}


