import horizontal from "@/assets/dentex-logo-horizontal.webp.asset.json";
import icon from "@/assets/dentex-icon.webp.asset.json";
import stacked from "@/assets/dentex-logo-stacked.webp.asset.json";
import { sized } from "@/lib/images";

export const LOGO_HORIZONTAL = horizontal.url;
export const LOGO_ICON = icon.url;
export const LOGO_STACKED = stacked.url;

type Variant = "horizontal" | "icon" | "stacked";

/**
 * The logo never shows larger than about 120px wide (horizontal), 36px (icon)
 * or 130px (stacked), so the page loads copies sized for 3x screens instead of
 * the 1200px, 512px and 800px masters.
 */
const SRC: Record<Variant, string> = {
  horizontal: sized(LOGO_HORIZONTAL, 360),
  icon: sized(LOGO_ICON, 128),
  stacked: sized(LOGO_STACKED, 400),
};

const SIZE: Record<Variant, { width: number; height: number }> = {
  horizontal: { width: 360, height: 120 },
  icon: { width: 128, height: 128 },
  stacked: { width: 400, height: 400 },
};

export function Logo({
  variant = "horizontal",
  className = "",
  alt = "Dentex Industries Limited",
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
}) {
  return <img src={SRC[variant]} {...SIZE[variant]} alt={alt} className={className} loading="eager" decoding="async" />;
}
