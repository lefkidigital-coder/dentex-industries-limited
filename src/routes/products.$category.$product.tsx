import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductGallery } from "@/components/site/ProductGallery";
import { SpecTable } from "@/components/site/SpecTable";
import { ProductGrid } from "@/components/site/ProductCard";
import { WhatsAppButton } from "@/components/site/WhatsApp";
import { QuoteCta } from "@/components/site/QuoteCta";
import { getCategory, getProduct, relatedProducts } from "@/data/products";

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    const product = getProduct(params.category, params.product);
    if (!category || !product) throw notFound();
    return { category, product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found | Dentex Industries Ltd" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.product.title} | Dentex Industries Ltd`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.product.desc },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.product.desc },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { category, product } = Route.useLoaderData();
  const related = relatedProducts(product);
  const waMessage = `Hi, I'd like to enquire about Dentex packaging products, specifically ${product.title}.`;

  return (
    <Layout>
      {/* Product hero */}
      <section className="bg-tech-grey pt-8 pb-12 sm:pt-10 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: category.name, to: "/products/$category", params: { category: category.slug } },
              { label: product.title },
            ]}
          />

          <div className="mt-6 sm:mt-8 grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            <Reveal>
              <ProductGallery product={product} />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{category.name}</p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className="mt-5 text-muted-foreground leading-relaxed">{product.desc}</p>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {product.highlights.map((h: string) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {(product.colours || product.colourNote) && (
                  <div className="mt-8 border-t border-border/60 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Available Colours
                    </p>
                    {product.colours && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.colours.map((c) => (
                          <span
                            key={c.name}
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm font-medium text-primary"
                          >
                            <span
                              className="h-4 w-4 rounded-full border border-border"
                              style={{ backgroundColor: c.hex }}
                              aria-hidden
                            />
                            {c.name}
                          </span>
                        ))}
                      </div>
                    )}
                    {product.colourNote && (
                      <p className="mt-3 text-sm text-muted-foreground">{product.colourNote}</p>
                    )}
                  </div>
                )}


                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ product: product.title }}
                    className="mould-press inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-md"
                  >
                    Request a Quote <ArrowRight className="h-5 w-5" />
                  </Link>
                  <WhatsAppButton message={waMessage} label="Ask about this product on WhatsApp" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Specifications</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">Technical details</h2>
            </div>
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <SpecTable specs={product.specs} />
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-tech-grey py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Related</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  More from {category.name}
                </h2>
              </div>
            </Reveal>
            <div className="mt-10">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      )}

      <QuoteCta
        title={`Request a quote for ${product.title}`}
        subtitle="Share your volumes and specification, our team will respond with pricing and lead times."
        productName={product.title}
      />
    </Layout>
  );
}
