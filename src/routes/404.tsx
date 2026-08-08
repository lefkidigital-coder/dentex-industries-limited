import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { NotFoundContent } from "@/components/site/NotFoundContent";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page Not Found — Dentex Industries Ltd" },
      { name: "description", content: "The page you are looking for isn't available. Return home or browse Dentex packaging products." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page Not Found — Dentex Industries Ltd" },
      { property: "og:description", content: "The page you are looking for isn't available." },
    ],
  }),
  component: () => (
    <Layout>
      <NotFoundContent />
    </Layout>
  ),
});
