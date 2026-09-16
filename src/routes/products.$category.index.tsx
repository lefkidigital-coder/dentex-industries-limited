import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout, PageHero, Reveal } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductGrid } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { getCategory, productsByCategory, type CategorySlug } from "@/data/products";

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category not found | Dentex Industries Ltd" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.category.title} | Dentex Industries Ltd`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.category.metaDescription },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.category.metaDescription },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const products = productsByCategory(category.slug as CategorySlug);

  return (
    <Layout>
      <PageHero eyebrow={category.name} title={category.title} subtitle={category.intro} />

      <section className="pt-8 sm:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: category.name },
            ]}
          />
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                {category.name} range
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{category.intro}</p>
            </div>
          </Reveal>
          <div className="mt-8 sm:mt-10">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <QuoteCta
        title={`Need ${category.name.toLowerCase()} packaging?`}
        subtitle="Send us your specification and we'll come back with a quote, or message our team on WhatsApp."
      />
    </Layout>
  );
}
