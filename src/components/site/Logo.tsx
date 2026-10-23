import horizontal from "@/assets/dentex-logo-horizontal.webp.asset.json";
import icon from "@/assets/dentex-icon.webp.asset.json";
import stacked from "@/assets/dentex-logo-stacked.webp.asset.json";

export const LOGO_HORIZONTAL = horizontal.url;
export const LOGO_ICON = icon.url;
export const LOGO_STACKED = stacked.url;

type Variant = "horizontal" | "icon" | "stacked";

const SRC: Record<Variant, string> = {
  horizontal: LOGO_HORIZONTAL,
  icon: LOGO_ICON,
  stacked: LOGO_STACKED,
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
  return <img src={SRC[variant]} alt={alt} className={className} loading="eager" decoding="async" />;
}