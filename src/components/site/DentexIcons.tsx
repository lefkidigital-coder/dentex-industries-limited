/**
 * Dentex line-icon family — one consistent SVG system used by Industries
 * Served and Core Services. 24px grid, 1.6 stroke, rounded joins, currentColor.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------------- Industries ---------------- */

export function IconPharma(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 2.75h6v2.5H9z" />
      <path d="M8 5.25h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Z" />
      <path d="M12 11v5M9.5 13.5h5" />
    </Svg>
  );
}

export function IconFoodBeverage(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 2.75h3v2.2c0 .8-.5 1.2-1 1.8-.6.7-1 1.3-1 2.3v10.2a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2V9.05c0-1-.4-1.6-1-2.3-.5-.6-1-1-1-1.8V2.75" />
      <path d="M15 8.75h5a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V9.75a1 1 0 0 1 1-1Z" />
      <path d="M15.5 6.75h4v2h-4z" />
    </Svg>
  );
}

export function IconCosmetics(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 3h3.2v2.6H4.5z" />
      <path d="M7.7 4.3h2.6M10.3 4.3v2.4l-2.6 1.6" />
      <path d="M5 9.6h4.6a1 1 0 0 1 1 1v9.4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.4a1 1 0 0 1 1-1Z" />
      <path d="M15 11.5h4.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Z" />
      <path d="M14.6 9.5h5.4v2h-5.4z" />
    </Svg>
  );
}

export function IconAutomotive(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6.5h8.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19V8A1.5 1.5 0 0 1 4 6.5Z" />
      <path d="M6.5 6.5V4.2h3.5v2.3M14 9h2.2a1.6 1.6 0 0 1 1.6 1.6v1.1" />
      <circle cx="18.4" cy="16.2" r="3.1" />
      <path d="M18.4 13.1v-1.2M18.4 20.5v-1.2M21.5 16.2h-1.2M16.5 16.2h-1.2" />
    </Svg>
  );
}

export function IconAgrochemical(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 7h7a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 12 20.5H5A1.5 1.5 0 0 1 3.5 19V8.5A1.5 1.5 0 0 1 5 7Z" />
      <path d="M7 7V4.5h3V7" />
      <path d="M21 5.2c0 4-2.4 6.4-5.6 6.9 0-4 2.3-6.5 5.6-6.9Z" />
      <path d="M15.4 15.2c1.6-2 3.4-3.2 5.6-4.1" />
    </Svg>
  );
}

export function IconIndustrial(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 20.5V10l5.2 3.3V10l5.2 3.3V10L18.6 13V20.5Z" />
      <path d="M18.6 13V6.2h2.6V20.5" />
      <path d="M6.6 17h1.8M11.4 17h1.8" />
    </Svg>
  );
}

/* ---------------- Core services ---------------- */

export function IconPackaging(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.6 8.4 12 4.5l7.4 3.9v7.2L12 19.5l-7.4-3.9Z" />
      <path d="M4.6 8.4 12 12.3l7.4-3.9M12 12.3v7.2" />
    </Svg>
  );
}

export function IconInjectionMoulding(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 4.5h17M3.5 19.5h17" />
      <path d="M6.5 4.5v3.2h11V4.5M6.5 19.5v-3.2h11v3.2" />
      <path d="M9.5 9.2h5a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1Z" />
    </Svg>
  );
}

export function IconBlowMoulding(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 2.8h4v2.4c0 1 .6 1.5 1.2 2.2.8.9 1.3 1.8 1.3 3.1v8.4a2 2 0 0 1-2 2H9.5a2 2 0 0 1-2-2v-8.4c0-1.3.5-2.2 1.3-3.1C9.4 6.7 10 6.2 10 5.2V2.8Z" />
      <path d="M7.6 12.6h8.9" />
    </Svg>
  );
}

export function IconQuality(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 4.8 5.8v5.4c0 4.3 3 8.1 7.2 9.4 4.2-1.3 7.2-5.1 7.2-9.4V5.8Z" />
      <path d="m9 11.8 2.2 2.2L15.4 9.8" />
    </Svg>
  );
}

export function IconCustomSolutions(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10.2 3.5h3.6v2.1a1.6 1.6 0 0 0 2.5 1.3l1.6 1.6a1.6 1.6 0 0 0 1.3 2.5v3.6a1.6 1.6 0 0 0-1.3 2.5l-1.6 1.6a1.6 1.6 0 0 0-2.5 1.3h-3.6a1.6 1.6 0 0 0-2.5-1.3l-1.6-1.6a1.6 1.6 0 0 0-1.3-2.5v-3.6A1.6 1.6 0 0 0 6.1 8.5l1.6-1.6a1.6 1.6 0 0 0 2.5-1.3Z" />
      <circle cx="12" cy="12" r="2.6" />
    </Svg>
  );
}

export function IconLogistics(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 6.5h10.4v10H2.8z" />
      <path d="M13.2 9.8h3.6l3 3v3.7h-6.6z" />
      <circle cx="7" cy="18.2" r="1.7" />
      <circle cx="17" cy="18.2" r="1.7" />
    </Svg>
  );
}
