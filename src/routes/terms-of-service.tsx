import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Dentex Industries Ltd" },
      { name: "description", content: "Terms governing use of the Dentex Industries Limited website. Draft content pending review." },
      { property: "og:title", content: "Terms of Service — Dentex Industries Ltd" },
      { property: "og:description", content: "Terms governing use of the Dentex Industries Limited website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The terms that govern your use of this website."
      updated="Pending review"
    >
      <LegalSection heading="About these terms">
        <p>
          These terms apply to your use of the {COMPANY.name} website. By using the website you agree to them. If you do
          not agree, please do not use the website.
        </p>
      </LegalSection>
      <LegalSection heading="Use of the website">
        <p>
          You may browse this website and submit enquiries for legitimate business purposes. You agree not to misuse the
          website or attempt to interfere with its normal operation.
        </p>
      </LegalSection>
      <LegalSection heading="Product information">
        <p>
          Product descriptions and specifications shown on this website are provided for general guidance. Where a
          specification is marked "Available on request", it will be confirmed in writing as part of a quotation.
        </p>
      </LegalSection>
      <LegalSection heading="Quotations and orders">
        <p>
          Submitting an enquiry or quote request through this website does not create an order or a contract. Orders are
          subject to a separate written quotation and confirmation from {COMPANY.name}.
        </p>
      </LegalSection>
      <LegalSection heading="Intellectual property">
        <p>
          The {COMPANY.name} name, logo, and the content of this website belong to {COMPANY.name} unless otherwise
          stated, and may not be reproduced without permission.
        </p>
      </LegalSection>
      <LegalSection heading="Third-party links">
        <p>
          This website links to third-party services, including WhatsApp and an embedded map. We are not responsible for
          the content or availability of those services.
        </p>
      </LegalSection>
      <LegalSection heading="Changes">
        <p>These terms may be updated. The current version is the one published on this page.</p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a className="text-accent font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
