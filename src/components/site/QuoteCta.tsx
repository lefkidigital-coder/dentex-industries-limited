import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsApp";
import { Reveal } from "./Layout";

export function QuoteCta({
  title = "Ready to discuss your packaging?",
  subtitle = "Request a quote or talk to our team directly, we typically respond within one business day.",
  productName,
}: {
  title?: string;
  subtitle?: string;
  productName?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">{subtitle}</p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                search={productName ? { product: productName } : undefined}
                className="mould-press inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg"
              >
                Request a Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <WhatsAppButton
                message={
                  productName
                    ? `Hi, I'd like to enquire about Dentex packaging products, specifically ${productName}.`
                    : undefined
                }
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}