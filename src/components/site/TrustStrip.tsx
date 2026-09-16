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
 * Every logo sits in an identical container with the same maximum height and
 * width, object-contain and centred alignment, so nothing is stretched,
 * cropped or visually oversized relative to the rest.
 */
const LOGOS = [
  { name: "Dawa Life Sciences", src: dawa.url },
  { name: "Laboratory & Allied Ltd", src: laboratoryAllied.url },
  { name: "VetCare Africa", src: vetcare.url },
  { name: "Ultravetis", src: ultravetis.url },
  { name: "Lacheka Animal Health and Nutrition", src: lacheka.url },
  { name: "BRAVA Food Industries Ltd", src: brava.url },
  { name: "Laki Laki", src: lakiLaki.url },
  { name: "Grounded", src: grounded.url },
  { name: "KEPRO, Kenya Extended Producer Responsibility Organization", src: kepro.url },
  { name: "ELLYS", src: ellys.url },
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
              <div className="flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-border/60 bg-card px-6 py-7 sm:px-8 sm:py-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_16px_40px_-18px_rgb(10_37_64/0.25)]">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-full max-w-full w-auto h-auto object-contain object-center"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
