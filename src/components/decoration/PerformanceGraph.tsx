import * as React from "react";
import { cn } from "@/lib/utils";

export function PerformanceGraph({
  className,
  accent = "brand",
}: {
  className?: string;
  accent?: "brand" | "cta";
}) {
  const stroke = accent === "cta" ? "var(--cta)" : "var(--brand)";
  const glow = accent === "cta" ? "rgba(34,197,94,0.55)" : "rgba(232,62,45,0.55)";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface backdrop-blur-xl shadow-[var(--shadow-premium)]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <svg
        viewBox="0 0 720 420"
        className="relative h-[260px] w-full sm:h-[320px]"
        role="img"
        aria-label="Gráfico de performance"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.45" />
            <stop offset="45%" stopColor={stroke} stopOpacity="1" />
            <stop offset="100%" stopColor="var(--brand-2)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
            <stop offset="70%" stopColor={stroke} stopOpacity="0.02" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <path
          d="M60 350 H660"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* area */}
        <path
          d="M70 320 C140 318, 170 300, 215 275 C270 245, 305 268, 350 236 C394 205, 445 210, 498 175 C540 147, 590 156, 650 98 L650 350 L70 350 Z"
          fill="url(#fill)"
        />

        {/* glowing line */}
        <path
          d="M70 320 C140 318, 170 300, 215 275 C270 245, 305 268, 350 236 C394 205, 445 210, 498 175 C540 147, 590 156, 650 98"
          fill="none"
          stroke="url(#line)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* nodes */}
        {[
          [70, 320],
          [215, 275],
          [350, 236],
          [498, 175],
          [650, 98],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill={glow} opacity="0.26" />
            <circle cx={cx} cy={cy} r="4" fill={stroke} />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_260px_at_65%_30%,rgba(232,62,45,0.22),transparent_60%)]" />
    </div>
  );
}


