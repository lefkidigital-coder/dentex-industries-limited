import dawa from "@/assets/logo-dawa-life-sciences.png.asset.json";
import brava from "@/assets/logo-brava.png.asset.json";
import kepro from "@/assets/logo-kepro.png.asset.json";
import ellys from "@/assets/logo-ellys.png.asset.json";
import laboratoryAllied from "@/assets/logo-laboratory-allied.png.asset.json";
import vetcare from "@/assets/logo-vetcare-africa.png.asset.json";
import ultravetis from "@/assets/logo-ultravetis.png.asset.json";
import lacheka from "@/assets/logo-lacheka.png.asset.json";
import grounded from "@/assets/logo-grounded.png.asset.json";
import lakiLaki from "@/assets/logo-laki-laki.png.asset.json";

/**
 * Trusted Across Industries, client logos are used exactly as supplied.
 * Containers balance the logos by visual size; artwork is never cropped.
 */
const LOGOS = [
  { name: "Dawa Life Sciences", src: dawa.url, className: "h-14 sm:h-16" },
  { name: "Laboratory & Allied Ltd", src: laboratoryAllied.url, className: "h-14 sm:h-16" },
  { name: "VetCare Africa", src: vetcare.url, className: "h-16 sm:h-20" },
  { name: "Ultravetis", src: ultravetis.url, className: "h-11 sm:h-13" },
  { name: "Lacheka Animal Health and Nutrition", src: lacheka.url, className: "h-16 sm:h-20" },
  { name: "BRAVA Food Industries Ltd", src: brava.url, className: "h-11 sm:h-14" },
  { name: "Laki Laki", src: lakiLaki.url, className: "h-12 sm:h-14" },
  { name: "Grounded", src: grounded.url, className: "h-10 sm:h-12" },
  { name: "KEPRO, Kenya Extended Producer Responsibility Organization", src: kepro.url, className: "h-10 sm:h-12" },
  { name: "ELLYS", src: ellys.url, className: "h-14 sm:h-16" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Trusted Across Industries
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
            Partnering with leading brands
          </h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-accent/60" />
        </div>

        <ul className="mt-10 sm:mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-5">
          {LOGOS.map((logo) => (
            <li key={logo.name}>
              <div className="flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-border/60 bg-card px-5 py-6 sm:px-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_16px_40px_-18px_rgb(10_37_64/0.25)]">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className={`w-auto max-w-full object-contain ${logo.className}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
