/**
 * Product content, separated from presentation so it maps cleanly onto a
 * future WooCommerce catalogue (category slug + product slug + attributes).
 */

export type CategorySlug = "pharmaceutical" | "food-beverage" | "industrial";

export type ProductCategory = {
  slug: CategorySlug;
  name: string;
  title: string;
  intro: string;
  metaDescription: string;
};

export type ProductSpecs = {
  material: string;
  capacityRange: string;
  neckClosure: string;
  weight: string;
  moq: string;
  industryFit: string;
};

export type Product = {
  slug: string;
  title: string;
  category: CategorySlug;
  desc: string;
  highlights: string[];
  specs: ProductSpecs;
  images: { main: string; alternates: string[]; details: string[] };
};

export const ON_REQUEST = "Available on request";

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    title: "Pharmaceutical Packaging",
    intro:
      "Precision injection-moulded packaging for the pharmaceutical industry, ensuring product safety and integrity.",
    metaDescription:
      "Pharmaceutical-grade rigid plastic packaging from Dentex Industries Ltd — bottles and containers manufactured in Nairobi, Kenya.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    title: "Food & Beverage Packaging",
    intro:
      "Durable and visually appealing rigid plastic packaging for restaurants, ice cream manufacturers, and beverage companies.",
    metaDescription:
      "Food and beverage rigid plastic packaging from Dentex Industries Ltd — tubs, bottles and takeaway packs made in Kenya.",
  },
  {
    slug: "industrial",
    name: "Industrial",
    title: "Industrial & Custom Packaging",
    intro:
      "Tailored, high-quality plastic solutions for a diverse range of industrial applications.",
    metaDescription:
      "Industrial and custom rigid plastic packaging from Dentex Industries Ltd — containers, closures and bespoke mouldings.",
  },
];

function gallery(seed: string) {
  return {
    main: `https://picsum.photos/seed/${seed}/1200/900`,
    alternates: [
      `https://picsum.photos/seed/${seed}-alt1/1200/900`,
      `https://picsum.photos/seed/${seed}-alt2/1200/900`,
    ],
    details: [`https://picsum.photos/seed/${seed}-detail/1200/900`],
  };
}

export const PRODUCTS: Product[] = [
  {
    slug: "pharmaceutical-grade-bottles",
    title: "Pharmaceutical Grade Bottles",
    category: "pharmaceutical",
    desc: "Tamper-evident HDPE bottles engineered for liquid and solid pharmaceutical formulations.",
    highlights: ["Capacities: 30ml – 1L", "Tamper-evident closures", "Food-grade certified", "Custom labeling"],
    specs: {
      material: "HDPE / PP, food and pharma grade",
      capacityRange: "30ml – 1L",
      neckClosure: "Tamper-evident closures",
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Pharmaceutical",
    },
    images: gallery("prod-pharma1"),
  },
  {
    slug: "tablet-capsule-containers",
    title: "Tablet & Capsule Containers",
    category: "pharmaceutical",
    desc: "Wide-mouth jars with child-resistant caps for tablets, capsules, and powders.",
    highlights: ["Wide-mouth design", "Child-resistant lids", "Moisture barrier"],
    specs: {
      material: "PET / HDPE",
      capacityRange: ON_REQUEST,
      neckClosure: "Wide-mouth, child-resistant lids",
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Pharmaceutical",
    },
    images: gallery("prod-pharma2"),
  },
  {
    slug: "ice-cream-tubs",
    title: "Ice Cream Tubs",
    category: "food-beverage",
    desc: "Durable, freezer-safe tubs in a range of capacities for premium dairy brands.",
    highlights: ["100ml – 5L sizes", "Freezer & microwave safe", "IML decoration available"],
    specs: {
      material: "Polypropylene (PP)",
      capacityRange: "100ml – 5L",
      neckClosure: ON_REQUEST,
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Food & Beverage",
    },
    images: gallery("prod-icecream"),
  },
  {
    slug: "beverage-bottles",
    title: "Beverage Bottles",
    category: "food-beverage",
    desc: "Clear, lightweight PET bottles for water, juices, and carbonated beverages.",
    highlights: ["250ml – 2L", "Crystal-clear PET", "Custom neck finishes"],
    specs: {
      material: "PET, recyclable",
      capacityRange: "250ml – 2L",
      neckClosure: "Custom neck finishes",
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Food & Beverage",
    },
    images: gallery("prod-bottle"),
  },
  {
    slug: "restaurant-takeaway-packs",
    title: "Restaurant Takeaway Packs",
    category: "food-beverage",
    desc: "Microwave-safe containers tailored for restaurants and quick-service brands.",
    highlights: ["Stackable", "Microwave & freezer safe", "Branded inserts available"],
    specs: {
      material: "PP",
      capacityRange: ON_REQUEST,
      neckClosure: ON_REQUEST,
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Food & Beverage",
    },
    images: gallery("prod-takeaway"),
  },
  {
    slug: "industrial-chemical-containers",
    title: "Industrial Chemical Containers",
    category: "industrial",
    desc: "Heavy-duty containers for industrial chemicals and lubricants.",
    highlights: ["1L – 25L", "Chemical resistant", "Stackable for transport"],
    specs: {
      material: "HDPE industrial grade",
      capacityRange: "1L – 25L",
      neckClosure: ON_REQUEST,
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Industrial / Chemicals",
    },
    images: gallery("prod-industrial1"),
  },
  {
    slug: "custom-moulded-solutions",
    title: "Custom Moulded Solutions",
    category: "industrial",
    desc: "Bespoke injection-moulded packaging tailored to your product specifications.",
    highlights: ["Custom tooling", "Low to high volume", "Material consultation"],
    specs: {
      material: "Various polymers",
      capacityRange: ON_REQUEST,
      neckClosure: ON_REQUEST,
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Industrial / Custom",
    },
    images: gallery("prod-custom"),
  },
  {
    slug: "closures-caps",
    title: "Closures & Caps",
    category: "industrial",
    desc: "Precision-engineered closures for a wide range of bottle and container types.",
    highlights: ["Multiple thread sizes", "Tamper-evident options", "Custom colors"],
    specs: {
      material: "PP / HDPE",
      capacityRange: ON_REQUEST,
      neckClosure: "Multiple thread sizes, tamper-evident options",
      weight: ON_REQUEST,
      moq: ON_REQUEST,
      industryFit: "Industrial / Custom",
    },
    images: gallery("prod-caps"),
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const productsByCategory = (slug: CategorySlug) =>
  PRODUCTS.filter((p) => p.category === slug);
export const getProduct = (category: string, slug: string) =>
  PRODUCTS.find((p) => p.category === category && p.slug === slug);
export const relatedProducts = (product: Product, limit = 3) =>
  PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
export const categoryName = (slug: CategorySlug) =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;