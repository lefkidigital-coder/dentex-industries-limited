import type { ProductSpecs } from "@/data/products";

const ROWS: { key: keyof ProductSpecs; label: string }[] = [
  { key: "material", label: "Material" },
  { key: "capacityRange", label: "Capacity Range" },
  { key: "neckClosure", label: "Neck / Closure Size" },
  { key: "weight", label: "Weight" },
  { key: "moq", label: "MOQ" },
  { key: "industryFit", label: "Industry Fit" },
];

export function SpecTable({ specs }: { specs: ProductSpecs }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Product specifications</caption>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={r.key} className={i % 2 ? "bg-tech-grey/60" : ""}>
              <th scope="row" className="w-1/2 sm:w-2/5 px-4 sm:px-6 py-4 align-top text-xs font-semibold uppercase tracking-wider text-primary">
                {r.label}
              </th>
              <td className="px-4 sm:px-6 py-4 align-top text-muted-foreground">{specs[r.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}