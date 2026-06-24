/**
 * Ribbed/extruded-plastic divider — replaces a plain straight line
 * between sections. Reads its `from` and `to` colors from CSS vars.
 */
export function RibbedDivider({
  from = "var(--background)",
  to = "var(--tech-grey)",
  flip = false,
  className = "",
}: {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: from, height: 56 }}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block w-full h-full"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <defs>
          <pattern id="rib" width="24" height="56" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="24" height="56" fill={to} />
            <path d="M0 28 Q6 12 12 28 T24 28" fill="none" stroke="oklch(0.252 0.052 256 / 0.08)" strokeWidth="1" />
            <line x1="12" y1="0" x2="12" y2="56" stroke="oklch(0.252 0.052 256 / 0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <path
          d="M0 0 Q360 56 720 28 T1440 16 L1440 56 L0 56 Z"
          fill="url(#rib)"
        />
      </svg>
    </div>
  );
}