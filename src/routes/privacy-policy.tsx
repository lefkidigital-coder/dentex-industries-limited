import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dentex Industries Ltd" },
      { name: "description", content: "How Dentex Industries Limited handles information submitted through this website. Draft content pending review." },
      { property: "og:title", content: "Privacy Policy — Dentex Industries Ltd" },
      { property: "og:description", content: "How Dentex Industries Limited handles information submitted through this website." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we handle information submitted through this website."
      updated="Pending review"
    >
      <LegalSection heading="Introduction">
        <p>
          This policy describes how {COMPANY.name} handles information provided by visitors to this website. It applies
          to this website only.
        </p>
      </LegalSection>
      <LegalSection heading="Information we collect">
        <p>
          We collect the information you choose to submit through our enquiry and quote request forms. This may include
          your name, email address, telephone number, company name, industry, the product or category you are
          interested in, an estimated order size, and the content of your message.
        </p>
      </LegalSection>
      <LegalSection heading="How we use your information">
        <p>
          Information submitted through this website is used to respond to your enquiry, prepare quotations, and
          communicate with you about the products and services you have asked about.
        </p>
      </LegalSection>
      <LegalSection heading="Sharing your information">
        <p>
          We do not sell information submitted through this website. Information may be shared internally within
          {" "}{COMPANY.name} with the team members handling your enquiry.
        </p>
      </LegalSection>
      <LegalSection heading="Retention">
        <p>
          Retention periods for enquiry data are pending confirmation by {COMPANY.name} and will be published here once
          approved.
        </p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>
          You may contact us at any time to ask what information we hold about you, to request a correction, or to ask
          us to stop contacting you.
        </p>
      </LegalSection>
      <LegalSection heading="Third-party content">
        <p>
          This website embeds a map provided by a third party and links to WhatsApp for direct messaging. Use of those
          services is governed by their own terms and privacy policies.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.address}
          <br />
          <a className="text-accent font-semibold" href={COMPANY.phonePrimaryHref}>{COMPANY.phonePrimary}</a>
          {" · "}
          <a className="text-accent font-semibold" href={COMPANY.phoneSecondaryHref}>{COMPANY.phoneSecondary}</a>
          <br />
          <a className="text-accent font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
