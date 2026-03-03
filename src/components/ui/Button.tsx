import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "cta" | "brand" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(34,197,94,0.7)] active:scale-[0.99]";

const variants: Record<ButtonVariant, string> = {
  cta: "bg-cta text-black shadow-[0_18px_55px_rgba(34,197,94,0.18)] hover:brightness-[0.95]",
  brand:
    "bg-brand text-white shadow-[0_18px_55px_rgba(232,62,45,0.16)] hover:brightness-[0.95]",
  outline:
    "border border-border bg-surface text-foreground backdrop-blur-xl hover:bg-surface-2",
  ghost: "text-foreground hover:bg-surface",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "cta", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
};

export function ButtonLink({
  href,
  className,
  variant = "cta",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}


